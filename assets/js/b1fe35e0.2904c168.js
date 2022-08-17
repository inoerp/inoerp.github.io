"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2947],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),u=p(a),k=r,N=u["".concat(o,".").concat(k)]||u[k]||s[k]||l;return a?n.createElement(N,i(i({ref:e},m),{},{components:a})):n.createElement(N,i({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8131:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={id:"configuration",title:"Configuration",sidebar_label:"Configuration"},i=void 0,d={unversionedId:"fa/configuration",id:"fa/configuration",title:"Configuration",description:"Use the asset accounting configurations to manage all aspects of your fixed asset accounting processes. Asset accounting setups default values from various settings to documents and transactions to simplify data entry and automate various transactions.",source:"@site/docs/fa/configuration.md",sourceDirName:"fa",slug:"/fa/configuration",permalink:"/docs/fa/configuration",draft:!1,editUrl:"https://github.com/inoerp/inoerp.github.io/edit/main/content/docs/fa/configuration.md",tags:[],version:"current",frontMatter:{id:"configuration",title:"Configuration",sidebar_label:"Configuration"},sidebar:"mySidebar",previous:{title:"Transaction",permalink:"/docs/fa/transaction"},next:{title:"Customer",permalink:"/docs/ar/customer"}},o={},p=[{value:"Asset Category",id:"asset-category",level:2},{value:"Book",id:"book",level:2}],m={toc:p};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use the asset accounting configurations to manage all aspects of your fixed asset accounting processes. Asset accounting setups default values from various settings to documents and transactions to simplify data entry and automate various transactions."),(0,r.kt)("h2",{id:"asset-category"},"Asset Category"),(0,r.kt)("p",null,"Asset category allows you to group similar assets and thereby allows organizations to activate and create depreciation of several assets together. The asset category also provides accounts for various asset transactions."),(0,r.kt)("p",null,"Asset category is a mandatory field on assets. Thus, you need to define at least one asset category before creating an asset in the system."),(0,r.kt)("p",null,'To view/create/update an asset category, navigate to the "asset category" search screen from your dashboard/favorite.'),(0,r.kt)("img",{src:"/images/modules/fa/config/category/category_01.PNG",width:"300"}),(0,r.kt)("p",null,"Enter the organization/asset category details or any other criteria in the search form and click on the search button to view an existing asset category.",(0,r.kt)("br",{parentName:"p"}),"\n","Click on create a new button to create a new asset category; by manually entering all the information,"),(0,r.kt)("img",{src:"/images/modules/fa/config/category/category_02.PNG",width:"800"}),(0,r.kt)("p",null,"If you don't enter organization details, the system will show you all the asset categories. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search asset categories.",(0,r.kt)("br",{parentName:"p"}),"\n","The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices."),(0,r.kt)("img",{src:"/images/modules/fa/config/category/category_03.PNG",width:"350"}),(0,r.kt)("p",null,"To view the search result in a table format, click on the table icon available in the bottom left corner."),(0,r.kt)("p",null,"To open a specific asset category, click on the menu of that record, and click on view/fetch & view."),(0,r.kt)("p",null,"You can also click on the expand icon against any item on the search result screen to view the asset category details such as business unit name, payment term, price list, etc."),(0,r.kt)("img",{src:"/images/modules/fa/config/category/category_04.PNG",width:"800"}),(0,r.kt)("p",null,"The system will fetch all the data related to the selected asset category. The asset category details are shown either right to the search result screen or on a separate screen, depending on the device size."),(0,r.kt)("img",{src:"/images/modules/fa/config/category/category_04a.PNG",width:"400"}),(0,r.kt)("p",null,"Scroll left, right, up, and down to view all the details. The asset category line and details are shown in a separate tab.\nThe default configuration shows fields in various functional groups, such as"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Finance"),(0,r.kt)("li",{parentName:"ul"},"Entity"),(0,r.kt)("li",{parentName:"ul"},"Reference"),(0,r.kt)("li",{parentName:"ul"},"Data"),(0,r.kt)("li",{parentName:"ul"},"Control"),(0,r.kt)("li",{parentName:"ul"},"Etc  ")),(0,r.kt)("img",{src:"/images/modules/fa/config/category/category_05.PNG",width:"800"}),(0,r.kt)("p",null,"You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements."),(0,r.kt)("img",{src:"/images/modules/fa/config/category/category_06.PNG",width:"800"}),(0,r.kt)("details",null,(0,r.kt)("summary",null,"All Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Sequence"),(0,r.kt)("th",{parentName:"tr",align:null},"Label"),(0,r.kt)("th",{parentName:"tr",align:null},"InputType"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Group"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"faAssetCategoryId")),(0,r.kt)("td",{parentName:"tr",align:null},"Fa Asset Category Id"),(0,r.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"srcEntityName")),(0,r.kt)("td",{parentName:"tr",align:null},"Src Entity Name"),(0,r.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"20")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"srcEntityId")),(0,r.kt)("td",{parentName:"tr",align:null},"Src Entity Id"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"30")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"assetCategory")),(0,r.kt)("td",{parentName:"tr",align:null},"Asset Category"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"40")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"segment1")),(0,r.kt)("td",{parentName:"tr",align:null},"Segment 1"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,r.kt)("td",{parentName:"tr",align:null},"FINANCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"50")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"segment2")),(0,r.kt)("td",{parentName:"tr",align:null},"Segment 2"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,r.kt)("td",{parentName:"tr",align:null},"FINANCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"60")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"segment3")),(0,r.kt)("td",{parentName:"tr",align:null},"Segment 3"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,r.kt)("td",{parentName:"tr",align:null},"FINANCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"70")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"categoryType")),(0,r.kt)("td",{parentName:"tr",align:null},"Category Type"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.select"),(0,r.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"80")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"description")),(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"90")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"enabledCb")),(0,r.kt)("td",{parentName:"tr",align:null},"Enabled Cb"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.switchField"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"100")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"capitalizeCb")),(0,r.kt)("td",{parentName:"tr",align:null},"Capitalize Cb"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.switchField"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"110")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"inPhysicalInvCb")),(0,r.kt)("td",{parentName:"tr",align:null},"In Physical Inv Cb"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.switchField"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"120")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"glAcProfileHeaderId")),(0,r.kt)("td",{parentName:"tr",align:null},"Gl Ac Profile Header Id"),(0,r.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5130")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"createdBy")),(0,r.kt)("td",{parentName:"tr",align:null},"Created By"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5140")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"creationDate")),(0,r.kt)("td",{parentName:"tr",align:null},"Creation Date"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5150")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"lastUpdatedBy")),(0,r.kt)("td",{parentName:"tr",align:null},"Last Updated By"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5160")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"lastUpdateDate")),(0,r.kt)("td",{parentName:"tr",align:null},"Last Update Date"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE"))))),(0,r.kt)("h2",{id:"book"},"Book"),(0,r.kt)("p",null,"Asset books maintain asset costs and the accumulated depreciation. You can create and assign several asset books to an asset.\nThe system maintains deprecation for each asset in all assigned asset books. However, the system creates accounting entries for only the primary asset book. You must assign one primary asset book to each asset before running depreciation for that asset.\nEach asset book contains its own depreciation rules, cost, and other associated settings. "),(0,r.kt)("p",null,'To view/create/update an asset book, navigate to the "asset book" search screen from your dashboard/favorite.'),(0,r.kt)("img",{src:"/images/modules/fa/config/book/book_01.PNG",width:"300"}),(0,r.kt)("p",null,"Enter the organization/asset book details or any other criteria in the search form and click on the search button to view an existing asset book.",(0,r.kt)("br",{parentName:"p"}),"\n","Click on create a new button to create a new asset book; by manually entering all the information,"),(0,r.kt)("img",{src:"/images/modules/fa/config/book/book_02.PNG",width:"800"}),(0,r.kt)("p",null,"If you don't enter organization details, the system will show you all the asset books. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search asset books.",(0,r.kt)("br",{parentName:"p"}),"\n","The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices."),(0,r.kt)("img",{src:"/images/modules/fa/config/book/book_03.PNG",width:"350"}),(0,r.kt)("p",null,"To view the search result in a table format, click on the table icon available in the bottom left corner."),(0,r.kt)("p",null,"To open a specific asset book, click on the menu of that record, and click on view/fetch & view."),(0,r.kt)("p",null,"You can also click on the expand icon against any item on the search result screen to view the asset book details such as business unit name, payment term, price list, etc."),(0,r.kt)("img",{src:"/images/modules/fa/config/book/book_04.PNG",width:"800"}),(0,r.kt)("p",null,"The system will fetch all the data related to the selected asset book. Depending on the device size, the asset book details are shown either right to the search result screen or on a separate screen."),(0,r.kt)("img",{src:"/images/modules/fa/config/book/book_04a.PNG",width:"400"}),(0,r.kt)("p",null,"Scroll left, right, up, and down to view all the details. The asset book line and details are shown in a separate tab.\nThe default configuration shows fields in various functional groups, such as"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Finance"),(0,r.kt)("li",{parentName:"ul"},"Entity"),(0,r.kt)("li",{parentName:"ul"},"Reference"),(0,r.kt)("li",{parentName:"ul"},"Data"),(0,r.kt)("li",{parentName:"ul"},"Control"),(0,r.kt)("li",{parentName:"ul"},"Etc  ")),(0,r.kt)("img",{src:"/images/modules/fa/config/book/book_05.PNG",width:"800"}),(0,r.kt)("p",null,"You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements."),(0,r.kt)("img",{src:"/images/modules/fa/config/book/book_06.PNG",width:"500"}),(0,r.kt)("details",null,(0,r.kt)("summary",null,"All Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Sequence"),(0,r.kt)("th",{parentName:"tr",align:null},"Label"),(0,r.kt)("th",{parentName:"tr",align:null},"InputType"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Group"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"faBookId")),(0,r.kt)("td",{parentName:"tr",align:null},"Fa Book Id"),(0,r.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"srcEntityName")),(0,r.kt)("td",{parentName:"tr",align:null},"Src Entity Name"),(0,r.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"20")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"srcEntityId")),(0,r.kt)("td",{parentName:"tr",align:null},"Src Entity Id"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"30")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"bookName")),(0,r.kt)("td",{parentName:"tr",align:null},"Book Name"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"40")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"bookType")),(0,r.kt)("td",{parentName:"tr",align:null},"Book Type"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.select"),(0,r.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"50")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"primaryFaAssetBookId")),(0,r.kt)("td",{parentName:"tr",align:null},"Primary Fa Asset Book Id"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"60")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"description")),(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"70")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"inactiveOn")),(0,r.kt)("td",{parentName:"tr",align:null},"Inactive On"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.date"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"80")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"allowGlPostingCb")),(0,r.kt)("td",{parentName:"tr",align:null},"Allow Gl Posting Cb"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.switchField"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"90")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"faCalendarCode")),(0,r.kt)("td",{parentName:"tr",align:null},"Fa Calendar Code"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"100")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"revalueAccumDepriciationCb")),(0,r.kt)("td",{parentName:"tr",align:null},"Revalue Accum Depriciation Cb"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.switchField"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"110")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"retireRevaluationReserveCb")),(0,r.kt)("td",{parentName:"tr",align:null},"Retire Revaluation Reserve Cb"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.switchField"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"120")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"revalueYtdDepriciationCb")),(0,r.kt)("td",{parentName:"tr",align:null},"Revalue Ytd Depriciation Cb"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.switchField"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"130")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"saleProceedsGainAcId")),(0,r.kt)("td",{parentName:"tr",align:null},"Sale Proceeds Gain Ac Id"),(0,r.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"140")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"saleProceedsLossAcId")),(0,r.kt)("td",{parentName:"tr",align:null},"Sale Proceeds Loss Ac Id"),(0,r.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"150")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"saleProceedsClearingAcId")),(0,r.kt)("td",{parentName:"tr",align:null},"Sale Proceeds Clearing Ac Id"),(0,r.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"160")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"removalCostGainAcId")),(0,r.kt)("td",{parentName:"tr",align:null},"Removal Cost Gain Ac Id"),(0,r.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"170")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"removalCostLossAcId")),(0,r.kt)("td",{parentName:"tr",align:null},"Removal Cost Loss Ac Id"),(0,r.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"180")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"removalCostClearingAcId")),(0,r.kt)("td",{parentName:"tr",align:null},"Removal Cost Clearing Ac Id"),(0,r.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"190")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"nbvRetiredGainAcId")),(0,r.kt)("td",{parentName:"tr",align:null},"Nbv Retired Gain Ac Id"),(0,r.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"200")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"nbvRetiredLossAcId")),(0,r.kt)("td",{parentName:"tr",align:null},"Nbv Retired Loss Ac Id"),(0,r.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"210")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"revalReserveRetiredGainAcId")),(0,r.kt)("td",{parentName:"tr",align:null},"Reval Reserve Retired Gain Ac Id"),(0,r.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"220")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"revalReserveRetiredLossAcId")),(0,r.kt)("td",{parentName:"tr",align:null},"Reval Reserve Retired Loss Ac Id"),(0,r.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"230")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"deffDepriciationReserveAcId")),(0,r.kt)("td",{parentName:"tr",align:null},"Deff Depriciation Reserve Ac Id"),(0,r.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"240")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"deffDepriciationExpenseAcId")),(0,r.kt)("td",{parentName:"tr",align:null},"Deff Depriciation Expense Ac Id"),(0,r.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"250")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"deffDepriciationAdjustmentAcId")),(0,r.kt)("td",{parentName:"tr",align:null},"Deff Depriciation Adjustment Ac Id"),(0,r.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFEREN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"260")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"defaultAcId")),(0,r.kt)("td",{parentName:"tr",align:null},"Default Ac Id"),(0,r.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"PLANNING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"310")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"glAcProfileHeaderId")),(0,r.kt)("td",{parentName:"tr",align:null},"Gl Ac Profile Header Id"),(0,r.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5270")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"createdBy")),(0,r.kt)("td",{parentName:"tr",align:null},"Created By"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5280")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"creationDate")),(0,r.kt)("td",{parentName:"tr",align:null},"Creation Date"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5290")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"lastUpdatedBy")),(0,r.kt)("td",{parentName:"tr",align:null},"Last Updated By"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5300")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"lastUpdateDate")),(0,r.kt)("td",{parentName:"tr",align:null},"Last Update Date"),(0,r.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,r.kt)("td",{parentName:"tr",align:null},"REFERENCE"))))))}s.isMDXComponent=!0}}]);