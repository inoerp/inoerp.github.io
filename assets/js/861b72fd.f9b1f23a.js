"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3214],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3691:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={id:"routing",title:"Routing",sidebar_label:"Routing"},i=void 0,s={unversionedId:"manufacturing/routing",id:"manufacturing/routing",title:"Routing",description:"A routing is a list of operations with department and resource details that is required to manufacture a product. In inoERP, routings are maintained in a single level and are assigned to BOMs through a work definition. The system allows you to maintain multiple routings for the same item to serve different business purposes. Ex: You can maintain separate routing for Cost Roll-Up/Lead Time Calculation/What-If Analysis/Planning.",source:"@site/docs/manufacturing/routing.md",sourceDirName:"manufacturing",slug:"/manufacturing/routing",permalink:"/docs/manufacturing/routing",draft:!1,editUrl:"https://github.com/inoerp/inoerp.github.io/edit/main/content/docs/manufacturing/routing.md",tags:[],version:"current",frontMatter:{id:"routing",title:"Routing",sidebar_label:"Routing"},sidebar:"mySidebar",previous:{title:"Configuration",permalink:"/docs/purchasing/configuration"},next:{title:"Bill Of Materials",permalink:"/docs/manufacturing/bill-of-materials"}},l={},u=[{value:"Resource",id:"resource",level:2},{value:"Department",id:"department",level:2},{value:"Create Routing",id:"create-routing",level:2},{value:"Add Operation",id:"add-operation",level:3},{value:"Add Resource",id:"add-resource",level:3}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("img",{src:"/images/modules/wip/routing/routing_01.PNG",width:"500"}),(0,a.kt)("p",null,"A routing is a list of operations with department and resource details that is required to manufacture a product. In inoERP, routings are maintained in a single level and are assigned to BOMs through a work definition. The system allows you to maintain multiple routings for the same item to serve different business purposes. Ex: You can maintain separate routing for Cost Roll-Up/Lead Time Calculation/What-If Analysis/Planning.\nThe manufacturing process does not directly interact with any routing as you are required to define work definition with your primary routing that you want to use for manufacturing. "),(0,a.kt)("admonition",{title:"Important",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Before defining routing for an item, you need to define"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Resource"),(0,a.kt)("li",{parentName:"ul"},"Department"))),(0,a.kt)("h2",{id:"resource"},"Resource"),(0,a.kt)("p",null,"Define manufacturing resources to represent resources required on the shop floor for production-related activities. Resources are defined at the inventory organization level and assigned to departments. Resources can be physical (machines, work centers, tooling, process materials), money or human. They usually have cost, time, or technical constraints associated with them.  "),(0,a.kt)("p",null,'To create/view/update a Resource, navigate to the "Resource" search screen from your dashboard/favorite.'),(0,a.kt)("img",{src:"/images/modules/wip/routing/resource/resource_01.PNG",width:"300"}),(0,a.kt)("p",null,"Enter the Organization/Resource details or any other criteria in the search form and click on the search button."),(0,a.kt)("img",{src:"/images/modules/wip/routing/resource/resource_02.PNG",width:"500"}),(0,a.kt)("p",null,"If you don't enter resource details, the system will show you all the Resources defined across all organizations. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search Resources.",(0,a.kt)("br",{parentName:"p"}),"\n","The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.  "),(0,a.kt)("img",{src:"/images/modules/wip/routing/resource/resource_03.PNG",width:"800"}),(0,a.kt)("p",null,"To view the search result in a table format, click on the table icon available on the bottom left corner.",(0,a.kt)("br",{parentName:"p"}),"\n","To create a new resource, click on the create new button available on search screen actions. It's always advisable to copy an existing resource. You can copy a resource from the search result screen."),(0,a.kt)("p",null,"To open a specific Resource, click on the menu of that record, and click on view/fetch & view."),(0,a.kt)("p",null,"You can also click on the expand icon against any record on the search result screen to view the Resource header details such as Resource name, type, UOM Code, etc."),(0,a.kt)("img",{src:"/images/modules/wip/routing/resource/resource_04.PNG",width:"300"}),(0,a.kt)("p",null,"The system will fetch all the data related to the selected Resource. The Resource details are shown either right to the search result screen or in a separate screen, depending on the device size."),(0,a.kt)("img",{src:"/images/modules/wip/routing/resource/resource_05.PNG",width:"800"}),(0,a.kt)("p",null,"You can modify any available field for update and click on the save button to save the changes. The app will post all the data to the server and will show the messages returned from the server."),(0,a.kt)("img",{src:"/images/modules/wip/routing/resource/resource_06.PNG",width:"400"}),(0,a.kt)("p",null,"Scroll left, right, up, and down view all the tabs and fields.",(0,a.kt)("br",{parentName:"p"}),"\n","You can copy this Resource to a new resource by clicking on the copy button available on the action menu."),(0,a.kt)("img",{src:"/images/modules/wip/routing/resource/resource_07.PNG",width:"600"}),(0,a.kt)("p",null,"You can also use copy function available on search result action menu."),(0,a.kt)("img",{src:"/images/modules/wip/routing/resource/resource_08.PNG",width:"800"}),(0,a.kt)("p",null,"Resource type and Resource charge type are mandatory fields."),(0,a.kt)("img",{src:"/images/modules/wip/routing/resource/resource_09.PNG",width:"400"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"WIP Move",(0,a.kt)("br",{parentName:"p"}),"\n","WIP Move resources are automatically issued/returned at their standard rate as you move assemblies from one operation to another.\nYou can also manually charge WIP Move resources to track extra resource usage.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Manual",(0,a.kt)("br",{parentName:"p"}),"\n","Manual resources are issued/returned independently of any move transactions using the transaction screen.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"PO Move",(0,a.kt)("br",{parentName:"p"}),"\n","PO-related resources are automatically issued/returned at PO price as you move assemblies from one operation to another."))),(0,a.kt)("p",null,"Click on the save button to save the changes.",(0,a.kt)("br",{parentName:"p"}),"\n","Navigate back to the search screen and search the newly created department."),(0,a.kt)("img",{src:"/images/modules/wip/routing/resource/resource_10.PNG",width:"600"}),(0,a.kt)("p",null,"Review all the details by clicking on view/fetch & view button on search result action menu"),(0,a.kt)("img",{src:"/images/modules/wip/routing/resource/resource_11.PNG",width:"300"}),(0,a.kt)("h2",{id:"department"},"Department"),(0,a.kt)("p",null,"Define manufacturing departments to represent physical location and operation teams directly involved in production activities. Departments are defined at the inventory organization level.\nAll manufacturing operations are created with in a department. So, you first need to create resources, assign resources to department before creating operations."),(0,a.kt)("p",null,'To create/view/update a Department, navigate to the "Department" search screen from your dashboard/favorite.'),(0,a.kt)("img",{src:"/images/modules/wip/routing/department/dept_01.PNG",width:"800"}),(0,a.kt)("p",null,"Enter the Organization/Department details or any other criteria in the search form and click on the search button."),(0,a.kt)("img",{src:"/images/modules/wip/routing/department/dept_02.PNG",width:"300"}),(0,a.kt)("p",null,"If you don't enter Department details, the system will show you all the departments defined across all organizations. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search departments.",(0,a.kt)("br",{parentName:"p"}),"\n","The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.  "),(0,a.kt)("img",{src:"/images/modules/wip/routing/department/dept_03.PNG",width:"800"}),(0,a.kt)("p",null,"To view the search result in a table format, click on the table icon available on the bottom left corner.  "),(0,a.kt)("p",null,"To create a new department, click on the create new button available on search screen actions. It's always advisable to copy an existing Department. You can copy a Department from the search result screen."),(0,a.kt)("p",null,"To open a specific Department, click on the menu of that record, and click on view/fetch & view."),(0,a.kt)("p",null,"You can also click on the expand icon against any record on the search result screen to view the Department header details such as Department name, type, UOM Code, etc."),(0,a.kt)("img",{src:"/images/modules/wip/routing/department/dept_07.PNG",width:"600"}),(0,a.kt)("p",null,"You can modify any available field for update and click on the save button to save the changes. The app will post all the data to the server and will show the messages returned from the server."),(0,a.kt)("p",null,"Scroll up and down to view all the details of the department."),(0,a.kt)("p",null,"Navigate to Department Resource Assignment to view resources assigned to the department"),(0,a.kt)("img",{src:"/images/modules/wip/routing/department/dept_04.PNG",width:"800"}),(0,a.kt)("p",null,"The system will fetch all the data related to the selected department. The department details are shown either right to the search result screen or in a separate screen, depending on the device size."),(0,a.kt)("img",{src:"/images/modules/wip/routing/department/dept_05.PNG",width:"400"}),(0,a.kt)("p",null,"You can modify any available field for update and click on the save button to save the changes. The app will post all the data to the server and will show the messages returned from the server."),(0,a.kt)("img",{src:"/images/modules/wip/routing/department/dept_06.PNG",width:"800"}),(0,a.kt)("p",null,"Scroll left, right, up, and down view all the tabs and fields.",(0,a.kt)("br",{parentName:"p"}),"\n","You can copy this Department to a new Department by clicking on the copy button available on the action menu."),(0,a.kt)("p",null,"You can also use copy function available on search result action menu.",(0,a.kt)("br",{parentName:"p"}),"\n","Navigate back to the search screen and search the newly created department."),(0,a.kt)("img",{src:"/images/modules/wip/routing/department/dept_08.PNG",width:"400"}),(0,a.kt)("p",null,"Navigate to Resource assignment Tab to add resources to the newly created department"),(0,a.kt)("img",{src:"/images/modules/wip/routing/department/dept_09.PNG",width:"800"}),(0,a.kt)("p",null,'Click on the action menu on "No records found" message and click on add new entity.'),(0,a.kt)("img",{src:"/images/modules/wip/routing/department/dept_10.PNG",width:"400"}),(0,a.kt)("p",null,"System will add a black resource assignment form. Enter all the resource details such as"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Resource"),(0,a.kt)("li",{parentName:"ul"},"No Of Units"),(0,a.kt)("li",{parentName:"ul"},"UOM Code")),(0,a.kt)("img",{src:"/images/modules/wip/routing/department/dept_11.PNG",width:"800"}),(0,a.kt)("p",null,"System default UOM code from the resource. However, you can change it on the assignment screen."),(0,a.kt)("img",{src:"/images/modules/wip/routing/department/dept_12.PNG",width:"800"}),(0,a.kt)("p",null,"If required, click on the add new entity button again to add another resource to the department.",(0,a.kt)("br",{parentName:"p"}),"\n","Enter all the details and click on the save button to assign all the resources to the department."),(0,a.kt)("img",{src:"/images/modules/wip/routing/department/dept_13.PNG",width:"800"}),(0,a.kt)("h2",{id:"create-routing"},"Create Routing"),(0,a.kt)("p",null,'Navigate to the "Routing" search screen from your dashboard/favorite to create a Routing.'),(0,a.kt)("img",{src:"/images/modules/wip/routing/create/routing_01.PNG",width:"800"}),(0,a.kt)("p",null,"Click on the create new button available on search screen actions."),(0,a.kt)("img",{src:"/images/modules/wip/routing/create/routing_02.PNG",width:"300"}),(0,a.kt)("p",null,"The system will take you to a Routing header form to enter the item number and other details."),(0,a.kt)("img",{src:"/images/modules/wip/routing/create/routing_03.PNG",width:"350"}),(0,a.kt)("p",null,"Click on the LOV icon next to the item number. The app will show a new popup screen to search Finished Good item number.",(0,a.kt)("br",{parentName:"p"}),"\n","Enter the item number or any other criteria and click on the search button.",(0,a.kt)("br",{parentName:"p"}),"\n","The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices."),(0,a.kt)("img",{src:"/images/modules/wip/routing/create/routing_04.PNG",width:"800"}),(0,a.kt)("p",null,"To view the search result in a table format, click on the table icon available on the bottom left corner.",(0,a.kt)("br",{parentName:"p"}),"\n","Select the item for which you want to create Routing."),(0,a.kt)("img",{src:"/images/modules/wip/routing/create/routing_05.PNG",width:"800"}),(0,a.kt)("p",null,"The item will default the UOM and Organization code from the item master."),(0,a.kt)("img",{src:"/images/modules/wip/routing/create/routing_07.PNG",width:"800"}),(0,a.kt)("p",null,"Review all the header details.",(0,a.kt)("br",{parentName:"p"}),"\n","If required, modify any data and click on the Save button to create a Routing header. The app will post all the data to the server and will show the messages returned from the server."),(0,a.kt)("img",{src:"/images/modules/wip/routing/create/routing_08.PNG",width:"700"}),(0,a.kt)("p",null,"Navigate back to the search screen and search the newly created Routing Header.  "),(0,a.kt)("img",{src:"/images/modules/wip/routing/create/routing_09.PNG",width:"650"}),(0,a.kt)("p",null,"Navigate to the lines tab to add components to the Routing header."),(0,a.kt)("p",null,"The default configuration shows all the components items in separate tabs. You can also configure the application to show other tabs with details such as"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Work definitions created using the current Routing"),(0,a.kt)("li",{parentName:"ul"},"Work orders created using the current Routing"),(0,a.kt)("li",{parentName:"ul"},"Open work orders using the current Routing,"),(0,a.kt)("li",{parentName:"ul"},"etc")),(0,a.kt)("h3",{id:"add-operation"},"Add Operation"),(0,a.kt)("p",null,"To add a new operation to the Routing header, click on add new entity. The system will add a new form to add components to the Routing."),(0,a.kt)("img",{src:"/images/modules/wip/routing/create/routing_10.PNG",width:"400"}),(0,a.kt)("p",null,"Enter all the mandatory fields such as"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Operation Sequence"),(0,a.kt)("li",{parentName:"ol"},"Department"),(0,a.kt)("li",{parentName:"ol"},"Usage Quantity")),(0,a.kt)("admonition",{title:"Notes",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"System will show only departments created in the current inventory organization.")),(0,a.kt)("img",{src:"/images/modules/wip/routing/create/routing_11.PNG",width:"800"}),(0,a.kt)("p",null,"Click on the select icon on manufacturing department field  to select an existing department in the current organization.  "),(0,a.kt)("img",{src:"/images/modules/wip/routing/create/routing_12.PNG",width:"800"}),(0,a.kt)("p",null,"Enter the operation sequence and other fields as per business requirements.",(0,a.kt)("br",{parentName:"p"}),"\n","Click on the add new entity to add a new operation.   "),(0,a.kt)("img",{src:"/images/modules/wip/routing/create/routing_13.PNG",width:"450"}),(0,a.kt)("p",null,"Enter the details of the second operation.",(0,a.kt)("br",{parentName:"p"}),"\n","If you copy an operation from an existing operation, the application will copy all the values as per your settings.  "),(0,a.kt)("img",{src:"/images/modules/wip/routing/create/routing_14.PNG",width:"800"}),(0,a.kt)("h3",{id:"add-resource"},"Add Resource"),(0,a.kt)("p",null,"Each operation can have multiple resources. Click on the resources link under link section to view/update resources."),(0,a.kt)("img",{src:"/images/modules/wip/routing/create/routing_15.PNG",width:"800"}),(0,a.kt)("p",null,"For new operations without any resource, system will show an error line stating no element exists.",(0,a.kt)("br",{parentName:"p"}),"\n","To add a new resource, click on the add new line button.",(0,a.kt)("br",{parentName:"p"}),"\n","You can also use copy line button to copy an exiting resource."),(0,a.kt)("img",{src:"/images/modules/wip/routing/create/routing_16.PNG",width:"400"}),(0,a.kt)("p",null,"You need to select an existing resource assigned to the department.",(0,a.kt)("br",{parentName:"p"}),"\n","Click on the select icon on resource field to select an existing resource. "),(0,a.kt)("img",{src:"/images/modules/wip/routing/create/routing_17.PNG",width:"800"}),(0,a.kt)("p",null,"Enter search criteria and click on the search button to view all the resources available in the department.",(0,a.kt)("br",{parentName:"p"}),"\n","Click on select icon to select a resource.",(0,a.kt)("br",{parentName:"p"}),"\n","The charge type will default from the resource definition. "),(0,a.kt)("img",{src:"/images/modules/wip/routing/create/routing_18.PNG",width:"800"}),(0,a.kt)("p",null,"Click on the save button to save the changes."),(0,a.kt)("p",null,"Click on the back button to navigate back to the search result screen."))}d.isMDXComponent=!0}}]);