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
-- Table structure for table `hr_control`
--

DROP TABLE IF EXISTS `hr_control`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hr_control` (
  `hr_control_id` int unsigned NOT NULL AUTO_INCREMENT,
  `bu_org_id` int NOT NULL,
  `default_job_id` int DEFAULT NULL,
  `default_grade_id` int DEFAULT NULL,
  `salary_cash_ac_id` int DEFAULT NULL,
  `expense_claim_approval` varchar(25) DEFAULT NULL,
  `expense_claim_ac_id` int DEFAULT NULL,
  `salary_exp_ac_id` int DEFAULT NULL,
  `supplier_id` int NOT NULL,
  `supplier_site_id` int NOT NULL,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`hr_control_id`),
  UNIQUE KEY `org` (`bu_org_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hr_control`
--

LOCK TABLES `hr_control` WRITE;
/*!40000 ALTER TABLE `hr_control` DISABLE KEYS */;
INSERT INTO `hr_control` VALUES (1,5,1,2,NULL,'SUPERVISOR',37,37,2,19,'1','2021-10-04 12:31:49','1','2021-10-04 12:38:00'),(2,8,NULL,NULL,NULL,'SUPERVISOR',NULL,NULL,0,0,'1','2021-10-04 12:31:49','1','2021-10-04 12:38:00'),(3,10,NULL,NULL,NULL,'SUPERVISOR',NULL,NULL,0,0,'1','2021-10-04 12:31:49','1','2021-10-04 12:38:00');
/*!40000 ALTER TABLE `hr_control` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:49:21
