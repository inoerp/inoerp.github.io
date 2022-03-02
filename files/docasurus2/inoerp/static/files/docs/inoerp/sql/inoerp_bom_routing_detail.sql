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
-- Table structure for table `bom_routing_detail`
--

DROP TABLE IF EXISTS `bom_routing_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bom_routing_detail` (
  `bom_routing_detail_id` int NOT NULL AUTO_INCREMENT,
  `bom_routing_line_id` int DEFAULT NULL,
  `bom_routing_header_id` int DEFAULT NULL,
  `bom_standard_operation_id` int DEFAULT NULL,
  `resource_sequence` int NOT NULL,
  `charge_basis` enum('ITEM','LOT') DEFAULT NULL,
  `resource_id` int DEFAULT NULL,
  `resource_usage` decimal(20,5) DEFAULT NULL,
  `resource_scheduled_cb` tinyint DEFAULT NULL,
  `assigned_units` int DEFAULT NULL,
  `twenty_four_hr_cb` tinyint(1) DEFAULT NULL,
  `charge_type` enum('WIP_MOVE','WIP_COMPLETION','MANUAL','PO_RECEIPT','') DEFAULT NULL,
  `standard_rate_cb` tinyint(1) DEFAULT NULL,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`bom_routing_detail_id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bom_routing_detail`
--

LOCK TABLES `bom_routing_detail` WRITE;
/*!40000 ALTER TABLE `bom_routing_detail` DISABLE KEYS */;
INSERT INTO `bom_routing_detail` VALUES (1,1,1,NULL,10,'ITEM',1,1.00000,1,1,1,'WIP_MOVE',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(2,1,1,NULL,20,'ITEM',2,1.00000,1,1,1,'WIP_MOVE',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(3,2,1,NULL,10,'ITEM',3,1.00000,1,1,1,'WIP_MOVE',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(4,3,1,NULL,15,'ITEM',1,1.00000,1,1,1,'WIP_MOVE',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(5,3,1,NULL,25,'ITEM',2,1.00000,1,1,1,'WIP_MOVE',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(6,4,2,NULL,10,'ITEM',1,1.00000,1,1,1,'WIP_MOVE',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(7,5,3,NULL,10,'ITEM',1,2.00000,1,1,1,'WIP_MOVE',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(8,6,4,NULL,10,'ITEM',1,5.00000,1,2,1,'WIP_MOVE',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(9,9,5,NULL,10,'ITEM',1,5.00000,1,NULL,1,'WIP_MOVE',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(10,9,5,NULL,20,'ITEM',3,5.00000,1,NULL,1,'MANUAL',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(11,7,5,NULL,10,'ITEM',1,2.00000,1,1,1,'WIP_MOVE',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(12,8,5,NULL,10,'ITEM',1,1.00000,1,2,1,'WIP_MOVE',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(13,10,3,NULL,10,'ITEM',1,2.00000,1,2,1,'WIP_MOVE',NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(14,11,2,NULL,1,'ITEM',1,20.00000,1,NULL,1,'WIP_MOVE',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(15,12,6,NULL,10,'ITEM',1,2.00000,1,NULL,1,'WIP_MOVE',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(16,13,6,NULL,1,'ITEM',2,10.00000,1,1,1,'WIP_MOVE',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(17,NULL,NULL,NULL,10,'ITEM',1,10.00000,1,1,NULL,'WIP_MOVE',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(18,NULL,NULL,NULL,10,'ITEM',1,10.00000,1,1,NULL,'WIP_MOVE',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(19,14,7,NULL,10,'ITEM',1,10.00000,1,1,NULL,'WIP_MOVE',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(20,15,7,NULL,1,'ITEM',1,2.00000,1,1,NULL,'WIP_MOVE',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(21,NULL,NULL,NULL,10,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(22,16,8,NULL,10,'ITEM',1,10.00000,1,1,1,'WIP_MOVE',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(23,NULL,NULL,NULL,10,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(24,17,9,NULL,10,'ITEM',1,5.00000,1,2,1,'WIP_MOVE',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(25,18,11,NULL,10,'ITEM',1,1.00000,1,NULL,1,'WIP_MOVE',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(26,19,11,NULL,1,'ITEM',2,2.00000,1,NULL,1,'WIP_MOVE',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(27,20,7,NULL,1,'ITEM',1,10.00000,1,NULL,NULL,'WIP_MOVE',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(28,21,14,NULL,10,'ITEM',1,1.00000,1,NULL,NULL,'WIP_MOVE',NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(29,22,15,NULL,10,'ITEM',1,1.00000,1,1,NULL,'WIP_MOVE',NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(30,23,16,NULL,10,'ITEM',1,2.00000,1,NULL,NULL,'WIP_MOVE',NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(31,24,18,NULL,10,'ITEM',1,2.00000,1,NULL,NULL,'WIP_MOVE',NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(32,25,19,NULL,10,'ITEM',5,1.00000,1,NULL,NULL,'WIP_MOVE',NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52');
/*!40000 ALTER TABLE `bom_routing_detail` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:48:59
