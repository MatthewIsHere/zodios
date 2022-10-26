"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(l,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},i="Client API instance",s={unversionedId:"client/client",id:"client/client",title:"Client API instance",description:"Use Zodios instance to fetch data from multiple API endpoints.",source:"@site/docs/client/client.md",sourceDirName:"client",slug:"/client/",permalink:"/docs/client/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Zodios client",permalink:"/docs/category/zodios-client"},next:{title:"Client Error Handling",permalink:"/docs/client/error"}},l={},p=[{value:"Create Zodios Client instance",id:"create-zodios-client-instance",level:2},{value:"Options",id:"options",level:3},{value:"Zodios attributes",id:"zodios-attributes",level:2},{value:"<code>baseURL</code>",id:"baseurl",level:3},{value:"<code>axios</code>",id:"axios",level:3},{value:"Zodios methods",id:"zodios-methods",level:2},{value:"<code>zodios.use</code>",id:"zodiosuse",level:3},{value:"<code>zodios.eject</code>",id:"zodioseject",level:3},{value:"<code>zodios.[alias]</code>",id:"zodiosalias",level:3},{value:"query alias:",id:"query-alias",level:4},{value:"mutation alias",id:"mutation-alias",level:4},{value:"<code>zodios.request</code>",id:"zodiosrequest",level:3},{value:"<code>zodios.get</code>",id:"zodiosget",level:3},{value:"<code>zodios.post</code>",id:"zodiospost",level:3},{value:"<code>zodios.put</code>",id:"zodiosput",level:3},{value:"<code>zodios.patch</code>",id:"zodiospatch",level:3},{value:"<code>zodios.delete</code>",id:"zodiosdelete",level:3},{value:"Request Options",id:"request-options",level:2},{value:"Advanced examples",id:"advanced-examples",level:2},{value:"Use zod transformations",id:"use-zod-transformations",level:3},{value:"Send multipart/form-data requests",id:"send-multipartform-data-requests",level:3},{value:"Send application/x-www-form-urlencoded requests",id:"send-applicationx-www-form-urlencoded-requests",level:3},{value:"CRUD helper",id:"crud-helper",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"client-api-instance"},"Client API instance"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"Zodios")," instance to fetch data from multiple API endpoints.",(0,r.kt)("br",{parentName:"p"}),"\n","It's an API client based on ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/zod"},"zod")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/axios"},"axios")," with a powerful plugin system."),(0,r.kt)("admonition",{title:"Zodios API client is like no one at the moment to make REST API fetching.",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"All your parameters and responses are fully typed. And by default they are also validated at runtime to prevent unrecoverable errors.",(0,r.kt)("br",{parentName:"p"}),"\n","Check the simple ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/api-definition"},"API definition format")," that powers full end-to-end typesafety.")),(0,r.kt)("h2",{id:"create-zodios-client-instance"},"Create Zodios Client instance"),(0,r.kt)("p",null,"When creating an instance or zodios api client, you need to at least provide the api definition.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"baseURL")," is optional in browsers and will default to the current page url."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"new Zodios(baseURL: string, api: ZodiosEnpointDescriptions, options?: ZodiosOptions)\n// or\nnew Zodios(api: ZodiosEnpointDescriptions, options?: ZodiosOptions)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"You can predefine some schemas to reuse them in your API definition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Zodios, makeErrors } from "@zodios/core";\nimport z from "zod";\n\nconst errors = makeErrors([\n  {\n    status: "default",\n    schema: z.object({\n      error: z.object({\n        code: z.number(),\n        message: z.string(),\n      }),\n    }),\n  },\n]);\n\nconst user = z.object({\n  id: z.number(),\n  name: z.string(),\n  age: z.number().positive(),\n  email: z.string().email(),\n});\n')),(0,r.kt)("p",null,"Then you can define your API endpoints directly in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Zodios")," constructor."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const apiClient = new Zodios(\'/api\', [\n  {\n    method: "get",\n    path: "/users",\n    alias: "getUsers",\n    response: z.array(user),\n  },\n  {\n    method: "get",\n    path: "/users/:id",\n    alias: "getUser",\n    response: user,\n    errors,\n  },\n  {\n    method: "post",\n    path: "/users",\n    alias: "createUser",\n    parameters: [\n      {\n        name: "user",\n        type: "Body",\n        schema: user.omit({ id: true }),\n      },\n    ],\n    response: user,\n    errors,\n  },  \n]);\n')),(0,r.kt)("p",null,"And finally you can use it to fetch data from your API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// get all users\nconst users = await apiClient.getUsers();\n// get user by id\nconst user = await apiClient.getUser({ params: { id: 1 } });\n// create user\nconst newUser = await apiCLient.createUser({ name: "John", age: 20, email: "jodn@doe.com"});\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Path parameters do not need to be defined in the API definition ",(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"parameters")," array."),(0,r.kt)("p",{parentName:"admonition"},"Indeed, they are automatically deduced from the path and added to the request parameters implicitly.")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("p",null,"Zodios API client constructor options ",(0,r.kt)("inlineCode",{parentName:"p"},"ZodiosOptions")," are straightforward."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"validate"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean ","|"," all ","|"," none ","|"," request ","|"," response"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Validate parameters and responses at runtime.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"axiosInstance"),(0,r.kt)("td",{parentName:"tr",align:null},"AxiosInstance"),(0,r.kt)("td",{parentName:"tr",align:null},"axios.create()"),(0,r.kt)("td",{parentName:"tr",align:null},"add your own axios instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"axiosConfig"),(0,r.kt)("td",{parentName:"tr",align:null},"AxiosRequestConfig"),(0,r.kt)("td",{parentName:"tr",align:null},"{}"),(0,r.kt)("td",{parentName:"tr",align:null},"add your own default axios config")))),(0,r.kt)("h2",{id:"zodios-attributes"},"Zodios attributes"),(0,r.kt)("h3",{id:"baseurl"},(0,r.kt)("inlineCode",{parentName:"h3"},"baseURL")),(0,r.kt)("p",null,"access ",(0,r.kt)("inlineCode",{parentName:"p"},"baseURL")," property to get the base url of the api."),(0,r.kt)("h3",{id:"axios"},(0,r.kt)("inlineCode",{parentName:"h3"},"axios")),(0,r.kt)("p",null,"access ",(0,r.kt)("inlineCode",{parentName:"p"},"axios")," property to get back zodios internal axios instance."),(0,r.kt)("h2",{id:"zodios-methods"},"Zodios methods"),(0,r.kt)("h3",{id:"zodiosuse"},(0,r.kt)("inlineCode",{parentName:"h3"},"zodios.use")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"use")," method allows to add a plugin to the client instance. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/client/plugins"},"plugins")," for more information."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"use(plugin: ZodiosPlugin): PluginId;\n// or\nuse(method: string, path: string, plugin: ZodiosPlugin): PluginId;\n// or\nuse(alias: string, plugin: ZodiosPlugin): PluginId;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { pluginFetch } from "@zodios/plugins";\n\napiClient.use(pluginFetch({\n  keepAlive: true,\n}));\n')),(0,r.kt)("h3",{id:"zodioseject"},(0,r.kt)("inlineCode",{parentName:"h3"},"zodios.eject")),(0,r.kt)("p",null,"Eject method allows to remove a plugin from the client instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"eject(pluginId: PluginId): void;\n")),(0,r.kt)("h3",{id:"zodiosalias"},(0,r.kt)("inlineCode",{parentName:"h3"},"zodios.[alias]")),(0,r.kt)("p",null,"You will usually want to use aliases to call your endpoints. You can define them in the ",(0,r.kt)("inlineCode",{parentName:"p"},"alias")," option in your API definition endpoint."),(0,r.kt)("h4",{id:"query-alias"},"query alias:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function [alias](config?: ZodiosRequestOptions): Promise<Response>;\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For more information about ",(0,r.kt)("inlineCode",{parentName:"p"},"ZodiosRequestOptions")," see ",(0,r.kt)("a",{parentName:"p",href:"#request-options"},"request options"),"\nYou don't need to declare path parameters in the ",(0,r.kt)("inlineCode",{parentName:"p"},"parameters")," array of the API definition.\nJust remember you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," to pass path parameters and ",(0,r.kt)("inlineCode",{parentName:"p"},"queries")," to pass query parameters.\nSee examples below.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// identical to api.get("/users")\nconst users = await api.getUsers();\n')),(0,r.kt)("p",null,"with path parameters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// identical to api.get("/users", { params: { id: 1 } })\nconst user = await api.getUser({ params: { id: 1 } }); // GET /users/1\n')),(0,r.kt)("p",null,"with query parameters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// identical to api.get("/users", { queries: { limit: 10 } })\nconst users = await api.getUsers({ queries: { limit: 10 } }); // GET /users?limit=10\n')),(0,r.kt)("h4",{id:"mutation-alias"},"mutation alias"),(0,r.kt)("p",null,"Alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"post"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"put"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"patch"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"delete")," endpoints:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function [alias](body: BodyParam, config?: ZodiosRequestOptions): Promise<Response>;\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For more information about ",(0,r.kt)("inlineCode",{parentName:"p"},"ZodiosRequestOptions")," see ",(0,r.kt)("a",{parentName:"p",href:"#request-options"},"request options"),"\nYou don't need to declare path parameters in the ",(0,r.kt)("inlineCode",{parentName:"p"},"parameters")," array of the API definition.\nJust remember you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," to pass path parameters and ",(0,r.kt)("inlineCode",{parentName:"p"},"queries")," to pass query parameters.\nSee examples below.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// identical to api.post("/users", { name: "John" })\nconst user = await api.createUser({ name: "John" });\n')),(0,r.kt)("p",null,"Is equivalent to the following HTTP request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'POST /users HTTP/1.1\nContent-Type: application/json\n\n{\n  "name": "John"\n}\n')),(0,r.kt)("h3",{id:"zodiosrequest"},(0,r.kt)("inlineCode",{parentName:"h3"},"zodios.request")),(0,r.kt)("p",null,"Generic request method that allows to do both query and mutation calls."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"request(config: ZodiosRequestOptions): Promise<Response>;\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For more information about ",(0,r.kt)("inlineCode",{parentName:"p"},"ZodiosRequestOptions")," see ",(0,r.kt)("a",{parentName:"p",href:"#request-options"},"request options"),"\nYou don't need to declare path parameters in the ",(0,r.kt)("inlineCode",{parentName:"p"},"parameters")," array of the API definition.\nJust remember you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," to pass path parameters and ",(0,r.kt)("inlineCode",{parentName:"p"},"queries")," to pass query parameters.\nSee examples below.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const user = await api.request({\n  method: "post",\n  url: "/users",\n  data: { name: "John" },\n});\n')),(0,r.kt)("h3",{id:"zodiosget"},(0,r.kt)("inlineCode",{parentName:"h3"},"zodios.get")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"get(path: string, config?: ZodiosRequestOptions): Promise<Response>;\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For more information about ",(0,r.kt)("inlineCode",{parentName:"p"},"ZodiosRequestOptions")," see ",(0,r.kt)("a",{parentName:"p",href:"#request-options"},"request options"),"\nYou don't need to declare path parameters in the ",(0,r.kt)("inlineCode",{parentName:"p"},"parameters")," array of the API definition.\nJust remember you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," to pass path parameters and ",(0,r.kt)("inlineCode",{parentName:"p"},"queries")," to pass query parameters.\nSee examples below.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const users = await api.get("/users");\n')),(0,r.kt)("p",null,"with path parameters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const user = await api.get("/users/:id", { params: { id: 1 } }); // GET /users/1\n')),(0,r.kt)("p",null,"with query parameters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const users = await api.get("/users", { queries: { limit: 10 } }); // GET /users?limit=10\n')),(0,r.kt)("h3",{id:"zodiospost"},(0,r.kt)("inlineCode",{parentName:"h3"},"zodios.post")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"post(path: string, body: BodyParam, config?: ZodiosRequestOptions): Promise<Response>;\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For more information about ",(0,r.kt)("inlineCode",{parentName:"p"},"ZodiosRequestOptions")," see ",(0,r.kt)("a",{parentName:"p",href:"#request-options"},"request options"),"\nYou don't need to declare path parameters in the ",(0,r.kt)("inlineCode",{parentName:"p"},"parameters")," array of the API definition.\nJust remember you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," to pass path parameters and ",(0,r.kt)("inlineCode",{parentName:"p"},"queries")," to pass query parameters.\nSee examples below.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const user = await api.post("/users", { name: "John" });\n')),(0,r.kt)("p",null,"Is equivalent to the following HTTP request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'POST /users HTTP/1.1\nAccept: application/json\nContent-Type: application/json\n\n{\n  "name": "John"\n}\n')),(0,r.kt)("h3",{id:"zodiosput"},(0,r.kt)("inlineCode",{parentName:"h3"},"zodios.put")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"put(path: string, body: BodyParam, config?: ZodiosRequestOptions): Promise<Response>;\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For more information about ",(0,r.kt)("inlineCode",{parentName:"p"},"ZodiosRequestOptions")," see ",(0,r.kt)("a",{parentName:"p",href:"#request-options"},"request options"),"\nYou don't need to declare path parameters in the ",(0,r.kt)("inlineCode",{parentName:"p"},"parameters")," array of the API definition.\nJust remember you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," to pass path parameters and ",(0,r.kt)("inlineCode",{parentName:"p"},"queries")," to pass query parameters.\nSee examples below.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const user = await api.put("/users/:id", {id: 1, name: "John" }, { params: { id: 1 } });\n')),(0,r.kt)("p",null,"will send the following HTTP request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'PUT /users/1 HTTP/1.1\nAccept: application/json\nContent-Type: application/json\n\n{\n  "id": 1,\n  "name": "John"\n}\n')),(0,r.kt)("h3",{id:"zodiospatch"},(0,r.kt)("inlineCode",{parentName:"h3"},"zodios.patch")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"patch(path: string, body: BodyParam, config?: ZodiosRequestOptions): Promise<Response>;\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For more information about ",(0,r.kt)("inlineCode",{parentName:"p"},"ZodiosRequestOptions")," see ",(0,r.kt)("a",{parentName:"p",href:"#request-options"},"request options"),"\nYou don't need to declare path parameters in the ",(0,r.kt)("inlineCode",{parentName:"p"},"parameters")," array of the API definition.\nJust remember you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," to pass path parameters and ",(0,r.kt)("inlineCode",{parentName:"p"},"queries")," to pass query parameters.\nSee examples below.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const user = await api.patch("/users/:id", {name: "John" }, {params: {id: 1}});\n')),(0,r.kt)("p",null,"will send the following HTTP request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'PATCH /users/1 HTTP/1.1\nAccept: application/json\nContent-Type: application/json\n\n{\n  "name": "John"\n}\n')),(0,r.kt)("h3",{id:"zodiosdelete"},(0,r.kt)("inlineCode",{parentName:"h3"},"zodios.delete")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"delete(path: string, body: BodyParam, config?: ZodiosRequestOptions): Promise<Response>;\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For more information about ",(0,r.kt)("inlineCode",{parentName:"p"},"ZodiosRequestOptions")," see ",(0,r.kt)("a",{parentName:"p",href:"#request-options"},"request options"),"\nYou don't need to declare path parameters in the ",(0,r.kt)("inlineCode",{parentName:"p"},"parameters")," array of the API definition.\nJust remember you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," to pass path parameters and ",(0,r.kt)("inlineCode",{parentName:"p"},"queries")," to pass query parameters.\nSee examples below.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const user = await api.delete("/users/:id", {params: {id: 1}});\n')),(0,r.kt)("p",null,"will send the following HTTP request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"DELETE /users/1 HTTP/1.1\nAccept: application/json\n")),(0,r.kt)("h2",{id:"request-options"},"Request Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"property"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},'"get" ',"|",' "post" ',"|",' "put" ',"|",' "patch" ',"|",' "delete"'),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP method")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"path to the endpoint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"baseURL"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"optional base url of the API, use it to override the provided one")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"BodyParam"),(0,r.kt)("td",{parentName:"tr",align:null},"optional request body")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},"Record<string, string ","|"," number>"),(0,r.kt)("td",{parentName:"tr",align:null},"optional path parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"queries"),(0,r.kt)("td",{parentName:"tr",align:null},"Record<string, string ","|"," number ","|"," string[] ","|"," number[]>"),(0,r.kt)("td",{parentName:"tr",align:null},"optional query parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"headers"),(0,r.kt)("td",{parentName:"tr",align:null},"Record<string, string>"),(0,r.kt)("td",{parentName:"tr",align:null},"optional request headers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"signal"),(0,r.kt)("td",{parentName:"tr",align:null},"AbortSignal"),(0,r.kt)("td",{parentName:"tr",align:null},"optional AbortSignal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"paramsSerializer"),(0,r.kt)("td",{parentName:"tr",align:null},"(params: QueryParams) => string"),(0,r.kt)("td",{parentName:"tr",align:null},"optional function to serialize query parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"request timeout, default is 0, no timeout")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"withCredentials"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"flag to enable credentials, default is false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"adapter"),(0,r.kt)("td",{parentName:"tr",align:null},"AxiosAdapter"),(0,r.kt)("td",{parentName:"tr",align:null},"optional custom adapter, let libray authors implement it")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"auth"),(0,r.kt)("td",{parentName:"tr",align:null},"{ username: string; password: string }"),(0,r.kt)("td",{parentName:"tr",align:null},"optional basic auth")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"responseType"),(0,r.kt)("td",{parentName:"tr",align:null},'"arraybuffer" ',"|",' "blob" ',"|",' "document" ',"|",' "json" ',"|",' "text" ',"|",' "stream"'),(0,r.kt)("td",{parentName:"tr",align:null},'response type, default is "json"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"responseEncoding"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'response encoding, default is "utf8" (nodejs only)')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xsrfCookieName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'xsrf cookie name, default is "XSRF-TOKEN"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xsrfHeaderName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'xsrf header name, default is "X-XSRF-TOKEN"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onUploadProgress"),(0,r.kt)("td",{parentName:"tr",align:null},"(progressEvent: ProgressEvent) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"progress callback (browser only with XMLHttpRequest)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onDownloadProgress"),(0,r.kt)("td",{parentName:"tr",align:null},"(progressEvent: ProgressEvent) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"progress callback (browser only with XMLHttpRequest)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxContentLength"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"max response content length, default is 2000 bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxBodyLength"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"max request body length, default is 2000 bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"validateStatus"),(0,r.kt)("td",{parentName:"tr",align:null},"(status: number) => boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"optional function to validate status code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxRedirects"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"max number of redirects, default is 5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"httpAgent"),(0,r.kt)("td",{parentName:"tr",align:null},"NodeHttpAgent"),(0,r.kt)("td",{parentName:"tr",align:null},"optional custom http agent (nodejs only)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"httpsAgent"),(0,r.kt)("td",{parentName:"tr",align:null},"NodeHttpsAgent"),(0,r.kt)("td",{parentName:"tr",align:null},"optional custom https agent (nodejs only)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proxy"),(0,r.kt)("td",{parentName:"tr",align:null},"{ protocol: string; host: string; port: number; auth?: { username: string; password: string } }"),(0,r.kt)("td",{parentName:"tr",align:null},"optional proxy configuration (nodejs only)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"decompress"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"flag to enable automatic decompression, default is true")))),(0,r.kt)("h2",{id:"advanced-examples"},"Advanced examples"),(0,r.kt)("h3",{id:"use-zod-transformations"},"Use zod transformations"),(0,r.kt)("p",null,"Since Zodios is using zod, you can use zod transformations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const apiClient = new Zodios(\n  "https://jsonplaceholder.typicode.com",\n  [\n    {\n      method: "get",\n      path: "/users/:id",\n      alias: "getUser",\n      description: "Get a user",\n      response: z.object({\n        id: z.number(),\n        name: z.string(),\n      }).transform(({ name,...rest }) => ({\n        ...rest,\n        firstname: name.split(" ")[0],\n        lastname: name.split(" ")[1],\n      })),\n    },\n  ]\n);\n\nconst user = await apiClient.getUser({ params: { id: 7 } });\n\nconsole.log(user);\n')),(0,r.kt)("p",null,"It should output  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{ id: 7, firstname: 'Kurtis', lastname: 'Weissnat' }\n")),(0,r.kt)("h3",{id:"send-multipartform-data-requests"},"Send multipart/form-data requests"),(0,r.kt)("p",null,"Zodios supports multipart/form-data requests with integrated ",(0,r.kt)("inlineCode",{parentName:"p"},"requestFormat"),"."),(0,r.kt)("admonition",{title:"node",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you are using Zodios on your backend node, you need to install ",(0,r.kt)("inlineCode",{parentName:"p"},"form-data")," package to use multipart/form-data requests.\nAnd polyfill FormData with ",(0,r.kt)("inlineCode",{parentName:"p"},'globalThis.FormData = require("form-data");')," before importing Zodios.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const apiClient = new Zodios(\n  "https://mywebsite.com",\n  [{\n    method: "post",\n    path: "/upload",\n    alias: "upload",\n    description: "Upload a file",\n    requestFormat: "form-data",\n    parameters:[\n      {\n        name: "body",\n        type: "Body",\n        schema: z.object({\n          file: z.instanceof(File),\n        }),\n      }\n    ],\n    response: z.object({\n      id: z.number(),\n    }),\n  }],\n);\nconst id = await apiClient.upload({ file: document.querySelector(\'#file\').files[0] });\n')),(0,r.kt)("p",null,"But you can also use your own multipart/form-data library, for example with ",(0,r.kt)("inlineCode",{parentName:"p"},"form-data")," library on node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import FormData from \'form-data\';\n\nconst apiClient = new Zodios(\n  "https://mywebsite.com",\n  [{\n    method: "post",\n    path: "/upload",\n    alias: "upload",\n    description: "Upload a file",\n    parameters:[\n      {\n        name: "body",\n        type: "Body",\n        schema: z.instanceof(FormData),\n      }\n    ],\n    response: z.object({\n      id: z.number(),\n    }),\n  }],\n);\nconst form = new FormData();\nform.append(\'file\', document.querySelector(\'#file\').files[0]);\nconst id = await apiClient.upload(form, { headers: form.getHeaders() });\n')),(0,r.kt)("h3",{id:"send-applicationx-www-form-urlencoded-requests"},"Send application/x-www-form-urlencoded requests"),(0,r.kt)("p",null,"Zodios supports application/x-www-form-urlencoded requests with integrated ",(0,r.kt)("inlineCode",{parentName:"p"},"requestFormat"),". Zodios is using URLSearchParams internally on both browser and node. (If you need IE support, see next example)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const apiClient = new Zodios(\n  "https://mywebsite.com",\n  [{\n    method: "post",\n    path: "/login",\n    alias: "login",\n    description: "Submit a form",\n    requestFormat: "form-url",\n    parameters:[\n      {\n        name: "body",\n        type: "Body",\n        schema: z.object({\n          userName: z.string(),\n          password: z.string(),\n        }),\n      }\n    ],\n    response: z.object({\n      id: z.number(),\n    }),\n  }],\n);\nconst id = await apiClient.login({ userName: "user", password: "password" });\n')),(0,r.kt)("p",null,"  But you can also use custom code to support for application/x-www-form-urlencoded requests.\nFor example with ",(0,r.kt)("inlineCode",{parentName:"p"},"qs")," library on IE :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import qs from \'qs\';\n\nconst apiClient = new Zodios(\n  "https://mywebsite.com",\n  [{\n    method: "post",\n    path: "/login",\n    alias: "login",\n    description: "Submit a form",\n    parameters:[\n      {\n        name: "body",\n        type: "Body",\n        schema: z.object({\n          userName: z.string(),\n          password: z.string(),\n        }).transform(data=> qs.stringify(data)),\n      }\n    ],\n    response: z.object({\n      id: z.number(),\n    }),\n  }],\n);\nconst id = await apiClient.login({ userName: "user", password: "password" },\n  { headers: \n      { \n        \'Content-Type\': \'application/x-www-form-urlencoded\' \n      }\n  });\n')),(0,r.kt)("h3",{id:"crud-helper"},"CRUD helper"),(0,r.kt)("p",null,"Zodios has a helper to generate basic CRUD API. It will generate all the api definitions for you :  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Zodios, makeCrudApi } from '@zodios/core';\n\nconst apiClient = new Zodios(BASE_URL,\n  makeCrudApi(\n    'user',\n    z.object({\n      id: z.number(),\n      name: z.string(),\n    })\n  ));\n")),(0,r.kt)("p",null,"Is the same as :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const apiClient = new Zodios(BASE_URL, [\n  {\n    method: "get",\n    path: "/users",\n    alias: "getUsers",\n    description: "Get all users",\n    response: z.array(userSchema),\n  },\n  {\n    method: "get",\n    path: "/users/:id",\n    alias: "getUser",\n    description: "Get a user",\n    response: userSchema,\n  },\n  {\n    method: "post",\n    path: "/users",\n    alias: "createUser",\n    description: "Create a user",\n    parameters: [\n      {\n        name: "body",\n        type: "Body",\n        description: "The object to create",\n        schema: userSchema.partial(),\n      },\n    ],\n    response: userSchema,\n  },\n  {\n    method: "put",\n    path: "/users/:id",\n    alias: "updateUser",\n    description: "Update a user",\n    parameters: [\n      {\n        name: "body",\n        type: "Body",\n        description: "The object to update",\n        schema: userSchema,\n      },\n    ],\n    response: userSchema,\n  },\n  {\n    method: "patch",\n    path: "/users/:id",\n    alias: "patchUser",\n    description: "Patch a user",\n    parameters: [\n      {\n        name: "body",\n        type: "Body",\n        description: "The object to patch",\n        schema: userSchema.partial(),\n      },\n    ],\n    response: userSchema,\n  },\n  {\n    method: "delete",\n    path: "/users/:id",\n    alias: "deleteUser",\n    description: "Delete a user",\n    response: userSchema,\n  },\n]);\n')))}m.isMDXComponent=!0}}]);