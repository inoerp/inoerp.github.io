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
-- Table structure for table `inv_intorg_transfer_line`
--

DROP TABLE IF EXISTS `inv_intorg_transfer_line`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inv_intorg_transfer_line` (
  `inv_intorg_transfer_line_id` int NOT NULL AUTO_INCREMENT,
  `inv_intorg_transfer_header_id` int NOT NULL,
  `transaction_type_id` int NOT NULL,
  `line_number` int DEFAULT NULL,
  `from_subinventory_id` int NOT NULL,
  `from_locator_id` int DEFAULT NULL,
  `inv_item_master_id` int DEFAULT NULL,
  `revision_name` varchar(10) DEFAULT NULL,
  `item_description` varchar(256) DEFAULT NULL,
  `status` varchar(25) DEFAULT NULL,
  `uom_id` int DEFAULT NULL,
  `to_subinventory_id` int DEFAULT NULL,
  `to_locator_id` int DEFAULT NULL,
  `transaction_quantity` int NOT NULL,
  `received_quantity` decimal(15,5) DEFAULT NULL,
  `description` varchar(256) DEFAULT NULL,
  `reason` varchar(50) DEFAULT NULL,
  `reference_type` varchar(25) DEFAULT NULL,
  `reference_key_name` varchar(50) DEFAULT NULL,
  `reference_key_value` varchar(50) DEFAULT NULL,
  `lot_number` varchar(256) DEFAULT NULL,
  `serial_number` varchar(256) DEFAULT NULL,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`inv_intorg_transfer_line_id`)
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_intorg_transfer_line`
--

LOCK TABLES `inv_intorg_transfer_line` WRITE;
/*!40000 ALTER TABLE `inv_intorg_transfer_line` DISABLE KEYS */;
INSERT INTO `inv_intorg_transfer_line` VALUES (1,1,18,NULL,3,9,10092,NULL,'Sub Assembly 01',NULL,27,38,NULL,10,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(2,2,18,NULL,3,9,10092,NULL,'Sub Assembly 01','Error',NULL,38,NULL,12,NULL,'','','','','','','','1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(3,3,18,NULL,3,9,10092,NULL,'Sub Assembly 01','Error',NULL,38,NULL,12,NULL,'','','','','','','','1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(4,4,18,NULL,3,9,10092,NULL,'Sub Assembly 01','Error',27,38,NULL,12,NULL,'','','','','','','','1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(5,5,18,NULL,3,9,10107,NULL,'MI_SA03','Error',27,38,NULL,5,NULL,'','','','','','','','1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(6,6,18,NULL,3,9,10092,NULL,'Sub Assembly 01','Error',27,38,NULL,11,NULL,'','','','','','','','1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(7,7,18,NULL,3,9,10092,NULL,'Sub Assembly 01','Error',27,0,NULL,11,NULL,'','','','','','','','1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(8,8,18,NULL,3,9,10092,NULL,'Sub Assembly 01','Error',27,38,NULL,11,NULL,'','','','','','','','1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(9,9,18,NULL,3,9,10092,NULL,'Sub Assembly 01','Error',27,38,NULL,12,NULL,'','','','','','','','1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(10,10,18,NULL,3,9,10092,NULL,'Sub Assembly 01','Error',27,38,NULL,12,NULL,'','','','','','','','1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(11,11,18,NULL,3,9,10092,NULL,'Sub Assembly 01','Error',27,38,NULL,12,NULL,'','','','','','','','1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(12,12,18,NULL,3,9,10092,NULL,'Sub Assembly 01','Error',27,38,NULL,11,NULL,'','','','','','','','1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(13,13,18,NULL,3,9,10092,NULL,'Sub Assembly 01','Error',27,38,NULL,12,NULL,'','','','','','','','1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(14,15,18,NULL,3,9,10092,NULL,'Sub Assembly 01','Error',27,38,NULL,12,NULL,'','','','','','','','1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(15,16,18,NULL,3,9,10092,NULL,'Sub Assembly 01','Error',27,38,NULL,12,NULL,'','','','','','','','1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(16,17,18,NULL,3,9,10092,NULL,'Sub Assembly 01','Error',27,38,NULL,12,NULL,'','','','','','','','1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(17,18,18,NULL,3,9,10092,NULL,'Sub Assembly 01','Error',27,38,NULL,12,NULL,'','','','','','','','1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(18,19,18,NULL,3,9,10092,NULL,'Sub Assembly 01','Error',27,38,NULL,12,NULL,'','','','','','','','1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(19,20,18,NULL,3,9,10092,NULL,'Sub Assembly 01','Error',27,38,NULL,2,NULL,'','','','','','','','1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(20,21,18,NULL,3,9,10092,NULL,'Sub Assembly 01','Error',27,38,NULL,1,NULL,'','','','','','','','1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(21,22,18,NULL,3,9,10092,NULL,'Sub Assembly 01','Error',27,38,NULL,1,NULL,'','','','','','','','1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(22,23,18,NULL,3,9,10092,NULL,'Sub Assembly 01','Error',27,38,NULL,2,NULL,'','','','','','','','1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(23,24,18,NULL,3,9,10092,NULL,'Sub Assembly 01','Error',27,38,NULL,2,NULL,'','','','','','','','1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(24,25,18,NULL,3,9,10092,NULL,'Sub Assembly 01','Error',27,38,NULL,1,NULL,'','','','','','','','1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(25,26,18,NULL,3,9,10092,NULL,'Sub Assembly 01','Error',NULL,39,NULL,1,NULL,'','','','','','','','1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(26,27,18,NULL,3,9,10092,NULL,'Sub Assembly 01','Error',27,39,NULL,1,NULL,'','','','','','','','1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(27,28,18,NULL,3,9,10092,NULL,'Sub Assembly 01','Error',27,39,NULL,1,NULL,'','','','','','','','1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(28,29,18,NULL,3,9,10092,NULL,'Sub Assembly 01','Error',27,39,NULL,1,NULL,'','','','','','','','1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(29,30,18,NULL,3,9,10092,NULL,'Sub Assembly 01','Error',27,39,NULL,1,NULL,'','','','','','','','1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(30,31,18,NULL,3,9,10092,NULL,'Sub Assembly 01','Error',27,39,0,1,NULL,'','','','','','','','1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(32,33,18,NULL,2,5,10120,NULL,'Laser Pur 001','Error',NULL,38,NULL,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(33,34,18,NULL,2,5,10120,NULL,'Laser Pur 001','Error',NULL,38,NULL,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(35,35,18,NULL,2,5,10120,NULL,'Laser Pur 001','Error',NULL,38,NULL,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(36,36,18,NULL,2,5,10120,NULL,'Laser Pur 001','Error',27,38,NULL,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(38,37,18,NULL,2,5,10120,NULL,'Laser Pur 001','Error',27,38,NULL,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(39,38,18,NULL,2,5,10120,NULL,'Laser Pur 001','Error',27,38,NULL,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(40,39,18,NULL,2,5,10120,NULL,'Laser Pur 001','Error',NULL,38,NULL,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(42,40,18,NULL,2,5,10130,NULL,'MI_CPU03','Error',NULL,38,NULL,2,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(44,41,18,NULL,2,5,10130,NULL,'MI_CPU03','Error',NULL,38,NULL,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(45,42,18,NULL,2,5,10130,NULL,'MI_CPU03','Error',27,38,NULL,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(46,43,18,NULL,2,5,10130,NULL,'MI_CPU03','Error',27,38,NULL,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(47,44,18,NULL,2,5,10130,NULL,'MI_CPU03','Error',27,38,NULL,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(48,45,18,NULL,2,5,10130,NULL,'MI_CPU03','Error',27,38,NULL,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(49,46,18,NULL,2,5,10130,NULL,'MI_CPU03','Error',27,38,NULL,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(50,47,18,NULL,2,5,10130,NULL,'MI_CPU03','Error',27,38,NULL,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(51,48,18,NULL,2,5,10130,NULL,'MI_CPU03','Error',27,38,NULL,3,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(53,49,18,NULL,2,5,10137,'001','MI_PUR99','Error',NULL,38,NULL,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(54,50,18,NULL,2,5,10137,'','MI_PUR99','Error',NULL,38,NULL,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(56,53,19,NULL,2,5,10034,NULL,'Desktop 01 of Model A','ENTERED',NULL,38,NULL,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(57,54,18,1,2,5,10034,NULL,'Desktop 01 of Model A',NULL,NULL,38,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(60,58,18,1,2,5,10034,NULL,'Desktop 01 of Model A',NULL,NULL,38,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(61,59,18,1,2,5,10034,'','Desktop 01 of Model A','ERROR',0,38,0,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(76,73,18,1,2,5,10034,'','Desktop 01 of Model A','ERROR',27,38,NULL,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(77,74,18,1,2,5,10034,'','Desktop 01 of Model A','RECEIVED',27,38,0,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(78,76,18,1,2,5,10034,'','Desktop 01 of Model A','RECEIVED',NULL,38,NULL,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(84,76,18,2,2,5,10137,'','MI_PUR99','RECEIVED',27,38,0,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(85,77,19,1,2,5,10034,NULL,'Desktop 01 of Model A','ENTERED',NULL,38,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(87,79,18,1,2,5,10034,'','Desktop 01 of Model A','RECEIVED',NULL,38,NULL,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(88,80,19,1,2,5,10034,'','Desktop 01 of Model A','RECEIVED',NULL,38,0,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(89,81,19,0,2,5,10034,'','Desktop 01 of Model A','ENTERED',27,38,0,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(90,82,19,0,2,5,10034,'','Desktop 01 of Model A','ENTERED',27,38,0,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(91,83,19,0,2,5,10034,'','Desktop 01 of Model A','ENTERED',27,38,0,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(92,84,19,0,2,5,10034,'','Desktop 01 of Model A','RECEIVED',NULL,38,0,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(93,85,19,0,2,5,10034,'','Desktop 01 of Model A','RECEIVED',NULL,38,0,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(94,86,19,0,2,5,10034,'','Desktop 01 of Model A','RECEIVED',27,38,0,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(95,87,19,0,2,5,10034,'','Desktop 01 of Model A','RECEIVED',27,38,0,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(96,88,19,0,2,5,10034,'','Desktop 01 of Model A','ENTERED',27,38,0,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(97,88,19,0,2,5,10034,'','Desktop 01 of Model A','RECEIVED',27,38,0,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(98,89,19,0,2,5,10034,'','Desktop 01 of Model A','RECEIVED',27,38,0,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(99,90,19,0,2,5,10034,'','Desktop 01 of Model A','RECEIVED',27,38,0,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(100,91,18,1,2,5,10034,'','Desktop 01 of Model A','RECEIVED',NULL,38,NULL,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(101,92,18,1,2,5,10034,'','Desktop 01 of Model A','RECEIVED',0,38,NULL,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(102,98,19,1,2,5,10034,'','Desktop 01 of Model A','ENTERED',27,38,NULL,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(103,99,19,1,2,5,10034,'','Desktop 01 of Model A','RECEIVED',27,38,0,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(104,100,19,1,2,5,10034,'','Desktop 01 of Model A','RECEIVED',27,38,0,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(105,101,19,1,2,5,10034,'','Desktop 01 of Model A','RECEIVED',27,38,0,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(106,102,19,1,2,5,10034,'','Desktop 01 of Model A','RECEIVED',27,38,0,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(107,103,19,1,2,5,10034,'','Desktop 01 of Model A','RECEIVED',27,38,0,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(108,104,19,1,2,5,10034,'','Desktop 01 of Model A','SHIPPED',27,38,0,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(109,103,19,2,2,5,10038,'','MI Monitor A 01','ENTERED',27,38,0,1,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03'),(110,105,18,1,2,5,10034,'','Desktop 01 of Model A','RECEIVED',27,38,NULL,10,NULL,'','','','','',NULL,NULL,'1','2021-10-04 12:31:51','1','2021-10-04 12:38:03');
/*!40000 ALTER TABLE `inv_intorg_transfer_line` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:48:59
