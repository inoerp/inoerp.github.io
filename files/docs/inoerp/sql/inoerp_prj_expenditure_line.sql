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
-- Table structure for table `prj_expenditure_line`
--

DROP TABLE IF EXISTS `prj_expenditure_line`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prj_expenditure_line` (
  `prj_expenditure_line_id` int unsigned NOT NULL AUTO_INCREMENT,
  `prj_expenditure_header_id` int NOT NULL,
  `org_id` int DEFAULT NULL,
  `hr_employee_id` int DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `job_id` int DEFAULT NULL,
  `expenditure_date` date DEFAULT NULL,
  `prj_project_header_id` int DEFAULT NULL,
  `prj_project_line_id` int DEFAULT NULL,
  `prj_nlr_header_id` int DEFAULT NULL,
  `prj_expenditure_type_header_id` int NOT NULL,
  `uom_id` int NOT NULL,
  `quantity` decimal(15,5) NOT NULL,
  `rate` decimal(15,5) DEFAULT NULL,
  `status` varchar(25) DEFAULT NULL,
  `debit_ac_id` int DEFAULT NULL,
  `credit_ac_id` int DEFAULT NULL,
  `gl_journal_header_id` int DEFAULT NULL,
  `gl_journal_interface_cb` tinyint(1) DEFAULT NULL,
  `invoiced_cb` tinyint(1) DEFAULT NULL,
  `revene_calculated_cb` tinyint(1) DEFAULT NULL,
  `line_amount` decimal(15,5) DEFAULT NULL,
  `burden_amount` decimal(15,5) DEFAULT NULL,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`prj_expenditure_line_id`),
  UNIQUE KEY `sys_catalog_header_id` (`prj_expenditure_header_id`,`org_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prj_expenditure_line`
--

LOCK TABLES `prj_expenditure_line` WRITE;
/*!40000 ALTER TABLE `prj_expenditure_line` DISABLE KEYS */;
INSERT INTO `prj_expenditure_line` VALUES (12,16,NULL,NULL,NULL,NULL,NULL,5,43,NULL,1,43,300.00000,2.00000,'DISTRIBUTED',161,161,NULL,1,NULL,NULL,600.00000,150.00000,'1','2021-10-04 12:32:00','1','2021-10-04 12:38:18'),(13,17,NULL,NULL,NULL,NULL,NULL,5,43,NULL,1,43,300.00000,2.00000,'DISTRIBUTED',161,161,NULL,1,NULL,NULL,600.00000,150.00000,'1','2021-10-04 12:32:00','1','2021-10-04 12:38:18'),(14,18,NULL,NULL,NULL,NULL,NULL,5,43,NULL,1,43,300.00000,2.00000,'DISTRIBUTED',161,161,NULL,1,NULL,NULL,600.00000,150.00000,'1','2021-10-04 12:32:00','1','2021-10-04 12:38:18'),(15,19,NULL,NULL,NULL,NULL,NULL,5,43,NULL,1,43,300.00000,2.00000,'DISTRIBUTED',161,161,NULL,1,NULL,NULL,600.00000,150.00000,'1','2021-10-04 12:32:00','1','2021-10-04 12:38:18'),(16,20,NULL,NULL,NULL,NULL,NULL,5,43,NULL,1,43,300.00000,2.00000,'DISTRIBUTED',161,161,NULL,1,NULL,NULL,600.00000,150.00000,'1','2021-10-04 12:32:00','1','2021-10-04 12:38:18'),(17,21,NULL,NULL,NULL,NULL,'2015-10-29',8,69,NULL,1,43,400.00000,12.00000,'DISTRIBUTED',161,161,NULL,NULL,NULL,NULL,4800.00000,200.00000,'1','2021-10-04 12:32:00','1','2021-10-04 12:38:18'),(18,22,NULL,NULL,NULL,NULL,NULL,8,67,NULL,1,43,300.00000,40.00000,'DISTRIBUTED',161,161,NULL,NULL,NULL,NULL,12000.00000,150.00000,'1','2021-10-04 12:32:00','1','2021-10-04 12:38:18'),(19,23,NULL,4,NULL,NULL,NULL,8,67,NULL,3,26,60.00000,25.00000,'DISTRIBUTED',4313,196,NULL,NULL,NULL,NULL,1500.00000,0.00000,'1','2021-10-04 12:32:00','1','2021-10-04 12:38:18'),(20,24,NULL,4,NULL,NULL,NULL,8,69,NULL,3,26,20.00000,100.00000,'DISTRIBUTED',4313,196,NULL,NULL,NULL,NULL,2000.00000,0.00000,'1','2021-10-04 12:32:00','1','2021-10-04 12:38:18'),(21,25,NULL,NULL,NULL,NULL,'2015-10-22',9,77,NULL,1,45,200.00000,21.00000,'DISTRIBUTED',161,161,NULL,NULL,NULL,NULL,4200.00000,100.00000,'1','2021-10-04 12:32:00','1','2021-10-04 12:38:18'),(22,25,NULL,NULL,NULL,NULL,'2015-10-22',9,79,NULL,3,45,100.00000,22.00000,'DISTRIBUTED',161,161,NULL,NULL,NULL,NULL,2200.00000,0.00000,'1','2021-10-04 12:32:00','1','2021-10-04 12:38:18'),(23,26,NULL,4,NULL,NULL,NULL,10,83,NULL,1,43,121.00000,10.00000,'DISTRIBUTED',4313,196,NULL,1,NULL,1,1210.00000,60.50000,'1','2021-10-04 12:32:00','1','2021-10-04 12:38:18'),(24,26,NULL,4,NULL,1,NULL,10,83,NULL,3,43,200.00000,12.00000,'DISTRIBUTED',4313,196,NULL,1,NULL,1,2400.00000,0.00000,'1','2021-10-04 12:32:00','1','2021-10-04 12:38:18'),(25,27,NULL,4,NULL,2,NULL,10,83,NULL,3,43,50.00000,2.00000,'DISTRIBUTED',4313,196,NULL,NULL,NULL,1,100.00000,0.00000,'1','2021-10-04 12:32:00','1','2021-10-04 12:38:18'),(26,28,NULL,4,NULL,1,NULL,10,83,NULL,3,43,100.00000,20.00000,'DISTRIBUTED',4313,196,NULL,NULL,NULL,1,2000.00000,0.00000,'1','2021-10-04 12:32:00','1','2021-10-04 12:38:18');
/*!40000 ALTER TABLE `prj_expenditure_line` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:48:36
