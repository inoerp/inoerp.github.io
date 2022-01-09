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
-- Table structure for table `sys_rfid_interface`
--

DROP TABLE IF EXISTS `sys_rfid_interface`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sys_rfid_interface` (
  `sys_rfid_interface_id` int unsigned NOT NULL AUTO_INCREMENT,
  `epc` varchar(255) NOT NULL,
  `tag_number` varchar(255) DEFAULT NULL,
  `antena_number` varchar(100) DEFAULT NULL,
  `time_stamp` datetime DEFAULT NULL,
  `user_data` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `readcount` int DEFAULT NULL,
  `org_id` int DEFAULT NULL,
  `inv_item_master_id` int DEFAULT NULL,
  `from_subinventory_id` int DEFAULT NULL,
  `from_subinventory` varchar(50) DEFAULT NULL,
  `transaction_type_id` int DEFAULT NULL,
  `transaction_type` varchar(50) DEFAULT NULL,
  `quantity` decimal(20,5) DEFAULT NULL,
  `item_description` varchar(255) DEFAULT NULL,
  `status` varchar(25) NOT NULL,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`sys_rfid_interface_id`),
  UNIQUE KEY `tag_number` (`tag_number`,`antena_number`,`time_stamp`)
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_rfid_interface`
--

LOCK TABLES `sys_rfid_interface` WRITE;
/*!40000 ALTER TABLE `sys_rfid_interface` DISABLE KEYS */;
INSERT INTO `sys_rfid_interface` VALUES (73,'000000000000000000001906','EPC:000000000000000000001906 ant:1 count:2 time:2015-07-29T18:31:00.479+08:00','1','2015-07-29 18:31:00',NULL,'Desccription',2,NULL,0,0,'WIP-03',0,'SUBINV_TRANSFER',10.00000,' ','active','1','2021-10-04 12:34:14','1','2021-10-04 12:38:24'),(74,'300833B2DDD9014000000000','EPC:300833B2DDD9014000000000 ant:1 count:11 time:2015-07-29T18:31:00.483+08:00','1','2015-07-29 18:31:00',NULL,'Desccription',11,NULL,0,0,'WIP-03',0,'SUBINV_TRANSFER',10.00000,' ','active','1','2021-10-04 12:34:14','1','2021-10-04 12:38:24'),(75,'0013098A8219014219104E97','EPC:0013098A8219014219104E97 ant:1 count:3 time:2015-07-29T18:31:00.487+08:00','1','2015-07-29 18:31:00',NULL,'Desccription',3,NULL,0,0,'WIP-03',0,'SUBINV_TRANSFER',10.00000,' ','active','1','2021-10-04 12:34:14','1','2021-10-04 12:38:24'),(76,'000000000000000000000001','EPC:000000000000000000000001 ant:1 count:3 time:2015-07-29T18:31:00.491+08:00','1','2015-07-29 18:31:00',NULL,'Desccription',3,NULL,0,0,'WIP-03',0,'SUBINV_TRANSFER',10.00000,' ','active','1','2021-10-04 12:34:14','1','2021-10-04 12:38:24'),(77,'000000000000000000400556','EPC:000000000000000000400556 ant:1 count:3 time:2015-07-29T18:31:00.499+08:00','1','2015-07-29 18:31:00',NULL,'Desccription',3,NULL,0,0,'WIP-03',0,'SUBINV_TRANSFER',10.00000,' ','active','1','2021-10-04 12:34:14','1','2021-10-04 12:38:24'),(78,'E2004BA5F94D0FB0018EE43D','EPC:E2004BA5F94D0FB0018EE43D ant:1 count:3 time:2015-07-29T18:31:00.506+08:00','1','2015-07-29 18:31:00',NULL,'Desccription',3,NULL,0,0,'WIP-03',0,'SUBINV_TRANSFER',10.00000,' ','active','1','2021-10-04 12:34:14','1','2021-10-04 12:38:24'),(79,'000000000000000000000003','EPC:000000000000000000000003 ant:1 count:2 time:2015-07-29T18:31:00.516+08:00','1','2015-07-29 18:31:00',NULL,'Desccription',2,NULL,0,0,'WIP-03',0,'SUBINV_TRANSFER',10.00000,' ','active','1','2021-10-04 12:34:14','1','2021-10-04 12:38:24'),(80,'E2002991911500980300EEB7','EPC:E2002991911500980300EEB7 ant:1 count:2 time:2015-07-29T18:31:00.520+08:00','1','2015-07-29 18:31:00',NULL,'Desccription',2,NULL,0,0,'WIP-03',0,'SUBINV_TRANSFER',10.00000,' ','active','1','2021-10-04 12:34:14','1','2021-10-04 12:38:24'),(81,'2013071187270100010109EF','EPC:2013071187270100010109EF ant:1 count:2 time:2015-07-29T18:31:00.524+08:00','1','2015-07-29 18:31:00',NULL,'Desccription',2,NULL,0,0,'WIP-03',0,'SUBINV_TRANSFER',10.00000,' ','active','1','2021-10-04 12:34:14','1','2021-10-04 12:38:24'),(82,'E2006316960DCEB165379B3A','EPC:E2006316960DCEB165379B3A ant:1 count:3 time:2015-07-29T18:31:00.533+08:00','1','2015-07-29 18:31:00',NULL,'Desccription',3,NULL,0,0,'WIP-03',0,'SUBINV_TRANSFER',10.00000,' ','active','1','2021-10-04 12:34:14','1','2021-10-04 12:38:24'),(83,'E2009A5040026AF000000317','EPC:E2009A5040026AF000000317 ant:1 count:2 time:2015-07-29T18:31:00.537+08:00','1','2015-07-29 18:31:00',NULL,'Desccription',2,NULL,0,0,'WIP-03',0,'SUBINV_TRANSFER',10.00000,' ','active','1','2021-10-04 12:34:14','1','2021-10-04 12:38:24'),(84,'E2003230D2C496B1138EA259','EPC:E2003230D2C496B1138EA259 ant:1 count:2 time:2015-07-29T18:31:00.550+08:00','1','2015-07-29 18:31:00',NULL,'Desccription',2,NULL,0,0,'WIP-03',0,'SUBINV_TRANSFER',10.00000,' ','active','1','2021-10-04 12:34:14','1','2021-10-04 12:38:24'),(85,'80043752830000000A104790','EPC:80043752830000000A104790 ant:1 count:3 time:2015-07-29T18:31:00.554+08:00','1','2015-07-29 18:31:00',NULL,'Desccription',3,NULL,0,0,'WIP-03',0,'SUBINV_TRANSFER',10.00000,' ','active','1','2021-10-04 12:34:14','1','2021-10-04 12:38:24'),(86,'31313131','EPC:31313131 ant:1 count:7 time:2015-08-04T21:44:17.451+08:00','1','2015-08-04 21:44:17',NULL,'Desccription',7,NULL,0,0,'WIP-03',0,'SUBINV_TRANSFER',10.00000,' ','active','1','2021-10-04 12:34:14','1','2021-10-04 12:38:24'),(87,'0123456789ABCDEF01234567','EPC:0123456789ABCDEF01234567 ant:1 count:6 time:2015-08-05T09:21:16.705+08:00','1','2015-08-05 09:21:16',NULL,'Desccription',6,NULL,0,0,'WIP-03',0,'SUBINV_TRANSFER',10.00000,' ','active','1','2021-10-04 12:34:14','1','2021-10-04 12:38:24'),(88,'000000000000000000000001','EPC:000000000000000000000001 ant:1 count:2 time:2015-08-05T09:21:16.912+08:00','1','2015-08-05 09:21:16',NULL,'Desccription',2,NULL,0,0,'WIP-03',0,'SUBINV_TRANSFER',10.00000,' ','active','1','2021-10-04 12:34:14','1','2021-10-04 12:38:24'),(89,'E200206486160283181054E1','EPC:E200206486160283181054E1 ant:1 count:7 time:2015-08-05T15:16:49.162+08:00','1','2015-08-05 15:16:49',NULL,'Desccription',7,NULL,0,0,'WIP-03',0,'SUBINV_TRANSFER',10.00000,' ','active','1','2021-10-04 12:34:14','1','2021-10-04 12:38:24'),(90,'300ED89E1B10D2C000000038','EPC:300ED89E1B10D2C000000038 ant:1 count:7 time:2015-08-05T15:18:17.756+08:00','1','2015-08-05 15:18:17',NULL,'Desccription',7,NULL,0,0,'WIP-03',0,'SUBINV_TRANSFER',10.00000,' ','active','1','2021-10-04 12:34:14','1','2021-10-04 12:38:24'),(91,'E20020648616028316206EB6','EPC:E20020648616028316206EB6 ant:1 count:7 time:2015-08-05T15:18:48.713+08:00','1','2015-08-05 15:18:48',NULL,'Desccription',7,NULL,0,0,'WIP-03',0,'SUBINV_TRANSFER',10.00000,' ','active','1','2021-10-04 12:34:14','1','2021-10-04 12:38:24'),(92,'E20020648616028417305D75','EPC:E20020648616028417305D75 ant:1 count:7 time:2015-08-05T15:19:15.977+08:00','1','2015-08-05 15:19:15',NULL,'Desccription',7,NULL,0,0,'WIP-03',0,'SUBINV_TRANSFER',10.00000,' ','active','1','2021-10-04 12:34:14','1','2021-10-04 12:38:24');
/*!40000 ALTER TABLE `sys_rfid_interface` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:47:58
