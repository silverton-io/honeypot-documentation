"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,b=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(b,i(i({ref:t},l),{},{components:n})):r.createElement(b,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={},i="MongoDb",c={unversionedId:"under-the-hood/registry/backends/database/mongodb",id:"under-the-hood/registry/backends/database/mongodb",title:"MongoDb",description:"\ud83d\udfe2 Supported",source:"@site/docs/under-the-hood/registry/backends/database/mongodb.md",sourceDirName:"under-the-hood/registry/backends/database",slug:"/under-the-hood/registry/backends/database/mongodb",permalink:"/under-the-hood/registry/backends/database/mongodb",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Materialize",permalink:"/under-the-hood/registry/backends/database/materialize"},next:{title:"MySQL",permalink:"/under-the-hood/registry/backends/database/mysql"}},s={},d=[{value:"Sample Mongodb Schema Cache Backend Configuration",id:"sample-mongodb-schema-cache-backend-configuration",level:2}],l={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mongodb"},"MongoDb"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\ud83d\udfe2 Supported")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"mongodb")," schema cache backend leverages schemas stored in a configurable registry collection."),(0,o.kt)("p",null,"It is most useful when you want to store ",(0,o.kt)("inlineCode",{parentName:"p"},"schemas"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"valid events"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"invalid events")," within the same system to reduce infrastructure overhead."),(0,o.kt)("p",null,"It can be used with any combination of sink(s)."),(0,o.kt)("h2",{id:"sample-mongodb-schema-cache-backend-configuration"},"Sample Mongodb Schema Cache Backend Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"registry:\n  backend:\n    type: mongodb\n    registryCollection: registry\n    mongoHosts:\n      - 127.0.0.1\n    mongoPort: 27017\n    mongoDbName: buz\n    mongoUser: buz\n    mongoPass: buz\n")))}u.isMDXComponent=!0}}]);