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
-- Table structure for table `pos_transaction_line`
--

DROP TABLE IF EXISTS `pos_transaction_line`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pos_transaction_line` (
  `pos_transaction_line_id` int NOT NULL AUTO_INCREMENT,
  `pos_transaction_header_id` int NOT NULL,
  `item_number` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `unit_price` decimal(12,2) DEFAULT NULL,
  `quantity` decimal(12,5) DEFAULT NULL,
  `line_amount` decimal(12,2) DEFAULT NULL,
  `discount_percentage` decimal(5,2) DEFAULT NULL,
  `discount_amount` decimal(12,2) DEFAULT NULL,
  `discount_code` varchar(25) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `amount_after_discount` decimal(15,5) DEFAULT NULL,
  `status` varchar(2) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`pos_transaction_line_id`),
  UNIQUE KEY `pos_transaction_header_id` (`pos_transaction_header_id`,`item_number`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pos_transaction_line`
--

LOCK TABLES `pos_transaction_line` WRITE;
/*!40000 ALTER TABLE `pos_transaction_line` DISABLE KEYS */;
INSERT INTO `pos_transaction_line` VALUES (1,1,'MI_DESKTOPA01',200.00,1.00000,2.00,NULL,200.00,'10',1.00000,'S','1','2021-10-04 12:31:59','1','2021-10-04 12:38:17'),(2,1,'MI_ABC001',100.00,1.00000,200.00,NULL,NULL,NULL,200.00000,'S','1','2021-10-04 12:31:59','1','2021-10-04 12:38:17'),(5,6,'MI_ABC001',25.00,2.00000,50.00,NULL,NULL,NULL,50.00000,'S','1','2021-10-04 12:31:59','1','2021-10-04 12:38:17'),(6,8,'MI_ABC001',10.00,1.00000,10.00,NULL,NULL,NULL,10.00000,'S','1','2021-10-04 12:31:59','1','2021-10-04 12:38:17'),(7,8,'MI_DESKTOPA01',30.00,3.00000,90.00,NULL,NULL,NULL,90.00000,'S','1','2021-10-04 12:31:59','1','2021-10-04 12:38:17'),(8,12,'MI_ABC001',44.00,3.00000,132.00,NULL,NULL,NULL,132.00000,'S','1','2021-10-04 12:31:59','1','2021-10-04 12:38:17'),(9,12,'MI_DESKTOPA01',30.00,1.00000,30.00,NULL,NULL,NULL,30.00000,'S','1','2021-10-04 12:31:59','1','2021-10-04 12:38:17'),(10,13,'MI_ABC001',100.00,3.00000,300.00,NULL,NULL,NULL,300.00000,'S','1','2021-10-04 12:31:59','1','2021-10-04 12:38:17'),(11,13,'MI_DESKTOPA01',200.00,2.00000,400.00,NULL,NULL,NULL,400.00000,'S','1','2021-10-04 12:31:59','1','2021-10-04 12:38:17'),(12,16,'MI_DESKTOPA01',30.00,3.00000,90.00,NULL,NULL,NULL,90.00000,'S','1','2021-10-04 12:31:59','1','2021-10-04 12:38:17'),(13,16,'MI_ABC001',100.00,2.00000,200.00,NULL,NULL,NULL,200.00000,'S','1','2021-10-04 12:31:59','1','2021-10-04 12:38:17'),(14,23,'MI_ABC001',111.00,3.00000,333.00,NULL,NULL,NULL,333.00000,'S','1','2021-10-04 12:31:59','1','2021-10-04 12:38:17'),(16,24,'MI_DESKTOPA01',100.00,1.00000,100.00,NULL,NULL,NULL,100.00000,'S','1','2021-10-04 12:31:59','1','2021-10-04 12:38:17'),(17,24,'MI_ABC001',340.00,2.00000,680.00,NULL,NULL,NULL,680.00000,'S','1','2021-10-04 12:31:59','1','2021-10-04 12:38:17'),(18,25,'mi_abc',200.00,2.00000,400.00,NULL,NULL,NULL,400.00000,NULL,'1','2021-10-04 12:31:59','1','2021-10-04 12:38:17'),(19,25,'asdasd',202.00,1.00000,404.00,NULL,NULL,NULL,404.00000,NULL,'1','2021-10-04 12:31:59','1','2021-10-04 12:38:17'),(20,25,'BIX',210.00,1.00000,210.00,NULL,NULL,NULL,210.00000,NULL,'1','2021-10-04 12:31:59','1','2021-10-04 12:38:17'),(21,28,'sdfsd',22.00,12.00000,264.00,NULL,NULL,NULL,264.00000,NULL,'1','2021-10-04 12:31:59','1','2021-10-04 12:38:17'),(22,28,'dfdsf',12.00,3.00000,36.00,NULL,NULL,NULL,36.00000,NULL,'1','2021-10-04 12:31:59','1','2021-10-04 12:38:17'),(23,31,'sdfasdf',234.00,12.00000,2808.00,NULL,NULL,NULL,2808.00000,NULL,'1','2021-10-04 12:31:59','1','2021-10-04 12:38:17');
/*!40000 ALTER TABLE `pos_transaction_line` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:48:37
