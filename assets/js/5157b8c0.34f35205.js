"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1831],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3671:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={description:"Buz is an open-source project that makes it easy to send data to Clickhouse",keywords:["Clickhouse","event tracking","free","open-source","Buz"]},i="Send data to Clickhouse for free with Buz.",s={type:"mdx",permalink:"/integrations/clickhouse",source:"@site/src/pages/integrations/clickhouse.md",title:"Send data to Clickhouse for free with Buz.",description:"Buz is an open-source project that makes it easy to send data to Clickhouse",frontMatter:{description:"Buz is an open-source project that makes it easy to send data to Clickhouse",keywords:["Clickhouse","event tracking","free","open-source","Buz"]}},l=[],c={toc:l};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"send-data-to-clickhouse-for-free-with-buz"},"Send data to Clickhouse for free with Buz."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"buzz",src:r(2307).Z,width:"3660",height:"1472"})),(0,a.kt)("h1",{id:"why-buz"},"Why Buz?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Free and entirely ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"Open-Source"),"."),(0,a.kt)("li",{parentName:"ul"},"No SaaS, DPA, MDS products, or dealing with legal necessary. ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Buz runs on your infrastructure")),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Lightweight")," and ",(0,a.kt)("strong",{parentName:"li"},"cost-efficient")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Empowers teams to run their own data collection systems"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Quick to set up")," and ",(0,a.kt)("strong",{parentName:"li"},"easy to maintain long term")," thanks to ",(0,a.kt)("strong",{parentName:"li"},"minimal moving pieces"),"."),(0,a.kt)("li",{parentName:"ul"},"Serverless-native, and ",(0,a.kt)("strong",{parentName:"li"},"automatically scales as data volumes do (including to ",(0,a.kt)("inlineCode",{parentName:"strong"},"0"),")"),".")),(0,a.kt)("h1",{id:"supported-sources"},"Supported Sources"),(0,a.kt)("p",null,"Buz sends data to Clickhouse from a number of different sources including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sources/snowplow-analytics"},"Snowplow Analytics")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sources/cloudevents"},"Cloudevents")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sources/webhook"},"webhook")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sources/pixel"},"pixel")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sources/self-describing-json"},"self describing JSON"))),(0,a.kt)("h1",{id:"want-to-get-started"},"Want to get started?"),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",{parentName:"p",href:"/"},"Docs")," to quickly get up and running."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"buzz",src:r(976).Z,width:"4000",height:"1389"})))}u.isMDXComponent=!0},2307:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/buzflow-727542cdbec371ef9b3ad72de7359f54.png"},976:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/buzz-5b8a41395298716325cb3c6ea4becb6d.png"}}]);