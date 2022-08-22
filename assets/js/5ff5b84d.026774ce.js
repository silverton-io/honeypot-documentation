"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9028],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>m});var n=a(7294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var c=n.createContext({}),s=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=s(a),m=o,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return a?n.createElement(y,l(l({ref:e},u),{},{components:a})):n.createElement(y,l({ref:e},u))}));function m(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1544:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={title:"Snowplow Analytics to Elasticsearch with Buz",description:"Buz is an open source project that makes it easy to collect, validate, and load Snowplow Analytics data to Elasticsearch.",keywords:["Snowplow Analytics","Elasticsearch","Buz"]},l="Send Snowplow Analytics data to Elasticsearch using Buz.",i={type:"mdx",permalink:"/connections/snowplow_analytics_to_elasticsearch",source:"@site/src/pages/connections/snowplow_analytics_to_elasticsearch.md",title:"Snowplow Analytics to Elasticsearch with Buz",description:"Buz is an open source project that makes it easy to collect, validate, and load Snowplow Analytics data to Elasticsearch.",frontMatter:{title:"Snowplow Analytics to Elasticsearch with Buz",description:"Buz is an open source project that makes it easy to collect, validate, and load Snowplow Analytics data to Elasticsearch.",keywords:["Snowplow Analytics","Elasticsearch","Buz"]}},c=[{value:"Buz makes it easy to collect, validate, and load your Snowplow Analytics data to Elasticsearch.",id:"buz-makes-it-easy-to-collect-validate-and-load-your-snowplow-analytics-data-to-elasticsearch",level:2},{value:"What Buz Is:",id:"what-buz-is",level:3},{value:"What Buz Is Not:",id:"what-buz-is-not",level:3},{value:"More:",id:"more",level:3}],s={toc:c};function u(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"send-snowplow-analytics-data-to-elasticsearch-using-buz"},"Send Snowplow Analytics data to Elasticsearch using Buz."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"buzz",src:a(976).Z,width:"4000",height:"1389"})),(0,o.kt)("h2",{id:"buz-makes-it-easy-to-collect-validate-and-load-your-snowplow-analytics-data-to-elasticsearch"},"Buz makes it easy to collect, validate, and load your Snowplow Analytics data to Elasticsearch."),(0,o.kt)("h3",{id:"what-buz-is"},"What Buz Is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"open source project")," aimed at making data collection and integration easy."),(0,o.kt)("li",{parentName:"ul"},"A lightweight, standalone binary built with Go."),(0,o.kt)("li",{parentName:"ul"},"A system that collects data from multiple sources (webhooks, pixels, Cloudevents, Snowplow Analytics SDK's, and more)."),(0,o.kt)("li",{parentName:"ul"},"A validator for enforcing data quality on its way in the door."),(0,o.kt)("li",{parentName:"ul"},'An obsolete form of "',(0,o.kt)("a",{parentName:"li",href:"https://www.merriam-webster.com/dictionary/buzz"},"buzz"),'."')),(0,o.kt)("h3",{id:"what-buz-is-not"},"What Buz Is Not:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"YAD (yet-another database)."),(0,o.kt)("li",{parentName:"ul"},"A meme."),(0,o.kt)("li",{parentName:"ul"},"Difficult to set up."),(0,o.kt)("li",{parentName:"ul"},"Difficult to keep running.")),(0,o.kt)("h3",{id:"more"},"More:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u2b50 Buz on ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"Github")),(0,o.kt)("li",{parentName:"ul"},"Browse Buz ",(0,o.kt)("a",{parentName:"li",href:"/"},"Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/examples/quickstart"},"Quickstart")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"category/deploying-buz"},"Deploy")," Buz")))}u.isMDXComponent=!0},976:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/buzz-5b8a41395298716325cb3c6ea4becb6d.png"}}]);