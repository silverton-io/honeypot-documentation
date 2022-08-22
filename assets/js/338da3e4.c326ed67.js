"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5598],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3275:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1},o="Overview",l={unversionedId:"under-the-hood/overview",id:"under-the-hood/overview",title:"Overview",description:"Single Self-Contained Binary",source:"@site/docs/under-the-hood/overview.md",sourceDirName:"under-the-hood",slug:"/under-the-hood/overview",permalink:"/under-the-hood/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Tokenization",permalink:"/privacy-by-design/tokenization"},next:{title:"Middleware",permalink:"/category/middleware"}},s={},d=[{value:"Single Self-Contained Binary",id:"single-self-contained-binary",level:2},{value:"Collects Events from One or More Sources",id:"collects-events-from-one-or-more-sources",level:2},{value:"Validates Events on the Edge",id:"validates-events-on-the-edge",level:2},{value:"Sends Events to One or More Destinations",id:"sends-events-to-one-or-more-destinations",level:2},{value:"Generates Rich Metadata",id:"generates-rich-metadata",level:2},{value:"Eases Operational Burden",id:"eases-operational-burden",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("h2",{id:"single-self-contained-binary"},"Single Self-Contained Binary"),(0,i.kt)("p",null,"Event collection infrastructure comes in all shapes and sizes except ",(0,i.kt)("inlineCode",{parentName:"p"},"a single artifact that can be deployed anywhere"),". Buz changes that."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Buz was created from the ground-up to eliminate as many moving pieces as possible without sacrificing quality and transport guarantees.")),(0,i.kt)("admonition",{title:"TL;DR",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Less headaches for infrastructure humans."),(0,i.kt)("li",{parentName:"ul"},"Decreased infrastructure costs"),(0,i.kt)("li",{parentName:"ul"},"Increased operational efficiencies."))),(0,i.kt)("h2",{id:"collects-events-from-one-or-more-sources"},"Collects Events from One or More Sources"),(0,i.kt)("p",null,"Most event collection systems are single-protocol, which results in duplicate infrastructure when more than one protocol must be collected  -> ",(0,i.kt)("inlineCode",{parentName:"p"},"webhook"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"snowplow"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"segment"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cloudevents"),", etc."),(0,i.kt)("p",null,"This is not the case with Buz."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Buz supports a number of common input protocols and will continue to support more.")),(0,i.kt)("admonition",{title:"TL;DR",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Single, flexible system instead of N pipelines to support N protocols."))),(0,i.kt)("h2",{id:"validates-events-on-the-edge"},"Validates Events on the Edge"),(0,i.kt)("p",null,"Streaming data is all about one thing: increasing the speed of action and decision-making. If events are not validated fast, decisions and actions cannot be made with the conviction they require. Who cares about making bad decisions, on bad data, fast? Nobody."),(0,i.kt)("admonition",{title:"TL;DR",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Incoming events are validated immediately."))),(0,i.kt)("h2",{id:"sends-events-to-one-or-more-destinations"},"Sends Events to One or More Destinations"),(0,i.kt)("p",null,"Buz was purpose-built for flexibility and does not require provisioning ",(0,i.kt)("em",{parentName:"p"},"more")," infrastructure to fan out events to multiple places."),(0,i.kt)("p",null,"Multiple Buz sinks can be configured regardless of what cloud the destination actually resides in."),(0,i.kt)("admonition",{title:"TL;DR",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Send events to one place or five. No additional infrastructure necessary."))),(0,i.kt)("h2",{id:"generates-rich-metadata"},"Generates Rich Metadata"),(0,i.kt)("p",null,"After years of building, maintaining, and managing event tracking systems there's one thing that has consistently stuck out:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"More metadata and expedited knowledge of what is happening within the stream would be unbelievably empowering"),"."),(0,i.kt)("p",null,"Metadata often happens at the end of the pipeline, in the data warehouse. ",(0,i.kt)("strong",{parentName:"p"},"Not awesome.")),(0,i.kt)("admonition",{title:"TL;DR",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"More visibility into events, faster."))),(0,i.kt)("h2",{id:"eases-operational-burden"},"Eases Operational Burden"),(0,i.kt)("p",null,"Buz is easily configured with a single ",(0,i.kt)("inlineCode",{parentName:"p"},"yml")," file. This file is self-validating and, when using ",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml"},"the vcode yaml plugin"),", practically writes itself."),(0,i.kt)("p",null,"It can be rapidly deployed and re-configured, and scales well as needs do."))}u.isMDXComponent=!0}}]);