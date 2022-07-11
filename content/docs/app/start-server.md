---
id: start-server
title: Server
sidebar_label: Server
---

:::caution

This documentation is incomplete.

:::


inoERP uses [Go](https://go.dev/) for the backend, and the server executables are available for
* Windows
* Linux
* macOS

You can download the server for your OS from [gitHub](https://github.com/inoerp/inoERP)

## MySQL

1. Install MySQL  Ver 8.0.+
2. Change MySQL settings on the config.json file
````
{
      "dbConnName": "Inoerp",
      "dbType": "MySQL",
      "host": "localhost",
      "portNumber": 3306,
      "dbName": "inoerp",
      "userName": "YourDbUserName",
      "password": "YourDbPassword",
      "connPoll": 5,
      "maxConnPoll": 10,
      "defaultRowLimit": 5
    }

````
3. Import the database

````
mysql -u root -p < /home/files/inoerp.sql

````

database file is available @ assets\db\mysql folder

The import process will create the required inoerp schema.


````
CREATE DATABASE  IF NOT EXISTS `inoerp` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `inoerp`;
SET GLOBAL log_bin_trust_function_creators = 1;
````

Ensure ***SET GLOBAL log_bin_trust_function_creators = 1;***

## Settings

1. Enter server hostname and port on the config.json file
````
"application": {
    "protocol": "http://",
    "hostName": "104.248.31.179",
    "portNumber": 8085
  },

````

or below for https

````
"application": {
    "protocol": "https://",
    "hostName": "localhost",
    "portNumber": 8085,
    "certFile": "",
    "keyFile": ""
  },


````

2. Change any other settings on the config.json file as per business requirement

## Start/Stop
 You can start the server like any other application. You can stop the server using OneApp Desktop/Mobile client. You can also send a REST request to Your host/stop to stop the application. To send a stop request, you must have admin authority.

````
 ./oneapp_win.exe
 
````

or in Linux

````
nohup ./oneapp_linux &
 
````


## Client

Access the application using any client of your choice. The clients are available for
* Windows
* macOS
* iOS
* Linux
* Web

[Download Client](https://docs.rikdata.com/docs/download)

The console will show you a message stating the host and port when the server starts. Server start should not take more than 10-15 seconds.

````
Starting server @ localhost:8085
 
````

Open the application in a browser and test that you can login with the default username and password (admin/admin)

<img src="/images/modules/admin/server/server_01.PNG" width="800"/>

Click on the sign-in button, and the system will redirect you to the dashboard.


:::caution

The web client is experimental and doesn't have all functionalities of native clients (Windows/macOS/Andriod/iOS). The performance of the web is also not at the same level as a native client. So, try the application with a native client and use the above URL in your native client.

:::

<img src="/images/modules/admin/server/server_01.PNG" width="800"/>



Read how to configure and use 
any client @ [OneApp](https://docs.rikdata.com/docs/quickstart)