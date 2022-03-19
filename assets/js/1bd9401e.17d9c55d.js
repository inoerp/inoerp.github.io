"use strict";(self.webpackChunkinoerp=self.webpackChunkinoerp||[]).push([[3038],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5491:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={id:"start-server",title:"Start Server",sidebar_label:"Start Server"},p=void 0,s={unversionedId:"app/start-server",id:"app/start-server",title:"Start Server",description:"This documentation is incomplete.",source:"@site/docs/app/start-server.md",sourceDirName:"app",slug:"/app/start-server",permalink:"/docs/app/start-server",editUrl:"https://github.com/inoerp/inoerp.github.io/edit/main/docs/app/start-server.md",tags:[],version:"current",frontMatter:{id:"start-server",title:"Start Server",sidebar_label:"Start Server"},sidebar:"mySidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Master Data",permalink:"/docs/inv/master-data"}},c={},u=[{value:"MySQL",id:"mysql",level:2},{value:"Settings",id:"settings",level:2},{value:"Start/Stop",id:"startstop",level:2},{value:"Client",id:"client",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This documentation is incomplete."))),(0,o.kt)("p",null,"inoERP server is created using Go, and the executables are available for"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows"),(0,o.kt)("li",{parentName:"ul"},"Linux"),(0,o.kt)("li",{parentName:"ul"},"macOS")),(0,o.kt)("p",null,"First, download the server for your OS from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/inoerp/inoERP"},"gitHub")),(0,o.kt)("h2",{id:"mysql"},"MySQL"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install MySQL  Ver 8.0.+"),(0,o.kt)("li",{parentName:"ol"},"Change MySQL settings on config.json file")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n      "dbConnName": "Inoerp",\n      "dbType": "MySQL",\n      "host": "localhost",\n      "portNumber": 3306,\n      "dbName": "inoerp",\n      "userName": "inoerp",\n      "password": "inoerp",\n      "connPoll": 5,\n      "maxConnPoll": 10,\n      "defaultRowLimit": 5\n    }\n\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Import the database")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql -u root -p < /home/files/inoerp.sql\n\n")),(0,o.kt)("p",null,"database file is available @ assets\\db\\mysql folder"),(0,o.kt)("p",null,"The import process will create the required inoerp schema."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CREATE DATABASE  IF NOT EXISTS `inoerp` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;\nUSE `inoerp`;\nSET GLOBAL log_bin_trust_function_creators = 1;\n")),(0,o.kt)("h2",{id:"settings"},"Settings"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Enter server hostname and port on config.json file")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"application": {\n    "protocol": "http://",\n    "hostName": "104.248.31.179",\n    "portNumber": 8085\n  },\n\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Change any other settings on the config.json file as per business requirement")),(0,o.kt)("h2",{id:"startstop"},"Start/Stop"),(0,o.kt)("p",null," You can start the server like any other application. You can stop the server using OneApp Desktop/Mobile client. You can also send a REST request to Your host/stop to stop the application. To send a stop request, you must have admin authority."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," ./inoerp\n \n")),(0,o.kt)("h2",{id:"client"},"Client"),(0,o.kt)("p",null,"Access the application using any client of your choice. The clients are available for"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows"),(0,o.kt)("li",{parentName:"ul"},"macOS"),(0,o.kt)("li",{parentName:"ul"},"iOS"),(0,o.kt)("li",{parentName:"ul"},"Linux"),(0,o.kt)("li",{parentName:"ul"},"Web")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.rikdata.com/docs/download"},"Download Client")),(0,o.kt)("p",null,"Read the details @ ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rikdata.com/docs/quickstart"},"OneApp")))}d.isMDXComponent=!0}}]);