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
-- Table structure for table `gl_ac_line_type`
--

DROP TABLE IF EXISTS `gl_ac_line_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gl_ac_line_type` (
  `gl_ac_line_type_id` int unsigned NOT NULL AUTO_INCREMENT,
  `description` varchar(256) DEFAULT NULL,
  `line_type_code` varchar(50) NOT NULL,
  `ac_type` enum('A','L','E','R','X','') NOT NULL,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`gl_ac_line_type_id`),
  UNIQUE KEY `line_type_code_UNIQUE` (`line_type_code`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gl_ac_line_type`
--

LOCK TABLES `gl_ac_line_type` WRITE;
/*!40000 ALTER TABLE `gl_ac_line_type` DISABLE KEYS */;
INSERT INTO `gl_ac_line_type` VALUES (1,NULL,'cash','A','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(2,NULL,'retained_earning','E','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(3,NULL,'receviable','A','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(4,NULL,'revenue','R','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(5,NULL,'liability','L','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(6,NULL,'accrual','L','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(7,NULL,'cogs','X','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(8,NULL,'deffered_cogs','A','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(9,NULL,'expense','X','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(10,NULL,'suspense','X','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(11,NULL,'recon','A','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(12,NULL,'mat','A','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(13,NULL,'mat_oh','A','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(14,NULL,'oh','A','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(15,NULL,'res','A','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(16,NULL,'osp','A','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(17,NULL,'mat_var','X','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(18,NULL,'mat_oh_var','X','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(19,NULL,'oh_var','X','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(20,NULL,'res_var','X','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(21,NULL,'osp_var','X','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(22,NULL,'wip_mat','A','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(23,NULL,'wip_mat_oh','A','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(24,NULL,'wip_oh','A','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(25,NULL,'wip_res','A','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(26,NULL,'wip_osp','A','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(27,NULL,'wip_mat_var','X','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(28,NULL,'wip_mat_oh_var','X','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(29,NULL,'wip_oh_var','A','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(30,NULL,'wip_res_var','X','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(31,NULL,'wip_osp_var','X','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(32,NULL,'eam_mat','A','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(33,NULL,'eam_mat_oh','A','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(34,NULL,'eam_oh','A','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(35,NULL,'eam_res','A','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(36,NULL,'eam_osp','A','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(37,NULL,'eam_mat_var','X','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(38,NULL,'eam_mat_oh_var','X','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(39,NULL,'eam_oh_var','X','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(40,NULL,'eam_res_var','X','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(41,NULL,'eam_osp_var','X','UNKOWN','2022-01-04 00:54:29','UNKOWN','2022-01-04 00:54:29'),(42,NULL,'wip_res_absorption','X','UNKOWN','2022-01-04 00:58:40','UNKOWN','2022-01-04 00:58:40'),(43,NULL,'wip_oh_absorption','X','UNKOWN','2022-01-04 00:58:40','UNKOWN','2022-01-04 00:58:40'),(44,NULL,'mat_oh_absorption','X','UNKOWN','2022-01-04 00:58:40','UNKOWN','2022-01-04 00:58:40');
/*!40000 ALTER TABLE `gl_ac_line_type` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:48:01
