"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9587],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=u(n),g=a,c=s["".concat(p,".").concat(g)]||s[g]||d[g]||l;return n?r.createElement(c,i(i({ref:e},m),{},{components:n})):r.createElement(c,i({ref:e},m))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2442:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:1,title:"Overview",description:"Deployment Overview"},i=void 0,o={unversionedId:"deploying/overview",id:"deploying/overview",title:"Overview",description:"Deployment Overview",source:"@site/docs/deploying/overview.md",sourceDirName:"deploying",slug:"/deploying/overview",permalink:"/deploying/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview",description:"Deployment Overview"},sidebar:"defaultSidebar",previous:{title:"Telemetry",permalink:"/under-the-hood/tools/telemetry"},next:{title:"Cloud Run",permalink:"/deploying/gcp/cloud_run"}},p={},u=[{value:"Deployments",id:"deployments",level:2}],m={toc:u};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Since Buz minimizes event tracking infrastructure it can be deployed quickly in unique ways."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Terraform is provided for two deployment patterns on AWS and GCP:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/deploying/aws/lambda"},"Lambda -> Kinesis Firehose -> Dynamically-partitioned S3"))," on AWS"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/deploying/gcp/cloud_run"},"Cloud Run -> Pub/Sub -> BigQuery"))," on GCP")),(0,a.kt)("p",null,"This terraform is meant to serve as an example but could just as easily be run in production (ask us how we know..)"),(0,a.kt)("h2",{id:"deployments"},"Deployments"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Deployment"),(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"Supported?"),(0,a.kt)("th",{parentName:"tr",align:null},"Maintainer"),(0,a.kt)("th",{parentName:"tr",align:null},"Details"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AWS Lambda"),(0,a.kt)("td",{parentName:"tr",align:null},"Container image"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes \u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83d\udc1d"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/silverton-io/buz/tree/main/deploy/terraform/aws/lambda"},"Terraformed end-to-end")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AWS ECS"),(0,a.kt)("td",{parentName:"tr",align:null},"Container image"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes \u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83d\udc1d"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/silverton-io/buz/pkgs/container/buz"},"X-arch container images")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GCP Cloud Run"),(0,a.kt)("td",{parentName:"tr",align:null},"Container image"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes \u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83d\udc1d"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/silverton-io/buz/tree/main/deploy/terraform/gcp/cloud_run"},"Terraformed end-to-end")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"K8s"),(0,a.kt)("td",{parentName:"tr",align:null},"Container image"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes \u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83d\udc1d"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/silverton-io/buz/pkgs/container/buz"},"X-arch container images")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Bare metal"),(0,a.kt)("td",{parentName:"tr",align:null},"Binary"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes \u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83d\udc1d"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/silverton-io/buz/releases/"},"X-arch binaries")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"https://fly.io/"},"Fly.io"))),(0,a.kt)("td",{parentName:"tr",align:null},"Container image"),(0,a.kt)("td",{parentName:"tr",align:null},"Not yet \u26a0\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"N/A"),(0,a.kt)("td",{parentName:"tr",align:null},"This could be you.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Azure function"),(0,a.kt)("td",{parentName:"tr",align:null},"Container image"),(0,a.kt)("td",{parentName:"tr",align:null},"Not yet \u26a0\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"N/A"),(0,a.kt)("td",{parentName:"tr",align:null},"This could be you.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"https://knative.dev/docs/"},"Knative"))),(0,a.kt)("td",{parentName:"tr",align:null},"Container image"),(0,a.kt)("td",{parentName:"tr",align:null},"Not yet \u26a0\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"N/A"),(0,a.kt)("td",{parentName:"tr",align:null},"This could be you.")))))}d.isMDXComponent=!0}}]);