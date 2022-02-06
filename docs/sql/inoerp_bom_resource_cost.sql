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
-- Table structure for table `bom_resource_cost`
--

DROP TABLE IF EXISTS `bom_resource_cost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bom_resource_cost` (
  `bom_resource_cost_id` int NOT NULL AUTO_INCREMENT,
  `bom_resource_id` int NOT NULL,
  `bom_cost_type` varchar(25) NOT NULL,
  `resource_rate` decimal(20,5) NOT NULL,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`bom_resource_cost_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bom_resource_cost`
--

LOCK TABLES `bom_resource_cost` WRITE;
/*!40000 ALTER TABLE `bom_resource_cost` DISABLE KEYS */;
INSERT INTO `bom_resource_cost` VALUES (1,4,'PENDING',10.70000,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(2,4,'GLOBAL',15.00000,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(3,4,'FROZEN',11.00000,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(4,1,'FROZEN',11.00000,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(5,1,'PENDING',12.00000,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(6,2,'PENDING',12.00000,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(7,2,'FROZEN',15.00000,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(8,3,'PENDING',11.00000,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(9,1,'GLOBAL',18.00000,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(10,3,'FROZEN',11.00000,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(11,5,'PENDING',10.00000,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(12,5,'FROZEN',15.00000,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52');
/*!40000 ALTER TABLE `bom_resource_cost` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:48:14
