"use strict";(self.webpackChunkinoerp=self.webpackChunkinoerp||[]).push([[215],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),p=n,h=d["".concat(l,".").concat(p)]||d[p]||m[p]||i;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9894:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],s={id:"wip-transaction",title:"Transaction",sidebar_label:"Transaction"},l=void 0,c={unversionedId:"manufacturing/wip-transaction",id:"manufacturing/wip-transaction",title:"Transaction",description:"Manufacturing a product requires components and resources that use the components to build the product. inoERP provides several seeded manufacturing transactions to map and track the physical activities in the system. You can also define your own transaction types, journal profiles, and accounting profiles to map any unique process that is not industry standard.",source:"@site/docs/manufacturing/wip-transaction.md",sourceDirName:"manufacturing",slug:"/manufacturing/wip-transaction",permalink:"/docs/manufacturing/wip-transaction",editUrl:"https://github.com/inoerp/inoerp.github.io/edit/main/docs/manufacturing/wip-transaction.md",tags:[],version:"current",frontMatter:{id:"wip-transaction",title:"Transaction",sidebar_label:"Transaction"},sidebar:"mySidebar",previous:{title:"Work Order",permalink:"/docs/manufacturing/work-order"},next:{title:"Request For Quotation",permalink:"/docs/purchasing/request-for-quotation"}},u=[{value:"Material Issue",id:"material-issue",children:[],level:2},{value:"Material Return",id:"material-return",children:[],level:2},{value:"Resource Issue",id:"resource-issue",children:[],level:2},{value:"Resource Return",id:"resource-return",children:[],level:2},{value:"Move Transaction",id:"move-transaction",children:[],level:2},{value:"Assembly Completion",id:"assembly-completion",children:[],level:2},{value:"Assembly Return",id:"assembly-return",children:[],level:2}],m={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("img",{src:"/images/modules/wip/transaction/transaction_01.PNG",width:"600"}),(0,i.kt)("p",null,"Manufacturing a product requires components and resources that use the components to build the product. inoERP provides several seeded manufacturing transactions to map and track the physical activities in the system. You can also define your own transaction types, journal profiles, and accounting profiles to map any unique process that is not industry standard.  "),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Notes")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Manufacturing transactions are create-only activities, i.e., You can only create these transactions; you cant update any of these transactions. "))),(0,i.kt)("p",null,"To correct any wrong transaction, create a reversal transaction ex: WIP Material Return, to rectify erroneous WIP Material Issue transactions."),(0,i.kt)("h2",{id:"material-issue"},"Material Issue"),(0,i.kt)("p",null,"A component issue transaction maps & tracks physically used components/materials during manufacturing processes. The transaction\nissues items from inventory to work orders to fulfill material requirements. Material issue reduces inventory on-hand and increases WIP valuation.\nYou can use move transactions to issue materials to a work order automatically. You can set any component to be automatically consumed/ backflushed during move transaction by selecting the supply type to operation pull."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/material/issue/wip_issue_01.PNG",width:"600"}),(0,i.kt)("p",null,"To issue material against a work order, navigate to the transaction search screen and then search the work order using the work order number or any other search criteria."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/material/issue/wip_issue_02.PNG",width:"600"}),(0,i.kt)("p",null,"Click on the select icon next to the material you want to issue."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/material/issue/wip_issue_03.PNG",width:"300"}),(0,i.kt)("p",null,'Select "WIP Material Issue" in the action list of values'),(0,i.kt)("img",{src:"/images/modules/wip/transaction/material/issue/wip_issue_04.PNG",width:"300"}),(0,i.kt)("p",null,"The system will take you to the material transaction form and show you the details of all the items selected in the previous screen."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/material/issue/wip_issue_05.PNG",width:"300"}),(0,i.kt)("p",null,"Click on the expand button to review the details of the material"),(0,i.kt)("img",{src:"/images/modules/wip/transaction/material/issue/wip_issue_06.PNG",width:"300"}),(0,i.kt)("p",null,"The transaction form rearranges itself depending upon the device screen."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/material/issue/wip_issue_06a.PNG",width:"700"}),(0,i.kt)("p",null,"Enter the quantity you want to issue.",(0,i.kt)("br",{parentName:"p"}),"\n","The system defaults the quantity field depending on the quantity required and the already issued quantity. However, it also allows you to override the value. You can allocate more/less quantity to a work order as per the actual usage of a component in a work order."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/material/issue/wip_issue_07.PNG",width:"300"}),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Enter all required fields")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"}," If you click on the save button without entering all the mandatory fields, the system will show the below error message."))),(0,i.kt)("img",{src:"/images/modules/wip/transaction/material/issue/wip_issue_08.PNG",width:"250"}),(0,i.kt)("p",null,"Enter all the other details, and click on the Save button to complete the material issue transaction."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/material/issue/wip_issue_09.PNG",width:"600"}),(0,i.kt)("p",null,"You can review all the completed transactions in the transaction view screen.",(0,i.kt)("br",{parentName:"p"}),"\n","Navigate to the transaction search form, enter the work order number or any other criteria to search the transaction"),(0,i.kt)("img",{src:"/images/modules/wip/transaction/material/issue/wip_issue_10.PNG",width:"600"}),"The system will show you the completed transaction.",(0,i.kt)("img",{src:"/images/modules/wip/transaction/material/issue/wip_issue_11.PNG",width:"600"}),(0,i.kt)("p",null,"You can create journal entries for the transaction by navigating to the action tab. However, it's advisable to schedule the accounting program to run regularly."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/material/issue/wip_issue_12.PNG",width:"400"}),(0,i.kt)("h2",{id:"material-return"},"Material Return"),(0,i.kt)("p",null,"Material return is a reversal transaction for material issue transactions. You can use the transaction to correct any wrong material issue transaction. The transaction returns items from work orders to inventory. Material return increases inventory on-hand and reduces WIP valuation."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/material/return/wip_issue_01.PNG",width:"600"}),(0,i.kt)("p",null,"To issue material against a work order, navigate to the transaction search screen and then search the work order using the work order number or any other search criteria."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/material/return/wip_issue_02.PNG",width:"600"}),(0,i.kt)("p",null,"Click on the select icon next to the material you want to return."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/material/return/wip_issue_03.PNG",width:"300"}),(0,i.kt)("p",null,'Select "WIP Material Return" in the action list of values'),(0,i.kt)("img",{src:"/images/modules/wip/transaction/material/return/wip_issue_04.PNG",width:"300"}),(0,i.kt)("p",null,"The system will take you to the material transaction form and show you the details of all the items selected in the previous screen."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/material/return/wip_issue_05.PNG",width:"300"}),(0,i.kt)("p",null,"Click on the expand button to review the details of the material"),(0,i.kt)("img",{src:"/images/modules/wip/transaction/material/return/wip_issue_06.PNG",width:"300"}),(0,i.kt)("p",null,"The transaction form rearranges itself depending upon the device screen."),(0,i.kt)("p",null,"Enter the quantity you want to return.",(0,i.kt)("br",{parentName:"p"}),"\n","The system defaults the quantity field depending on the quantity required and the already issued quantity. However, it also allows you to override the value. You can allocate more/less quantity to a work order as per the actual usage of a component in a work order."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/material/return/wip_issue_07.PNG",width:"300"}),(0,i.kt)("p",null," If you click on the save button without entering all the mandatory fields, the system will show the below error message."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/material/issue/wip_issue_08.PNG",width:"250"}),(0,i.kt)("p",null,"Enter all the other details, and click on the Save button to complete the material issue transaction."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/material/return/wip_issue_08.PNG",width:"250"}),(0,i.kt)("p",null,"You can review all the completed transactions in the transaction view screen.  "),(0,i.kt)("img",{src:"/images/modules/wip/transaction/material/return/wip_issue_09.PNG",width:"400"}),(0,i.kt)("p",null,"Navigate to the transaction search form, enter the work order number or any other criteria to search the transaction\nThe system will show you the completed transaction."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/material/return/wip_issue_10.PNG",width:"600"}),(0,i.kt)("p",null,"You can create journal entries for the transaction by navigating to the action tab. However, it's advisable to schedule the accounting program to run regularly."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/material/issue/wip_issue_12.PNG",width:"400"}),(0,i.kt)("h2",{id:"resource-issue"},"Resource Issue"),(0,i.kt)("p",null,"You can use resource issue transactions to track resource usage/consumption in a work order. You can do resource transactions manually or automatically using move transactions.\nResource issue increases WIP valuation, and you can set any resource to be auto consumed during move transaction by selecting the charge type to WIP_MOVE."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/resource/issue/wo_res_issue_01.PNG",width:"600"}),(0,i.kt)("p",null,"To issue a resource against a work order, navigate to the transaction search screen and then search the work order using the work order number or any other search criteria."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/resource/issue/wo_res_issue_02.PNG",width:"300"}),(0,i.kt)("p",null,"Click on the select icon next to the resource you want to issue."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/resource/issue/wo_res_issue_03.PNG",width:"300"}),(0,i.kt)("p",null,'Select "WIP resource Issue" in the action list of values.'),(0,i.kt)("img",{src:"/images/modules/wip/transaction/resource/issue/wo_res_issue_04.PNG",width:"300"}),(0,i.kt)("p",null,"The system will take you to the resource transaction form and show you the details of all the items selected in the previous screen.",(0,i.kt)("br",{parentName:"p"}),"\n","Click on the expand button to review the details of the resource."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/resource/issue/wo_res_issue_05.PNG",width:"700"}),(0,i.kt)("p",null,"The transaction form rearranges itself depending upon the device screen."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/resource/issue/wo_res_issue_06a.PNG",width:"300"}),(0,i.kt)("p",null,"Enter the quantity you want to issue.",(0,i.kt)("br",{parentName:"p"}),"\n","The system defaults the quantity field depending on the quantity required and the already issued quantity. However, it also allows you to override the value. You can allocate more/less quantity to a work order as per the actual usage of a resource in a work order."),(0,i.kt)("p",null," If you click on the save button without entering all the mandatory fields, the system will show the below error message."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/material/issue/wip_issue_08.PNG",width:"250"}),(0,i.kt)("p",null,"Enter all the other details, and click on the Save button to complete the resource issue transaction."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/resource/issue/wo_res_issue_07.PNG",width:"700"}),(0,i.kt)("p",null,"You can review all the completed transactions in the transaction view screen.",(0,i.kt)("br",{parentName:"p"}),"\n","Navigate to the transaction search form, enter the work order number or any other criteria to search the transaction"),(0,i.kt)("img",{src:"/images/modules/wip/transaction/resource/issue/wo_res_issue_09.PNG",width:"700"}),"The system will show you the completed transaction.",(0,i.kt)("p",null,"You can create journal entries for the transaction by navigating to the action tab. However, it's advisable to schedule the accounting program to run regularly."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/material/issue/wip_issue_12.PNG",width:"400"}),(0,i.kt)("h2",{id:"resource-return"},"Resource Return"),(0,i.kt)("p",null,"WIP Resource Return is a reversal transaction for the WIP Resource Issue. The system does not allow you to update any resource transaction. So, to correct any wrong WIP Resource Issue transaction, create a WIP resource return transaction."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/resource/issue/wo_res_issue_01.PNG",width:"600"}),(0,i.kt)("p",null,"To return a resource issued to a work order, navigate to the transaction search screen and then search the work order using the work order number or any other search criteria."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/resource/issue/wo_res_issue_02.PNG",width:"400"}),(0,i.kt)("p",null,"Click on the select icon next to the resource you want to return."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/resource/issue/wo_res_issue_03.PNG",width:"300"}),(0,i.kt)("p",null,'Select "WIP resource Return" in the action list of values'),(0,i.kt)("img",{src:"/images/modules/wip/transaction/resource/issue/wo_res_issue_04.PNG",width:"300"}),(0,i.kt)("p",null,"The system will take you to the resource transaction form and show you the details of all the items selected in the previous screen."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/resource/issue/wo_res_issue_05.PNG",width:"800"}),(0,i.kt)("p",null,"Click on the expand button to review the details of the resource.",(0,i.kt)("br",{parentName:"p"}),"\n","The transaction form rearranges itself depending upon the device screen."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/resource/issue/wo_res_issue_06a.PNG",width:"300"}),(0,i.kt)("p",null,"Enter the quantity you want to return.",(0,i.kt)("br",{parentName:"p"}),"\n","The system defaults the quantity field depending on the quantity issued and the already returned quantity. However, it also allows you to override the value. "),(0,i.kt)("img",{src:"/images/modules/wip/transaction/resource/issue/wo_res_issue_07.PNG",width:"750"}),(0,i.kt)("p",null,"If you click on the save button without entering all the mandatory fields, the system will show the below error message."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/material/issue/wip_issue_08.PNG",width:"250"}),(0,i.kt)("p",null,"Enter all the other details, and click on the Save button to complete the resource return transaction.\nYou can review all the completed transactions in the transaction view screen.  "),(0,i.kt)("img",{src:"/images/modules/wip/transaction/resource/issue/wo_res_issue_09.PNG",width:"750"}),(0,i.kt)("p",null,"Navigate to the transaction search form and enter the work order number or other criteria to search the transaction.",(0,i.kt)("br",{parentName:"p"}),"\n","The system will show you the completed transaction.\nYou can create journal entries for the transaction by navigating to the action tab. However, it's advisable to schedule the accounting program to run regularly."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/material/issue/wip_issue_12.PNG",width:"400"}),(0,i.kt)("h2",{id:"move-transaction"},"Move Transaction"),(0,i.kt)("p",null,"Move transaction is an optional transaction that you can incorporate in your business process to simplify and streamline the manufacturing operation. Move transactions help businesses to track the exact status of a work order. It allows companies to track the completion percentage of a work order in each routing step.  "),(0,i.kt)("img",{src:"/images/modules/wip/transaction/move/wip_move_trnx_01.PNG",width:"400"}),"You can move the assemblies from one operation step to another operation step in the same operation or in a different operation. The system allows you to move assemblies forward and backward within and between operations. You can backflush materials and automatically consume resources by moving material from a lower operation to a higher one. When you move from a higher operation to a lower operation, the system automatically reverses the material and resource consumption.",(0,i.kt)("p",null,"To create a move transaction a work order, navigate to the transaction search screen and then search the work order using the work order number or any other search criteria."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/move/wip_move_trnx_02.PNG",width:"800"}),(0,i.kt)("p",null,"Click on the select icon next to the operation you want to transact."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/move/wip_move_trnx_03.PNG",width:"300"}),(0,i.kt)("p",null,'Select "WIP Move Transaction" in the action list of values'),(0,i.kt)("img",{src:"/images/modules/wip/transaction/move/wip_move_trnx_03a.PNG",width:"300"}),(0,i.kt)("p",null,"The system will take you to the move transaction form and show you the details of all the operations selected in the previous screen."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/move/wip_move_trnx_04.PNG",width:"800"}),(0,i.kt)("p",null,"Select/Enter the below details"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"From Operation Step"),(0,i.kt)("li",{parentName:"ul"},"To Operation Sequence"),(0,i.kt)("li",{parentName:"ul"},"To Operation Step"),(0,i.kt)("li",{parentName:"ul"},"Move Quantity",(0,i.kt)("br",{parentName:"li"}),"The move quantity must be less than equal to the available quantity (sum of all the quantities available in the from  operation step)")),(0,i.kt)("img",{src:"/images/modules/wip/transaction/move/wip_move_trnx_04a.PNG",width:"400"}),(0,i.kt)("p",null,"Click on the expand button to review the details of the operation.",(0,i.kt)("br",{parentName:"p"}),"\n","The transaction form rearranges itself depending upon the device screen.",(0,i.kt)("br",{parentName:"p"}),"\n","Enter all the other details, and click on the Save button to complete the material issue transaction.  "),(0,i.kt)("img",{src:"/images/modules/wip/transaction/move/wip_move_trnx_04b.PNG",width:"400"}),(0,i.kt)("p",null,"You can review all the completed transactions in the transaction view screen.",(0,i.kt)("br",{parentName:"p"}),"\n","Navigate to the transaction search form and enter the work order number or other criteria to search the transaction. "),(0,i.kt)("img",{src:"/images/modules/wip/transaction/move/wip_move_trnx_05.PNG",width:"800"}),(0,i.kt)("p",null,"You can also review the move transaction details in the move transaction form and the corresponding material/resource transactions in the inventory transaction form.",(0,i.kt)("br",{parentName:"p"}),"\n","",(0,i.kt)("em",{parentName:"p"},"//TODO reference of move transaction number on inventory transaction")),(0,i.kt)("img",{src:"/images/modules/wip/transaction/move/wip_move_trnx_05a.PNG",width:"800"}),(0,i.kt)("h2",{id:"assembly-completion"},"Assembly Completion"),(0,i.kt)("p",null,"Assembly Completion transaction maps the physical completion of an item (Assembly/Sub-Assembly) at the end of a manufacturing process."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/work_order/complete/wip_trnx_01.PNG",width:"400"}),(0,i.kt)("p",null,"Create a WIP Assembly Completion to receive completed assemblies into inventory from a work order.\nBOM components with a supply type of Assembly Pull are automatically issued when you complete a work order.\nAssembly Completion increases inventory on-hand for the assembly and reduces WIP valuation."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/work_order/complete/wip_trnx_02.PNG",width:"400"}),(0,i.kt)("p",null,"To create a work order completion transaction, navigate to the transaction search screen and then search the work order using the work order number or any other search criteria."),(0,i.kt)("p",null,"Click on the select icon next to the work order you want to transact."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/work_order/complete/wip_trnx_03.PNG",width:"300"}),(0,i.kt)("p",null,'Select "WIP completion Transaction" in the action list of values'),(0,i.kt)("p",null,"The system will take you to the completion transaction form and show you the work order details selected in the previous screen."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/work_order/complete/wip_trnx_04.PNG",width:"800"}),(0,i.kt)("p",null,"Select/Enter the below details"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To Sub Inventory"),(0,i.kt)("li",{parentName:"ul"},"To Locator"),(0,i.kt)("li",{parentName:"ul"},"Quantity",(0,i.kt)("br",{parentName:"li"}),"The completion quantity must be less than equal to the available quantity (total work order quantity - the sum of all completed quantities)")),(0,i.kt)("img",{src:"/images/modules/wip/transaction/work_order/complete/wip_trnx_04a.PNG",width:"400"}),(0,i.kt)("p",null,"Click on the expand button to review the details of the work order.",(0,i.kt)("br",{parentName:"p"}),"\n","The transaction form rearranges itself depending upon the device screen.",(0,i.kt)("br",{parentName:"p"}),"\n","Enter all the other details, and click on the Save button to complete the assembly completion transaction.  "),(0,i.kt)("img",{src:"/images/modules/wip/transaction/work_order/complete/wip_trnx_04b.PNG",width:"400"}),(0,i.kt)("p",null,"You can review all the completed transactions in the transaction view screen.",(0,i.kt)("br",{parentName:"p"}),"\n","Navigate to the transaction search form and enter the work order number or other criteria to search the transaction. "),(0,i.kt)("img",{src:"/images/modules/wip/transaction/work_order/complete/wip_trnx_05.PNG",width:"800"}),(0,i.kt)("h2",{id:"assembly-return"},"Assembly Return"),(0,i.kt)("p",null,"WIP Assembly Return is a reversal transaction for WIP Assembly Completion. The system does not allow you to update any Assembly Completion transaction. "),(0,i.kt)("img",{src:"/images/modules/wip/transaction/work_order/return/wip_trnx_01.PNG",width:"300"}),(0,i.kt)("p",null,"So, to correct any wrong WIP Assembly Completion transaction, create a WIP Assembly Return transaction.\nThis transaction returns completed assemblies from inventory back to work orders. The system moves all the assembly pull components to the inventory from the work order.\nAssembly Return reduces inventory on hand for the assembly and increases WIP valuation."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/work_order/return/wip_trnx_02.PNG",width:"800"}),(0,i.kt)("p",null,"To create a Return transaction against a completed work order, navigate to the transaction search screen and then search the work order using the work order number or any other search criteria."),(0,i.kt)("p",null,"Click on the select icon next to the work order you want to transact."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/work_order/return/wip_trnx_03.PNG",width:"300"}),(0,i.kt)("p",null,'Select "WIP Return Transaction" in the action list of values'),(0,i.kt)("p",null,"The system will take you to the Return transaction form and show you the work order details selected in the previous screen."),(0,i.kt)("img",{src:"/images/modules/wip/transaction/work_order/return/wip_trnx_04.PNG",width:"800"}),(0,i.kt)("p",null,"Select/Enter the below details"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"From Sub Inventory"),(0,i.kt)("li",{parentName:"ul"},"From Locator"),(0,i.kt)("li",{parentName:"ul"},"Quantity",(0,i.kt)("br",{parentName:"li"}),"The Return quantity must be less than equal to the available quantity (sum of all completed quantities)")),(0,i.kt)("img",{src:"/images/modules/wip/transaction/work_order/return/wip_trnx_04a.PNG",width:"400"}),(0,i.kt)("p",null,"Click on the expand button to review the details of the work order.",(0,i.kt)("br",{parentName:"p"}),"\n","The transaction form rearranges itself depending upon the device screen.",(0,i.kt)("br",{parentName:"p"}),"\n","Enter all the other details, and click on the Save button to complete the Assembly return transaction.  "),(0,i.kt)("img",{src:"/images/modules/wip/transaction/work_order/return/wip_trnx_04b.PNG",width:"400"}),(0,i.kt)("p",null,"You can review all the returned transactions in the transaction view screen.",(0,i.kt)("br",{parentName:"p"}),"\n","Navigate to the transaction search form and enter the work order number or other criteria to search the transaction. "),(0,i.kt)("img",{src:"/images/modules/wip/transaction/work_order/return/wip_trnx_05.PNG",width:"800"}))}d.isMDXComponent=!0}}]);