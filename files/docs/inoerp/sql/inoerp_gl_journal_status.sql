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
-- Table structure for table `gl_journal_status`
--

DROP TABLE IF EXISTS `gl_journal_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gl_journal_status` (
  `gl_journal_status_id` int unsigned NOT NULL AUTO_INCREMENT,
  `reference_key_name` varchar(50) NOT NULL,
  `reference_key_value` varchar(50) NOT NULL,
  `accounting_status` enum('NEW','PENDING','INPROCESS','COMPLETED','ERROR','') NOT NULL DEFAULT 'NEW',
  `journal_line_id` int DEFAULT NULL,
  `status_description` varchar(256) DEFAULT NULL,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`gl_journal_status_id`),
  UNIQUE KEY `currency_conversion_type` (`accounting_status`,`reference_key_name`,`reference_key_value`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gl_journal_status`
--

LOCK TABLES `gl_journal_status` WRITE;
/*!40000 ALTER TABLE `gl_journal_status` DISABLE KEYS */;
INSERT INTO `gl_journal_status` VALUES (1,'inv_transaction','1631','COMPLETED',NULL,NULL,'UNKOWN','2021-10-18 12:48:28','UNKOWN','2021-10-18 12:48:28'),(2,'inv_transaction','1','COMPLETED',NULL,NULL,'UNKOWN','2021-10-23 12:11:41','UNKOWN','2021-10-23 12:11:41'),(3,'inv_transaction','2','COMPLETED',NULL,NULL,'UNKOWN','2021-10-24 23:29:45','UNKOWN','2021-10-24 23:29:45'),(4,'inv_transaction','1632','COMPLETED',NULL,NULL,'UNKOWN','2021-10-25 17:19:53','UNKOWN','2021-10-25 17:19:53'),(5,'inv_transaction','1633','COMPLETED',NULL,NULL,'UNKOWN','2021-10-26 09:39:10','UNKOWN','2021-10-26 09:39:10'),(6,'inv_transaction','1634','COMPLETED',NULL,NULL,'UNKOWN','2021-10-26 09:43:00','UNKOWN','2021-10-26 09:43:00'),(7,'inv_transaction','1635','COMPLETED',NULL,NULL,'UNKOWN','2021-10-26 10:27:31','UNKOWN','2021-10-26 10:27:31'),(8,'inv_transaction','1636','COMPLETED',NULL,NULL,'UNKOWN','2021-10-26 10:30:36','UNKOWN','2021-10-26 10:30:36'),(9,'inv_transaction','1637','COMPLETED',NULL,NULL,'UNKOWN','2021-10-26 10:44:58','UNKOWN','2021-10-26 10:44:58'),(10,'inv_transaction','1638','COMPLETED',NULL,NULL,'UNKOWN','2021-10-26 10:45:37','UNKOWN','2021-10-26 10:45:37'),(11,'inv_transaction','1639','COMPLETED',NULL,NULL,'UNKOWN','2021-10-26 11:16:13','UNKOWN','2021-10-26 11:16:13'),(12,'inv_transaction','1640','COMPLETED',NULL,NULL,'UNKOWN','2021-10-26 12:47:17','UNKOWN','2021-10-26 12:47:17'),(13,'inv_transaction','1641','COMPLETED',NULL,NULL,'UNKOWN','2021-10-26 12:55:25','UNKOWN','2021-10-26 12:55:25'),(14,'inv_transaction','1642','COMPLETED',NULL,NULL,'UNKOWN','2021-10-26 12:55:25','UNKOWN','2021-10-26 12:55:25'),(15,'inv_transaction','1643','COMPLETED',NULL,NULL,'UNKOWN','2021-10-26 13:28:21','UNKOWN','2021-10-26 13:28:21'),(16,'inv_transaction','1644','COMPLETED',NULL,NULL,'UNKOWN','2021-10-26 13:28:21','UNKOWN','2021-10-26 13:28:21'),(17,'inv_transaction','1645','COMPLETED',NULL,NULL,'UNKOWN','2021-10-26 13:29:18','UNKOWN','2021-10-26 13:29:18'),(18,'inv_transaction','1646','COMPLETED',NULL,NULL,'UNKOWN','2021-10-26 13:29:18','UNKOWN','2021-10-26 13:29:18'),(19,'inv_transaction','1647','COMPLETED',NULL,NULL,'UNKOWN','2021-10-26 14:55:33','UNKOWN','2021-10-26 14:55:33'),(20,'inv_transaction','1648','COMPLETED',NULL,NULL,'UNKOWN','2021-10-26 14:55:33','UNKOWN','2021-10-26 14:55:33'),(21,'inv_transaction','1649','COMPLETED',NULL,NULL,'UNKOWN','2021-10-26 20:40:36','UNKOWN','2021-10-26 20:40:36'),(22,'inv_transaction','1650','COMPLETED',NULL,NULL,'UNKOWN','2021-10-26 20:40:36','UNKOWN','2021-10-26 20:40:36'),(23,'inv_transaction','1651','COMPLETED',NULL,NULL,'UNKOWN','2021-10-26 20:55:49','UNKOWN','2021-10-26 20:55:49'),(24,'inv_transaction','1652','COMPLETED',NULL,NULL,'UNKOWN','2021-10-26 20:55:49','UNKOWN','2021-10-26 20:55:49'),(25,'inv_transaction','1653','COMPLETED',NULL,NULL,'UNKOWN','2021-10-26 20:59:26','UNKOWN','2021-10-26 20:59:26'),(26,'inv_transaction','1654','COMPLETED',NULL,NULL,'UNKOWN','2021-10-26 20:59:26','UNKOWN','2021-10-26 20:59:26'),(27,'inv_transaction','1655','COMPLETED',NULL,NULL,'UNKOWN','2021-11-01 10:29:44','UNKOWN','2021-11-01 10:29:44'),(28,'inv_transaction','1656','COMPLETED',NULL,NULL,'UNKOWN','2021-12-23 23:43:25','UNKOWN','2021-12-23 23:43:25'),(29,'inv_transaction','1657','COMPLETED',NULL,NULL,'UNKOWN','2021-12-23 23:57:41','UNKOWN','2021-12-23 23:57:41'),(30,'inv_transaction','1658','COMPLETED',NULL,NULL,'UNKOWN','2021-12-24 13:48:41','UNKOWN','2021-12-24 13:48:41'),(31,'inv_transaction','1659','COMPLETED',NULL,NULL,'UNKOWN','2021-12-25 03:47:42','UNKOWN','2021-12-25 03:47:42'),(32,'po_receipt_line','16','NEW',NULL,NULL,'UNKOWN','2021-12-26 16:44:03','UNKOWN','2021-12-26 16:44:03'),(33,'po_receipt_line','17','NEW',NULL,NULL,'UNKOWN','2021-12-26 16:44:03','UNKOWN','2021-12-26 16:44:03'),(34,'inv_transaction','1660','NEW',NULL,NULL,'UNKOWN','2021-12-26 17:05:08','UNKOWN','2021-12-26 17:05:08'),(35,'inv_transaction','1661','COMPLETED',NULL,NULL,'UNKOWN','2021-12-26 17:11:40','UNKOWN','2021-12-26 17:11:40'),(36,'inv_transaction','1662','COMPLETED',NULL,NULL,'UNKOWN','2021-12-26 17:46:16','UNKOWN','2021-12-26 17:46:16'),(37,'inv_transaction','1663','COMPLETED',NULL,NULL,'UNKOWN','2021-12-26 17:47:37','UNKOWN','2021-12-26 17:47:37'),(38,'inv_transaction','1664','NEW',NULL,NULL,'UNKOWN','2022-01-01 18:45:59','UNKOWN','2022-01-01 18:45:59'),(39,'inv_transaction','1665','NEW',NULL,NULL,'UNKOWN','2022-01-01 18:45:59','UNKOWN','2022-01-01 18:45:59'),(40,'inv_transaction','1666','NEW',NULL,NULL,'UNKOWN','2022-01-01 18:45:59','UNKOWN','2022-01-01 18:45:59'),(41,'inv_transaction','1667','NEW',NULL,NULL,'UNKOWN','2022-01-01 19:21:06','UNKOWN','2022-01-01 19:21:06'),(42,'inv_transaction','1668','NEW',NULL,NULL,'UNKOWN','2022-01-01 19:21:06','UNKOWN','2022-01-01 19:21:06'),(43,'inv_transaction','1669','NEW',NULL,NULL,'UNKOWN','2022-01-01 19:21:06','UNKOWN','2022-01-01 19:21:06'),(44,'inv_transaction','1670','NEW',NULL,NULL,'UNKOWN','2022-01-07 14:15:30','UNKOWN','2022-01-07 14:15:30'),(45,'inv_transaction','1671','NEW',NULL,NULL,'UNKOWN','2022-01-07 14:15:33','UNKOWN','2022-01-07 14:15:33'),(46,'inv_transaction','1672','NEW',NULL,NULL,'UNKOWN','2022-01-07 14:43:19','UNKOWN','2022-01-07 14:43:19'),(47,'inv_transaction','1673','NEW',NULL,NULL,'UNKOWN','2022-01-07 15:31:06','UNKOWN','2022-01-07 15:31:06'),(48,'inv_transaction','1674','NEW',NULL,NULL,'UNKOWN','2022-01-07 15:34:29','UNKOWN','2022-01-07 15:34:29'),(49,'inv_transaction','1675','NEW',NULL,NULL,'UNKOWN','2022-01-07 15:40:16','UNKOWN','2022-01-07 15:40:16'),(50,'inv_transaction','1676','NEW',NULL,NULL,'UNKOWN','2022-01-07 15:40:44','UNKOWN','2022-01-07 15:40:44'),(51,'inv_transaction','1677','NEW',NULL,NULL,'UNKOWN','2022-01-07 15:41:28','UNKOWN','2022-01-07 15:41:28');
/*!40000 ALTER TABLE `gl_journal_status` ENABLE KEYS */;
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
