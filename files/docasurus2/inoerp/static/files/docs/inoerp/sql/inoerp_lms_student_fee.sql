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
-- Table structure for table `lms_student_fee`
--

DROP TABLE IF EXISTS `lms_student_fee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lms_student_fee` (
  `lms_student_fee_id` int unsigned NOT NULL AUTO_INCREMENT,
  `lms_student_id` int NOT NULL,
  `lms_fee_struct_header_id` int NOT NULL,
  `currency` varchar(25) DEFAULT NULL,
  `fee_amount` decimal(20,5) DEFAULT NULL,
  `status` varchar(25) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `paid_amount` decimal(20,5) DEFAULT NULL,
  `tax_amount` decimal(20,5) DEFAULT NULL,
  `invoice_status` varchar(25) DEFAULT NULL,
  `ar_transaction_header_id` int DEFAULT NULL,
  `payment_status` varchar(25) DEFAULT NULL,
  `ar_receipt_header_id` int DEFAULT NULL,
  `tax_ac_id` int NOT NULL,
  `effective_start_date` date NOT NULL,
  `effective_end_date` date DEFAULT NULL,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`lms_student_fee_id`),
  UNIQUE KEY `gl_calendar_id` (`lms_fee_struct_header_id`,`description`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lms_student_fee`
--

LOCK TABLES `lms_student_fee` WRITE;
/*!40000 ALTER TABLE `lms_student_fee` DISABLE KEYS */;
/*!40000 ALTER TABLE `lms_student_fee` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:49:00
