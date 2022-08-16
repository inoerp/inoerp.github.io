"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3767],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>s});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),d=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):m(m({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(i.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),k=d(a),s=r,N=k["".concat(i,".").concat(s)]||k[s]||o[s]||l;return a?n.createElement(N,m(m({ref:e},u),{},{components:a})):n.createElement(N,m({ref:e},u))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,m=new Array(l);m[0]=k;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,m[1]=p;for(var d=2;d<l;d++)m[d]=a[d];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9169:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>m,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={id:"payment_term",title:"Payment Term",sidebar_label:"Payment Term"},m=void 0,p={unversionedId:"gl/payment_term",id:"gl/payment_term",title:"Payment Term",description:"This documentation is incomplete.",source:"@site/docs/gl/payment_term.md",sourceDirName:"gl",slug:"/gl/payment_term",permalink:"/docs/gl/payment_term",draft:!1,editUrl:"https://github.com/inoerp/inoerp.github.io/edit/main/content/docs/gl/payment_term.md",tags:[],version:"current",frontMatter:{id:"payment_term",title:"Payment Term",sidebar_label:"Payment Term"},sidebar:"mySidebar",previous:{title:"Journal",permalink:"/docs/gl/journal"},next:{title:"Project",permalink:"/docs/prj/project"}},i={},d=[{value:"Header - payment term",id:"header---payment-term",level:2},{value:"Lines - Payment Term Schedule",id:"lines---payment-term-schedule",level:2},{value:"Lines - Payment Term Discount",id:"lines---payment-term-discount",level:2}],u={toc:d};function o(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This documentation is incomplete.")),(0,r.kt)("p",null,"Payment terms are conditions set on invoicing, usually specified by the seller to the buyer. Payment terms are imposed to ensure that suppliers receive payments within a reasonable period. Discount terms may be allowed in order to accelerate cash collections. Payment terms are mandatory fields on AP & AR Invoice; thus, you must create a payment term before creating an invoice. "),(0,r.kt)("h2",{id:"header---payment-term"},"Header - payment term"),(0,r.kt)("img",{src:"/images/modules/gl/payment_term/payment_term_01.PNG",width:"350"}),(0,r.kt)("p",null,'To create/view/update a payment term, navigate to the "payment term"  screen from your dashboard/favorite.'),(0,r.kt)("p",null,"Enter the organization/payment term details or any other criteria in the search form and click on the search button to view an existing payment term.  "),(0,r.kt)("img",{src:"/images/modules/gl/payment_term/payment_term_02.PNG",width:"800"}),(0,r.kt)("p",null,"If you don't enter any search criteria, the system will show you all the payment terms. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search payment terms.",(0,r.kt)("br",{parentName:"p"}),"\n","The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices."),(0,r.kt)("img",{src:"/images/modules/gl/payment_term/payment_term_03.PNG",width:"350"}),(0,r.kt)("p",null,"If you click on the create new button, the system will open a simple step form to create a new payment term. You can click on the detail right bottom to view all the fields available for the object. "),(0,r.kt)("img",{src:"/images/modules/gl/payment_term/payment_term_04.PNG",width:"800"}),(0,r.kt)("p",null,"To view the search result in a table format, click on the table icon in the bottom left corner."),(0,r.kt)("p",null,"To view specific payment term details, click on the menu of that record, and click on view/fetch & view."),(0,r.kt)("p",null,"You can also click on the expand icon against any item on the search result screen to view the payment term header details, such as payment term name, description, etc."),(0,r.kt)("img",{src:"/images/modules/gl/payment_term/payment_term_04a.PNG",width:"300"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Payment Term:")," Enter a unique  name for the payment term"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Payment Term Description:")," Enter a meaningful description for the payment term"),(0,r.kt)("img",{src:"/images/modules/gl/payment_term/payment_term_05.PNG",width:"800"}),(0,r.kt)("p",null,"Scroll left, right, up, down to view all the details. The line details are shown in a separate tab.\nThe default configuration shows fields in various functional groups such as"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Finance"),(0,r.kt)("li",{parentName:"ul"},"Entity"),(0,r.kt)("li",{parentName:"ul"},"Reference"),(0,r.kt)("li",{parentName:"ul"},"Data"),(0,r.kt)("li",{parentName:"ul"},"Control"),(0,r.kt)("li",{parentName:"ul"},"Etc  ")),(0,r.kt)("p",null,"You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"All Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Sequence"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Label"),(0,r.kt)("th",{parentName:"tr",align:null},"InputType"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Group"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"glPaymentTermHeaderId")),(0,r.kt)("td",{parentName:"tr",align:null},"Gl payment term Header Id"),(0,r.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"srcEntityName")),(0,r.kt)("td",{parentName:"tr",align:null},"Src Entity Name"),(0,r.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"20")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"srcEntityId")),(0,r.kt)("td",{parentName:"tr",align:null},"Src Entity Id"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"30")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"paymentTermName")),(0,r.kt)("td",{parentName:"tr",align:null},"payment term Name"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"40")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"paymentTermType")),(0,r.kt)("td",{parentName:"tr",align:null},"payment term Type"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.select"),(0,r.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"50")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"description")),(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"100")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"docStatus")),(0,r.kt)("td",{parentName:"tr",align:null},"Doc Status"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.select"),(0,r.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5060")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"createdBy")),(0,r.kt)("td",{parentName:"tr",align:null},"Created By"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5070")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"creationDate")),(0,r.kt)("td",{parentName:"tr",align:null},"Creation Date"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5080")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"lastUpdatedBy")),(0,r.kt)("td",{parentName:"tr",align:null},"Last Updated By"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5090")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"lastUpdateDate")),(0,r.kt)("td",{parentName:"tr",align:null},"Last Update Date"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE"))))),(0,r.kt)("h2",{id:"lines---payment-term-schedule"},"Lines - Payment Term Schedule"),(0,r.kt)("img",{src:"/images/modules/gl/payment_term/payment_term_08.PNG",width:"800"}),(0,r.kt)("p",null,"You can add multiple schedule lines to each payment term header. Each line represents a specific date and amount that the customer needs to pay. You must define at least one schedule line for each payment term schedule, and the sum of all schedule lines must be 100%. For one time, 100% payment, you can add a single schedule with the same."),(0,r.kt)("img",{src:"/images/modules/gl/payment_term/payment_term_08a.PNG",width:"400"}),(0,r.kt)("p",null,"Navigate to the schedule lines tab to view/add/update schedule lines.",(0,r.kt)("br",{parentName:"p"}),"\n","Click on the add new entity to add a new line. If a line already exists, click on copy entity to copy all the details.\nYou can enable/disable fields allowed to be copied in the menu configuration.  "),(0,r.kt)("img",{src:"/images/modules/gl/payment_term/payment_term_08b.PNG",width:"300"}),(0,r.kt)("p",null,"A payment schedule due date can be specified in 2 different ways"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Due Days"))," No of days from payment term days that the customer needs to make the payment to avail the schedule"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Due Dates"))," Specific dates before which the customer needs to make the payment to avail the schedule")),(0,r.kt)("img",{src:"/images/modules/gl/payment_term/payment_term_08c.PNG",width:"800"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Amount Percentage"),": Percentage of total invoice amount the customer needs to pay before the due date."),(0,r.kt)("p",null,"The reference groups show various ids for reference only. You don't need to enter any information in this section. When you save a payment term for the first time, the system will auto-populate the newly created header id and line ids."),(0,r.kt)("p",null,"Scroll left, right, up, and down view all other fields."),(0,r.kt)("img",{src:"/images/modules/gl/payment_term/payment_term_08d.PNG",width:"800"}),(0,r.kt)("p",null,"Enter all the other fields and click on the save button to save the payment term. The app will post all the data to the server and will show the messages returned from the server."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"All Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Sequence"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Label"),(0,r.kt)("th",{parentName:"tr",align:null},"InputType"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Group"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"paymentTermDiscountId")),(0,r.kt)("td",{parentName:"tr",align:null},"Payment Term Discount Id"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"srcEntityName")),(0,r.kt)("td",{parentName:"tr",align:null},"Src Entity Name"),(0,r.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"20")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"srcEntityId")),(0,r.kt)("td",{parentName:"tr",align:null},"Src Entity Id"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"30")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"glPaymentTermId")),(0,r.kt)("td",{parentName:"tr",align:null},"Gl Payment Term Id"),(0,r.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"40")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"seqNumber")),(0,r.kt)("td",{parentName:"tr",align:null},"Seq Number"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.number"),(0,r.kt)("td",{parentName:"tr",align:null},"DATA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"50")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"discountPercentage")),(0,r.kt)("td",{parentName:"tr",align:null},"Discount Percentage"),(0,r.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"FINANCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"60")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"dueDays")),(0,r.kt)("td",{parentName:"tr",align:null},"Due Days"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.number"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"70")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"dueDates")),(0,r.kt)("td",{parentName:"tr",align:null},"Due Dates"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.date"),(0,r.kt)("td",{parentName:"tr",align:null},"DATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"80")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"dueDateOfMonth")),(0,r.kt)("td",{parentName:"tr",align:null},"Due Date Of Month"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.number"),(0,r.kt)("td",{parentName:"tr",align:null},"DATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5090")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"createdBy")),(0,r.kt)("td",{parentName:"tr",align:null},"Created By"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5100")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"creationDate")),(0,r.kt)("td",{parentName:"tr",align:null},"Creation Date"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5110")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"lastUpdatedBy")),(0,r.kt)("td",{parentName:"tr",align:null},"Last Updated By"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5120")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"lastUpdateDate")),(0,r.kt)("td",{parentName:"tr",align:null},"Last Update Date"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE"))))),(0,r.kt)("h2",{id:"lines---payment-term-discount"},"Lines - Payment Term Discount"),(0,r.kt)("img",{src:"/images/modules/gl/payment_term/payment_term_07.PNG",width:"800"}),(0,r.kt)("p",null,"You can add multiple discount lines to each payment term header. Each line represents a specific discount given to a customer if the customer fulfills certain conditions. Discount lines are not mandatory."),(0,r.kt)("img",{src:"/images/modules/gl/payment_term/payment_term_07a.PNG",width:"400"}),(0,r.kt)("p",null,"Navigate to the discount lines tab to view/add/update discount lines.",(0,r.kt)("br",{parentName:"p"}),"\n","Click on the add new entity to add a new line. If a line already exists, click on copy entity to copy all the details.\nYou can enable/disable fields allowed to be copied in the menu configuration.  "),(0,r.kt)("img",{src:"/images/modules/gl/payment_term/payment_term_07b.PNG",width:"800"}),(0,r.kt)("p",null,"The due date for a discount on an invoice can be provided in 2 different ways"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Due Days"))," No of days from payment term days that the customer needs to make the payment to avail of the discount"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Due Dates"))," Specific dates before which the customer needs to make the payment to avail of the discount")),(0,r.kt)("img",{src:"/images/modules/gl/payment_term/payment_term_07c.PNG",width:"800"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Discount Percentage"),": Percentage of discount the customer can take if the payments are made within the allowed discount period."),(0,r.kt)("p",null,"The reference groups show various ids for reference only. You don't need to enter any information in this section. When you save a payment term for the first time, the system will auto-populate the newly created header id and line ids."),(0,r.kt)("p",null,"Scroll left, right, up, and down view all other fields."),(0,r.kt)("img",{src:"/images/modules/gl/payment_term/payment_term_07d.PNG",width:"800"}),(0,r.kt)("p",null,"Enter all the other fields and click on the save button to save the payment term. The app will post all the data to the server and will show the messages returned from the server."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"All Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Sequence"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Label"),(0,r.kt)("th",{parentName:"tr",align:null},"InputType"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Group"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"paymentTermScheduleId")),(0,r.kt)("td",{parentName:"tr",align:null},"Payment Term Schedule Id"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"srcEntityName")),(0,r.kt)("td",{parentName:"tr",align:null},"Src Entity Name"),(0,r.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"20")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"srcEntityId")),(0,r.kt)("td",{parentName:"tr",align:null},"Src Entity Id"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"30")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"glPaymentTermId")),(0,r.kt)("td",{parentName:"tr",align:null},"Gl Payment Term Id"),(0,r.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"40")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"seqNumber")),(0,r.kt)("td",{parentName:"tr",align:null},"Seq Number"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.number"),(0,r.kt)("td",{parentName:"tr",align:null},"DATA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"50")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"amountPercentage")),(0,r.kt)("td",{parentName:"tr",align:null},"Amount Percentage"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,r.kt)("td",{parentName:"tr",align:null},"FINANCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"60")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"dueDays")),(0,r.kt)("td",{parentName:"tr",align:null},"Due Days"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.number"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"70")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"dueDates")),(0,r.kt)("td",{parentName:"tr",align:null},"Due Dates"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.date"),(0,r.kt)("td",{parentName:"tr",align:null},"DATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"80")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"dueDateOfMonth")),(0,r.kt)("td",{parentName:"tr",align:null},"Due Date Of Month"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.number"),(0,r.kt)("td",{parentName:"tr",align:null},"DATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5090")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"createdBy")),(0,r.kt)("td",{parentName:"tr",align:null},"Created By"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5100")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"creationDate")),(0,r.kt)("td",{parentName:"tr",align:null},"Creation Date"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5110")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"lastUpdatedBy")),(0,r.kt)("td",{parentName:"tr",align:null},"Last Updated By"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5120")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"lastUpdateDate")),(0,r.kt)("td",{parentName:"tr",align:null},"Last Update Date"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE"))))))}o.isMDXComponent=!0}}]);