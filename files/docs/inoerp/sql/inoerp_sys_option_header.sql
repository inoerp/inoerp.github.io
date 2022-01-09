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
-- Table structure for table `sys_option_header`
--

DROP TABLE IF EXISTS `sys_option_header`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sys_option_header` (
  `option_header_id` int unsigned NOT NULL AUTO_INCREMENT,
  `access_level` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT 'both',
  `option_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `description` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `module_code` varchar(10) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `option_assignments` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `efid` int DEFAULT NULL,
  `status` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `rev_enabled` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `rev_number` int DEFAULT NULL,
  `created_by` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT 'UNKOWN',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT 'UNKOWN',
  `last_update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`option_header_id`),
  UNIQUE KEY `option_type` (`option_name`)
) ENGINE=InnoDB AUTO_INCREMENT=279 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_option_header`
--

LOCK TABLES `sys_option_header` WRITE;
/*!40000 ALTER TABLE `sys_option_header` DISABLE KEYS */;
INSERT INTO `sys_option_header` VALUES (77,'SYSTEM','ORG_TYPE','Org Type','sys',NULL,NULL,NULL,NULL,2,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(79,'SYSTEM','ADDRESS_TYPE','Address type','gl',NULL,1,NULL,NULL,1,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(80,'SYSTEM','COA_STRUCTURE','Chart of account structure','gl','GL_COA',NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(81,'SYSTEM','EXT_CONTENT_ISSUE_STATUS','Issue status used in issue content type','sys',NULL,1,'active','enabled',1,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(82,'BOTH','COA01','Chart of account 01','gl','GL_COA',1,'','',1,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(83,'SYSTEM','COA_ACCOUNT_TYPE','Chart of account type - Asset A, Liability L, Owners Equity E, Expense E, Income I','gl',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(84,'SYSTEM','ITEM_TYPE','Item type used for Item master','inv',NULL,1,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(85,'SYSTEM','UOM_CLASS','Unit of Measure Class','inv',NULL,0,NULL,NULL,0,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(86,'SYSTEM','TRANSACTION_TYPE_CLASS','Transaction Type Class','inv',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(87,'SYSTEM','INV_TRANSACTION_ACTION','Inventory Transaction Actions','inv',NULL,0,'','',0,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(88,'SYSTEM','SUBINVENTORY_TYPE','Subinventory Type','inv','',0,'','',1,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(89,'SYSTEM','LOCATOR_CONTROL','Locator Control','inv',NULL,0,'active','enabled',0,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(90,'BOTH','LOCATOR_CONTROLS','Locator Controls','inv',NULL,0,'','',0,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(91,'SYSTEM','LOCATOR_STRUCTURE','Locator Structures','inv',NULL,0,'','',0,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(92,'BOTH','VIEW_DISPLAY_TYPE','View dsiplay type','ext',NULL,0,'','',0,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(98,'BOTH','EXTN_CONTENT_ISSUE_CATEGORY','Issue Category','ext',NULL,1,'active','disabled',0,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(117,'BOTH','EXTN_CONTENT_ISSUE_COMPONENT','Issue Component','ap',NULL,1,'active','enabled',1,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(118,'SYSTEM','EXTN_CONTENT_ISSUE_PRIORITY','Issue List Priority','ext',NULL,4,'active','enabled',1,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(119,'BOTH','USER_ROLES','User roles','sys',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(120,'BOTH','INVENTORY_ORG_TYPE','Inventory Organization Type','inv',NULL,0,'active','enabled',1,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(121,'BOTH','COSTING_METHODS','Costing Methods','inv',NULL,0,'active','',0,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(122,'SYSTEM','MANUFACTURING_ITEM_TYPE','Manufacuting Item Type','inv',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(123,'BOTH','ITEM_STATUS','Item Status','inv',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(124,'BOTH','SUPPLIER_TYPE','Supplier Type','ap',NULL,NULL,NULL,NULL,2,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(125,'BOTH','COUNTRY','All countries','sys','',0,'active','enabled',0,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(126,'SYSTEM','PO_RECEIPT_ROUTING','Purchasing Receipt Routing','pur',NULL,NULL,'active','enabled',NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(127,'SYSTEM','AP_INVOICE_MATCH_LEVEL','AP Invoice Match Level','ap',NULL,0,'active','enabled',0,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(128,'BOTH','EXCEPTION_ACTION','Exception Action','sys',NULL,0,'active','enabled',0,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(129,'SYSTEM','SUPPLIER_SITE_TYPE','Supplier Site Type','ap',NULL,0,'active','enabled',0,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(130,'SYSTEM','AP_PAY_ON','Auto Create AP Invoice','ap',NULL,0,'active','enabled',0,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(131,'SYSTEM','PO_TYPE','Purchase Order Types','pur',NULL,NULL,'active','enabled',2,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(132,'SYSTEM','PO_STATUS','PO Status','pur',NULL,NULL,'active','enabled',NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(133,'SYSTEM','PO_LINE_TYPE','PO Line Types','pur',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(134,'SYSTEM','CURRENCY','Currency Codes','gl','',0,'active','enabled',0,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(135,'SYSTEM','WIP_SUPPLY_TYPE','WIP Supply Types','wip',NULL,NULL,'active','enabled',NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(136,'SYSTEM','RESOURCE_TYPE','BOM Resource Types','bom',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(137,'SYSTEM','CHARGE_TYPE','Charge Type','bom',NULL,NULL,'active','enabled',NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(138,'SYSTEM','BOM_CHARGE_BASIS','Material, Resource & OH Charge basis','bom',NULL,NULL,'active','enabled',NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(139,'SYSTEM','BOM_OVERHEAD_TYPE','Overhead Type - Material or Resource','bom','',0,'active','enabled',0,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(140,'SYSTEM','BOM_DEPARTMENT_TYPE','Bom Department Id','bom',NULL,NULL,'active','enabled',NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(141,'SYSTEM','BOM_SCHEDULE_OPTION','Bom Schedule Options','bom',NULL,NULL,'active','enabled',NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(142,'SYSTEM','WIP_WO_TYPE','WIP WO/JOB Type','wip',NULL,NULL,'active','enabled',NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(143,'SYSTEM','WIP_WO_STATUS','Work Order Status','wip',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(144,'SYSTEM','WIP_TRANSACTIONS','All WIP Transactions','wip',NULL,NULL,'active','enabled',NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(145,'SYSTEM','WIP_MOVE_STEP','WIP Move Steps','wip',NULL,NULL,'active','enabled',NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(146,'SYSTEM','CUSTOMER_SITE_TYPE','Customer Site Type','ar',NULL,NULL,'active','enabled',NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(147,'SYSTEM','AR_CUSTOMER_TYPE','AR Customer Type','ar',NULL,NULL,'active',NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(148,'SYSTEM','AR_CUSTOMER_CREDIT_CLASS','Customer Credit Class','ar',NULL,NULL,'active',NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(149,'SYSTEM','EXT_SUMMARY_DISPLAY_TYPE','Extesnion content summary display type','ext',NULL,NULL,'active','enabled',NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(150,'SYSTEM','EXT_CONTENT_FIELD_TYPE','Extension field type','ext',NULL,NULL,'active','enabled',NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(151,'SYSTEM','OPTION_ASSIGNMENT','Option Assgnments','sys',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(152,'SYSTEM','SYS_VALIDATION_TYPE','Validation Type Used on Group Value','sys',NULL,NULL,'active',NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(153,'BOTH','GL_PERIOD_TYPE','GL Period Types','gl',NULL,NULL,'active','enabled',1,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(154,'BOTH','GL_CALENDAR_NAME','GL Calendar Name','gl',NULL,NULL,'active',NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(155,'SYSTEM','GL_BALANCE_TYPE','GL Balance Type','gl',NULL,NULL,'active','enabled',NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(156,'SYSTEM','GL_JOURNAL_STATUS','GL Journal Status','gl',NULL,NULL,'active','enabled',NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(157,'SYSTEM','GL_JOURNAL_CATEGORY','GL Journal Categories','gl',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(158,'SYSTEM','GL_PERIOD_STATUS','GL Period Status','gl',NULL,NULL,'active','enabled',NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(159,'SYSTEM','APPROVAL_STATUS','Approval Status','sys',NULL,NULL,'active','enabled',NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(160,'SYSTEM','AP_TRANSACTION_TYPE','AP Transaction Type','ap',NULL,NULL,'active','enabled',2,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(161,'SYSTEM','GL_JOURNAL_LINE_TYPE','GL Journal Line Type','gl',NULL,NULL,'active','enabled',NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(162,'SYSTEM','AP_PAYMENT_TYPE','AP PaymentType','ap',NULL,NULL,'active','enabled',2,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(163,'SYSTEM','AR_TRANSACTION_ACTION','AR Transaction Action','ar',NULL,NULL,'active','enabled',2,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(164,'SYSTEM','AR_TRANSACTION_CLASS','AR Transaction Classes','ar','',0,'active','enabled',2,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(165,'SYSTEM','AR_RECEIPT_TYPE','AR Receipt Type','ar',NULL,NULL,'active','enabled',1,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(166,'SYSTEM','SO_TYPE','Sales Order Types','sd',NULL,NULL,'active','enabled',2,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(167,'SYSTEM','SO_STATUS','SO Status','sd','',0,'active','enabled',0,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(168,'SYSTEM','CST_COST_ELEMENT_TYPE','CST Cost Elements','bom','',0,'active','enabled',1,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(169,'SYSTEM','CST_COST_ACTION','Costing Cost Actions','bom',NULL,NULL,'active','enabled',2,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(170,'SYSTEM','MP_PLANNING_METHOD','Material Planning Method','inv','',0,'active','enabled',2,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(171,'SYSTEM','PO_REQUISITION_TYPE','PO Requisition Types','pur','',0,'active','enabled',2,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(172,'SYSTEM','PO_SOURCING_TYPE','PO Sourcing Types','pur','',0,'active','enabled',0,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(173,'SYSTEM','FP_BUCKET','Planning Bucket','fp','',0,'active','enabled',2,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(174,'SYSTEM','FP_SOURCE_LIST_TYPE','Planning Source List Type','fp','',0,'active','enabled',1,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(175,'SYSTEM','FP_SOURCE_LIST_LINE_TYPE','Planning Source List Line Type','fp','',0,'active','enabled',1,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(176,'SYSTEM','FP_DEMAND_TYPE','Planning Demand Type','inv','',0,'active','',0,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(177,'USER','INV_ITEM_PRODUCT_LINE','Item Product Line','inv','',0,'active','enabled',0,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(178,'SYSTEM','SYS_ROUNDING_OPTION','System Rounding Option','sys',NULL,NULL,'active','enabled',NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(179,'SYSTEM','FP_MRP_EXCEPTION_TYPE','MRP Exceptions','fp','',0,'','',0,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(180,'SYSTEM','MDM_TAX_TYPE','Tax Types','sys','',0,'active','enabled',2,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(181,'BOTH','INV_ITEM_TAX_CLASS','Product Tax Classification','inv','',0,'','',0,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(182,'SYSTEM','SYS_MODULE','Module Name','sys',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(183,'SYSTEM','SD_SO_STATUS','Sales Order Header Status','sys','',0,'active','enabled',0,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(184,'SYSTEM','EXT_PATH_TYPE','Extension Path Types','sys',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(185,'BOTH','MDM_BANK_ACCOUNT_TYPE','Bank Account Types','gl','',0,'active','enabled',0,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(186,'BOTH','INV_ABC_CODE','Inventory ABC Codes','inv','',0,'active','enabled',0,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(187,'BOTH','INV_ABC_CRITERIA','ABC Valuation Criterias','inv','',0,'active','enabled',0,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(188,'BOTH','GL_CURRENCY_CONVERSION_TYPE','GL Currency Conversion Type','gl','',0,'active','enabled',0,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(189,'BOTH','HR_MARITAL_STATUS','HR Marital Status','sys',NULL,NULL,'active',NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(190,'BOTH','HR_JOB_POSITION_TYPE','Job Position Type','sys',NULL,NULL,'active',NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(191,'BOTH','HR_JOB_FUNCTIONAL_AREA','Job Functional Area','sys',NULL,NULL,'active',NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(192,'BOTH','HR_COMPENSATION_ELEMENT_TYPE','HR Compensation Type','sys',NULL,NULL,'active',NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(193,'BOTH','HR_COMPENSATION_ELEMENT_CLASS','HR Compensation Element Class','sys',NULL,NULL,'active',NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(194,'BOTH','HR_COMPENSATION_ELEMENT_CATEGORY','HR Compensation Category','sys',NULL,NULL,'active',NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(195,'BOTH','HR_EDUCATION_MODE','Education Mode','sys',NULL,NULL,'active',NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(196,'BOTH','HR_GENDER','Gender','sys',NULL,NULL,'active',NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(197,'BOTH','HR_PERSON_TYPE','Person Type','sys',NULL,NULL,'active',NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(198,'BOTH','HR_IDENTIFICATION_TYPE','Employee Identification Type','sys',NULL,NULL,'active',NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(199,'BOTH','HR_PAYMENT_METHOD_TYPE','Payment  Method Type','sys',NULL,NULL,'active',NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(200,'BOTH','SYS_PERIOD_TYPE','System Period Types','sys',NULL,NULL,'active',NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(201,'BOTH','HR_LEAVE_CATEGORY','HR Leave Category','sys',NULL,NULL,'active',NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(202,'SYSTEM','SYS_DOCUMENT_TYPE','Documents Types','sys',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(203,'SYSTEM','SYS_NOTIFICATION_NAME','System Notification Name','sys',NULL,NULL,'active','enabled',NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(204,'SYSTEM','SYS_HOLD_TYPE','System Hold Type','sys',NULL,NULL,'active','enabled',NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(205,'SYSTEM','INV_SEARIAL_STATUS','Serial Number Status','inv',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(206,'BOTH','SYS_EXTRA_FIELD_TYPE','Extra Field Type','sys',NULL,NULL,'active','enabled',NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(207,'BOTH','USER_FAVOURITE_GROUP','User Favourite Group','sys',NULL,1,'active','enabled',1,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(208,'BOTH','EXT_VIEW_DISPLAY_TYPE','View Display Type','sys',NULL,NULL,'active','enabled',NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(209,'BOTH','USER_REPORT_GROUP','User Report Group','sys',NULL,NULL,'active','enabled',NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(210,'USER','SF_ITEM_INVETORY_CATEGORY','Secondary Field : Item Purchasing Category','inv',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(211,'BOTH','BC_LABEL_TYPE','Barcode Label Type','sys',NULL,NULL,NULL,'enabled',NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(212,'BOTH','SYS_PRINTER_TYPE','Barcode Label Type','sys',NULL,NULL,'active','enabled',NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(213,'BOTH','SD_SALES_CHANNEL','Sales Channel','sd',NULL,NULL,'active','enabled',NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(214,'BOTH','HR_TEAM_REGION','Team Region','hr',NULL,NULL,'active',NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(215,'BOTH','HR_ROLE','HR Role','hr',NULL,NULL,'active',NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(216,'BOTH','SD_LEAD_TYPE','Sales Lead Type','sd',NULL,NULL,'active','enabled',NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(217,'BOTH','EXT_WEB_CONTACT_CATEGORY','Web Contact Category','ext',NULL,NULL,NULL,'enabled',NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(218,'SYSTEM','FA_ASSET_CLASS_TYPE','Asset Class Type','fa',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(219,'SYSTEM','FA_ASSET_CATEGORY_TYPE','Asset Category Type','fa',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(220,'SYSTEM','INV_LOC_DEFAULT_TYPE','Item Transaction Location Default Type ','inv',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(221,'BOTH','EXTN_CATEGORY_TYPE','Category Types  - Extension','ext',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(222,'SYSTEM','INV_ITEM_BOM_TYPE','Inventory Item BOM Type','inv',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(223,'BOTH','USER_GROUPS','User Groups','sys',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(224,'BOTH','SYS_LANGUAGE','Language','sys',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(225,'BOTH','AM_ACTIVITY_TYPE','Activity Type','am',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(226,'BOTH','AM_ACTIVITY_CAUSE','Activity Cause','am',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(227,'BOTH','AM_ACTIVITY_SOURCE','Activity Source','am',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(228,'SYSTEM','AM_WO_TYPE','Maintenance WO/JOB Type','am',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(229,'BOTH','INV_ITEM_RELATION','Item Relations','inv',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(230,'BOTH','ADDRESS_USAGE_TYPE','Address Usage Type','org',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(231,'BOTH','HD_SR_IMPACT','Service Request Impact','hd',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(232,'BOTH','HD_SR_STATUS','Service Request Status','hd',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(233,'BOTH','HD_SR_TYPE','Service Request Type','hd',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(234,'BOTH','HD_SR_CATEGORY','Service Request Category','hd',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(235,'BOTH','HD_SR_ESCALATION','Service Request Escalation','hd',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(236,'BOTH','HD_SR_CLOSE_CODE','Service Request Close Type','hd',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(237,'BOTH','HD_CR_TYPE','Change Request Type','hd',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(238,'BOTH','SUPPLIER_CATEGORY','Supplier Category','ap',NULL,NULL,NULL,NULL,2,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(239,'BOTH','AR_CUSTOMER_CATEGORY','AR Customer Category','ar',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(240,'BOTH','ADM_PRIMARY_TASK_STATUS','Primary Task Type','adm',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(241,'BOTH','HD_PRI_SERVICE_TYPE','Primary Service Type','hd',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(242,'BOTH','SYS_BILLING_TYPE','Billing Type','sys',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(243,'BOTH','HR_TEAM_TYPE','HR Team Type','hr',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(244,'SYSTEM','AR_CUSTOMER_RELATIONSHIP','AR Customer Relationship','ar',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(245,'SYSTEM','PRJ_CUSTOMER_RELATIONSHIP','Project Customer Relationship','prj',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(246,'SYSTEM','PRJ_EXPENDITURE_CATEGORY','Project Expenditure Categories','prj',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(247,'BOTH','PRJ_REVENUE_CATEGORY','Project Revenue Categories','prj',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(248,'SYSTEM','PRJ_RESOURCE_CLASS','Project Resource Class','prj',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(249,'BOTH','PRJ_WORK_UTILIZATION_TYPE','Project Work Utilization Type','prj',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(250,'BOTH','CE_SERVICE TYPE','Service Type - Common Entity','adm',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(251,'SYSTEM','PRJ_BUDGET_ENTRY_METHOD','Project Budget Entry Method','prj',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(252,'BOTH','PRJ_BUDGET_TYPE','Project Budget Type','prj',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(253,'BOTH','PRJ_PROJECT_PHASE','Project Phases','prj',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(254,'SYSTEM','PRJ_EVENT_CLASS','Project Event Type Class','prj',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(255,'SYSTEM','AR_TRNX_APPROVAL_STATUS','AR Transacion Approval Status','sys',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(256,'SYSTEM','AP_PAY_GROUP','AP Payment Group','ap',NULL,NULL,NULL,NULL,2,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(257,'SYSTEM','PRJ_DOCUMENT_TYPE','Project Document Type','prj',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(258,'SYSTEM','HR_EXPENSE_CATEGORY','HR Expense Category','hr',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(259,'SYSTEM','HR_LOCATION','HR Location Structure','hr','HR_LOCATION',NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(260,'BOTH','HD_SUBSCR_DOC_TYPE','Subscription Doument Type','hd',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(261,'BOTH','HD_SUBSCR_LINE_TYPE','Subscription Line Type','hd',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(262,'BOTH','PRJ_ACCOUNTING_GRP','Project Accounting Group','prj',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(263,'BOTH','GL_JOURNAL_SOURCE','GL Journal Source','gl',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(264,'BOTH','QA_ELEMENT_TYPE','Quality Element Type','qa',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(265,'BOTH','QA_COLLECTION_PLAN_TYPE','Quality Collection Plan Types','qa',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(266,'BOTH','QA_COLLECTION_TRIGGER','Quality Collection Plan Triggers','qa',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(267,'BOTH','QA_QUALITY_ACTION','System Actions on Quality Results','qa',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(268,'BOTH','PM_FORMULA_TYPE','Formula Type','pm',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(269,'BOTH','PM_OPERATION_ACTIVITY',NULL,'pm',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(270,'BOTH','LMS_FEE_ELEMENT_TYPE','LMS Fee Element Type','sys',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(271,'BOTH','LMS_FEE_ELEMENT_CLASS','LMS Fee Element Class','sys',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(272,'BOTH','LMS_DEPARTMENT_TYPE','LMS Department Type','lms',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(273,'BOTH','SYS_DEMAND_CLASS','Demand Class','sys',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(274,'BOTH','SYS_DISCOUNT_CLASS','Discount Class','sys',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(275,'BOTH','EXTN_FOLDER_TYPE','Folder Types  - Extension','ext',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(276,'Test01','Test01',NULL,'ap',NULL,NULL,NULL,NULL,NULL,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(277,'BOTH','SYS_GENERIC_STATUS','System Generic Status','sys',NULL,NULL,NULL,NULL,1,'1','2021-10-04 12:34:13','1','2021-10-04 12:38:23'),(278,'BOTH','CST_COST_TYPE','Cost Item Cost Type','cst',NULL,NULL,NULL,NULL,NULL,'UNKOWN','2022-01-03 07:16:23','UNKOWN','2022-01-03 07:16:23');
/*!40000 ALTER TABLE `sys_option_header` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08  3:48:36
