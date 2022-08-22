"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8644],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,b=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8609:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},l="Send Pixel data to Mongodb using Buz.",i={type:"mdx",permalink:"/connections/pixel_to_mongodb",source:"@site/src/pages/connections/pixel_to_mongodb.md",title:"Send Pixel data to Mongodb using Buz.",description:"buzz",frontMatter:{}},u=[{value:"Buz makes it easy to collect and load your Pixel data to Mongodb.",id:"buz-makes-it-easy-to-collect-and-load-your-pixel-data-to-mongodb",level:2},{value:"What Buz Is:",id:"what-buz-is",level:3},{value:"What Buz Is Not:",id:"what-buz-is-not",level:3},{value:"More:",id:"more",level:3}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"send-pixel-data-to-mongodb-using-buz"},"Send Pixel data to Mongodb using Buz."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"buzz",src:n(976).Z,width:"4000",height:"1389"})),(0,a.kt)("h2",{id:"buz-makes-it-easy-to-collect-and-load-your-pixel-data-to-mongodb"},"Buz makes it easy to collect and load your Pixel data to Mongodb."),(0,a.kt)("h3",{id:"what-buz-is"},"What Buz Is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"open source project")," aimed at making data collection and integration easy."),(0,a.kt)("li",{parentName:"ul"},"A lightweight, standalone binary built with Go."),(0,a.kt)("li",{parentName:"ul"},"A system that collects data from multiple sources (webhooks, pixels, Cloudevents, Snowplow Analytics SDK's, and more)."),(0,a.kt)("li",{parentName:"ul"},"A validator for enforcing data quality on its way in the door."),(0,a.kt)("li",{parentName:"ul"},'An obsolete form of "',(0,a.kt)("a",{parentName:"li",href:"https://www.merriam-webster.com/dictionary/buzz"},"buzz"),'."')),(0,a.kt)("h3",{id:"what-buz-is-not"},"What Buz Is Not:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"YAD (yet-another database)."),(0,a.kt)("li",{parentName:"ul"},"A meme."),(0,a.kt)("li",{parentName:"ul"},"Difficult to set up."),(0,a.kt)("li",{parentName:"ul"},"Difficult to keep running.")),(0,a.kt)("h3",{id:"more"},"More:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2b50 Buz on ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"Github")),(0,a.kt)("li",{parentName:"ul"},"Browse Buz ",(0,a.kt)("a",{parentName:"li",href:"/"},"Documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/examples/quickstart"},"Quickstart")),(0,a.kt)("li",{parentName:"ul"},"[Deploy]"," Buz(category/deploying-buz)")))}p.isMDXComponent=!0},976:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/buzz-5b8a41395298716325cb3c6ea4becb6d.png"}}]);