"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6049],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=u(n),g=a,k=m["".concat(p,".").concat(g)]||m[g]||d[g]||l;return n?r.createElement(k,o(o({ref:e},s),{},{components:n})):r.createElement(k,o({ref:e},s))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6667:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:1},o="Overview",i={unversionedId:"inputs/overview",id:"inputs/overview",title:"Overview",description:"Buz supports reading data from multiple input protocols, which are outlined below.",source:"@site/docs/inputs/overview.md",sourceDirName:"inputs",slug:"/inputs/overview",permalink:"/inputs/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Insiders Only",permalink:"/insiders-only"},next:{title:"Buz Inputs",permalink:"/category/buz-inputs"}},p={},u=[{value:"Inputs",id:"inputs",level:2}],s={toc:u};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Buz supports reading data from multiple input protocols, which are outlined below."),(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Source"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Supported?"),(0,a.kt)("th",{parentName:"tr",align:null},"Validated payloads?"),(0,a.kt)("th",{parentName:"tr",align:null},"Maintainer"),(0,a.kt)("th",{parentName:"tr",align:null},"More Details"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Webhooks"),(0,a.kt)("td",{parentName:"tr",align:null},"Buz"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes \u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes \u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83d\udc1d"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"/inputs/buz/webhook"},"Docs")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Pixels"),(0,a.kt)("td",{parentName:"tr",align:null},"Buz"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes \u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes \u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83d\udc1d"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"/inputs/buz/pixel"},"Docs")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Self-describing events"),(0,a.kt)("td",{parentName:"tr",align:null},"Buz"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes \u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes \u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83d\udc1d"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"/inputs/buz/self-describing"},"Docs")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"https://cloudevents.io/"},"Cloudevents"))),(0,a.kt)("td",{parentName:"tr",align:null},"Cloud-native"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes \u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes \u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83d\udc1d"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"/inputs/cloudNative/cloudevents"},"Docs")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"https://snowplow.io/"},"Snowplow Analytics"))),(0,a.kt)("td",{parentName:"tr",align:null},"Saas"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes \u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes \u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83d\udc1d"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"/inputs/saas/snowplow"},"Docs")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"https://www.postgresql.org/docs/current/logical-replication.html"},"CDC"))),(0,a.kt)("td",{parentName:"tr",align:null},"Buz"),(0,a.kt)("td",{parentName:"tr",align:null},"Not yet \u26a0\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"Not yet \u26a0\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"This could be you.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"https://opcfoundation.org/about/opc-technologies/opc-ua/"},"IOT - OPC/UA"))),(0,a.kt)("td",{parentName:"tr",align:null},"Buz"),(0,a.kt)("td",{parentName:"tr",align:null},"Not yet \u26a0\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"Not yet \u26a0\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"This could be you.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"https://www.postgresql.org/docs/current/logical-replication.html"},"Rudderstack"))),(0,a.kt)("td",{parentName:"tr",align:null},"Saas"),(0,a.kt)("td",{parentName:"tr",align:null},"Not yet \u26a0\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"Not yet \u26a0\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"This could be you.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"https://www.postgresql.org/docs/current/logical-replication.html"},"Segment"))),(0,a.kt)("td",{parentName:"tr",align:null},"Saas"),(0,a.kt)("td",{parentName:"tr",align:null},"Not yet \u26a0\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"Not yet \u26a0\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"This could be you.")))))}d.isMDXComponent=!0}}]);