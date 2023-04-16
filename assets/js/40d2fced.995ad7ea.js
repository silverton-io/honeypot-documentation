"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7779],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=p(r),m=i,d=f["".concat(u,".").concat(m)]||f[m]||c[m]||s;return r?n.createElement(d,o(o({ref:t},l),{},{components:r})):n.createElement(d,o({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,o=new Array(s);o[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4213:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const s={sidebar_position:4},o="AWS Kinesis Firehose",a={unversionedId:"outputs/stream/kinesis-firehose",id:"outputs/stream/kinesis-firehose",title:"AWS Kinesis Firehose",description:"\ud83d\udfe2 Supported",source:"@site/docs/outputs/stream/kinesis-firehose.md",sourceDirName:"outputs/stream",slug:"/outputs/stream/kinesis-firehose",permalink:"/outputs/stream/kinesis-firehose",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"AWS Kinesis",permalink:"/outputs/stream/kinesis"},next:{title:"NATS Jetstream",permalink:"/outputs/stream/nats-jetstream"}},u={},p=[{value:"Sample AWS Kinesis Firehose Sink Configuration",id:"sample-aws-kinesis-firehose-sink-configuration",level:2}],l={toc:p};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"aws-kinesis-firehose"},"AWS Kinesis Firehose"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\ud83d\udfe2 Supported")),(0,i.kt)("p",null,"The Kinesis Firehose sink writes ",(0,i.kt)("inlineCode",{parentName:"p"},"valid")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"invalid")," events to the configured streams. It is especially useful when wanting to write incoming events directly to S3."),(0,i.kt)("h2",{id:"sample-aws-kinesis-firehose-sink-configuration"},"Sample AWS Kinesis Firehose Sink Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sinks:\n  - name: firehose\n    type: kinesis-firehose\n    deliveryRequired: true\n    defaultOutput: buz_events\n    deadletterOutput: buz_invalid_events\n")))}c.isMDXComponent=!0}}]);