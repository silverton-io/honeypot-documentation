"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2454],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(t),f=r,m=d["".concat(s,".").concat(f)]||d[f]||l[f]||a;return t?o.createElement(m,i(i({ref:n},p),{},{components:t})):o.createElement(m,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6365:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return l}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],u={sidebar_position:4},s="Mongodb",c={unversionedId:"outputs/database/mongodb",id:"outputs/database/mongodb",title:"Mongodb",description:"\ud83d\udfe2 Supported",source:"@site/docs/outputs/database/mongodb.md",sourceDirName:"outputs/database",slug:"/outputs/database/mongodb",permalink:"/outputs/database/mongodb",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"MySQL",permalink:"/outputs/database/mysql"},next:{title:"Elasticsearch",permalink:"/outputs/database/elasticsearch"}},p={},l=[{value:"Sample Mongodb Sink Configuration",id:"sample-mongodb-sink-configuration",level:2}],d={toc:l};function f(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mongodb"},"Mongodb"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud83d\udfe2 Supported")),(0,a.kt)("p",null,"The Mongodb sink writes ",(0,a.kt)("inlineCode",{parentName:"p"},"valid")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"invalid")," events to the configured collections."),(0,a.kt)("p",null,"Collections are ensured via the nature of Mongodb, so manual creation is not required."),(0,a.kt)("h2",{id:"sample-mongodb-sink-configuration"},"Sample Mongodb Sink Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sinks:\n  - name: docsfordays\n    type: mongodb\n    deliveryRequired: true\n    mongoHosts:\n      - mongodb1\n      - mongodb2\n    mongoPort: 27017\n    mongoDbName: honeypot\n    mongoUser: hpt\n    mongoPass: hpt\n    validCollection: honeypotValid\n    invalidCollection: honeypotInvalid\n")))}f.isMDXComponent=!0}}]);