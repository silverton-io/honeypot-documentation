"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5447],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,u(u({ref:t},c),{},{components:r})):n.createElement(m,u({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,u=new Array(i);u[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var s=2;s<i;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6253:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),u=["components"],a={sidebar_position:3},l="Request Logger",s={unversionedId:"under-the-hood/middleware/request-logger",id:"under-the-hood/middleware/request-logger",title:"Request Logger",description:"\ud83d\udfe2 Supported",source:"@site/docs/under-the-hood/middleware/request-logger.md",sourceDirName:"under-the-hood/middleware",slug:"/under-the-hood/middleware/request-logger",permalink:"/under-the-hood/middleware/request-logger",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Rate Limiter",permalink:"/under-the-hood/middleware/rate-limiter"},next:{title:"Request Timeout",permalink:"/under-the-hood/middleware/timeout"}},c={},p=[{value:"Sample Request Logger Configuration",id:"sample-request-logger-configuration",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"request-logger"},"Request Logger"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\ud83d\udfe2 Supported")),(0,i.kt)("p",null,"The request logger middleware does exactly what it sounds like!"),(0,i.kt)("p",null,"It logs requests in the following form:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{"level":"info","request":{"responseCode":200,"requestDuration":7412000,"requestDurationForHumans":"7.412ms","clientIp":"127.0.0.1:59221","requestMethod":"POST","requestUri":"/com.snowplowanalytics.snowplow/tp2"},"time":"2022-04-28T00:58:15-04:00"}\n')),(0,i.kt)("h2",{id:"sample-request-logger-configuration"},"Sample Request Logger Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"requestLogger:\n  enabled: true\n")))}f.isMDXComponent=!0}}]);