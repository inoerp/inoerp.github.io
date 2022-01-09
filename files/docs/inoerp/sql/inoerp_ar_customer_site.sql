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
-- Table structure for table `ar_customer_site`
--

DROP TABLE IF EXISTS `ar_customer_site`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ar_customer_site` (
  `ar_customer_site_id` int NOT NULL AUTO_INCREMENT,
  `ar_customer_id` int NOT NULL,
  `customer_site_number` int NOT NULL,
  `customer_site_name` varchar(60) NOT NULL,
  `site_tax_country` varchar(256) DEFAULT NULL,
  `site_tax_reg_no` varchar(100) DEFAULT NULL,
  `site_tax_payer_id` varchar(100) DEFAULT NULL,
  `primary_cb` tinyint(1) DEFAULT NULL,
  `customer_site_ref` varchar(30) DEFAULT NULL,
  `customer_site_type` varchar(12) DEFAULT NULL,
  `status` varchar(12) DEFAULT NULL,
  `profile_id` int DEFAULT NULL,
  `currency` varchar(12) DEFAULT NULL,
  `payment_term_id` int DEFAULT NULL,
  `finance_profile_id` int unsigned DEFAULT NULL,
  `payment_method_id` int DEFAULT NULL,
  `order_type_id` int DEFAULT NULL,
  `price_list_id` int DEFAULT NULL,
  `internal_org_id` int DEFAULT NULL,
  `fob` varchar(50) DEFAULT NULL,
  `freight_terms` int DEFAULT NULL,
  `transportation` varchar(50) DEFAULT NULL,
  `country_of_origin` varchar(50) DEFAULT NULL,
  `ship_to_id` int DEFAULT NULL,
  `bill_to_id` int DEFAULT NULL,
  `site_contact_id` int DEFAULT NULL,
  `customer_site_attachement_id` int DEFAULT NULL,
  `ar_sales_region_id` int DEFAULT NULL,
  `bank_id` int DEFAULT NULL,
  `bank_account_id` int DEFAULT NULL,
  `rev_enabled_cb` tinyint(1) DEFAULT NULL,
  `rev_number` int DEFAULT NULL,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gl_ac_profile_header_id` int DEFAULT NULL,
  PRIMARY KEY (`ar_customer_site_id`),
  UNIQUE KEY `customer_site_number` (`customer_site_number`),
  UNIQUE KEY `ar_customer_id` (`ar_customer_id`,`customer_site_name`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ar_customer_site`
--

LOCK TABLES `ar_customer_site` WRITE;
/*!40000 ALTER TABLE `ar_customer_site` DISABLE KEYS */;
INSERT INTO `ar_customer_site` VALUES (1,1,10,'SPG','IN','REG000202212','23432432',NULL,NULL,'ALL','active',0,'INR',4,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,88,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',8),(2,0,0,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',8),(3,1,201,'MUMBAI','IN','REF001','',NULL,NULL,'ALL','active',NULL,'GBP',2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,85,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',8),(4,2,110,'KOLKATA','IN','REG001',NULL,NULL,NULL,'ALL',NULL,NULL,'GBP',2,NULL,NULL,1,1,6,NULL,NULL,NULL,'IN',86,83,NULL,NULL,1,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',8),(5,3,21,'Singapore','IN',NULL,NULL,NULL,NULL,'ALL','active',NULL,'SGD',1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,88,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',8),(6,1,121,'TEST88',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',8),(7,1,1211,'TEST11',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',8),(8,1,32312,'wereqr',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',8),(9,1,1122,'zzaa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',8),(11,1,1123,'zzab',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',8);
/*!40000 ALTER TABLE `ar_customer_site` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:47:51
