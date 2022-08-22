"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7704],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||n;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<n;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3428:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var r=a(7462),o=(a(7294),a(3905));const n={title:"Pixel to Postgres with Buz",description:"Buz is an open source project that makes it easy to collect, validate, and load Pixel data to Postgres.",keywords:["Pixel","Postgres","Buz"]},i="Send Pixel data to Postgres using Buz.",l={type:"mdx",permalink:"/connections/pixel_to_postgres",source:"@site/src/pages/connections/pixel_to_postgres.md",title:"Pixel to Postgres with Buz",description:"Buz is an open source project that makes it easy to collect, validate, and load Pixel data to Postgres.",frontMatter:{title:"Pixel to Postgres with Buz",description:"Buz is an open source project that makes it easy to collect, validate, and load Pixel data to Postgres.",keywords:["Pixel","Postgres","Buz"]}},s=[{value:"Buz makes it easy to collect, validate, and load your Pixel data to Postgres.",id:"buz-makes-it-easy-to-collect-validate-and-load-your-pixel-data-to-postgres",level:2},{value:"What Buz Is:",id:"what-buz-is",level:3},{value:"What Buz Is Not:",id:"what-buz-is-not",level:3},{value:"More:",id:"more",level:3}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"send-pixel-data-to-postgres-using-buz"},"Send Pixel data to Postgres using Buz."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"buzz",src:a(976).Z,width:"4000",height:"1389"})),(0,o.kt)("h2",{id:"buz-makes-it-easy-to-collect-validate-and-load-your-pixel-data-to-postgres"},"Buz makes it easy to collect, validate, and load your Pixel data to Postgres."),(0,o.kt)("h3",{id:"what-buz-is"},"What Buz Is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"open source project")," aimed at making data collection and integration easy."),(0,o.kt)("li",{parentName:"ul"},"A lightweight, standalone binary built with Go."),(0,o.kt)("li",{parentName:"ul"},"A system that collects data from multiple sources (webhooks, pixels, Cloudevents, Snowplow Analytics SDK's, and more)."),(0,o.kt)("li",{parentName:"ul"},"A validator for enforcing data quality on its way in the door."),(0,o.kt)("li",{parentName:"ul"},'An obsolete form of "',(0,o.kt)("a",{parentName:"li",href:"https://www.merriam-webster.com/dictionary/buzz"},"buzz"),'."')),(0,o.kt)("h3",{id:"what-buz-is-not"},"What Buz Is Not:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"YAD (yet-another database)."),(0,o.kt)("li",{parentName:"ul"},"A meme."),(0,o.kt)("li",{parentName:"ul"},"Difficult to set up."),(0,o.kt)("li",{parentName:"ul"},"Difficult to keep running.")),(0,o.kt)("h3",{id:"more"},"More:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u2b50 Buz on ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"Github")),(0,o.kt)("li",{parentName:"ul"},"Browse Buz ",(0,o.kt)("a",{parentName:"li",href:"/"},"Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/examples/quickstart"},"Quickstart")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"category/deploying-buz"},"Deploy")," Buz")))}c.isMDXComponent=!0},976:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/buzz-5b8a41395298716325cb3c6ea4becb6d.png"}}]);