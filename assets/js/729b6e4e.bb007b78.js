"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1986],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=d(n),c=r,k=s["".concat(o,".").concat(c)]||s[c]||u[c]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2006:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],p={id:"config",title:"Config",sidebar_label:"Config"},o=void 0,d={unversionedId:"inv/config",id:"inv/config",title:"Config",description:"This documentation is incomplete.",source:"@site/docs/inv/config.md",sourceDirName:"inv",slug:"/inv/config",permalink:"/docs/inv/config",draft:!1,editUrl:"https://github.com/inoerp/inoerp.github.io/edit/main/docs/inv/config.md",tags:[],version:"current",frontMatter:{id:"config",title:"Config",sidebar_label:"Config"},sidebar:"mySidebar",previous:{title:"OnHand",permalink:"/docs/inv/onhand"},next:{title:"Inquiry",permalink:"/docs/sd/inquiry"}},m={},u=[{value:"Transaction Type",id:"transaction-type",level:2}],s={toc:u};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This documentation is incomplete."))),(0,l.kt)("h2",{id:"transaction-type"},"Transaction Type"),(0,l.kt)("img",{src:"/images/modules/inv/inv_transaction_type/inv_transaction_type_01.PNG",width:"350"}),(0,l.kt)("p",null,"INV transaction type is an object that is assigned to all inventory transactions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Manufacturing related - WIP Component Issue, WIP Component Return, WIP Completion, WIP  Return, etc"),(0,l.kt)("li",{parentName:"ul"},"Sales Order related - SO Picking, Shipping, etc"),(0,l.kt)("li",{parentName:"ul"},"Purchase Order related - PO Receiving, PO Delivery, etc"),(0,l.kt)("li",{parentName:"ul"},"Non-Document - SUbInventory Transfer, Misc. Issue, Misc. Receipt, Direct Inter-org Transfer, etc")),(0,l.kt)("p",null,"Inventory transaction controls"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If the transaction will have OnHand (stock) impact"),(0,l.kt)("li",{parentName:"ul"},"how the operational transaction is recorded in the financial system(GL Journal Entry) ")),(0,l.kt)("p",null,'To create/view/update an INV transaction type, navigate to the "INV transaction type"  screen from your dashboard/favorite.'),(0,l.kt)("p",null,"Enter the Organization/INV transaction type details or any other criteria in the search form and click on the search button to view an existing INV transaction type.  "),(0,l.kt)("img",{src:"/images/modules/inv/inv_transaction_type/inv_transaction_type_02.PNG",width:"800"}),(0,l.kt)("p",null,"If you don't enter organization details, the system will show you all the INV transaction types. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search INV transaction type.",(0,l.kt)("br",{parentName:"p"}),"\n","The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices."),(0,l.kt)("p",null,"If you click on the create new button, the system will open a simple step form to create a new INV transaction type. You can click on the detail right bottom to view all the fields available for the object. "),(0,l.kt)("img",{src:"/images/modules/inv/inv_transaction_type/inv_transaction_type_03.PNG",width:"350"}),(0,l.kt)("p",null,"To view the search result in a table format, click on the table icon available on the bottom left corner."),(0,l.kt)("p",null,"To view specific INV transaction type details, click on the menu of that record, and click on view/fetch & view."),(0,l.kt)("img",{src:"/images/modules/inv/inv_transaction_type/inv_transaction_type_04a.PNG",width:"350"}),(0,l.kt)("p",null,"You can also click on the expand icon against any item on the search result screen to view the INV transaction type header details, such as INV transaction type name, balancing segment, etc."),(0,l.kt)("img",{src:"/images/modules/inv/inv_transaction_type/inv_transaction_type_04.PNG",width:"800"}),(0,l.kt)("p",null,"The system will fetch all the selected INV transaction type data. Depending on the device size, the cost details are shown either right to the search result screen or on a separate screen."),(0,l.kt)("img",{src:"/images/modules/inv/inv_transaction_type/inv_transaction_type_05.PNG",width:"800"}),(0,l.kt)("p",null,"Scroll left, right, up, down to view all the details. The document line and details are shown in a separate tab..\nThe default configuration shows fields in various functional groups such as"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Finance"),(0,l.kt)("li",{parentName:"ul"},"Entity"),(0,l.kt)("li",{parentName:"ul"},"Reference"),(0,l.kt)("li",{parentName:"ul"},"Data"),(0,l.kt)("li",{parentName:"ul"},"Control"),(0,l.kt)("li",{parentName:"ul"},"Etc  ")),(0,l.kt)("p",null,"You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"All Fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Sequence"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"InputType"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Group"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"transactionTypeId")),(0,l.kt)("td",{parentName:"tr",align:null},"Transaction Type Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"ohImpactType")),(0,l.kt)("td",{parentName:"tr",align:null},"Oh Impact Type"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.select"),(0,l.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"20")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"invTransactionCode")),(0,l.kt)("td",{parentName:"tr",align:null},"Inv Transaction Code"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"30")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"transactionTypeClass")),(0,l.kt)("td",{parentName:"tr",align:null},"Transaction Type Class"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.select"),(0,l.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"40")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"glDocumentType")),(0,l.kt)("td",{parentName:"tr",align:null},"Gl Document Type"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"50")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"invTransactionType")),(0,l.kt)("td",{parentName:"tr",align:null},"Inv Transaction Type"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"60")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"typeClass")),(0,l.kt)("td",{parentName:"tr",align:null},"Type Class"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"70")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"transactionAction")),(0,l.kt)("td",{parentName:"tr",align:null},"Transaction Action"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"80")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"journalProfileHeaderId")),(0,l.kt)("td",{parentName:"tr",align:null},"Journal Profile Header Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"90")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"description")),(0,l.kt)("td",{parentName:"tr",align:null},"Description"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"100")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"allowNegativeBalanceCb")),(0,l.kt)("td",{parentName:"tr",align:null},"Allow Negative Balance Cb"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.switchField"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"110")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"accountId")),(0,l.kt)("td",{parentName:"tr",align:null},"Account Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"120")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"status")),(0,l.kt)("td",{parentName:"tr",align:null},"Status"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.select"),(0,l.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"130")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"revEnabledCb")),(0,l.kt)("td",{parentName:"tr",align:null},"Rev Enabled Cb"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.switchField"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"140")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"revNumber")),(0,l.kt)("td",{parentName:"tr",align:null},"Rev Number"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"DATA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"190")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"glAcProfileHeaderId")),(0,l.kt)("td",{parentName:"tr",align:null},"Gl Ac Profile Header Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"200")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"srcEntityName")),(0,l.kt)("td",{parentName:"tr",align:null},"Src Entity Name"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"210")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"srcEntityId")),(0,l.kt)("td",{parentName:"tr",align:null},"Src Entity Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5150")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"createdBy")),(0,l.kt)("td",{parentName:"tr",align:null},"Created By"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5160")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"creationDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Creation Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5170")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"lastUpdatedBy")),(0,l.kt)("td",{parentName:"tr",align:null},"Last Updated By"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5180")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"lastUpdateDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Last Update Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE"))))))}c.isMDXComponent=!0}}]);