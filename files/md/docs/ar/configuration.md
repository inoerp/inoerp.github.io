---
id: configuration
title: Configuration
sidebar_label: Configuration
---

Use the receivable configurations to manage all aspects of your receivable processes. receivable processes default values from various settings to documents and transactions to simplify data entry and automate various transactions

## Receivable Option

The receivable option is defined at the Business Unit level and can be used to default various values such as Payment Term, Price List, etc., on receivable documents


To view/create/update a receivable option, navigate to the "receivable option" search screen from your dashboard/favorite.

<img src="/images/modules/ar/config/option/option_01.PNG" width="300"/>

Enter the organization/receivable option details or any other criteria in the search form and click on the search button to view an existing receivable option.  
Click on create a new button to create a new receivable option; by manually entering all the information,
You can create receivable options only for newly created business units. The business unit name is not updatable once a receivable option is saved for a business unit.

<img src="/images/modules/ar/config/option/option_02.PNG" width="800"/>

If you don't enter organization details, the system will show you all the receivable options. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search receivable options.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.

<img src="/images/modules/ar/config/option/option_03.PNG" width="350"/>

To view the search result in a table format, click on the table icon available on the bottom left corner.

To open a specific receivable option, click on the menu of that record, and click on view/fetch & view.

You can also click on the expand icon against any item on the search result screen to view the receivable option details such as business unit name, payment term, price list, etc.

<img src="/images/modules/ar/config/option/option_04.PNG" width="800"/>

The system will fetch all the data related to the selected receivable option. The receivable option details are shown either right to the search result screen or on a separate screen, depending on the device size.

<img src="/images/modules/ar/config/option/option_05.PNG" width="800"/>

Scroll left, right, up, down to view all the details. The receivable option line and details are shown in a separate tab.
The default configuration shows fields in various functional groups such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  


<img src="/images/modules/ar/config/option/option_06.PNG" width="800"/>

You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.
<img src="/images/modules/ar/config/option/option_07.PNG" width="800"/>


<details>
<summary>All Fields</summary>

| Name     | Sequence                   | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*vvBuOrg*| Bu Org |deferredSelect|ENTITY|
|**10**|*vvBuOrgCode*| Bu Org Code |deferredSelect|ENTITY|
|**20**|*vvPaymentTerm*| Payment Term |deferredSelect|FINANCE|
|**30**|*vvPriceList*| Price List |deferredSelect|FINANCE|
|**40**|*vvPaymentTermDescription*| Payment Term Description |InputType.textField|FINANCE|
|**50**|*vvShipToAddressName*| Ship To Address Name |deferredSelect|ENTITY|
|**60**|*vvShipToAddress*| Ship To Address |deferredSelect|ENTITY|
|**70**|*vvShipToCountry*| Ship To Country |deferredSelect|ENTITY|
|**80**|*vvShipToPostalCode*| Ship To Postal Code |deferredSelect|ENTITY|
|**90**|*vvShipToEmail*| Ship To Email |deferredSelect|ENTITY|
|**100**|*vvShipToPhone*| Ship To Phone |deferredSelect|ENTITY|
|**110**|*vvBillToAddressName*| Bill To Address Name |deferredSelect|PLANNING|
|**120**|*vvBillToAddress*| Bill To Address |deferredSelect|PLANNING|
|**130**|*vvBillToCountry*| Bill To Country |deferredSelect|PLANNING|
|**140**|*vvBillToPostalCode*| Bill To Postal Code |deferredSelect|PLANNING|
|**150**|*vvBillToEmail*| Bill To Email |deferredSelect|PLANNING|
|**160**|*vvBillToPhone*| Bill To Phone |deferredSelect|PLANNING|
|**170**|*sdreceivableOptionId*|Sd receivable Option Id |InputType.number|REFERENCE|
|**180**|*buOrgId*|Bu Org Id |deferredSelect|REFERENCE|
|**190**|*paymentTermId*|Payment Term Id |deferredSelect|REFERENCE|
|**200**|*mdmPriceListHeaderId*|Mdm Price List Header Id |deferredSelect|REFERENCE|
|**210**|*shipToId*|Ship To Id |deferredSelect|REFERENCE|
|**220**|*billToId*|Bill To Id |deferredSelect|PLANNING|
|**230**|*soApprovalHierarchy*|So Approval Hierarchy |InputType.select|DEFAULT|
|**240**|*quoteApprovalHierarchy*|Quote Approval Hierarchy |InputType.select|DEFAULT|
|**250**|*invOrgId*|Inv Org Id |deferredSelect|REFERENCE|
|**260**|*defaultLineType*|Default Line Type |InputType.select|CONTROL|
|**5270**|*createdBy*|Created By |InputType.textField|REFERENCE|
|**5280**|*creationDate*|Creation Date |InputType.dateTime|REFERENCE|
|**5290**|*lastUpdatedBy*|Last Updated By |InputType.textField|REFERENCE|
|**5300**|*lastUpdateDate*|Last Update Date |InputType.dateTime|REFERENCE|

</details>

## Customer Item Info

Customer item Info record is a source of information for receivable on a specific item and customer/site of that item. It contains the customer-specific fixed lot multiplier, price, lead time, etc.
You can maintain customer item Info on a customer or customer site level. If customer item Info records are not maintained for an item, the system uses the corresponding values from the item master.


To view/create/update a customer item Info, navigate to the "customer item info" search screen from your dashboard/favorite.

<img src="/images/modules/sd/config/customer_item_info/customer_item_info_01.PNG" width="300"/>

Enter the organization/customer item Info details or any other criteria in the search form and click on the search button to view an existing customer item Info.  
Click on create a new button to create a new customer- item Info; by manually entering all the information,
You can create customer item Info only for newly created business units. The business unit name is not updatable once a customer item Info is saved for a business unit.

<img src="/images/modules/sd/config/customer_item_info/customer_item_info_02.PNG" width="800"/>

If you don't enter organization details, the system will show you all the customer item Infos. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search customer item Infos.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.

<img src="/images/modules/sd/config/customer_item_info/customer_item_info_03.PNG" width="350"/>

To view the search result in a table format, click on the table icon available on the bottom left corner.

To open a specific customer item Info, click on the menu of that record, and click on view/fetch & view.

You can also click on the expand icon against any item on the search result screen to view the customer item Info details such as business unit name, payment term, price list, etc.

<img src="/images/modules/sd/config/customer_item_info/customer_item_info_04.PNG" width="800"/>

The system will fetch all the selected customer item Info data. The customer item Info details are shown either right to the search result screen or in a separate screen, depending on the device size.

<img src="/images/modules/sd/config/customer_item_info/customer_item_info_05.PNG" width="800"/>

Scroll left, right, up, down to view all the details. The customer-item Info line details are shown in a separate tab.
The default configuration shows fields in various functional groups such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  

You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.

<img src="/images/modules/sd/config/customer_item_info/customer_item_info_06.PNG" width="800"/>

<details>
<summary>All Fields</summary>

| Name     | Sequence                 | Label                    | InputType           | Field Group |
| -------- | ------------------------ | ------------------------ | ------------------- | ----------- |
|**10**|*vvCustomerName*| Customer Name |deferredSelect|ENTITY|
|**10**|*vvCustomerNumber*| Customer Number |deferredSelect|DATA|
|**20**|*vvCustomerSiteName*| Customer Site Name |deferredSelect|ENTITY|
|**30**|*vvCustomerSiteNumber*| Customer Site Number |deferredSelect|DATA|
|**40**|*vvItemNumber*| Item Number |deferredSelect|DEFAULT|
|**50**|*vvItemDescription*| Item Description |deferredSelect|DEFAULT|
|**60**|*vvUomCode*| Uom Code |deferredSelect|DEFAULT|
|**70**|*sdCustomerItemInfoId*|Sd Customer Item Info Id |InputType.number|PLANNING|
|**80**|*arCustomerId*|Ar Customer Id |deferredSelect|REFERENCE|
|**90**|*arCustomerSiteId*|Ar Customer Site Id |deferredSelect|REFERENCE|
|**100**|*buOrgId*|Bu Org Id |deferredSelect|REFERENCE|
|**110**|*invItemMasterId*|Inv Item Master Id |deferredSelect|REFERENCE|
|**120**|*custPartNumber*|Cust Part Number |InputType.textField|DATA|
|**130**|*manufacturer*|Manufacturer |InputType.textField|DEFAULT|
|**140**|*businessType*|Business Type |InputType.textField|CONTROL|
|**150**|*description*|Description |InputType.textField|DEFAULT|
|**160**|*leadTime*|Lead Time |InputType.number|PLANNING|
|**170**|*unitPrice*|Unit Price |InputType.textField|FINANCE|
|**180**|*status*|Status |InputType.textField|CONTROL|
|**5190**|*createdBy*|Created By |InputType.textField|REFERENCE|
|**5200**|*creationDate*|Creation Date |InputType.dateTime|REFERENCE|
|**5210**|*lastUpdatedBy*|Last Updated By |InputType.textField|REFERENCE|
|**5220**|*lastUpdateDate*|Last Update Date |InputType.dateTime|REFERENCE|

</details>



## Document Sequence

Document sequence generates unique numbers for various documents such as Purchase Order, Purchase Agreement, receivable Order, Delivery Number, etc. All the seeded sequence starts with number 1. However, you can change it to a different value before starting to use the application.

A document sequence consists of 4 element
1. Prefix
2. Unique Number
3. Suffix
4. Delimiter 

To view/create/update a document sequence, navigate to the "document sequence" search screen from your dashboard/favorite.

<img src="/images/modules/sys/doc_sequence/doc_seq_01.PNG" width="300"/>

Enter the entity name/document sequence details or any other criteria in the search form and click on the search button to view an existing document sequence.  
Click on create a new button to create a new document sequence; by manually entering all the information,
Copying an existing document sequence to a new document sequence is always better than manually entering all the data to create a new document sequence.

<img src="/images/modules/sys/doc_sequence/doc_seq_02.PNG" width="800"/>

If you don't enter document sequence details, the system will show you all the document sequences. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search document sequences.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.

<img src="/images/modules/sys/doc_sequence/doc_seq_03.PNG" width="350"/>

To view the search result in a table format, click on the table icon available on the bottom left corner.

To open a specific document sequence, click on the menu of that record, and click on view/fetch & view.

You can also click on the expand icon against any item on the search result screen to view the document sequence details such as business unit name, payment term, price list, etc.

<img src="/images/modules/sys/doc_sequence/doc_seq_04.PNG" width="800"/>

The system will fetch all the data related to the selected document sequence. The document sequence details are shown either right to the search result screen or in a separate screen, depending on the device size.

Scroll left, right, up, down to view all the details. The document sequence line and details are shown in a separate tab.
The default configuration shows fields in various functional groups such as
* Reference
* Data


You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.

<img src="/images/modules/sys/doc_sequence/doc_seq_05.PNG" width="300"/>

While creating a new document sequence, you can click on the select icon on the entity name field to search and select an entity name.

<img src="/images/modules/sys/doc_sequence/doc_seq_06.PNG" width="600"/>

Click on the search button to search available entity names. Click on the select action buttons to select the entity.

<details>
<summary>All Fields</summary>

| Name     | Sequence                 | Label                    | InputType           | Field Group |
| -------- | ------------------------ | ------------------------ | ------------------- | ----------- |
|**10**|*sysDocSequenceId*|Sys Doc Sequence Id |InputType.number|REFERENCE|
|**10**|*entityName*|Entity Name |deferredSelect|DEFAULT|
|**20**|*docPrefix*|Doc Prefix |InputType.textField|DEFAULT|
|**30**|*nextNumber*|Next Number |InputType.number|DATA|
|**40**|*docSufix*|Doc Sufix |InputType.textField|DEFAULT|
|**50**|*docDelimiter*|Doc Delimiter |InputType.textField|DEFAULT|
|**60**|*leOrgId*|Le Org Id |deferredSelect|REFERENCE|
|**70**|*buOrgId*|Bu Org Id |deferredSelect|REFERENCE|
|**80**|*invOrgId*|Inv Org Id |deferredSelect|REFERENCE|
|**5090**|*createdBy*|Created By |InputType.textField|REFERENCE|
|**5100**|*creationDate*|Creation Date |InputType.dateTime|REFERENCE|
|**5110**|*lastUpdatedBy*|Last Updated By |InputType.textField|REFERENCE|
|**5120**|*lastUpdateDate*|Last Update Date |InputType.dateTime|REFERENCE|

</details>



## Document Type - Line

Document Type is defined at the instance level and can be used to control and default various values on the receivable order line.

To view/create/update a Document Type, navigate to the "Document Type" search screen from your dashboard/favorite.

<img src="/images/modules/sd/config/document_line/document_line_01.PNG" width="700"/>

Enter the Document Type details or any other criteria in the search form and click on the search button to view an existing Document Type.  
Click on create a new button to create a new Document Type; by manually entering all the information,


<img src="/images/modules/sd/config/document_line/document_line_02.PNG" width="300"/>

The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search Document Types.

<img src="/images/modules/sd/config/document_line/document_line_03.PNG" width="800"/>

To view the search result in a table format, click on the table icon available on the bottom left corner.

To open a specific Document Type, click on the menu of that record, and click on view/fetch & view.

You can also click on the expand icon against any item on the search result screen to view the Document Type details such as business unit name, payment term, price list, etc.

<img src="/images/modules/sd/config/document_line/document_line_04.PNG" width="800"/>

The system will fetch all the data related to the selected Document Type. The Document Type details are shown either right to the search result screen or on a separate screen depending on the device size.

<img src="/images/modules/sd/config/document_line/document_line_05.PNG" width="800"/>

Scroll left, right, up, down to view all the details. The Document Type line and details are shown in a separate tab.
The default configuration shows fields in various functional groups such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  

You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.


<details>
<summary>All Fields</summary>

| Name     | Sequence                   | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*sdDocumentTypeId*|Sd Document Type Id |InputType.number|CONTROL|
|**10**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**20**|*srcEntityId*|Src Entity Id |InputType.textField|REFERENCE|
|**30**|*documentTypeCode*|Document Type Code |InputType.textField|CONTROL|
|**40**|*buOrgId*|Bu Org Id |deferredSelect|REFERENCE|
|**50**|*journalProfileId*|Journal Profile Id |InputType.number|REFERENCE|
|**60**|*soDocumentLevel*|So Document Level |InputType.select|DEFAULT|
|**70**|*soDocumentType*|So Document Type |deferredSelect|CONTROL|
|**80**|*supplySource*|Supply Source |InputType.textField|DEFAULT|
|**90**|*description*|Description |InputType.textField|DEFAULT|
|**100**|*category*|Category |InputType.select|DEFAULT|
|**110**|*processFlowId*|Process Flow Id |InputType.number|REFERENCE|
|**120**|*defaultLineDocument*|Default Line Document |InputType.number|PLANNING|
|**130**|*priceListHeaderId*|Price List Header Id |InputType.number|REFERENCE|
|**140**|*defaultShipfromOrgId*|Default Shipfrom Org Id |deferredSelect|PLANNING|
|**150**|*destinationType*|Destination Type |InputType.textField|CONTROL|
|**160**|*arTransactionType*|Ar Transaction Type |InputType.textField|CONTROL|
|**170**|*arTransactionSource*|Ar Transaction Source |InputType.textField|DEFAULT|
|**5180**|*createdBy*|Created By |InputType.textField|REFERENCE|
|**5190**|*creationDate*|Creation Date |InputType.dateTime|REFERENCE|
|**5200**|*lastUpdatedBy*|Last Updated By |InputType.textField|REFERENCE|
|**5210**|*lastUpdateDate*|Last Update Date |InputType.dateTime|REFERENCE|

</details>
