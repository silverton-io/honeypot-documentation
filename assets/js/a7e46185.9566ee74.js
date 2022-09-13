"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5921],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),l=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(o),m=n,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return o?r.createElement(g,s(s({ref:t},c),{},{components:o})):r.createElement(g,s({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=o[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5984:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=o(7462),n=(o(7294),o(3905));const a={title:"Send webhook data to Postgres",description:"Buz is a free and open-source project that makes it easy to collect, validate, and load webhook data to Postgres.",keywords:["webhook","Postgres","webhook to Postgres","event tracking","free","open-source","Buz"]},s="Send webhook data to Postgres using Buz for $0.",i={type:"mdx",permalink:"/sources/webhook/integrations/postgres",source:"@site/src/pages/sources/webhook/integrations/postgres.md",title:"Send webhook data to Postgres",description:"Buz is a free and open-source project that makes it easy to collect, validate, and load webhook data to Postgres.",frontMatter:{title:"Send webhook data to Postgres",description:"Buz is a free and open-source project that makes it easy to collect, validate, and load webhook data to Postgres.",keywords:["webhook","Postgres","webhook to Postgres","event tracking","free","open-source","Buz"]}},u=[{value:"Buz makes it easy to collect webhook data and send it to Postgres using your <strong>own infrastructure</strong>.",id:"buz-makes-it-easy-to-collect-webhook-data-and-send-it-to-postgres-using-your-own-infrastructure",level:2}],l={toc:u};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"send-webhook-data-to-postgres-using-buz-for-0"},"Send webhook data to Postgres using Buz for $0."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"buzflow",src:o(2307).Z,width:"3660",height:"1472"})),(0,n.kt)("h2",{id:"buz-makes-it-easy-to-collect-webhook-data-and-send-it-to-postgres-using-your-own-infrastructure"},"Buz makes it easy to collect webhook data and send it to Postgres using your ",(0,n.kt)("strong",{parentName:"h2"},"own infrastructure"),"."),(0,n.kt)("h1",{id:"why-buz"},"Why Buz?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It's Free and entirely ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"Open-Source"),"."),(0,n.kt)("li",{parentName:"ul"},"No SaaS, DPA, MDS products, or dealing with legal necessary. ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Buz runs on your infrastructure")),"."),(0,n.kt)("li",{parentName:"ul"},"Buz is a ",(0,n.kt)("strong",{parentName:"li"},"lightweight")," and ",(0,n.kt)("strong",{parentName:"li"},"cost-efficient")," way of collecting data."),(0,n.kt)("li",{parentName:"ul"},"Buz ",(0,n.kt)("strong",{parentName:"li"},"empowers teams to run their own data collection systems"),"."),(0,n.kt)("li",{parentName:"ul"},"Buz is ",(0,n.kt)("strong",{parentName:"li"},"quick to set up")," and ",(0,n.kt)("strong",{parentName:"li"},"easy to maintain long term")," thanks to ",(0,n.kt)("strong",{parentName:"li"},"minimal moving pieces"),"."),(0,n.kt)("li",{parentName:"ul"},"Buz is serverless-native, and ",(0,n.kt)("strong",{parentName:"li"},"automatically scales as data volumes do (including to ",(0,n.kt)("inlineCode",{parentName:"strong"},"0"),")"),".")),(0,n.kt)("h1",{id:"quickstart-a-local-buz-stack"},"Quickstart a local Buz stack"),(0,n.kt)("p",null,"Want to get started quickly? The ",(0,n.kt)("a",{parentName:"p",href:"/examples/quickstart"},"Buz Quickstart")," bootstraps an end-to-end streaming analytics stack using Buz, ",(0,n.kt)("a",{parentName:"p",href:"https://redpanda.com/?utm_medium=hipanda&utm_source=buz"},"Redpanda"),", the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.redpanda.com/docs/console/?utm_medium=hipanda&utm_source=buz"},"Redpanda Console"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://materialize.com/?utm_medium=himaterialize&utm_source=buz"},"Materialize"),"."),(0,n.kt)("h1",{id:"deploy-buz-on-google-cloud-in-under-5-minutes"},"Deploy Buz on Google Cloud in under 5 minutes"),(0,n.kt)("p",null,"The production-ready GCP stack includes Buz, Google Pub/Sub, Pub/Sub subscriptions, and BigQuery. It can be set up in minutes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/production-deployment/gcp/terraform"},"Using Terraform")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/production-deployment/gcp/console"},"Using the Google Cloud Console"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"buzz",src:o(976).Z,width:"4000",height:"1389"})))}c.isMDXComponent=!0},2307:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/buzflow-727542cdbec371ef9b3ad72de7359f54.png"},976:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/buzz-5b8a41395298716325cb3c6ea4becb6d.png"}}]);