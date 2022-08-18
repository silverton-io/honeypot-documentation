"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4955],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,b=p["".concat(u,".").concat(m)]||p[m]||l[m]||a;return t?r.createElement(b,c(c({ref:n},d),{},{components:t})):r.createElement(b,c({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2007:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),c=["components"],i={},u="MongoDb",s={unversionedId:"under-the-hood/cache-backends/database/mongodb",id:"under-the-hood/cache-backends/database/mongodb",title:"MongoDb",description:"\ud83d\udfe2 Supported",source:"@site/docs/under-the-hood/cache-backends/database/mongodb.md",sourceDirName:"under-the-hood/cache-backends/database",slug:"/under-the-hood/cache-backends/database/mongodb",permalink:"/under-the-hood/cache-backends/database/mongodb",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Materialize",permalink:"/under-the-hood/cache-backends/database/materialize"},next:{title:"MySQL",permalink:"/under-the-hood/cache-backends/database/mysql"}},d={},l=[{value:"Sample Mongodb Schema Cache Backend Configuration",id:"sample-mongodb-schema-cache-backend-configuration",level:2}],p={toc:l};function m(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mongodb"},"MongoDb"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud83d\udfe2 Supported")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"mongodb")," schema cache backend leverages schemas stored in a configurable registry collection."),(0,a.kt)("p",null,"It is most useful when you want to store ",(0,a.kt)("inlineCode",{parentName:"p"},"schemas"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"valid events"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"invalid events")," within the same system to reduce infrastructure overhead."),(0,a.kt)("p",null,"It can be used with any combination of sink(s)."),(0,a.kt)("h2",{id:"sample-mongodb-schema-cache-backend-configuration"},"Sample Mongodb Schema Cache Backend Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"schemaCache:\n  backend:\n    type: mongodb\n    registryCollection: registry\n    mongoHosts:\n      - 127.0.0.1\n    mongoPort: 27017\n    mongoDbName: honeypot\n    mongoUser: honeypot\n    mongoPass: honeypot\n")))}m.isMDXComponent=!0}}]);