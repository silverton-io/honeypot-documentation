"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3099],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,title:"Cloud Run",description:"Deploy Buz, the open-source serverless event tracking system, to Cloud Run in 3 minutes using Terraform."},l="Deploy Buz to Cloud Run using Terraform",i={unversionedId:"deploying/gcp/cloud_run",id:"deploying/gcp/cloud_run",title:"Cloud Run",description:"Deploy Buz, the open-source serverless event tracking system, to Cloud Run in 3 minutes using Terraform.",source:"@site/docs/deploying/gcp/cloud_run.md",sourceDirName:"deploying/gcp",slug:"/deploying/gcp/cloud_run",permalink:"/deploying/gcp/cloud_run",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Cloud Run",description:"Deploy Buz, the open-source serverless event tracking system, to Cloud Run in 3 minutes using Terraform."},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/deploying/overview"},next:{title:"Lambda",permalink:"/deploying/aws/lambda"}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"Deploy",id:"deploy",level:2},{value:"1. Clone the Buz repo and navigate to GCP deployment dir",id:"1-clone-the-buz-repo-and-navigate-to-gcp-deployment-dir",level:2},{value:"2. Auth gcloud",id:"2-auth-gcloud",level:2},{value:"3. Create and Populate tfvars file",id:"3-create-and-populate-tfvars-file",level:2},{value:"4. Apply",id:"4-apply",level:2}],s={toc:p};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-buz-to-cloud-run-using-terraform"},"Deploy Buz to Cloud Run using Terraform"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Estimated time: 3 minutes")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gcp-deploy-diag",src:n(4495).Z,width:"2678",height:"1508"})),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The (absolute) easiest way to deploy Buz on GCP is via ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://cloud.google.com/run"},"Google Cloud Run"))," and Terraform."),(0,a.kt)("p",null,"The terraform deployment consists of the following GCP resources:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"1 Cloud Run service for running serverless Buz")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"1 Secret Manager secret for Buz configuration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"1 Domain mapping for running Buz behind a pretty name")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"1 GCS bucket for schemas")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"2 Pub/Sub topics for valid and invalid events")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"1 Artifact Registry Repository for hosting Buz artifacts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"1 BigQuery dataset")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"2 BigQuery tables for valid/invalid events")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"2 Pub/Sub -> BigQuery subscriptions for pushing data to BigQuery automatically"))),(0,a.kt)("p",null,"It also provisions the appropriate IAM configuration, enables GCP services if they have not already been enabled, etc."),(0,a.kt)("admonition",{title:"Local Prerequisites",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"You will need the following locally to terraform Buz:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.terraform.io/downloads"},"Terraform")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/sdk/gcloud"},"gcloud")," cli"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"docker")))),(0,a.kt)("h2",{id:"deploy"},"Deploy"),(0,a.kt)("h2",{id:"1-clone-the-buz-repo-and-navigate-to-gcp-deployment-dir"},"1. Clone the Buz repo and navigate to GCP deployment dir"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone git@github.com:silverton-io/buz.git && cd buz/deploy/terraform/gcp/\n")),(0,a.kt)("h2",{id:"2-auth-gcloud"},"2. Auth gcloud"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gcloud auth application-default login\n")),(0,a.kt)("h2",{id:"3-create-and-populate-tfvars-file"},"3. Create and Populate tfvars file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"touch terraform.tfvars\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sample Contents:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'gcp_project = "YOUR_PROJECT"\nsystem = "buz"\nenv = "prd"\nbuz_domain = "buz.YOUR_DOMAIN.com"\nbuz_version = "v0.11.11"\nschema_bucket_name = "schemas"\nbigquery_dataset_name = "buz"\n')),(0,a.kt)("h2",{id:"4-apply"},"4. Apply"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"terraform apply\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"If all is well the terraform output will be something like the following:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Outputs:\n\nbuz_domain = "buz.YOURDOMAIN.com"\nbuz_service_id = "locations/us-central1/namespaces/YOUR_PROJECT/services/buz"\nbuz_service_status = tolist([\n  {\n    "conditions" = tolist([\n      {\n        "message" = ""\n        "reason" = ""\n        "status" = "True"\n        "type" = "Ready"\n      },\n      {\n        "message" = ""\n        "reason" = ""\n        "status" = "True"\n        "type" = "ConfigurationsReady"\n      },\n      {\n        "message" = ""\n        "reason" = ""\n        "status" = "True"\n        "type" = "RoutesReady"\n      },\n    ])\n    "latest_created_revision_name" = "buz-lnhtr"\n    "latest_ready_revision_name" = "buz-lnhtr"\n    "observed_generation" = 1\n    "url" = "https://buz-n3oujm40err-uc.a.run.app"\n  },\n])\nbuz_version = "v0.11.11"\ngcp_project = "YOUR_PROJECT"\ngcp_region = "us-central1"\ninvalid_topic = "buz-prd-invalid-events"\nschema_bucket = "buz-prd-schemas"\nvalid_topic = "buz-prd-valid-events"\n')))}c.isMDXComponent=!0},4495:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gcp-deploy-diag-841dfcbb282d57cfb98cb1867b43713a.png"}}]);