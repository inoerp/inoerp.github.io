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
-- Table structure for table `mdm_price_list_line`
--

DROP TABLE IF EXISTS `mdm_price_list_line`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mdm_price_list_line` (
  `mdm_price_list_line_id` int NOT NULL AUTO_INCREMENT,
  `mdm_price_list_header_id` int NOT NULL,
  `line_type` varchar(25) NOT NULL,
  `org_id` int DEFAULT NULL,
  `inv_item_master_id` int DEFAULT NULL,
  `uom_id` int DEFAULT NULL,
  `unit_price` int DEFAULT NULL,
  `formula` text,
  `effective_start_date` date NOT NULL,
  `effective_end_date` date DEFAULT NULL,
  `use_price_break_cb` tinyint(1) DEFAULT NULL,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`mdm_price_list_line_id`),
  UNIQUE KEY `mdm_price_list_header_id` (`mdm_price_list_header_id`,`org_id`,`inv_item_master_id`,`effective_start_date`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdm_price_list_line`
--

LOCK TABLES `mdm_price_list_line` WRITE;
/*!40000 ALTER TABLE `mdm_price_list_line` DISABLE KEYS */;
INSERT INTO `mdm_price_list_line` VALUES (1,1,'ITEM',6,10113,27,30,NULL,'2014-01-01',NULL,NULL,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11'),(2,1,'ITEM',6,10107,27,30,NULL,'2010-01-01',NULL,NULL,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11'),(3,1,'DEFAULT',6,NULL,NULL,NULL,NULL,'2014-06-30',NULL,NULL,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11'),(4,1,'ITEM',7,10113,27,66,NULL,'2014-06-01',NULL,NULL,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11'),(5,1,'ITEM',NULL,10092,27,12,NULL,'2004-08-01',NULL,NULL,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11'),(6,1,'ITEM',NULL,10074,27,121,NULL,'2010-01-01',NULL,NULL,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11'),(7,1,'ITEM',NULL,10095,27,111,NULL,'2004-08-01',NULL,NULL,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11'),(8,2,'ITEM',7,10113,27,66,NULL,'2014-06-01',NULL,NULL,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11'),(9,2,'ITEM',NULL,10092,27,12,NULL,'2004-08-01',NULL,NULL,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11'),(10,2,'ITEM',6,10107,27,30,NULL,'2010-01-01',NULL,NULL,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11'),(11,2,'DEFAULT',6,NULL,NULL,NULL,NULL,'2014-06-30',NULL,NULL,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11'),(12,2,'ITEM',6,10113,27,13,NULL,'2014-01-01',NULL,NULL,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11'),(13,2,'ITEM',NULL,10074,27,121,NULL,'2010-01-01',NULL,NULL,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11'),(14,2,'ITEM',NULL,10095,27,111,NULL,'2004-08-01',NULL,NULL,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11'),(15,2,'ITEM',NULL,10089,27,121,NULL,'2000-01-01',NULL,NULL,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11'),(16,1,'ITEM',NULL,10089,27,121,NULL,'2014-01-01',NULL,NULL,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11'),(17,4,'DEFAULT',6,NULL,NULL,0,NULL,'2014-06-30',NULL,NULL,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11'),(18,4,'ITEM',6,10113,27,13,NULL,'2014-01-01',NULL,NULL,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11'),(19,4,'ITEM',7,10113,27,66,NULL,'2014-06-01',NULL,NULL,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11'),(20,4,'ITEM',6,10107,27,30,NULL,'2010-01-01',NULL,NULL,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11'),(21,4,'ITEM',NULL,10092,27,12,NULL,'2004-08-01',NULL,NULL,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11'),(22,4,'ITEM',NULL,10074,27,121,NULL,'2010-01-01',NULL,NULL,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11'),(23,4,'ITEM',NULL,10095,27,111,NULL,'2004-08-01',NULL,NULL,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11'),(24,4,'ITEM',NULL,10089,27,121,NULL,'2014-01-01',NULL,NULL,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11'),(25,4,'ITEM',NULL,10034,27,20,NULL,'2010-02-26',NULL,NULL,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11'),(26,4,'ITEM',NULL,10109,27,10,NULL,'2007-02-01',NULL,NULL,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11'),(27,4,'ITEM',NULL,10107,27,100,NULL,'2013-02-28',NULL,NULL,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11'),(28,1,'ITEM',NULL,10218,46,75,NULL,'2015-09-01',NULL,1,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11'),(29,1,'ITEM',NULL,10220,46,100,NULL,'2015-09-01',NULL,NULL,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11'),(30,1,'ITEM',NULL,10226,46,30,NULL,'2015-09-01',NULL,NULL,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11'),(31,1,'ITEM',NULL,10222,46,50,NULL,'2015-09-01',NULL,NULL,'1','2021-10-04 12:31:55','1','2021-10-04 12:38:11');
/*!40000 ALTER TABLE `mdm_price_list_line` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:49:16
