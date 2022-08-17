"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5219],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var o=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(r),m=i,w=h["".concat(l,".").concat(m)]||h[m]||u[m]||a;return r?o.createElement(w,n(n({ref:t},d),{},{components:r})):o.createElement(w,n({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,n=new Array(a);n[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,n[1]=s;for(var c=2;c<a;c++)n[c]=r[c];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2756:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(7462),i=(r(7294),r(3905));const a={id:"work-order",title:"Work Order",sidebar_label:"Work Order"},n=void 0,s={unversionedId:"manufacturing/work-order",id:"manufacturing/work-order",title:"Work Order",description:"Work orders are always created with reference to a work definition. A work definition combines the material requirement, operations, and resource requirement. When work orders are created with reference to a work definition, the system copies all the data from the work definition. The system creates all the work orders in draft status. You can review and modify the work order/routing/bom details of the work order before releasing it.",source:"@site/docs/manufacturing/work-order.md",sourceDirName:"manufacturing",slug:"/manufacturing/work-order",permalink:"/docs/manufacturing/work-order",draft:!1,editUrl:"https://github.com/inoerp/inoerp.github.io/edit/main/content/docs/manufacturing/work-order.md",tags:[],version:"current",frontMatter:{id:"work-order",title:"Work Order",sidebar_label:"Work Order"},sidebar:"mySidebar",previous:{title:"Work Definition",permalink:"/docs/manufacturing/work-definition"},next:{title:"Transaction",permalink:"/docs/manufacturing/wip-transaction"}},l={},c=[{value:"View/Update",id:"viewupdate",level:2},{value:"Copy",id:"copy",level:2},{value:"Create",id:"create",level:2},{value:"Confirm",id:"confirm",level:2},{value:"Quantity Update",id:"quantity-update",level:2},{value:"Confirm WorkOrder",id:"confirm-workorder",level:2}],d={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("img",{src:"/images/modules/wip/wo_02.PNG",width:"600"}),(0,i.kt)("p",null,"Work orders are always created with reference to a work definition. A work definition combines the material requirement, operations, and resource requirement. When work orders are created with reference to a work definition, the system copies all the data from the work definition. The system creates all the work orders in draft status. You can review and modify the work order/routing/bom details of the work order before releasing it."),(0,i.kt)("h2",{id:"viewupdate"},"View/Update"),(0,i.kt)("p",null,'To view/update a work order, navigate to the "Work Order" search screen from your dashboard/favorite.'),(0,i.kt)("p",null,"Enter the item/organization/work order details or any other criteria in the search form and click on the search button."),(0,i.kt)("img",{src:"/images/modules/wip/update/wo_02.PNG",width:"700"}),(0,i.kt)("p",null,"If you don't enter item/organization details, the system will show you all the work orders. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search work orders."),(0,i.kt)("img",{src:"/images/modules/wip/update/wo_03.PNG",width:"700"}),(0,i.kt)("p",null,"The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices."),(0,i.kt)("img",{src:"/images/modules/wip/update/wo_04.PNG",width:"400"}),(0,i.kt)("p",null,"Search result on a mobile device:"),(0,i.kt)("img",{src:"/images/modules/wip/update/wo_04a.PNG",width:"400"}),(0,i.kt)("p",null,"To view the search result in a table format, click on the table icon available on the bottom left corner."),(0,i.kt)("img",{src:"/images/modules/wip/update/wo_04b.PNG",width:"700"}),(0,i.kt)("p",null,"To open a specific work order, click on the menu of that record, and click on view/fetch & view."),(0,i.kt)("img",{src:"/images/modules/wip/update/wo_05.PNG",width:"700"}),(0,i.kt)("p",null,"The system will fetch all the data related to the selected work order. Depending on the device size, the work order details are shown either right to the search result screen or in a separate screen."),(0,i.kt)("img",{src:"/images/modules/wip/update/wo_06.PNG",width:"700"}),(0,i.kt)("p",null,"Work order on a mobile device:"),(0,i.kt)("img",{src:"/images/modules/wip/update/wo_06a.PNG",width:"400"}),(0,i.kt)("p",null,"You can also click on the expand icon against any order on the search result screen to view the work order header details such as work order number, quantities, start date, status, etc."),(0,i.kt)("p",null,"You can modify any available field for update and click on the save button to save the changes. The app will post all the data to the server and will show the messages returned from the server."),(0,i.kt)("img",{src:"/images/modules/wip/update/wo_07.PNG",width:"700"}),(0,i.kt)("p",null,"Scroll left, right, up, and down view all the tabs and fields."),(0,i.kt)("p",null,"The default configuration shows all the operations, material, and resource requirements in separate tabs. You can also configure the application to show other tabs with details such as"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"completed operations against the work order"),(0,i.kt)("li",{parentName:"ul"},"issued materials against the work order"),(0,i.kt)("li",{parentName:"ul"},"issued resources against the work order")),(0,i.kt)("img",{src:"/images/modules/wip/update/wo_08.PNG",width:"700"}),(0,i.kt)("p",null,"The line tab shows all the operations available for the work order. You can add extra operations or modify the operations copied from the work definition. You can view material requirements for a specific operation by clicking on the material button available on the Links heading. You can also view all material requirements for the entire work order by navigating to the material requirement tab available next to the line tab."),(0,i.kt)("img",{src:"/images/modules/wip/update/wo_09.PNG",width:"700"}),(0,i.kt)("img",{src:"/images/modules/wip/update/wo_10.PNG",width:"700"}),(0,i.kt)("img",{src:"/images/modules/wip/update/wo_11.PNG",width:"700"}),(0,i.kt)("p",null,"You can view resource requirements for a specific operation by clicking on the resource button available on the Links heading. You can also view all resource requirements for the entire work order by navigating to the resource requirement tab available next to the line tab."),(0,i.kt)("p",null,"Navigate to the material tab to view all the material requirements for the job. On this tab, you can modify material requirement details. By default, the application shows the elements in an expandable list view. However, if you are working on a large screen device, click on the table icon visible on the right bottom to view all the details in a table format."),(0,i.kt)("img",{src:"/images/modules/wip/update/wo_12.PNG",width:"700"}),(0,i.kt)("p",null,"Navigate to the resource tab to view all the resource requirements for the job. On this tab, you can modify resource requirement details. By default, the application shows the elements in an expandable list view. However, if you are working on a large screen device, click on the table icon visible on the right bottom to view all the details in a table format."),(0,i.kt)("img",{src:"/images/modules/wip/update/wo_13.PNG",width:"700"}),(0,i.kt)("img",{src:"/images/modules/wip/update/wo_14.PNG",width:"700"}),(0,i.kt)("p",null,"Click on the back button to navigate back to the search result screen."),(0,i.kt)("h2",{id:"copy"},"Copy"),(0,i.kt)("p",null,"To copy a work order, search the work order and click on the copy button on the search result. The copy option is also available on the work order action list of values."),(0,i.kt)("img",{src:"/images/modules/wip/copy/wo_copy_01.PNG",width:"600"}),(0,i.kt)("p",null,"The system copies all the information from the selected work order except those fields marked as not copied. If you change the work definition before saving the work order, the application will copy all operation and operation details of the selected work definition. You can configure which fields should not be copied as per your business requirements."),(0,i.kt)("img",{src:"/images/modules/wip/copy/wo_copy_02.PNG",width:"800"}),(0,i.kt)("p",null,"By default, the app is configured not to copy start dates, quantities, etc. However, you can change all these settings as per your business requirements. Enter all the non-copied mandatory fields such as date, quantity."),(0,i.kt)("img",{src:"/images/modules/wip/copy/wo_copy_03.PNG",width:"700"}),(0,i.kt)("p",null,"Calendar icons are available next to all date / date-time fields. Click on the calendar icon to select a date."),(0,i.kt)("img",{src:"/images/modules/wip/copy/wo_copy_04.PNG",width:"400"}),(0,i.kt)("p",null," Click on the time icon to select/change time."),(0,i.kt)("img",{src:"/images/modules/wip/copy/wo_copy_04a.PNG",width:"300"}),(0,i.kt)("p",null,"Enter/update any other fields on the work order header, and click on the Save button.",(0,i.kt)("br",{parentName:"p"}),"\n","The system will post all the details to the server and will show you the below message if the work order is successfully created."),(0,i.kt)("img",{src:"/images/modules/wip/copy/wo_copy_05.PNG",width:"600"}),(0,i.kt)("p",null,"Navigate back to the search screen to search for the new work order. "),(0,i.kt)("img",{src:"/images/modules/wip/copy/wo_copy_06.PNG",width:"300"}),(0,i.kt)("p",null,"Review the work order details.\nScroll left, right, up, and down view all the tabs and fields, and make modifications as required before confirming the work order"),(0,i.kt)("img",{src:"/images/modules/wip/copy/wo_copy_07.PNG",width:"700"}),(0,i.kt)("p",null,"Click on the back button to navigate back to the search result screen."),(0,i.kt)("h2",{id:"create"},"Create"),(0,i.kt)("p",null,"To create a work order, navigate to the work order search screen and click on the add new button on the search screen. Creating a new work order option is also available on the work order action list of values."),(0,i.kt)("img",{src:"/images/modules/wip/create/wo_create_01.PNG",width:"600"}),(0,i.kt)("p",null,"Select the work definition and other details.\nThe primary difference between Create and Copy is that Create shows a blank form, whereas copy form copies values from the selected work order. So, the copy option is always preferable compared to creating new work order by manually entering all the details."),(0,i.kt)("img",{src:"/images/modules/wip/create/wo_create_02.PNG",width:"600"}),(0,i.kt)("p",null,"Click on the select icon next to the work definition; the system will show a work definition search form in a popup. Enter work definition details and click on the search button. Click on the select icon on the first column to select any work definition."),(0,i.kt)("img",{src:"/images/modules/wip/create/wo_create_03.PNG",width:"600"}),(0,i.kt)("p",null,"The system defaults all the values available on work definition, including the work definition name, item number, organization code, etc."),(0,i.kt)("img",{src:"/images/modules/wip/create/wo_create_04.PNG",width:"600"}),(0,i.kt)("p",null," If you click on the save button without entering all the mandatory fields, the system will show the error message below."),(0,i.kt)("img",{src:"/images/modules/wip/create/wo_create_05.PNG",width:"300"}),(0,i.kt)("p",null,"Enter all the other details, and click on the Save button to create a new work order."),(0,i.kt)("img",{src:"/images/modules/wip/create/wo_create_06.PNG",width:"800"}),(0,i.kt)("h2",{id:"confirm"},"Confirm"),(0,i.kt)("p",null,"Open a work order and navigate to the action tab to confirm the work order.\nThe action tab shows below buttons by default"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Confirm"),(0,i.kt)("li",{parentName:"ul"},"Cancel"),(0,i.kt)("li",{parentName:"ul"},"Close"),(0,i.kt)("li",{parentName:"ul"},"Pending Close"),(0,i.kt)("li",{parentName:"ul"},"Hold\nYou can also define other actions and corresponding business logic as per your requirement.")),(0,i.kt)("img",{src:"/images/modules/wip/confirm/wo_confirm_01.PNG",width:"800"}),(0,i.kt)("p",null,"Click on the confirm button to confirm the work order. If the work order is confirmed, then the system will show the below message."),(0,i.kt)("img",{src:"/images/modules/wip/confirm/wo_confirm_02.PNG",width:"600"}),(0,i.kt)("p",null,"Re-open the work order and check the work order status."),(0,i.kt)("img",{src:"/images/modules/wip/confirm/wo_confirm_03.PNG",width:"600"}),(0,i.kt)("p",null,"By default, the work application makes many fields read-only after confirmation. However, none of these creates any technical constraints on the application process. So, you can change the logic as per your business requirement by changing the below javascript function."),(0,i.kt)("img",{src:"/images/modules/wip/confirm/wo_confirm_04.PNG",width:"400"}),(0,i.kt)("h2",{id:"quantity-update"},"Quantity Update"),(0,i.kt)("p",null,"The system defaults the required quantity for items and resources depending on the work order header quantity and usages for items and resources. The system allows you to modify the required quantities because you might issue different quantities from the standard operation. Thus, if you change the work order header quantity, the application does not change the quantity requirement for resources and items. "),(0,i.kt)("p",null,"If you want to synchronize all the items and resources as per the new work order quantity, click on the Update Quantity button available in the Actions section."),(0,i.kt)("img",{src:"/images/modules/wip/update/wo_15.PNG",width:"700"}),(0,i.kt)("h2",{id:"confirm-workorder"},"Confirm WorkOrder"),(0,i.kt)("p",null,"When a work order is ready for production, confirm the work order. When you confirm a work order system"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Updates the queue quantity of the first operation to the work order quantity"),(0,i.kt)("li",{parentName:"ul"},"Enables resource transaction for the work order"),(0,i.kt)("li",{parentName:"ul"},"Enables material transactions for the work order"),(0,i.kt)("li",{parentName:"ul"},"Enables move-transaction for the work order")))}u.isMDXComponent=!0}}]);