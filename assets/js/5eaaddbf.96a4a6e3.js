"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9186],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),u=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,b=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return a?r.createElement(b,l(l({ref:t},s),{},{components:a})):r.createElement(b,l({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5534:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={},l="Send Webhook data to Elasticsearch using Buz.",i={type:"mdx",permalink:"/connections/webhook_to_elasticsearch",source:"@site/src/pages/connections/webhook_to_elasticsearch.md",title:"Send Webhook data to Elasticsearch using Buz.",description:"buzz",frontMatter:{}},c=[{value:"Buz makes it easy to collect and load your Webhook data to Elasticsearch.",id:"buz-makes-it-easy-to-collect-and-load-your-webhook-data-to-elasticsearch",level:2},{value:"What Buz Is:",id:"what-buz-is",level:3},{value:"What Buz Is Not:",id:"what-buz-is-not",level:3},{value:"More:",id:"more",level:3}],u={toc:c};function s(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"send-webhook-data-to-elasticsearch-using-buz"},"Send Webhook data to Elasticsearch using Buz."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"buzz",src:a(976).Z,width:"4000",height:"1389"})),(0,n.kt)("h2",{id:"buz-makes-it-easy-to-collect-and-load-your-webhook-data-to-elasticsearch"},"Buz makes it easy to collect and load your Webhook data to Elasticsearch."),(0,n.kt)("h3",{id:"what-buz-is"},"What Buz Is:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"open source project")," aimed at making data collection and integration easy."),(0,n.kt)("li",{parentName:"ul"},"A lightweight, standalone binary built with Go."),(0,n.kt)("li",{parentName:"ul"},"A system that collects data from multiple sources (webhooks, pixels, Cloudevents, Snowplow Analytics SDK's, and more)."),(0,n.kt)("li",{parentName:"ul"},"A validator for enforcing data quality on its way in the door."),(0,n.kt)("li",{parentName:"ul"},'An obsolete form of "',(0,n.kt)("a",{parentName:"li",href:"https://www.merriam-webster.com/dictionary/buzz"},"buzz"),'."')),(0,n.kt)("h3",{id:"what-buz-is-not"},"What Buz Is Not:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"YAD (yet-another database)."),(0,n.kt)("li",{parentName:"ul"},"A meme."),(0,n.kt)("li",{parentName:"ul"},"Difficult to set up."),(0,n.kt)("li",{parentName:"ul"},"Difficult to keep running.")),(0,n.kt)("h3",{id:"more"},"More:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u2b50 Buz on ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"Github")),(0,n.kt)("li",{parentName:"ul"},"Browse Buz ",(0,n.kt)("a",{parentName:"li",href:"/"},"Documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/examples/quickstart"},"Quickstart")),(0,n.kt)("li",{parentName:"ul"},"[Deploy]"," Buz(category/deploying-buz)")))}s.isMDXComponent=!0},976:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/buzz-5b8a41395298716325cb3c6ea4becb6d.png"}}]);