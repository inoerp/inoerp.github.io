"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3619],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),u=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=u(a),c=n,k=s["".concat(p,".").concat(c)]||s[c]||m[c]||l;return a?r.createElement(k,i(i({ref:e},d),{},{components:a})):r.createElement(k,i({ref:e},d))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},6747:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const l={id:"resource",title:"Resource",sidebar_label:"Resource"},i=void 0,o={unversionedId:"prj/resource",id:"prj/resource",title:"Resource",description:"This documentation is incomplete.",source:"@site/docs/prj/resource.md",sourceDirName:"prj",slug:"/prj/resource",permalink:"/docs/prj/resource",draft:!1,editUrl:"https://github.com/inoerp/inoerp.github.io/edit/main/content/docs/prj/resource.md",tags:[],version:"current",frontMatter:{id:"resource",title:"Resource",sidebar_label:"Resource"},sidebar:"mySidebar",previous:{title:"Material",permalink:"/docs/prj/material"},next:{title:"Transaction",permalink:"/docs/prj/transaction"}},p={},u=[{value:"List View",id:"list-view",level:2},{value:"Simple Step View",id:"simple-step-view",level:2},{value:"Tabular View",id:"tabular-view",level:2}],d={toc:u};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This documentation is incomplete.")),(0,n.kt)("p",null,"Resource management in the project module provides tools to manage the requirement and usage of resources for a project. Resources are defined in HCM modules and assigned to activities against a department. However, the system shows various views on the total resource requirement at project and task levels."),(0,n.kt)("p",null,"You can divide the overall process flow of Resource Management into three segments"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Demand"),": Adding a resource to an activity creates a demand for the capacity planning"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Supply"),": The capacity planning suggests a supply to fulfill the project demand"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Transaction"),": The application provides four different types of transactions to manage the demand and availability of resources",(0,n.kt)("br",{parentName:"li"}),(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"1. Apply Resource"))," - Charge resources to a project activity",(0,n.kt)("br",{parentName:"li"}),(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"2. Reverse Resource"))," - Reverse a wrongly applied resource to an activity  ")),(0,n.kt)("img",{src:"/images/modules/prj/resource/resource_01.PNG",width:"800"}),(0,n.kt)("p",null,"You can view the resource details in several formats:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In a list format"),(0,n.kt)("li",{parentName:"ol"},"In a table format"),(0,n.kt)("li",{parentName:"ol"},"In a simple step format with all the mandatory fields in a single step")),(0,n.kt)("h2",{id:"list-view"},"List View"),(0,n.kt)("img",{src:"/images/modules/prj/resource/resource_02.PNG",width:"800"}),(0,n.kt)("p",null,'To create/view/update any project resource, navigate to the "project resource"  screen from your dashboard/favorite. Navigate to the Resources tab on the project screen to view/add/update activities associated with a project\'s resource. You can also add activities to a project from the resource screen.'),(0,n.kt)("p",null,"Click on any button to view the resource in the corresponding format."),(0,n.kt)("img",{src:"/images/modules/prj/resource/resource_03.PNG",width:"800"}),(0,n.kt)("p",null,"In the project resource tab, click on the add new entity to add a new line. If a line exists, click on copy entity to copy all the details.\nEnter the resource details or other criteria in the search form and click on the search button to view an existing resource."),(0,n.kt)("p",null,"You can enable/disable fields allowed to be copied in the menu configuration.  "),(0,n.kt)("img",{src:"/images/modules/prj/resource/resource_04.PNG",width:"800"}),(0,n.kt)("p",null,"If you click on the create a new button, the system will open a simple step form to create a new resource. You can click on the detail right bottom to view all the fields available for the object. "),(0,n.kt)("p",null,"To view the search result in a table format, click on the table icon in the bottom left corner."),(0,n.kt)("p",null,"You can also click the expand icon against any label to view all the fields of that label."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resource  Sequence:")," Enter a numeric value for the resource sequence. The resource sequence is a mandatory field."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Mfg Resource:")," Select a resource name from the resource list. The resource is a select field, i.e., you can enter three letters of the resource name to search for the resource. You can also click the search popup icon to search and select the resource."),(0,n.kt)("img",{src:"/images/modules/prj/resource/resource_05.PNG",width:"800"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Required Quantity")," Required resource quantity for the activity. This value is used to calculate the resource requirement for the activity. The system allows you to charge more/less quantity than the required quantity."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Required Units")," Number of units of the same resource required for the activity. Ex: If you need two units of the same resource, enter 2. If the required quantity is 10 hrs, the system will consider 20 hrs as required hours."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Org Code")," The value defaults from the activity."),(0,n.kt)("p",null,"Scroll left, right, up, and down to view all the details. The document line and details are shown in a separate tab.\nThe default configuration shows fields in various functional groups, such as"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Finance"),(0,n.kt)("li",{parentName:"ul"},"Entity"),(0,n.kt)("li",{parentName:"ul"},"Reference"),(0,n.kt)("li",{parentName:"ul"},"Data"),(0,n.kt)("li",{parentName:"ul"},"Control"),(0,n.kt)("li",{parentName:"ul"},"Etc  ")),(0,n.kt)("p",null,"You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Need by date:"),"  You can use the date fields to specify the requirement date/need by date of the resource to start the activity."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"All Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Sequence"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Label"),(0,n.kt)("th",{parentName:"tr",align:null},"InputType"),(0,n.kt)("th",{parentName:"tr",align:null},"Field Group"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"10")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"vvOrgCode")),(0,n.kt)("td",{parentName:"tr",align:null},"Org Code"),(0,n.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,n.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"10")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"vvPrjProjectHeaderId")),(0,n.kt)("td",{parentName:"tr",align:null},"Prj Project Header Id"),(0,n.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,n.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"20")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"vvProjectName")),(0,n.kt)("td",{parentName:"tr",align:null},"Project Name"),(0,n.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,n.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"30")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"vvProjectNumber")),(0,n.kt)("td",{parentName:"tr",align:null},"Project Number"),(0,n.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,n.kt)("td",{parentName:"tr",align:null},"DATA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"40")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"vvTaskOwner")),(0,n.kt)("td",{parentName:"tr",align:null},"Task Owner"),(0,n.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,n.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"50")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"vvTaskLevel")),(0,n.kt)("td",{parentName:"tr",align:null},"Task Level"),(0,n.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,n.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"60")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"vvTaskNumber")),(0,n.kt)("td",{parentName:"tr",align:null},"Task Number"),(0,n.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,n.kt)("td",{parentName:"tr",align:null},"DATA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"70")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"vvTaskName")),(0,n.kt)("td",{parentName:"tr",align:null},"Task Name"),(0,n.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,n.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"80")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"vvActivitySequence")),(0,n.kt)("td",{parentName:"tr",align:null},"Activity Sequence"),(0,n.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,n.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"90")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"vvInvOrgId")),(0,n.kt)("td",{parentName:"tr",align:null},"Inv Org Id"),(0,n.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,n.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"100")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"vvActivityDescription")),(0,n.kt)("td",{parentName:"tr",align:null},"Activity Description"),(0,n.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,n.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"110")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"vvMfgResource")),(0,n.kt)("td",{parentName:"tr",align:null},"Mfg Resource"),(0,n.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,n.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"120")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"vvResourceDescription")),(0,n.kt)("td",{parentName:"tr",align:null},"Resource Description"),(0,n.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,n.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"130")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"prjProjectActivityResId")),(0,n.kt)("td",{parentName:"tr",align:null},"Prj Project Activity Res Id"),(0,n.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,n.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"140")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"srcEntityName")),(0,n.kt)("td",{parentName:"tr",align:null},"Src Entity Name"),(0,n.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,n.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"150")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"srcEntityId")),(0,n.kt)("td",{parentName:"tr",align:null},"Src Entity Id"),(0,n.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,n.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"160")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"prjProjectActivityId")),(0,n.kt)("td",{parentName:"tr",align:null},"Prj Project Activity Id"),(0,n.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,n.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"170")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"resourceSequence")),(0,n.kt)("td",{parentName:"tr",align:null},"Resource Sequence"),(0,n.kt)("td",{parentName:"tr",align:null},"InputType.number"),(0,n.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"180")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"chargeBasis")),(0,n.kt)("td",{parentName:"tr",align:null},"Charge Basis"),(0,n.kt)("td",{parentName:"tr",align:null},"InputType.select"),(0,n.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"190")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"bomResourceId")),(0,n.kt)("td",{parentName:"tr",align:null},"Bom Resource Id"),(0,n.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,n.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"200")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"resourceUsage")),(0,n.kt)("td",{parentName:"tr",align:null},"Resource Usage"),(0,n.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,n.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"210")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"resourceScheduledCb")),(0,n.kt)("td",{parentName:"tr",align:null},"Resource Scheduled Cb"),(0,n.kt)("td",{parentName:"tr",align:null},"InputType.switchField"),(0,n.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"220")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"requiredQuantity")),(0,n.kt)("td",{parentName:"tr",align:null},"Required Quantity"),(0,n.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,n.kt)("td",{parentName:"tr",align:null},"DATA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"230")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"chargeType")),(0,n.kt)("td",{parentName:"tr",align:null},"Charge Type"),(0,n.kt)("td",{parentName:"tr",align:null},"InputType.select"),(0,n.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"240")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"standardRateCb")),(0,n.kt)("td",{parentName:"tr",align:null},"Standard Rate Cb"),(0,n.kt)("td",{parentName:"tr",align:null},"InputType.switchField"),(0,n.kt)("td",{parentName:"tr",align:null},"FINANCE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"5250")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"createdBy")),(0,n.kt)("td",{parentName:"tr",align:null},"Created By"),(0,n.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,n.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"5260")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"creationDate")),(0,n.kt)("td",{parentName:"tr",align:null},"Creation Date"),(0,n.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,n.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"5270")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"lastUpdatedBy")),(0,n.kt)("td",{parentName:"tr",align:null},"Last Updated By"),(0,n.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,n.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"5280")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"lastUpdateDate")),(0,n.kt)("td",{parentName:"tr",align:null},"Last Update Date"),(0,n.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,n.kt)("td",{parentName:"tr",align:null},"REFERENCE"))))),(0,n.kt)("h2",{id:"simple-step-view"},"Simple Step View"),(0,n.kt)("img",{src:"/images/modules/prj/resource/resource_07a.PNG",width:"400"}),(0,n.kt)("p",null,"The simple step form shows all the mandatory fields required to add a resource to activity in step form.\nBy default, the application shows only two mandatory fields:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Resource Sequence"),(0,n.kt)("li",{parentName:"ul"},"Org Code")),(0,n.kt)("p",null,"A simple step form is a simple way to create a resource as the user goes through the steps and needs to focus only on one field at a time. The application will show the next field when the user clicks the Next button. However, as per your business requirements, you can make any other field mandatory."),(0,n.kt)("h2",{id:"tabular-view"},"Tabular View"),(0,n.kt)("img",{src:"/images/modules/prj/resource/resource_07b.PNG",width:"800"}),(0,n.kt)("p",null,"The tabular view shows all the activities in a table. The default configuration of the table shows all the fields. However, you can configure the table only to show the fields you want."))}m.isMDXComponent=!0}}]);