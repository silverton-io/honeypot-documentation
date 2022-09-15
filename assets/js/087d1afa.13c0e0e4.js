"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8064],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8291:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={title:"Send Snowplow Analytics data to Clickhouse",description:"Buz is a free and open-source project that makes it easy to collect, validate, and load Snowplow Analytics data to Clickhouse.",keywords:["Snowplow Analytics","Clickhouse","Snowplow Analytics to Clickhouse","event tracking","free","open-source","Buz"]},i="Send Snowplow Analytics data to Clickhouse for free with Buz.",l={type:"mdx",permalink:"/sources/snowplow-analytics/integrations/clickhouse",source:"@site/src/pages/sources/snowplow-analytics/integrations/clickhouse.md",title:"Send Snowplow Analytics data to Clickhouse",description:"Buz is a free and open-source project that makes it easy to collect, validate, and load Snowplow Analytics data to Clickhouse.",frontMatter:{title:"Send Snowplow Analytics data to Clickhouse",description:"Buz is a free and open-source project that makes it easy to collect, validate, and load Snowplow Analytics data to Clickhouse.",keywords:["Snowplow Analytics","Clickhouse","Snowplow Analytics to Clickhouse","event tracking","free","open-source","Buz"]}},s=[{value:"Buz makes it easy to collect Snowplow Analytics data and send it to Clickhouse using your <strong>own infrastructure</strong>.",id:"buz-makes-it-easy-to-collect-snowplow-analytics-data-and-send-it-to-clickhouse-using-your-own-infrastructure",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"send-snowplow-analytics-data-to-clickhouse-for-free-with-buz"},"Send Snowplow Analytics data to Clickhouse for free with Buz."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"buzflow",src:n(2307).Z,width:"3660",height:"1472"})),(0,o.kt)("h2",{id:"buz-makes-it-easy-to-collect-snowplow-analytics-data-and-send-it-to-clickhouse-using-your-own-infrastructure"},"Buz makes it easy to collect Snowplow Analytics data and send it to Clickhouse using your ",(0,o.kt)("strong",{parentName:"h2"},"own infrastructure"),"."),(0,o.kt)("h1",{id:"why-buz"},"Why Buz?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It's Free and entirely ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"Open-Source"),"."),(0,o.kt)("li",{parentName:"ul"},"No SaaS, DPA, MDS products, or dealing with legal necessary. ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Buz runs on your infrastructure")),"."),(0,o.kt)("li",{parentName:"ul"},"Buz is a ",(0,o.kt)("strong",{parentName:"li"},"lightweight")," and ",(0,o.kt)("strong",{parentName:"li"},"cost-efficient")," way of collecting data."),(0,o.kt)("li",{parentName:"ul"},"Buz ",(0,o.kt)("strong",{parentName:"li"},"empowers teams to run their own data collection systems"),"."),(0,o.kt)("li",{parentName:"ul"},"Buz is ",(0,o.kt)("strong",{parentName:"li"},"quick to set up")," and ",(0,o.kt)("strong",{parentName:"li"},"easy to maintain long term")," thanks to ",(0,o.kt)("strong",{parentName:"li"},"minimal moving pieces"),"."),(0,o.kt)("li",{parentName:"ul"},"Buz is serverless-native, and ",(0,o.kt)("strong",{parentName:"li"},"automatically scales as data volumes do (including to ",(0,o.kt)("inlineCode",{parentName:"strong"},"0"),")"),".")),(0,o.kt)("h1",{id:"quickstart-a-local-buz-stack"},"Quickstart a local Buz stack"),(0,o.kt)("p",null,"Want to get started quickly? The ",(0,o.kt)("a",{parentName:"p",href:"/examples/quickstart"},"Buz Quickstart")," bootstraps an end-to-end streaming analytics stack using Buz, ",(0,o.kt)("a",{parentName:"p",href:"https://redpanda.com/?utm_medium=hipanda&utm_source=buz"},"Redpanda"),", the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.redpanda.com/docs/console/?utm_medium=hipanda&utm_source=buz"},"Redpanda Console"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://materialize.com/?utm_medium=himaterialize&utm_source=buz"},"Materialize"),"."),(0,o.kt)("h1",{id:"deploy-buz-on-google-cloud-in-under-5-minutes"},"Deploy Buz on Google Cloud in under 5 minutes"),(0,o.kt)("p",null,"The production-ready GCP stack includes Buz, Google Pub/Sub, Pub/Sub subscriptions, and BigQuery. It can be set up in minutes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/production-deployment/gcp/terraform"},"Using Terraform")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/production-deployment/gcp/console"},"Using the Google Cloud Console"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"buzz",src:n(976).Z,width:"4000",height:"1389"})))}u.isMDXComponent=!0},2307:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/buzflow-727542cdbec371ef9b3ad72de7359f54.png"},976:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/buzz-5b8a41395298716325cb3c6ea4becb6d.png"}}]);