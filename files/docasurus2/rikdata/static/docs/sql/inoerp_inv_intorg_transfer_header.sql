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
-- Table structure for table `inv_intorg_transfer_header`
--

DROP TABLE IF EXISTS `inv_intorg_transfer_header`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inv_intorg_transfer_header` (
  `inv_intorg_transfer_header_id` int NOT NULL AUTO_INCREMENT,
  `order_number` varchar(25) DEFAULT NULL,
  `comment` varchar(256) DEFAULT NULL,
  `from_org_id` int NOT NULL,
  `transaction_type_id` int DEFAULT NULL,
  `to_org_id` int NOT NULL,
  `status` varchar(25) DEFAULT NULL,
  `transfer_to_gl` tinyint(1) DEFAULT NULL,
  `transaction_date` date DEFAULT NULL,
  `carrier` varchar(256) DEFAULT NULL,
  `vehicle_number` varchar(256) DEFAULT NULL,
  `waybill` varchar(50) DEFAULT NULL,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`inv_intorg_transfer_header_id`),
  UNIQUE KEY `order_number` (`order_number`)
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_intorg_transfer_header`
--

LOCK TABLES `inv_intorg_transfer_header` WRITE;
/*!40000 ALTER TABLE `inv_intorg_transfer_header` DISABLE KEYS */;
INSERT INTO `inv_intorg_transfer_header` VALUES (1,'6-1',' ',6,18,9,NULL,NULL,'2014-08-01',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(2,'6-2',' ',6,18,9,NULL,NULL,'2014-08-01',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(3,'6-3',' ',6,18,9,NULL,NULL,'2014-08-01',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(4,'6-4',' ',6,18,9,NULL,NULL,'2014-08-01',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(5,'6-5',' ',6,18,9,NULL,NULL,'2014-08-01',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(6,'6-6',' ',6,18,9,NULL,NULL,'2014-08-01',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(7,'6-7',' ',6,18,9,NULL,NULL,'2014-08-01',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(8,'6-8',' ',6,18,9,NULL,NULL,'2014-08-01',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(9,'6-9',' ',6,18,9,NULL,NULL,'2014-08-01',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(10,'6-10',' ',6,18,9,NULL,NULL,'2014-08-01',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(11,'6-11',' ',6,18,9,NULL,NULL,'2014-08-01',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(12,'6-12',' ',6,18,9,NULL,NULL,'2014-08-01',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(13,'6-13',' ',6,18,9,NULL,NULL,'2014-08-01',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(14,'6-14',' ',6,18,9,NULL,NULL,'2014-08-01',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(15,'6-15',' ',6,18,9,NULL,NULL,'2014-08-01',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(16,'6-16',' ',6,18,9,NULL,NULL,'2014-08-01',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(17,'6-17',' ',6,18,9,NULL,NULL,'2014-08-01',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(18,'6-18',' ',6,18,9,NULL,NULL,'2014-08-01',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(19,'6-19',' ',6,18,9,NULL,NULL,'2014-08-01',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(20,'6-20',' ',6,18,9,NULL,NULL,'2014-08-01',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(21,'6-21',' ',6,18,9,NULL,NULL,'2014-08-01',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(22,'6-22',' ',6,18,9,NULL,NULL,'2014-08-01',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(23,'6-23',' ',6,18,9,NULL,NULL,'2014-08-01',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(24,'6-24',' ',6,18,9,NULL,NULL,'2014-08-01',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(25,'6-25',' ',6,18,9,NULL,NULL,'2014-08-01',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(26,'6-26',' ',6,18,11,NULL,NULL,'2014-08-02',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(27,'6-27',' ',6,18,11,NULL,NULL,'2014-08-02',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(28,'6-28',' ',6,18,11,NULL,NULL,'2014-08-02',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(29,'6-29',' ',6,18,11,NULL,NULL,'2014-08-02',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(30,'6-30',' ',6,18,11,NULL,NULL,'2014-08-02',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(31,'6-31',' ',6,18,11,NULL,NULL,'2014-08-03',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(32,'6-32',NULL,6,18,9,NULL,NULL,'2014-09-20',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(33,'6-33',NULL,6,18,9,NULL,NULL,'2014-09-20',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(34,'6-34',NULL,6,18,9,NULL,NULL,'2014-09-20',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(35,'6-35',NULL,6,18,9,NULL,NULL,'2014-09-20',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(36,'6-36',NULL,6,18,9,NULL,NULL,'2014-09-20',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(37,'6-37',NULL,6,18,9,NULL,NULL,'2014-09-20',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(38,'6-38',NULL,6,18,9,NULL,NULL,'2014-09-20',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(39,'6-39',NULL,6,18,9,NULL,NULL,'2014-10-04',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(40,'6-40',NULL,6,18,9,NULL,NULL,'2014-10-04',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(41,'6-41',' ',6,18,9,NULL,NULL,'2014-10-04',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(42,'6-42',' ',6,18,9,NULL,NULL,'2014-10-04',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(43,'6-43',' ',6,18,9,NULL,NULL,'2014-10-04',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(44,'6-44',' ',6,18,9,NULL,NULL,'2014-10-04',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(45,'6-45',' ',6,18,9,NULL,NULL,'2014-10-04',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(46,'6-46',' ',6,18,9,NULL,NULL,'2014-10-04',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(47,'6-47',' ',6,18,9,NULL,NULL,'2014-10-04',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(48,'6-48',' ',6,18,9,NULL,NULL,'2014-10-04',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(49,'6-49',' ',6,18,9,NULL,NULL,'2014-11-06',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(50,'6-50',NULL,6,18,9,NULL,NULL,'2014-11-16',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(51,'6-51',NULL,6,18,11,NULL,NULL,'2014-12-28',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(52,'6-52',' ',6,18,9,NULL,NULL,'2015-07-12',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(53,'6-53',NULL,6,19,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(54,'6-54',NULL,6,18,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(56,'6-56',' ',6,18,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(57,'6-57',' ',6,18,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(58,'6-58',' ',6,18,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(59,'6-59',' ',6,18,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(60,'6-60',' ',6,18,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(61,'6-61',' ',6,18,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(62,'6-62',' ',6,18,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(63,'6-63',' ',6,18,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(64,'6-64',' ',6,18,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(65,'6-65',' ',6,18,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(66,'6-66',' ',6,18,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(67,'6-67',' ',6,18,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(68,'6-68',' ',6,18,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(69,'6-69',' ',6,18,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(71,'6-71',' ',6,18,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(72,'6-72',' ',6,18,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(73,'6-73',' ',6,18,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(74,'6-74',' ',6,18,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(75,'6-75',' ',6,18,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(76,'6-76',' ',6,18,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(77,'6-77',' ',6,19,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(78,'6-78',' ',6,18,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(79,'6-79',NULL,6,18,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(80,'6-80',' ',6,19,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(81,'6-81',' ',6,19,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(82,'6-82',' ',6,19,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(83,'6-83',' ',6,19,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(84,'6-84',' ',6,19,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(85,'6-85',' ',6,19,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(86,'6-86',' ',6,19,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(87,'6-87',' ',6,19,9,NULL,NULL,'2015-07-13',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(88,'6-88',' ',6,19,9,NULL,NULL,'2015-07-14',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(89,'6-89',' ',6,19,9,NULL,NULL,'2015-07-14',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(90,'6-90',' ',6,19,9,NULL,NULL,'2015-07-14',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(91,'6-91',NULL,6,18,9,NULL,NULL,'2015-07-14',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(92,'6-92',' ',6,18,9,NULL,NULL,'2015-07-14',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(93,'6-93',' ',6,18,9,NULL,NULL,'2015-07-14',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(94,'6-94',' ',6,18,9,NULL,NULL,'2015-07-14',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(95,'6-95',' ',6,18,9,NULL,NULL,'2015-07-14',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(96,'6-96',NULL,6,19,9,NULL,NULL,'2015-07-14',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(97,'6-97',NULL,6,19,9,NULL,NULL,'2015-07-14',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(98,'6-98',' ',6,19,9,NULL,NULL,'2015-07-14',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(99,'6-99',' ',6,19,9,NULL,NULL,'2015-07-14',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(100,'6-100',' ',6,19,9,NULL,NULL,'2015-07-14',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(101,'6-101',' ',6,19,9,NULL,NULL,'2015-07-14',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(102,'6-102',' ',6,19,9,NULL,NULL,'2015-07-14',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(103,'6-103',' ',6,19,9,NULL,NULL,'2015-07-31',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(104,'6-104',' ',6,19,9,NULL,NULL,'2015-07-14',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(105,'6-105',NULL,6,18,9,NULL,NULL,'2016-08-25',NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03');
/*!40000 ALTER TABLE `inv_intorg_transfer_header` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:48:58
