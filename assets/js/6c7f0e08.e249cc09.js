"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9736],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),b=i,f=d["".concat(u,".").concat(b)]||d[b]||l[b]||o;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2257:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:6},a="AWS Eventbridge",s={unversionedId:"outputs/messageBus/aws-eventbridge",id:"outputs/messageBus/aws-eventbridge",title:"AWS Eventbridge",description:"\ud83d\udfe2 Supported",source:"@site/docs/outputs/messageBus/aws-eventbridge.md",sourceDirName:"outputs/messageBus",slug:"/outputs/messageBus/aws-eventbridge",permalink:"/outputs/messageBus/aws-eventbridge",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"Message Broker Sinks",permalink:"/category/message-broker-sinks"},next:{title:"NATS",permalink:"/outputs/messageBus/nats"}},u={},p=[{value:"Sample AWS Eventbridge Sink Configuration",id:"sample-aws-eventbridge-sink-configuration",level:2}],c={toc:p};function l(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"aws-eventbridge"},"AWS Eventbridge"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\ud83d\udfe2 Supported")),(0,i.kt)("p",null,"The Eventbridge sink writes events to the configured bus."),(0,i.kt)("h2",{id:"sample-aws-eventbridge-sink-configuration"},"Sample AWS Eventbridge Sink Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sinks:\n  - name: bridge\n    type: eventbridge\n    deliveryRequired: true\n    defaultOutput: buz_events\n    deadletterOutput: buz_invalid_events\n")))}l.isMDXComponent=!0}}]);