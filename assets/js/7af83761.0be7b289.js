"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8853],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),o=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=o(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=m(t,["components","mdxType","originalType","parentName"]),s=o(a),k=r,N=s["".concat(d,".").concat(k)]||s[k]||u[k]||l;return a?n.createElement(N,i(i({ref:e},p),{},{components:a})):n.createElement(N,i({ref:e},p))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var m={};for(var d in e)hasOwnProperty.call(e,d)&&(m[d]=e[d]);m.originalType=t,m.mdxType="string"==typeof t?t:r,i[1]=m;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},8341:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return m},metadata:function(){return o},toc:function(){return u}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i=["components"],m={id:"master-data",title:"Master Data",sidebar_label:"Master Data"},d=void 0,o={unversionedId:"pos/master-data",id:"pos/master-data",title:"Master Data",description:"This documentation is incomplete.",source:"@site/docs/pos/master-data.md",sourceDirName:"pos",slug:"/pos/master-data",permalink:"/docs/pos/master-data",draft:!1,editUrl:"https://github.com/inoerp/inoerp.github.io/edit/main/content/docs/pos/master-data.md",tags:[],version:"current",frontMatter:{id:"master-data",title:"Master Data",sidebar_label:"Master Data"},sidebar:"mySidebar",previous:{title:"Organization Data",permalink:"/docs/pos/organization-data"},next:{title:"POS Order",permalink:"/docs/pos/pos-order"}},p={},u=[{value:"Product",id:"product",level:2},{value:"Refresh For Off-line",id:"refresh-for-off-line",level:3},{value:"Item Master",id:"item-master",level:2},{value:"Customer",id:"customer",level:2}],s={toc:u};function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This documentation is incomplete.")),(0,l.kt)("img",{src:"/images/modules/pos/product/product_99.PNG",width:"500"}),(0,l.kt)("p",null,"All saleable products are created as inventory items in the item master. The item master is a master data table that contains all the information about materials/items related to sales, purchasing, manufacturing, etc."),(0,l.kt)("p",null,"You can maintain the sales price information for each item either in the item master or in the item price list."),(0,l.kt)("p",null,"The combined item master and price information are created as a product in the POS module. The product also contains POS item category information assigned in the item master. "),(0,l.kt)("p",null,"The POS product table contains all the information about the product required to create a sales order line."),(0,l.kt)("p",null,"This approach allows you to operate POS in any simple hardware device without requiring several database connections to the central ERP system. The POS can be used in any POS terminal, desktop computer, laptop, or mobile device without an active internet connection."),(0,l.kt)("h2",{id:"product"},"Product"),(0,l.kt)("img",{src:"/images/modules/pos/product/product_001.PNG",width:"350"}),(0,l.kt)("p",null,"A product is an item available for sale. It contains item master information, item price information, and POS item category information."),(0,l.kt)("p",null,"Products can be created in 2 ways in the system :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Importing item master and item price information from ERP."),(0,l.kt)("li",{parentName:"ul"},"Manually creating a product in the POS module. You can also copy an existing product to create a new product.")),(0,l.kt)("p",null,"You can also create store-specific products for the same inventory item, i.e., create the same product in different stores with different price information."),(0,l.kt)("img",{src:"/images/modules/pos/product/product_02.PNG",width:"800"}),(0,l.kt)("p",null,'To view/create/update a Product, navigate to the "Product" search screen from your dashboard/favorite.'),(0,l.kt)("p",null,"Enter the Product details or any other criteria in the search form and click on the search button to view an existing Product. Click on create a new button to create a new Product; by manually entering all the information. Copying an existing Product to a new One is always better than manually entering all the data to create a new One. "),(0,l.kt)("img",{src:"/images/modules/pos/product/product_03.PNG",width:"800"}),(0,l.kt)("p",null,"If you click on the create a new button, the system will open a simple step form to create a new item. You can click on the detail right bottom to view all the fields available for the object."),(0,l.kt)("p",null,"The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices. "),(0,l.kt)("img",{src:"/images/modules/pos/product/product_03a.PNG",width:"350"}),(0,l.kt)("p",null,"The system will show all the products if you click the search button without entering any organization/product details. If your organization configures any field mandatory for search, you must enter those fields into search products."),(0,l.kt)("p",null,"To view the search result in a table format, click on the table icon in the bottom left corner."),(0,l.kt)("p",null,"To open a specific Product, click on the menu of that record, and click on view/fetch & view."),(0,l.kt)("img",{src:"/images/modules/pos/product/product_04.PNG",width:"800"}),(0,l.kt)("p",null,"You can also click on the expand icon against any item on the search result screen to view the Product header details such as item name, item description, manager, etc."),(0,l.kt)("p",null,"The system will fetch all the data related to the selected store. The Product details are shown either right to the search result screen or on a separate screen, depending on the device size."),(0,l.kt)("img",{src:"/images/modules/pos/product/product_04a.PNG",width:"350"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Item Number")),": An item number is a unique identifier for an item. It is used to identify the item in the system. Item numbers are created in the item master and assigned to various inventory organizations."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Store Code")),": A store code is a unique identifier for a store. The store is not a mandatory field in the product. However, if you want to create a product with different price information across stores, you must enter the store code in the product master."),(0,l.kt)("img",{src:"/images/modules/pos/product/product_05.PNG",width:"800"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"List Price")),": List price is the price used to calculate sales. The sales price is a mandatory field in the product master, and the value is shown on the POS product screen."),(0,l.kt)("p",null,"The system calculates the total line price by multiplying the list price by the quantity."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Item Description")),": Item and long item descriptions are copied from the item master. However, you can edit the item description in the product master."),(0,l.kt)("img",{src:"/images/modules/pos/product/product_06.PNG",width:"800"}),(0,l.kt)("p",null,"Scroll left, right, up, and down to view all the details. The Product line and details are shown in a separate tab.\nThe default configuration shows fields in various functional groups, such as"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Finance"),(0,l.kt)("li",{parentName:"ul"},"Entity"),(0,l.kt)("li",{parentName:"ul"},"Reference"),(0,l.kt)("li",{parentName:"ul"},"Data"),(0,l.kt)("li",{parentName:"ul"},"Control"),(0,l.kt)("li",{parentName:"ul"},"Etc  ")),(0,l.kt)("p",null,"You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements."),(0,l.kt)("img",{src:"/images/modules/pos/product/product_06a.PNG",width:"800"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"All Fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Sequence"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"InputType"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Group"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvInvOrgCode")),(0,l.kt)("td",{parentName:"tr",align:null},"Inv Org Code"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvInvOrgId")),(0,l.kt)("td",{parentName:"tr",align:null},"Inv Org Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"20")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"subInventoryId")),(0,l.kt)("td",{parentName:"tr",align:null},"Sub Inventory Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"30")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"subInventory")),(0,l.kt)("td",{parentName:"tr",align:null},"Sub Inventory"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"40")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"subInventoryType")),(0,l.kt)("td",{parentName:"tr",align:null},"Sub Inventory Type"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.select"),(0,l.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"50")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"mdmInventoryOrgId")),(0,l.kt)("td",{parentName:"tr",align:null},"Mdm Inventory Org Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"PLANNING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"60")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"subInventoryClass")),(0,l.kt)("td",{parentName:"tr",align:null},"Sub Inventory Class"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.select"),(0,l.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"70")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"description")),(0,l.kt)("td",{parentName:"tr",align:null},"Description"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"80")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"terminalControl")),(0,l.kt)("td",{parentName:"tr",align:null},"Terminal Control"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"90")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"allowNegativeBalanceCb")),(0,l.kt)("td",{parentName:"tr",align:null},"Allow Negative Balance Cb"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.switchField"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"100")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"defaultCostGroup")),(0,l.kt)("td",{parentName:"tr",align:null},"Default Cost Group"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"PLANNING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"110")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"shipmentPickPriority")),(0,l.kt)("td",{parentName:"tr",align:null},"Shipment Pick Priority"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.number"),(0,l.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"120")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"materialAcId")),(0,l.kt)("td",{parentName:"tr",align:null},"Material Ac Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"130")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"materialOhAcId")),(0,l.kt)("td",{parentName:"tr",align:null},"Material Oh Ac Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"140")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"overheadAcId")),(0,l.kt)("td",{parentName:"tr",align:null},"Overhead Ac Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"150")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"resourceAcId")),(0,l.kt)("td",{parentName:"tr",align:null},"Resource Ac Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"160")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"ospAcId")),(0,l.kt)("td",{parentName:"tr",align:null},"Osp Ac Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"170")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"expenseAcId")),(0,l.kt)("td",{parentName:"tr",align:null},"Expense Ac Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"180")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"status")),(0,l.kt)("td",{parentName:"tr",align:null},"Status"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"190")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"revNumber")),(0,l.kt)("td",{parentName:"tr",align:null},"Rev Number"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"DATA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"240")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"glAcProfileHeaderId")),(0,l.kt)("td",{parentName:"tr",align:null},"Gl Ac Profile Header Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"250")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"srcEntityName")),(0,l.kt)("td",{parentName:"tr",align:null},"Src Entity Name"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"260")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"srcEntityId")),(0,l.kt)("td",{parentName:"tr",align:null},"Src Entity Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5200")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"createdBy")),(0,l.kt)("td",{parentName:"tr",align:null},"Created By"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5210")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"creationDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Creation Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5220")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"lastUpdatedBy")),(0,l.kt)("td",{parentName:"tr",align:null},"Last Updated By"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5230")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"lastUpdateDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Last Update Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE"))))),(0,l.kt)("h3",{id:"refresh-for-off-line"},"Refresh For Off-line"),(0,l.kt)("img",{src:"/images/modules/pos/product/product_01.PNG",width:"350"}),(0,l.kt)("p",null,'Click on the "Refresh Local Data" button in the top right corner of the product search screen to import all product data from the server.  '),(0,l.kt)("p",null,"The program completes below two steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Deletes all existing product data in the local database."),(0,l.kt)("li",{parentName:"ol"},"Imports all product data from the server to the local database.")),(0,l.kt)("h2",{id:"item-master"},"Item Master"),(0,l.kt)("p",null," Refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/inv/master-data#item-master"},"item master")," for more details on item master. Similarly, refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/mdm/organization"},"organizations item")," for more details on organization item details."),(0,l.kt)("h2",{id:"customer"},"Customer"),(0,l.kt)("img",{src:"/images/modules/pos/customer/customer_001.PNG",width:"400"}),(0,l.kt)("p",null,"A customer is a person or an internal/external organization that purchases products or services from a business organization."),(0,l.kt)("p",null,"In inoERP, customers are created in 2 different modules :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"POS:"))," A simple customer object that contains the basic information about the customer used only in the POS module.  "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Master Data Management:"))," A generic customer object used in all ERP modules - i.e., Sales and Distribution, Receivable, Purchasing, Manufacturing, Project, etc.",(0,l.kt)("br",{parentName:"li"}),"Refer to ",(0,l.kt)("a",{parentName:"li",href:"/docs/ar/customer"},"customer master")," for more details.")),(0,l.kt)("p",null,'To view/create/update a customer, navigate to the "customer" search screen from your dashboard/favorite.'),(0,l.kt)("img",{src:"/images/modules/pos/customer/customer_01.PNG",width:"800"}),(0,l.kt)("p",null,"Enter the customer details or any other criteria in the search form and click on the search button to view an existing customer.",(0,l.kt)("br",{parentName:"p"}),"\n","Click on create a new button to create a new customer; by manually entering all the information. Copying an existing customer to a new customer is always better than manually entering all the data to create a new customer. "),(0,l.kt)("img",{src:"/images/modules/pos/customer/customer_02.PNG",width:"800"}),(0,l.kt)("p",null,"If you click on the create a new button, the system will open a simple step form to create a new item. You can click on the detail right bottom to view all the fields available for the object."),(0,l.kt)("img",{src:"/images/modules/pos/customer/customer_02a.PNG",width:"350"}),(0,l.kt)("p",null,"The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices. "),(0,l.kt)("p",null,"The system will show all the customers if you click the search button without entering any organization/customer details. If your organization has configured to make any field mandatory for search, you must enter those fields into search customers."),(0,l.kt)("img",{src:"/images/modules/pos/customer/customer_03.PNG",width:"800"}),(0,l.kt)("p",null,"To view the search result in a table format, click on the table icon in the bottom left corner."),(0,l.kt)("p",null,"To open a specific customer, click on the menu of that record, and click on view/fetch & view."),(0,l.kt)("p",null,"You can also click on the expand icon against any item on the search result screen to view the customer header details such as first name, last name, loyalty card, etc."),(0,l.kt)("p",null,"The system will fetch all the data related to the selected store. The customer details are shown either right to the search result screen or on a separate screen, depending on the device size."),(0,l.kt)("img",{src:"/images/modules/pos/customer/customer_03a.PNG",width:"350"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"First Name")),": First name of the customer. If the customer is a person, the first name is the first name of the person. If the customer is an organization, the first name is the name of the organization. First name is a mandatory field."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Last Name")),": Last name of the customer. It is not a mandatory field."),(0,l.kt)("img",{src:"/images/modules/pos/customer/customer_04.PNG",width:"800"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Loyalty Card Id")),": Enter the loyalty card id of the customer. It is not a mandatory field. However, if you want to use the loyalty card feature, you must enter the loyalty card id."),(0,l.kt)("p",null,"Scroll left, right, up, and down to view all the details. The customer line and details are shown in a separate tab.\nThe default configuration shows fields in various functional groups, such as"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Finance"),(0,l.kt)("li",{parentName:"ul"},"Entity"),(0,l.kt)("li",{parentName:"ul"},"Reference"),(0,l.kt)("li",{parentName:"ul"},"Data"),(0,l.kt)("li",{parentName:"ul"},"Control"),(0,l.kt)("li",{parentName:"ul"},"Etc  ")),(0,l.kt)("p",null,"You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements."),(0,l.kt)("img",{src:"/images/modules/pos/customer/customer_05.PNG",width:"800"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"All Fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Sequence"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"InputType"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Group"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvInvOrgCode")),(0,l.kt)("td",{parentName:"tr",align:null},"Inv Org Code"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvInvOrgId")),(0,l.kt)("td",{parentName:"tr",align:null},"Inv Org Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"20")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"subInventoryId")),(0,l.kt)("td",{parentName:"tr",align:null},"Sub Inventory Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"30")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"subInventory")),(0,l.kt)("td",{parentName:"tr",align:null},"Sub Inventory"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"40")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"subInventoryType")),(0,l.kt)("td",{parentName:"tr",align:null},"Sub Inventory Type"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.select"),(0,l.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"50")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"mdmInventoryOrgId")),(0,l.kt)("td",{parentName:"tr",align:null},"Mdm Inventory Org Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"PLANNING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"60")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"subInventoryClass")),(0,l.kt)("td",{parentName:"tr",align:null},"Sub Inventory Class"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.select"),(0,l.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"70")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"description")),(0,l.kt)("td",{parentName:"tr",align:null},"Description"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"80")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"terminalControl")),(0,l.kt)("td",{parentName:"tr",align:null},"Terminal Control"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"90")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"allowNegativeBalanceCb")),(0,l.kt)("td",{parentName:"tr",align:null},"Allow Negative Balance Cb"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.switchField"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"100")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"defaultCostGroup")),(0,l.kt)("td",{parentName:"tr",align:null},"Default Cost Group"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"PLANNING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"110")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"shipmentPickPriority")),(0,l.kt)("td",{parentName:"tr",align:null},"Shipment Pick Priority"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.number"),(0,l.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"120")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"materialAcId")),(0,l.kt)("td",{parentName:"tr",align:null},"Material Ac Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"130")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"materialOhAcId")),(0,l.kt)("td",{parentName:"tr",align:null},"Material Oh Ac Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"140")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"overheadAcId")),(0,l.kt)("td",{parentName:"tr",align:null},"Overhead Ac Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"150")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"resourceAcId")),(0,l.kt)("td",{parentName:"tr",align:null},"Resource Ac Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"160")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"ospAcId")),(0,l.kt)("td",{parentName:"tr",align:null},"Osp Ac Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"170")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"expenseAcId")),(0,l.kt)("td",{parentName:"tr",align:null},"Expense Ac Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"180")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"status")),(0,l.kt)("td",{parentName:"tr",align:null},"Status"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"190")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"revNumber")),(0,l.kt)("td",{parentName:"tr",align:null},"Rev Number"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"DATA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"240")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"glAcProfileHeaderId")),(0,l.kt)("td",{parentName:"tr",align:null},"Gl Ac Profile Header Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"250")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"srcEntityName")),(0,l.kt)("td",{parentName:"tr",align:null},"Src Entity Name"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"260")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"srcEntityId")),(0,l.kt)("td",{parentName:"tr",align:null},"Src Entity Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5200")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"createdBy")),(0,l.kt)("td",{parentName:"tr",align:null},"Created By"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5210")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"creationDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Creation Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5220")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"lastUpdatedBy")),(0,l.kt)("td",{parentName:"tr",align:null},"Last Updated By"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5230")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"lastUpdateDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Last Update Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE"))))))}k.isMDXComponent=!0}}]);