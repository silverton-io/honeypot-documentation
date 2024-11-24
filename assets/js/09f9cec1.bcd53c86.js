"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2143],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4152:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={},o="Materialize",c={unversionedId:"schema-registry/backends/saas/materialize",id:"schema-registry/backends/saas/materialize",title:"Materialize",description:"\ud83d\udfe2 Supported",source:"@site/docs/schema-registry/backends/saas/materialize.md",sourceDirName:"schema-registry/backends/saas",slug:"/schema-registry/backends/saas/materialize",permalink:"/schema-registry/backends/saas/materialize",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Saas"},next:{title:"Middleware",permalink:"/category/middleware"}},s={},l=[{value:"Sample Materialize Schema Cache Backend Configuration",id:"sample-materialize-schema-cache-backend-configuration",level:2}],p={toc:l};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"materialize"},"Materialize"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\ud83d\udfe2 Supported")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"materialize")," schema cache backend leverages schemas stored in a configurable registry table."),(0,n.kt)("p",null,"It is most useful when you want to store ",(0,n.kt)("inlineCode",{parentName:"p"},"schemas"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"events")," within the same system to reduce infrastructure overhead."),(0,n.kt)("p",null,"It can be used with any combination of sink(s)."),(0,n.kt)("h2",{id:"sample-materialize-schema-cache-backend-configuration"},"Sample Materialize Schema Cache Backend Configuration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'registry:\n  backend:\n    type: materialize\n    registryTable: registry\n    mzHost: localhost\n    mzPort: 6875\n    mzDbName: materialize\n    mzUser: materialize\n    mzPass: ""\n')))}m.isMDXComponent=!0}}]);