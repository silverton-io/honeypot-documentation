"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6115],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(a),m=r,k=p["".concat(u,".").concat(m)]||p[m]||c[m]||o;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7598:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={title:"Send webhook data to Redpanda",description:"Buz is a free and open-source project that makes it easy to collect, validate, and load webhook data to Redpanda.",keywords:["webhook","Redpanda","webhook to Redpanda","event tracking","free","open-source","Buz"]},i="Send webhook data to Redpanda using Buz for $0.",s={type:"mdx",permalink:"/sources/webhook/integrations/redpanda",source:"@site/src/pages/sources/webhook/integrations/redpanda.md",title:"Send webhook data to Redpanda",description:"Buz is a free and open-source project that makes it easy to collect, validate, and load webhook data to Redpanda.",frontMatter:{title:"Send webhook data to Redpanda",description:"Buz is a free and open-source project that makes it easy to collect, validate, and load webhook data to Redpanda.",keywords:["webhook","Redpanda","webhook to Redpanda","event tracking","free","open-source","Buz"]}},u=[{value:"Buz makes it easy to collect webhook data and send it to Redpanda using your <strong>own infrastructure</strong>.",id:"buz-makes-it-easy-to-collect-webhook-data-and-send-it-to-redpanda-using-your-own-infrastructure",level:2}],l={toc:u};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"send-webhook-data-to-redpanda-using-buz-for-0"},"Send webhook data to Redpanda using Buz for $0."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"buzflow",src:a(2307).Z,width:"3660",height:"1472"})),(0,r.kt)("h2",{id:"buz-makes-it-easy-to-collect-webhook-data-and-send-it-to-redpanda-using-your-own-infrastructure"},"Buz makes it easy to collect webhook data and send it to Redpanda using your ",(0,r.kt)("strong",{parentName:"h2"},"own infrastructure"),"."),(0,r.kt)("h1",{id:"why-buz"},"Why Buz?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It's Free and entirely ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"Open-Source"),"."),(0,r.kt)("li",{parentName:"ul"},"No SaaS, DPA, MDS products, or dealing with legal necessary. ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Buz runs on your infrastructure")),"."),(0,r.kt)("li",{parentName:"ul"},"Buz is a ",(0,r.kt)("strong",{parentName:"li"},"lightweight")," and ",(0,r.kt)("strong",{parentName:"li"},"cost-efficient")," way of collecting data."),(0,r.kt)("li",{parentName:"ul"},"Buz ",(0,r.kt)("strong",{parentName:"li"},"empowers teams to run their own data collection systems"),"."),(0,r.kt)("li",{parentName:"ul"},"Buz is ",(0,r.kt)("strong",{parentName:"li"},"quick to set up")," and ",(0,r.kt)("strong",{parentName:"li"},"easy to maintain long term")," thanks to ",(0,r.kt)("strong",{parentName:"li"},"minimal moving pieces"),"."),(0,r.kt)("li",{parentName:"ul"},"Buz is serverless-native, and ",(0,r.kt)("strong",{parentName:"li"},"automatically scales as data volumes do (including to ",(0,r.kt)("inlineCode",{parentName:"strong"},"0"),")"),".")),(0,r.kt)("h1",{id:"quickstart-a-local-buz-stack"},"Quickstart a local Buz stack"),(0,r.kt)("p",null,"Want to get started quickly? The ",(0,r.kt)("a",{parentName:"p",href:"/examples/quickstart"},"Buz Quickstart")," bootstraps an end-to-end streaming analytics stack using Buz, ",(0,r.kt)("a",{parentName:"p",href:"https://redpanda.com/?utm_medium=hipanda&utm_source=buz"},"Redpanda"),", the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.redpanda.com/docs/console/?utm_medium=hipanda&utm_source=buz"},"Redpanda Console"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://materialize.com/?utm_medium=himaterialize&utm_source=buz"},"Materialize"),"."),(0,r.kt)("h1",{id:"deploy-buz-on-google-cloud-in-under-5-minutes"},"Deploy Buz on Google Cloud in under 5 minutes"),(0,r.kt)("p",null,"The production-ready GCP stack includes Buz, Google Pub/Sub, Pub/Sub subscriptions, and BigQuery. It can be set up in minutes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/production-deployment/gcp/terraform"},"Using Terraform")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/production-deployment/gcp/console"},"Using the Google Cloud Console"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"buzz",src:a(976).Z,width:"4000",height:"1389"})))}d.isMDXComponent=!0},2307:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/buzflow-727542cdbec371ef9b3ad72de7359f54.png"},976:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/buzz-5b8a41395298716325cb3c6ea4becb6d.png"}}]);