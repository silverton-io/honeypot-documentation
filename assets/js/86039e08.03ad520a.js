"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8303],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),b=a,d=m["".concat(u,".").concat(b)]||m[b]||p[b]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4017:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={},i="Send Webhook data to BigQuery using Buz.",l={type:"mdx",permalink:"/connections/webhook_to_bigquery",source:"@site/src/pages/connections/webhook_to_bigquery.md",title:"Send Webhook data to BigQuery using Buz.",description:"buzz",frontMatter:{}},u=[{value:"Buz makes it easy to collect and load your Webhook data to BigQuery.",id:"buz-makes-it-easy-to-collect-and-load-your-webhook-data-to-bigquery",level:2},{value:"What Buz Is:",id:"what-buz-is",level:3},{value:"What Buz Is Not:",id:"what-buz-is-not",level:3},{value:"More:",id:"more",level:3}],c={toc:u};function s(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"send-webhook-data-to-bigquery-using-buz"},"Send Webhook data to BigQuery using Buz."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"buzz",src:r(976).Z,width:"4000",height:"1389"})),(0,a.kt)("h2",{id:"buz-makes-it-easy-to-collect-and-load-your-webhook-data-to-bigquery"},"Buz makes it easy to collect and load your Webhook data to BigQuery."),(0,a.kt)("h3",{id:"what-buz-is"},"What Buz Is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"open source project")," aimed at making data collection and integration easy."),(0,a.kt)("li",{parentName:"ul"},"A lightweight, standalone binary built with Go."),(0,a.kt)("li",{parentName:"ul"},"A system that collects data from multiple sources (webhooks, pixels, Cloudevents, Snowplow Analytics SDK's, and more)."),(0,a.kt)("li",{parentName:"ul"},"A validator for enforcing data quality on its way in the door."),(0,a.kt)("li",{parentName:"ul"},'An obsolete form of "',(0,a.kt)("a",{parentName:"li",href:"https://www.merriam-webster.com/dictionary/buzz"},"buzz"),'."')),(0,a.kt)("h3",{id:"what-buz-is-not"},"What Buz Is Not:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"YAD (yet-another database)."),(0,a.kt)("li",{parentName:"ul"},"A meme."),(0,a.kt)("li",{parentName:"ul"},"Difficult to set up."),(0,a.kt)("li",{parentName:"ul"},"Difficult to keep running.")),(0,a.kt)("h3",{id:"more"},"More:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2b50 Buz on ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"Github")),(0,a.kt)("li",{parentName:"ul"},"Browse Buz ",(0,a.kt)("a",{parentName:"li",href:"/"},"Documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/examples/quickstart"},"Quickstart")),(0,a.kt)("li",{parentName:"ul"},"[Deploy]"," Buz(category/deploying-buz)")))}s.isMDXComponent=!0},976:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/buzz-5b8a41395298716325cb3c6ea4becb6d.png"}}]);