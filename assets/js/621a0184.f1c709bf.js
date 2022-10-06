"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9707],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),b=i,f=d["".concat(l,".").concat(b)]||d[b]||p[b]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1,slug:"contributors-guide",title:"Contributors' Guide"},a=void 0,u={unversionedId:"contributing/contributors-guide",id:"contributing/contributors-guide",title:"Contributors' Guide",description:"It is probably safe to assume you would like to contribute to Buz in some capacity if you are reading this. Thank you.",source:"@site/docs/contributing/contributors-guide.md",sourceDirName:"contributing",slug:"/contributing/contributors-guide",permalink:"/contributing/contributors-guide",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"contributors-guide",title:"Contributors' Guide"},sidebar:"defaultSidebar",previous:{title:"Knative",permalink:"/deploying/knative"},next:{title:"Documentation",permalink:"/contributing/contributing-documentation-to-buz"}},l={},s=[{value:"General Feedback",id:"general-feedback",level:2},{value:"Contributing Documentation",id:"contributing-documentation",level:2},{value:"Contributing Code",id:"contributing-code",level:2},{value:"Feature Requests",id:"feature-requests",level:2},{value:"Bug Reports",id:"bug-reports",level:2},{value:"Other",id:"other",level:2},{value:"Licensing",id:"licensing",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"It is probably safe to assume you would like to contribute to Buz in some capacity if you are reading this. ",(0,i.kt)("strong",{parentName:"p"},"Thank you.")," "),(0,i.kt)("p",null,"The success of this project depends on people like you, and it is very generous. Your contributions are welcomed and appreciated."),(0,i.kt)("p",null,"We will be formalizing the contribution process soon. In the meantime please refer to the following:"),(0,i.kt)("h2",{id:"general-feedback"},"General Feedback"),(0,i.kt)("p",null,"Feel free to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/aerialfly"},"Tweet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"mailto:jake@silverton.io"},"Email")),(0,i.kt)("li",{parentName:"ul"},"Stalk on one of the two-dozen data slack workspaces"),(0,i.kt)("li",{parentName:"ul"},"Find one of us on LinkedIn")),(0,i.kt)("h2",{id:"contributing-documentation"},"Contributing Documentation"),(0,i.kt)("p",null,"A quick guide to contributing documentation is ",(0,i.kt)("a",{parentName:"p",href:"contributing-documentation-to-buz"},"located here"),"."),(0,i.kt)("h2",{id:"contributing-code"},"Contributing Code"),(0,i.kt)("p",null,"A quick guide to contributing code is ",(0,i.kt)("a",{parentName:"p",href:"contributing-code-to-buz"},"located here"),"."),(0,i.kt)("h2",{id:"feature-requests"},"Feature Requests"),(0,i.kt)("p",null,"If you'd like to see a piece of functionality included in Buz (sink, input protocol, registry functionality, etc) please create a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/silverton-io/buz/issues"},"Github Issue"),"."),(0,i.kt)("h2",{id:"bug-reports"},"Bug Reports"),(0,i.kt)("p",null,"If you'd like to report a bug please create a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/silverton-io/buz/issues"},"Github Issue"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"When creating a bug-related Github issue, the following information is very helpful to include:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A detailed description"),(0,i.kt)("li",{parentName:"ul"},"Steps to reproduce"),(0,i.kt)("li",{parentName:"ul"},"Screenshots/gifs of the issue"),(0,i.kt)("li",{parentName:"ul"},"Stacktrace, if applicable")),(0,i.kt)("h2",{id:"other"},"Other"),(0,i.kt)("p",null,"We have an ",(0,i.kt)("a",{parentName:"p",href:"/insiders-only"},"insider's signup form here")," if you'd like to stay in involved or in the know."),(0,i.kt)("h2",{id:"licensing"},"Licensing"),(0,i.kt)("p",null,"Buz is licensed as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/silverton-io/buz/blob/main/LICENSE"},"Apache 2.0"),". Which means you can freely use it for just about anything."))}p.isMDXComponent=!0}}]);