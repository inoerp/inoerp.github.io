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
-- Table structure for table `bc_static_label`
--

DROP TABLE IF EXISTS `bc_static_label`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bc_static_label` (
  `bc_static_label_id` int NOT NULL AUTO_INCREMENT,
  `label_type` varchar(25) NOT NULL,
  `bc_label_format_header_id` int NOT NULL,
  `status` varchar(25) DEFAULT NULL,
  `label_content` varchar(256) DEFAULT NULL,
  `sys_printer_id` int NOT NULL,
  `generate_label_class_name` varchar(70) DEFAULT NULL,
  `generate_label_function_name` varchar(70) DEFAULT NULL,
  `output_file_path` varchar(256) DEFAULT NULL,
  `file_name` varchar(256) DEFAULT NULL,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`bc_static_label_id`),
  UNIQUE KEY `transaction_type_id` (`label_type`,`status`,`label_content`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bc_static_label`
--

LOCK TABLES `bc_static_label` WRITE;
/*!40000 ALTER TABLE `bc_static_label` DISABLE KEYS */;
INSERT INTO `bc_static_label` VALUES (1,'LOCATOR',1,NULL,NULL,1,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(2,'SUBINV',2,NULL,NULL,1,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(3,'INV',3,NULL,NULL,3,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(4,'ITEM',4,NULL,NULL,1,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(5,'POS_LIST',6,NULL,NULL,1,'pos_barcode_list_header','generate_label',NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52');
/*!40000 ALTER TABLE `bc_static_label` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:48:08
