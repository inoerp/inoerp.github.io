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
-- Table structure for table `inv_onhand`
--

DROP TABLE IF EXISTS `inv_onhand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inv_onhand` (
  `onhand_id` int NOT NULL AUTO_INCREMENT,
  `inv_item_master_id` int DEFAULT NULL,
  `revision_name` varchar(10) DEFAULT NULL,
  `org_id` int NOT NULL,
  `sub_inventory` varchar(25) NOT NULL,
  `locator_id` int DEFAULT NULL,
  `lot_id` int DEFAULT NULL,
  `serial_id` int DEFAULT NULL,
  `onhand` float NOT NULL,
  `reservable_onhand` float NOT NULL,
  `transactable_onhand` float NOT NULL,
  `lot_status` varchar(25) DEFAULT NULL,
  `serial_status` varchar(25) DEFAULT NULL,
  `uom_code` varchar(25) DEFAULT NULL,
  `secondary_uom_id` int DEFAULT NULL,
  `onhand_status` varchar(25) DEFAULT NULL,
  `ef_id` int DEFAULT NULL,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`onhand_id`),
  UNIQUE KEY `item_id_m` (`inv_item_master_id`,`revision_name`,`org_id`,`sub_inventory`,`locator_id`)
) ENGINE=InnoDB AUTO_INCREMENT=240 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_onhand`
--

LOCK TABLES `inv_onhand` WRITE;
/*!40000 ALTER TABLE `inv_onhand` DISABLE KEYS */;
INSERT INTO `inv_onhand` VALUES (2,4,NULL,1,'2',7,NULL,NULL,3998,3998,3998,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(4,4,NULL,1,'3',9,NULL,NULL,19,10,10,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(12,3,NULL,1,'3',9,NULL,NULL,1000,1000,1000,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(28,6,NULL,1,'2',NULL,NULL,NULL,29,5,5,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(29,6,NULL,1,'2',5,NULL,NULL,76,5,5,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(30,6,NULL,1,'3',9,NULL,NULL,94,4,4,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(31,6,NULL,1,'5',NULL,NULL,NULL,45,45,45,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(32,6,NULL,1,'6',NULL,NULL,NULL,45,45,45,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(49,10034,'',1,'2',5,NULL,NULL,2686,2693,2686,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(50,10050,NULL,1,'2',5,NULL,NULL,12,12,12,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(62,10034,'',1,'3',9,NULL,NULL,630,630,630,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(63,10048,NULL,1,'3',9,NULL,NULL,333,333,333,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(75,10107,NULL,1,'2',5,NULL,NULL,20,20,20,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(76,10107,NULL,1,'3',9,NULL,NULL,333,333,333,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(78,10107,NULL,1,'13',17,NULL,NULL,42,42,42,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(79,10092,NULL,1,'3',9,NULL,NULL,375,375,375,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(80,10107,NULL,1,'1',14,NULL,NULL,0,0,0,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(81,10095,'',1,'2',5,NULL,NULL,796,796,796,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(94,10092,NULL,2,'38',NULL,NULL,NULL,21,21,21,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(95,10092,NULL,4,'39',NULL,NULL,NULL,4,4,4,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(96,10089,'',1,'2',5,NULL,NULL,1984,1975,1984,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(97,10098,NULL,1,'2',5,NULL,NULL,19,19,19,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(98,10092,NULL,1,'2',5,NULL,NULL,61,64,61,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(99,10089,NULL,1,'3',9,NULL,NULL,0,0,0,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(100,10120,NULL,1,'2',5,NULL,NULL,0,0,0,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(101,10120,NULL,2,'38',NULL,NULL,NULL,7,7,7,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(102,10098,NULL,1,'3',12,NULL,NULL,-1,-1,-1,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(103,10098,NULL,1,'3',9,NULL,NULL,-6,-6,-6,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(105,10036,'',1,'2',5,NULL,NULL,730,730,730,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(106,10036,NULL,1,'3',9,NULL,NULL,165,165,165,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(107,10130,NULL,1,'2',5,NULL,NULL,284,284,284,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(108,10130,NULL,1,'3',9,NULL,NULL,2,2,2,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(109,10130,NULL,2,'38',NULL,NULL,NULL,12,12,12,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(110,10130,NULL,1,'2',6,NULL,NULL,4,4,4,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(111,10133,NULL,1,'12',NULL,NULL,NULL,1,1,1,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(115,10120,'001',1,'2',5,NULL,NULL,6,6,6,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(118,10137,'001',1,'2',5,NULL,NULL,17,17,17,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(119,10137,'001',1,'3',9,NULL,NULL,7,7,7,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(120,10120,'001',1,'3',9,NULL,NULL,2,2,2,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(121,10139,NULL,1,'3',9,NULL,NULL,1,1,1,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(122,10137,NULL,1,'2',6,NULL,NULL,0,0,0,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(123,10120,'001',1,'3',12,NULL,NULL,2,2,2,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(129,10137,NULL,1,'5',NULL,NULL,NULL,1,1,1,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(130,10137,NULL,2,'38',NULL,NULL,NULL,3,3,3,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(131,10137,'001',1,'3',12,NULL,NULL,-1,-1,-1,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(132,10137,NULL,1,'2',16,NULL,NULL,2,2,2,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(133,10148,NULL,16,'40',18,NULL,NULL,2,2,2,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(136,10092,NULL,1,'2',6,NULL,NULL,1,1,1,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(137,10034,NULL,1,'13',17,NULL,NULL,-154,-154,-154,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(138,10137,'001',1,'2',6,NULL,NULL,-2,-2,-2,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(145,10098,NULL,1,'2',0,NULL,NULL,-2,-2,-2,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(146,10154,'',1,'2',5,NULL,NULL,1,1,1,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(147,10034,NULL,1,'2',15,NULL,NULL,-10,-10,-10,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(148,10109,NULL,1,'3',9,NULL,NULL,483,488,483,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(149,10109,'',1,'2',5,NULL,NULL,6,6,6,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(150,10154,NULL,1,'2',6,NULL,NULL,1,1,1,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(151,10139,'001',1,'2',5,NULL,NULL,1,1,1,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(152,10169,NULL,1,'2',5,NULL,NULL,97.5,97.5,97.5,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(153,10167,NULL,1,'3',9,NULL,NULL,0.4,0.4,0.4,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(154,10160,NULL,1,'3',9,NULL,NULL,2,2,2,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(155,10034,NULL,1,'12',NULL,NULL,NULL,0,0,0,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(156,10089,NULL,1,'12',NULL,NULL,NULL,0,0,0,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(157,10092,NULL,1,'13',17,NULL,NULL,34,34,34,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(158,10089,'',1,'13',17,NULL,NULL,-80,-80,-80,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(159,10095,NULL,1,'13',17,NULL,NULL,3,3,3,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(160,10034,'',1,'1',0,NULL,NULL,0,0,0,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(161,10201,'',1,'2',5,NULL,NULL,4,11,4,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(163,10201,NULL,1,'3',9,NULL,NULL,0,1,0,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(179,10034,'',2,'38',NULL,NULL,NULL,20,10,20,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(180,10036,NULL,1,'1',1,NULL,NULL,1,1,1,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(181,10034,NULL,1,'1',1,NULL,NULL,0,0,0,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(182,10201,NULL,1,'1',1,NULL,NULL,8,0,8,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(183,10206,'',3,'2',5,NULL,NULL,15,0,15,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(184,10034,NULL,3,'12',NULL,NULL,NULL,10,0,10,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(185,10206,'',1,'2',6,NULL,NULL,0,0,0,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(186,10206,NULL,1,'1',1,NULL,NULL,7,0,7,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(187,10208,NULL,1,'2',5,NULL,NULL,0,0,0,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(193,10208,NULL,1,'1',1,NULL,NULL,5,0,5,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(194,10206,NULL,1,'2',5,NULL,NULL,2,0,2,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(195,10210,NULL,1,'2',5,NULL,NULL,18,0,18,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(196,10210,NULL,1,'1',1,NULL,NULL,28,0,28,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(197,10212,NULL,1,'2',5,NULL,NULL,0,0,0,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(199,10212,NULL,1,'1',1,NULL,NULL,3,0,3,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(200,10214,NULL,3,'2',5,NULL,NULL,5,0,5,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(201,10216,'',1,'2',5,NULL,NULL,3,0,3,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(202,10214,'',1,'2',5,NULL,NULL,3,0,3,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(203,10216,NULL,1,'1',1,NULL,NULL,0,0,0,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(204,10214,NULL,1,'1',1,NULL,NULL,1,0,1,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(205,10232,'',1,'2',5,NULL,NULL,993,0,993,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(207,10232,NULL,1,'3',9,NULL,NULL,1,0,1,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(208,10232,NULL,1,'2',6,NULL,NULL,0,0,0,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(217,10232,NULL,1,'1',1,NULL,NULL,111,0,111,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(218,10238,NULL,1,'2',5,NULL,NULL,1000,0,1000,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(220,10240,NULL,1,'2',5,NULL,NULL,1,0,1,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(221,10240,NULL,1,'12',NULL,NULL,NULL,0,0,0,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(222,10240,NULL,1,'1',1,NULL,NULL,0,0,0,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(223,10042,NULL,1,'2',5,NULL,NULL,0,0,0,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(224,10234,NULL,1,'2',5,NULL,NULL,93,0,93,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(226,10092,NULL,1,'12',NULL,NULL,NULL,66,0,66,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(227,10092,NULL,1,'1',1,NULL,NULL,11,0,11,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(228,10201,NULL,2,'38',NULL,NULL,NULL,88,0,88,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(229,10046,'',1,'2',0,NULL,NULL,24,0,24,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(230,10046,'',1,'2',5,NULL,NULL,24,0,24,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(231,1,'',1,'2',5,NULL,NULL,84,0,84,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(232,1,NULL,1,'2',0,NULL,NULL,12,0,12,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(235,10201,NULL,2,'42',0,NULL,NULL,0,0,0,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(236,10038,NULL,2,'38',NULL,NULL,NULL,95,0,95,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(237,10038,NULL,2,'42',0,NULL,NULL,0,0,0,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(238,10038,NULL,1,'2',5,NULL,NULL,1,0,1,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05'),(239,3,NULL,1,'2',5,NULL,NULL,1,0,1,NULL,NULL,'Ea',NULL,NULL,NULL,'1','2021-10-04 12:31:52','1','2021-10-04 12:38:05');
/*!40000 ALTER TABLE `inv_onhand` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:48:22