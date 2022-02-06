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
-- Table structure for table `hr_leave_transaction`
--

DROP TABLE IF EXISTS `hr_leave_transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hr_leave_transaction` (
  `hr_leave_transaction_id` int unsigned NOT NULL AUTO_INCREMENT,
  `employee_id` int NOT NULL,
  `requsted_date` date DEFAULT NULL,
  `approved_date` date DEFAULT NULL,
  `approved_by` varchar(100) DEFAULT NULL,
  `approved_by_employee_id` int DEFAULT NULL,
  `leave_status` varchar(25) NOT NULL,
  `leave_type` varchar(50) NOT NULL,
  `transaction_type` varchar(25) DEFAULT NULL,
  `leave_quantity` decimal(20,5) NOT NULL,
  `from_date` date NOT NULL,
  `to_date` date NOT NULL,
  `reason` varchar(256) DEFAULT NULL,
  `contact_details` varchar(256) DEFAULT NULL,
  `sys_notification_id` int DEFAULT NULL,
  `sys_notification_group_id` int DEFAULT NULL,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`hr_leave_transaction_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hr_leave_transaction`
--

LOCK TABLES `hr_leave_transaction` WRITE;
/*!40000 ALTER TABLE `hr_leave_transaction` DISABLE KEYS */;
INSERT INTO `hr_leave_transaction` VALUES (1,4,'2014-08-25',NULL,NULL,NULL,'ENTERED','1',NULL,3.00000,'2014-08-27','2014-08-31','NA','2828-23-23232',NULL,NULL,'1','2021-10-04 12:31:50','1','2021-10-04 12:38:01'),(2,4,'2014-08-21',NULL,'Eric Stock',NULL,'ENTERED','1',NULL,3.00000,'2014-08-21','2014-08-27','Reasons 1 1','+292929-2020',NULL,NULL,'1','2021-10-04 12:31:50','1','2021-10-04 12:38:01'),(3,4,'2014-08-21',NULL,'Eric Stock',NULL,'ENTERED','1',NULL,4.00000,'2014-08-25','2014-08-28','Paid leave','+91-9292-09801234',NULL,NULL,'1','2021-10-04 12:31:50','1','2021-10-04 12:38:01'),(4,4,'2014-08-21',NULL,'Eric Stock',NULL,'ENTERED','1',NULL,3.00000,'2014-08-26','2014-08-28','Reason  Reason ','+123-9888-001',NULL,NULL,'1','2021-10-04 12:31:50','1','2021-10-04 12:38:01'),(5,4,'2014-08-21',NULL,'Eric Stock',NULL,'ENTERED','1',NULL,2.00000,'2014-08-27','2014-08-28','Reason Reason ','+91-02928-001',NULL,NULL,'1','2021-10-04 12:31:50','1','2021-10-04 12:38:01'),(6,4,'2014-08-21',NULL,'Eric Stock',NULL,'ENTERED','1',NULL,7.00000,'2014-08-23','2014-08-30','asdas','asdas',NULL,NULL,'1','2021-10-04 12:31:50','1','2021-10-04 12:38:01'),(7,4,'2014-08-22',NULL,'Eric Stock',NULL,'ENTERED','1',NULL,2.00000,'2014-08-26','2014-08-28','na','na',NULL,NULL,'1','2021-10-04 12:31:50','1','2021-10-04 12:38:01'),(8,1,'2014-08-22',NULL,NULL,NULL,'ENTERED','1',NULL,1.00000,'2014-08-27','2014-08-28','cvxcvx','cxvxc',NULL,NULL,'1','2021-10-04 12:31:50','1','2021-10-04 12:38:01'),(9,4,'2014-08-22',NULL,'Eric Stock',NULL,'ENTERED','1',NULL,2.00000,'2014-08-27','2014-08-29','sdas','asda',NULL,NULL,'1','2021-10-04 12:31:50','1','2021-10-04 12:38:01'),(10,4,'2014-08-22','2014-08-22','Eric Stock',NULL,'APPROVED','1','NEGATIVE',2.00000,'2014-08-28','2014-08-30','sdffs','fdsfsdfsdf',NULL,NULL,'1','2021-10-04 12:31:50','1','2021-10-04 12:38:01'),(11,4,'2014-08-22','2014-08-22','Eric Stock',NULL,'APPROVED','1','NEGATIVE',1.00000,'2014-08-26','2014-08-27',NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:50','1','2021-10-04 12:38:01'),(13,1,'2014-10-23',NULL,'Matt Jacob',NULL,'ENTERED','1',NULL,5.00000,'2014-10-23','2014-10-28',NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:50','1','2021-10-04 12:38:01'),(14,1,'2014-12-26',NULL,'Matt Jacob',NULL,'ENTERED','1',NULL,2.00000,'2014-12-29','2014-12-30','EEE',NULL,NULL,NULL,'1','2021-10-04 12:31:50','1','2021-10-04 12:38:01'),(15,1,'2015-01-07',NULL,'Matt Jacob',NULL,'ENTERED','1',NULL,3.00000,'2015-01-28','2015-01-31',NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:50','1','2021-10-04 12:38:01'),(16,1,'2015-09-18',NULL,'Matt Jacob',NULL,'ENTERED','1',NULL,3.00000,'2015-09-16','2015-09-19',NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:50','1','2021-10-04 12:38:01'),(17,1,'2015-09-18','2015-09-18','Matt Jacob',NULL,'APPROVED','1',NULL,9.00000,'2015-09-01','2015-09-10',NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:50','1','2021-10-04 12:38:01'),(18,1,'2016-10-31',NULL,'Matt Jacob',NULL,'ENTERED','1',NULL,3.00000,'2016-10-28','2016-10-31','Vacation',NULL,NULL,NULL,'1','2021-10-04 12:31:50','1','2021-10-04 12:38:01');
/*!40000 ALTER TABLE `hr_leave_transaction` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:49:25
