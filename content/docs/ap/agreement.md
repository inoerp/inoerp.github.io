---
id: agreement
title: Invoice Agreement
sidebar_label: Invoice Agreement
---

:::caution

This documentation is incomplete.

:::

<img src="/images/modules/ap/agreement/agreement_99.PNG" width="600"/>


An invoice agreement is a long-term contract between an organization and its suppliers on various products and related conditions (price, payment term, delivery terms, etc.). You can use invoice agreements to get (better) prices from a particular supplier for a specific list of products/services without committing them to precise purchase quantities. 
The primary difference between an invoice agreement and a purchase agreement is that invoice agreements don't involve order or delivery. Thus, invoice agreements are primarily used for service and non-inventory items.

In inoERP, an invoice agreement lists products/services purchased from a supplier with a given price for a specific duration of time (Ex: Fixed monthly rental on machines/buildings/vehicles). You can convert an agreement to an invoice from the agreement screen or use the convert agreement to the invoice screen. In the "convert agreement to the invoice" screen, you can select specific lines of the agreement to be converted. However, if you convert an agreement to an invoice agreement from the agreement screen, the system will copy all the lines on the agreement to the invoice agreement.


an invoice agreement consists of

- Header
- Line


## Header

To create an invoice agreement, you need to enter Business Unit information, supplier, supplier site, and currency. An invoice agreement header contains the necessary information for the items requested on the invoice agreement. When converting an invoice agreement to order, the system copies all the header level information to the invoice.

To view/create/update an invoice agreement, navigate to the "invoice agreement" search screen from your dashboard/favorite.

<img src="/images/modules/ap/agreement/agreement_01.PNG" width="300"/>

Enter the organization/invoice agreement details or any other criteria in the search form and click on the search button to view an existing invoice agreement.  
Click on create a new button to create a new invoice agreement; by manually entering all the information,
Copy an existing invoice agreement to a new invoice agreement is always better than manually entering all the data to create a new invoice agreement.
The application lets you update all the details before confirmation; you can configure which fields are view-only after the confirmation.

<img src="/images/modules/ap/agreement/agreement_02.PNG" width="800"/>

If you don't enter organization/supplier details, the system will show you all the invoice agreements. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search invoice agreements.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.

<img src="/images/modules/ap/agreement/agreement_03.PNG" width="350"/>

To view the search result in a table format, click on the table icon available on the bottom left corner.

To open a specific invoice agreement, click on the menu of that record, and click on view/fetch & view.
<img src="/images/modules/ap/agreement/agreement_04.PNG" width="800"/>


You can also click on the expand icon against any item on the search result screen to view the invoice agreement header details such as invoice agreement number, quantities, start date, status, etc.
<img src="/images/modules/ap/agreement/agreement_05.PNG" width="800"/>


The system will fetch all the data related to the selected invoice agreement. The invoice agreement details are shown either right to the search result screen or in a separate screen, depending on the device size.
<img src="/images/modules/ap/agreement/agreement_06.PNG" width="800"/>


Scroll left, right, up, down to view all the details. The invoice agreement line and details are shown in a separate tab.
The default configuration shows fields in various functional groups such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  

<img src="/images/modules/ap/agreement/agreement_06a.PNG" width="800"/>


You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.

<img src="/images/modules/ap/agreement/agreement_06b.PNG" width="800"/>


<img src="/images/modules/ap/agreement/agreement_06c.PNG" width="800"/>


<details>
<summary>All Fields</summary>

| Name     | Sequence                   | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*vvBuOrg*| Bu Org |deferredSelect|ENTITY|
|**10**|*vvBuOrgCode*| Bu Org Code |deferredSelect|ENTITY|
|**20**|*vvSupplierNumber*| Supplier Number |deferredSelect|DATA|
|**30**|*vvSupplierName*| Supplier Name |deferredSelect|ENTITY|
|**40**|*vvSupplierSiteNumber*| Supplier Site Number |deferredSelect|DATA|
|**50**|*vvSupplierSiteName*| Supplier Site Name |deferredSelect|ENTITY|
|**60**|*vvPaymentTerm*| Payment Term |deferredSelect|FINANCE|
|**70**|*vvPaymentTermDescription*| Payment Term Description |InputType.textField|FINANCE|
|**80**|*vvHeaderAmount*| Header Amount |InputType.textField|FINANCE|
|**90**|*vvHeaderTaxAmount*| Header Tax Amount |InputType.textField|FINANCE|
|**100**|*vvHeaderDiscountAmount*| Header Discount Amount |InputType.textField|FINANCE|
|**110**|*apAgreementHeaderId*|Ap Agreement Header Id |InputType.number|REFERENCE|
|**120**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**130**|*srcEntityId*|Src Entity Id |InputType.textField|REFERENCE|
|**140**|*buOrgId*|Bu Org Id |deferredSelect|REFERENCE|
|**150**|*transactionType*|Transaction Type |InputType.select|CONTROL|
|**160**|*agreementNumber*|Agreement Number |InputType.textField|DATA|
|**170**|*docNumber*|Doc Number |InputType.textField|DATA|
|**180**|*supplierId*|Supplier Id |deferredSelect|REFERENCE|
|**190**|*supplierSiteId*|Supplier Site Id |deferredSelect|REFERENCE|
|**200**|*hrEmployeeId*|Hr Employee Id |InputType.textField|REFERENCE|
|**210**|*description*|Description |InputType.textField|DEFAULT|
|**220**|*shipToId*|Ship To Id |deferredSelect|REFERENCE|
|**230**|*billToId*|Bill To Id |deferredSelect|PLANNING|
|**240**|*payGroup*|Pay Group |InputType.textField|FINANCE|
|**250**|*paymentTermId*|Payment Term Id |deferredSelect|REFERENCE|
|**260**|*paymentTermDate*|Payment Term Date |InputType.date|DATE|
|**270**|*paymentMethod*|Payment Method |InputType.textField|FINANCE|
|**280**|*taxControlAmount*|Tax Control Amount |InputType.textField|FINANCE|
|**290**|*exchangeRateType*|Exchange Rate Type |deferredSelect|CONTROL|
|**300**|*exchangeRate*|Exchange Rate |InputType.textField|FINANCE|
|**310**|*exchangeRateDate*|Exchange Rate Date |InputType.date|DATE|
|**320**|*dueDate*|Due Date |InputType.date|DATE|
|**330**|*docCurrency*|Doc Currency |deferredSelect|FINANCE|
|**340**|*transactionStatus*|Transaction Status |InputType.date|CONTROL|
|**350**|*documentNumber*|Document Number |InputType.number|DATA|
|**360**|*approvalStatus*|Approval Status |InputType.select|CONTROL|
|**370**|*referenceType*|Reference Type |InputType.textField|CONTROL|
|**380**|*referenceKeyName*|Reference Key Name |InputType.textField|REFERENCE|
|**390**|*referenceKeyValue*|Reference Key Value |InputType.textField|REFERENCE|
|**400**|*poHeaderId*|Po Header Id |InputType.number|REFERENCE|
|**450**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**460**|*glAcProfileHeaderId*|Gl Ac Profile Header Id |deferredSelect|REFERENCE|
|**470**|*glPeriodId*|Gl Period Id |InputType.number|REFERENCE|
|**480**|*docRequestorType*|Doc Requestor Type |InputType.select|CONTROL|
|**5410**|*createdBy*|Created By |InputType.textField|REFERENCE|
|**5420**|*creationDate*|Creation Date |InputType.dateTime|REFERENCE|
|**5430**|*lastUpdatedBy*|Last Updated By |InputType.textField|REFERENCE|
|**5440**|*lastUpdateDate*|Last Update Date |InputType.dateTime|REFERENCE|

</details>

## Lines
<img src="/images/modules/ap/agreement/agreement_07.PNG" width="800"/>

You can add multiple lines to each invoice agreement header. Each invoice agreement line contains an item, UOM, product description, quantity,  line number, unit price, etc.


<img src="/images/modules/ap/agreement/agreement_07a.PNG" width="300"/>


Navigate to the lines tab to view/add/update lines.  
Click on the add new entity to add a new line. If a line already exists, click on copy entity to copy all the details.
You can enable/disable fields allowed to be copied in the menu configuration.  

<img src="/images/modules/ap/agreement/agreement_07b.PNG" width="800"/>

**Line Number**: Line number is a mandatory field. Enter a numeric value for the line  

**Line Quantity**: Line quantity is a mandatory field. Enter a numeric value for the line quantity. The system will copy the line quantity to the invoice when the agreement is converted to an invoice.  

**Agreement Quantity**: The total agreement line quantity. The system tracks the usage of the agreement quantity, and all the converted/released quantities are shown in the released qty field. 

**Released qty** is a read-only field.

<img src="/images/modules/ap/agreement/agreement_07c.PNG" width="800"/>

The reference groups show various ids for reference only. You don't need to enter any information in this section. When you save an invoice agreement for the first time, the system will auto-populate the newly created header id and line ids.


<img src="/images/modules/ap/agreement/agreement_07d.PNG" width="800"/>


Enter the line type in the control section. The information flows to downstream documents such as an invoice.

In the finance section, enter the unit price. The system calculates the line price by multiplying the unit price with quantity. The header price is the sum of all the line prices. You don't need to enter any price at the invoice agreement header.
<img src="/images/modules/ap/agreement/agreement_07e.PNG" width="800"/>

Scroll left, right, up, and down view all other fields.


Enter all the other fields and click on the save button to save the invoice agreement. The app will post all the data to the server and will show the messages returned from the server.
<img src="/images/modules/ap/agreement/agreement_07f.PNG" width="800"/>



<details>
<summary>All Fields</summary>

| Name     | Sequence                 | Label                    | InputType             | Field Group |
| -------- | ------------------------ | ------------------------ | --------------------- | ----------- |
|**10**|*vvItemNumber*| Item Number |deferredSelect|DEFAULT|
|**10**|*vvAgreementNumber*| Agreement Number |InputType.textField|DATA|
|**20**|*vvSoDocNumber*| So Doc Number |InputType.textField|DATA|
|**30**|*vvDocCurrency*| Doc Currency |deferredSelect|FINANCE|
|**40**|*vvExchangeRate*| Exchange Rate |InputType.textField|FINANCE|
|**50**|*vvExchangeRateType*| Exchange Rate Type |deferredSelect|CONTROL|
|**60**|*vvBuOrgId*| Bu Org Id |deferredSelect|REFERENCE|
|**70**|*vvUomCode*| Uom Code |deferredSelect|DEFAULT|
|**80**|*vvUomDescription*| Uom Description |deferredSelect|DEFAULT|
|**90**|*vvItemStatus*| Item Status |deferredSelect|CONTROL|
|**100**|*vvDiscountedLinePrice*| Discounted Line Price |InputType.textField|FINANCE|
|**110**|*vvTaxCalculationMethod*| Tax Calculation Method |deferredSelect|FINANCE|
|**120**|*vvTaxPercentage*| Tax Percentage |deferredSelect|FINANCE|
|**130**|*vvTaxTaxAmount*| Tax Tax Amount |InputType.textField|FINANCE|
|**140**|*vvDiscountName*| Discount Name |deferredSelect|FINANCE|
|**150**|*vvDiscountPercentage*| Discount Percentage |deferredSelect|FINANCE|
|**160**|*vvDiscountAmount*| Discount Amount |InputType.textField|FINANCE|
|**170**|*apAgreementLineId*|Ap Agreement Line Id |InputType.number|REFERENCE|
|**180**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**190**|*srcEntityId*|Src Entity Id |InputType.textField|REFERENCE|
|**200**|*apAgreementHeaderId*|Ap Agreement Header Id |InputType.number|REFERENCE|
|**210**|*lineNumber*|Line Number |InputType.number|DATA|
|**220**|*invItemMasterId*|Inv Item Master Id |deferredSelect|REFERENCE|
|**230**|*productDescription*|Product Description |InputType.textField|DEFAULT|
|**240**|*lineQuantity*|Line Quantity |InputType.textField|DATA|
|**250**|*unitPrice*|Unit Price |InputType.textField|FINANCE|
|**260**|*linePrice*|Line Price |InputType.textField|FINANCE|
|**270**|*taxCode*|Tax Code |deferredSelect|FINANCE|
|**280**|*taxAmount*|Tax Amount |InputType.textField|FINANCE|
|**290**|*lineType*|Line Type |InputType.select|CONTROL|
|**300**|*lineDescription*|Line Description |InputType.textField|DEFAULT|
|**310**|*uomCode*|Uom Code |deferredSelect|DEFAULT|
|**320**|*taxAcId*|Tax Ac Id |InputType.number|REFERENCE|
|**330**|*glTaxAmount*|Gl Tax Amount |InputType.textField|PLANNING|
|**340**|*glInvLinePrice*|Gl Inv Line Price |InputType.textField|FINANCE|
|**350**|*status*|Status |InputType.textField|CONTROL|
|**360**|*lineSource*|Line Source |InputType.textField|DEFAULT|
|**370**|*referenceType*|Reference Type |InputType.textField|CONTROL|
|**380**|*referenceKeyName*|Reference Key Name |InputType.textField|REFERENCE|
|**390**|*referenceKeyValue*|Reference Key Value |InputType.textField|REFERENCE|
|**400**|*refTransactionHeaderId*|Ref Transaction Header Id |InputType.number|REFERENCE|
|**410**|*refTransactionLineId*|Ref Transaction Line Id |InputType.number|REFERENCE|
|**420**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**430**|*lineDiscountAmount*|Line Discount Amount |InputType.textField|FINANCE|
|**440**|*discountCode*|Discount Code |deferredSelect|FINANCE|
|**450**|*approvalStatus*|Approval Status |InputType.select|CONTROL|
|**500**|*invApTransactionLineId*|Inv Ap Transaction Line Id |deferredSelect|REFERENCE|
|**5460**|*createdBy*|Created By |InputType.textField|REFERENCE|
|**5470**|*creationDate*|Creation Date |InputType.dateTime|REFERENCE|
|**5480**|*lastUpdatedBy*|Last Updated By |InputType.textField|REFERENCE|
|**5490**|*lastUpdateDate*|Last Update Date |InputType.dateTime|REFERENCE|

</details>



## Actions

Actions allow you to change the status of the invoice agreement. 
The system creates invoice agreements in draft status. When you are ready to publish the invoice agreement and send it to the supplier, change it to Confirmed.
You can cancel an invoice agreement by clicking on the Cancel button. Similarly, you can close any invoice agreement by clicking on the Close button.

A confirmed invoice agreement can be converted to other documents, and the corresponding buttons are available in the actions section.

<img src="/images/modules/ap/agreement/agreement_09.PNG" width="800"/>
