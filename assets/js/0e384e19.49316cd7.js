"use strict";(self.webpackChunkinoerp=self.webpackChunkinoerp||[]).push([[9671],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),k=l,d=c["".concat(s,".").concat(k)]||c[k]||m[k]||r;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return m},default:function(){return k}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],o={id:"intro",title:"Introduction",sidebar_label:"Introduction"},s=void 0,p={unversionedId:"intro",id:"intro",title:"Introduction",description:"The old PHP version of inoERP is available @ https://github.com/php-inoerp/inoERP",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/inoerp/inoerp.github.io/edit/main/docs/intro.md",tags:[],version:"current",frontMatter:{id:"intro",title:"Introduction",sidebar_label:"Introduction"},sidebar:"mySidebar",next:{title:"Start Server",permalink:"/docs/app/start-server"}},u={},m=[{value:"Modules",id:"modules",level:2},{value:"General Ledger (GL)",id:"general-ledger-gl",level:3},{value:"Accounts Payable(AP)",id:"accounts-payableap",level:3},{value:"Accounts Receivable(AR)",id:"accounts-receivablear",level:3},{value:"Organizations(ORG)",id:"organizationsorg",level:3},{value:"Inventory (INV)",id:"inventory-inv",level:3},{value:"Purchasing (PO)",id:"purchasing-po",level:3},{value:"Sales &amp; Distributions (SD)",id:"sales--distributions-sd",level:3},{value:"Bills Of Material (BOM)",id:"bills-of-material-bom",level:3},{value:"Costing (CST)",id:"costing-cst",level:3},{value:"Work in Process (WIP)",id:"work-in-process-wip",level:3},{value:"Supply Chain Planning (SCP)",id:"supply-chain-planning-scp",level:3},{value:"Human Resource (HR)",id:"human-resource-hr",level:3},{value:"Basic Features",id:"basic-features",level:3},{value:"CMS",id:"cms",level:3},{value:"Dynamic pull System",id:"dynamic-pull-system",level:2}],c={toc:m};function k(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"The old PHP version of inoERP is available @ ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/php-inoerp/inoERP"},"https://github.com/php-inoerp/inoERP")))),(0,r.kt)("p",null,"inoERP is an open source ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.rikdata.com"},"OneApp"))," (Go back-end & Flutter front-end) based enterprise management system. The ERP systems contain all the required modules for running any small to midsize businesses. The features are very similar to Oracle R12/ Cloud Application and SAP ECC/Hana S/4. It also contains a lightweight CMS which seamlessly integrates with the ERP"),(0,r.kt)("h2",{id:"modules"},"Modules"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Below are the fully functional ERP Modules available in inoERP"),(0,r.kt)("h3",{id:"general-ledger-gl"},"General Ledger (GL)"),(0,r.kt)("p",null,"A multi segment chart of account structure to represent all the segments of a business.\nEx : 001-100-1020202-0100-100\nWhere 001 \u2013 Represents a specific company / business unit /legal entity\n100 \u2013 Represents a cost center\n1020202 \u2013 a Natural account such as Asset, Liability, Expense, Income or Owners Equity"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Calendars\nDefine as many different financial calendars as required\nEx : One calendar INO_CORP for Corporate and INO_USA, INO_UK for specific countries"),(0,r.kt)("li",{parentName:"ol"},"Account Combinations"),(0,r.kt)("li",{parentName:"ol"},"Currency & Conversions"),(0,r.kt)("li",{parentName:"ol"},"Ledger :  A set of calendar, currency and accounts"),(0,r.kt)("li",{parentName:"ol"},"Banks"),(0,r.kt)("li",{parentName:"ol"},"Journal ")),(0,r.kt)("h3",{id:"accounts-payableap"},"Accounts Payable(AP)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Suppliers"),(0,r.kt)("li",{parentName:"ol"},"AP Transactions")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2.1\tInvoices"),(0,r.kt)("li",{parentName:"ul"},"2.2\tDebit Memo"),(0,r.kt)("li",{parentName:"ul"},"2.3\tCredit Memo")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"PO/Transaction Matching "),(0,r.kt)("li",{parentName:"ol"},"Multi select matching"),(0,r.kt)("li",{parentName:"ol"},"AP Payments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"5.1\tSingle Invoice Payment"),(0,r.kt)("li",{parentName:"ul"},"5.2\tMulti select Payment")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Transfer Journals to GL")),(0,r.kt)("h3",{id:"accounts-receivablear"},"Accounts Receivable(AR)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Customer"),(0,r.kt)("li",{parentName:"ol"},"AR Transactions")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2.1\tInvoices"),(0,r.kt)("li",{parentName:"ul"},"2.2\tDebit Memo"),(0,r.kt)("li",{parentName:"ul"},"2.3\tCredit Memo"),(0,r.kt)("li",{parentName:"ul"},"2.4\tDeposit"),(0,r.kt)("li",{parentName:"ul"},"2.5\tGuarantee"),(0,r.kt)("li",{parentName:"ul"},"2.6\tCharge Back")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"AR Payments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"3.1\tSingle Invoice Payment"),(0,r.kt)("li",{parentName:"ul"},"3.2\tMulti select Payment")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Transfer Journals to GL")),(0,r.kt)("h3",{id:"organizationsorg"},"Organizations(ORG)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Enterprise Org"),(0,r.kt)("li",{parentName:"ol"},"Legal Org"),(0,r.kt)("li",{parentName:"ol"},"Business Org"),(0,r.kt)("li",{parentName:"ol"},"Inventory Org\n5\tAddress")),(0,r.kt)("h3",{id:"inventory-inv"},"Inventory (INV)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Item Master"),(0,r.kt)("li",{parentName:"ol"},"Unit of Measure"),(0,r.kt)("li",{parentName:"ol"},"Sub inventory"),(0,r.kt)("li",{parentName:"ol"},"Locator"),(0,r.kt)("li",{parentName:"ol"},"Inventory Transactions"),(0,r.kt)("li",{parentName:"ol"},"Material Receipts",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"PO Receipt  "),(0,r.kt)("li",{parentName:"ul"},"IR Receipt  "),(0,r.kt)("li",{parentName:"ul"},"RMA Receipt  "))),(0,r.kt)("li",{parentName:"ol"},"Onhand Value"),(0,r.kt)("li",{parentName:"ol"},"Cycle Count",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Cycle Count Adjustment"),(0,r.kt)("li",{parentName:"ul"},"Cycle Count Approval "))),(0,r.kt)("li",{parentName:"ol"},"ABC Analysis")),(0,r.kt)("h3",{id:"purchasing-po"},"Purchasing (PO)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Purchase Order"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Standard"),(0,r.kt)("li",{parentName:"ul"},"Blanket Agreement"),(0,r.kt)("li",{parentName:"ul"},"Planned PO"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Requisitions"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"External"),(0,r.kt)("li",{parentName:"ul"},"Internal"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"RFQ / Quote")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Approval for PO, Requisition"))),(0,r.kt)("h3",{id:"sales--distributions-sd"},"Sales & Distributions (SD)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Sales Order - Creation & Auto Booking"),(0,r.kt)("li",{parentName:"ol"},"Sales Picking"),(0,r.kt)("li",{parentName:"ol"},"Delivery & Shipment"),(0,r.kt)("li",{parentName:"ol"},"Auto AR Invoice")),(0,r.kt)("h3",{id:"bills-of-material-bom"},"Bills Of Material (BOM)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Departments"),(0,r.kt)("li",{parentName:"ol"},"Resources"),(0,r.kt)("li",{parentName:"ol"},"Routing"),(0,r.kt)("li",{parentName:"ol"},"BOM"),(0,r.kt)("li",{parentName:"ol"},"Super BOM")),(0,r.kt)("h3",{id:"costing-cst"},"Costing (CST)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Material Element"),(0,r.kt)("li",{parentName:"ol"},"Material OH "),(0,r.kt)("li",{parentName:"ol"},"Overhead"),(0,r.kt)("li",{parentName:"ol"},"Resources"),(0,r.kt)("li",{parentName:"ol"},"Standard Cost"),(0,r.kt)("li",{parentName:"ol"},"Cost Roll Up"),(0,r.kt)("li",{parentName:"ol"},"Cost Update")),(0,r.kt)("h3",{id:"work-in-process-wip"},"Work in Process (WIP)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Work Order "),(0,r.kt)("li",{parentName:"ol"},"WIP Move Transactions"),(0,r.kt)("li",{parentName:"ol"},"WIP Resource Transactions"),(0,r.kt)("li",{parentName:"ol"},"WIP Material Transaction"),(0,r.kt)("li",{parentName:"ol"},"WO Completion/Return")),(0,r.kt)("h3",{id:"supply-chain-planning-scp"},"Supply Chain Planning (SCP)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Forecast"),(0,r.kt)("li",{parentName:"ol"},"MDS"),(0,r.kt)("li",{parentName:"ol"},"MRP"),(0,r.kt)("li",{parentName:"ol"},"Min-Max Planning",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Multi Bin Min Max")))),(0,r.kt)("h3",{id:"human-resource-hr"},"Human Resource (HR)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Employee",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Education"),(0,r.kt)("li",{parentName:"ul"},"Experience"),(0,r.kt)("li",{parentName:"ul"},"Planned PO"))),(0,r.kt)("li",{parentName:"ol"},"Job"),(0,r.kt)("li",{parentName:"ol"},"Position"),(0,r.kt)("li",{parentName:"ol"},"Compensation & Payroll"),(0,r.kt)("li",{parentName:"ol"},"Leave System"),(0,r.kt)("li",{parentName:"ol"},"Approval Hierarchy")),(0,r.kt)("h3",{id:"basic-features"},"Basic Features"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"}," Options"),(0,r.kt)("li",{parentName:"ol"}," Value Groups"),(0,r.kt)("li",{parentName:"ol"}," Transaction Types"),(0,r.kt)("li",{parentName:"ol"}," Custom Reporting"),(0,r.kt)("li",{parentName:"ol"}," Search"),(0,r.kt)("li",{parentName:"ol"}," Multi Select"),(0,r.kt)("li",{parentName:"ol"}," Mass Upload\t")),(0,r.kt)("h3",{id:"cms"},"CMS"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"User "),(0,r.kt)("li",{parentName:"ol"},"Blocks"),(0,r.kt)("li",{parentName:"ol"},"Contents ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"3.1\tDocuments"),(0,r.kt)("li",{parentName:"ul"},"3.2\tForums"),(0,r.kt)("li",{parentName:"ul"},"3.3\tIssue Logs"))),(0,r.kt)("li",{parentName:"ol"},"User Roles"),(0,r.kt)("li",{parentName:"ol"},"Role Based Access Control"),(0,r.kt)("li",{parentName:"ol"},"Content Types \u2013 To create custom content types")),(0,r.kt)("h2",{id:"dynamic-pull-system"},"Dynamic pull System"),(0,r.kt)("p",null,"The idea behind inoERP is to provide a dynamic pull-based system where the demand /supply changes frequently and traditional planning systems (such as MRP or Kanban) are incompetent to provide a good inventory turn."),(0,r.kt)("p",null,"Dynamic pull system is an advanced version of pull system which encompasses the best feature of traditional pull system & MRP. The major disadvantage of traditional Kanban system is the fixed Kanban size and requirement of at least 2 bins for full operation. In the event of sudden demand decrease, Kanban system can result in extra inventory and the value of unused inventory can go up to 2 bin size. Similarly, In case of unexpected demand increasing, it can result in line down and the issue will be severe if the lead times are not short."),(0,r.kt)("p",null,"Dynamic pull system overcomes this issue by recalculating the bucket size (Kanban size/lot size) before creating any supply (requisitions/purchase order/work order). Each time a new supply is created, system automatically decides the best supply size as per the existing actual demand."))}k.isMDXComponent=!0}}]);