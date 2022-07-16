"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2246],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),g=o(n),c=r,k=g["".concat(p,".").concat(c)]||g[c]||u[c]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8637:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return d},metadata:function(){return o},toc:function(){return u}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=["components"],d={id:"ledger",title:"Ledger",sidebar_label:"Ledger"},p=void 0,o={unversionedId:"gl/ledger",id:"gl/ledger",title:"Ledger",description:"This documentation is incomplete.",source:"@site/docs/gl/ledger.md",sourceDirName:"gl",slug:"/gl/ledger",permalink:"/docs/gl/ledger",draft:!1,editUrl:"https://github.com/inoerp/inoerp.github.io/edit/main/content/docs/gl/ledger.md",tags:[],version:"current",frontMatter:{id:"ledger",title:"Ledger",sidebar_label:"Ledger"},sidebar:"mySidebar",previous:{title:"Currency",permalink:"/docs/gl/currency"},next:{title:"Accounting",permalink:"/docs/gl/accounting"}},m={},u=[],g={toc:u};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This documentation is incomplete.")),(0,l.kt)("img",{src:"/images/modules/gl/ledger/gl_ledger_01.PNG",width:"350"}),(0,l.kt)("p",null,"A ledger is an object that classifies and stores all financial transactions in a legal entity. All journals in a legal entity are created with reference to a ledger. Ledgers have mainly three primary components"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Chart of Account")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Calendar")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Currency"),"  ")),(0,l.kt)("p",null,"In combination with ",(0,l.kt)("strong",{parentName:"p"},"Accounting Profile")," and ",(0,l.kt)("strong",{parentName:"p"},"Journal Profile"),", the ledger controls how and when journals are created for an operational transaction."),(0,l.kt)("p",null,'To create/view/update a ledger, navigate to the "ledger"  screen from your dashboard/favorite.'),(0,l.kt)("p",null,"Enter the organization/ledger details or any other criteria in the search form and click on the search button to view an existing ledger.  "),(0,l.kt)("img",{src:"/images/modules/gl/ledger/gl_ledger_02.PNG",width:"800"}),(0,l.kt)("p",null,"If you don't enter organization details, the system will show you all the ledgers. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search ledgers.",(0,l.kt)("br",{parentName:"p"}),"\n","The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices."),(0,l.kt)("p",null,"If you click on the create new button, the system will open a simple step form to create a new ledger. You can click on the detail right bottom to view all the fields available for the object. "),(0,l.kt)("img",{src:"/images/modules/gl/ledger/gl_ledger_03.PNG",width:"350"}),(0,l.kt)("p",null,"To view the search result in a table format, click on the table icon in the bottom left corner."),(0,l.kt)("p",null,"To view specific ledger details, click on the menu of that record, and click on view/fetch & view."),(0,l.kt)("img",{src:"/images/modules/gl/ledger/gl_ledger_04a.PNG",width:"350"}),(0,l.kt)("p",null,"You can also click on the expand icon against any item on the search result screen to view the ledger header details, such as ledger name, balancing segment, etc."),(0,l.kt)("img",{src:"/images/modules/gl/ledger/gl_ledger_04.PNG",width:"800"}),(0,l.kt)("p",null,"The system will fetch all the selected ledger data. Depending on the device size, the cost details are shown either right to the search result screen or on a separate screen."),(0,l.kt)("img",{src:"/images/modules/gl/ledger/gl_ledger_05.PNG",width:"800"}),(0,l.kt)("p",null,"Scroll left, right, up, down to view all the details. The document line and details are shown in a separate tab..\nThe default configuration shows fields in various functional groups such as"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Finance"),(0,l.kt)("li",{parentName:"ul"},"Entity"),(0,l.kt)("li",{parentName:"ul"},"Reference"),(0,l.kt)("li",{parentName:"ul"},"Data"),(0,l.kt)("li",{parentName:"ul"},"Control"),(0,l.kt)("li",{parentName:"ul"},"Etc  ")),(0,l.kt)("p",null,"You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements."),(0,l.kt)("img",{src:"/images/modules/gl/ledger/gl_ledger_06.PNG",width:"800"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"All Fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Sequence"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"InputType"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Group"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"glLedgerId")),(0,l.kt)("td",{parentName:"tr",align:null},"Gl Ledger Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"srcEntityName")),(0,l.kt)("td",{parentName:"tr",align:null},"Src Entity Name"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"20")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"srcEntityId")),(0,l.kt)("td",{parentName:"tr",align:null},"Src Entity Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"30")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"ledger")),(0,l.kt)("td",{parentName:"tr",align:null},"Ledger"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"FINANCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"40")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"glCoaId")),(0,l.kt)("td",{parentName:"tr",align:null},"Gl Coa Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"50")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"description")),(0,l.kt)("td",{parentName:"tr",align:null},"Description"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"60")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"glCalendarHeaderId")),(0,l.kt)("td",{parentName:"tr",align:null},"Gl Calendar Header Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"70")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"currencyCode")),(0,l.kt)("td",{parentName:"tr",align:null},"Currency Code"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"FINANCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"80")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"calendarOptionLineCode")),(0,l.kt)("td",{parentName:"tr",align:null},"Calendar Option Line Code"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"90")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"futureEnabledPeriods")),(0,l.kt)("td",{parentName:"tr",align:null},"Future Enabled Periods"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.number"),(0,l.kt)("td",{parentName:"tr",align:null},"FINANCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"100")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"currencyBalancingAcId")),(0,l.kt)("td",{parentName:"tr",align:null},"Currency Balancing Ac Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"110")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"retainedEarningsAcId")),(0,l.kt)("td",{parentName:"tr",align:null},"Retained Earnings Ac Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"120")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"suspenseAcId")),(0,l.kt)("td",{parentName:"tr",align:null},"Suspense Ac Id"),(0,l.kt)("td",{parentName:"tr",align:null},"deferredSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"130")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"revEnabled")),(0,l.kt)("td",{parentName:"tr",align:null},"Rev Enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.checkBox"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"140")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"revNumber")),(0,l.kt)("td",{parentName:"tr",align:null},"Rev Number"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.number"),(0,l.kt)("td",{parentName:"tr",align:null},"DATA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5150")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"createdBy")),(0,l.kt)("td",{parentName:"tr",align:null},"Created By"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5160")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"creationDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Creation Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5170")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"lastUpdatedBy")),(0,l.kt)("td",{parentName:"tr",align:null},"Last Updated By"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5180")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"lastUpdateDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Last Update Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE"))))))}c.isMDXComponent=!0}}]);