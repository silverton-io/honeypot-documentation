"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2610],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||c;return r?n.createElement(b,o(o({ref:t},u),{},{components:r})):n.createElement(b,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<c;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7094:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const c={},o="Clickhouse",s={unversionedId:"schema-registry/backends/database/clickhouse",id:"schema-registry/backends/database/clickhouse",title:"Clickhouse",description:"\ud83d\udfe2 Supported",source:"@site/docs/schema-registry/backends/database/clickhouse.md",sourceDirName:"schema-registry/backends/database",slug:"/schema-registry/backends/database/clickhouse",permalink:"/schema-registry/backends/database/clickhouse",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Database"},next:{title:"MongoDb",permalink:"/schema-registry/backends/database/mongodb"}},i={},l=[{value:"Sample Clickhouse Schema Cache Backend Configuration",id:"sample-clickhouse-schema-cache-backend-configuration",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"clickhouse"},"Clickhouse"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud83d\udfe2 Supported")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse")," backend leverages schemas stored in a configurable registry table to back the onboard schema cache."),(0,a.kt)("p",null,"It is most useful when you want to store ",(0,a.kt)("inlineCode",{parentName:"p"},"schemas")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"events")," within the same system to reduce infrastructure overhead."),(0,a.kt)("p",null,"It can be used with any combination of sink(s)."),(0,a.kt)("h2",{id:"sample-clickhouse-schema-cache-backend-configuration"},"Sample Clickhouse Schema Cache Backend Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"registry:\n  backend:\n    type: clickhouse\n    registryTable: registry\n    clickhouseHost: 127.0.0.1\n    clickhousePort: 9000\n    clickhouseDbName: buz\n    clickhouseUser: buz\n    clickhousePass: buz\n")))}p.isMDXComponent=!0}}]);