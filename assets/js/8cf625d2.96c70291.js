"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6630],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=l(n),h=a,u=m["".concat(s,".").concat(h)]||m[h]||c[h]||i;return n?o.createElement(u,r(r({ref:t},d),{},{components:n})):o.createElement(u,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},421:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],p={sidebar_position:2},s="Webhook",l={unversionedId:"inputs/honeypot/webhook",id:"inputs/honeypot/webhook",title:"Webhook",description:"\ud83d\udfe2 Supported",source:"@site/docs/inputs/honeypot/webhook.md",sourceDirName:"inputs/honeypot",slug:"/inputs/honeypot/webhook",permalink:"/inputs/honeypot/webhook",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Self-Describing Payloads",permalink:"/inputs/honeypot/self-describing"},next:{title:"Pixel",permalink:"/inputs/honeypot/pixel"}},d={},c=[{value:"Collection Method",id:"collection-method",level:2},{value:"Namespace Method",id:"namespace-method",level:2},{value:"Arbitrary webhooks",id:"arbitrary-webhooks",level:3},{value:"Named webhooks",id:"named-webhooks",level:3},{value:"Validation Method",id:"validation-method",level:2},{value:"Sample Webhook Configuration",id:"sample-webhook-configuration",level:2}],m={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"webhook"},"Webhook"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\ud83d\udfe2 Supported")),(0,i.kt)("h2",{id:"collection-method"},"Collection Method"),(0,i.kt)("p",null,"Honeypot is capable of collecting and routing webhooks from pretty much anywhere."),(0,i.kt)("h2",{id:"namespace-method"},"Namespace Method"),(0,i.kt)("p",null,"Honeypot supports two ways of namespacing webhooks: ",(0,i.kt)("inlineCode",{parentName:"p"},"arbitrary")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"named"),"."),(0,i.kt)("h3",{id:"arbitrary-webhooks"},"Arbitrary webhooks"),(0,i.kt)("p",null,"All requests sent to the configured root webhook path are considered ",(0,i.kt)("inlineCode",{parentName:"p"},"arbitrary")," and are assigned a single namespace of ",(0,i.kt)("inlineCode",{parentName:"p"},"honeypot.hook.arbitrary"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"For Example")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If Honeypot is configured with a webhook path of ",(0,i.kt)("inlineCode",{parentName:"p"},"/hook")," (the default), all requests to ",(0,i.kt)("inlineCode",{parentName:"p"},"/hook")," ",(0,i.kt)("strong",{parentName:"p"},"will not be validated")," and will be namespaced according to ",(0,i.kt)("inlineCode",{parentName:"p"},"honeypot.hook.arbitrary"),"."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Yo")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Since this method is basically a webhook catchall it should be used sparingly."))),(0,i.kt)("h3",{id:"named-webhooks"},"Named webhooks"),(0,i.kt)("p",null,"Any webhooks sent to a schema-specific webhook path are ",(0,i.kt)("strong",{parentName:"p"},"namespaced according to the associated schema"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"For Example")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If Honeypot is configured with a webhook path of ",(0,i.kt)("inlineCode",{parentName:"p"},"/hook")," (the default), all requests to ",(0,i.kt)("inlineCode",{parentName:"p"},"/hook/com.iterable/payload/v1.0.json")," will be validated and namespaced according to the contents of the ",(0,i.kt)("inlineCode",{parentName:"p"},"com.iterable/payload/v1.0.json")," schema."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Pro tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is the way."))),(0,i.kt)("h2",{id:"validation-method"},"Validation Method"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arbitrary webhooks:")," Not validated."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Named webhooks:")," Validated according to the associated schema."),(0,i.kt)("h2",{id:"sample-webhook-configuration"},"Sample Webhook Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"webhook:\n  enabled: true     # Whether or not to enable webhooks\n  path: /hook       # Root path for incoming webhooks\n")))}h.isMDXComponent=!0}}]);