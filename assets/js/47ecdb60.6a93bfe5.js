"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[887],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,u=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=s(r),d=o,f=b["".concat(p,".").concat(d)]||b[d]||c[d]||u;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=r.length,a=new Array(u);a[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<u;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},5800:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>u,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const u={sidebar_position:2},a="Google Pub/Sub",i={unversionedId:"outputs/stream/pubsub",id:"outputs/stream/pubsub",title:"Google Pub/Sub",description:"\ud83d\udfe2 Supported",source:"@site/docs/outputs/stream/pubsub.md",sourceDirName:"outputs/stream",slug:"/outputs/stream/pubsub",permalink:"/outputs/stream/pubsub",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Redpanda",permalink:"/outputs/stream/redpanda"},next:{title:"AWS Kinesis",permalink:"/outputs/stream/kinesis"}},p={},s=[{value:"Sample Google Pub/Sub Sink Configuration",id:"sample-google-pubsub-sink-configuration",level:2}],l={toc:s};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"google-pubsub"},"Google Pub/Sub"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\ud83d\udfe2 Supported")),(0,o.kt)("p",null,"The Google Pub/Sub sink writes ",(0,o.kt)("inlineCode",{parentName:"p"},"valid")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"invalid")," events to the configured topics."),(0,o.kt)("h2",{id:"sample-google-pubsub-sink-configuration"},"Sample Google Pub/Sub Sink Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sinks:\n  - name: pubsub\n    type: pubsub\n    deliveryRequired: true\n    project: YOURPROJECT\n    defaultOutput: buz_events\n    deadletterOutput: buz_invalid_events\n")))}c.isMDXComponent=!0}}]);