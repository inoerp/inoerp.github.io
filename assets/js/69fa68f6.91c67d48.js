"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3947],{3905:function(t,e,a){a.d(e,{Zo:function(){return o},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):d(d({},e),t)),a},o=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),s=m(a),k=r,N=s["".concat(p,".").concat(k)]||s[k]||u[k]||l;return a?n.createElement(N,d(d({ref:e},o),{},{components:a})):n.createElement(N,d({ref:e},o))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,d=new Array(l);d[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,d[1]=i;for(var m=2;m<l;m++)d[m]=a[m];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},6721:function(t,e,a){a.r(e),a.d(e,{assets:function(){return o},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),d=["components"],i={id:"forecast",title:"Forecast",sidebar_label:"Forecast"},p=void 0,m={unversionedId:"fp/forecast",id:"fp/forecast",title:"Forecast",description:"This documentation is incomplete.",source:"@site/docs/fp/forecast.md",sourceDirName:"fp",slug:"/fp/forecast",permalink:"/docs/fp/forecast",editUrl:"https://github.com/inoerp/inoerp.github.io/edit/main/docs/fp/forecast.md",tags:[],version:"current",frontMatter:{id:"forecast",title:"Forecast",sidebar_label:"Forecast"}},o={},u=[{value:"Header",id:"header",level:2},{value:"Line - Items",id:"line---items",level:2},{value:"Details - Item &amp; Dates",id:"details---item--dates",level:2},{value:"Actions",id:"actions",level:2}],s={toc:u};function k(t){var e=t.components,a=(0,r.Z)(t,d);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This documentation is incomplete."))),(0,l.kt)("p",null,"You can use the forecast screen to enter and review sales forecast data. Forecasting is the first step of the planning process. Forecast data are collected in Master Demand Schedules, which input MRP."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Forecast consumption"))," is a process of replacing forecasted demand with actual sales order demand. In Inoerp, MDS collects the sales order and forecast data and consumes the sales order per MDS settings. MRP uses the final quantities of demand to create planned orders. If you want to use level planning and create planned order only for forecast, then collect the forecast to an MDS without consumption. A forecast is consumed by sales order if the details of both are the same. Ex: Sales order scheduled ship date is within a certain date range of forecast date."),(0,l.kt)("h2",{id:"header"},"Header"),(0,l.kt)("img",{src:"/images/modules/fp/forecast/forecast_01.PNG",width:"350"}),(0,l.kt)("p",null,'To create/view/update a forecast, navigate to the "forecast"  screen from your dashboard/favorite.'),(0,l.kt)("p",null,"Enter the organization/forecast details or any other criteria in the search form and click on the search button to view an existing forecast.  "),(0,l.kt)("img",{src:"/images/modules/fp/forecast/forecast_02.PNG",width:"800"}),(0,l.kt)("p",null,"If you don't enter any search criteria, the system will show you all the forecasts. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search forecasts.",(0,l.kt)("br",{parentName:"p"}),"\n","The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices."),(0,l.kt)("img",{src:"/images/modules/fp/forecast/forecast_03.PNG",width:"350"}),(0,l.kt)("p",null,"If you click on the Create New button, the system will open a simple step form to create a new forecast. You can click on the detail right bottom to view all the fields available for the object. "),(0,l.kt)("img",{src:"/images/modules/fp/forecast/forecast_04.PNG",width:"800"}),(0,l.kt)("p",null,"To view the search result in a table format, click on the table icon in the bottom left corner."),(0,l.kt)("p",null,"To view specific forecast details, click on the menu of that record, and click on view/fetch & view."),(0,l.kt)("p",null,"You can also click on the expand icon against any item on the search result screen to view the forecast header details, such as forecast name, description, etc."),(0,l.kt)("img",{src:"/images/modules/fp/forecast/forecast_04a.PNG",width:"300"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Forecast:")," Enter a unique  name for the forecast"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Enter a meaningful description for the forecast"),(0,l.kt)("img",{src:"/images/modules/fp/forecast/forecast_05.PNG",width:"800"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Inv Org:")," Enter an inventory organization name. Inv Org is a mandatory field. Sales orders with ship-to organization same as forecast inv org are considered for consumption."),(0,l.kt)("p",null,"Scroll left, right, up, and down to view all the details. The line details are shown in a separate tab.\nThe default configuration shows fields in various functional groups, such as"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Finance"),(0,l.kt)("li",{parentName:"ul"},"Entity"),(0,l.kt)("li",{parentName:"ul"},"Reference"),(0,l.kt)("li",{parentName:"ul"},"Data"),(0,l.kt)("li",{parentName:"ul"},"Control"),(0,l.kt)("li",{parentName:"ul"},"Etc  ")),(0,l.kt)("img",{src:"/images/modules/fp/forecast/forecast_06.PNG",width:"800"}),(0,l.kt)("p",null,"You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements."),(0,l.kt)("img",{src:"/images/modules/fp/forecast/forecast_06a.PNG",width:"800"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"All Fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Sequence"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"InputType"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Group"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvInvOrgName")),(0,l.kt)("td",{parentName:"tr",align:null},"Inv Org Name"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvInvOrgCode")),(0,l.kt)("td",{parentName:"tr",align:null},"Inv Org Code"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"20")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"fpForecastHeaderId")),(0,l.kt)("td",{parentName:"tr",align:null},"Fp Forecast Header Id"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"PLANNING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"30")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"srcEntityName")),(0,l.kt)("td",{parentName:"tr",align:null},"Src Entity Name"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"40")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"srcEntityId")),(0,l.kt)("td",{parentName:"tr",align:null},"Src Entity Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"50")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"invOrgId")),(0,l.kt)("td",{parentName:"tr",align:null},"Inv Org Id"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"60")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"forecastName")),(0,l.kt)("td",{parentName:"tr",align:null},"Forecast Name"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"PLANNING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"70")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"description")),(0,l.kt)("td",{parentName:"tr",align:null},"Description"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"80")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"forecastGroupId")),(0,l.kt)("td",{parentName:"tr",align:null},"Forecast Group Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.number"),(0,l.kt)("td",{parentName:"tr",align:null},"PLANNING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"90")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"status")),(0,l.kt)("td",{parentName:"tr",align:null},"Status"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.select"),(0,l.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"100")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"demandClass")),(0,l.kt)("td",{parentName:"tr",align:null},"Demand Class"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"PLANNING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"110")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"arCustomerId")),(0,l.kt)("td",{parentName:"tr",align:null},"Ar Customer Id"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"160")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"docStatus")),(0,l.kt)("td",{parentName:"tr",align:null},"Doc Status"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.select"),(0,l.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5120")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"createdBy")),(0,l.kt)("td",{parentName:"tr",align:null},"Created By"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5130")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"creationDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Creation Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5140")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"lastUpdatedBy")),(0,l.kt)("td",{parentName:"tr",align:null},"Last Updated By"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5150")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"lastUpdateDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Last Update Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE"))))),(0,l.kt)("h2",{id:"line---items"},"Line - Items"),(0,l.kt)("img",{src:"/images/modules/fp/forecast/forecast_07.PNG",width:"800"}),(0,l.kt)("p",null,"You can add multiple items to each forecast header. Item is a unique key within a forecast header, i.e., you can add an item only once in a forecast header. The details of the forecast - date, and quantities - are added to the forecast line details."),(0,l.kt)("img",{src:"/images/modules/fp/forecast/forecast_07a.PNG",width:"300"}),(0,l.kt)("p",null,"Navigate to the Items tab to view/add/update items.",(0,l.kt)("br",{parentName:"p"}),"\n","Click on the add new entity to add a new line. If a line already exists, click on copy entity to copy all the details.\nYou can enable/disable fields allowed to be copied in the menu configuration.  "),(0,l.kt)("img",{src:"/images/modules/fp/forecast/forecast_07b.PNG",width:"800"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Item Number"))," Enter the item number for which you want to create the forecast"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"UOM Code"))," System defaults the item code from the item master"),(0,l.kt)("img",{src:"/images/modules/fp/forecast/forecast_07d.PNG",width:"800"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"No Of Bucket & Bucket Quantity"))," You can add a number of the bucket and default bucket quantity in the forecast line. The system will use the line value to create details. You can later change the values manually."),(0,l.kt)("p",null,"If you import a forecast from a different system, then you can use the average value on bucket quantity."),(0,l.kt)("p",null,"No buckets and bucket quantities are not directly collected in MDS, thus having no direct impact on MRP. These values are only used for creating forecast details."),(0,l.kt)("img",{src:"/images/modules/fp/forecast/forecast_07c.PNG",width:"800"}),(0,l.kt)("p",null,"The reference groups show various ids for reference only. You don't need to enter any information in this section. When you save a forecast for the first time, the system will auto-populate the newly created header id and line ids."),(0,l.kt)("p",null,"Scroll left, right, up, and down view all other fields."),(0,l.kt)("p",null,"Enter all the other fields and click on the save button to save the forecast. The app will post all the data to the server and will show the messages returned from the server."),(0,l.kt)("img",{src:"/images/modules/fp/forecast/forecast_07e.PNG",width:"800"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"All Fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Sequence"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"InputType"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Group"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvItemNumber")),(0,l.kt)("td",{parentName:"tr",align:null},"Item Number"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvItemDescription")),(0,l.kt)("td",{parentName:"tr",align:null},"Item Description"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"20")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvUomCode")),(0,l.kt)("td",{parentName:"tr",align:null},"Uom Code"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"30")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"fpForecastLineId")),(0,l.kt)("td",{parentName:"tr",align:null},"Fp Forecast Line Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.number"),(0,l.kt)("td",{parentName:"tr",align:null},"PLANNING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"40")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"srcEntityName")),(0,l.kt)("td",{parentName:"tr",align:null},"Src Entity Name"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"50")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"srcEntityId")),(0,l.kt)("td",{parentName:"tr",align:null},"Src Entity Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"60")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"fpForecastHeaderId")),(0,l.kt)("td",{parentName:"tr",align:null},"Fp Forecast Header Id"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"PLANNING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"70")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"invItemMasterId")),(0,l.kt)("td",{parentName:"tr",align:null},"Inv Item Master Id"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"80")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"bucketType")),(0,l.kt)("td",{parentName:"tr",align:null},"Bucket Type"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.select"),(0,l.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"90")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"startDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Start Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.date"),(0,l.kt)("td",{parentName:"tr",align:null},"DATE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"100")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"endDate")),(0,l.kt)("td",{parentName:"tr",align:null},"End Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.date"),(0,l.kt)("td",{parentName:"tr",align:null},"DATE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"110")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"noOfBucket")),(0,l.kt)("td",{parentName:"tr",align:null},"No Of Bucket"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.number"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"120")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"bucktQuantity")),(0,l.kt)("td",{parentName:"tr",align:null},"Buckt Quantity"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"DATA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"130")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"totalOriginal")),(0,l.kt)("td",{parentName:"tr",align:null},"Total Original"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"180")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"docStatus")),(0,l.kt)("td",{parentName:"tr",align:null},"Doc Status"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.select"),(0,l.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5140")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"createdBy")),(0,l.kt)("td",{parentName:"tr",align:null},"Created By"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5150")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"creationDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Creation Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5160")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"lastUpdatedBy")),(0,l.kt)("td",{parentName:"tr",align:null},"Last Updated By"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5170")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"lastUpdateDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Last Update Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE"))))),(0,l.kt)("h2",{id:"details---item--dates"},"Details - Item & Dates"),(0,l.kt)("img",{src:"/images/modules/fp/forecast/forecast_08.PNG",width:"800"}),(0,l.kt)("p",null,"You can add multiple forecast details to each forecast line. Each forecast detail represents a specific forecast quantity on a given date for a specific item. The system will automatically add forecast details from the forecast line values if you manually enter forecast lines.\nBy default, no buckets on the forecast line will be the same as no detail lines added to a forecast line. However, the system allows you to add/delete forecast details."),(0,l.kt)("img",{src:"/images/modules/fp/forecast/forecast_08a.PNG",width:"800"}),(0,l.kt)("p",null,'To view a given line\'s forecast details in a table format, click on the popup icon next to the "Fp Forecast Detail" heading.\nThe system will show you all the details on a separate screen. You can also view the details as a list or in a simple data entry form. Click on the corresponding icon to view the data in that specific format.'),(0,l.kt)("img",{src:"/images/modules/fp/forecast/forecast_08f.PNG",width:"800"}),(0,l.kt)("p",null,"Click on the close button to navigate back to the original screen. You can also press the escape button on your keyboard to remove the screen."),(0,l.kt)("img",{src:"/images/modules/fp/forecast/forecast_08g.PNG",width:"900"}),(0,l.kt)("p",null,"Navigate to the forecast details tab to view/add/update forecast details.",(0,l.kt)("br",{parentName:"p"}),"\n","Click on the add new entity to add a new line. If a line already exists, click on copy entity to copy all the details.\nYou can enable/disable fields allowed to be copied in the menu configuration. "),(0,l.kt)("img",{src:"/images/modules/fp/forecast/forecast_08b.PNG",width:"300"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Item Number"))," ViewOnly field. The system shows the item number on the forecast line for reference purposes."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"UOM Code")),"  ViewOnly field. The system shows the UOM code on the forecast line for reference purposes."),(0,l.kt)("img",{src:"/images/modules/fp/forecast/forecast_08e.PNG",width:"800"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Bucket Quantity"),": ViewOnly field. The system shows the bucket quantity on the forecast line for reference purposes."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Quantity"),": The forecast quantity for the forecast date range"),(0,l.kt)("img",{src:"/images/modules/fp/forecast/forecast_08d.PNG",width:"800"}),(0,l.kt)("p",null,"The reference groups show various ids for reference only. You don't need to enter any information in this section. When you save a forecast for the first time, the system will auto-populate the newly created header id and line ids."),(0,l.kt)("p",null,"Scroll left, right, up, and down view all other fields."),(0,l.kt)("p",null,"Enter all the other fields and click on the save button to save the forecast. The app will post all the data to the server and will show the messages returned from the server."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"All Fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Sequence"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"InputType"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Group"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvItemNumber")),(0,l.kt)("td",{parentName:"tr",align:null},"Item Number"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvItemDescription")),(0,l.kt)("td",{parentName:"tr",align:null},"Item Description"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"20")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvUomCode")),(0,l.kt)("td",{parentName:"tr",align:null},"Uom Code"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"30")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvInvItemMasterId")),(0,l.kt)("td",{parentName:"tr",align:null},"Inv Item Master Id"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"40")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvBucketType")),(0,l.kt)("td",{parentName:"tr",align:null},"Bucket Type"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"50")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvStartDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Start Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"DATE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"60")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvEndDate")),(0,l.kt)("td",{parentName:"tr",align:null},"End Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"DATE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"70")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvNoOfBucket")),(0,l.kt)("td",{parentName:"tr",align:null},"No Of Bucket"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"80")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvBucktQuantity")),(0,l.kt)("td",{parentName:"tr",align:null},"Buckt Quantity"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"DATA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"90")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvFpForecastHeaderId")),(0,l.kt)("td",{parentName:"tr",align:null},"Fp Forecast Header Id"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"PLANNING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"100")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"fpForecastDetailId")),(0,l.kt)("td",{parentName:"tr",align:null},"Fp Forecast Detail Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.number"),(0,l.kt)("td",{parentName:"tr",align:null},"PLANNING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"110")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"srcEntityName")),(0,l.kt)("td",{parentName:"tr",align:null},"Src Entity Name"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"120")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"srcEntityId")),(0,l.kt)("td",{parentName:"tr",align:null},"Src Entity Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"130")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"fpForecastLineId")),(0,l.kt)("td",{parentName:"tr",align:null},"Fp Forecast Line Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.number"),(0,l.kt)("td",{parentName:"tr",align:null},"PLANNING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"140")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"forecastDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Forecast Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.date"),(0,l.kt)("td",{parentName:"tr",align:null},"PLANNING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"150")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"quantity")),(0,l.kt)("td",{parentName:"tr",align:null},"Quantity"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"DATA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5160")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"createdBy")),(0,l.kt)("td",{parentName:"tr",align:null},"Created By"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5170")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"creationDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Creation Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5180")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"lastUpdatedBy")),(0,l.kt)("td",{parentName:"tr",align:null},"Last Updated By"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5190")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"lastUpdateDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Last Update Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE"))))),(0,l.kt)("h2",{id:"actions"},"Actions"),(0,l.kt)("p",null,"Actions allow you to change the status of the forecast.\nThe system creates forecasts in draft status. When you are ready to publish the forecast and collect it to an MDS, change the status to Confirmed.\nYou can cancel a forecast by clicking on the Cancel button. Similarly, you can close any forecast by clicking on the Close button."),(0,l.kt)("img",{src:"/images/modules/fp/forecast/forecast_09.PNG",width:"800"}))}k.isMDXComponent=!0}}]);