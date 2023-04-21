"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8862],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(r),u=n,b=g["".concat(i,".").concat(u)]||g[u]||m[u]||s;return r?a.createElement(b,o(o({ref:t},c),{},{components:r})):a.createElement(b,o({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<s;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9126:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const s={title:"Serverless Makes Streaming Accessible",description:"Streaming systems have long been inaccessible to many companies, simply due to complexity. Serverless technologies make streaming accessible and will completely change data processing as we know it.",authors:["jake"],slug:"/serverless-makes-streaming-accessible",tags:["serverless event tracking","serverless snowplow analytics","google cloud run","pub/sub","bigquery","postgres"],date:"2023-02-22T00:00",hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/serverless-makes-streaming-accessible",source:"@site/blog/serverless-makes-streaming-accessible/index.md",title:"Serverless Makes Streaming Accessible",description:"Streaming systems have long been inaccessible to many companies, simply due to complexity. Serverless technologies make streaming accessible and will completely change data processing as we know it.",date:"2023-02-22T00:00:00.000Z",formattedDate:"February 22, 2023",tags:[{label:"serverless event tracking",permalink:"/blog/tags/serverless-event-tracking"},{label:"serverless snowplow analytics",permalink:"/blog/tags/serverless-snowplow-analytics"},{label:"google cloud run",permalink:"/blog/tags/google-cloud-run"},{label:"pub/sub",permalink:"/blog/tags/pub-sub"},{label:"bigquery",permalink:"/blog/tags/bigquery"},{label:"postgres",permalink:"/blog/tags/postgres"}],readingTime:11.495,hasTruncateMarker:!0,authors:[{name:"Jake",title:"\ud83d\udc1d",url:"https://github.com/jakthom",imageURL:"https://github.com/jakthom.png",key:"jake"}],frontMatter:{title:"Serverless Makes Streaming Accessible",description:"Streaming systems have long been inaccessible to many companies, simply due to complexity. Serverless technologies make streaming accessible and will completely change data processing as we know it.",authors:["jake"],slug:"/serverless-makes-streaming-accessible",tags:["serverless event tracking","serverless snowplow analytics","google cloud run","pub/sub","bigquery","postgres"],date:"2023-02-22T00:00",hide_table_of_contents:!1},nextItem:{title:"The Contract-Powered Data Platform",permalink:"/blog/the-contract-powered-data-platform"}},i={authorsImageUrls:[void 0]},p=[],c={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://snowplow.io/"},"Snowplow Analytics")," is a highly-scalable system that powers ",(0,n.kt)("a",{parentName:"p",href:"https://snowplow.io/blog/why-data-contracts-are-obviously-a-good-idea/"},"structured data creation")," for ",(0,n.kt)("a",{parentName:"p",href:"https://trends.builtwith.com/analytics/Snowplow"},"millions of sites")," on the internet. Snowplow tracking is incorporated into ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dbt-labs/dbt-core/blob/main/core/dbt/tracking.py#L33-L47"},"dbt"),", ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.getdbt.com/"},"dbt cloud"),", ",(0,n.kt)("a",{parentName:"p",href:"https://trello.com/"},"Trello"),", ",(0,n.kt)("a",{parentName:"p",href:"https://gitlab.com/"},"Gitlab"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.citi.com/"},"Citi bank"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.backcountry.com/"},"Backcountry.com"),", and the list goes on."),(0,n.kt)("p",null,"After setting up data infrastructure ",(0,n.kt)("a",{parentName:"p",href:"https://bostata.com/268-billion-events-with-snowplow-snowflake-at-cargurus"},"like Snowplow")," for ",(0,n.kt)("a",{parentName:"p",href:"https://bostata.com/client-side-instrumentation-for-under-one-dollar"},"years"),"  I've frequently found myself wishing for both ",(0,n.kt)("strong",{parentName:"p"},"less")," and ",(0,n.kt)("strong",{parentName:"p"},"more"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Fewer streams"),", ",(0,n.kt)("strong",{parentName:"p"},"fewer machines or containers to manage"),", ",(0,n.kt)("strong",{parentName:"p"},"fewer moving pieces to help prevent event duplication or loss"),", ",(0,n.kt)("strong",{parentName:"p"},"less configuration"),", and ",(0,n.kt)("strong",{parentName:"p"},"less in-house documentation to keep things running")," would be a dream."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Deployment flexibility"),", ",(0,n.kt)("strong",{parentName:"p"},"flexible schema storage"),", ",(0,n.kt)("strong",{parentName:"p"},"cost efficiencies"),", ",(0,n.kt)("strong",{parentName:"p"},"seamless migration between transport systems"),", ",(0,n.kt)("strong",{parentName:"p"},"improved utility from the data in transit"),", and ",(0,n.kt)("strong",{parentName:"p"},"increased visibility")," would also be very helpful."),(0,n.kt)("p",null,"Meanwhile, serverless technologies have come into their own and point the way toward a very bright data-processing future. Which is how ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://buz.dev"},"buz.dev"))," was born."))}m.isMDXComponent=!0}}]);