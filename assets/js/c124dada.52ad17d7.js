"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9292],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>d});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(o),d=r,b=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return o?n.createElement(b,l(l({ref:t},s),{},{components:o})):n.createElement(b,l({ref:t},s))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},253:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=o(7462),r=(o(7294),o(3905));const a={},l="Send Webhook data to Clickhouse using Buz.",i={type:"mdx",permalink:"/connections/webhook_to_clickhouse",source:"@site/src/pages/connections/webhook_to_clickhouse.md",title:"Send Webhook data to Clickhouse using Buz.",description:"buzz",frontMatter:{}},u=[{value:"Buz makes it easy to collect and load your Webhook data to Clickhouse.",id:"buz-makes-it-easy-to-collect-and-load-your-webhook-data-to-clickhouse",level:2},{value:"What Buz Is:",id:"what-buz-is",level:3},{value:"What Buz Is Not:",id:"what-buz-is-not",level:3},{value:"More:",id:"more",level:3}],c={toc:u};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"send-webhook-data-to-clickhouse-using-buz"},"Send Webhook data to Clickhouse using Buz."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"buzz",src:o(976).Z,width:"4000",height:"1389"})),(0,r.kt)("h2",{id:"buz-makes-it-easy-to-collect-and-load-your-webhook-data-to-clickhouse"},"Buz makes it easy to collect and load your Webhook data to Clickhouse."),(0,r.kt)("h3",{id:"what-buz-is"},"What Buz Is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"open source project")," aimed at making data collection and integration easy."),(0,r.kt)("li",{parentName:"ul"},"A lightweight, standalone binary built with Go."),(0,r.kt)("li",{parentName:"ul"},"A system that collects data from multiple sources (webhooks, pixels, Cloudevents, Snowplow Analytics SDK's, and more)."),(0,r.kt)("li",{parentName:"ul"},"A validator for enforcing data quality on its way in the door."),(0,r.kt)("li",{parentName:"ul"},'An obsolete form of "',(0,r.kt)("a",{parentName:"li",href:"https://www.merriam-webster.com/dictionary/buzz"},"buzz"),'."')),(0,r.kt)("h3",{id:"what-buz-is-not"},"What Buz Is Not:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"YAD (yet-another database)."),(0,r.kt)("li",{parentName:"ul"},"A meme."),(0,r.kt)("li",{parentName:"ul"},"Difficult to set up."),(0,r.kt)("li",{parentName:"ul"},"Difficult to keep running.")),(0,r.kt)("h3",{id:"more"},"More:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2b50 Buz on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"Github")),(0,r.kt)("li",{parentName:"ul"},"Browse Buz ",(0,r.kt)("a",{parentName:"li",href:"/"},"Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/examples/quickstart"},"Quickstart")),(0,r.kt)("li",{parentName:"ul"},"[Deploy]"," Buz(category/deploying-buz)")))}s.isMDXComponent=!0},976:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/buzz-5b8a41395298716325cb3c6ea4becb6d.png"}}]);