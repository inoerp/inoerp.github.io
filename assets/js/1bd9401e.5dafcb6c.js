"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3038],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={id:"start-server",title:"Server",sidebar_label:"Server"},i=void 0,l={unversionedId:"app/start-server",id:"app/start-server",title:"Server",description:"This documentation is incomplete.",source:"@site/docs/app/start-server.md",sourceDirName:"app",slug:"/app/start-server",permalink:"/docs/app/start-server",draft:!1,editUrl:"https://github.com/inoerp/inoerp.github.io/edit/main/content/docs/app/start-server.md",tags:[],version:"current",frontMatter:{id:"start-server",title:"Server",sidebar_label:"Server"},sidebar:"mySidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Finance",permalink:"/docs/finance"}},s={},p=[{value:"MySQL",id:"mysql",level:2},{value:"Settings",id:"settings",level:2},{value:"Start/Stop",id:"startstop",level:2},{value:"Client",id:"client",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This documentation is incomplete.")),(0,a.kt)("p",null,"inoERP uses ",(0,a.kt)("a",{parentName:"p",href:"https://go.dev/"},"Go")," for the backend, and the server executables are available for"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Windows"),(0,a.kt)("li",{parentName:"ul"},"Linux"),(0,a.kt)("li",{parentName:"ul"},"macOS")),(0,a.kt)("p",null,"You can download the server for your OS from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/inoerp/inoERP"},"gitHub")),(0,a.kt)("h2",{id:"mysql"},"MySQL"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install MySQL  Ver 8.0.+"),(0,a.kt)("li",{parentName:"ol"},"Change MySQL settings on the config.json file")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n      "dbConnName": "Inoerp",\n      "dbType": "MySQL",\n      "host": "localhost",\n      "portNumber": 3306,\n      "dbName": "inoerp",\n      "userName": "YourDbUserName",\n      "password": "YourDbPassword",\n      "connPoll": 5,\n      "maxConnPoll": 10,\n      "defaultRowLimit": 5\n    }\n\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Import the database")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql -u root -p < /home/files/inoerp.sql\n\n")),(0,a.kt)("p",null,"database file is available @ assets\\db\\mysql folder"),(0,a.kt)("p",null,"The import process will create the required inoerp schema."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE DATABASE  IF NOT EXISTS `inoerp` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;\nUSE `inoerp`;\nSET GLOBAL log_bin_trust_function_creators = 1;\n")),(0,a.kt)("p",null,"Ensure ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"SET GLOBAL log_bin_trust_function_creators = 1;"))),(0,a.kt)("h2",{id:"settings"},"Settings"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Enter server hostname and port on the config.json file")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"application": {\n    "protocol": "http://",\n    "hostName": "104.248.31.179",\n    "portNumber": 8085\n  },\n\n')),(0,a.kt)("p",null,"or below for https"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"application": {\n    "protocol": "https://",\n    "hostName": "localhost",\n    "portNumber": 8085,\n    "certFile": "",\n    "keyFile": ""\n  },\n\n\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Change any other settings on the config.json file as per business requirement")),(0,a.kt)("h2",{id:"startstop"},"Start/Stop"),(0,a.kt)("p",null," You can start the server like any other application. You can stop the server using OneApp Desktop/Mobile client. You can also send a REST request to Your host/stop to stop the application. To send a stop request, you must have admin authority."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," ./oneapp_win.exe\n \n")),(0,a.kt)("p",null,"or in Linux"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nohup ./oneapp_linux &\n \n")),(0,a.kt)("h2",{id:"client"},"Client"),(0,a.kt)("p",null,"Access the application using any client of your choice. The clients are available for"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Windows"),(0,a.kt)("li",{parentName:"ul"},"macOS"),(0,a.kt)("li",{parentName:"ul"},"iOS"),(0,a.kt)("li",{parentName:"ul"},"Linux"),(0,a.kt)("li",{parentName:"ul"},"Web")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.rikdata.com/docs/download"},"Download Client")),(0,a.kt)("p",null,"The console will show you a message stating the host and port when the server starts. Server start should not take more than 10-15 seconds."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Starting server @ localhost:8085\n \n")),(0,a.kt)("p",null,"Open the application in a browser and test that you can login with the default username and password (admin/admin)"),(0,a.kt)("img",{src:"/images/modules/admin/server/server_01.PNG",width:"800"}),(0,a.kt)("p",null,"Click on the sign-in button, and the system will redirect you to the dashboard."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The web client is experimental and doesn't have all functionalities of native clients (Windows/macOS/Andriod/iOS). The performance of the web is also not at the same level as a native client. So, try the application with a native client and use the above URL in your native client.")),(0,a.kt)("img",{src:"/images/modules/admin/server/server_01.PNG",width:"800"}),(0,a.kt)("p",null,"Read how to configure and use\nany client @ ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rikdata.com/docs/quickstart"},"OneApp")))}u.isMDXComponent=!0}}]);