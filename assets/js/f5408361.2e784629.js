"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1687],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=o.createContext({}),c=function(e){var t=o.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||r;return a?o.createElement(h,i(i({ref:t},s),{},{components:a})):o.createElement(h,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6323:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=a(7462),n=(a(7294),a(3905));const r={title:"Pixel to Clickhouse with Buz",description:"Buz is an open source project that makes it easy to collect, validate, and load Pixel data to Clickhouse.",keywords:["Pixel","Clickhouse","Buz"]},i="Send Pixel data to Clickhouse using Buz.",l={type:"mdx",permalink:"/connections/pixel_to_clickhouse",source:"@site/src/pages/connections/pixel_to_clickhouse.md",title:"Pixel to Clickhouse with Buz",description:"Buz is an open source project that makes it easy to collect, validate, and load Pixel data to Clickhouse.",frontMatter:{title:"Pixel to Clickhouse with Buz",description:"Buz is an open source project that makes it easy to collect, validate, and load Pixel data to Clickhouse.",keywords:["Pixel","Clickhouse","Buz"]}},u=[{value:"Buz makes it easy to collect, validate, and load your Pixel data to Clickhouse.",id:"buz-makes-it-easy-to-collect-validate-and-load-your-pixel-data-to-clickhouse",level:2},{value:"What Buz Is:",id:"what-buz-is",level:3},{value:"What Buz Is Not:",id:"what-buz-is-not",level:3},{value:"More:",id:"more",level:3}],c={toc:u};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"send-pixel-data-to-clickhouse-using-buz"},"Send Pixel data to Clickhouse using Buz."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"buzz",src:a(976).Z,width:"4000",height:"1389"})),(0,n.kt)("h2",{id:"buz-makes-it-easy-to-collect-validate-and-load-your-pixel-data-to-clickhouse"},"Buz makes it easy to collect, validate, and load your Pixel data to Clickhouse."),(0,n.kt)("h3",{id:"what-buz-is"},"What Buz Is:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"open source project")," aimed at making data collection and integration easy."),(0,n.kt)("li",{parentName:"ul"},"A lightweight, standalone binary built with Go."),(0,n.kt)("li",{parentName:"ul"},"A system that collects data from multiple sources (webhooks, pixels, Cloudevents, Snowplow Analytics SDK's, and more)."),(0,n.kt)("li",{parentName:"ul"},"A validator for enforcing data quality on its way in the door."),(0,n.kt)("li",{parentName:"ul"},'An obsolete form of "',(0,n.kt)("a",{parentName:"li",href:"https://www.merriam-webster.com/dictionary/buzz"},"buzz"),'."')),(0,n.kt)("h3",{id:"what-buz-is-not"},"What Buz Is Not:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"YAD (yet-another database)."),(0,n.kt)("li",{parentName:"ul"},"A meme."),(0,n.kt)("li",{parentName:"ul"},"Difficult to set up."),(0,n.kt)("li",{parentName:"ul"},"Difficult to keep running.")),(0,n.kt)("h3",{id:"more"},"More:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u2b50 Buz on ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"Github")),(0,n.kt)("li",{parentName:"ul"},"Browse Buz ",(0,n.kt)("a",{parentName:"li",href:"/"},"Documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/examples/quickstart"},"Quickstart")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"category/deploying-buz"},"Deploy")," Buz")))}s.isMDXComponent=!0},976:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/buzz-5b8a41395298716325cb3c6ea4becb6d.png"}}]);