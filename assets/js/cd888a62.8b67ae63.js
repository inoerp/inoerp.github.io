"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57],{3905:function(t,e,a){a.d(e,{Zo:function(){return o},kt:function(){return N}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),k=m(a),N=r,s=k["".concat(d,".").concat(N)]||k[N]||u[N]||l;return a?n.createElement(s,i(i({ref:e},o),{},{components:a})):n.createElement(s,i({ref:e},o))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2766:function(t,e,a){a.r(e),a.d(e,{assets:function(){return o},contentTitle:function(){return d},default:function(){return N},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return u}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i=["components"],p={id:"activity",title:"Activity",sidebar_label:"Activity"},d=void 0,m={unversionedId:"prj/activity",id:"prj/activity",title:"Activity",description:"This documentation is incomplete.",source:"@site/docs/prj/activity.md",sourceDirName:"prj",slug:"/prj/activity",permalink:"/docs/prj/activity",draft:!1,editUrl:"https://github.com/inoerp/inoerp.github.io/edit/main/content/docs/prj/activity.md",tags:[],version:"current",frontMatter:{id:"activity",title:"Activity",sidebar_label:"Activity"},sidebar:"mySidebar",previous:{title:"Task",permalink:"/docs/prj/task"},next:{title:"Material",permalink:"/docs/prj/material"}},o={},u=[{value:"List View",id:"list-view",level:2},{value:"Simple Step View",id:"simple-step-view",level:2},{value:"Tabular View",id:"tabular-view",level:2}],k={toc:u};function N(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This documentation is incomplete.")),(0,l.kt)("p",null,"An activity is a sub-component of a task. It shows a single unit of work and the corresponding required materials and resources to complete that unit of work. Material and Resource requirements and usages are tracked at an activity level. It's a mandatory part of the project and required for the project to be valid. Activities are usually created by the project manager and are assigned to the project team. The project team is responsible for creating and maintaining the activities."),(0,l.kt)("p",null,"Project team members can create activities and assign them to activities. In manufacturing environments, activities are similar to operation steps. Resource and material requirements are assigned and tracked at the activity level. "),(0,l.kt)("p",null,"Team members can track the progress of activities by entering the time and materials used."),(0,l.kt)("img",{src:"/images/modules/prj/activity/activity_01.PNG",width:"800"}),"You can view the activity details in several formats: 1. In a list format 2. In a table format 3. In a simple step format with all the mandatory fields in a single step",(0,l.kt)("h2",{id:"list-view"},"List View"),(0,l.kt)("img",{src:"/images/modules/prj/activity/activity_02.PNG",width:"800"}),(0,l.kt)("p",null,'To create/view/update any project activity, navigate to the "activity "  screen from your dashboard/favorite. Navigate to the Activities tab on the project screen to view/add/update activities associated with an activity of a project. You can also add activities to a project from the activity screen.'),(0,l.kt)("p",null,"Click on any button to view the activity in the corresponding format."),(0,l.kt)("img",{src:"/images/modules/prj/activity/activity_03.PNG",width:"800"}),(0,l.kt)("p",null,"In the project activity tab, click on the add new entity to add a new line. If a line exists, click on copy entity to copy all the details.\nEnter the activity details or other criteria in the search form and click on the search button to view an existing activity."),(0,l.kt)("p",null,"You can enable/disable fields allowed to be copied in the menu configuration.  "),(0,l.kt)("img",{src:"/images/modules/prj/activity/activity_04.PNG",width:"800"}),(0,l.kt)("p",null,"If you click on the create a new button, the system will open a simple step form to create a new activity. You can click on the detail right bottom to view all the fields available for the object. "),(0,l.kt)("img",{src:"/images/modules/prj/activity/activity_05.PNG",width:"800"}),(0,l.kt)("p",null,"To view the search result in a table format, click on the table icon in the bottom left corner."),(0,l.kt)("p",null,"You can also click the expand icon against any label to view all the fields of that label."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Activity  Sequence:")," Enter a numeric value for the activity sequence. The activity sequence is a mandatory field."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Activity  Description:")," Enter a description for the activity. The activity description is an optional field."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Completion Percentage:")," You can use the percentage field to maintain the percentage completion of the activity.\nThe completion percentage is not a mandatory field. However, if you want to generate invoices based on the activity completion percentage, you must maintain percentage completion."),(0,l.kt)("img",{src:"/images/modules/prj/activity/activity_06.PNG",width:"800"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Doc Status"),' Document status is a mandatory field maintained by the system. The system automatically sets the status to "Draft" when creating a new activity. Similarly, the system automatically sets the status to "Completed" when the activity is completed.'),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Org Code")," Project and tasks are created at the business organization level. However, activities are created at the inventory organization level. All the inventory-related transactions are created in the project inventory organization. Thus, enter an org code to assign the activity to the project inventory organization."),(0,l.kt)("p",null,"Scroll left, right, up, and down to view all the details. The document line and details are shown in a separate tab.\nThe default configuration shows fields in various functional groups, such as"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Finance"),(0,l.kt)("li",{parentName:"ul"},"Entity"),(0,l.kt)("li",{parentName:"ul"},"Reference"),(0,l.kt)("li",{parentName:"ul"},"Data"),(0,l.kt)("li",{parentName:"ul"},"Control"),(0,l.kt)("li",{parentName:"ul"},"Etc  ")),(0,l.kt)("p",null,"You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Dates:"),"  You can use the date fields to maintain the start and end dates of the activity."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"All Fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Sequence"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"InputType"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Group"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvOrgCode")),(0,l.kt)("td",{parentName:"tr",align:null},"Org Code"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"ENTITY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvTaskLevel")),(0,l.kt)("td",{parentName:"tr",align:null},"Task Level"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"20")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvTaskName")),(0,l.kt)("td",{parentName:"tr",align:null},"Task Name"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"30")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvTaskNumber")),(0,l.kt)("td",{parentName:"tr",align:null},"Task Number"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DATA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"40")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvProjectName")),(0,l.kt)("td",{parentName:"tr",align:null},"Project Name"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"50")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvProjectNumber")),(0,l.kt)("td",{parentName:"tr",align:null},"Project Number"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DATA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"60")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvBuOrgId")),(0,l.kt)("td",{parentName:"tr",align:null},"Bu Org Id"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"70")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvTaskOwner")),(0,l.kt)("td",{parentName:"tr",align:null},"Task Owner"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"80")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvParentTaskName")),(0,l.kt)("td",{parentName:"tr",align:null},"Parent Task Name"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"90")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvParentTaskNumber")),(0,l.kt)("td",{parentName:"tr",align:null},"Parent Task Number"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DATA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"100")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvParentTaskDescription")),(0,l.kt)("td",{parentName:"tr",align:null},"Parent Task Description"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"110")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvLevel")),(0,l.kt)("td",{parentName:"tr",align:null},"Level"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"120")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvLevelDescription")),(0,l.kt)("td",{parentName:"tr",align:null},"Level Description"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"130")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvLevelName")),(0,l.kt)("td",{parentName:"tr",align:null},"Level Name"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"140")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvLevelUniqueCode")),(0,l.kt)("td",{parentName:"tr",align:null},"Level Unique Code"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"150")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvLevelParentUniqueCode")),(0,l.kt)("td",{parentName:"tr",align:null},"Level Parent Unique Code"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"160")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"vvPrjProjectHeaderId")),(0,l.kt)("td",{parentName:"tr",align:null},"Prj Project Header Id"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"170")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"prjProjectActivityId")),(0,l.kt)("td",{parentName:"tr",align:null},"Prj Project Activity Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"180")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"srcEntityName")),(0,l.kt)("td",{parentName:"tr",align:null},"Src Entity Name"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"190")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"srcEntityId")),(0,l.kt)("td",{parentName:"tr",align:null},"Src Entity Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"200")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"prjProjecTmpTaskId")),(0,l.kt)("td",{parentName:"tr",align:null},"Prj Projec Tmp Task Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"210")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"prjProjectTaskId")),(0,l.kt)("td",{parentName:"tr",align:null},"Prj Project Task Id"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"220")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"activitySequence")),(0,l.kt)("td",{parentName:"tr",align:null},"Activity Sequence"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.number"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"230")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"invOrgId")),(0,l.kt)("td",{parentName:"tr",align:null},"Inv Org Id"),(0,l.kt)("td",{parentName:"tr",align:null},"defferedSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"240")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"standardActivityId")),(0,l.kt)("td",{parentName:"tr",align:null},"Standard Activity Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"250")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"departmentId")),(0,l.kt)("td",{parentName:"tr",align:null},"Department Id"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"260")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"activityDescription")),(0,l.kt)("td",{parentName:"tr",align:null},"Activity Description"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.textField"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"270")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"startDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Start Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.dateTime"),(0,l.kt)("td",{parentName:"tr",align:null},"DATE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"280")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"completionDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Completion Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.dateTime"),(0,l.kt)("td",{parentName:"tr",align:null},"DATE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"290")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"countPointCb")),(0,l.kt)("td",{parentName:"tr",align:null},"Count Point Cb"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.switchField"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"300")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"autoChargeCb")),(0,l.kt)("td",{parentName:"tr",align:null},"Auto Charge Cb"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.switchField"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"310")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"scheduledStartDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Scheduled Start Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.dateTime"),(0,l.kt)("td",{parentName:"tr",align:null},"DATE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"320")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"scheduledCompletionDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Scheduled Completion Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.dateTime"),(0,l.kt)("td",{parentName:"tr",align:null},"DATE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"330")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"minimumTransferQuantity")),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum Transfer Quantity"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.number"),(0,l.kt)("td",{parentName:"tr",align:null},"DATA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"340")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"progressPercentage")),(0,l.kt)("td",{parentName:"tr",align:null},"Progress Percentage"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.number"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"390")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"docStatus")),(0,l.kt)("td",{parentName:"tr",align:null},"Doc Status"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.select"),(0,l.kt)("td",{parentName:"tr",align:null},"CONTROL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5350")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"createdBy")),(0,l.kt)("td",{parentName:"tr",align:null},"Created By"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5360")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"creationDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Creation Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5370")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"lastUpdatedBy")),(0,l.kt)("td",{parentName:"tr",align:null},"Last Updated By"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5380")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"lastUpdateDate")),(0,l.kt)("td",{parentName:"tr",align:null},"Last Update Date"),(0,l.kt)("td",{parentName:"tr",align:null},"InputType.text"),(0,l.kt)("td",{parentName:"tr",align:null},"REFERENCE"))))),(0,l.kt)("h2",{id:"simple-step-view"},"Simple Step View"),(0,l.kt)("img",{src:"/images/modules/prj/activity/activity_07a.PNG",width:"400"}),(0,l.kt)("p",null,"The simple step form shows all the mandatory fields required to create an activity in step form.\nBy default, the application shows only two mandatory fields:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Activity Sequence"),(0,l.kt)("li",{parentName:"ul"},"Org Code")),(0,l.kt)("p",null,"A simple step form is a simple way to create an activity as the user goes through the steps and needs to focus only on one field at a time. The application will show the next field when the user clicks the Next button. However, as per your business requirements, you can make any other field mandatory."),(0,l.kt)("h2",{id:"tabular-view"},"Tabular View"),(0,l.kt)("img",{src:"/images/modules/prj/activity/activity_07b.PNG",width:"800"}),(0,l.kt)("p",null,"The tabular view shows all the activities in a table. The default configuration of the table shows all the fields. However, you can configure the table only to show the fields you want."))}N.isMDXComponent=!0}}]);