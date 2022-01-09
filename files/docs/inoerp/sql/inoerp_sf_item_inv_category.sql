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
-- Table structure for table `sf_item_inv_category`
--

DROP TABLE IF EXISTS `sf_item_inv_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sf_item_inv_category` (
  `sf_item_inv_category_id` int NOT NULL AUTO_INCREMENT,
  `reference_type` varchar(30) DEFAULT NULL,
  `reference_entity` varchar(50) DEFAULT NULL,
  `reference_key_name` varchar(50) DEFAULT NULL,
  `reference_key_value` int DEFAULT NULL,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `sf_item_inv_category_value` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`sf_item_inv_category_id`),
  UNIQUE KEY `secondary_field_value` (`sf_item_inv_category_value`,`reference_key_name`,`reference_key_value`)
) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sf_item_inv_category`
--

LOCK TABLES `sf_item_inv_category` WRITE;
/*!40000 ALTER TABLE `sf_item_inv_category` DISABLE KEYS */;
INSERT INTO `sf_item_inv_category` VALUES (3,'table',NULL,'item',10144,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00','CLUSTER'),(4,'table',NULL,'item',10146,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(5,'table',NULL,'item',10138,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(6,'table',NULL,'item',10147,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(7,'table',NULL,'item',10148,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(8,'table',NULL,'item',10149,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(9,'table',NULL,'item',10150,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(10,'table',NULL,'item',10151,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(11,'table',NULL,'item',10152,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(12,'table',NULL,'item',10153,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(13,'table',NULL,'item',10154,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(14,'table',NULL,'item',10155,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(15,'table',NULL,'item',10099,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(16,'table',NULL,'item',10156,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(17,'table',NULL,'item',10157,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(18,'table',NULL,'item',10112,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(19,'table',NULL,'item',10158,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(20,'table',NULL,'item',10159,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(21,'table',NULL,'item',10160,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(22,'table',NULL,'item',10161,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(28,'table',NULL,'item',10167,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(29,'table',NULL,'item',10168,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(30,'table',NULL,'item',10169,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(31,'table',NULL,'item',10170,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(32,'table',NULL,'item',10171,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(33,'table',NULL,'item',10090,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(36,'table',NULL,'item',10174,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(37,'table',NULL,'item',10175,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(38,'table',NULL,'item',10179,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00','546'),(39,'table',NULL,'item',10034,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(40,'table',NULL,'item',10035,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(41,'table',NULL,'item',10184,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(42,'table',NULL,'item',10185,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(43,'table',NULL,'item',10186,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(44,'table',NULL,'item',10187,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(45,'table',NULL,'item',10188,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(46,'table',NULL,'item',10189,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(47,'table',NULL,'item',10190,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(48,'table',NULL,'item',10191,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(49,'table',NULL,'item',10192,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00','598'),(50,'table',NULL,'item',10193,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(51,'table',NULL,'item',10194,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00','597'),(52,'table',NULL,'item',10195,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(53,'table',NULL,'item',10196,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00','596'),(54,'table',NULL,'item',10197,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(55,'table',NULL,'item',10198,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(56,'table',NULL,'item',10199,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(57,'table',NULL,'item',10050,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(58,'table',NULL,'item',10200,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(59,'table',NULL,'item',10201,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00','DIODE'),(60,'table',NULL,'item',10202,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00','DIODE'),(61,'table',NULL,'item',10203,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(62,'table',NULL,'item',10204,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(64,'table',NULL,'item',10206,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(65,'table',NULL,'item',10207,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(66,'table',NULL,'item',10208,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(67,'table',NULL,'item',10209,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(68,'table',NULL,'item',10210,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(69,'table',NULL,'item',10211,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(70,'table',NULL,'item',10212,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(71,'table',NULL,'item',10213,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(72,'table',NULL,'item',10214,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(73,'table',NULL,'item',10215,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(74,'table',NULL,'item',10216,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(75,'table',NULL,'item',10217,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(76,'table',NULL,'item',10218,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(77,'table',NULL,'item',10219,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(78,'table',NULL,'item',10220,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(79,'table',NULL,'item',10221,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(80,'table',NULL,'item',10222,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(81,'table',NULL,'item',10223,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(83,'table',NULL,'item',10226,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(84,'table',NULL,'item',10227,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(85,'table',NULL,'item',10228,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(86,'table',NULL,'item',10229,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(87,'table',NULL,'item',10230,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(88,'table',NULL,'item',10231,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(89,'table',NULL,'item',10232,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(90,'table',NULL,'item',10233,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(91,'table',NULL,'item',10234,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(92,'table',NULL,'item',10235,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(93,'table',NULL,'item',10236,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(94,'table',NULL,'item',10237,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(95,'table',NULL,'item',10238,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(96,'table',NULL,'item',10239,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(97,'table',NULL,'item',10240,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(98,'table',NULL,'item',10241,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(99,'table',NULL,'item',10242,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(100,'table',NULL,'item',10243,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(101,'table',NULL,'item',10244,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(102,'table',NULL,'item',10245,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(103,'table',NULL,'item',62392,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(104,'table',NULL,'item',62393,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(106,'table',NULL,'item',10247,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(107,'table',NULL,'item',10248,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(108,'table',NULL,'item',10249,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(109,'table',NULL,'item',10250,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00','IT'),(110,'table',NULL,'item',10251,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00',''),(111,'table',NULL,'item',10252,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00','CLUSTER'),(112,'table',NULL,'item',10253,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00','CLUSTER'),(113,'table',NULL,'item',10254,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00','648'),(114,'table',NULL,'item',10255,'1','2021-10-04 00:00:00','1','2021-10-04 00:00:00','659');
/*!40000 ALTER TABLE `sf_item_inv_category` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:48:52
