-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: inoERP
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
-- Table structure for table `fp_mrp_demand`
--

DROP TABLE IF EXISTS `fp_mrp_demand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fp_mrp_demand` (
  `fp_mrp_demand_id` int NOT NULL AUTO_INCREMENT,
  `org_id` int NOT NULL,
  `fp_mrp_header_id` int DEFAULT NULL,
  `inv_item_master_id` int DEFAULT NULL,
  `demand_date` date DEFAULT NULL,
  `quantity` decimal(20,5) DEFAULT NULL,
  `demand_item_id_m` int DEFAULT NULL,
  `toplevel_demand_item_id_m` int DEFAULT NULL,
  `source_type` varchar(25) NOT NULL,
  `primary_source_type` varchar(25) NOT NULL,
  `source_header_id` int NOT NULL,
  `source_line_id` int NOT NULL,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`fp_mrp_demand_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2766 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fp_mrp_demand`
--

LOCK TABLES `fp_mrp_demand` WRITE;
/*!40000 ALTER TABLE `fp_mrp_demand` DISABLE KEYS */;
INSERT INTO `fp_mrp_demand` VALUES (2293,6,1,10078,'2014-07-16',300.00000,10078,10078,'Forecast','Forecast',2,11,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2294,6,1,10078,'2014-05-12',200.00000,10078,10078,'Forecast','Forecast',2,10,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2295,6,1,10078,'2014-06-12',50.00000,10078,10078,'Forecast','Forecast',2,8,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2296,6,1,10075,'2014-05-12',300.00000,10075,10075,'Forecast','Forecast',2,12,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2297,6,1,10075,'2014-05-14',200.00000,10075,10075,'Forecast','Forecast',2,9,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2298,6,1,10075,'2014-06-12',100.00000,10075,10075,'Forecast','Forecast',2,7,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2299,6,1,10075,'2014-05-30',12.00000,10075,10075,'Sales_Order','Sales_Order',5,5,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2300,6,1,10075,'2014-07-16',100.00000,10075,10075,'Forecast','Forecast',1,3,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2301,6,1,10063,'2014-09-25',9.00000,10063,10063,'Sales_Order','Sales_Order',4,7,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2302,6,1,10061,'2014-09-25',12.00000,10061,10061,'Sales_Order','Sales_Order',4,6,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2303,6,1,10043,'2014-07-23',20.00000,10043,10043,'Sales_Order','Sales_Order',6,1,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2304,6,1,10094,'2014-10-22',100.00000,10094,10094,'Forecast','Forecast',1,2,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2305,6,1,10039,'2014-05-26',34.00000,10039,10039,'Sales_Order','Sales_Order',3,10,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2306,6,1,10041,'2014-05-27',200.00000,10041,10041,'Forecast','Forecast',1,1,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2307,6,1,10047,'2014-05-18',204.00000,10041,10041,'Dependent','Forecast',1,1,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2308,6,1,10047,'2014-05-30',12.00000,10047,10047,'Sales_Order','Sales_Order',3,9,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2309,6,1,10049,'2014-05-21',125.00000,10047,10047,'Dependent','Sales_Order',3,9,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2310,6,1,10051,'2014-05-12',99.00000,10049,10047,'Dependent','Sales_Order',3,9,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2311,6,1,10051,'2014-05-28',99.00000,10051,10051,'Sales_Order','Sales_Order',3,8,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2312,6,1,10051,'2014-08-26',33.00000,10051,10051,'Sales_Order','Sales_Order',6,2,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2355,6,2,10074,'2014-09-16',10000.00000,10074,10074,'Forecast','Forecast',1,3,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2356,6,2,10054,'2014-09-07',50000.00000,10074,10074,'Dependent','Forecast',1,3,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2357,6,2,10095,'2014-09-06',20000.00000,10074,10074,'Dependent','Forecast',1,3,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2358,6,2,10107,'2014-09-06',10000.00000,10074,10074,'Dependent','Forecast',1,3,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2359,6,2,10092,'2014-08-27',20000.00000,10095,10074,'Dependent','Forecast',1,3,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2360,6,2,10098,'2014-08-27',40000.00000,10095,10074,'Dependent','Forecast',1,3,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2361,6,2,10092,'2014-10-29',10000.00000,10092,10092,'Forecast','Forecast',1,2,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2362,6,2,10089,'2014-08-17',18800.00000,10092,10074,'Dependent','Forecast',1,3,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2363,6,2,10098,'2014-08-17',37600.00000,10092,10074,'Dependent','Forecast',1,3,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2364,6,2,10089,'2014-10-19',10000.00000,10092,10092,'Dependent','Forecast',1,2,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2365,6,2,10098,'2014-10-19',20000.00000,10092,10092,'Dependent','Forecast',1,2,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2366,6,2,10040,'2014-10-21',10000.00000,10040,10040,'Forecast','Forecast',1,1,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2367,6,2,10046,'2014-10-12',10000.00000,10040,10040,'Dependent','Forecast',1,1,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2368,6,2,10048,'2014-07-09',9880.00000,10046,10040,'Dependent','Forecast',1,1,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2369,6,2,10107,'2014-07-31',10000.00000,10107,10107,'Forecast','Forecast',1,13,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2370,6,2,10101,'2014-07-21',18636.00000,10107,10107,'Dependent','Forecast',1,13,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2371,6,2,10103,'2014-07-21',37272.00000,10107,10107,'Dependent','Forecast',1,13,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2372,6,2,10105,'2014-07-21',46590.00000,10107,10107,'Dependent','Forecast',1,13,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2373,6,2,10101,'2014-08-27',20000.00000,10107,10074,'Dependent','Forecast',1,3,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2374,6,2,10103,'2014-08-27',40000.00000,10107,10074,'Dependent','Forecast',1,3,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2375,6,2,10105,'2014-08-27',50000.00000,10107,10074,'Dependent','Forecast',1,3,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2627,6,3,10135,'2014-11-10',12.00000,10135,10135,'Forecast','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2628,6,3,10135,'2014-11-17',12.00000,10135,10135,'Forecast','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2629,6,3,10135,'2014-11-24',12.00000,10135,10135,'Forecast','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2630,6,3,10135,'2014-12-01',12.00000,10135,10135,'Forecast','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2631,6,3,10135,'2014-12-08',12.00000,10135,10135,'Forecast','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2632,6,3,10135,'2014-12-15',12.00000,10135,10135,'Forecast','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2633,6,3,10135,'2014-12-22',12.00000,10135,10135,'Forecast','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2634,6,3,10135,'2014-12-29',12.00000,10135,10135,'Forecast','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2635,6,3,10135,'2015-01-05',12.00000,10135,10135,'Forecast','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2636,6,3,10135,'2015-01-12',12.00000,10135,10135,'Forecast','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2637,6,3,10135,'2015-01-19',12.00000,10135,10135,'Forecast','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2638,6,3,10135,'2015-01-26',12.00000,10135,10135,'Forecast','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2639,6,3,10135,'2015-02-02',12.00000,10135,10135,'Forecast','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2640,6,3,10135,'2015-02-09',12.00000,10135,10135,'Forecast','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2641,6,3,10135,'2015-02-16',12.00000,10135,10135,'Forecast','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2642,6,3,10135,'2015-02-23',12.00000,10135,10135,'Forecast','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2643,6,3,10135,'2015-03-02',12.00000,10135,10135,'Forecast','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2644,6,3,10135,'2015-03-09',12.00000,10135,10135,'Forecast','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2645,6,3,10135,'2015-03-16',12.00000,10135,10135,'Forecast','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2646,6,3,10135,'2015-03-23',12.00000,10135,10135,'Forecast','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2647,6,3,10135,'2015-03-30',12.00000,10135,10135,'Forecast','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2648,6,3,10135,'2015-04-06',12.00000,10135,10135,'Forecast','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2649,6,3,10135,'2015-04-13',12.00000,10135,10135,'Forecast','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2650,6,3,10135,'2015-04-20',12.00000,10135,10135,'Forecast','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2651,6,3,10135,'2015-04-27',12.00000,10135,10135,'Forecast','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2652,6,3,10089,'2014-10-31',144.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2653,6,3,10101,'2014-10-31',60.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2654,6,3,10089,'2014-11-07',144.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2655,6,3,10101,'2014-11-07',60.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2656,6,3,10089,'2014-11-14',144.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2657,6,3,10101,'2014-11-14',60.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2658,6,3,10089,'2014-11-21',144.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2659,6,3,10101,'2014-11-21',60.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2660,6,3,10089,'2014-11-28',144.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2661,6,3,10101,'2014-11-28',60.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2662,6,3,10089,'2014-12-05',144.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2663,6,3,10101,'2014-12-05',60.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2664,6,3,10089,'2014-12-12',144.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2665,6,3,10101,'2014-12-12',60.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2666,6,3,10089,'2014-12-19',144.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2667,6,3,10101,'2014-12-19',60.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2668,6,3,10089,'2014-12-26',144.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2669,6,3,10101,'2014-12-26',60.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2670,6,3,10089,'2015-01-02',144.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2671,6,3,10101,'2015-01-02',60.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2672,6,3,10089,'2015-01-09',144.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2673,6,3,10101,'2015-01-09',60.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2674,6,3,10089,'2015-01-16',144.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2675,6,3,10101,'2015-01-16',60.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2676,6,3,10089,'2015-01-23',144.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2677,6,3,10101,'2015-01-23',60.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2678,6,3,10089,'2015-01-30',144.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2679,6,3,10101,'2015-01-30',60.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2680,6,3,10089,'2015-02-06',144.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2681,6,3,10101,'2015-02-06',60.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2682,6,3,10089,'2015-02-13',144.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2683,6,3,10101,'2015-02-13',60.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2684,6,3,10089,'2015-02-20',144.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2685,6,3,10101,'2015-02-20',60.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2686,6,3,10089,'2015-02-27',144.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2687,6,3,10101,'2015-02-27',60.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2688,6,3,10089,'2015-03-06',144.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2689,6,3,10101,'2015-03-06',60.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2690,6,3,10089,'2015-03-13',144.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2691,6,3,10101,'2015-03-13',60.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2692,6,3,10089,'2015-03-20',144.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2693,6,3,10101,'2015-03-20',60.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2694,6,3,10089,'2015-03-27',144.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2695,6,3,10101,'2015-03-27',60.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2696,6,3,10089,'2015-04-03',144.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2697,6,3,10101,'2015-04-03',60.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2698,6,3,10089,'2015-04-10',144.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2699,6,3,10101,'2015-04-10',60.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2700,6,3,10089,'2015-04-17',144.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2701,6,3,10101,'2015-04-17',60.00000,10135,10135,'Dependent','Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2702,6,3,10092,'2014-11-03',0.00000,10092,10092,'Forecast','Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2703,6,3,10092,'2014-11-10',0.00000,10092,10092,'Forecast','Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2704,6,3,10092,'2014-11-17',0.00000,10092,10092,'Forecast','Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2705,6,3,10092,'2014-11-24',5.00000,10092,10092,'Forecast','Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2706,6,3,10092,'2014-12-01',5.00000,10092,10092,'Forecast','Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2707,6,3,10092,'2014-12-08',5.00000,10092,10092,'Forecast','Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2708,6,3,10092,'2014-12-15',5.00000,10092,10092,'Forecast','Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2709,6,3,10092,'2014-12-22',5.00000,10092,10092,'Forecast','Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2710,6,3,10092,'2014-12-29',5.00000,10092,10092,'Forecast','Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2711,6,3,10092,'2015-01-05',5.00000,10092,10092,'Forecast','Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2712,6,3,10092,'2015-01-12',5.00000,10092,10092,'Forecast','Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2713,6,3,10092,'2015-01-19',5.00000,10092,10092,'Forecast','Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2714,6,3,10092,'2015-01-26',5.00000,10092,10092,'Forecast','Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2715,6,3,10092,'2015-02-02',5.00000,10092,10092,'Forecast','Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2716,6,3,10092,'2015-02-09',5.00000,10092,10092,'Forecast','Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2717,6,3,10092,'2015-02-16',5.00000,10092,10092,'Forecast','Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2718,6,3,10092,'2015-02-23',5.00000,10092,10092,'Forecast','Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2719,6,3,10092,'2015-03-02',5.00000,10092,10092,'Forecast','Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2720,6,3,10092,'2015-03-09',5.00000,10092,10092,'Forecast','Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2721,6,3,10092,'2015-03-16',5.00000,10092,10092,'Forecast','Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2722,6,3,10092,'2015-03-23',5.00000,10092,10092,'Forecast','Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2723,6,3,10092,'2015-03-30',5.00000,10092,10092,'Forecast','Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2724,6,3,10092,'2015-04-06',5.00000,10092,10092,'Forecast','Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2725,6,3,10092,'2015-04-13',5.00000,10092,10092,'Forecast','Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2726,6,3,10092,'2015-04-20',5.00000,10092,10092,'Forecast','Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2731,6,4,10074,'2015-09-08',10.00000,10074,10074,'Forecast','Forecast',1,3,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2732,6,4,10054,'2015-08-30',50.00000,10074,10074,'Dependent','Forecast',1,3,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2733,6,4,10095,'2015-08-29',20.00000,10074,10074,'Dependent','Forecast',1,3,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2734,6,4,10107,'2015-08-29',10.00000,10074,10074,'Dependent','Forecast',1,3,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2735,6,4,10098,'2015-08-29',10.00000,10074,10074,'Dependent','Forecast',1,3,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2736,6,4,10092,'2015-10-27',10.00000,10092,10092,'Forecast','Forecast',1,2,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2737,6,4,10040,'2015-07-15',10.00000,10040,10040,'Forecast','Forecast',1,1,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2738,6,4,10107,'2015-07-21',10.00000,10107,10107,'Forecast','Forecast',1,13,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2743,6,5,10158,'2015-02-27',3.00000,10158,10158,'Sales_Order','Sales_Order',43,77,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2744,6,5,10089,'2015-02-17',15.00000,10158,10158,'Dependent','Sales_Order',43,77,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2745,6,5,10034,'2015-02-17',30.00000,10158,10158,'Dependent','Sales_Order',43,77,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2746,6,5,10095,'2015-02-23',12.00000,10095,10095,'Sales_Order','Sales_Order',48,84,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2747,6,5,10034,'2015-06-06',12.00000,10034,10034,'Sales_Order','Sales_Order',75,128,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2748,6,5,10034,'2015-06-29',12.00000,10034,10034,'Sales_Order','Sales_Order',89,148,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2749,6,5,10034,'2015-07-17',10.00000,10034,10034,'Sales_Order','Sales_Order',97,156,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2750,6,5,10061,'2014-09-25',12.00000,10061,10061,'Sales_Order','Sales_Order',4,6,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2751,6,5,10063,'2014-09-25',9.00000,10063,10063,'Sales_Order','Sales_Order',4,7,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2752,6,5,10043,'2014-07-23',20.00000,10043,10043,'Sales_Order','Sales_Order',6,1,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2753,6,5,10039,'2014-05-26',34.00000,10039,10039,'Sales_Order','Sales_Order',3,10,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2754,6,5,10094,'2014-06-26',2.00000,10094,10094,'Sales_Order','Sales_Order',7,15,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2755,6,5,10094,'2014-06-18',1.00000,10094,10094,'Sales_Order','Sales_Order',11,31,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2756,6,5,10094,'2014-06-30',12.00000,10094,10094,'Sales_Order','Sales_Order',12,38,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2757,6,5,10092,'2014-07-10',20.00000,10092,10092,'Sales_Order','Sales_Order',16,46,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2758,6,5,10038,'2015-06-06',12.00000,10038,10038,'Sales_Order','Sales_Order',76,133,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2759,6,5,10038,'2015-06-30',11.00000,10038,10038,'Sales_Order','Sales_Order',89,149,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2760,6,5,10047,'2014-05-30',12.00000,10047,10047,'Sales_Order','Sales_Order',3,9,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2761,6,5,10051,'2014-08-26',33.00000,10051,10051,'Sales_Order','Sales_Order',6,2,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2762,6,5,10051,'2014-05-28',99.00000,10051,10051,'Sales_Order','Sales_Order',3,8,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2763,6,5,10036,'2015-06-06',11.00000,10036,10036,'Sales_Order','Sales_Order',75,129,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2764,6,5,10036,'2015-06-29',12.00000,10036,10036,'Sales_Order','Sales_Order',91,150,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(2765,6,5,10107,'2014-07-10',12.00000,10107,10107,'Sales_Order','Sales_Order',17,47,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56');
/*!40000 ALTER TABLE `fp_mrp_demand` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:48:16
