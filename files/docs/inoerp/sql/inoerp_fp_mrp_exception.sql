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
-- Table structure for table `fp_mrp_exception`
--

DROP TABLE IF EXISTS `fp_mrp_exception`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fp_mrp_exception` (
  `fp_mrp_exception_id` int NOT NULL AUTO_INCREMENT,
  `org_id` int NOT NULL,
  `fp_mrp_header_id` int NOT NULL,
  `exception_message` varchar(256) NOT NULL,
  `detailed_message` text,
  `exception_type` varchar(25) NOT NULL,
  `reference_type` varchar(25) DEFAULT NULL,
  `reference_key_name` varchar(50) DEFAULT NULL,
  `reference_key_value` varchar(25) DEFAULT NULL,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`fp_mrp_exception_id`)
) ENGINE=InnoDB AUTO_INCREMENT=365 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fp_mrp_exception`
--

LOCK TABLES `fp_mrp_exception` WRITE;
/*!40000 ALTER TABLE `fp_mrp_exception` DISABLE KEYS */;
INSERT INTO `fp_mrp_exception` VALUES (276,6,1,'Exccess for Item# MI_FG002','Item MI_FG002 (id : 10078) is expected to have  250 excess material in the planning horizon ','EXCESS',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(277,6,1,'Exccess for Item# MI_FG001','Item MI_FG001 (id : 10075) is expected to have  69 excess material in the planning horizon ','EXCESS',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(278,6,1,'Exccess for Item# MI_MOBILE02','Item MI_MOBILE02 (id : 10063) is expected to have  36 excess material in the planning horizon ','EXCESS',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(279,6,1,'Exccess for Item# MI_CABINETA01','Item MI_CABINETA01 (id : 10043) is expected to have  505 excess material in the planning horizon ','EXCESS',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(280,6,1,'Planned Order (Id : 679) is compressed',' Planned Order (Id :  679 for Item MI_MONITORA01 (id : 10039) is compressed by  7   days as on MRP run date','COMPRESSED_LT',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(281,6,1,'Planned Order (Id : 680) is compressed',' Planned Order (Id :  680 for Item MI_PROCESSORA01 (id : 10041) is compressed by  6   days as on MRP run date','COMPRESSED_LT',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(282,6,1,'Planned Order (Id : 681) is compressed',' Planned Order (Id :  681 for Item MI_L3TEST01 (id : 10047) is compressed by  3   days as on MRP run date','COMPRESSED_LT',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(283,6,1,'Exccess for Item# MI_L3TEST01','Item MI_L3TEST01 (id : 10047) is expected to have  47 excess material in the planning horizon ','EXCESS',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(284,6,1,'Item MI_L4ATEST01 (id : 10049) is past due','Item MI_L4ATEST01 (id : 10049) is past due  Demand date was 2014-05-21 ','PAST_DUE',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(285,6,1,'Planned Order (Id : 682) is compressed',' Planned Order (Id :  682 for Item MI_L4ATEST01 (id : 10049) is compressed by  11   days as on MRP run date','COMPRESSED_LT',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(286,6,1,'Item MI_L5TEST01 (id : 10051) is past due','Item MI_L5TEST01 (id : 10051) is past due  Demand date was 2014-05-12 ','PAST_DUE',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(287,6,1,'Planned Order (Id : 683) is compressed',' Planned Order (Id :  683 for Item MI_L5TEST01 (id : 10051) is compressed by  20   days as on MRP run date','COMPRESSED_LT',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(288,6,1,'Planned Order (Id : 684) is compressed',' Planned Order (Id :  684 for Item MI_L5TEST01 (id : 10051) is compressed by  5   days as on MRP run date','COMPRESSED_LT',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(301,6,2,'Exccess for Item# MI_L4ATEST01','Item MI_L4ATEST01 (id : 10048) is expected to have  3 excess material in the planning horizon ','EXCESS',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(302,6,2,'Planned Order (Id : 715) is compressed',' Planned Order (Id :  715 for Item MI_SA03 (id : 10107) is compressed by  2   days as on MRP run date','COMPRESSED_LT',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(310,6,3,'Planned Order (Id : 770) is compressed',' Planned Order (Id :  770 for Item MI_SA04 (id : 10135) is compressed by  5   days as on MRP run date','COMPRESSED_LT',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(311,6,3,'Exccess for Item# MI_SA01','Item MI_SA01 (id : 10092) is expected to have  1874 excess material in the planning horizon ','EXCESS',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(312,6,3,'Exccess for Item# MI_PUR02','Item MI_PUR02 (id : 10089) is expected to have  25653 excess material in the planning horizon ','EXCESS',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(313,6,3,'Planned Order (Id : 795) is compressed',' Planned Order (Id :  795 for Item MI_PUR03 (id : 10101) is compressed by  8   days as on MRP run date','COMPRESSED_LT',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(314,6,3,'Planned Order (Id : 796) is compressed',' Planned Order (Id :  796 for Item MI_PUR03 (id : 10101) is compressed by  1   days as on MRP run date','COMPRESSED_LT',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(317,6,4,'Exccess for Item# MI_SA002','Item MI_SA002 (id : 10095) is expected to have  2377 excess material in the planning horizon ','EXCESS',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(318,6,4,'Exccess for Item# MI_SA01','Item MI_SA01 (id : 10092) is expected to have  1986 excess material in the planning horizon ','EXCESS',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(319,6,4,'Exccess for Item# MI_PROCESSORA01','Item MI_PROCESSORA01 (id : 10040) is expected to have  2 excess material in the planning horizon ','EXCESS',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(320,6,4,'Exccess for Item# MI_PUR001','Item MI_PUR001 (id : 10098) is expected to have  20 excess material in the planning horizon ','EXCESS',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(321,6,4,'Exccess for Item# MI_SA03','Item MI_SA03 (id : 10107) is expected to have  770 excess material in the planning horizon ','EXCESS',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(324,6,5,'Item MI_KIT01 (id : 10158) is past due','Item MI_KIT01 (id : 10158) is past due  Demand date was 2015-02-27 ','PAST_DUE',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(325,6,5,'Planned Order (Id : 821) is compressed',' Planned Order (Id :  821 for Item MI_KIT01 (id : 10158) is compressed by  529   days as on MRP run date','COMPRESSED_LT',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(326,6,5,'Item MI_SA002 (id : 10095) is past due','Item MI_SA002 (id : 10095) is past due  Demand date was 2015-02-23 ','PAST_DUE',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(327,6,5,'Exccess for Item# MI_SA002','Item MI_SA002 (id : 10095) is expected to have  2385 excess material in the planning horizon ','EXCESS',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(328,6,5,'Item MI_DESKTOPA01 (id : 10034) is past due','Item MI_DESKTOPA01 (id : 10034) is past due  Demand date was 2015-02-17 ','PAST_DUE',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(329,6,5,'Item MI_DESKTOPA01 (id : 10034) is past due','Item MI_DESKTOPA01 (id : 10034) is past due  Demand date was 2015-02-17 ','PAST_DUE',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(330,6,5,'Item MI_DESKTOPA01 (id : 10034) is past due','Item MI_DESKTOPA01 (id : 10034) is past due  Demand date was 2015-02-17 ','PAST_DUE',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(331,6,5,'Item MI_DESKTOPA01 (id : 10034) is past due','Item MI_DESKTOPA01 (id : 10034) is past due  Demand date was 2015-02-17 ','PAST_DUE',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(332,6,5,'Exccess for Item# MI_DESKTOPA01','Item MI_DESKTOPA01 (id : 10034) is expected to have  9290 excess material in the planning horizon ','EXCESS',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(333,6,5,'Item MI_MOBILE01 (id : 10061) is past due','Item MI_MOBILE01 (id : 10061) is past due  Demand date was 2014-09-25 ','PAST_DUE',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(334,6,5,'Planned Order (Id : 822) is compressed',' Planned Order (Id :  822 for Item MI_MOBILE01 (id : 10061) is compressed by  674   days as on MRP run date','COMPRESSED_LT',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(335,6,5,'Item MI_MOBILE02 (id : 10063) is past due','Item MI_MOBILE02 (id : 10063) is past due  Demand date was 2014-09-25 ','PAST_DUE',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(336,6,5,'Planned Order (Id : 823) is compressed',' Planned Order (Id :  823 for Item MI_MOBILE02 (id : 10063) is compressed by  674   days as on MRP run date','COMPRESSED_LT',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(337,6,5,'Item MI_CABINETA01 (id : 10043) is past due','Item MI_CABINETA01 (id : 10043) is past due  Demand date was 2014-07-23 ','PAST_DUE',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(338,6,5,'Planned Order (Id : 824) is compressed',' Planned Order (Id :  824 for Item MI_CABINETA01 (id : 10043) is compressed by  747   days as on MRP run date','COMPRESSED_LT',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(339,6,5,'Item MI_MONITORA01 (id : 10039) is past due','Item MI_MONITORA01 (id : 10039) is past due  Demand date was 2014-05-26 ','PAST_DUE',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(340,6,5,'Planned Order (Id : 825) is compressed',' Planned Order (Id :  825 for Item MI_MONITORA01 (id : 10039) is compressed by  805   days as on MRP run date','COMPRESSED_LT',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(341,6,5,'Item MI_SA01 (id : 10094) is past due','Item MI_SA01 (id : 10094) is past due  Demand date was 2014-06-18 ','PAST_DUE',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(342,6,5,'Planned Order (Id : 826) is compressed',' Planned Order (Id :  826 for Item MI_SA01 (id : 10094) is compressed by  783   days as on MRP run date','COMPRESSED_LT',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(343,6,5,'Item MI_SA01 (id : 10094) is past due','Item MI_SA01 (id : 10094) is past due  Demand date was 2014-06-26 ','PAST_DUE',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(344,6,5,'Item MI_SA01 (id : 10094) is past due','Item MI_SA01 (id : 10094) is past due  Demand date was 2014-06-30 ','PAST_DUE',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(345,6,5,'Exccess for Item# MI_SA01','Item MI_SA01 (id : 10094) is expected to have  85 excess material in the planning horizon ','EXCESS',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(346,6,5,'Item MI_SA01 (id : 10092) is past due','Item MI_SA01 (id : 10092) is past due  Demand date was 2014-07-10 ','PAST_DUE',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(347,6,5,'Exccess for Item# MI_SA01','Item MI_SA01 (id : 10092) is expected to have  2280 excess material in the planning horizon ','EXCESS',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(348,6,5,'Item MI_MONITORA01 (id : 10038) is past due','Item MI_MONITORA01 (id : 10038) is past due  Demand date was 2015-06-06 ','PAST_DUE',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(349,6,5,'Item MI_MONITORA01 (id : 10038) is past due','Item MI_MONITORA01 (id : 10038) is past due  Demand date was 2015-06-30 ','PAST_DUE',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(350,6,5,'Exccess for Item# MI_MONITORA01','Item MI_MONITORA01 (id : 10038) is expected to have  169 excess material in the planning horizon ','EXCESS',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(351,6,5,'Item MI_L3TEST01 (id : 10047) is past due','Item MI_L3TEST01 (id : 10047) is past due  Demand date was 2014-05-30 ','PAST_DUE',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(352,6,5,'Planned Order (Id : 827) is compressed',' Planned Order (Id :  827 for Item MI_L3TEST01 (id : 10047) is compressed by  801   days as on MRP run date','COMPRESSED_LT',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(353,6,5,'Exccess for Item# MI_L3TEST01','Item MI_L3TEST01 (id : 10047) is expected to have  113 excess material in the planning horizon ','EXCESS',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(354,6,5,'Item MI_L5TEST01 (id : 10051) is past due','Item MI_L5TEST01 (id : 10051) is past due  Demand date was 2014-05-28 ','PAST_DUE',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(355,6,5,'Planned Order (Id : 828) is compressed',' Planned Order (Id :  828 for Item MI_L5TEST01 (id : 10051) is compressed by  803   days as on MRP run date','COMPRESSED_LT',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(356,6,5,'Item MI_L5TEST01 (id : 10051) is past due','Item MI_L5TEST01 (id : 10051) is past due  Demand date was 2014-08-26 ','PAST_DUE',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(357,6,5,'Planned Order (Id : 829) is compressed',' Planned Order (Id :  829 for Item MI_L5TEST01 (id : 10051) is compressed by  713   days as on MRP run date','COMPRESSED_LT',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(358,6,5,'Item MI_CPUA01 (id : 10036) is past due','Item MI_CPUA01 (id : 10036) is past due  Demand date was 2015-06-06 ','PAST_DUE',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(359,6,5,'Item MI_CPUA01 (id : 10036) is past due','Item MI_CPUA01 (id : 10036) is past due  Demand date was 2015-06-29 ','PAST_DUE',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(360,6,5,'Exccess for Item# MI_CPUA01','Item MI_CPUA01 (id : 10036) is expected to have  1769 excess material in the planning horizon ','EXCESS',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(361,6,5,'Item MI_SA03 (id : 10107) is past due','Item MI_SA03 (id : 10107) is past due  Demand date was 2014-07-10 ','PAST_DUE',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(362,6,5,'Exccess for Item# MI_SA03','Item MI_SA03 (id : 10107) is expected to have  778 excess material in the planning horizon ','EXCESS',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(363,6,5,'Item MI_PUR02 (id : 10089) is past due','Item MI_PUR02 (id : 10089) is past due  Demand date was 2015-02-17 ','PAST_DUE',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56'),(364,6,5,'Exccess for Item# MI_PUR02','Item MI_PUR02 (id : 10089) is expected to have  5670 excess material in the planning horizon ','EXCESS',NULL,NULL,NULL,'1','2021-10-04 12:31:46','1','2021-10-04 12:37:56');
/*!40000 ALTER TABLE `fp_mrp_exception` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:47:54