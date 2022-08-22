"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1465],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),c=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=c(n),d=r,y=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return n?a.createElement(y,l(l({ref:e},p),{},{components:n})):a.createElement(y,l({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},858:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={},l="Send Snowplow Analytics data to Amplitude using Buz.",i={type:"mdx",permalink:"/connections/snowplow%20analytics_to_amplitude",source:"@site/src/pages/connections/snowplow analytics_to_amplitude.md",title:"Send Snowplow Analytics data to Amplitude using Buz.",description:"buzz",frontMatter:{}},u=[{value:"Buz makes it easy to collect and load your Snowplow Analytics data to Amplitude.",id:"buz-makes-it-easy-to-collect-and-load-your-snowplow-analytics-data-to-amplitude",level:2},{value:"What Buz Is:",id:"what-buz-is",level:3},{value:"What Buz Is Not:",id:"what-buz-is-not",level:3},{value:"More:",id:"more",level:3}],c={toc:u};function p(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"send-snowplow-analytics-data-to-amplitude-using-buz"},"Send Snowplow Analytics data to Amplitude using Buz."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"buzz",src:n(976).Z,width:"4000",height:"1389"})),(0,r.kt)("h2",{id:"buz-makes-it-easy-to-collect-and-load-your-snowplow-analytics-data-to-amplitude"},"Buz makes it easy to collect and load your Snowplow Analytics data to Amplitude."),(0,r.kt)("h3",{id:"what-buz-is"},"What Buz Is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"open source project")," aimed at making data collection and integration easy."),(0,r.kt)("li",{parentName:"ul"},"A lightweight, standalone binary built with Go."),(0,r.kt)("li",{parentName:"ul"},"A system that collects data from multiple sources (webhooks, pixels, Cloudevents, Snowplow Analytics SDK's, and more)."),(0,r.kt)("li",{parentName:"ul"},"A validator for enforcing data quality on its way in the door."),(0,r.kt)("li",{parentName:"ul"},'An obsolete form of "',(0,r.kt)("a",{parentName:"li",href:"https://www.merriam-webster.com/dictionary/buzz"},"buzz"),'."')),(0,r.kt)("h3",{id:"what-buz-is-not"},"What Buz Is Not:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"YAD (yet-another database)."),(0,r.kt)("li",{parentName:"ul"},"A meme."),(0,r.kt)("li",{parentName:"ul"},"Difficult to set up."),(0,r.kt)("li",{parentName:"ul"},"Difficult to keep running.")),(0,r.kt)("h3",{id:"more"},"More:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2b50 Buz on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"Github")),(0,r.kt)("li",{parentName:"ul"},"Browse Buz ",(0,r.kt)("a",{parentName:"li",href:"/"},"Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/examples/quickstart"},"Quickstart")),(0,r.kt)("li",{parentName:"ul"},"[Deploy]"," Buz(category/deploying-buz)")))}p.isMDXComponent=!0},976:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/buzz-5b8a41395298716325cb3c6ea4becb6d.png"}}]);