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
-- Table structure for table `fp_mds_line`
--

DROP TABLE IF EXISTS `fp_mds_line`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fp_mds_line` (
  `fp_mds_line_id` int NOT NULL AUTO_INCREMENT,
  `fp_mds_header_id` int DEFAULT NULL,
  `inv_item_master_id` int DEFAULT NULL,
  `demand_date` date DEFAULT NULL,
  `quantity` decimal(20,5) DEFAULT NULL,
  `source_type` varchar(25) DEFAULT NULL,
  `source_header_id` int NOT NULL,
  `source_line_id` int NOT NULL,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`fp_mds_line_id`)
) ENGINE=InnoDB AUTO_INCREMENT=322 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fp_mds_line`
--

LOCK TABLES `fp_mds_line` WRITE;
/*!40000 ALTER TABLE `fp_mds_line` DISABLE KEYS */;
INSERT INTO `fp_mds_line` VALUES (140,1,10043,'2014-07-23',20.00000,'Sales_Order',6,1,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(141,1,10051,'2014-08-26',33.00000,'Sales_Order',6,2,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(142,1,10075,'2014-05-30',12.00000,'Sales_Order',5,5,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(143,1,10061,'2014-09-25',12.00000,'Sales_Order',4,6,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(144,1,10063,'2014-09-25',9.00000,'Sales_Order',4,7,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(145,1,10051,'2014-05-28',99.00000,'Sales_Order',3,8,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(146,1,10047,'2014-05-30',12.00000,'Sales_Order',3,9,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(147,1,10039,'2014-05-26',34.00000,'Sales_Order',3,10,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(148,1,10075,'2014-06-12',100.00000,'Forecast',2,7,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(149,1,10078,'2014-06-12',50.00000,'Forecast',2,8,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(150,1,10075,'2014-05-14',200.00000,'Forecast',2,9,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(151,1,10078,'2014-05-12',200.00000,'Forecast',2,10,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(152,1,10078,'2014-07-16',300.00000,'Forecast',2,11,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(153,1,10075,'2014-05-12',300.00000,'Forecast',2,12,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(154,1,10041,'2014-05-27',200.00000,'Forecast',1,1,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(155,1,10094,'2014-10-22',100.00000,'Forecast',1,2,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(156,1,10075,'2014-07-16',100.00000,'Forecast',1,3,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(161,2,10040,'2015-07-15',10.00000,'Forecast',1,1,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(162,2,10074,'2015-09-08',10.00000,'Forecast',1,3,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(163,2,10092,'2015-10-27',10.00000,'Forecast',1,2,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(164,2,10107,'2015-07-21',10.00000,'Forecast',1,13,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(191,3,10092,'2014-11-03',0.00000,'Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(192,3,10092,'2014-11-10',0.00000,'Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(193,3,10092,'2014-11-17',0.00000,'Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(194,3,10092,'2014-11-24',5.00000,'Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(195,3,10092,'2014-12-01',5.00000,'Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(196,3,10092,'2014-12-08',5.00000,'Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(197,3,10092,'2014-12-15',5.00000,'Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(198,3,10092,'2014-12-22',5.00000,'Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(199,3,10092,'2014-12-29',5.00000,'Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(200,3,10092,'2015-01-05',5.00000,'Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(201,3,10092,'2015-01-12',5.00000,'Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(202,3,10092,'2015-01-19',5.00000,'Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(203,3,10092,'2015-01-26',5.00000,'Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(204,3,10092,'2015-02-02',5.00000,'Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(205,3,10092,'2015-02-09',5.00000,'Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(206,3,10092,'2015-02-16',5.00000,'Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(207,3,10092,'2015-02-23',5.00000,'Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(208,3,10092,'2015-03-02',5.00000,'Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(209,3,10092,'2015-03-09',5.00000,'Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(210,3,10092,'2015-03-16',5.00000,'Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(211,3,10092,'2015-03-23',5.00000,'Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(212,3,10092,'2015-03-30',5.00000,'Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(213,3,10092,'2015-04-06',5.00000,'Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(214,3,10092,'2015-04-13',5.00000,'Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(215,3,10092,'2015-04-20',5.00000,'Forecast',5,16,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(216,3,10135,'2014-11-10',12.00000,'Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(217,3,10135,'2014-11-17',12.00000,'Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(218,3,10135,'2014-11-24',12.00000,'Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(219,3,10135,'2014-12-01',12.00000,'Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(220,3,10135,'2014-12-08',12.00000,'Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(221,3,10135,'2014-12-15',12.00000,'Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(222,3,10135,'2014-12-22',12.00000,'Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(223,3,10135,'2014-12-29',12.00000,'Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(224,3,10135,'2015-01-05',12.00000,'Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(225,3,10135,'2015-01-12',12.00000,'Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(226,3,10135,'2015-01-19',12.00000,'Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(227,3,10135,'2015-01-26',12.00000,'Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(228,3,10135,'2015-02-02',12.00000,'Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(229,3,10135,'2015-02-09',12.00000,'Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(230,3,10135,'2015-02-16',12.00000,'Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(231,3,10135,'2015-02-23',12.00000,'Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(232,3,10135,'2015-03-02',12.00000,'Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(233,3,10135,'2015-03-09',12.00000,'Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(234,3,10135,'2015-03-16',12.00000,'Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(235,3,10135,'2015-03-23',12.00000,'Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(236,3,10135,'2015-03-30',12.00000,'Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(237,3,10135,'2015-04-06',12.00000,'Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(238,3,10135,'2015-04-13',12.00000,'Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(239,3,10135,'2015-04-20',12.00000,'Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(240,3,10135,'2015-04-27',12.00000,'Forecast',5,17,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(295,4,10043,'2014-07-23',20.00000,'Sales_Order',6,1,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(296,4,10051,'2014-08-26',33.00000,'Sales_Order',6,2,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(297,4,10061,'2014-09-25',12.00000,'Sales_Order',4,6,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(298,4,10063,'2014-09-25',9.00000,'Sales_Order',4,7,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(299,4,10051,'2014-05-28',99.00000,'Sales_Order',3,8,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(300,4,10047,'2014-05-30',12.00000,'Sales_Order',3,9,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(301,4,10039,'2014-05-26',34.00000,'Sales_Order',3,10,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(302,4,10094,'2014-06-26',2.00000,'Sales_Order',7,15,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(303,4,10094,'2014-06-18',1.00000,'Sales_Order',11,31,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(304,4,10094,'2014-06-30',12.00000,'Sales_Order',12,38,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(305,4,10092,'2014-07-10',20.00000,'Sales_Order',16,46,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(306,4,10107,'2014-07-10',12.00000,'Sales_Order',17,47,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(307,4,10158,'2015-02-27',3.00000,'Sales_Order',43,77,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(308,4,10095,'2015-02-23',12.00000,'Sales_Order',48,84,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(309,4,10034,'2015-06-06',12.00000,'Sales_Order',75,128,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(310,4,10036,'2015-06-06',11.00000,'Sales_Order',75,129,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(311,4,10038,'2015-06-06',12.00000,'Sales_Order',76,133,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(312,4,10034,'2015-06-29',12.00000,'Sales_Order',89,148,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(313,4,10038,'2015-06-30',11.00000,'Sales_Order',89,149,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(314,4,10036,'2015-06-29',12.00000,'Sales_Order',91,150,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(315,4,10034,'2015-07-17',10.00000,'Sales_Order',97,156,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(316,4,10201,'2015-09-07',5.00000,'Sales_Order',98,157,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(317,4,10137,'2015-09-30',5.00000,'Sales_Order',89,158,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(318,4,10210,'2015-09-12',20.00000,'Sales_Order',109,174,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(319,4,10232,'2015-09-19',10.00000,'Sales_Order',120,187,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(320,4,10197,'2015-09-23',1.00000,'Sales_Order',125,192,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(321,4,10197,'2016-06-01',2.00000,'Sales_Order',127,194,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56');
/*!40000 ALTER TABLE `fp_mds_line` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:47:55
