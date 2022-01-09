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
-- Table structure for table `block_content`
--

DROP TABLE IF EXISTS `block_content`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `block_content` (
  `block_content_id` int NOT NULL AUTO_INCREMENT,
  `block_id` int NOT NULL,
  `info` varchar(256) DEFAULT NULL,
  `content` text NOT NULL,
  `content_php_cb` tinyint(1) DEFAULT NULL,
  `created_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`block_content_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `block_content`
--

LOCK TABLES `block_content` WRITE;
/*!40000 ALTER TABLE `block_content` DISABLE KEYS */;
INSERT INTO `block_content` VALUES (5,47,'New Forum Posts','Z2xvYmFsICRkYjsNCiRzcWwgPSAiU0VMRUNUIGNvbnRlbnQuY29udGVudF9pZCBhcyBjb250ZW50X2lkLCBjb250ZW50LnN1YmplY3QgYXMgc3ViamVjdCAsIGV1YS5hbGlhcyBhcyBhbGlhcw0KCQkJCWZyb20gY29udGVudCwgDQogICAgICAgIGNfZm9ydW0NCgkJCQlMRUZUIEpPSU4gZXh0X3VybF9hbGlhcyBldWEgT04gZXVhLmNvbnRlbnRfaWQ9Y19mb3J1bS5jb250ZW50X2lkIA0KICAgICAgICBXSEVSRSBjX2ZvcnVtLmNvbnRlbnRfaWQ9Y29udGVudC5jb250ZW50X2lkDQoJCQkJb3JkZXIgYnkgY29udGVudC5jcmVhdGlvbl9kYXRlIGRlc2MgTElNSVQgMCwgMTAiOw0KJHJlc3VsdCA9ICRkYi0+ZmluZF9ieV9zcWwoJHNxbCk7DQoNCmVjaG8gJzx1bCBjbGFzcz0iZm9ydW1fbGlzdCI+JzsNCmlmICgkcmVzdWx0KSB7DQogZm9yZWFjaCAoJHJlc3VsdCBhcyAkcmVjb3Jkcykgew0KICAkZGF0YSA9ICc8bGk+JzsNCiAgJGRhdGEgLj0gJzxhIGhyZWY9Iic7DQogICRkYXRhIC49IEhPTUVfVVJMOw0KICBpZiAoIWVtcHR5KCRyZWNvcmRzLT5hbGlhcykpIHsNCiAgICRkYXRhIC49ICJjb250ZW50LyRyZWNvcmRzLT5hbGlhcyI7DQogIH0gZWxzZSB7DQogICAkZGF0YSAuPSAnY29udGVudC5waHA/Y29udGVudF9pZD0nOw0KICAgJGRhdGEgLj0gJHJlY29yZHMtPmNvbnRlbnRfaWQ7DQogICAkZGF0YSAuPSAnJmNvbnRlbnRfdHlwZT1mb3J1bSc7DQogIH0NCiAgJGRhdGEgLj0gJyI+JzsNCiAgJGRhdGEgLj0gJHJlY29yZHMtPnN1YmplY3Q7DQogICRkYXRhIC49ICc8L2E+PC9saT4nOw0KICBlY2hvICRkYXRhOw0KIH0NCn0NCg0KZWNobyAnPC91bD4nOw==',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(6,48,'Navigation Manu','<div id=\'navigation_menu\' class=\'menu\'>\r\n <ul class=\'first_level tree_view\'>\r\n	<li><a href=\"http://inoideas.org\">Home</a></li>\r\n	<li><a href=\"http://inoideas.org/content.php?content_type=forum&category_id=1\">Forum</a>\r\n	 <ul class=\'second_level\'>\r\n		<li><a href=\"http://localhost/inoERP/content.php?content_type=forum&category_id=5\">General</a>\r\n		 <ul class=\'third_level\'>\r\n			<li><a href=\"http://localhost/inoERP/content.php?content_type=forum&category_id=7\">General Discussions</a></li>\r\n			<li><a href=\"http://localhost/inoERP/content.php?content_type=forum&category_id=6\">News and announcements</a></li>\r\n		 </ul>\r\n		</li>\r\n		<li><a href=\"http://localhost/inoERP/content.php?content_type=forum&category_id=2\">Support</a>\r\n		 <ul class=\'third_level\'>\r\n			<li><a href=\"http://localhost/inoERP/content.php?content_type=forum&category_id=4\">Business Functionalities</a></li>\r\n			<li><a href=\"http://localhost/inoERP/content.php?content_type=forum&category_id=3\">Installing inoERP</a>\r\n			 <ul class=\'fourth_level\'>\r\n				<li><a href=\"http://localhost/inoERP/content.php?content_type=forum&category_id=18\">Future Feature</a></li>\r\n			 </ul>\r\n			</li>\r\n			<li><a href=\"http://localhost/inoERP/content.php?content_type=forum&category_id=29\">Snippets</a>\r\n			 <ul class=\'fourth_level\'>\r\n				<li><a href=\"http://localhost/inoERP/content.php?content_type=forum&category_id=34\">Programming Laguage</a></li>\r\n			 </ul>\r\n			</li>\r\n		 </ul>\r\n		</li>\r\n	 </ul>\r\n	</li>\r\n	<li><a href=\"content.php?content_type=documentation&category_id=30\">Documentation</a></li>\r\n	<li><a href=\"search.php?class_name=content&content_type_id=46\">Issue Log</a></li>\r\n	<li><a id=\"contact_us\" href=\" \">Contact</a>\r\n	  <ul class=\'second_level\'>\r\n		<li class=\"contact_us\">e-mail : contact@inoideas.org</li>\r\n		</ul>\r\n	</li>\r\n </ul>\r\n</div>\r\n',0,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(8,49,NULL,'Z2xvYmFsICRkYjsNCiRzcWwgPSAiU0VMRUNUIGNvbnRlbnQuY29udGVudF9pZCBhcyBjb250ZW50X2lkLCBjb250ZW50LnN1YmplY3QgYXMgc3ViamVjdCAsIGV1YS5hbGlhcyBhcyBhbGlhcw0KCQkJCWZyb20gY29udGVudCwgDQogICAgICAgIGNfZG9jdW1lbnRhdGlvbg0KCQkJCUxFRlQgSk9JTiBleHRfdXJsX2FsaWFzIGV1YSBPTiBldWEuY29udGVudF9pZD1jX2RvY3VtZW50YXRpb24uY29udGVudF9pZCANCiAgICAgICAgV0hFUkUgY19kb2N1bWVudGF0aW9uLmNvbnRlbnRfaWQ9Y29udGVudC5jb250ZW50X2lkDQoJCQkJb3JkZXIgYnkgY29udGVudC5jcmVhdGlvbl9kYXRlIGRlc2MgTElNSVQgMCwgMTAiOw0KJHJlc3VsdCA9ICRkYi0+ZmluZF9ieV9zcWwoJHNxbCk7DQoNCmVjaG8gJzx1bCBjbGFzcz0iZm9ydW1fbGlzdCI+JzsNCmlmICgkcmVzdWx0KSB7DQogZm9yZWFjaCAoJHJlc3VsdCBhcyAkcmVjb3Jkcykgew0KICAkZGF0YSA9ICc8bGk+JzsNCiAgJGRhdGEgLj0gJzxhIGhyZWY9Iic7DQogICRkYXRhIC49IEhPTUVfVVJMOw0KICBpZiAoIWVtcHR5KCRyZWNvcmRzLT5hbGlhcykpIHsNCiAgICRkYXRhIC49ICJjb250ZW50LyRyZWNvcmRzLT5hbGlhcyI7DQogIH0gZWxzZSB7DQogICAkZGF0YSAuPSAnY29udGVudC5waHA/Y29udGVudF9pZD0nOw0KICAgJGRhdGEgLj0gJHJlY29yZHMtPmNvbnRlbnRfaWQ7DQogICAkZGF0YSAuPSAnJmNvbnRlbnRfdHlwZT1kb2N1bWVudGF0aW9uJzsNCiAgfQ0KICAkZGF0YSAuPSAnIj4nOw0KICAkZGF0YSAuPSAkcmVjb3Jkcy0+c3ViamVjdDsNCiAgJGRhdGEgLj0gJzwvYT48L2xpPic7DQogIGVjaG8gJGRhdGE7DQogfQ0KfQ0KDQplY2hvICc8L3VsPic7DQo=',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(9,50,NULL,'dsfdsf\r\ndsfdsf\r\ndsfdsf\r\ndsfdsf\r\ndsfdsf',NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(10,51,NULL,'testahin\r\ntestahin\r\ntestahin\r\ntestahin',NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(11,62,NULL,'<ul class=\"bottom-nav-block\">\r\n<li><a href=\"http://inoideas.org/content/demo\" >Demo </a></li>\r\n<li><a href=\"https://github.com/inoERP/inoERP\" >Download</a></li>\r\n <li class=\"active\"><a href=\"\"http://inoideas.org/content.php?mode=9&content_type=forum&category_id=7\" >Ask a Question</a></li>\r\n<li><a href=\"http://inoideas.org/content.php?content_type=documentation&amp;category_id=30\">Documentation </a></li>\r\n<li><a href=\"http://inoideas.org/content.php?content_type=forum&amp;category_id=1\">Forum</a></li>\r\n<li><a href=\"http://inoideas.org/content.php?mode=2&amp;content_id=197&amp;content_type_id=47\">About</a> </li>\r\n<li><a href=\"http://inoideas.org/\">Home</a> </li>\r\n</ul>',0,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(12,53,NULL,'Z2xvYmFsICRkYjsNCiRzcWw9IlNFTEVDVCBjb250ZW50LmNvbnRlbnRfaWQgYXMgY29udGVudF9pZCwgY29udGVudC5zdWJqZWN0IGFzIHN1YmplY3QgZnJvbSBjb250ZW50LCBjX2lzc3VlICANCndoZXJlIGNfaXNzdWUuY29udGVudF9pZD1jb250ZW50LmNvbnRlbnRfaWQgb3JkZXIgYnkgY29udGVudC5jcmVhdGlvbl9kYXRlIGRlc2MgTElNSVQgMCwgMTAiOw0KJHJlc3VsdCA9ICRkYi0+ZmluZF9ieV9zcWwoJHNxbCk7DQoNCmVjaG8gJzx1bCBjbGFzcz0iaXNzdWVfbGlzdCI+JzsNCmZvcmVhY2goJHJlc3VsdCBhcyAkcmVjb3Jkcyl7DQokZGF0YSA9ICc8bGk+JzsNCiRkYXRhIC49ICc8YSBocmVmPSInOw0KJGRhdGEgLj0gSE9NRV9VUkw7DQokZGF0YSAuPSAnY29udGVudC5waHA/Y29udGVudF9pZD0nOw0KJGRhdGEgLj0gJHJlY29yZHMtPmNvbnRlbnRfaWQ7DQokZGF0YSAuPSAnJmNvbnRlbnRfdHlwZT1pc3N1ZSc7DQokZGF0YSAuPSAnIj4nOw0KJGRhdGEgLj0gJHJlY29yZHMtPnN1YmplY3Q7DQokZGF0YSAuPSAnPC9hPjwvbGk+JzsNCmVjaG8gJGRhdGEgOw0KfQ0KZWNobyAnPC91bD4nOyA=',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(13,54,NULL,'Z2xvYmFsICRkYjsNCiRzcWwgPSAiU0VMRUNUIGNvbnRlbnQuY29udGVudF9pZCBhcyBjb250ZW50X2lkLCBjb250ZW50LnN1YmplY3QgYXMgc3ViamVjdCAsIGV1YS5hbGlhcyBhcyBhbGlhcw0KCQkJCWZyb20gY29udGVudA0KCQkJCUxFRlQgSk9JTiBjX2RvY3VtZW50YXRpb24gT04gY19kb2N1bWVudGF0aW9uLmNvbnRlbnRfaWQ9Y29udGVudC5jb250ZW50X2lkDQoJCQkJTEVGVCBKT0lOIGNhdGVnb3J5X3JlZmVyZW5jZSBjciBPTiBjX2RvY3VtZW50YXRpb24uY29udGVudF9pZD1jci5yZWZlcmVuY2VfaWQgQU5EIGNyLmNhdGVnb3J5X2lkID0gMjcgDQoJCQkJTEVGVCBKT0lOIGV4dF91cmxfYWxpYXMgZXVhIE9OIGV1YS5jb250ZW50X2lkPWNvbnRlbnQuY29udGVudF9pZCANCgkJCQlvcmRlciBieSBjb250ZW50LmNyZWF0aW9uX2RhdGUgZGVzYyBMSU1JVCAwLCAxMCI7DQokcmVzdWx0ID0gJGRiLT5maW5kX2J5X3NxbCgkc3FsKTsNCg0KZWNobyAnPHVsIGNsYXNzPSJ1c2VyX2d1aWRlIHRyZWVfdmlldyI+JzsNCmZvcmVhY2ggKCRyZXN1bHQgYXMgJHJlY29yZHMpIHsNCiAkZGF0YSA9ICc8bGk+JzsNCiAJJGRhdGEgLj0gJzxhIGhyZWY9Iic7DQoJJGRhdGEgLj0gSE9NRV9VUkw7DQogaWYgKCFlbXB0eSgkcmVjb3Jkcy0+YWxpYXMpKSB7DQoJJGRhdGEgLj0gImNvbnRlbnQvJHJlY29yZHMtPmFsaWFzIjsNCiB9IGVsc2Ugew0KCSRkYXRhIC49ICdjb250ZW50LnBocD9jb250ZW50X2lkPSc7DQoJJGRhdGEgLj0gJHJlY29yZHMtPmNvbnRlbnRfaWQ7DQoJJGRhdGEgLj0gJyZjb250ZW50X3R5cGU9ZG9jdW1lbnRhdGlvbic7DQogfQ0KICRkYXRhIC49ICciPic7DQogJGRhdGEgLj0gJHJlY29yZHMtPnN1YmplY3Q7DQogJGRhdGEgLj0gJzwvYT48L2xpPic7DQogZWNobyAkZGF0YTsNCn0NCmVjaG8gJzwvdWw+Jzs=',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(14,54,NULL,'Z2xvYmFsICRkYjsNCiRzcWw9Ig0KU0VMRUNUIGNvbnRlbnQuY29udGVudF9pZCBhcyBjb250ZW50X2lkLCBjb250ZW50LnN1YmplY3QgYXMgc3ViamVjdA0KIGZyb20gY29udGVudCwgY19kb2N1bWVudGF0aW9uICANCiBMRUZUIEpPSU4gY2F0ZWdvcnlfcmVmZXJlbmNlIGNyIE9OIGNfZG9jdW1lbnRhdGlvbi5jb250ZW50X2lkPWNyLnJlZmVyZW5jZV9pZCBBTkQgY3IuY2F0ZWdvcnlfaWQgPSAyNyANCiB3aGVyZSBjX2RvY3VtZW50YXRpb24uY29udGVudF9pZD1jb250ZW50LmNvbnRlbnRfaWQgDQogb3JkZXIgYnkgY29udGVudC5jcmVhdGlvbl9kYXRlIA0KIGRlc2MgTElNSVQgMCwgMTAwDQogIjsNCiRyZXN1bHQgPSAkZGItPmZpbmRfYnlfc3FsKCRzcWwpOw0KDQplY2hvICc8dWwgY2xhc3M9InVzZXJfZ3VpZGUgdHJlZV92aWV3Ij4nOw0KZm9yZWFjaCgkcmVzdWx0IGFzICRyZWNvcmRzKXsNCiRkYXRhID0gJzxsaT4nOw0KJGRhdGEgLj0gJzxhIGhyZWY9Iic7DQokZGF0YSAuPSBIT01FX1VSTDsNCiRkYXRhIC49ICdjb250ZW50LnBocD9jb250ZW50X2lkPSc7DQokZGF0YSAuPSAkcmVjb3Jkcy0+Y29udGVudF9pZDsNCiRkYXRhIC49ICcmY29udGVudF90eXBlPWRvY3VtZW50YXRpb24nOw0KJGRhdGEgLj0gJyI+JzsNCiRkYXRhIC49ICRyZWNvcmRzLT5zdWJqZWN0Ow0KJGRhdGEgLj0gJzwvYT48L2xpPic7DQplY2hvICRkYXRhIDsNCn0NCmVjaG8gJzwvdWw+Jzsg',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(15,56,NULL,'aWYoaXNzZXQoJF9TRVNTSU9OWydyZWNlbnRfdmlzaXQnXSkpew0KJHJlY2VudF92aXNpdCA9ICc8dWwgaWQ9InJlY2VudF92aXNpdCI+JzsNCiRyZXZfYSA9IGFycmF5X3JldmVyc2UoJF9TRVNTSU9OWydyZWNlbnRfdmlzaXQnXSk7DQokY291bnQgPSAwOw0KZm9yZWFjaCgkcmV2X2EgYXMgJGsgPT4gJHYpew0KICRjb3VudCsrOw0KIGlmKCRjb3VudCA+PSA1KXsNCiAgYnJlYWs7DQogfQ0KIGlmKCFpc19udW1lcmljKCRrKSl7DQokcmVjZW50X3Zpc2l0IC49ICc8bGk+PGEgaHJlZj0iJy4kdi4nIj4nLnN1YnN0cigkaywgMCwgMzApLic8L2E+JzsNCiB9IGVsc2V7DQogJHJlY2VudF92aXNpdCAuPSAnPGxpPjxhIGhyZWY9IicuJHYuJyI+IFZzaXRpICcuJGsuJzwvYT4nOw0KfQ0KfQ0KJHJlY2VudF92aXNpdCAuPSAnPGxpIGNsYXNzPSJ2aWV3X2FsbCI+PGEgaHJlZj0iJy5IT01FX1VSTC4nZm9ybS5waHA/Y2xhc3NfbmFtZT11c2VyX2FjdGl2aXR5X3YmbW9kZT0yIj4gVmlldyBNb3JlIC4uLjwvYT4nOw0KJHJlY2VudF92aXNpdCAuPSAnPC91bD4nOw0KfQ0KZWNobyAkcmVjZW50X3Zpc2l0Ow==',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(16,58,NULL,'ICAgICAgICAgZWNobyAnPHNwYW4gY2xhc3M9ImluZm8iPkRyYWcgdGhlIHVyZ2VudCBjYXJkcyB0byBoZXJlPGJyPkRvdWJsZSBjbGljayB0byByZW1vdmUgaXQ8L3NwYW4+PHNwYW4gY2xhc3M9ImJ1dHRvbiIgaWQ9InNhdmVfdXJnZW50X2NhcmQiPlNhdmU8L3NwYW4+JzsNCiRleGlzdGluZ19kYXRhID0gZnBfdXJnZW50X2NhcmQ6OmZpbmRfY3VycmVudF9jYXJkTGlzdCgpOw0KICAgICAgICAgaWYgKCRleGlzdGluZ19kYXRhKSB7DQogICAgICAgICAgZWNobyAnPHVsIGlkPSJ1cmdlbnRfY2FyZF9ibG9jayI+JzsNCiAgICAgICAgICBlY2hvICRleGlzdGluZ19kYXRhOw0KICAgICAgICAgIGVjaG8gJzwvdWw+JzsNCiAgICAgICAgIH0gZWxzZSB7DQogICAgICAgICAgZWNobyAnPHVsIGlkPSJ1cmdlbnRfY2FyZF9ibG9jayI+JzsNCiAgICAgICAgICBlY2hvICc8L3VsPic7DQogICAgICAgICB9DQplY2hvICc8c2NyaXB0Pg0KICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7DQogIGRyYWdfZHJvcF91cmdlbnRfY2FyZCgpOw0KIHNhdmVVcmdlbnRDYXJkcygpOw0KIH0pOzwvc2NyaXB0Pic7',1,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(17,59,NULL,'     <div class=\"embed-responsive embed-responsive-16by9\">\r\n      <iframe class=\"embed-responsive-item\" src=\"//www.youtube.com/embed/AS8idx2Cg_U?list=PLI9s_lIFpC099xADLymQcDCmrDhnkxcjM\"></iframe>\r\n     </div>',0,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(18,59,NULL,'<iframe width=\"480\" height=\"270\" src=\"//www.youtube.com/embed/AS8idx2Cg_U?list=PLI9s_lIFpC099xADLymQcDCmrDhnkxcjM\" frameborder=\"0\" allowfullscreen></iframe>',NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(19,60,NULL,'<a class=\"flaticon-list90 clickable erp_dashborad\" href=\"form.php?class_name=user_dashboard_v&mode=2\" title=\"ERP Dashboard\"> ERP Dashboard </a>',0,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(20,60,NULL,'<a id=\"new_object_button\" class=\"flaticon-list90 clickable erp_dashborad\" href=\"form.php?class_name=user_dashboard_v&mode=2\" title=\"ERP Dashboard\"> ERP Dashboard </a>',NULL,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52'),(21,61,NULL,'        <div class=\"jumbotron\">\r\n        <h1>Special Offers</h1>\r\n        <p class=\"lead\">Buy products for more than $50 for free shipping.</p>\r\n        <p class=\"lead\">Buy products for more than $200 and get 10% off.</p>\r\n        <p class=\"lead\">Buy products for more than $300 and get 30% off.</p>\r\n        <p><a class=\"btn btn-lg btn-success\" href=\"#\" role=\"button\">Shop Now</a></p>\r\n      </div>',0,'1','2021-10-04 12:31:44','1','2021-10-04 12:37:52');
/*!40000 ALTER TABLE `block_content` ENABLE KEYS */;
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
