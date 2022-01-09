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
-- Table structure for table `ar_receivable_activity`
--

DROP TABLE IF EXISTS `ar_receivable_activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ar_receivable_activity` (
  `ar_receivable_activity_id` int NOT NULL AUTO_INCREMENT,
  `activity_name` varchar(50) NOT NULL,
  `activity_type` int NOT NULL,
  `active_cb` tinyint(1) DEFAULT NULL,
  `account_source` int NOT NULL,
  `description` varchar(256) DEFAULT NULL,
  `activity_ac_id` int DEFAULT NULL,
  `tax_code_source` varchar(15) DEFAULT NULL,
  `tax_code_id` int DEFAULT NULL,
  `bu_org_id` int DEFAULT NULL,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ar_receivable_activity_id`),
  UNIQUE KEY `document_type_name` (`activity_name`,`active_cb`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ar_receivable_activity`
--

LOCK TABLES `ar_receivable_activity` WRITE;
/*!40000 ALTER TABLE `ar_receivable_activity` DISABLE KEYS */;
/*!40000 ALTER TABLE `ar_receivable_activity` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:49:26
