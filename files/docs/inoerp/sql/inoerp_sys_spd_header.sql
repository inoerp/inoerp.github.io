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
-- Table structure for table `sys_spd_header`
--

DROP TABLE IF EXISTS `sys_spd_header`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sys_spd_header` (
  `sys_spd_header_id` int NOT NULL AUTO_INCREMENT,
  `org_id` int NOT NULL,
  `document_number` varchar(20) DEFAULT NULL,
  `status` varchar(25) DEFAULT NULL,
  `security_level` varchar(25) DEFAULT NULL,
  `primary_document` varchar(100) DEFAULT NULL,
  `primary_document_id` int DEFAULT NULL,
  `template_id` int DEFAULT NULL,
  `change_type` varchar(25) DEFAULT NULL,
  `originator` varchar(256) DEFAULT NULL,
  `description` text,
  `reason_code` varchar(100) DEFAULT NULL,
  `product_line` varchar(50) DEFAULT NULL,
  `process_flow_header_id` int NOT NULL,
  `current_process_flow_line_id` int DEFAULT NULL,
  `origination_date` date DEFAULT NULL,
  `owner_user_id` int DEFAULT NULL,
  `release_date` date DEFAULT NULL,
  `completion_date` date DEFAULT NULL,
  `project_task_id` int DEFAULT NULL,
  `access_org` text,
  `related_changes` text,
  `priority` int DEFAULT NULL,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`sys_spd_header_id`),
  UNIQUE KEY `release_number` (`security_level`,`change_type`),
  UNIQUE KEY `po_header_id` (`sys_spd_header_id`,`security_level`),
  UNIQUE KEY `primary_document` (`primary_document`,`primary_document_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_spd_header`
--

LOCK TABLES `sys_spd_header` WRITE;
/*!40000 ALTER TABLE `sys_spd_header` DISABLE KEYS */;
INSERT INTO `sys_spd_header` VALUES (1,6,NULL,'INCOMPLETE',NULL,'sd_so_line',133,NULL,NULL,'inoerp',NULL,NULL,NULL,1,NULL,NULL,34,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:14','1','2021-10-04 12:38:24'),(5,6,NULL,'INCOMPLETE',NULL,'sd_so_line',134,NULL,NULL,'inoerp',NULL,NULL,NULL,4,NULL,NULL,34,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:14','1','2021-10-04 12:38:24'),(9,6,NULL,'INCOMPLETE',NULL,'sd_so_line',135,NULL,NULL,'inoerp',NULL,NULL,NULL,4,NULL,NULL,34,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:14','1','2021-10-04 12:38:24'),(10,6,NULL,'Start',NULL,'sd_so_line',136,NULL,NULL,'inoerp',NULL,NULL,NULL,4,NULL,NULL,34,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:14','1','2021-10-04 12:38:24'),(11,6,NULL,'Start',NULL,'sd_so_line',139,NULL,NULL,'inoerp',NULL,NULL,NULL,4,NULL,NULL,34,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:14','1','2021-10-04 12:38:24'),(12,6,NULL,'Start',NULL,'sd_so_line',140,NULL,NULL,'inoerp',NULL,NULL,NULL,4,NULL,NULL,34,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:14','1','2021-10-04 12:38:24'),(13,6,NULL,'Start',NULL,'sd_so_line',141,NULL,NULL,'inoerp',NULL,NULL,NULL,4,NULL,NULL,34,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:14','1','2021-10-04 12:38:24'),(14,6,NULL,'Close',NULL,'sd_so_line',142,NULL,NULL,'inoerp',NULL,NULL,NULL,4,NULL,NULL,34,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:14','1','2021-10-04 12:38:24'),(15,6,NULL,'Close',NULL,'sd_so_line',143,NULL,NULL,'inoerp',NULL,NULL,NULL,4,NULL,NULL,34,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:14','1','2021-10-04 12:38:24');
/*!40000 ALTER TABLE `sys_spd_header` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:48:56
