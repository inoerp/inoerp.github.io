"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9671],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=l,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9881:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=["components"],o={id:"intro",title:"Introduction",sidebar_label:"Introduction"},s=void 0,p={unversionedId:"intro",id:"intro",title:"Introduction",description:"The old PHP version of inoERP is available @ https://github.com/php-inoerp/inoERP",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/inoerp/inoerp.github.io/edit/main/content/docs/intro.md",tags:[],version:"current",frontMatter:{id:"intro",title:"Introduction",sidebar_label:"Introduction"},sidebar:"mySidebar",next:{title:"Server",permalink:"/docs/app/start-server"}},u={},c=[{value:"Modules",id:"modules",level:2},{value:"General Ledger (GL)",id:"general-ledger-gl",level:3},{value:"Accounts Payable(AP)",id:"accounts-payableap",level:3},{value:"Accounts Receivable(AR)",id:"accounts-receivablear",level:3},{value:"Fixed Asset Accounting(FA)",id:"fixed-asset-accountingfa",level:3},{value:"Organizations(ORG)",id:"organizationsorg",level:3},{value:"Inventory (INV)",id:"inventory-inv",level:3},{value:"Purchasing (PO)",id:"purchasing-po",level:3},{value:"Sales &amp; Distributions (SD)",id:"sales--distributions-sd",level:3},{value:"Bills Of Material (BOM)",id:"bills-of-material-bom",level:3},{value:"Costing (CST)",id:"costing-cst",level:3},{value:"Work in Process (WIP)",id:"work-in-process-wip",level:3},{value:"Supply Chain Planning (SCP)",id:"supply-chain-planning-scp",level:3},{value:"Human Resource (HR)",id:"human-resource-hr",level:3},{value:"Basic Features",id:"basic-features",level:3},{value:"Admin",id:"admin",level:3},{value:"Modules Under Development",id:"modules-under-development",level:2},{value:"Dynamic pull System",id:"dynamic-pull-system",level:2}],m={toc:c};function d(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"The old PHP version of inoERP is available @ ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/php-inoerp/inoERP"},"https://github.com/php-inoerp/inoERP")))),(0,r.kt)("p",null,"inoERP is an  ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.rikdata.com"},"OneApp"))," (Go back-end & Flutter front-end) based enterprise management system. The ERP systems contain all the required modules for running small to midsize businesses. The features are similar to Oracle R12/ Cloud Application and SAP ECC/Hana S/4. "),(0,r.kt)("p",null,"The application uses MySQL database and OneApp JavaScript APIs to create business logic. All the database and javascript codes are available on GitHub."),(0,r.kt)("p",null,"The client is available for Andriod, iOS, macOS, Windows, and Web."),(0,r.kt)("p",null,"The server is available for Windows, macOS, and Linux."),(0,r.kt)("h2",{id:"modules"},"Modules"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Below are the fully functional ERP Modules available in inoERP"),(0,r.kt)("h3",{id:"general-ledger-gl"},"General Ledger (GL)"),(0,r.kt)("p",null,"Chart of Accounts\ninoERP allows a multi-segment accounting structure that you can use to represent all segments of a business transaction.\nEx : 001-100-1020202-0100-100\nWhere 001 \u2013 Represents a specific company/business unit /legal entity\n100 \u2013 Represents a cost center\n1020202 \u2013 a Natural account such as Asset, Liability, Expense, Income, or Owners Equity"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Calendars\nDefine as many different financial calendars as required\nEx: One calendar INO_CORP for Corporate and INO_USA, INO_UK for specific countries"),(0,r.kt)("li",{parentName:"ol"},"Account Combinations"),(0,r.kt)("li",{parentName:"ol"},"Currency & Conversions"),(0,r.kt)("li",{parentName:"ol"},"Ledger:  A set of a calendar, currency, and chart of accounts"),(0,r.kt)("li",{parentName:"ol"},"Banks"),(0,r.kt)("li",{parentName:"ol"},"Journal ")),(0,r.kt)("h3",{id:"accounts-payableap"},"Accounts Payable(AP)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Suppliers"),(0,r.kt)("li",{parentName:"ol"},"AP Transactions")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2.1 Invoices"),(0,r.kt)("li",{parentName:"ul"},"2.2 Debit Memo"),(0,r.kt)("li",{parentName:"ul"},"2.3 Credit Memo")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"PO/Transaction Matching "),(0,r.kt)("li",{parentName:"ol"},"Multi select matching"),(0,r.kt)("li",{parentName:"ol"},"AP Payments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"5.1 Single Invoice Payment"),(0,r.kt)("li",{parentName:"ul"},"5.2 Multi select Payment")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Transfer Journals to GL")),(0,r.kt)("h3",{id:"accounts-receivablear"},"Accounts Receivable(AR)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Customer"),(0,r.kt)("li",{parentName:"ol"},"AR Transactions")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2.1 Invoices"),(0,r.kt)("li",{parentName:"ul"},"2.2 Debit Memo"),(0,r.kt)("li",{parentName:"ul"},"2.3 Credit Memo"),(0,r.kt)("li",{parentName:"ul"},"2.4 Deposit"),(0,r.kt)("li",{parentName:"ul"},"2.5 Guarantee"),(0,r.kt)("li",{parentName:"ul"},"2.6 Charge Back")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"AR Payments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"3.1 Single Invoice Payment"),(0,r.kt)("li",{parentName:"ul"},"3.2 Multi select Payment")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Transfer Journals to GL")),(0,r.kt)("h3",{id:"fixed-asset-accountingfa"},"Fixed Asset Accounting(FA)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Asset"),(0,r.kt)("li",{parentName:"ol"},"Depreciation"),(0,r.kt)("li",{parentName:"ol"},"Transactions"),(0,r.kt)("li",{parentName:"ol"},"Configuration")),(0,r.kt)("h3",{id:"organizationsorg"},"Organizations(ORG)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Enterprise Org"),(0,r.kt)("li",{parentName:"ol"},"Legal Org"),(0,r.kt)("li",{parentName:"ol"},"Business Org"),(0,r.kt)("li",{parentName:"ol"},"Inventory Org\n5   Address")),(0,r.kt)("h3",{id:"inventory-inv"},"Inventory (INV)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Item Master"),(0,r.kt)("li",{parentName:"ol"},"Unit of Measure"),(0,r.kt)("li",{parentName:"ol"},"Sub inventory"),(0,r.kt)("li",{parentName:"ol"},"Locator"),(0,r.kt)("li",{parentName:"ol"},"Inventory Transactions"),(0,r.kt)("li",{parentName:"ol"},"Material Receipts",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"PO Receipt  "),(0,r.kt)("li",{parentName:"ul"},"IR Receipt  "),(0,r.kt)("li",{parentName:"ul"},"RMA Receipt  "))),(0,r.kt)("li",{parentName:"ol"},"Onhand Value"),(0,r.kt)("li",{parentName:"ol"},"Cycle Count",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Cycle Count Adjustment"),(0,r.kt)("li",{parentName:"ul"},"Cycle Count Approval "))),(0,r.kt)("li",{parentName:"ol"},"ABC Analysis")),(0,r.kt)("h3",{id:"purchasing-po"},"Purchasing (PO)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Purchase Order"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Standard"),(0,r.kt)("li",{parentName:"ul"},"Blanket Agreement"),(0,r.kt)("li",{parentName:"ul"},"Planned PO"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Requisitions"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"External"),(0,r.kt)("li",{parentName:"ul"},"Internal"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"RFQ / Quote")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Approval for PO, Requisition"))),(0,r.kt)("h3",{id:"sales--distributions-sd"},"Sales & Distributions (SD)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Sales Order - Creation & Auto Booking"),(0,r.kt)("li",{parentName:"ol"},"Sales Picking"),(0,r.kt)("li",{parentName:"ol"},"Delivery & Shipment"),(0,r.kt)("li",{parentName:"ol"},"Auto AR Invoice")),(0,r.kt)("h3",{id:"bills-of-material-bom"},"Bills Of Material (BOM)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Departments"),(0,r.kt)("li",{parentName:"ol"},"Resources"),(0,r.kt)("li",{parentName:"ol"},"Routing"),(0,r.kt)("li",{parentName:"ol"},"BOM"),(0,r.kt)("li",{parentName:"ol"},"Super BOM")),(0,r.kt)("h3",{id:"costing-cst"},"Costing (CST)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Material Element"),(0,r.kt)("li",{parentName:"ol"},"Material OH "),(0,r.kt)("li",{parentName:"ol"},"Overhead"),(0,r.kt)("li",{parentName:"ol"},"Resources"),(0,r.kt)("li",{parentName:"ol"},"Standard Cost"),(0,r.kt)("li",{parentName:"ol"},"Cost Roll Up"),(0,r.kt)("li",{parentName:"ol"},"Cost Update")),(0,r.kt)("h3",{id:"work-in-process-wip"},"Work in Process (WIP)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Work Order "),(0,r.kt)("li",{parentName:"ol"},"WIP Move Transactions"),(0,r.kt)("li",{parentName:"ol"},"WIP Resource Transactions"),(0,r.kt)("li",{parentName:"ol"},"WIP Material Transaction"),(0,r.kt)("li",{parentName:"ol"},"WO Completion/Return")),(0,r.kt)("h3",{id:"supply-chain-planning-scp"},"Supply Chain Planning (SCP)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Forecast"),(0,r.kt)("li",{parentName:"ol"},"MDS"),(0,r.kt)("li",{parentName:"ol"},"MRP"),(0,r.kt)("li",{parentName:"ol"},"Min-Max Planning",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Multi Bin Min Max")))),(0,r.kt)("h3",{id:"human-resource-hr"},"Human Resource (HR)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Employee",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Education"),(0,r.kt)("li",{parentName:"ul"},"Experience"),(0,r.kt)("li",{parentName:"ul"},"Planned PO"))),(0,r.kt)("li",{parentName:"ol"},"Job"),(0,r.kt)("li",{parentName:"ol"},"Position"),(0,r.kt)("li",{parentName:"ol"},"Compensation & Payroll"),(0,r.kt)("li",{parentName:"ol"},"Leave System"),(0,r.kt)("li",{parentName:"ol"},"Approval Hierarchy")),(0,r.kt)("h3",{id:"basic-features"},"Basic Features"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Options"),(0,r.kt)("li",{parentName:"ol"},"Value Groups"),(0,r.kt)("li",{parentName:"ol"},"Transaction Types"),(0,r.kt)("li",{parentName:"ol"},"Custom Reporting"),(0,r.kt)("li",{parentName:"ol"},"Search"),(0,r.kt)("li",{parentName:"ol"},"Multi Select"),(0,r.kt)("li",{parentName:"ol"},"Mass Upload    ")),(0,r.kt)("h3",{id:"admin"},"Admin"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"User "),(0,r.kt)("li",{parentName:"ol"},"Roles and Role Base Access Control"),(0,r.kt)("li",{parentName:"ol"},"Notification"),(0,r.kt)("li",{parentName:"ol"},"Document Approval")),(0,r.kt)("h2",{id:"modules-under-development"},"Modules Under Development"),(0,r.kt)("hr",null),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Project System"),(0,r.kt)("li",{parentName:"ol"},"Asset Maintenance"),(0,r.kt)("li",{parentName:"ol"},"HelpDesk")),(0,r.kt)("h2",{id:"dynamic-pull-system"},"Dynamic pull System"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The idea behind inoERP is to provide a dynamic pull-based system where the demand /supply changes frequently and traditional planning systems (such as MRP or Kanban) are incompetent to provide a good inventory turn."),(0,r.kt)("p",null,"A dynamic pull system is an advanced version of a pull system that encompasses the best feature of the traditional pull system & MRP. The major disadvantage of the conventional Kanban system is the fixed Kanban size and requirement of at least two bins for the entire operation. In a sudden demand decrease, the Kanban system can result in extra inventory, and the value of unused inventory can go up to 2 bin size. Similarly, In case of unexpected demand increases can result in a line down, and the issue will be severe if the lead times are not short."),(0,r.kt)("p",null,"The dynamic pull system overcomes this issue by recalculating the bucket size (Kanban size/lot size) before creating any supply (requisitions/purchase order/work order). Each time a new supply is created, the system automatically decides the best supply size per the actual demand."))}d.isMDXComponent=!0}}]);