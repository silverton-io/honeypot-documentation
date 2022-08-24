"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2163],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||r;return a?n.createElement(f,l(l({ref:t},s),{},{components:a})):n.createElement(f,l({ref:t},s))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1466:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(7462),o=(a(7294),a(3905));const r={title:"Cloudevent to NATS with Buz",description:"Buz is an open source project that makes it easy to collect, validate, and load Cloudevent data to NATS.",keywords:["Cloudevent","NATS","Buz"]},l="Send Cloudevent data to NATS using Buz.",i={type:"mdx",permalink:"/connections/cloudevent_to_nats",source:"@site/src/pages/connections/cloudevent_to_nats.md",title:"Cloudevent to NATS with Buz",description:"Buz is an open source project that makes it easy to collect, validate, and load Cloudevent data to NATS.",frontMatter:{title:"Cloudevent to NATS with Buz",description:"Buz is an open source project that makes it easy to collect, validate, and load Cloudevent data to NATS.",keywords:["Cloudevent","NATS","Buz"]}},u=[{value:"Buz makes it easy to collect, validate, and load your Cloudevent data to NATS.",id:"buz-makes-it-easy-to-collect-validate-and-load-your-cloudevent-data-to-nats",level:2},{value:"What Buz Is:",id:"what-buz-is",level:3},{value:"What Buz Is Not:",id:"what-buz-is-not",level:3},{value:"More:",id:"more",level:3}],c={toc:u};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"send-cloudevent-data-to-nats-using-buz"},"Send Cloudevent data to NATS using Buz."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"buzz",src:a(976).Z,width:"4000",height:"1389"})),(0,o.kt)("h2",{id:"buz-makes-it-easy-to-collect-validate-and-load-your-cloudevent-data-to-nats"},"Buz makes it easy to collect, validate, and load your Cloudevent data to NATS."),(0,o.kt)("h3",{id:"what-buz-is"},"What Buz Is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"open source project")," aimed at making data collection and integration easy."),(0,o.kt)("li",{parentName:"ul"},"A lightweight, standalone binary built with Go."),(0,o.kt)("li",{parentName:"ul"},"A system that collects data from multiple sources (webhooks, pixels, Cloudevents, Snowplow Analytics SDK's, and more)."),(0,o.kt)("li",{parentName:"ul"},"A validator for enforcing data quality on its way in the door."),(0,o.kt)("li",{parentName:"ul"},'An obsolete form of "',(0,o.kt)("a",{parentName:"li",href:"https://www.merriam-webster.com/dictionary/buzz"},"buzz"),'."')),(0,o.kt)("h3",{id:"what-buz-is-not"},"What Buz Is Not:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"YAD (yet-another database)."),(0,o.kt)("li",{parentName:"ul"},"A meme."),(0,o.kt)("li",{parentName:"ul"},"Difficult to set up."),(0,o.kt)("li",{parentName:"ul"},"Difficult to keep running.")),(0,o.kt)("h3",{id:"more"},"More:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u2b50 Buz on ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"Github")),(0,o.kt)("li",{parentName:"ul"},"Browse Buz ",(0,o.kt)("a",{parentName:"li",href:"/"},"Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/examples/quickstart"},"Quickstart")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/category/deploying-buz"},"Deploy")," Buz")))}s.isMDXComponent=!0},976:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/buzz-5b8a41395298716325cb3c6ea4becb6d.png"}}]);