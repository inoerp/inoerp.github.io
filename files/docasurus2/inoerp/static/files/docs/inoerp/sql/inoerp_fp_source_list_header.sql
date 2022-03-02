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
-- Table structure for table `fp_source_list_header`
--

DROP TABLE IF EXISTS `fp_source_list_header`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fp_source_list_header` (
  `fp_source_list_header_id` int NOT NULL AUTO_INCREMENT,
  `org_id` int NOT NULL,
  `source_list` varchar(25) DEFAULT NULL,
  `description` varchar(256) NOT NULL,
  `status` enum('active','inactive','') DEFAULT NULL,
  `source_list_type` varchar(50) DEFAULT NULL,
  `ar_customer_id` int DEFAULT NULL,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`fp_source_list_header_id`),
  UNIQUE KEY `org_id` (`org_id`,`source_list`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fp_source_list_header`
--

LOCK TABLES `fp_source_list_header` WRITE;
/*!40000 ALTER TABLE `fp_source_list_header` DISABLE KEYS */;
INSERT INTO `fp_source_list_header` VALUES (1,6,'MRP_SL01','MRP Source List 0222',NULL,'MRP',NULL,'1','2021-10-04 12:31:47','1','2021-10-04 12:37:57'),(2,6,'MDS_SR01','MDS_SR01','','DEMAND_PLAN',NULL,'1','2021-10-04 12:31:47','1','2021-10-04 12:37:57'),(3,6,'MI_D_SR2','MI_D_SR2','active','DEMAND_PLAN',NULL,'1','2021-10-04 12:31:47','1','2021-10-04 12:37:57'),(4,6,'MI_SR05','MI_SR05000',NULL,'DEMAND_PLAN',NULL,'1','2021-10-04 12:31:47','1','2021-10-04 12:37:57'),(5,6,'Training 01','Training Source List 01','active','FORECAST',NULL,'1','2021-10-04 12:31:47','1','2021-10-04 12:37:57');
/*!40000 ALTER TABLE `fp_source_list_header` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:48:13
