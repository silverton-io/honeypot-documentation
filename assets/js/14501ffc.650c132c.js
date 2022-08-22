"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3647],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>d});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=o.createContext({}),c=function(t){var e=o.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=c(t.components);return o.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=c(n),d=a,b=m["".concat(u,".").concat(d)]||m[d]||p[d]||r;return n?o.createElement(b,l(l({ref:e},s),{},{components:n})):o.createElement(b,l({ref:e},s))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6803:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const r={},l="Send Snowplow Analytics data to Mongodb using Buz.",i={type:"mdx",permalink:"/connections/snowplow%20analytics_to_mongodb",source:"@site/src/pages/connections/snowplow analytics_to_mongodb.md",title:"Send Snowplow Analytics data to Mongodb using Buz.",description:"buzz",frontMatter:{}},u=[{value:"Buz makes it easy to collect and load your Snowplow Analytics data to Mongodb.",id:"buz-makes-it-easy-to-collect-and-load-your-snowplow-analytics-data-to-mongodb",level:2},{value:"What Buz Is:",id:"what-buz-is",level:3},{value:"What Buz Is Not:",id:"what-buz-is-not",level:3},{value:"More:",id:"more",level:3}],c={toc:u};function s(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"send-snowplow-analytics-data-to-mongodb-using-buz"},"Send Snowplow Analytics data to Mongodb using Buz."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"buzz",src:n(976).Z,width:"4000",height:"1389"})),(0,a.kt)("h2",{id:"buz-makes-it-easy-to-collect-and-load-your-snowplow-analytics-data-to-mongodb"},"Buz makes it easy to collect and load your Snowplow Analytics data to Mongodb."),(0,a.kt)("h3",{id:"what-buz-is"},"What Buz Is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"open source project")," aimed at making data collection and integration easy."),(0,a.kt)("li",{parentName:"ul"},"A lightweight, standalone binary built with Go."),(0,a.kt)("li",{parentName:"ul"},"A system that collects data from multiple sources (webhooks, pixels, Cloudevents, Snowplow Analytics SDK's, and more)."),(0,a.kt)("li",{parentName:"ul"},"A validator for enforcing data quality on its way in the door."),(0,a.kt)("li",{parentName:"ul"},'An obsolete form of "',(0,a.kt)("a",{parentName:"li",href:"https://www.merriam-webster.com/dictionary/buzz"},"buzz"),'."')),(0,a.kt)("h3",{id:"what-buz-is-not"},"What Buz Is Not:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"YAD (yet-another database)."),(0,a.kt)("li",{parentName:"ul"},"A meme."),(0,a.kt)("li",{parentName:"ul"},"Difficult to set up."),(0,a.kt)("li",{parentName:"ul"},"Difficult to keep running.")),(0,a.kt)("h3",{id:"more"},"More:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2b50 Buz on ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"Github")),(0,a.kt)("li",{parentName:"ul"},"Browse Buz ",(0,a.kt)("a",{parentName:"li",href:"/"},"Documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/examples/quickstart"},"Quickstart")),(0,a.kt)("li",{parentName:"ul"},"[Deploy]"," Buz(category/deploying-buz)")))}s.isMDXComponent=!0},976:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/buzz-5b8a41395298716325cb3c6ea4becb6d.png"}}]);