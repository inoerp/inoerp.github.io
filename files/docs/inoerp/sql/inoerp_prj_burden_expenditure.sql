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
-- Table structure for table `prj_burden_expenditure`
--

DROP TABLE IF EXISTS `prj_burden_expenditure`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prj_burden_expenditure` (
  `prj_burden_expenditure_id` int unsigned NOT NULL AUTO_INCREMENT,
  `prj_expenditure_line_id` int NOT NULL,
  `prj_burden_cost_base_id` int DEFAULT NULL,
  `prj_burden_costcode_id` int NOT NULL,
  `prj_expenditure_type_header_id` int DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `prj_burden_list_header_id` int DEFAULT NULL,
  `expenditure_date` date DEFAULT NULL,
  `prj_project_header_id` int DEFAULT NULL,
  `prj_project_line_id` int DEFAULT NULL,
  `prj_burden_structure_header_id` int DEFAULT NULL,
  `multiplier` decimal(15,5) DEFAULT NULL,
  `burden_value` decimal(15,5) DEFAULT NULL,
  `burden_amount` decimal(15,5) DEFAULT NULL,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`prj_burden_expenditure_id`),
  UNIQUE KEY `prj_expenditure_line_id` (`prj_expenditure_line_id`,`prj_burden_costcode_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prj_burden_expenditure`
--

LOCK TABLES `prj_burden_expenditure` WRITE;
/*!40000 ALTER TABLE `prj_burden_expenditure` DISABLE KEYS */;
/*!40000 ALTER TABLE `prj_burden_expenditure` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:48:28
