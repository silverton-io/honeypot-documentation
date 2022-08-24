"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8078],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(y,r(r({ref:t},u),{},{components:n})):a.createElement(y,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},277:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const i={title:"Snowplow Analytics to Kinesis Firehose with Buz",description:"Buz is an open source project that makes it easy to collect, validate, and load Snowplow Analytics data to Kinesis Firehose.",keywords:["Snowplow Analytics","Kinesis Firehose","Buz"]},r="Send Snowplow Analytics data to Kinesis Firehose using Buz.",l={type:"mdx",permalink:"/connections/snowplow_analytics_to_kinesis_firehose",source:"@site/src/pages/connections/snowplow_analytics_to_kinesis_firehose.md",title:"Snowplow Analytics to Kinesis Firehose with Buz",description:"Buz is an open source project that makes it easy to collect, validate, and load Snowplow Analytics data to Kinesis Firehose.",frontMatter:{title:"Snowplow Analytics to Kinesis Firehose with Buz",description:"Buz is an open source project that makes it easy to collect, validate, and load Snowplow Analytics data to Kinesis Firehose.",keywords:["Snowplow Analytics","Kinesis Firehose","Buz"]}},s=[{value:"Buz makes it easy to collect, validate, and load your Snowplow Analytics data to Kinesis Firehose.",id:"buz-makes-it-easy-to-collect-validate-and-load-your-snowplow-analytics-data-to-kinesis-firehose",level:2},{value:"What Buz Is:",id:"what-buz-is",level:3},{value:"What Buz Is Not:",id:"what-buz-is-not",level:3},{value:"More:",id:"more",level:3}],c={toc:s};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"send-snowplow-analytics-data-to-kinesis-firehose-using-buz"},"Send Snowplow Analytics data to Kinesis Firehose using Buz."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"buzz",src:n(976).Z,width:"4000",height:"1389"})),(0,o.kt)("h2",{id:"buz-makes-it-easy-to-collect-validate-and-load-your-snowplow-analytics-data-to-kinesis-firehose"},"Buz makes it easy to collect, validate, and load your Snowplow Analytics data to Kinesis Firehose."),(0,o.kt)("h3",{id:"what-buz-is"},"What Buz Is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"open source project")," aimed at making data collection and integration easy."),(0,o.kt)("li",{parentName:"ul"},"A lightweight, standalone binary built with Go."),(0,o.kt)("li",{parentName:"ul"},"A system that collects data from multiple sources (webhooks, pixels, Cloudevents, Snowplow Analytics SDK's, and more)."),(0,o.kt)("li",{parentName:"ul"},"A validator for enforcing data quality on its way in the door."),(0,o.kt)("li",{parentName:"ul"},'An obsolete form of "',(0,o.kt)("a",{parentName:"li",href:"https://www.merriam-webster.com/dictionary/buzz"},"buzz"),'."')),(0,o.kt)("h3",{id:"what-buz-is-not"},"What Buz Is Not:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"YAD (yet-another database)."),(0,o.kt)("li",{parentName:"ul"},"A meme."),(0,o.kt)("li",{parentName:"ul"},"Difficult to set up."),(0,o.kt)("li",{parentName:"ul"},"Difficult to keep running.")),(0,o.kt)("h3",{id:"more"},"More:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u2b50 Buz on ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"Github")),(0,o.kt)("li",{parentName:"ul"},"Browse Buz ",(0,o.kt)("a",{parentName:"li",href:"/"},"Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/examples/quickstart"},"Quickstart")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/category/deploying-buz"},"Deploy")," Buz")))}u.isMDXComponent=!0},976:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/buzz-5b8a41395298716325cb3c6ea4becb6d.png"}}]);