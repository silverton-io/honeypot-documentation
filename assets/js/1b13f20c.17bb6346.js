"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2786],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4338:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={title:"Pixel to Vitess with Buz",description:"Buz is an open source project that makes it easy to collect, validate, and load Pixel data to Vitess.",keywords:["Pixel","Vitess","Buz"]},o="Send Pixel data to Vitess using Buz.",l={type:"mdx",permalink:"/connections/pixel_to_vitess",source:"@site/src/pages/connections/pixel_to_vitess.md",title:"Pixel to Vitess with Buz",description:"Buz is an open source project that makes it easy to collect, validate, and load Pixel data to Vitess.",frontMatter:{title:"Pixel to Vitess with Buz",description:"Buz is an open source project that makes it easy to collect, validate, and load Pixel data to Vitess.",keywords:["Pixel","Vitess","Buz"]}},s=[{value:"Buz makes it easy to collect, validate, and load your Pixel data to Vitess.",id:"buz-makes-it-easy-to-collect-validate-and-load-your-pixel-data-to-vitess",level:2},{value:"What Buz Is:",id:"what-buz-is",level:3},{value:"What Buz Is Not:",id:"what-buz-is-not",level:3},{value:"More:",id:"more",level:3}],u={toc:s};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"send-pixel-data-to-vitess-using-buz"},"Send Pixel data to Vitess using Buz."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"buzz",src:a(976).Z,width:"4000",height:"1389"})),(0,r.kt)("h2",{id:"buz-makes-it-easy-to-collect-validate-and-load-your-pixel-data-to-vitess"},"Buz makes it easy to collect, validate, and load your Pixel data to Vitess."),(0,r.kt)("h3",{id:"what-buz-is"},"What Buz Is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"open source project")," aimed at making data collection and integration easy."),(0,r.kt)("li",{parentName:"ul"},"A lightweight, standalone binary built with Go."),(0,r.kt)("li",{parentName:"ul"},"A system that collects data from multiple sources (webhooks, pixels, Cloudevents, Snowplow Analytics SDK's, and more)."),(0,r.kt)("li",{parentName:"ul"},"A validator for enforcing data quality on its way in the door."),(0,r.kt)("li",{parentName:"ul"},'An obsolete form of "',(0,r.kt)("a",{parentName:"li",href:"https://www.merriam-webster.com/dictionary/buzz"},"buzz"),'."')),(0,r.kt)("h3",{id:"what-buz-is-not"},"What Buz Is Not:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"YAD (yet-another database)."),(0,r.kt)("li",{parentName:"ul"},"A meme."),(0,r.kt)("li",{parentName:"ul"},"Difficult to set up."),(0,r.kt)("li",{parentName:"ul"},"Difficult to keep running.")),(0,r.kt)("h3",{id:"more"},"More:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2b50 Buz on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"Github")),(0,r.kt)("li",{parentName:"ul"},"Browse Buz ",(0,r.kt)("a",{parentName:"li",href:"/"},"Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/examples/quickstart"},"Quickstart")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"category/deploying-buz"},"Deploy")," Buz")))}c.isMDXComponent=!0},976:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/buzz-5b8a41395298716325cb3c6ea4becb6d.png"}}]);