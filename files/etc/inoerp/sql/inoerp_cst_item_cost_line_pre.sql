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
-- Table structure for table `cst_item_cost_line_pre`
--

DROP TABLE IF EXISTS `cst_item_cost_line_pre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cst_item_cost_line_pre` (
  `cst_item_cost_line_id` int NOT NULL,
  `cst_item_cost_header_id` int NOT NULL,
  `cost_element_type` enum('MAT','MOH','OH','RES','OSP') NOT NULL,
  `cost_element_id` int DEFAULT NULL,
  `amount` decimal(20,5) NOT NULL,
  `cost_basis` varchar(25) DEFAULT NULL,
  `ef_id` int DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `cst_item_cost_line_pre_id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`cst_item_cost_line_pre_id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cst_item_cost_line_pre`
--

LOCK TABLES `cst_item_cost_line_pre` WRITE;
/*!40000 ALTER TABLE `cst_item_cost_line_pre` DISABLE KEYS */;
INSERT INTO `cst_item_cost_line_pre` VALUES (153,113,'MAT',1,100.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',7),(154,113,'MAT',2,100.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',8),(155,113,'MOH',1,100.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',9),(150,111,'MAT',1,150.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',10),(151,111,'MAT',2,20.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',11),(152,111,'MOH',1,30.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',12),(165,118,'MAT',1,100.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',13),(166,118,'MAT',2,150.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',14),(167,118,'MOH',1,50.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',15),(168,118,'MOH',3,150.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',16),(138,19,'MAT',1,170.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',17),(139,19,'MAT',2,210.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',18),(140,19,'MOH',1,140.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',19),(141,19,'MOH',3,150.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',20),(4,3,'MAT',1,33.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',21),(145,4,'MAT',1,1.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',22),(6,4,'MAT',2,3.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',23),(5,4,'MOH',1,2.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',24),(10,6,'MAT',1,70.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',25),(11,6,'MAT',2,0.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',26),(12,6,'MOH',1,80.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',27),(14,6,'OH',2,50.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',28),(146,14,'MAT',1,70.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',29),(147,14,'MOH',1,80.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',30),(148,14,'OH',2,50.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',31),(172,19,'MOH',2,150.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',32),(173,19,'OH',2,50.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',33),(149,108,'MAT',1,100.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',34),(156,21,'MAT',1,50.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',35),(157,21,'MAT',2,20.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',36),(158,21,'MOH',1,30.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',37),(159,115,'MAT',2,100.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',38),(160,115,'MOH',3,50.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',39),(161,116,'MAT',1,100.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',40),(162,116,'MAT',2,50.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',41),(163,116,'MOH',1,50.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',42),(164,116,'MOH',3,100.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',43),(169,118,'RES',1,52.50000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',44),(185,125,'MAT',1,100.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',45),(193,134,'MAT',1,1000.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',46),(194,135,'MAT',1,156.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',47),(195,136,'MAT',1,114.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',48),(196,137,'MAT',1,222.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',49),(182,123,'MAT',1,90.00000,'TOTAL_VALUE',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',50),(183,123,'MOH',1,20.00000,'TOTAL_VALUE',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',51),(192,133,'MAT',1,33.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',52),(200,139,'MAT',1,500.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',53),(198,132,'MAT',1,3433.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',54),(202,141,'MAT',1,333.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',55),(204,143,'MAT',1,280.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',56),(210,149,'MAT',1,99.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',57),(212,151,'MAT',1,33.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',58),(214,153,'MAT',1,200.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',59),(206,145,'MAT',1,22.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',60),(208,147,'MAT',1,121.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',61),(216,156,'MAT',1,444.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',62),(218,158,'MAT',1,888.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',63),(230,170,'MAT',1,100.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',64),(236,176,'MAT',1,200.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',65),(237,177,'MAT',1,50.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',66),(400,201,'MAT',1,100.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',67),(401,201,'MOH',1,20.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',68),(402,201,'RES',1,24.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',69),(403,201,'OH',2,7200.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',70),(404,201,'OH',1,528.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',71),(405,201,'RES',1,24.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',72),(406,201,'OH',1,528.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',73),(407,201,'OH',2,7200.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',74),(427,208,'MAT',1,100.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',75),(428,208,'MOH',4,50.00000,'ITEM',NULL,NULL,'1','2021-10-04 12:31:45','1','2021-10-04 12:37:53',76);
/*!40000 ALTER TABLE `cst_item_cost_line_pre` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:48:15
