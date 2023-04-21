"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4127],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,b=d["".concat(u,".").concat(f)]||d[f]||c[f]||o;return r?n.createElement(b,s(s({ref:t},l),{},{components:r})):n.createElement(b,s({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2445:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},s="Postgres",i={unversionedId:"outputs/database/postgres",id:"outputs/database/postgres",title:"Postgres",description:"\ud83d\udfe2 Supported",source:"@site/docs/outputs/database/postgres.md",sourceDirName:"outputs/database",slug:"/outputs/database/postgres",permalink:"/outputs/database/postgres",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Database Sinks",permalink:"/category/database-sinks"},next:{title:"MySQL",permalink:"/outputs/database/mysql"}},u={},p=[{value:"Sample Postgres Sink Configuration",id:"sample-postgres-sink-configuration",level:2}],l={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"postgres"},"Postgres"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud83d\udfe2 Supported")),(0,a.kt)("p",null,"The Postgres sink writes events to the configured Postgres tables."),(0,a.kt)("p",null,"It is especially useful if you already have Postgres running and want to quickly get started with Buz-based event tracking."),(0,a.kt)("p",null,"Tables are ensured upon Buz startup, so manual creation is not required."),(0,a.kt)("h2",{id:"sample-postgres-sink-configuration"},"Sample Postgres Sink Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sinks:\n  - name: pg1\n    type: postgres\n    deliveryRequired: true\n    hosts:\n      - 127.0.0.1\n    port: 5432\n    database: buz\n    user: buz\n    password: buz\n    defaultOutput: buz_events\n    deadletterOutput: buz_invalid_events\n")))}c.isMDXComponent=!0}}]);