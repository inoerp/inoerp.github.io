---
id: supplier
title: Supplier
sidebar_label: Supplier
---

:::caution

This documentation is incomplete.

:::

A supplier is a person or an internal/external organization that supplies products or services. A supplier is usually known as either the manufacturer who manufactures the product itself or a distributor who purchases the goods from manufacturers. 
Suppliers are defined at a global level and assigned to a business organization. In inoERP, you can create a supplier using the supplier screen. You can also define an internal organization as a supplier. Before using a supplier for purchasing purposes, you need to express all three components of the supplier.

- supplier
- supplier Site
- supplier BU


## Supplier

A supplier header contains supplier name, number, type, status, etc. 

To view/create/update a supplier, navigate to the "supplier" search screen from your dashboard/favorite.

<img src="/images/modules/ap/supplier/supplier_01.PNG" width="400"/>

Enter the supplier details or any other criteria in the search form and click on the search button to view an existing supplier.  
Click on create a new button to create a new supplier; by manually entering all the information,
Copy an existing supplier to a new supplier is always better than manually entering all the data to create a new supplier.
The application lets you update all the details before confirmation; you can configure which fields are view-only after the confirmation.

<img src="/images/modules/ap/supplier/supplier_02.PNG" width="800"/>

If you don't enter organization/supplier details, the system will show you all the suppliers. If your organization has configured to make any field mandatory for search, you have to enter those fields to search suppliers.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.

<img src="/images/modules/ap/supplier/supplier_03.PNG" width="350"/>

To view the search result in a table format, click on the table icon available on the bottom left corner.

To open a specific supplier, click on the menu of that record, and click on view/fetch & view.

You can also click on the expand icon against any item on the search result screen to view the supplier header details such as supplier number, quantities, start date, status, etc.

<img src="/images/modules/ap/supplier/supplier_04.PNG" width="800"/>

The system will fetch all the data related to the selected supplier. Depending on the device size, the supplier details are shown either right to the search result screen or separately.

<img src="/images/modules/ap/supplier/supplier_05.PNG" width="800"/>

Scroll left, right, up, down to view all the details. The supplier line and details are shown in a separate tab.
The default configuration shows fields in various functional groups such as
<img src="/images/modules/ap/supplier/supplier_06.PNG" width="800"/>

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
|**10**|*vvShipToAddressName*| Ship To Address Name |deferredSelect|ENTITY|
|**10**|*vvShipToAddress*| Ship To Address |deferredSelect|ENTITY|
|**20**|*vvShipToCountry*| Ship To Country |deferredSelect|ENTITY|
|**30**|*vvShipToPostalCode*| Ship To Postal Code |deferredSelect|ENTITY|
|**40**|*vvShipToEmail*| Ship To Email |deferredSelect|ENTITY|
|**50**|*vvShipToPhone*| Ship To Phone |deferredSelect|ENTITY|
|**60**|*vvBillToAddressName*| Bill To Address Name |deferredSelect|PLANNING|
|**70**|*vvBillToAddress*| Bill To Address |deferredSelect|PLANNING|
|**80**|*vvBillToCountry*| Bill To Country |deferredSelect|PLANNING|
|**90**|*vvBillToPostalCode*| Bill To Postal Code |deferredSelect|PLANNING|
|**100**|*vvBillToEmail*| Bill To Email |deferredSelect|PLANNING|
|**110**|*vvBillToPhone*| Bill To Phone |deferredSelect|PLANNING|
|**120**|*arsupplierId*|Ar supplier Id |deferredSelect|REFERENCE|
|**130**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**140**|*srcEntityId*|Src Entity Id |InputType.textField|REFERENCE|
|**150**|*supplierNumber*|supplier Number |deferredSelect|DATA|
|**160**|*supplierName*|supplier Name |deferredSelect|ENTITY|
|**170**|*supplierRelationship*|supplier Relationship |InputType.textField|ENTITY|
|**180**|*altName*|Alt Name |InputType.textField|PLANNING|
|**190**|*supplierType*|supplier Type |InputType.select|CONTROL|
|**200**|*supplierPriority*|supplier Priority |InputType.select|ENTITY|
|**210**|*supplierCategory*|supplier Category |InputType.textField|ENTITY|
|**220**|*taxCountry*|Tax Country |InputType.textField|FINANCE|
|**230**|*taxRegNo*|Tax Reg No |InputType.textField|FINANCE|
|**240**|*taxPayerId*|Tax Payer Id |InputType.textField|REFERENCE|
|**250**|*shipToId*|Ship To Id |deferredSelect|REFERENCE|
|**260**|*billToId*|Bill To Id |deferredSelect|PLANNING|
|**270**|*supplierContactId*|supplier Contact Id |InputType.number|REFERENCE|
|**280**|*supplierCreditClass*|supplier Credit Class |InputType.number|ENTITY|
|**290**|*profileName*|Profile Name |InputType.textField|DEFAULT|
|**300**|*status*|Status |InputType.select|CONTROL|
|**320**|*revNumber*|Rev Number |InputType.dateTime|DATA|
|**360**|*glAcProfileHeaderId*|Gl Ac Profile Header Id |deferredSelect|REFERENCE|
|**5310**|*createdBy*|Created By |InputType.textField|REFERENCE|
|**5330**|*creationDate*|Creation Date |InputType.dateTime|REFERENCE|
|**5340**|*lastUpdatedBy*|Last Updated By |InputType.textField|REFERENCE|
|**5350**|*lastUpdateDate*|Last Update Date |InputType.dateTime|REFERENCE|

</details>

## Supplier BU

supplier BU(Business Unit) relationship represents the attributes of the business relationship that a business organization can enter into with a supplier. supplier-BU contains information about the terms and conditions of doing business with the supplier.
You can assign the same supplier to multiple business units.

<img src="/images/modules/ap/supplier/supplier_07.PNG" width="800"/>



Navigate to the lines tab to view/add/update lines.  
Click on the add new entity to add a new line. If a line already exists, click on copy entity to copy all the details.
You can enable/disable fields allowed to be copied in the menu configuration.  
<img src="/images/modules/ap/supplier/supplier_07a.PNG" width="300"/>

Define **Payment Terms** and **Price Lists** before creating supplier-bu relationship. When you manually create a document, the application defaults these values to sales documents (Sales Order, Sales Quote, etc.).

<img src="/images/modules/ap/supplier/supplier_07b.PNG" width="800"/>


The entity group shows information related to business organization, supplier, etc. 

<img src="/images/modules/ap/supplier/supplier_07c.PNG" width="800"/>

The reference groups show various ids for reference only. You don't need to enter any information in this section. When you save a supplier for the first time, the system will auto-populate the newly created header id and line ids.




<img src="/images/modules/ap/supplier/supplier_07d.PNG" width="800"/>


Scroll left, right, up, and down view all other fields.


Enter all the other fields and click on the save button to save the supplier. The app will post all the data to the server and will show the messages returned from the server.

<details>
<summary>All Fields</summary>

| Name     | Sequence                 | Label                    | InputType             | Field Group |
| -------- | ------------------------ | ------------------------ | --------------------- | ----------- |
|**10**|*vvBuOrg*| Bu Org |deferredSelect|ENTITY|
|**10**|*vvBuOrgCode*| Bu Org Code |deferredSelect|ENTITY|
|**20**|*vvPaymentTerm*| Payment Term |deferredSelect|FINANCE|
|**30**|*vvPaymentTermDescription*| Payment Term Description |InputType.textField|FINANCE|
|**40**|*vvArsupplierId*| Ar supplier Id |deferredSelect|REFERENCE|
|**50**|*vvsupplierNumber*| supplier Number |deferredSelect|DATA|
|**60**|*vvsupplierName*| supplier Name |deferredSelect|ENTITY|
|**70**|*vvPriceList*| Price List |deferredSelect|FINANCE|
|**80**|*arsupplierBuId*|Ar supplier Bu Id |InputType.number|REFERENCE|
|**90**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**100**|*srcEntityId*|Src Entity Id |InputType.textField|REFERENCE|
|**110**|*arsupplierId*|Ar supplier Id |deferredSelect|REFERENCE|
|**120**|*buOrgId*|Bu Org Id |deferredSelect|REFERENCE|
|**130**|*status*|Status |InputType.select|CONTROL|
|**140**|*paymentTermId*|Payment Term Id |deferredSelect|REFERENCE|
|**150**|*mdmPriceListHeaderId*|Mdm Price List Header Id |deferredSelect|REFERENCE|
|**160**|*internalOrgId*|Internal Org Id |deferredSelect|REFERENCE|
|**170**|*fob*|Fob |InputType.textField|DEFAULT|
|**180**|*freightTerms*|Freight Terms |InputType.number|DEFAULT|
|**190**|*transportation*|Transportation |InputType.textField|DEFAULT|
|**200**|*countryOfOrigin*|Country Of Origin |InputType.textField|DEFAULT|
|**210**|*siteAddressId*|Site Address Id |InputType.number|REFERENCE|
|**220**|*siteContactId*|Site Contact Id |InputType.number|REFERENCE|
|**230**|*supplierSiteAttachementId*|supplier Site Attachement Id |InputType.number|REFERENCE|
|**240**|*mdmBankAccountId*|Mdm Bank Account Id |InputType.number|REFERENCE|
|**290**|*glAcProfileHeaderId*|Gl Ac Profile Header Id |deferredSelect|REFERENCE|
|**5250**|*createdBy*|Created By |InputType.textField|REFERENCE|
|**5260**|*creationDate*|Creation Date |InputType.dateTime|REFERENCE|
|**5270**|*lastUpdatedBy*|Last Updated By |InputType.textField|REFERENCE|
|**5280**|*lastUpdateDate*|Last Update Date |InputType.dateTime|REFERENCE|

</details>


## supplier Site

<img src="/images/modules/ap/supplier/supplier_08.PNG" width="800"/>

A supplier site is a specific location of the supplier. Most of the time, it is the location where a party is physically located. A supplier can have multiple sites.  
The supplier site is used for billing, shipping, or other purposes.

Depending upon your configuration, the details of the supplier site are shown either on a separate tab or in the links section of the supplier.
<img src="/images/modules/ap/supplier/supplier_08a.PNG" width="250"/>


Click on the "Menu Button" to add/copy an existing site to a new site.  
You cant delete a supplier site once it's created.


<img src="/images/modules/ap/supplier/supplier_08b.PNG" width="800"/>

Click on the expandable button to view the fields of any group of elements.

To create a new site, click on Add New Line button. You can also copy an existing site to a new one by clicking on the Copy Line button.
<img src="/images/modules/ap/supplier/supplier_08c.PNG" width="800"/>


Enter the supplier site number and supplier site name in the data section. Both are mandatory fields and are shown on most of the screen that shows supplier data.

<img src="/images/modules/ap/supplier/supplier_08d.PNG" width="800"/>



The reference groups show various ids for reference only. You don't need to enter any information in this section.
<img src="/images/modules/ap/supplier/supplier_08e.PNG" width="800"/>


<details>
<summary>All Fields</summary>

| Name     | Sequence                 | Label                    | InputType           | Field Group |
| -------- | ------------------------ | ------------------------ | ------------------- | ----------- |
|**10**|*vvPaymentTerm*| Payment Term |deferredSelect|FINANCE|
|**10**|*vvPaymentTermDescription*| Payment Term Description |InputType.textField|FINANCE|
|**20**|*vvArsupplierId*| Ar supplier Id |deferredSelect|REFERENCE|
|**30**|*vvsupplierNumber*| supplier Number |deferredSelect|DATA|
|**40**|*vvsupplierName*| supplier Name |deferredSelect|ENTITY|
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
|**170**|*arsupplierSiteId*|Ar supplier Site Id |deferredSelect|REFERENCE|
|**180**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**190**|*srcEntityId*|Src Entity Id |InputType.textField|REFERENCE|
|**200**|*arsupplierId*|Ar supplier Id |deferredSelect|REFERENCE|
|**210**|*supplierSiteNumber*|supplier Site Number |deferredSelect|DATA|
|**220**|*supplierSiteName*|supplier Site Name |deferredSelect|ENTITY|
|**230**|*siteTaxCountry*|Site Tax Country |InputType.textField|FINANCE|
|**240**|*siteTaxRegNo*|Site Tax Reg No |InputType.textField|FINANCE|
|**250**|*siteTaxPayerId*|Site Tax Payer Id |InputType.textField|REFERENCE|
|**260**|*primaryCb*|Primary Cb |InputType.switchField|DEFAULT|
|**270**|*supplierSiteRef*|supplier Site Ref |InputType.textField|ENTITY|
|**280**|*supplierSiteType*|supplier Site Type |InputType.textField|CONTROL|
|**290**|*status*|Status |InputType.select|CONTROL|
|**300**|*currency*|Currency |deferredSelect|FINANCE|
|**310**|*paymentTermId*|Payment Term Id |deferredSelect|REFERENCE|
|**320**|*fob*|Fob |InputType.textField|DEFAULT|
|**330**|*freightTerms*|Freight Terms |InputType.number|DEFAULT|
|**340**|*transportation*|Transportation |InputType.textField|DEFAULT|
|**350**|*countryOfOrigin*|Country Of Origin |InputType.textField|DEFAULT|
|**360**|*shipToId*|Ship To Id |deferredSelect|REFERENCE|
|**370**|*billToId*|Bill To Id |deferredSelect|PLANNING|
|**380**|*siteContactId*|Site Contact Id |InputType.number|REFERENCE|
|**390**|*arSalesRegionId*|Ar Sales Region Id |InputType.number|REFERENCE|
|**440**|*glAcProfileHeaderId*|Gl Ac Profile Header Id |deferredSelect|REFERENCE|
|**5400**|*createdBy*|Created By |InputType.textField|REFERENCE|
|**5410**|*creationDate*|Creation Date |InputType.dateTime|REFERENCE|
|**5420**|*lastUpdatedBy*|Last Updated By |InputType.textField|REFERENCE|
|**5430**|*lastUpdateDate*|Last Update Date |InputType.dateTime|REFERENCE|

</details>

