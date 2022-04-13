"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9234],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(r),h=a,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3359:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={id:"planned_order",title:"Planned Orders",sidebar_label:"Planned Orders"},l=void 0,d={unversionedId:"fp/planned_order",id:"fp/planned_order",title:"Planned Orders",description:"This documentation is incomplete.",source:"@site/docs/fp/planned_order.md",sourceDirName:"fp",slug:"/fp/planned_order",permalink:"/docs/fp/planned_order",editUrl:"https://github.com/inoerp/inoerp.github.io/edit/main/docs/fp/planned_order.md",tags:[],version:"current",frontMatter:{id:"planned_order",title:"Planned Orders",sidebar_label:"Planned Orders"},sidebar:"mySidebar",previous:{title:"MRP",permalink:"/docs/fp/mrp"},next:{title:"Item Cost",permalink:"/docs/cst/item-cost"}},p={},u=[{value:"Purchase Requisition",id:"purchase-requisition",level:2},{value:"Work Order",id:"work-order",level:2}],c={toc:u};function h(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This documentation is incomplete."))),(0,i.kt)("h2",{id:"purchase-requisition"},"Purchase Requisition"),(0,i.kt)("p",null,'You can view and release MRP suggested purchase requisitions in the "MRP Release Purchase Requisition" screen.'),(0,i.kt)("p",null,'To view/update planned purchase requisitions, navigate to the "MRP Release Purchase Requisition" search screen from your dashboard/favorite.'),(0,i.kt)("img",{src:"/images/modules/fp/planned_order/pr/pr_01.PNG",width:"400"}),(0,i.kt)("p",null,"Enter the organization/planned purchase requisition details or any other criteria in the search form and click on the search button to view an existing planned purchase requisition.  "),(0,i.kt)("img",{src:"/images/modules/fp/planned_order/pr/pr_02.PNG",width:"800"}),(0,i.kt)("p",null,"If you don't enter organization details, the system will show you all the planned purchase requisitions. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search planned purchase requisitions.",(0,i.kt)("br",{parentName:"p"}),"\n","The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices."),(0,i.kt)("img",{src:"/images/modules/fp/planned_order/pr/pr_03.PNG",width:"350"}),(0,i.kt)("p",null,"To view the search result in a table format, click on the table icon available in the bottom left corner."),(0,i.kt)("p",null,"To open a specific planned order for purchase requisition, click on the menu of that record, and click on view/fetch & view."),(0,i.kt)("p",null,"You can also click on the expand icon against any item on the search result screen to view the planned purchase requisition details such as item description, need by date, etc."),(0,i.kt)("img",{src:"/images/modules/fp/planned_order/pr/pr_04.PNG",width:"800"}),(0,i.kt)("p",null,"The system will fetch all the selected planned purchase requisition data. Depending on the device size, the planned purchase requisition details are shown either right to the search result screen or on a separate screen."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Supplier Details"),(0,i.kt)("br",{parentName:"p"}),"\n","The system defaults the supplier details from the sourcing rule. If multiple suppliers are available for the same item, the system picks the supplier with the highest line rank. Though supplier details are not mandatory for requisitions, it's advisable to maintain the sourcing rule as it simplifies the requisition and purchase order creation process."),(0,i.kt)("img",{src:"/images/modules/fp/planned_order/pr/pr_05.PNG",width:"800"}),(0,i.kt)("p",null,"During the requisition import process, the system groups all the items purchased from the supplier and creates a single purchase requisition. Requisition interface lines without supplier details are imported to a single requisition. The buyer must manually enter the supplier details to convert those requisitions to purchase orders."),(0,i.kt)("img",{src:"/images/modules/fp/planned_order/pr/pr_06.PNG",width:"800"}),(0,i.kt)("p",null,"Scroll left, right, up, and down to view all the details. The planned purchase requisition line and details are shown in a separate tab.\nThe default configuration shows fields in various functional groups, such as"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Finance"),(0,i.kt)("li",{parentName:"ul"},"Entity"),(0,i.kt)("li",{parentName:"ul"},"Reference"),(0,i.kt)("li",{parentName:"ul"},"Data"),(0,i.kt)("li",{parentName:"ul"},"Control"),(0,i.kt)("li",{parentName:"ul"},"Etc  ")),(0,i.kt)("img",{src:"/images/modules/fp/planned_order/pr/pr_07.PNG",width:"800"}),(0,i.kt)("p",null,"You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements."),(0,i.kt)("p",null,"The links section shows two buttons"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Release planned order")),": Click on this button to release the opened planned order. The system will insert all the planned order details into purchasing interface table. You need to run the requisition import process to view the requisitions."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Release planned order")),": Click on this button to release all purchase requisition planned orders in the selected MRP plan.")),(0,i.kt)("img",{src:"/images/modules/fp/planned_order/pr/pr_08.PNG",width:"800"}),(0,i.kt)("h2",{id:"work-order"},"Work Order"),(0,i.kt)("p",null,'You can view and release MRP suggested work orders in the "MRP Release Work Order" screen.'),(0,i.kt)("p",null,'To view/update planned work orders, navigate to the "MRP Release Work Order" search screen from your dashboard/favorite.'),(0,i.kt)("img",{src:"/images/modules/fp/planned_order/wo/wo_01.PNG",width:"400"}),(0,i.kt)("p",null,"Enter the organization/planned work order details or any other criteria in the search form and click on the search button to view an existing planned work order.  "),(0,i.kt)("img",{src:"/images/modules/fp/planned_order/wo/wo_02.PNG",width:"800"}),(0,i.kt)("p",null,"If you don't enter organization details, the system will show you all the planned work orders. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search planned work orders.",(0,i.kt)("br",{parentName:"p"}),"\n","The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices."),(0,i.kt)("img",{src:"/images/modules/fp/planned_order/wo/wo_03.PNG",width:"350"}),(0,i.kt)("p",null,"To view the search result in a table format, click on the table icon available in the bottom left corner."),(0,i.kt)("p",null,"To open a specific planned order for a work order, click on the menu of that record, and click on view/fetch & view."),(0,i.kt)("img",{src:"/images/modules/fp/planned_order/wo/wo_04.PNG",width:"800"}),(0,i.kt)("p",null,"You can also click on the expand icon against any item on the search result screen to view the planned work order details such as item description, completion date, quantity, etc."),(0,i.kt)("p",null,"The system will fetch all the selected planned work order data. Depending on the device size, the planned work order details are shown either right to the search result screen or on a separate screen."),(0,i.kt)("img",{src:"/images/modules/fp/planned_order/wo/wo_05.PNG",width:"800"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Work Definition"),(0,i.kt)("br",{parentName:"p"}),"\n","Work definitions are required to create work orders and, thus, needed to insert data in the work order interface table. The system defaults to the work definition of the item if it's defined. If an item has multiple work definitions, then the system defaults the work definition with the maximum default sequence."),(0,i.kt)("img",{src:"/images/modules/fp/planned_order/wo/wo_06.PNG",width:"800"}),(0,i.kt)("p",null,"Scroll left, right, up, and down to view all the details. The planned work order line and details are shown in a separate tab.\nThe default configuration shows fields in various functional groups, such as"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Finance"),(0,i.kt)("li",{parentName:"ul"},"Entity"),(0,i.kt)("li",{parentName:"ul"},"Reference"),(0,i.kt)("li",{parentName:"ul"},"Data"),(0,i.kt)("li",{parentName:"ul"},"Control"),(0,i.kt)("li",{parentName:"ul"},"Etc  ")),(0,i.kt)("img",{src:"/images/modules/fp/planned_order/wo/wo_07.PNG",width:"800"}),(0,i.kt)("p",null,"You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements."),(0,i.kt)("p",null,"The links section shows two buttons"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Release planned order")),": Click on this button to release the opened planned order. The system will insert all the planned order details into purchasing interface table. You need to run the work order import process to view the work orders."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Release planned order")),": Click on this button to release all work order planned orders in the selected MRP plan.")),(0,i.kt)("img",{src:"/images/modules/fp/planned_order/wo/wo_08.PNG",width:"800"}))}h.isMDXComponent=!0}}]);