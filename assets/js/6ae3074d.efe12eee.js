"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2056],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,g=p["".concat(u,".").concat(m)]||p[m]||c[m]||r;return n?o.createElement(g,i(i({ref:t},d),{},{components:n})):o.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7390:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const r={title:"Send Cloudevents data to Mongodb",description:"Buz is a free and open-source project that makes it easy to collect, validate, and load Cloudevents data to Mongodb.",keywords:["Cloudevents","Mongodb","Cloudevents to Mongodb","event tracking","free","open-source","Buz"]},i="Send Cloudevents data to Mongodb using Buz for $0.",s={type:"mdx",permalink:"/sources/cloudevents/integrations/mongodb",source:"@site/src/pages/sources/cloudevents/integrations/mongodb.md",title:"Send Cloudevents data to Mongodb",description:"Buz is a free and open-source project that makes it easy to collect, validate, and load Cloudevents data to Mongodb.",frontMatter:{title:"Send Cloudevents data to Mongodb",description:"Buz is a free and open-source project that makes it easy to collect, validate, and load Cloudevents data to Mongodb.",keywords:["Cloudevents","Mongodb","Cloudevents to Mongodb","event tracking","free","open-source","Buz"]}},u=[{value:"Buz makes it easy to collect Cloudevents data and send it to Mongodb using your <strong>own infrastructure</strong>.",id:"buz-makes-it-easy-to-collect-cloudevents-data-and-send-it-to-mongodb-using-your-own-infrastructure",level:2}],l={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"send-cloudevents-data-to-mongodb-using-buz-for-0"},"Send Cloudevents data to Mongodb using Buz for $0."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"buzflow",src:n(2307).Z,width:"3660",height:"1472"})),(0,a.kt)("h2",{id:"buz-makes-it-easy-to-collect-cloudevents-data-and-send-it-to-mongodb-using-your-own-infrastructure"},"Buz makes it easy to collect Cloudevents data and send it to Mongodb using your ",(0,a.kt)("strong",{parentName:"h2"},"own infrastructure"),"."),(0,a.kt)("h1",{id:"why-buz"},"Why Buz?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It's Free and entirely ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"Open-Source"),"."),(0,a.kt)("li",{parentName:"ul"},"No SaaS, DPA, MDS products, or dealing with legal necessary. ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Buz runs on your infrastructure")),"."),(0,a.kt)("li",{parentName:"ul"},"Buz is a ",(0,a.kt)("strong",{parentName:"li"},"lightweight")," and ",(0,a.kt)("strong",{parentName:"li"},"cost-efficient")," way of collecting data."),(0,a.kt)("li",{parentName:"ul"},"Buz ",(0,a.kt)("strong",{parentName:"li"},"empowers teams to run their own data collection systems"),"."),(0,a.kt)("li",{parentName:"ul"},"Buz is ",(0,a.kt)("strong",{parentName:"li"},"quick to set up")," and ",(0,a.kt)("strong",{parentName:"li"},"easy to maintain long term")," thanks to ",(0,a.kt)("strong",{parentName:"li"},"minimal moving pieces"),"."),(0,a.kt)("li",{parentName:"ul"},"Buz is serverless-native, and ",(0,a.kt)("strong",{parentName:"li"},"automatically scales as data volumes do (including to ",(0,a.kt)("inlineCode",{parentName:"strong"},"0"),")"),".")),(0,a.kt)("h1",{id:"quickstart-a-local-buz-stack"},"Quickstart a local Buz stack"),(0,a.kt)("p",null,"Want to get started quickly? The ",(0,a.kt)("a",{parentName:"p",href:"/examples/quickstart"},"Buz Quickstart")," bootstraps an end-to-end streaming analytics stack using Buz, ",(0,a.kt)("a",{parentName:"p",href:"https://redpanda.com/?utm_medium=hipanda&utm_source=buz"},"Redpanda"),", the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.redpanda.com/docs/console/?utm_medium=hipanda&utm_source=buz"},"Redpanda Console"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://materialize.com/?utm_medium=himaterialize&utm_source=buz"},"Materialize"),"."),(0,a.kt)("h1",{id:"deploy-buz-on-google-cloud-in-under-5-minutes"},"Deploy Buz on Google Cloud in under 5 minutes"),(0,a.kt)("p",null,"The production-ready GCP stack includes Buz, Google Pub/Sub, Pub/Sub subscriptions, and BigQuery. It can be set up in minutes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/production-deployment/gcp/terraform"},"Using Terraform")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/production-deployment/gcp/console"},"Using the Google Cloud Console"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"buzz",src:n(976).Z,width:"4000",height:"1389"})))}d.isMDXComponent=!0},2307:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/buzflow-727542cdbec371ef9b3ad72de7359f54.png"},976:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/buzz-5b8a41395298716325cb3c6ea4becb6d.png"}}]);