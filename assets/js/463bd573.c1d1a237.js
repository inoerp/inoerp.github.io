"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[410],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return N}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),k=p(a),N=r,g=k["".concat(o,".").concat(N)]||k[N]||u[N]||l;return a?n.createElement(g,i(i({ref:e},m),{},{components:a})):n.createElement(g,i({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},561:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return N},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return u}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i=["components"],d={id:"organization-data",title:"Organization Data",sidebar_label:"Organization Data"},o=void 0,p={unversionedId:"inv/organization-data",id:"inv/organization-data",title:"Organization Data",description:"This documentation is incomplete.",source:"@site/docs/inv/organization-data.md",sourceDirName:"inv",slug:"/inv/organization-data",permalink:"/docs/inv/organization-data",draft:!1,editUrl:"https://github.com/inoerp/inoerp.github.io/edit/main/content/docs/inv/organization-data.md",tags:[],version:"current",frontMatter:{id:"organization-data",title:"Organization Data",sidebar_label:"Organization Data"},sidebar:"mySidebar",previous:{title:"Master Data",permalink:"/docs/inv/master-data"},next:{title:"Transaction",permalink:"/docs/inv/transaction"}},m={},u=[{value:"Sub-Inventory",id:"sub-inventory",level:2},{value:"Locator",id:"locator",level:2}],k={toc:u};function N(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This documentation is incomplete.")),(0,l.kt)("h2",{id:"sub-inventory"},"Sub-Inventory"),(0,l.kt)("p",null,"A sub-inventory is a subdivision of an inventory organization representing either a physical area or a logical grouping of items such as a store-room or receiving dock. All material within an inventory organization is tracked in a subinventory thus, you must create at least one sub-inventory before creating transactions in an inventory organization."),(0,l.kt)("p",null,'To view/create/update a Sub-Inventory, navigate to the "Sub-Inventory" search screen from your dashboard/favorite.'),(0,l.kt)("img",{src:"/images/modules/inv/sub_inventory/sub_inventory_01.PNG",width:"400"}),(0,l.kt)("p",null,"Enter the Sub-Inventory details or any other criteria in the search form and click on the search button to view an existing Sub-Inventory. Click on create a new button to create a new Sub-Inventory; by manually entering all the information. Copying an existing Sub-Inventory to a new Sub-Inventory is always better than manually entering all the data to create a new Sub-Inventory. "),(0,l.kt)("img",{src:"/images/modules/inv/sub_inventory/sub_inventory_02.PNG",width:"800"}),(0,l.kt)("p",null,"If you click on the create a new button, the system will open a simple step form to create a new item. You can click on the detail right bottom to view all the fields available for the object."),(0,l.kt)("img",{src:"/images/modules/inv/sub_inventory/sub_inventory_03.PNG",width:"350"}),(0,l.kt)("p",null,"If you click on the search button without entering any organization/Sub-Inventory details, the system will show you all the Sub-Inventories. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search Sub-Inventories. The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices."),(0,l.kt)("img",{src:"/images/modules/inv/sub_inventory/sub_inventory_04.PNG",width:"350"}),(0,l.kt)("p",null,"To view the search result in a table format, click on the table icon available on the bottom left corner."),(0,l.kt)("p",null,"To open a specific Sub-Inventory, click on the menu of that record, and click on view/fetch & view."),(0,l.kt)("p",null,"You can also click on the expand icon against any item on the search result screen to view the Sub-Inventory header details such as Sub-Inventory, quantities, start date, status, etc."),(0,l.kt)("img",{src:"/images/modules/inv/sub_inventory/sub_inventory_05.PNG",width:"800"}),(0,l.kt)("p",null,"The system will fetch all the data related to the selected Sub-Inventory. The Sub-Inventory details are shown either right to the search result screen or on a separate screen, depending on the device size."),(0,l.kt)("p",null,"Scroll left, right, up, down to view all the details. The Sub-Inventory line and details are shown in a separate tab.\nThe default configuration shows fields in various functional groups such as"),(0,l.kt)("img",{src:"/images/modules/inv/sub_inventory/sub_inventory_06.PNG",width:"800"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Finance"),(0,l.kt)("li",{parentName:"ul"},"Entity"),(0,l.kt)("li",{parentName:"ul"},"Reference"),(0,l.kt)("li",{parentName:"ul"},"Data"),(0,l.kt)("li",{parentName:"ul"},"Control"),(0,l.kt)("li",{parentName:"ul"},"Etc  ")),(0,l.kt)("img",{src:"/images/modules/inv/sub_inventory/sub_inventory_07.PNG",width:"800"}),(0,l.kt)("p",null,"You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements."),(0,l.kt)("p",null,"The data tab shows information related to physical attributes of the item such as Weight, Volume, Length, Height, etc.\nThe finance tab shows information related to price, invoice, tax, discount, etc."),(0,l.kt)("img",{src:"/images/modules/inv/sub_inventory/sub_inventory_08.PNG",width:"800"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"All Fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Sequence"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"InputType"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Group"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvInvOrgCode")),(0,l.kt)("td",{parentName:"tr",align:null},"Inv Org Code"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvInvOrgId")),(0,l.kt)("td",{parentName:"tr",align:null},"Inv Org Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"20")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"subInventoryId")),(0,l.kt)("td",{parentName:"tr",align:null},"Sub Inventory Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"30")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"subInventory")),(0,l.kt)("td",{parentName:"tr",align:null},"Sub Inventory"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"40")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"subInventoryType")),(0,l.kt)("td",{parentName:"tr",align:null},"Sub Inventory Type"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.select"),(0,l.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"50")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"mdmInventoryOrgId")),(0,l.kt)("td",{parentName:"tr",align:null},"Mdm Inventory Org Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"PLANNING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"60")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"subInventoryClass")),(0,l.kt)("td",{parentName:"tr",align:null},"Sub Inventory Class"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.select"),(0,l.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"70")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"description")),(0,l.kt)("td",{parentName:"tr",align:null},"Description"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"80")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"locatorControl")),(0,l.kt)("td",{parentName:"tr",align:null},"Locator Control"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"90")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"allowNegativeBalanceCb")),(0,l.kt)("td",{parentName:"tr",align:null},"Allow Negative Balance Cb"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.switchField"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"100")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"defaultCostGroup")),(0,l.kt)("td",{parentName:"tr",align:null},"Default Cost Group"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"PLANNING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"110")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"shipmentPickPriority")),(0,l.kt)("td",{parentName:"tr",align:null},"Shipment Pick Priority"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.number"),(0,l.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"120")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"materialAcId")),(0,l.kt)("td",{parentName:"tr",align:null},"Material Ac Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"130")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"materialOhAcId")),(0,l.kt)("td",{parentName:"tr",align:null},"Material Oh Ac Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"140")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"overheadAcId")),(0,l.kt)("td",{parentName:"tr",align:null},"Overhead Ac Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"150")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"resourceAcId")),(0,l.kt)("td",{parentName:"tr",align:null},"Resource Ac Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"160")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"ospAcId")),(0,l.kt)("td",{parentName:"tr",align:null},"Osp Ac Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"170")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"expenseAcId")),(0,l.kt)("td",{parentName:"tr",align:null},"Expense Ac Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"180")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"status")),(0,l.kt)("td",{parentName:"tr",align:null},"Status"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"190")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"revNumber")),(0,l.kt)("td",{parentName:"tr",align:null},"Rev Number"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"DATA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"240")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"glAcProfileHeaderId")),(0,l.kt)("td",{parentName:"tr",align:null},"Gl Ac Profile Header Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"250")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"srcEntityName")),(0,l.kt)("td",{parentName:"tr",align:null},"Src Entity Name"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"260")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"srcEntityId")),(0,l.kt)("td",{parentName:"tr",align:null},"Src Entity Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5200")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"createdBy")),(0,l.kt)("td",{parentName:"tr",align:null},"Created By"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5210")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"creationDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Creation Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5220")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"lastUpdatedBy")),(0,l.kt)("td",{parentName:"tr",align:null},"Last Updated By"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5230")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"lastUpdateDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Last Update Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE"))))),(0,l.kt)("h2",{id:"locator"},"Locator"),(0,l.kt)("p",null,"A locator is a subdivision of an sub-inventory representing either a physical location where items are stored.\nYou can use locator to represent physical position such as aisle, rack, or bin locations of your inventory storage.\nLocators are not mandatory. However, it helps organization to map the exact physical location of storage  in the system."),(0,l.kt)("p",null,'To view/create/update a locator, navigate to the "locator" search screen from your dashboard/favorite.'),(0,l.kt)("img",{src:"/images/modules/inv/locator/locator_01.PNG",width:"400"}),(0,l.kt)("p",null,"Enter the locator details or any other criteria in the search form and click on the search button to view an existing locator. Click on create a new button to create a new locator; by manually entering all the information. Copying an existing locator to a new locator is always better than manually entering all the data to create a new locator. "),(0,l.kt)("img",{src:"/images/modules/inv/locator/locator_02.PNG",width:"800"}),(0,l.kt)("p",null,"If you click on the create a new button, the system will open a simple step form to create a new item. You can click on the detail right bottom to view all the fields available for the object."),(0,l.kt)("img",{src:"/images/modules/inv/locator/locator_03.PNG",width:"350"}),(0,l.kt)("p",null,"If you click on the search button without entering any organization/locator details, the system will show you all the Locators. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search Locators. The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices."),(0,l.kt)("img",{src:"/images/modules/inv/locator/locator_04.PNG",width:"350"}),(0,l.kt)("p",null,"To view the search result in a table format, click on the table icon available on the bottom left corner."),(0,l.kt)("p",null,"To open a specific locator, click on the menu of that record, and click on view/fetch & view."),(0,l.kt)("p",null,"You can also click on the expand icon against any item on the search result screen to view the locator header details such as locator, quantities, start date, status, etc."),(0,l.kt)("img",{src:"/images/modules/inv/locator/locator_05.PNG",width:"800"}),(0,l.kt)("p",null,"The system will fetch all the data related to the selected locator. The locator details are shown either right to the search result screen or on a separate screen, depending on the device size."),(0,l.kt)("p",null,"Scroll left, right, up, down to view all the details. The locator line and details are shown in a separate tab.\nThe default configuration shows fields in various functional groups such as"),(0,l.kt)("img",{src:"/images/modules/inv/locator/locator_06.PNG",width:"800"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Finance"),(0,l.kt)("li",{parentName:"ul"},"Entity"),(0,l.kt)("li",{parentName:"ul"},"Reference"),(0,l.kt)("li",{parentName:"ul"},"Data"),(0,l.kt)("li",{parentName:"ul"},"Control"),(0,l.kt)("li",{parentName:"ul"},"Etc  ")),(0,l.kt)("img",{src:"/images/modules/inv/locator/locator_06a.PNG",width:"800"}),(0,l.kt)("p",null,"You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements."),(0,l.kt)("p",null,"The data tab shows information related to physical attributes of the item such as Weight, Volume, Length, Height, etc.\nThe finance tab shows information related to price, invoice, tax, discount, etc."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"All Fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Sequence"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"InputType"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Group"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvSubInventory")),(0,l.kt)("td",{parentName:"tr",align:null},"Sub Inventory"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvSubInventoryId")),(0,l.kt)("td",{parentName:"tr",align:null},"Sub Inventory Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"20")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvSubInventoryDescription")),(0,l.kt)("td",{parentName:"tr",align:null},"Sub Inventory Description"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"30")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvLocatorOrgCode")),(0,l.kt)("td",{parentName:"tr",align:null},"Locator Org Code"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"40")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvLocatorOrgId")),(0,l.kt)("td",{parentName:"tr",align:null},"Locator Org Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"50")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"locatorId")),(0,l.kt)("td",{parentName:"tr",align:null},"Locator Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"60")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"srcEntityName")),(0,l.kt)("td",{parentName:"tr",align:null},"Src Entity Name"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"70")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"srcEntityId")),(0,l.kt)("td",{parentName:"tr",align:null},"Src Entity Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"80")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"subInventoryId")),(0,l.kt)("td",{parentName:"tr",align:null},"Sub Inventory Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"90")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"locator")),(0,l.kt)("td",{parentName:"tr",align:null},"Locator"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"100")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"locatorStructure")),(0,l.kt)("td",{parentName:"tr",align:null},"Locator Structure"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"110")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"alias")),(0,l.kt)("td",{parentName:"tr",align:null},"Alias"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"120")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"dimensionUomId")),(0,l.kt)("td",{parentName:"tr",align:null},"Dimension Uom Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"130")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"length")),(0,l.kt)("td",{parentName:"tr",align:null},"Length"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"DATA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"140")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"height")),(0,l.kt)("td",{parentName:"tr",align:null},"Height"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"DATA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"150")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"width")),(0,l.kt)("td",{parentName:"tr",align:null},"Width"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"160")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"xCoordinate")),(0,l.kt)("td",{parentName:"tr",align:null},"X Coordinate"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"170")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"yCoordinate")),(0,l.kt)("td",{parentName:"tr",align:null},"Y Coordinate"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"180")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"zCoordinate")),(0,l.kt)("td",{parentName:"tr",align:null},"Z Coordinate"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"190")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"maxUnits")),(0,l.kt)("td",{parentName:"tr",align:null},"Max Units"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"PLANNING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"200")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"maxVolumeUomId")),(0,l.kt)("td",{parentName:"tr",align:null},"Max Volume Uom Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DATA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"210")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"maxVolume")),(0,l.kt)("td",{parentName:"tr",align:null},"Max Volume"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"DATA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"220")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"maxWeightUomId")),(0,l.kt)("td",{parentName:"tr",align:null},"Max Weight Uom Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DATA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"230")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"maxWeight")),(0,l.kt)("td",{parentName:"tr",align:null},"Max Weight"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"DATA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"240")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"status")),(0,l.kt)("td",{parentName:"tr",align:null},"Status"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"250")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"revEnabledCb")),(0,l.kt)("td",{parentName:"tr",align:null},"Rev Enabled Cb"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.switchField"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"260")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"revNumber")),(0,l.kt)("td",{parentName:"tr",align:null},"Rev Number"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"DATA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5270")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"createdBy")),(0,l.kt)("td",{parentName:"tr",align:null},"Created By"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5280")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"creationDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Creation Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5290")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"lastUpdatedBy")),(0,l.kt)("td",{parentName:"tr",align:null},"Last Updated By"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5300")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"lastUpdateDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Last Update Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE"))))))}N.isMDXComponent=!0}}]);