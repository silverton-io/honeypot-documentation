"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[828],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,f=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return a?r.createElement(f,i(i({ref:t},u),{},{components:a})):r.createElement(f,i({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7412:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:1,title:"Lambda",description:"Deploy Buz, the open-source serverless event tracking system, to production in minutes with AWS Lambda."},i="Deploy Buz to AWS Lambda using Terraform",l={unversionedId:"deploying/aws/lambda",id:"deploying/aws/lambda",title:"Lambda",description:"Deploy Buz, the open-source serverless event tracking system, to production in minutes with AWS Lambda.",source:"@site/docs/deploying/aws/lambda.md",sourceDirName:"deploying/aws",slug:"/deploying/aws/lambda",permalink:"/deploying/aws/lambda",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Lambda",description:"Deploy Buz, the open-source serverless event tracking system, to production in minutes with AWS Lambda."},sidebar:"defaultSidebar",previous:{title:"Cloud Run",permalink:"/deploying/gcp/cloud_run"},next:{title:"Contributors' Guide",permalink:"/contributing/contributors-guide"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Deploy",id:"deploy",level:2},{value:"1. Clone Buz and navigate to the AWS Lambda deployment dir",id:"1-clone-buz-and-navigate-to-the-aws-lambda-deployment-dir",level:2},{value:"2. Authenticate the Docker cli to your default registry",id:"2-authenticate-the-docker-cli-to-your-default-registry",level:2},{value:"3. Create and Populate a tfvars file",id:"3-create-and-populate-a-tfvars-file",level:2},{value:"4. Initialize and Apply",id:"4-initialize-and-apply",level:2},{value:"5. Profit",id:"5-profit",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deploy-buz-to-aws-lambda-using-terraform"},"Deploy Buz to AWS Lambda using Terraform"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Estimated time: 3 minutes")),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The easiest and most cost-effective way to deploy Buz on AWS is via ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://aws.amazon.com/lambda/"},"Lambda")),"."),(0,n.kt)("p",null,"The following is a guide to doing so with Terraform. It sets up the following resources:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Lambda function for running serverless Buz")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cloudfront distribution for mapping lambda to a pretty DNS name")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"S3 buckets for schemas and events")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ECR repository for hosting Buz artifacts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Kinesis Firehose delivery streams for ",(0,n.kt)("a",{parentName:"strong",href:"https://docs.aws.amazon.com/firehose/latest/dev/dynamic-partitioning.html"},"dynamically-partitioning events")," to S3"))),(0,n.kt)("p",null,"The deployment also sets up the appropriate IAM config."),(0,n.kt)("admonition",{title:"Local Prerequisites",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"You will need the following locally to terraform Buz:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.terraform.io/downloads"},"terraform")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cli/"},"aws")," cli"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"docker")))),(0,n.kt)("admonition",{title:"AWS Prerequisites",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"You will need the following AWS resources:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"A Route53 ",(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/CreatingHostedZone.html"},"hosted zone")),(0,n.kt)("li",{parentName:"ul"},"A Certificate Manager ",(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html"},"certificate")," for the intended domain/subdomain"))),(0,n.kt)("h2",{id:"deploy"},"Deploy"),(0,n.kt)("h2",{id:"1-clone-buz-and-navigate-to-the-aws-lambda-deployment-dir"},"1. Clone Buz and navigate to the AWS Lambda deployment dir"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"git clone git@github.com:silverton-io/buz.git && cd buz/deploy/terraform/aws/lambda/\n")),(0,n.kt)("h2",{id:"2-authenticate-the-docker-cli-to-your-default-registry"},"2. Authenticate the Docker cli to your default registry"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"aws ecr get-login-password --region region | docker login --username AWS --password-stdin aws_account_id.dkr.ecr.region.amazonaws.com\n")),(0,n.kt)("p",null,"(More info can be found here: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonECR/latest/userguide/getting-started-cli.html"},"https://docs.aws.amazon.com/AmazonECR/latest/userguide/getting-started-cli.html"),")"),(0,n.kt)("h2",{id:"3-create-and-populate-a-tfvars-file"},"3. Create and Populate a tfvars file"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"touch terraform.tfvars\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Sample Contents:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'system = "buz"\nenv = "prod"\nbuz_domain = "buz.yourdomain.com"\nevents_bucket_name = "events"\nschema_bucket_name = "schemas"\ncertificate_arn = "arn:aws:acm:your_certificate_arn"\n')),(0,n.kt)("h2",{id:"4-initialize-and-apply"},"4. Initialize and Apply"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"terraform init && terraform apply\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"If all goes well the terraform output will be something like the following:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'buz_cloudfront_url = "cu3mw22lqz3z0.cloudfront.net"\nbuz_function_url = "https://aasdfghjklasdfjklgqwertyuiop.lambda-url.us-east-1.on.aws/"\nbuz_version = "v0.12.8"\nevents_bucket = "buz-dev-events"\ninvalid_stream = "buz-dev-invalid"\nschema_bucket = "buz-dev-schemas"\nvalid_stream = "buz-dev-valid"\n')),(0,n.kt)("h2",{id:"5-profit"},"5. Profit"))}d.isMDXComponent=!0}}]);