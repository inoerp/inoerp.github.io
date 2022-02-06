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
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `major_category_id` int DEFAULT NULL,
  `parent_id` int DEFAULT NULL,
  `category` varchar(50) NOT NULL DEFAULT 'none',
  `category_type` varchar(25) DEFAULT NULL,
  `content_relation` varchar(25) DEFAULT NULL,
  `priority` int DEFAULT NULL,
  `description` varchar(512) DEFAULT NULL,
  `image_file_id` int DEFAULT NULL,
  `long_description` text,
  `content_block_id` int DEFAULT NULL,
  `filter_catalog_id` int DEFAULT NULL,
  `primary_cb` float DEFAULT '0',
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`category_id`),
  UNIQUE KEY `parent_id` (`parent_id`,`category`)
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,NULL,NULL,'Forum',NULL,NULL,NULL,'Forum - A list of topics for discussion',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(2,1,1,'Support',NULL,NULL,NULL,'Ask the community',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(3,1,2,'Installing inoERP',NULL,NULL,NULL,'Installing inoERP',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(4,NULL,2,'Business Functionalities',NULL,NULL,NULL,'Business functionalities available in inoERP',NULL,NULL,NULL,NULL,0,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(5,1,1,'General',NULL,NULL,NULL,'News and announcement and other general community discussions',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(6,NULL,5,'News and announcements',NULL,NULL,NULL,'News and announcements on the project',NULL,NULL,NULL,NULL,0,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(7,1,5,'General discussion',NULL,NULL,NULL,'For less technical discussions about the Inoerp project',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(8,NULL,NULL,'Issue',NULL,NULL,NULL,'Issue List',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(9,NULL,NULL,'Extension',NULL,NULL,NULL,'Extensions',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(10,8,9,'Content Types',NULL,NULL,NULL,'Content Types',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(11,0,9,'Content_Extension',NULL,NULL,NULL,'Contents',NULL,NULL,NULL,NULL,0,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(12,0,8,'Modules',NULL,NULL,NULL,'Modules',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(14,NULL,12,'System',NULL,NULL,NULL,'Issues related to system & extensions',NULL,NULL,NULL,NULL,0,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(15,NULL,0,'Module',NULL,NULL,NULL,'All Modules',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(16,NULL,15,'Finance',NULL,NULL,NULL,'Finance Modules',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(17,NULL,15,'SCM',NULL,NULL,NULL,'Supply Chain Management',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(18,NULL,3,'Future Feature',NULL,NULL,NULL,'Request & discuss about upcoming features',NULL,NULL,NULL,NULL,0,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(19,NULL,12,'Business Functionalities',NULL,NULL,NULL,'Related to all Supply Chain & Financial Modules',NULL,NULL,NULL,NULL,0,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(21,NULL,NULL,'Content',NULL,NULL,NULL,'All contents',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(24,21,21,'Static',NULL,NULL,NULL,'Static pages',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(26,21,24,'Static2',NULL,NULL,NULL,'Static pages',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(27,21,26,'Static3',NULL,NULL,NULL,'Static pages',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(28,NULL,21,'normal',NULL,NULL,NULL,'normal contents',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(29,0,2,'Snippets',NULL,NULL,NULL,'PHP, C++, JQuery & MySQL Snippets',NULL,NULL,NULL,NULL,0,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(30,NULL,NULL,'Documentation',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(31,NULL,30,'User Guides',NULL,NULL,NULL,'Community Maintained User Guides',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(32,NULL,21,'Snippets',NULL,NULL,NULL,'SQL & PHP Snippets',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(33,NULL,NULL,'Features',NULL,NULL,NULL,'All EMS Module Features',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(34,NULL,29,'Programming Laguage',NULL,NULL,NULL,'PHP & C++ related discussions',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(35,NULL,32,'Programming Laguage',NULL,NULL,NULL,'PHP & C++ related topics',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(36,NULL,31,'Inventory',NULL,NULL,NULL,'Inventory',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(37,NULL,36,'INV Transacion',NULL,NULL,NULL,'Inventory Transactions',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(38,NULL,36,'Item Master',NULL,NULL,NULL,'Item Master',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(39,NULL,36,'Inventory On Hand','DOCUMENTATION',NULL,NULL,'Inventory On Hand',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(40,NULL,36,'Receipt Transaction','DOCUMENTATION',NULL,NULL,'Receipt Transaction',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(41,NULL,31,'Purchasing','DOCUMENTATION',NULL,NULL,'Purchasing',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(42,NULL,31,'Sales & Distribution','DOCUMENTATION',NULL,NULL,'Sales & Distribution',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(43,NULL,31,'Bill Of Materials','DOCUMENTATION',NULL,NULL,'Bill Of Materials',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(44,NULL,31,'WIP & MES','DOCUMENTATION',NULL,NULL,'Work In Process & Manufacturing Execution System',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(45,NULL,31,'Accounts Payable','DOCUMENTATION',NULL,NULL,'Accounts Payable',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(46,NULL,31,'Accounts Receivable','DOCUMENTATION',NULL,NULL,'Accounts Receivable',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(47,NULL,31,'General Ledger','DOCUMENTATION',NULL,NULL,'General Ledger',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(48,NULL,31,'Basics of inoERP','DOCUMENTATION',NULL,1,'Basics of inoERP',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(49,NULL,31,'Forecast & Planning','DOCUMENTATION',NULL,1,'Forecast & Planning',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(50,NULL,NULL,'Projects','DOCUMENTATION',NULL,1,'Projects',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(51,NULL,31,'Project','DOCUMENTATION',NULL,1,'Project',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(52,NULL,NULL,'Entity Structure',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(53,NULL,55,'ap','CONTENT',NULL,NULL,'Accounts Payable',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(54,NULL,55,'ar','CONTENT',NULL,NULL,'Accounts Receviable',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(55,NULL,52,'Modules',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(56,NULL,52,'Extensions',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(57,NULL,55,'gl','CONTENT',NULL,NULL,'General Ledger',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(58,NULL,55,'fa','CONTENT',NULL,NULL,'Fixed Asset',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(59,NULL,55,'cm','CONTENT',NULL,NULL,'Cash Managment',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(60,NULL,55,'inv','CONTENT',NULL,NULL,'Inventory',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(61,NULL,55,'pur','CONTENT',NULL,NULL,'Purchasing',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(62,NULL,55,'sd','CONTENT',NULL,NULL,'Sales & Distribution',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(63,NULL,55,'bom','CONTENT',NULL,NULL,'Bills of Material',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(64,NULL,55,'wip','CONTENT',NULL,NULL,'Work In Process',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(65,NULL,55,'fp','CONTENT',NULL,NULL,'Forecast & Planning',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(66,NULL,55,'sys','CONTENT',NULL,NULL,'System',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(67,NULL,55,'org','CONTENT',NULL,NULL,'Organization',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(68,NULL,55,'hr','CONTENT',NULL,NULL,'Human Resource',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(69,NULL,55,'cc','CONTENT',NULL,NULL,'Change Control',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(70,NULL,56,'da','CONTENT',NULL,NULL,'Document & Analysis',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(71,NULL,55,'pos','CONTENT',NULL,NULL,'Point Of Sale',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(72,NULL,55,'am','CONTENT',NULL,NULL,'Asset Maintenance',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(73,NULL,55,'adm','CONTENT',NULL,NULL,'Admin',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(74,NULL,55,'ec','CONTENT',NULL,NULL,'eCommerce',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(75,NULL,55,'hd','CONTENT',NULL,NULL,'Help Desk',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(76,NULL,55,'cst','CONTENT',NULL,NULL,'Costing',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(77,NULL,55,'prj','CONTENT',NULL,NULL,'Projects',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(78,NULL,55,'qa','CONTENT',NULL,NULL,'Quality',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(79,NULL,55,'pm','CONTENT',NULL,NULL,'Process Manufacturing',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(80,NULL,NULL,'Item Category','ITEM',NULL,NULL,'Item Category',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(81,NULL,80,'Item Category 1','ITEM',NULL,NULL,'Item Category 1',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(82,NULL,80,'Item Category 2','ITEM',NULL,NULL,'Item Category 2',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(83,NULL,81,'Item Category 1A','ITEM',NULL,NULL,'Item Category 1A',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(84,NULL,81,'Item Category 1B','ITEM',NULL,NULL,'Item Category 1B',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(85,NULL,83,'Item Category 1Ai','ITEM',NULL,NULL,'Item Category 1Ai',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(86,NULL,NULL,'Product','PRODUCT',NULL,NULL,'eCommerce Product',NULL,'  ',NULL,NULL,1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(87,NULL,86,'Technology','PRODUCT',NULL,NULL,'Technology Products',NULL,'  ',NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(88,NULL,86,'Home & Garden','PRODUCT',NULL,NULL,'Home & Garden Products',NULL,'  ',NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(89,NULL,86,'Sports','PRODUCT',NULL,NULL,'Sports Products',NULL,'  ',NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(90,NULL,86,'Jewellery & Watches','PRODUCT',NULL,NULL,'Jewellery & Watch Products',NULL,'  ',NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(91,NULL,86,'Clothing','PRODUCT',NULL,NULL,'Clothing Products',NULL,'  ',NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(92,NULL,86,'Gifts','PRODUCT',NULL,NULL,'Gift Products',NULL,'    ',NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(93,NULL,91,'Baby Clothing',NULL,NULL,NULL,'Baby Clothing',NULL,'  ',NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(94,NULL,91,'Men\'s Clothing',NULL,NULL,NULL,'Men\'s Clothing',NULL,'  ',NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(95,NULL,91,'Women\'s Clothing',NULL,NULL,NULL,'Women\'s Clothing',NULL,'  ',NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(96,NULL,91,'Boys\' Clothing',NULL,NULL,NULL,'Boys\' Clothing',NULL,'    ',NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(97,NULL,91,'Girls\' Clothing',NULL,NULL,NULL,'Girls\' Clothing',NULL,'    ',NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(98,NULL,87,'Televisions',NULL,NULL,NULL,'Television Products',NULL,'  ',NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(99,NULL,87,'Computers',NULL,NULL,NULL,'Computer Products',NULL,'  ',NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(100,NULL,87,'Mobiles',NULL,NULL,NULL,'Mobile Products',NULL,'  ',NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(101,NULL,87,'Cameras',NULL,NULL,NULL,'Camera Products',NULL,'  ',NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(102,NULL,99,'Laptops',NULL,NULL,NULL,'Laptop Products',NULL,'  ',NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(103,NULL,99,'Desktops',NULL,NULL,NULL,'Desktop Products',NULL,'  ',NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(104,NULL,99,'Tablets',NULL,NULL,NULL,'Tablet Products',NULL,'  ',NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53'),(105,NULL,99,'Hybrid',NULL,NULL,NULL,'Hybrid Products',NULL,'  ',NULL,NULL,NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:53');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:48:28
