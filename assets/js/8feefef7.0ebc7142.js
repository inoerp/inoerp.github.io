"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9768],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),o=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=m(t,["components","mdxType","originalType","parentName"]),u=o(a),k=r,N=u["".concat(p,".").concat(k)]||u[k]||s[k]||l;return a?n.createElement(N,i(i({ref:e},d),{},{components:a})):n.createElement(N,i({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m.mdxType="string"==typeof t?t:r,i[1]=m;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3174:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return m},metadata:function(){return o},toc:function(){return s}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],m={id:"item-cost",title:"Item Cost",sidebar_label:"Item Cost"},p=void 0,o={unversionedId:"cst/item-cost",id:"cst/item-cost",title:"Item Cost",description:"This documentation is incomplete.",source:"@site/docs/cst/item-cost.md",sourceDirName:"cst",slug:"/cst/item-cost",permalink:"/docs/cst/item-cost",editUrl:"https://github.com/inoerp/inoerp.github.io/edit/main/docs/cst/item-cost.md",tags:[],version:"current",frontMatter:{id:"item-cost",title:"Item Cost",sidebar_label:"Item Cost"},sidebar:"mySidebar",previous:{title:"Master Demand Schedule",permalink:"/docs/fp/mds"},next:{title:"Frozen Item Cost",permalink:"/docs/cst/frozen-cost"}},d={},s=[{value:"Header",id:"header",level:2},{value:"Lines",id:"lines",level:2},{value:"Actions",id:"actions",level:2}],u={toc:s};function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This documentation is incomplete."))),(0,l.kt)("p",null,"Inventory item costs are maintained in 2 different groups in inoERP  "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Reporting Item Cost"),(0,l.kt)("br",{parentName:"p"}),"\n","You can create many different versions of reporting item costs for the same item. The system does not use reporting item costs for any transactions/accounting.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Frozen Item Cost"),(0,l.kt)("br",{parentName:"p"}),"\n","The system uses frozen costs for all operational activities. You can only run the cost update program to create frozen costs from a reporting cost. You can't manually create/update frozen item costs.  "))),(0,l.kt)("p",null,"An item cost consists of"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"a header with an item number and an organization"),(0,l.kt)("li",{parentName:"ul"},"several cost elements")),(0,l.kt)("h2",{id:"header"},"Header"),(0,l.kt)("p",null,'To create/view/update an item cost, navigate to the "item cost"  screen from your dashboard/favorite.'),(0,l.kt)("img",{src:"/images/modules/cst/item_cost/item_cost_01.PNG",width:"350"}),(0,l.kt)("p",null,"Enter the organization/item cost details or any other criteria in the search form and click on the search button to view an existing item cost.  "),(0,l.kt)("img",{src:"/images/modules/cst/item_cost/item_cost_02.PNG",width:"800"}),(0,l.kt)("p",null,"If you don't enter organization details, the system will show you all the item costs. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search item costs.",(0,l.kt)("br",{parentName:"p"}),"\n","The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices."),(0,l.kt)("p",null,"If you click on the Create New button, the system will open a simple step form to create a new item cost. You can click on the detail right bottom to view all the fields available for the object. "),(0,l.kt)("img",{src:"/images/modules/cst/item_cost/item_cost_03.PNG",width:"350"}),(0,l.kt)("p",null,"To view the search result in a table format, click on the table icon available on the bottom left corner."),(0,l.kt)("p",null,"To view specific item cost details, click on the menu of that record, and click on view/fetch & view."),(0,l.kt)("img",{src:"/images/modules/cst/item_cost/item_cost_03a.PNG",width:"450"}),(0,l.kt)("p",null,"You can also click on the expand icon against any item on the search result screen to view the item cost header details, such as item number, UOM, etc."),(0,l.kt)("img",{src:"/images/modules/cst/item_cost/item_cost_04.PNG",width:"800"}),(0,l.kt)("p",null,"The system will fetch all the selected item cost data. Depending on the device size, the cost details are shown either right to the search result screen or on a separate screen."),(0,l.kt)("img",{src:"/images/modules/cst/item_cost/item_cost_05.PNG",width:"800"}),(0,l.kt)("p",null,"Scroll left, right, up, down to view all the details. The so line and details are shown in a separate tab.\nThe default configuration shows fields in various functional groups such as"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Finance"),(0,l.kt)("li",{parentName:"ul"},"Entity"),(0,l.kt)("li",{parentName:"ul"},"Reference"),(0,l.kt)("li",{parentName:"ul"},"Data"),(0,l.kt)("li",{parentName:"ul"},"Control"),(0,l.kt)("li",{parentName:"ul"},"Etc  ")),(0,l.kt)("p",null,"You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements."),(0,l.kt)("img",{src:"/images/modules/cst/item_cost/item_cost_06.PNG",width:"800"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"All Fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Sequence"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"InputType"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Group"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvInvOrgCode")),(0,l.kt)("td",{parentName:"tr",align:null},"Inv Org Code"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvItemNumber")),(0,l.kt)("td",{parentName:"tr",align:null},"Item Number"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"20")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvItemDescription")),(0,l.kt)("td",{parentName:"tr",align:null},"Item Description"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"30")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvCostingMethod")),(0,l.kt)("td",{parentName:"tr",align:null},"Costing Method"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"FINANCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"40")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvCostingEnabledCb")),(0,l.kt)("td",{parentName:"tr",align:null},"Costing Enabled Cb"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"FINANCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"50")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvUomCode")),(0,l.kt)("td",{parentName:"tr",align:null},"Uom Code"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"60")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvTotalAmount")),(0,l.kt)("td",{parentName:"tr",align:null},"Total Amount"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"FINANCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"70")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvCostType")),(0,l.kt)("td",{parentName:"tr",align:null},"Cost Type"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"80")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"cstItemCostHeaderId")),(0,l.kt)("td",{parentName:"tr",align:null},"Cst Item Cost Header Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"90")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"srcEntityName")),(0,l.kt)("td",{parentName:"tr",align:null},"Src Entity Name"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"100")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"srcEntityId")),(0,l.kt)("td",{parentName:"tr",align:null},"Src Entity Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"110")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"cstCostTypeId")),(0,l.kt)("td",{parentName:"tr",align:null},"Cst Cost Type Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.number"),(0,l.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"120")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"invOrgId")),(0,l.kt)("td",{parentName:"tr",align:null},"Inv Org Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"130")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"invItemMasterId")),(0,l.kt)("td",{parentName:"tr",align:null},"Inv Item Master Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"140")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"basedOnRollupCb")),(0,l.kt)("td",{parentName:"tr",align:null},"Based On Rollup Cb"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.switchField"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"150")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"includeInRollupCb")),(0,l.kt)("td",{parentName:"tr",align:null},"Include In Rollup Cb"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.switchField"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"160")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"salesPrice")),(0,l.kt)("td",{parentName:"tr",align:null},"Sales Price"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"FINANCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"170")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"purchasePrice")),(0,l.kt)("td",{parentName:"tr",align:null},"Purchase Price"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"FINANCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"220")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"docStatus")),(0,l.kt)("td",{parentName:"tr",align:null},"Doc Status"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.select"),(0,l.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5180")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"createdBy")),(0,l.kt)("td",{parentName:"tr",align:null},"Created By"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5190")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"creationDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Creation Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5200")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"lastUpdatedBy")),(0,l.kt)("td",{parentName:"tr",align:null},"Last Updated By"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5210")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"lastUpdateDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Last Update Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE"))))),(0,l.kt)("h2",{id:"lines"},"Lines"),(0,l.kt)("img",{src:"/images/modules/cst/item_cost/item_cost_07.PNG",width:"800"}),(0,l.kt)("p",null,"You can add multiple lines to each item's cost header. Each item cost line contains cost element code, cost element type, amount."),(0,l.kt)("p",null,"Navigate to the lines tab to view/add/update lines.",(0,l.kt)("br",{parentName:"p"}),"\n","Click on the add new entity to add a new line. If a line already exists, click on copy entity to copy all the details.\nYou can enable/disable fields allowed to be copied in the menu configuration.  "),(0,l.kt)("img",{src:"/images/modules/cst/item_cost/item_cost_07a.PNG",width:"300"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Cost Element Code"),": Enter a cost element code. The system will show the base cost element type."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"amount"),": Enter the cost amount for the cost element."),(0,l.kt)("p",null,"The reference groups show various ids for reference only. You don't need to enter any information in this section. When you save an item cost for the first time, the system will auto-populate the newly created header id and line ids."),(0,l.kt)("img",{src:"/images/modules/cst/item_cost/item_cost_07b.PNG",width:"800"}),(0,l.kt)("p",null,"Scroll left, right, up, and down view all other fields."),(0,l.kt)("p",null,"Enter all the other fields and click on the save button to save the item cost. The app will post all the data to the server and will show the messages returned from the server."),(0,l.kt)("img",{src:"/images/modules/cst/item_cost/item_cost_07c.PNG",width:"800"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"All Fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Sequence"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"InputType"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Group"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvCostElementCode")),(0,l.kt)("td",{parentName:"tr",align:null},"Cost Element Code"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"FINANCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvCostElementType")),(0,l.kt)("td",{parentName:"tr",align:null},"Cost Element Type"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"20")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvCostElementDescription")),(0,l.kt)("td",{parentName:"tr",align:null},"Cost Element Description"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"FINANCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"30")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"cstItemCostLineId")),(0,l.kt)("td",{parentName:"tr",align:null},"Cst Item Cost Line Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"40")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"cstItemCostHeaderId")),(0,l.kt)("td",{parentName:"tr",align:null},"Cst Item Cost Header Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"50")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"cstCostElementId")),(0,l.kt)("td",{parentName:"tr",align:null},"Cst Cost Element Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"60")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"amount")),(0,l.kt)("td",{parentName:"tr",align:null},"Amount"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"FINANCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"70")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"costBasis")),(0,l.kt)("td",{parentName:"tr",align:null},"Cost Basis"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"FINANCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"80")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"thisLevelCb")),(0,l.kt)("td",{parentName:"tr",align:null},"This Level Cb"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.switchField"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"90")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"status")),(0,l.kt)("td",{parentName:"tr",align:null},"Status"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5100")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"createdBy")),(0,l.kt)("td",{parentName:"tr",align:null},"Created By"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5110")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"creationDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Creation Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5120")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"lastUpdatedBy")),(0,l.kt)("td",{parentName:"tr",align:null},"Last Updated By"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5130")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"lastUpdateDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Last Update Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE"))))),(0,l.kt)("h2",{id:"actions"},"Actions"),(0,l.kt)("p",null,"Actions allow you to update the frozen cost from an item cost.",(0,l.kt)("br",{parentName:"p"}),"\n","You can also use ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},'" Cost Update Program"'))," to update item costs for several items.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},'"Cost RollUp"'))," allows you to calculate the cost of an item with BOM. The system rolls up the cost of all child component costs to the item cost."),(0,l.kt)("img",{src:"/images/modules/cst/item_cost/item_cost_09.PNG",width:"800"}))}k.isMDXComponent=!0}}]);