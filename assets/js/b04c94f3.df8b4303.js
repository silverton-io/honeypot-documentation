"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9343],{3905:(t,e,o)=>{o.d(e,{Zo:()=>u,kt:()=>m});var n=o(7294);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e){if(null==t)return{};var o,n,a=function(t,e){if(null==t)return{};var o,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var c=n.createContext({}),s=function(t){var e=n.useContext(c),o=e;return t&&(o="function"==typeof t?t(e):l(l({},e),t)),o},u=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var o=t.components,a=t.mdxType,r=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=s(o),m=a,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return o?n.createElement(y,l(l({ref:e},u),{},{components:o})):n.createElement(y,l({ref:e},u))}));function m(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=o.length,l=new Array(r);l[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var s=2;s<r;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},7912:(t,e,o)=>{o.r(e),o.d(e,{contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=o(7462),a=(o(7294),o(3905));const r={title:"Snowplow Analytics to Mongodb with Buz",description:"Buz is an open source project that makes it easy to collect, validate, and load Snowplow Analytics data to Mongodb.",keywords:["Snowplow Analytics","Mongodb","Buz"]},l="Send Snowplow Analytics data to Mongodb using Buz.",i={type:"mdx",permalink:"/connections/snowplow_analytics_to_mongodb",source:"@site/src/pages/connections/snowplow_analytics_to_mongodb.md",title:"Snowplow Analytics to Mongodb with Buz",description:"Buz is an open source project that makes it easy to collect, validate, and load Snowplow Analytics data to Mongodb.",frontMatter:{title:"Snowplow Analytics to Mongodb with Buz",description:"Buz is an open source project that makes it easy to collect, validate, and load Snowplow Analytics data to Mongodb.",keywords:["Snowplow Analytics","Mongodb","Buz"]}},c=[{value:"Buz makes it easy to collect, validate, and load your Snowplow Analytics data to Mongodb.",id:"buz-makes-it-easy-to-collect-validate-and-load-your-snowplow-analytics-data-to-mongodb",level:2},{value:"What Buz Is:",id:"what-buz-is",level:3},{value:"What Buz Is Not:",id:"what-buz-is-not",level:3},{value:"More:",id:"more",level:3}],s={toc:c};function u(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"send-snowplow-analytics-data-to-mongodb-using-buz"},"Send Snowplow Analytics data to Mongodb using Buz."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"buzz",src:o(976).Z,width:"4000",height:"1389"})),(0,a.kt)("h2",{id:"buz-makes-it-easy-to-collect-validate-and-load-your-snowplow-analytics-data-to-mongodb"},"Buz makes it easy to collect, validate, and load your Snowplow Analytics data to Mongodb."),(0,a.kt)("h3",{id:"what-buz-is"},"What Buz Is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"open source project")," aimed at making data collection and integration easy."),(0,a.kt)("li",{parentName:"ul"},"A lightweight, standalone binary built with Go."),(0,a.kt)("li",{parentName:"ul"},"A system that collects data from multiple sources (webhooks, pixels, Cloudevents, Snowplow Analytics SDK's, and more)."),(0,a.kt)("li",{parentName:"ul"},"A validator for enforcing data quality on its way in the door."),(0,a.kt)("li",{parentName:"ul"},'An obsolete form of "',(0,a.kt)("a",{parentName:"li",href:"https://www.merriam-webster.com/dictionary/buzz"},"buzz"),'."')),(0,a.kt)("h3",{id:"what-buz-is-not"},"What Buz Is Not:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"YAD (yet-another database)."),(0,a.kt)("li",{parentName:"ul"},"A meme."),(0,a.kt)("li",{parentName:"ul"},"Difficult to set up."),(0,a.kt)("li",{parentName:"ul"},"Difficult to keep running.")),(0,a.kt)("h3",{id:"more"},"More:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2b50 Buz on ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"Github")),(0,a.kt)("li",{parentName:"ul"},"Browse Buz ",(0,a.kt)("a",{parentName:"li",href:"/"},"Documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/examples/quickstart"},"Quickstart")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"category/deploying-buz"},"Deploy")," Buz")))}u.isMDXComponent=!0},976:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/buzz-5b8a41395298716325cb3c6ea4becb6d.png"}}]);