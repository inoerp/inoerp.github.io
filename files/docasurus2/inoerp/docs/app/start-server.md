---
id: start-server
title: Start Server
sidebar_label: Start Server
---

:::caution

This documentation is incomplete.

:::


inoERP server is created using Go, and the executables are available for
* Windows
* Linux
* macOS

First, download the server for your OS from [gitHub](https://github.com/inoerp/inoERP)

## MySQL

1. Install MySQL  Ver 8.0.+
2. Change MySQL settings on config.json file
````
{
      "dbConnName": "Inoerp",
      "dbType": "MySQL",
      "host": "localhost",
      "portNumber": 3306,
      "dbName": "inoerp",
      "userName": "inoerp",
      "password": "inoerp",
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


## Settings

1. Enter server hostname and port on config.json file
````
"application": {
    "protocol": "http://",
    "hostName": "104.248.31.179",
    "portNumber": 8085
  },

````

2. Change any other settings on the config.json file as per business requirement

## Start/Stop
 You can start the server like any other application. You can stop the server using OneApp Desktop/Mobile client. You can also send a REST request to Your host/stop to stop the application. To send a stop request, you must have admin authority.

````
 ./inoerp
 
````

## Client

Access the application using any client of your choice. The clients are available for
* Windows
* macOS
* iOS
* Linux
* Web

[Download Client](https://docs.rikdata.com/docs/download)

Read the details @ [OneApp](https://docs.rikdata.com/docs/quickstart)