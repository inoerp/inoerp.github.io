"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6023],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=n,p=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return a?r.createElement(p,o(o({ref:t},m),{},{components:a})):r.createElement(p,o({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},901:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={id:"bill-of-materials",title:"Bill Of Materials",sidebar_label:"Bill Of Materials"},o=void 0,s={unversionedId:"manufacturing/bill-of-materials",id:"manufacturing/bill-of-materials",title:"Bill Of Materials",description:"A bill of materials (BOM) is a list of the raw materials, sub-assemblies, intermediate assemblies, sub-components, parts, and the quantities of each needed to manufacture an end product. In inoERP, BOMs are maintained in a single level and are assigned to Routings/Operations through a work definition. The system allows you to maintain multiple BOMs for the same item to serve different business purposes. Ex: You can maintain separate BOM for Cost Roll-Up/Lead Time Calculation/What-If Analysis/Planning.",source:"@site/docs/manufacturing/bill-of-materials.md",sourceDirName:"manufacturing",slug:"/manufacturing/bill-of-materials",permalink:"/docs/manufacturing/bill-of-materials",draft:!1,editUrl:"https://github.com/inoerp/inoerp.github.io/edit/main/content/docs/manufacturing/bill-of-materials.md",tags:[],version:"current",frontMatter:{id:"bill-of-materials",title:"Bill Of Materials",sidebar_label:"Bill Of Materials"},sidebar:"mySidebar",previous:{title:"Routing",permalink:"/docs/manufacturing/routing"},next:{title:"Work Definition",permalink:"/docs/manufacturing/work-definition"}},l={},c=[{value:"View/Update",id:"viewupdate",level:2},{value:"Create",id:"create",level:2}],m={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("img",{src:"/images/modules/wip/bom/bom_01.PNG",width:"500"}),(0,n.kt)("p",null,"A bill of materials (BOM) is a list of the raw materials, sub-assemblies, intermediate assemblies, sub-components, parts, and the quantities of each needed to manufacture an end product. In inoERP, BOMs are maintained in a single level and are assigned to Routings/Operations through a work definition. The system allows you to maintain multiple BOMs for the same item to serve different business purposes. Ex: You can maintain separate BOM for Cost Roll-Up/Lead Time Calculation/What-If Analysis/Planning.\nThe manufacturing process does not directly interact with any BOM as you are required to define work definition with your primary BOM that you want to use for manufacturing. "),(0,n.kt)("h2",{id:"viewupdate"},"View/Update"),(0,n.kt)("p",null,'To view/update a BOM, navigate to the "BOM" search screen from your dashboard/favorite.'),(0,n.kt)("img",{src:"/images/modules/wip/bom/create/bom_create_01.PNG",width:"800"}),(0,n.kt)("p",null,"Enter the item/organization/BOM details or any other criteria in the search form and click on the search button."),(0,n.kt)("img",{src:"/images/modules/wip/bom/update/bom_update_02.PNG",width:"800"}),(0,n.kt)("p",null,"If you don't enter item/organization details, the system will show you all the BOMs. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search BOMs.",(0,n.kt)("br",{parentName:"p"}),"\n","The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.  "),(0,n.kt)("img",{src:"/images/modules/wip/bom/update/bom_update_03.PNG",width:"350"}),(0,n.kt)("p",null,"To view the search result in a table format, click on the table icon available on the bottom left corner."),(0,n.kt)("p",null,"To open a specific BOM, click on the menu of that record, and click on view/fetch & view."),(0,n.kt)("p",null,"You can also click on the expand icon against any item on the search result screen to view the BOM header details such as BOM number, quantities, start date, status, etc."),(0,n.kt)("img",{src:"/images/modules/wip/bom/update/bom_update_04.PNG",width:"800"}),(0,n.kt)("p",null,"The system will fetch all the data related to the selected BOM. The BOM details are shown either right to the search result screen or in a separate screen, depending on the device size."),(0,n.kt)("img",{src:"/images/modules/wip/bom/update/bom_update_05.PNG",width:"800"}),(0,n.kt)("img",{src:"/images/modules/wip/bom/update/bom_update_07.PNG",width:"800"}),(0,n.kt)("p",null,"You can modify any available field for update and click on the save button to save the changes. The app will post all the data to the server and will show the messages returned from the server."),(0,n.kt)("p",null,"Scroll left, right, up, and down view all the tabs and fields."),(0,n.kt)("img",{src:"/images/modules/wip/bom/update/bom_update_08.PNG",width:"700"}),(0,n.kt)("p",null,"Navigate to the lines tab to view all the components assigned to the BOM header. In the line tab, you can add new components, modify details of existing components."),(0,n.kt)("p",null,"Click on the save button to save the changes."),(0,n.kt)("h2",{id:"create"},"Create"),(0,n.kt)("p",null,'Navigate to the "BOM" search screen from your dashboard/favorite to create a BOM.'),(0,n.kt)("img",{src:"/images/modules/wip/bom/create/bom_create_01.PNG",width:"800"}),(0,n.kt)("p",null,"Click on the create new button available on search screen actions."),(0,n.kt)("img",{src:"/images/modules/wip/bom/create/bom_create_02.PNG",width:"800"}),(0,n.kt)("p",null,"The system will take you to a BOM header form to enter the item number and other details."),(0,n.kt)("img",{src:"/images/modules/wip/bom/create/bom_create_03.PNG",width:"350"}),"Click on the LOV icon next to the item number. The app will show a new popup screen to search Finished Good item number. Enter the item number or any other criteria and click on the search button. The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.",(0,n.kt)("img",{src:"/images/modules/wip/bom/create/bom_create_04.PNG",width:"800"}),(0,n.kt)("p",null,"To view the search result in a table format, click on the table icon available on the bottom left corner.",(0,n.kt)("br",{parentName:"p"}),"\n","Select the item for which you want to create BOM."),(0,n.kt)("img",{src:"/images/modules/wip/bom/create/bom_create_05.PNG",width:"800"}),"The item will default the UOM and Organization code from the item master.",(0,n.kt)("img",{src:"/images/modules/wip/bom/create/bom_create_07.PNG",width:"800"}),"Review all the header details. If required, modify any data and click on the Save button to create a BOM header. The app will post all the data to the server and will show the messages returned from the server.",(0,n.kt)("p",null,"Navigate back to the search screen and search the newly created BOM Header.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"(Follow the steps mentioned in ",(0,n.kt)("a",{parentName:"em",href:"#viewupdate"},"View/Update section"),")"))),(0,n.kt)("img",{src:"/images/modules/wip/bom/create/bom_create_08.PNG",width:"700"}),(0,n.kt)("p",null,"Navigate to the lines tab to add components to the BOM header."),(0,n.kt)("p",null,"The default configuration shows all the components items in separate tabs. You can also configure the application to show other tabs with details such as"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Work definitions created using the current BOM"),(0,n.kt)("li",{parentName:"ul"},"Work orders created using the current BOM"),(0,n.kt)("li",{parentName:"ul"},"Open work orders using the current BOM,"),(0,n.kt)("li",{parentName:"ul"},"etc")),(0,n.kt)("img",{src:"/images/modules/wip/bom/create/bom_create_09.PNG",width:"350"}),"To add a new component to the BOM header, click on add new entity. The system will add a new form to add components to the BOM.",(0,n.kt)("img",{src:"/images/modules/wip/bom/create/bom_create_10.PNG",width:"800"}),(0,n.kt)("p",null,"Enter all the mandatory fields such as"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Item Number"),(0,n.kt)("li",{parentName:"ol"},"Unit Of Measure"),(0,n.kt)("li",{parentName:"ol"},"Usage Quantity")),(0,n.kt)("p",null,"The system defaults UOM, WIP Supply Type, Supply SubInventory, Supply Locator, etc., from the Item Master. However, you can manually override those values before saving the BOM."),(0,n.kt)("img",{src:"/images/modules/wip/bom/create/bom_create_11.PNG",width:"800"}),"Click on the save button to save the changes.",(0,n.kt)("img",{src:"/images/modules/wip/bom/create/bom_create_12.PNG",width:"800"}),(0,n.kt)("p",null,"Click on the back button to navigate back to the search result screen."))}u.isMDXComponent=!0}}]);