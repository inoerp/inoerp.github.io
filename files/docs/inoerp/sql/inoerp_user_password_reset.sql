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
-- Table structure for table `user_password_reset`
--

DROP TABLE IF EXISTS `user_password_reset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_password_reset` (
  `user_password_reset_id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned NOT NULL,
  `code` varchar(256) NOT NULL,
  `status` float DEFAULT NULL,
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_password_reset_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_password_reset`
--

LOCK TABLES `user_password_reset` WRITE;
/*!40000 ALTER TABLE `user_password_reset` DISABLE KEYS */;
INSERT INTO `user_password_reset` VALUES (3,40,'4f4c49bc354e8187667ad6628853c10e60bdd1a3e1c1f128b38c6746ecffdd8a',1,'2021-10-04 12:34:15','1','1','2021-10-04 12:38:25'),(4,40,'5df5a609c1eb91d1db1eba9987838b450441a8b86474a395ac3975ebfeac9166',1,'2021-10-04 12:34:15','1','1','2021-10-04 12:38:25'),(5,40,'fc8321b837a7d96c3278f7f2babfceadaa82969e17e41f914ea1178227edc270',1,'2021-10-04 12:34:15','1','1','2021-10-04 12:38:25'),(14,0,'',NULL,'2021-10-04 12:34:15','1','1','2021-10-04 12:38:25'),(15,0,'',NULL,'2021-10-04 12:34:15','1','1','2021-10-04 12:38:25'),(21,86,'a4732042ed233307969128758062d0930d0f0cce0fd9714ae294b82d49f20027',NULL,'2021-10-04 12:34:15','1','1','2021-10-04 12:38:25'),(24,34,'036483904d6b3610d16dade89687b67b382a9131953d220dc44365e91bbd9013',NULL,'2021-10-04 12:34:15','1','1','2021-10-04 12:38:25'),(25,100,'c446b6a7ba3967d73054051ddc3bff532beb76da003c0d23cb7fdac540e9f873',NULL,'2021-10-04 12:34:15','1','1','2021-10-04 12:38:25');
/*!40000 ALTER TABLE `user_password_reset` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:48:39
