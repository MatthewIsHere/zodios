import express from "express";
import type { AddressInfo } from "net";
import { BatchRequest } from "./batch-request";

const responseData = `Preamble
can be anything and should be ignored
--batch__1675206000000__batch
Content-Type: application/http
Content-ID: <response-PLACEHOLDER1>

HTTP/1.1 200 OK
Content-Type: application/json
ETag: "etag/pony"

{
  "id": 1,
  "name": "john doe"
}
--batch__1675206000000__batch
Content-Type: application/http
Content-ID: <response-PLACEHOLDER2>

HTTP/1.1 200 OK
Content-Type: application/json;
  charset=UTF-8
ETag: "etag/sheep"

{
  "id": 2,
  "name": "jane doe"
}
--batch__1675206000000__batch
Content-Type: application/http
Content-ID: <response-PLACEHOLDER3>

HTTP/1.1 304 Not Modified


--batch__1675206000000__batch--
Epilogue can be anything
and should be ignored`.replace(/\n/g, "\r\n");

describe("BatchRequest", () => {
  let app: express.Express;
  let server: ReturnType<typeof app.listen>;
  let port: number;

  beforeAll(() => {
    const app = express();
    app.use(express.json());
    app.use(express.raw({ type: "multipart/mixed" }));

    app.post("/batch", (req, res) => {
      res.setHeader(
        "Content-Type",
        "multipart/mixed; boundary=batch__1675206000000__batch"
      );
      const body = req.body.toString();
      // extract the requests ids
      const regex = /content-id:\s*<([^>]+)>/g;
      const matches = [...body.matchAll(regex)];
      let response = responseData;
      matches
        .map((match) => match[1])
        .forEach((id, i) => {
          // replace the response placeholders with the actual response
          response = response.replace(`PLACEHOLDER${i + 1}`, id);
        });
      res.status(200).send(response);
    });

    app.get("/users/:id", (req, res) => {
      res.status(200).json({
        id: req.params.id,
        name: "john doe",
      });
    });

    server = app.listen(0);
    port = (server.address() as AddressInfo).port;
  });

  afterAll((done) => {
    server.close(done);
  });

  it("should be able to fetch one request", async () => {
    const client = new BatchRequest(`http://localhost:${port}/batch`, {
      method: "POST",
    });
    const user7 = await client
      .fetch(`http://localhost:${port}/users/7`)
      .then((res) => res.json());

    expect(user7).toEqual({
      id: "7",
      name: "john doe",
    });
  });

  it("should be able to fetch multiple requests", async () => {
    const client = new BatchRequest(`http://localhost:${port}/batch`, {
      method: "POST",
    });
    const [user1, user2, nothing] = await Promise.all([
      client
        .fetch(`http://localhost:${port}/users/1`)
        .then((res) => res.json()),
      client
        .fetch(`http://localhost:${port}/users/2`)
        .then((res) => res.json()),
      client.fetch(`http://localhost:${port}/users/1`),
    ]);

    expect(user1).toEqual({
      id: 1,
      name: "john doe",
    });
    expect(user2).toEqual({
      id: 2,
      name: "jane doe",
    });
    expect(nothing.status).toBe(304);
  });

  it("should error if batch endpoint errors", async () => {
    const client = new BatchRequest(`http://localhost:${port}/batch-error`, {
      method: "POST",
    });

    let error;
    try {
      const [user1, user2, nothing] = await Promise.all([
        client
          .fetch(`http://localhost:${port}/users/1`)
          .then((res) => res.json()),
        client
          .fetch(`http://localhost:${port}/users/2`)
          .then((res) => res.json()),
        client.fetch(`http://localhost:${port}/users/1`),
      ]);
    } catch (e) {
      error = e;
    }

    expect(error).toBeDefined();
    expect((error as Error).message).toBe(
      "Batch endpoint error: 404 Not Found"
    );
  });

  it("should cancel one request if asked to", async () => {
    // use signal to cancel the request 2

    const controller = new AbortController();
    const client = new BatchRequest(`http://localhost:${port}/batch`, {
      method: "POST",
    });

    const [user1Promise, user2Promise, nothingPromise] = [
      client
        .fetch(`http://localhost:${port}/users/1`)
        .then((res) => res.json()),
      client.fetch(`http://localhost:${port}/users/2`, {
        signal: controller.signal,
      }),
      client.fetch(`http://localhost:${port}/users/1`),
    ];
    controller.abort();

    const [user1, user2, nothing] = await Promise.allSettled([
      user1Promise,
      user2Promise,
      nothingPromise,
    ]);

    expect(user1.status).toBe("fulfilled");
    expect(user2.status).toBe("rejected");
    expect(nothing.status).toBe("fulfilled");
  });

  it("should cancel all requests if asked to", async () => {
    // use signal to cancel the BatchRequest

    const controller = new AbortController();
    const client = new BatchRequest(`http://localhost:${port}/batch`, {
      method: "POST",
      signal: controller.signal,
    });

    const [user1Promise, user2Promise, nothingPromise] = [
      client
        .fetch(`http://localhost:${port}/users/1`)
        .then((res) => res.json()),
      client.fetch(`http://localhost:${port}/users/2`),
      client.fetch(`http://localhost:${port}/users/1`),
    ];
    controller.abort();

    const [user1, user2, nothing] = await Promise.allSettled([
      user1Promise,
      user2Promise,
      nothingPromise,
    ]);

    expect(user1.status).toBe("rejected");
    expect(user2.status).toBe("rejected");
    expect(nothing.status).toBe("rejected");
  });
});
