"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1724],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8914:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={},l="Send Cloudevent data to Planetscale using Buz.",i={type:"mdx",permalink:"/connections/cloudevent_to_planetscale",source:"@site/src/pages/connections/cloudevent_to_planetscale.md",title:"Send Cloudevent data to Planetscale using Buz.",description:"buzz",frontMatter:{}},u=[{value:"Buz makes it easy to collect and load your Cloudevent data to Planetscale.",id:"buz-makes-it-easy-to-collect-and-load-your-cloudevent-data-to-planetscale",level:2},{value:"What Buz Is:",id:"what-buz-is",level:3},{value:"What Buz Is Not:",id:"what-buz-is-not",level:3},{value:"More:",id:"more",level:3}],c={toc:u};function s(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"send-cloudevent-data-to-planetscale-using-buz"},"Send Cloudevent data to Planetscale using Buz."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"buzz",src:n(976).Z,width:"4000",height:"1389"})),(0,r.kt)("h2",{id:"buz-makes-it-easy-to-collect-and-load-your-cloudevent-data-to-planetscale"},"Buz makes it easy to collect and load your Cloudevent data to Planetscale."),(0,r.kt)("h3",{id:"what-buz-is"},"What Buz Is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"open source project")," aimed at making data collection and integration easy."),(0,r.kt)("li",{parentName:"ul"},"A lightweight, standalone binary built with Go."),(0,r.kt)("li",{parentName:"ul"},"A system that collects data from multiple sources (webhooks, pixels, Cloudevents, Snowplow Analytics SDK's, and more)."),(0,r.kt)("li",{parentName:"ul"},"A validator for enforcing data quality on its way in the door."),(0,r.kt)("li",{parentName:"ul"},'An obsolete form of "',(0,r.kt)("a",{parentName:"li",href:"https://www.merriam-webster.com/dictionary/buzz"},"buzz"),'."')),(0,r.kt)("h3",{id:"what-buz-is-not"},"What Buz Is Not:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"YAD (yet-another database)."),(0,r.kt)("li",{parentName:"ul"},"A meme."),(0,r.kt)("li",{parentName:"ul"},"Difficult to set up."),(0,r.kt)("li",{parentName:"ul"},"Difficult to keep running.")),(0,r.kt)("h3",{id:"more"},"More:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2b50 Buz on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"Github")),(0,r.kt)("li",{parentName:"ul"},"Browse Buz ",(0,r.kt)("a",{parentName:"li",href:"/"},"Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/examples/quickstart"},"Quickstart")),(0,r.kt)("li",{parentName:"ul"},"[Deploy]"," Buz(category/deploying-buz)")))}s.isMDXComponent=!0},976:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/buzz-5b8a41395298716325cb3c6ea4becb6d.png"}}]);