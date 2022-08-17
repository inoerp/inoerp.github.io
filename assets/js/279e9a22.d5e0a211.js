"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7357],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>s});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),o=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=o(t.components);return n.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),k=o(a),s=r,N=k["".concat(m,".").concat(s)]||k[s]||u[s]||l;return a?n.createElement(N,i(i({ref:e},p),{},{components:a})):n.createElement(N,i({ref:e},p))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var d={};for(var m in e)hasOwnProperty.call(e,m)&&(d[m]=e[m]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3810:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const l={id:"organization-data",title:"Organization Data",sidebar_label:"Organization Data"},i=void 0,d={unversionedId:"pos/organization-data",id:"pos/organization-data",title:"Organization Data",description:"This documentation is incomplete.",source:"@site/docs/pos/organization-data.md",sourceDirName:"pos",slug:"/pos/organization-data",permalink:"/docs/pos/organization-data",draft:!1,editUrl:"https://github.com/inoerp/inoerp.github.io/edit/main/content/docs/pos/organization-data.md",tags:[],version:"current",frontMatter:{id:"organization-data",title:"Organization Data",sidebar_label:"Organization Data"},sidebar:"mySidebar",previous:{title:"POS Terminal",permalink:"/docs/pos/pos-terminal"},next:{title:"Master Data",permalink:"/docs/pos/master-data"}},m={},o=[{value:"Store In Org Hierarchy",id:"store-in-org-hierarchy",level:2},{value:"Store",id:"store",level:2},{value:"Terminal",id:"terminal",level:2},{value:"Other Org Entities",id:"other-org-entities",level:2}],p={toc:o};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This documentation is incomplete.")),(0,r.kt)("h2",{id:"store-in-org-hierarchy"},"Store In Org Hierarchy"),(0,r.kt)("img",{src:"/images/modules/pos/store/store_99.PNG",width:"800"}),(0,r.kt)("h2",{id:"store"},"Store"),(0,r.kt)("img",{src:"/images/modules/pos/terminal/terminal_001.PNG",width:"400"}),(0,r.kt)("p",null,"A store is a subdivision of an inventory organization representing either a physical area or a logical grouping of terminals/vending machines that are used to sell products. "),(0,r.kt)("p",null,"Stores don't keep track of the stock for any product. Stocks are stored in inventory, sub-inventory, and locators. Stores are used only for selling purposes."),(0,r.kt)("p",null,"All material within an inventory organization is tracked in a subinventory. Thus, you must create at least one subinventory before starting transactions in an inventory organization."),(0,r.kt)("p",null,'To view/create/update a Store, navigate to the "Store" search screen from your dashboard/favorite.'),(0,r.kt)("img",{src:"/images/modules/pos/store/store_01.PNG",width:"800"}),(0,r.kt)("p",null,"Enter the Store details or any other criteria in the search form and click on the search button to view an existing Store. Click on create a new button to create a new Store; by manually entering all the information. Copying an existing Store to a new Store is always better than manually entering all the data to create a new Store. "),(0,r.kt)("img",{src:"/images/modules/pos/store/store_02.PNG",width:"800"}),(0,r.kt)("p",null,"If you click on the create a new button, the system will open a simple step form to create a new item. You can click on the detail right bottom to view all the fields available for the object."),(0,r.kt)("img",{src:"/images/modules/pos/store/store_02a.PNG",width:"350"}),(0,r.kt)("p",null,"The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices. "),(0,r.kt)("p",null,"The system will show you all the stores if you click the search button without entering any organization/Store details. If your organization has configured to make any field mandatory for search, you must enter those fields into search stores."),(0,r.kt)("img",{src:"/images/modules/pos/store/store_03.PNG",width:"800"}),(0,r.kt)("p",null,"To view the search result in a table format, click on the table icon in the bottom left corner."),(0,r.kt)("p",null,"To open a specific Store, click on the menu of that record, and click on view/fetch & view."),(0,r.kt)("p",null,"You can also click on the expand icon against any item on the search result screen to view the Store header details such as Store name, code, manager, etc."),(0,r.kt)("p",null,"The system will fetch all the data related to the selected store. The Store details are shown either right to the search result screen or on a separate screen, depending on the device size."),(0,r.kt)("img",{src:"/images/modules/pos/store/store_03a.PNG",width:"350"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Store Code")),": A store code is a unique identifier for a store. It is used to identify a Store in the system. It's a mandatory field."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Inventory Organization")),": The inventory organization is the parent organization of a Store. It is a mandatory field."),(0,r.kt)("p",null,"Each store must be associated with an inventory organization. A store can be associated with only one inventory organization. However, an inventory organization can have multiple stores."),(0,r.kt)("p",null,"All inventory on hand and stock is tracked in sub-inventories. Thus, you must also create at least one subinventory before starting POS-related inventory transactions."),(0,r.kt)("img",{src:"/images/modules/pos/store/store_04.PNG",width:"800"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Store Manager")),": The store manager is the person in charge of the store. It's not a mandatory field and is used only for reporting purposes."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Store Name")),": Store name is a descriptive name for a Store. Though it's not a mandatory field, you can give meaningful names to each store. You can search stores by Store name and store code."),(0,r.kt)("p",null,"Scroll left, right, up, and down to view all the details. The Store line and details are shown in a separate tab.\nThe default configuration shows fields in various functional groups, such as"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Finance"),(0,r.kt)("li",{parentName:"ul"},"Entity"),(0,r.kt)("li",{parentName:"ul"},"Reference"),(0,r.kt)("li",{parentName:"ul"},"Data"),(0,r.kt)("li",{parentName:"ul"},"Control"),(0,r.kt)("li",{parentName:"ul"},"Etc  ")),(0,r.kt)("p",null,"You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements."),(0,r.kt)("img",{src:"/images/modules/pos/store/store_05.PNG",width:"800"}),(0,r.kt)("details",null,(0,r.kt)("summary",null,"All Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Sequence"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Label"),(0,r.kt)("th",{parentName:"tr",align:null},"InputType"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Group"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"vvInvOrgCode")),(0,r.kt)("td",{parentName:"tr",align:null},"Inv Org Code"),(0,r.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"vvInvOrgId")),(0,r.kt)("td",{parentName:"tr",align:null},"Inv Org Id"),(0,r.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"20")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"subInventoryId")),(0,r.kt)("td",{parentName:"tr",align:null},"Sub Inventory Id"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"30")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"subInventory")),(0,r.kt)("td",{parentName:"tr",align:null},"Sub Inventory"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,r.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"40")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"subInventoryType")),(0,r.kt)("td",{parentName:"tr",align:null},"Sub Inventory Type"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.select"),(0,r.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"50")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"mdmInventoryOrgId")),(0,r.kt)("td",{parentName:"tr",align:null},"Mdm Inventory Org Id"),(0,r.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"PLANNING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"60")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"subInventoryClass")),(0,r.kt)("td",{parentName:"tr",align:null},"Sub Inventory Class"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.select"),(0,r.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"70")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"description")),(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"80")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"terminalControl")),(0,r.kt)("td",{parentName:"tr",align:null},"Terminal Control"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,r.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"90")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"allowNegativeBalanceCb")),(0,r.kt)("td",{parentName:"tr",align:null},"Allow Negative Balance Cb"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.switchField"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"100")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"defaultCostGroup")),(0,r.kt)("td",{parentName:"tr",align:null},"Default Cost Group"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,r.kt)("td",{parentName:"tr",align:null},"PLANNING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"110")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"shipmentPickPriority")),(0,r.kt)("td",{parentName:"tr",align:null},"Shipment Pick Priority"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.number"),(0,r.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"120")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"materialAcId")),(0,r.kt)("td",{parentName:"tr",align:null},"Material Ac Id"),(0,r.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"130")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"materialOhAcId")),(0,r.kt)("td",{parentName:"tr",align:null},"Material Oh Ac Id"),(0,r.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"140")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"overheadAcId")),(0,r.kt)("td",{parentName:"tr",align:null},"Overhead Ac Id"),(0,r.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"150")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"resourceAcId")),(0,r.kt)("td",{parentName:"tr",align:null},"Resource Ac Id"),(0,r.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"160")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"ospAcId")),(0,r.kt)("td",{parentName:"tr",align:null},"Osp Ac Id"),(0,r.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"170")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"expenseAcId")),(0,r.kt)("td",{parentName:"tr",align:null},"Expense Ac Id"),(0,r.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"180")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"status")),(0,r.kt)("td",{parentName:"tr",align:null},"Status"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,r.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"190")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"revNumber")),(0,r.kt)("td",{parentName:"tr",align:null},"Rev Number"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,r.kt)("td",{parentName:"tr",align:null},"DATA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"240")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"glAcProfileHeaderId")),(0,r.kt)("td",{parentName:"tr",align:null},"Gl Ac Profile Header Id"),(0,r.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"250")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"srcEntityName")),(0,r.kt)("td",{parentName:"tr",align:null},"Src Entity Name"),(0,r.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"260")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"srcEntityId")),(0,r.kt)("td",{parentName:"tr",align:null},"Src Entity Id"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5200")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"createdBy")),(0,r.kt)("td",{parentName:"tr",align:null},"Created By"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5210")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"creationDate")),(0,r.kt)("td",{parentName:"tr",align:null},"Creation Date"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5220")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"lastUpdatedBy")),(0,r.kt)("td",{parentName:"tr",align:null},"Last Updated By"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5230")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"lastUpdateDate")),(0,r.kt)("td",{parentName:"tr",align:null},"Last Update Date"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE"))))),(0,r.kt)("h2",{id:"terminal"},"Terminal"),(0,r.kt)("img",{src:"/images/modules/pos/terminal/terminal_001.PNG",width:"400"}),(0,r.kt)("p",null,"A terminal is a subdivision of a store representing a physical location where items are sold. A terminal is usually associated with a cash drawer or other similar devices. "),(0,r.kt)("p",null,'You can show "POS Terminal Screen" on the available physical device.\nThe terminal screen is a simple screen that allows you to add items to a cart and complete a sale. (Check out the terminal screen section for more details.)'),(0,r.kt)("p",null,'To view/create/update a terminal, navigate to the "terminal" search screen from your dashboard/favorite.'),(0,r.kt)("img",{src:"/images/modules/pos/terminal/terminal_01.PNG",width:"800"}),(0,r.kt)("p",null,"Enter the terminal details or any other criteria in the search form and click on the search button to view an existing terminal. Click on create a new button to create a new terminal; by manually entering all the information. Copying an existing terminal to a new terminal is always better than manually entering all the data to create a new terminal. "),(0,r.kt)("img",{src:"/images/modules/pos/terminal/terminal_02.PNG",width:"350"}),(0,r.kt)("p",null,"If you click on the create a new button, the system will open a simple step form to create a new item. You can click on the detail right bottom to view all the fields available for the object."),(0,r.kt)("img",{src:"/images/modules/pos/terminal/terminal_03.PNG",width:"800"}),(0,r.kt)("p",null,"The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices. If you click on the search button without entering any organization/terminal details, the system will show you all the Terminals. If your organization configures any field mandatory for search, then you have to enter those fields to search Terminals."),(0,r.kt)("img",{src:"/images/modules/pos/terminal/terminal_04.PNG",width:"800"}),(0,r.kt)("p",null,"To view the search result in a table format, click on the table icon in the bottom left corner."),(0,r.kt)("p",null,"To open a specific terminal, click on the menu of that record, and click on view/fetch & view."),(0,r.kt)("p",null,"You can also click on the expand icon against any item on the search result screen to view the terminal header details such as a terminal, quantities, start date, status, etc."),(0,r.kt)("img",{src:"/images/modules/pos/terminal/terminal_04a.PNG",width:"350"}),(0,r.kt)("p",null,"The system will fetch all the data related to the selected terminal. The terminal details are either right on the search result screen or a separate screen, depending on the device size."),(0,r.kt)("p",null,"Scroll left, right, up, and down to view all the details. The terminal line and details are shown in a separate tab.\nThe default configuration shows fields in various functional groups, such as"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Finance"),(0,r.kt)("li",{parentName:"ul"},"Entity"),(0,r.kt)("li",{parentName:"ul"},"Reference"),(0,r.kt)("li",{parentName:"ul"},"Data"),(0,r.kt)("li",{parentName:"ul"},"Control"),(0,r.kt)("li",{parentName:"ul"},"Etc  ")),(0,r.kt)("img",{src:"/images/modules/pos/terminal/terminal_05.PNG",width:"800"}),(0,r.kt)("p",null,"You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"All Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Sequence"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Label"),(0,r.kt)("th",{parentName:"tr",align:null},"InputType"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Group"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"vvSubInventory")),(0,r.kt)("td",{parentName:"tr",align:null},"Sub Inventory"),(0,r.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"vvSubInventoryId")),(0,r.kt)("td",{parentName:"tr",align:null},"Sub Inventory Id"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"20")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"vvSubInventoryDescription")),(0,r.kt)("td",{parentName:"tr",align:null},"Sub Inventory Description"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"30")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"vvTerminalOrgCode")),(0,r.kt)("td",{parentName:"tr",align:null},"Terminal Org Code"),(0,r.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"40")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"vvTerminalOrgId")),(0,r.kt)("td",{parentName:"tr",align:null},"Terminal Org Id"),(0,r.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"50")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"terminalId")),(0,r.kt)("td",{parentName:"tr",align:null},"Terminal Id"),(0,r.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"60")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"srcEntityName")),(0,r.kt)("td",{parentName:"tr",align:null},"Src Entity Name"),(0,r.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"70")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"srcEntityId")),(0,r.kt)("td",{parentName:"tr",align:null},"Src Entity Id"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"80")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"subInventoryId")),(0,r.kt)("td",{parentName:"tr",align:null},"Sub Inventory Id"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"90")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"terminal")),(0,r.kt)("td",{parentName:"tr",align:null},"Terminal"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,r.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"100")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"terminalStructure")),(0,r.kt)("td",{parentName:"tr",align:null},"Terminal Structure"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,r.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"110")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"alias")),(0,r.kt)("td",{parentName:"tr",align:null},"Alias"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"120")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"dimensionUomId")),(0,r.kt)("td",{parentName:"tr",align:null},"Dimension Uom Id"),(0,r.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"130")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"length")),(0,r.kt)("td",{parentName:"tr",align:null},"Length"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,r.kt)("td",{parentName:"tr",align:null},"DATA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"140")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"height")),(0,r.kt)("td",{parentName:"tr",align:null},"Height"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,r.kt)("td",{parentName:"tr",align:null},"DATA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"150")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"width")),(0,r.kt)("td",{parentName:"tr",align:null},"Width"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"160")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"xCoordinate")),(0,r.kt)("td",{parentName:"tr",align:null},"X Coordinate"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"170")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"yCoordinate")),(0,r.kt)("td",{parentName:"tr",align:null},"Y Coordinate"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"180")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"zCoordinate")),(0,r.kt)("td",{parentName:"tr",align:null},"Z Coordinate"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"190")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"maxUnits")),(0,r.kt)("td",{parentName:"tr",align:null},"Max Units"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,r.kt)("td",{parentName:"tr",align:null},"PLANNING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"200")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"maxVolumeUomId")),(0,r.kt)("td",{parentName:"tr",align:null},"Max Volume Uom Id"),(0,r.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"DATA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"210")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"maxVolume")),(0,r.kt)("td",{parentName:"tr",align:null},"Max Volume"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,r.kt)("td",{parentName:"tr",align:null},"DATA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"220")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"maxWeightUomId")),(0,r.kt)("td",{parentName:"tr",align:null},"Max Weight Uom Id"),(0,r.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"DATA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"230")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"maxWeight")),(0,r.kt)("td",{parentName:"tr",align:null},"Max Weight"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,r.kt)("td",{parentName:"tr",align:null},"DATA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"240")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"status")),(0,r.kt)("td",{parentName:"tr",align:null},"Status"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,r.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"250")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"revEnabledCb")),(0,r.kt)("td",{parentName:"tr",align:null},"Rev Enabled Cb"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.switchField"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"260")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"revNumber")),(0,r.kt)("td",{parentName:"tr",align:null},"Rev Number"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,r.kt)("td",{parentName:"tr",align:null},"DATA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5270")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"createdBy")),(0,r.kt)("td",{parentName:"tr",align:null},"Created By"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5280")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"creationDate")),(0,r.kt)("td",{parentName:"tr",align:null},"Creation Date"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5290")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"lastUpdatedBy")),(0,r.kt)("td",{parentName:"tr",align:null},"Last Updated By"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5300")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"lastUpdateDate")),(0,r.kt)("td",{parentName:"tr",align:null},"Last Update Date"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE"))))),(0,r.kt)("h2",{id:"other-org-entities"},"Other Org Entities"),(0,r.kt)("p",null,"Depending on the business requirements, you can create other entities such as"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Legal Org ( and Primary Ledger)"),(0,r.kt)("li",{parentName:"ul"},"Business Org"),(0,r.kt)("li",{parentName:"ul"},"Inventory Org"),(0,r.kt)("li",{parentName:"ul"},"Subinventory Org"),(0,r.kt)("li",{parentName:"ul"},"Locator Org")),(0,r.kt)("p",null,"Inventory and SubInventory org entities are required if you want to auto-generate inventory transactions against POS sales. Similarly, Legal org and Primary Ledger are necessary if you want to auto-generate accounting entries against POS sales."),(0,r.kt)("p",null," Refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/inv/organization-data"},"inventory organizations")," for more details on inventory organization details. Similarly, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/mdm/organization"},"common organizations")," for more details on accounting organization details."))}u.isMDXComponent=!0}}]);