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
-- Table structure for table `am_wo_routing_detail`
--

DROP TABLE IF EXISTS `am_wo_routing_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `am_wo_routing_detail` (
  `am_wo_routing_detail_id` int NOT NULL AUTO_INCREMENT,
  `am_wo_routing_line_id` int NOT NULL,
  `am_wo_header_id` int NOT NULL,
  `resource_sequence` int NOT NULL,
  `charge_basis` varchar(50) DEFAULT NULL,
  `resource_id` int NOT NULL,
  `resource_usage` varchar(20) DEFAULT NULL,
  `resource_schedule` varchar(20) DEFAULT NULL,
  `assigned_units` int DEFAULT NULL,
  `required_quantity` decimal(20,5) DEFAULT NULL,
  `applied_quantity` decimal(20,5) DEFAULT NULL,
  `charge_type` varchar(50) DEFAULT NULL,
  `standard_rate_cb` varchar(5) DEFAULT NULL,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`am_wo_routing_detail_id`),
  UNIQUE KEY `wip_wo_routing_line_id` (`am_wo_routing_line_id`,`resource_sequence`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `am_wo_routing_detail`
--

LOCK TABLES `am_wo_routing_detail` WRITE;
/*!40000 ALTER TABLE `am_wo_routing_detail` DISABLE KEYS */;
INSERT INTO `am_wo_routing_detail` VALUES (1,1,2,10,'ITEM',1,'1','NEXT',1,NULL,NULL,'WIP_MOVE',NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51'),(2,2,3,10,'ITEM',1,'1.00000','NEXT',1,1.00000,NULL,'WIP_MOVE',NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51'),(3,3,4,10,'ITEM',1,'1.00000','NEXT',1,1.00000,NULL,'WIP_MOVE',NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51'),(4,4,5,10,'ITEM',1,'1.00000','NEXT',1,1.00000,NULL,'WIP_MOVE',NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51'),(5,5,6,10,'ITEM',1,'1.00000','NEXT',1,1.00000,NULL,'WIP_MOVE',NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51'),(6,6,7,10,'ITEM',1,'1.00000','NEXT',1,1.00000,NULL,'WIP_MOVE',NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51'),(7,7,8,10,'ITEM',1,'1.00000','NEXT',1,1.00000,NULL,'WIP_MOVE',NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51'),(8,8,9,10,'ITEM',1,'1.00000','NEXT',1,1.00000,NULL,'WIP_MOVE',NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51'),(9,9,10,10,'ITEM',1,'1.00000','NEXT',1,1.00000,NULL,'WIP_MOVE',NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51'),(10,10,11,10,'ITEM',1,'1.00000','NEXT',1,1.00000,NULL,'WIP_MOVE',NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51'),(11,11,12,10,'ITEM',1,'1.00000','NEXT',1,1.00000,NULL,'WIP_MOVE',NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51'),(12,12,13,10,'ITEM',1,'1.00000','NEXT',1,1.00000,NULL,'WIP_MOVE',NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51'),(13,13,14,10,'ITEM',1,'1.00000','NEXT',1,1.00000,NULL,'WIP_MOVE',NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51'),(14,14,15,10,'ITEM',1,'1.00000','NEXT',1,1.00000,NULL,'WIP_MOVE',NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51'),(15,15,16,10,'ITEM',1,'1.00000','NEXT',1,1.00000,NULL,'WIP_MOVE',NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51'),(16,16,17,10,'ITEM',1,'1.00000','NEXT',1,1.00000,NULL,'WIP_MOVE',NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51'),(17,17,18,10,'ITEM',1,'1.00000','NEXT',1,1.00000,NULL,'WIP_MOVE',NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51'),(18,18,19,10,'ITEM',1,'1.00000','NEXT',1,1.00000,NULL,'WIP_MOVE',NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51'),(19,19,20,10,'ITEM',1,'1.00000','NEXT',1,1.00000,NULL,'WIP_MOVE',NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51'),(20,20,21,10,'ITEM',1,'1.00000','NEXT',1,1.00000,NULL,'WIP_MOVE',NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51'),(21,21,22,10,'ITEM',1,'1.00000','NEXT',1,1.00000,NULL,'WIP_MOVE',NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51'),(22,22,23,10,'ITEM',1,'1.00000','NEXT',1,1.00000,NULL,'WIP_MOVE',NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51'),(23,23,24,10,'ITEM',1,'1.00000','NEXT',1,1.00000,NULL,'WIP_MOVE',NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51');
/*!40000 ALTER TABLE `am_wo_routing_detail` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:48:31
