-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: inoerp
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `fp_mrp_planned_order`
--

DROP TABLE IF EXISTS `fp_mrp_planned_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fp_mrp_planned_order` (
  `fp_mrp_header_id` int DEFAULT NULL,
  `order_type` varchar(25) DEFAULT NULL,
  `order_action` varchar(25) NOT NULL,
  `inv_item_master_id` int DEFAULT NULL,
  `need_by_date` date DEFAULT NULL,
  `quantity` decimal(20,5) DEFAULT NULL,
  `demand_item_id_m` int DEFAULT NULL,
  `toplevel_demand_item_id_m` int DEFAULT NULL,
  `source_type` varchar(25) NOT NULL,
  `primary_source_type` varchar(25) NOT NULL,
  `source_header_id` int NOT NULL,
  `source_line_id` int NOT NULL,
  `supplier_id` int DEFAULT NULL,
  `supplier_site_id` int DEFAULT NULL,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fp_mrp_planned_order_id` int NOT NULL AUTO_INCREMENT,
  `org_id` int DEFAULT NULL,
  PRIMARY KEY (`fp_mrp_planned_order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=830 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fp_mrp_planned_order`
--

LOCK TABLES `fp_mrp_planned_order` WRITE;
/*!40000 ALTER TABLE `fp_mrp_planned_order` DISABLE KEYS */;
INSERT INTO `fp_mrp_planned_order` VALUES (1,'WO','Release',10061,'2014-09-25',12.00000,10061,10061,'Sales_Order','Sales_Order',4,6,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',678,6),(1,'WO','Release',10039,'2014-05-26',71.00000,10039,10039,'Sales_Order','Sales_Order',3,10,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',679,6),(1,'Requisition','Release',10041,'2014-05-27',204.00000,10041,10041,'Forecast','Forecast',1,1,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',680,6),(1,'WO','Release',10047,'2014-05-30',125.00000,10047,10047,'Sales_Order','Sales_Order',3,9,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',681,6),(1,'WO','Release',10049,'2014-05-21',99.00000,10047,10047,'Dependent','Sales_Order',3,9,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',682,6),(1,'WO','Release',10051,'2014-05-12',99.00000,10049,10047,'Dependent','Sales_Order',3,9,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',683,6),(1,'WO','Release',10051,'2014-05-28',42.00000,10051,10051,'Sales_Order','Sales_Order',3,8,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',684,6),(1,'WO','Release',10051,'2014-08-26',33.00000,10051,10051,'Sales_Order','Sales_Order',6,2,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',685,6),(2,'WO','Release',10074,'2014-09-16',10000.00000,10074,10074,'Forecast','Forecast',1,3,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',703,6),(2,'WO','Release',10095,'2014-09-06',20000.00000,10074,10074,'Dependent','Forecast',1,3,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',704,6),(2,'WO','Release',10092,'2014-08-27',18800.00000,10095,10074,'Dependent','Forecast',1,3,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',705,6),(2,'WO','Release',10092,'2014-10-29',10000.00000,10092,10092,'Forecast','Forecast',1,2,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',706,6),(2,'WO','Release',10054,'2014-09-07',50000.00000,10074,10074,'Dependent','Forecast',1,3,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',707,6),(2,'Requisition','Release',10098,'2014-08-17',37600.00000,10092,10074,'Dependent','Forecast',1,3,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',708,6),(2,'Requisition','Release',10098,'2014-08-27',40000.00000,10095,10074,'Dependent','Forecast',1,3,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',709,6),(2,'Requisition','Release',10098,'2014-10-19',20000.00000,10092,10092,'Dependent','Forecast',1,2,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',710,6),(2,'Requisition','Release',10040,'2014-10-21',10000.00000,10040,10040,'Forecast','Forecast',1,1,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',711,6),(2,'WO','Release',10046,'2014-10-12',9880.00000,10040,10040,'Dependent','Forecast',1,1,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',712,6),(2,'Requisition','Release',10089,'2014-08-17',18800.00000,10092,10074,'Dependent','Forecast',1,3,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',713,6),(2,'Requisition','Release',10089,'2014-10-19',10000.00000,10092,10092,'Dependent','Forecast',1,2,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',714,6),(2,'WO','Release',10107,'2014-07-31',9318.00000,10107,10107,'Forecast','Forecast',1,13,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',715,6),(2,'WO','Release',10107,'2014-09-06',10000.00000,10074,10074,'Dependent','Forecast',1,3,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',716,6),(2,'Requisition','Release',10101,'2014-08-27',20000.00000,10107,10074,'Dependent','Forecast',1,3,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',717,6),(2,'Requisition','Release',10103,'2014-08-27',40000.00000,10107,10074,'Dependent','Forecast',1,3,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',718,6),(2,'Requisition','Release',10105,'2014-08-27',50000.00000,10107,10074,'Dependent','Forecast',1,3,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',719,6),(3,'WO','Release',10135,'2014-11-10',12.00000,10135,10135,'Forecast','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',770,6),(3,'WO','Release',10135,'2014-11-17',12.00000,10135,10135,'Forecast','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',771,6),(3,'WO','Release',10135,'2014-11-24',12.00000,10135,10135,'Forecast','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',772,6),(3,'WO','Release',10135,'2014-12-01',12.00000,10135,10135,'Forecast','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',773,6),(3,'WO','Release',10135,'2014-12-08',12.00000,10135,10135,'Forecast','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',774,6),(3,'WO','Release',10135,'2014-12-15',12.00000,10135,10135,'Forecast','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',775,6),(3,'WO','Release',10135,'2014-12-22',12.00000,10135,10135,'Forecast','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',776,6),(3,'WO','Release',10135,'2014-12-29',12.00000,10135,10135,'Forecast','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',777,6),(3,'WO','Release',10135,'2015-01-05',12.00000,10135,10135,'Forecast','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',778,6),(3,'WO','Release',10135,'2015-01-12',12.00000,10135,10135,'Forecast','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',779,6),(3,'WO','Release',10135,'2015-01-19',12.00000,10135,10135,'Forecast','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',780,6),(3,'WO','Release',10135,'2015-01-26',12.00000,10135,10135,'Forecast','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',781,6),(3,'WO','Release',10135,'2015-02-02',12.00000,10135,10135,'Forecast','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',782,6),(3,'WO','Release',10135,'2015-02-09',12.00000,10135,10135,'Forecast','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',783,6),(3,'WO','Release',10135,'2015-02-16',12.00000,10135,10135,'Forecast','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',784,6),(3,'WO','Release',10135,'2015-02-23',12.00000,10135,10135,'Forecast','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',785,6),(3,'WO','Release',10135,'2015-03-02',12.00000,10135,10135,'Forecast','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',786,6),(3,'WO','Release',10135,'2015-03-09',12.00000,10135,10135,'Forecast','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',787,6),(3,'WO','Release',10135,'2015-03-16',12.00000,10135,10135,'Forecast','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',788,6),(3,'WO','Release',10135,'2015-03-23',12.00000,10135,10135,'Forecast','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',789,6),(3,'WO','Release',10135,'2015-03-30',12.00000,10135,10135,'Forecast','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',790,6),(3,'WO','Release',10135,'2015-04-06',12.00000,10135,10135,'Forecast','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',791,6),(3,'WO','Release',10135,'2015-04-13',12.00000,10135,10135,'Forecast','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',792,6),(3,'WO','Release',10135,'2015-04-20',12.00000,10135,10135,'Forecast','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',793,6),(3,'WO','Release',10135,'2015-04-27',12.00000,10135,10135,'Forecast','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',794,6),(3,'Requisition','Release',10101,'2014-11-07',56.00000,10135,10135,'Dependent','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',795,6),(3,'Requisition','Release',10101,'2014-11-14',60.00000,10135,10135,'Dependent','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',796,6),(3,'Requisition','Release',10101,'2014-11-21',60.00000,10135,10135,'Dependent','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',797,6),(3,'Requisition','Release',10101,'2014-11-28',60.00000,10135,10135,'Dependent','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',798,6),(3,'Requisition','Release',10101,'2014-12-05',60.00000,10135,10135,'Dependent','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',799,6),(3,'Requisition','Release',10101,'2014-12-12',60.00000,10135,10135,'Dependent','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',800,6),(3,'Requisition','Release',10101,'2014-12-19',60.00000,10135,10135,'Dependent','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',801,6),(3,'Requisition','Release',10101,'2014-12-26',60.00000,10135,10135,'Dependent','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',802,6),(3,'Requisition','Release',10101,'2015-01-02',60.00000,10135,10135,'Dependent','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',803,6),(3,'Requisition','Release',10101,'2015-01-09',60.00000,10135,10135,'Dependent','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',804,6),(3,'Requisition','Release',10101,'2015-01-16',60.00000,10135,10135,'Dependent','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',805,6),(3,'Requisition','Release',10101,'2015-01-23',60.00000,10135,10135,'Dependent','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',806,6),(3,'Requisition','Release',10101,'2015-01-30',60.00000,10135,10135,'Dependent','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',807,6),(3,'Requisition','Release',10101,'2015-02-06',60.00000,10135,10135,'Dependent','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',808,6),(3,'Requisition','Release',10101,'2015-02-13',60.00000,10135,10135,'Dependent','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',809,6),(3,'Requisition','Release',10101,'2015-02-20',60.00000,10135,10135,'Dependent','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',810,6),(3,'Requisition','Release',10101,'2015-02-27',60.00000,10135,10135,'Dependent','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',811,6),(3,'Requisition','Release',10101,'2015-03-06',60.00000,10135,10135,'Dependent','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',812,6),(3,'Requisition','Release',10101,'2015-03-13',60.00000,10135,10135,'Dependent','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',813,6),(3,'Requisition','Release',10101,'2015-03-20',60.00000,10135,10135,'Dependent','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',814,6),(3,'Requisition','Release',10101,'2015-03-27',60.00000,10135,10135,'Dependent','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',815,6),(3,'Requisition','Release',10101,'2015-04-03',60.00000,10135,10135,'Dependent','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',816,6),(3,'Requisition','Release',10101,'2015-04-10',60.00000,10135,10135,'Dependent','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',817,6),(3,'Requisition','Release',10101,'2015-04-17',60.00000,10135,10135,'Dependent','Forecast',5,17,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',818,6),(4,'WO','Release',10074,'2015-09-08',10.00000,10074,10074,'Forecast','Forecast',1,3,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',819,6),(4,'WO','Release',10054,'2015-08-30',50.00000,10074,10074,'Dependent','Forecast',1,3,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',820,6),(5,'Converted_Requisition','None',10158,'2015-02-27',3.00000,10158,10158,'Sales_Order','Sales_Order',43,77,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',821,6),(5,'WO','Release',10061,'2014-09-25',12.00000,10061,10061,'Sales_Order','Sales_Order',4,6,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',822,6),(5,'Converted_WO','None',10063,'2014-09-25',9.00000,10063,10063,'Sales_Order','Sales_Order',4,7,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',823,6),(5,'Requisition','Release',10043,'2014-07-23',20.00000,10043,10043,'Sales_Order','Sales_Order',6,1,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',824,6),(5,'WO','Release',10039,'2014-05-26',34.00000,10039,10039,'Sales_Order','Sales_Order',3,10,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',825,6),(5,'WO','Release',10094,'2014-06-18',100.00000,10094,10094,'Sales_Order','Sales_Order',11,31,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',826,6),(5,'WO','Release',10047,'2014-05-30',125.00000,10047,10047,'Sales_Order','Sales_Order',3,9,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',827,6),(5,'WO','Release',10051,'2014-05-28',99.00000,10051,10051,'Sales_Order','Sales_Order',3,8,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',828,6),(5,'WO','Release',10051,'2014-08-26',33.00000,10051,10051,'Sales_Order','Sales_Order',6,2,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56',829,6);
/*!40000 ALTER TABLE `fp_mrp_planned_order` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:48:20