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
-- Table structure for table `hr_employee_education`
--

DROP TABLE IF EXISTS `hr_employee_education`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hr_employee_education` (
  `hr_employee_education_id` int unsigned NOT NULL AUTO_INCREMENT,
  `employee_id` int NOT NULL,
  `degree_name` varchar(256) NOT NULL,
  `university` varchar(256) NOT NULL,
  `university_address` varchar(256) DEFAULT NULL,
  `specialization` varchar(256) DEFAULT NULL,
  `edu_start_date` date DEFAULT NULL,
  `edu_end_date` date NOT NULL,
  `mode_of_education` varchar(50) DEFAULT NULL,
  `grade` varchar(10) DEFAULT NULL,
  `marks_percentage` decimal(20,5) DEFAULT NULL,
  `comments` text,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`hr_employee_education_id`),
  UNIQUE KEY `employee_id` (`employee_id`,`degree_name`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hr_employee_education`
--

LOCK TABLES `hr_employee_education` WRITE;
/*!40000 ALTER TABLE `hr_employee_education` DISABLE KEYS */;
INSERT INTO `hr_employee_education` VALUES (1,1,'HSC','ABCDE',NULL,NULL,NULL,'2014-12-25','1','1',NULL,NULL,'1','2021-10-04 12:31:49','1','2021-10-04 12:38:00'),(2,2,'High School2','NBMI',NULL,NULL,'1994-01-01','1999-01-01','Full Time - Regular','A',NULL,NULL,'1','2021-10-04 12:31:49','1','2021-10-04 12:38:00'),(3,2,'Senior High School','NBMIsdsds',NULL,NULL,'1989-08-16','1994-01-01','Full Time - Regular','B+',NULL,NULL,'1','2021-10-04 12:31:49','1','2021-10-04 12:38:00'),(4,2,'Pre School','LKJJ',NULL,NULL,NULL,'1989-08-16','Full Time - Regular','A+',NULL,NULL,'1','2021-10-04 12:31:49','1','2021-10-04 12:38:00'),(5,2,'Engineering','MIT',NULL,NULL,'1999-01-01','2003-01-28','Full Time - Regular','A+',NULL,NULL,'1','2021-10-04 12:31:49','1','2021-10-04 12:38:00'),(6,2,'Senior High School222','Senior High School222',NULL,NULL,'1989-08-16','1989-08-16','Full Time - Regular','A+',NULL,NULL,'1','2021-10-04 12:31:49','1','2021-10-04 12:38:00'),(7,4,'BE','ABCD',NULL,NULL,NULL,'2014-08-28',NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:49','1','2021-10-04 12:38:00'),(8,3,'BE','ABCD',NULL,NULL,NULL,'2014-11-26',NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:49','1','2021-10-04 12:38:00'),(9,4,'BA','XYZ',NULL,NULL,'2014-12-29','2014-12-30',NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:49','1','2021-10-04 12:38:00'),(10,4,'BG','sadas',NULL,NULL,NULL,'2014-12-26',NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:49','1','2021-10-04 12:38:00'),(11,1,'BE','XYZ',NULL,NULL,NULL,'2012-12-27',NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:49','1','2021-10-04 12:38:00'),(12,4,'ABC','asdasd',NULL,NULL,'2015-09-16','2014-12-26',NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:49','1','2021-10-04 12:38:00'),(16,7,'BE','ABC',NULL,NULL,NULL,'2015-09-23',NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:49','1','2021-10-04 12:38:00'),(18,9,'BE','ABCD',NULL,NULL,NULL,'2015-09-30',NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:49','1','2021-10-04 12:38:00'),(19,10,'BE','ABCD',NULL,NULL,NULL,'2015-09-30',NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:49','1','2021-10-04 12:38:00'),(20,11,'BE','ABCD',NULL,NULL,NULL,'2015-09-30',NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:49','1','2021-10-04 12:38:00'),(23,14,'BE2','ABCDE',NULL,NULL,NULL,'2015-09-24',NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:49','1','2021-10-04 12:38:00'),(24,14,'BE3','GHF',NULL,NULL,NULL,'2015-09-17',NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:49','1','2021-10-04 12:38:00'),(25,16,'BE3','GHF',NULL,NULL,NULL,'2015-09-17',NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:49','1','2021-10-04 12:38:00'),(26,16,'BE4','AHHAH',NULL,NULL,NULL,'2015-09-30',NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:49','1','2021-10-04 12:38:00'),(27,16,'BE5','adasdad',NULL,NULL,NULL,'2015-09-30',NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:49','1','2021-10-04 12:38:00'),(28,17,'BE','DU',NULL,NULL,'2016-07-05','2016-07-15',NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:49','1','2021-10-04 12:38:00'),(29,19,'BE','OULA',NULL,NULL,'2017-04-11','2017-04-12',NULL,NULL,NULL,NULL,'1','2021-10-04 12:31:49','1','2021-10-04 12:38:00');
/*!40000 ALTER TABLE `hr_employee_education` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:49:02
