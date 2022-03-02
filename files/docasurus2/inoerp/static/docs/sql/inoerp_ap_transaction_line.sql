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
-- Table structure for table `ap_transaction_line`
--

DROP TABLE IF EXISTS `ap_transaction_line`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ap_transaction_line` (
  `ap_transaction_line_id` int NOT NULL AUTO_INCREMENT,
  `ap_transaction_header_id` int NOT NULL,
  `line_number` int NOT NULL,
  `inv_item_master_id` int DEFAULT NULL,
  `product_description` varchar(256) NOT NULL,
  `line_quantity` decimal(20,5) DEFAULT NULL,
  `unit_price` decimal(20,5) DEFAULT NULL,
  `line_price` decimal(20,5) DEFAULT NULL,
  `tax_code` varchar(50) DEFAULT NULL,
  `tax_amount` decimal(15,5) DEFAULT NULL,
  `line_type` enum('ITEM','FREIGHT','SERVICE','MISC','TAX','') NOT NULL DEFAULT 'SERVICE',
  `line_description` varchar(256) DEFAULT NULL,
  `asset_cb` tinyint(1) DEFAULT NULL,
  `fa_asset_category_id` int DEFAULT NULL,
  `prj_project_header_id` int DEFAULT NULL,
  `prj_project_line_id` int DEFAULT NULL,
  `uom_code` varchar(25) DEFAULT NULL,
  `revenue_ac_id` int DEFAULT NULL,
  `tax_ac_id` int DEFAULT NULL,
  `gl_tax_amount` decimal(15,5) DEFAULT NULL,
  `gl_inv_line_price` decimal(15,5) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `line_source` varchar(25) DEFAULT NULL,
  `reference_type` varchar(25) DEFAULT NULL,
  `reference_key_name` varchar(25) DEFAULT NULL,
  `reference_key_value` varchar(25) DEFAULT NULL,
  `po_header_id` int DEFAULT NULL,
  `po_line_id` int DEFAULT NULL,
  `po_detail_id` int DEFAULT NULL,
  `ref_transaction_header_id` int DEFAULT NULL,
  `ref_transaction_line_id` int DEFAULT NULL,
  `period_id` int DEFAULT NULL,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `line_discount_amount` decimal(15,5) DEFAULT NULL,
  `discount_code` varchar(50) DEFAULT NULL,
  `approval_status` enum('DISABLED','INPROCESS','PENDING','APPROVED','REJECTED','UNKNOWN','') DEFAULT NULL,
  `po_receipt_line_id` int DEFAULT NULL,
  PRIMARY KEY (`ap_transaction_line_id`),
  UNIQUE KEY `ap_transaction_header_id` (`ap_transaction_header_id`,`line_number`)
) ENGINE=InnoDB AUTO_INCREMENT=198 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ap_transaction_line`
--

LOCK TABLES `ap_transaction_line` WRITE;
/*!40000 ALTER TABLE `ap_transaction_line` DISABLE KEYS */;
INSERT INTO `ap_transaction_line` VALUES (1,1,101,10034,'Desktop 01 of Model A',33.00000,5.00000,165.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(2,1,2,10034,'Desktop 01 of Model A',33.00000,5.00000,165.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(3,1,3,10034,'Desktop 01 of Model A',33.00000,5.00000,165.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(4,1,4,10044,'MI Mother Board  A 01',12.00000,12.00000,144.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(5,1,105,10042,'MI Cabinet A 01',22.00000,34.00000,748.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(6,2,11,NULL,'MI Monitor A 01',22.00000,0.38300,222.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,67,68,68,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(7,2,15,NULL,'MI Mobile 03',33.00000,0.37200,212.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,66,67,66,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(8,2,12,NULL,'Desktop 01 of Model A',50.00000,2.00000,100.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,65,64,59,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(9,2,13,NULL,'MI Mobile 03',34.00000,2.00000,68.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'po_header','66',66,66,67,NULL,NULL,16,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(10,2,14,NULL,'MI Mobile 03',5.00000,40.00000,200.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'po_header','66',66,66,67,NULL,NULL,16,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(11,3,1,NULL,'MI Mobile 03',5.00000,10.00000,50.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'po_header','66',66,67,66,NULL,NULL,16,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(12,3,2,NULL,'MI Mobile 03',5.00000,10.00000,50.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'po_header','66',66,66,67,NULL,NULL,16,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(13,4,2,NULL,'MI Level 3 TEST 01',33.00000,10.00000,330.00000,NULL,NULL,'ITEM','retretret',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'po_header','64',64,63,60,NULL,NULL,16,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(14,3,3,NULL,'MI Mobile 03',20.00000,20.00000,400.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'po_header','66',66,66,67,NULL,NULL,16,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(15,3,4,NULL,'MI Mobile 03',10.00000,20.00000,200.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'po_header','66',66,67,66,NULL,NULL,16,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(30,8,9,NULL,'MI Monitor A 01',44.00000,9.44600,415.62400,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,67,68,68,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(31,8,10,NULL,'MI Monitor A 01',44.00000,9.44600,415.62400,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,67,68,68,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(32,8,11,NULL,'MI Level 3 TEST 01',5.00000,22.00000,110.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,67,70,70,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(33,8,12,NULL,'MI Monitor A 01',6.00000,9.44600,56.67600,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,67,68,68,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(34,9,1,NULL,'Desktop 01 of Model A',30.00000,98.00000,2940.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,65,64,59,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(35,10,1,NULL,'MI Monitor A 01',5.00000,9.44600,47.23000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'po_header','67',67,68,68,NULL,NULL,16,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(36,11,1,10048,'MI Level 4 A TEST01',23.00000,9.00000,0.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(38,12,3,NULL,'MI MOBILE 02',25.00000,4.60000,115.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'po_header','68',68,74,72,NULL,NULL,16,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(41,7,9,NULL,'MI Level 3 TEST 01',20.00000,12.00000,240.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Cancelled',NULL,NULL,'po_header','64',64,63,61,NULL,NULL,16,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(42,7,8,10046,'MI Level 3 TEST 01',30.00000,12.00000,360.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,'Cancelled',NULL,NULL,'po_header','64',64,63,61,NULL,NULL,16,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(52,5,1,10038,'MI Monitor A 01',23.00000,23.00000,0.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(54,20,1,10046,'MI Level 3 TEST 01',40.00000,100.00000,4000.00000,'1',408.00000,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(55,21,1,10038,'MI Monitor A 01',232.00000,22.00000,0.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(56,22,1,10042,'MI Cabinet A 01',1.00000,129.23000,157919.06000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(57,20,6,10056,'MI PC MPS 01',44.00000,33.00000,1452.00000,'1',148.10400,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(58,23,2,10048,'MI Level 4 A TEST01',55.00000,1.00000,444.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'po_header','70',70,75,73,NULL,NULL,17,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(60,26,4,10092,'Sub Assembly 01',6.00000,12.00000,72.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'po_header','114',114,128,114,NULL,NULL,19,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(62,28,1,10089,'MI_PUR02',12.00000,99.00000,1188.00000,NULL,NULL,'FREIGHT',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(63,29,1,10089,'MI_PUR02',12.00000,99.00000,1188.00000,NULL,NULL,'FREIGHT',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(64,30,1,10089,'MI_PUR02',12.00000,99.00000,1188.00000,NULL,NULL,'FREIGHT',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(65,31,1,10089,'MI_PUR02',121.00000,700.00000,84700.00000,'1',8639.40000,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(66,32,1,10089,'MI_PUR02',121.00000,100.00000,12100.00000,'1',1234.20000,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(67,32,2,10101,'MI_PUR03',100.00000,980.00000,98000.00000,'1',9996.00000,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(68,33,2,10089,'MI_PUR02',12.00000,12.00000,144.00000,'1',14.68800,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'po_header','191',191,182,157,NULL,NULL,19,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(69,33,3,10098,'MI_PUR001',999.00000,19.70000,19680.30000,'1',2007.39060,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(74,33,8,10089,'MI_PUR02',0.00000,0.00000,0.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,191,182,159,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(75,33,9,10089,'MI_PUR02',0.00000,0.00000,0.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,191,182,159,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(76,33,10,10089,'MI_PUR02',0.00000,0.00000,0.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,191,182,159,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(77,33,11,10089,'MI_PUR02',0.00000,0.00000,0.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,191,182,159,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(78,33,12,10089,'MI_PUR02',0.00000,0.00000,0.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,191,182,159,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(79,33,13,10089,'MI_PUR02',0.00000,0.00000,0.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,191,182,159,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(80,33,14,10089,'MI_PUR02',0.00000,0.00000,0.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,191,182,159,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(81,33,15,10089,'MI_PUR02',0.00000,0.00000,0.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,191,182,159,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(82,33,16,10089,'MI_PUR02',0.00000,0.00000,0.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,191,182,159,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(83,33,17,10089,'MI_PUR02',0.00000,0.00000,0.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,191,182,159,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(84,33,18,10089,'MI_PUR02',0.00000,0.00000,0.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,191,182,159,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(85,33,19,10089,'MI_PUR02',0.00000,0.00000,0.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,191,182,159,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(86,33,20,10089,'MI_PUR02',0.00000,0.00000,0.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,191,182,159,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(87,33,21,10089,'MI_PUR02',0.00000,0.00000,0.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,191,182,159,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(88,33,22,10089,'MI_PUR02',0.00000,0.00000,0.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,191,182,159,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(89,35,1,10089,'MI_PUR02',353.00000,0.00000,0.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,191,182,159,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(90,35,2,10089,'MI_PUR02',353.00000,0.00000,0.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,191,182,159,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(91,35,3,10089,'MI_PUR02',353.00000,0.00000,0.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,191,182,159,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(92,35,4,10089,'MI_PUR02',353.00000,0.00000,0.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,191,182,159,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(93,35,5,10089,'MI_PUR02',353.00000,0.00000,0.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,191,182,159,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(94,35,6,10089,'MI_PUR02',353.00000,0.00000,0.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,191,182,159,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(95,35,7,10089,'MI_PUR02',353.00000,0.00000,0.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,191,182,159,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(96,35,8,10089,'MI_PUR02',NULL,0.00000,0.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,191,182,159,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(97,35,9,10089,'MI_PUR02',NULL,0.00000,0.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,191,182,159,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(98,35,10,10089,'MI_PUR02',NULL,0.00000,0.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,191,182,159,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(99,35,11,10089,'MI_PUR02',NULL,0.00000,0.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,191,182,159,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(193,1,106,10042,'MI Cabinet A 01',22.00000,34.00000,748.00000,NULL,NULL,'ITEM',NULL,NULL,NULL,NULL,NULL,'27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:43','1','2021-10-04 12:37:51',NULL,NULL,NULL,NULL),(194,1,1,10046,'MI Level 3 TEST 01',30.00000,111.00000,3330.00000,NULL,0.00000,'ITEM','fsdfdsfsd',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,64,65,63,NULL,NULL,NULL,'1','2021-12-25 00:00:00','1','2021-12-25 00:00:00',0.00000,NULL,NULL,NULL),(196,4,5,10046,'MI Level 3 TEST 01xx',10.00000,98.00000,980.00000,NULL,0.00000,'ITEM','test01',NULL,NULL,NULL,NULL,'Ea',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,63,NULL,NULL,NULL,'1','2021-12-26 00:00:00','1','2021-12-26 00:00:00',0.00000,NULL,NULL,7),(197,4,7,10046,'MI Level 3 TEST 01xx',5.00000,20.00000,100.00000,NULL,0.00000,'ITEM','test01',NULL,NULL,NULL,NULL,'Ea',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,63,NULL,NULL,NULL,'1','2021-12-26 00:00:00','1','2021-12-26 00:00:00',0.00000,NULL,NULL,7);
/*!40000 ALTER TABLE `ap_transaction_line` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:49:09
