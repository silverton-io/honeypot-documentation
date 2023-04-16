"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9701],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},i="Event-Level Metrics",s={unversionedId:"under-the-hood/tools/metrics",id:"under-the-hood/tools/metrics",title:"Event-Level Metrics",description:"Each Buz instance has an onboard metrics endpoint located at /stats.",source:"@site/docs/under-the-hood/tools/metrics.md",sourceDirName:"under-the-hood/tools",slug:"/under-the-hood/tools/metrics",permalink:"/under-the-hood/tools/metrics",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Self-Contained Tools",permalink:"/category/self-contained-tools"},next:{title:"Squawkbox",permalink:"/under-the-hood/tools/squawkbox"}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"event-level-metrics"},"Event-Level Metrics"),(0,o.kt)("p",null,"Each Buz instance has an onboard metrics endpoint located at ",(0,o.kt)("inlineCode",{parentName:"p"},"/stats"),"."),(0,o.kt)("admonition",{title:"Heads up",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Stats responses look like the following:")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},'{\n  "collectorMeta": {\n    "version": "v0.11.10",\n    "name": "silverton",\n    "instanceId": "7d3a2bca-5300-4410-b2cc-5d87bb90d093",\n    "startTime": "2022-08-17T18:15:53.778068427Z",\n    "trackerDomain": "somewheres.io",\n    "cookieDomain": ".somewheres.io"\n  },\n  "stats": {\n    "invalid": {\n      "cloudevents": {},\n      "generic": {},\n      "pixel": {},\n      "snowplow": {},\n      "webhook": {}\n    },\n    "valid": {\n      "cloudevents": {},\n      "generic": {\n        "buz.internal.tele.beat": 75555,\n        "buz.internal.tele.shutdown": 56,\n        "buz.internal.tele.startup": 43\n      },\n      "pixel": {},\n      "snowplow": {},\n      "webhook": { "hook.repository": 606 }\n    }\n  }\n}\n\n'))))}u.isMDXComponent=!0}}]);