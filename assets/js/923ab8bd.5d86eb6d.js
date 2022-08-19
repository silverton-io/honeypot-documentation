"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),p=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(u,".").concat(m)]||d[m]||s[m]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3585:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:1,slug:"documentation-site"},u="Documentation Site",p={unversionedId:"developing/documentation",id:"developing/documentation",title:"Documentation Site",description:"The following is a guide to quickly getting up and running with this Docusaurus-based docs site.",source:"@site/docs/developing/documentation.md",sourceDirName:"developing",slug:"/developing/documentation-site",permalink:"/developing/documentation-site",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"documentation-site"},sidebar:"defaultSidebar",previous:{title:"Knative",permalink:"/production-deployment/knative"},next:{title:"Honeypot Core",permalink:"/developing/honeypot-core"}},c={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Clone the repo",id:"clone-the-repo",level:2},{value:"Installation",id:"installation",level:2},{value:"Run docs site locally",id:"run-docs-site-locally",level:2},{value:"Deploying documentation",id:"deploying-documentation",level:2},{value:"Where to go next",id:"where-to-go-next",level:2}],d={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"documentation-site"},"Documentation Site"),(0,i.kt)("p",null,"The following is a guide to quickly getting up and running with this ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus"),"-based docs site."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Prerequisites")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You will need these:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://yarnpkg.com/"},"yarn"))))),(0,i.kt)("h2",{id:"clone-the-repo"},"Clone the repo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone git@github.com:silverton-io/honeypot-documentation.git\n")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"After ",(0,i.kt)("inlineCode",{parentName:"strong"},"cd"),"ing into the ",(0,i.kt)("inlineCode",{parentName:"strong"},"honeypot-documentation")," directory you just cloned, run:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn\n")),(0,i.kt)("h2",{id:"run-docs-site-locally"},"Run docs site locally"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To build (and auto-reload) the docs site:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn start\n")),(0,i.kt)("h2",{id:"deploying-documentation"},"Deploying documentation"),(0,i.kt)("p",null,"The docs site is auto-deployed using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/silverton-io/honeypot-documentation/blob/main/.github/workflows/deploy-docs.yml"},"Github Actions"),"."),(0,i.kt)("h2",{id:"where-to-go-next"},"Where to go next"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pick up an issue from ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/honeypot/issues"},"github")," and cut your first PR."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/production-deployment/gcp"},"Deploy Honeypot")," to a production environment."),(0,i.kt)("li",{parentName:"ul"},"Play around with the ",(0,i.kt)("a",{parentName:"li",href:"/developing/documentation-site"},"Honeypot documentation"),"."),(0,i.kt)("li",{parentName:"ul"},"Read about the ",(0,i.kt)("a",{parentName:"li",href:"/introduction/philosophy"},"general philosophy")," of Honeypot.")))}m.isMDXComponent=!0}}]);