---
id: agreement
title: Invoice Agreement
sidebar_label: Invoice Agreement
---

<img src="/images/modules/ar/agreement/agreement_99a.PNG" width="600"/>


An invoice agreement is a long-term contract between an organization and its customers on various products and related conditions (price, payment term, delivery terms, etc.). You can use invoice agreements to offer (better) prices to a particular customer group for a specific list of products/services without committing them to precise purchase quantities. 
The primary difference between an invoice agreement and a sales agreement is that invoice agreements don't involve order or delivery. Thus, invoice agreements are primarily used for service and non-inventory items.

In inoERP, an invoice agreement lists products sold to a customer with a given price for a specific duration of time. You can convert an agreement to an invoice from the agreement screen or use the convert agreement to the invoice screen. In the "convert agreement to the invoice" screen, you can select specific lines of the agreement to be converted. However, if you convert an agreement to an invoice agreement from the agreement screen, the system will copy all the lines on the agreement to the invoice agreement.


an invoice agreement consists of

- Header
- Line


## Header

To create an invoice agreement, you need to enter Business Unit information, customer, customer site, and currency. An invoice agreement header contains the necessary information for the items requested on the invoice agreement. When converting an invoice agreement to order, the system copies all the header level information to the invoice.

To view/create/update an invoice agreement, navigate to the "invoice agreement" search screen from your dashboard/favorite.

<img src="/images/modules/ar/agreement/agreement_01.PNG" width="300"/>

Enter the organization/invoice agreement details or any other criteria in the search form and click on the search button to view an existing invoice agreement.  
Click on create a new button to create a new invoice agreement; by manually entering all the information,
Copy an existing invoice agreement to a new invoice agreement is always better than manually entering all the data to create a new invoice agreement.
The application lets you update all the details before confirmation; you can configure which fields are view-only after the confirmation.

<img src="/images/modules/ar/agreement/agreement_02.PNG" width="800"/>

If you don't enter organization/customer details, the system will show you all the invoice agreements. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search invoice agreements.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.

<img src="/images/modules/ar/agreement/agreement_03.PNG" width="350"/>

To view the search result in a table format, click on the table icon available on the bottom left corner.

To open a specific invoice agreement, click on the menu of that record, and click on view/fetch & view.
<img src="/images/modules/ar/agreement/agreement_04.PNG" width="800"/>


You can also click on the expand icon against any item on the search result screen to view the invoice agreement header details such as invoice agreement number, quantities, start date, status, etc.
<img src="/images/modules/ar/agreement/agreement_05.PNG" width="800"/>


The system will fetch all the data related to the selected invoice agreement. The invoice agreement details are shown either right to the search result screen or in a separate screen, depending on the device size.
<img src="/images/modules/ar/agreement/agreement_06.PNG" width="800"/>


Scroll left, right, up, down to view all the details. The invoice agreement line and details are shown in a separate tab.
The default configuration shows fields in various functional groups such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  

<img src="/images/modules/ar/agreement/agreement_06a.PNG" width="800"/>


You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.

<img src="/images/modules/ar/agreement/agreement_06b.PNG" width="800"/>


<img src="/images/modules/ar/agreement/agreement_06c.PNG" width="800"/>


<details>
<summary>All Fields</summary>

| Name     | Sequence                   | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*vvBuOrg*| Bu Org |deferredSelect|ENTITY|
|**10**|*vvBuOrgCode*| Bu Org Code |deferredSelect|ENTITY|
|**20**|*vvCustomerNumber*| Customer Number |deferredSelect|DATA|
|**30**|*vvCustomerName*| Customer Name |deferredSelect|ENTITY|
|**40**|*vvCustomerSiteNumber*| Customer Site Number |deferredSelect|DATA|
|**50**|*vvCustomerSiteName*| Customer Site Name |deferredSelect|ENTITY|
|**60**|*vvPaymentTerm*| Payment Term |deferredSelect|FINANCE|
|**70**|*vvPaymentTermDescription*| Payment Term Description |InputType.textField|FINANCE|
|**80**|*vvShipToAddressName*| Ship To Address Name |deferredSelect|ENTITY|
|**90**|*vvShipToAddress*| Ship To Address |deferredSelect|ENTITY|
|**100**|*vvShipToCountry*| Ship To Country |deferredSelect|ENTITY|
|**110**|*vvShipToPostalCode*| Ship To Postal Code |deferredSelect|ENTITY|
|**120**|*vvShipToEmail*| Ship To Email |deferredSelect|ENTITY|
|**130**|*vvShipToPhone*| Ship To Phone |deferredSelect|ENTITY|
|**140**|*vvBillToAddressName*| Bill To Address Name |deferredSelect|PLANNING|
|**150**|*vvBillToAddress*| Bill To Address |deferredSelect|PLANNING|
|**160**|*vvBillToCountry*| Bill To Country |deferredSelect|PLANNING|
|**170**|*vvBillToPostalCode*| Bill To Postal Code |deferredSelect|PLANNING|
|**180**|*vvBillToEmail*| Bill To Email |deferredSelect|PLANNING|
|**190**|*vvBillToPhone*| Bill To Phone |deferredSelect|PLANNING|
|**200**|*vvHeaderAmount*| Header Amount |InputType.textField|FINANCE|
|**210**|*vvHeaderTaxAmount*| Header Tax Amount |InputType.textField|FINANCE|
|**220**|*vvHeaderDiscountAmount*| Header Discount Amount |InputType.textField|FINANCE|
|**230**|*arAgreementHeaderId*|Ar Agreement Header Id |InputType.number|REFERENCE|
|**240**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**250**|*srcEntityId*|Src Entity Id |InputType.textField|REFERENCE|
|**260**|*transactionType*|Transaction Type |InputType.select|CONTROL|
|**270**|*buOrgId*|Bu Org Id |deferredSelect|REFERENCE|
|**280**|*documentType*|Document Type |InputType.select|CONTROL|
|**290**|*agreementNumber*|Agreement Number |InputType.textField|DATA|
|**300**|*docNumber*|Doc Number |InputType.textField|DATA|
|**310**|*arCustomerId*|Ar Customer Id |deferredSelect|REFERENCE|
|**320**|*arCustomerSiteId*|Ar Customer Site Id |deferredSelect|REFERENCE|
|**330**|*hrEmployeeId*|Hr Employee Id |InputType.number|REFERENCE|
|**340**|*description*|Description |InputType.textField|DEFAULT|
|**350**|*shipToId*|Ship To Id |deferredSelect|REFERENCE|
|**360**|*billToId*|Bill To Id |deferredSelect|PLANNING|
|**370**|*priceListHeaderId*|Price List Header Id |InputType.number|REFERENCE|
|**380**|*docCurrency*|Doc Currency |deferredSelect|FINANCE|
|**390**|*paymentTermId*|Payment Term Id |deferredSelect|REFERENCE|
|**400**|*paymentTermDate*|Payment Term Date |InputType.date|DATE|
|**410**|*exchangeRateType*|Exchange Rate Type |deferredSelect|CONTROL|
|**420**|*exchangeRate*|Exchange Rate |InputType.textField|FINANCE|
|**430**|*sourceType*|Source Type |InputType.select|CONTROL|
|**440**|*referenceTable*|Reference Table |InputType.textField|REFERENCE|
|**450**|*orderReferenceId*|Order Reference Id |InputType.number|REFERENCE|
|**460**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**470**|*referenceType*|Reference Type |InputType.textField|CONTROL|
|**480**|*referenceKeyName*|Reference Key Name |InputType.textField|REFERENCE|
|**490**|*referenceKeyValue*|Reference Key Value |InputType.number|REFERENCE|
|**500**|*approvalStatus*|Approval Status |InputType.select|CONTROL|
|**550**|*revEnabledCb*|Rev Enabled Cb |InputType.switchField|DEFAULT|
|**560**|*revNumber*|Rev Number |InputType.number|DATA|
|**570**|*glAcProfileHeaderId*|Gl Ac Profile Header Id |deferredSelect|REFERENCE|
|**5510**|*createdBy*|Created By |InputType.textField|REFERENCE|
|**5520**|*creationDate*|Creation Date |InputType.dateTime|REFERENCE|
|**5530**|*lastUpdatedBy*|Last Updated By |InputType.textField|REFERENCE|
|**5540**|*lastUpdateDate*|Last Update Date |InputType.dateTime|REFERENCE|

</details>

## Lines
<img src="/images/modules/ar/agreement/agreement_07.PNG" width="800"/>

You can add multiple lines to each invoice agreement header. Each invoice agreement line contains an item, UOM, product description, quantity,  line number, unit price, etc.


<img src="/images/modules/ar/agreement/agreement_07a.PNG" width="300"/>


Navigate to the lines tab to view/add/update lines.  
Click on the add new entity to add a new line. If a line already exists, click on copy entity to copy all the details.
You can enable/disable fields allowed to be copied in the menu configuration.  

<img src="/images/modules/ar/agreement/agreement_07b.PNG" width="800"/>

**Line Number**: Line number is a mandatory field. Enter a numeric value for the line  

**Line Quantity**: Line quantity is a mandatory field. Enter a numeric value for the line quantity. The system will copy the line quantity to the invoice when the agreement is converted to an invoice.  

**Agreement Quantity**: The total agreement line quantity. The system tracks the usage of the agreement quantity, and all the converted/released quantities are shown in the released qty field. 

**Released qty** is a read-only field.

<img src="/images/modules/ar/agreement/agreement_07c.PNG" width="800"/>

The reference groups show various ids for reference only. You don't need to enter any information in this section. When you save an invoice agreement for the first time, the system will auto-populate the newly created header id and line ids.


<img src="/images/modules/ar/agreement/agreement_07d.PNG" width="800"/>


Enter the line type in the control section. The information flows to downstream documents such as an invoice.

In the finance section, enter the unit price. The system calculates the line price by multiplying the unit price with quantity. The header price is the sum of all the line prices. You don't need to enter any price at the invoice agreement header.
<img src="/images/modules/ar/agreement/agreement_07e.PNG" width="800"/>

Scroll left, right, up, and down view all other fields.


Enter all the other fields and click on the save button to save the invoice agreement. The app will post all the data to the server and will show the messages returned from the server.
<img src="/images/modules/ar/agreement/agreement_07f.PNG" width="800"/>



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
|**100**|*vvShipToAddressName*| Ship To Address Name |deferredSelect|ENTITY|
|**110**|*vvShipToAddress*| Ship To Address |deferredSelect|ENTITY|
|**120**|*vvShipToCountry*| Ship To Country |deferredSelect|ENTITY|
|**130**|*vvShipToPostalCode*| Ship To Postal Code |deferredSelect|ENTITY|
|**140**|*vvShipToEmail*| Ship To Email |deferredSelect|ENTITY|
|**150**|*vvShipToPhone*| Ship To Phone |deferredSelect|ENTITY|
|**160**|*vvBillToAddressName*| Bill To Address Name |deferredSelect|PLANNING|
|**170**|*vvBillToAddress*| Bill To Address |deferredSelect|PLANNING|
|**180**|*vvBillToCountry*| Bill To Country |deferredSelect|PLANNING|
|**190**|*vvBillToPostalCode*| Bill To Postal Code |deferredSelect|PLANNING|
|**200**|*vvBillToEmail*| Bill To Email |deferredSelect|PLANNING|
|**210**|*vvBillToPhone*| Bill To Phone |deferredSelect|PLANNING|
|**220**|*vvDiscountedLinePrice*| Discounted Line Price |InputType.textField|FINANCE|
|**230**|*vvTaxCalculationMethod*| Tax Calculation Method |deferredSelect|FINANCE|
|**240**|*vvTaxPercentage*| Tax Percentage |deferredSelect|FINANCE|
|**250**|*vvTaxTaxAmount*| Tax Tax Amount |InputType.textField|FINANCE|
|**260**|*vvDiscountName*| Discount Name |deferredSelect|FINANCE|
|**270**|*vvDiscountPercentage*| Discount Percentage |deferredSelect|FINANCE|
|**280**|*vvDiscountAmount*| Discount Amount |InputType.textField|FINANCE|
|**290**|*arAgreementLineId*|Ar Agreement Line Id |InputType.number|REFERENCE|
|**300**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**310**|*srcEntityId*|Src Entity Id |InputType.textField|REFERENCE|
|**320**|*arAgreementHeaderId*|Ar Agreement Header Id |InputType.number|REFERENCE|
|**330**|*lineNumber*|Line Number |InputType.number|DATA|
|**340**|*invItemMasterId*|Inv Item Master Id |deferredSelect|REFERENCE|
|**350**|*itemDescription*|Item Description |deferredSelect|DEFAULT|
|**360**|*lineQuantity*|Line Quantity |InputType.textField|DATA|
|**370**|*agreementQuantity*|Agreement Quantity |InputType.textField|DATA|
|**380**|*agreementPrice*|Agreement Price |InputType.textField|FINANCE|
|**390**|*priceListHeaderId*|Price List Header Id |InputType.number|REFERENCE|
|**400**|*priceDate*|Price Date |InputType.date|DATE|
|**410**|*unitPrice*|Unit Price |InputType.textField|FINANCE|
|**420**|*linePrice*|Line Price |InputType.textField|FINANCE|
|**430**|*taxAmount*|Tax Amount |InputType.textField|FINANCE|
|**440**|*taxCode*|Tax Code |deferredSelect|FINANCE|
|**450**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**460**|*referenceDocType*|Reference Doc Type |InputType.textField|CONTROL|
|**470**|*referenceDocNumber*|Reference Doc Number |InputType.number|DATA|
|**480**|*lineOcumentType*|Line Ocument Type |InputType.textField|CONTROL|
|**490**|*lineDescription*|Line Description |InputType.textField|DEFAULT|
|**500**|*uomCode*|Uom Code |deferredSelect|DEFAULT|
|**510**|*approvalStatus*|Approval Status |InputType.select|CONTROL|
|**520**|*discountCode*|Discount Code |deferredSelect|FINANCE|
|**530**|*lineDiscountAmount*|Line Discount Amount |InputType.textField|FINANCE|
|**580**|*shipToId*|Ship To Id |deferredSelect|REFERENCE|
|**590**|*billToId*|Bill To Id |deferredSelect|PLANNING|
|**600**|*lineType*|Line Type |InputType.select|CONTROL|
|**5540**|*createdBy*|Created By |InputType.textField|REFERENCE|
|**5550**|*creationDate*|Creation Date |InputType.dateTime|REFERENCE|
|**5560**|*lastUpdatedBy*|Last Updated By |InputType.textField|REFERENCE|
|**5570**|*lastUpdateDate*|Last Update Date |InputType.dateTime|REFERENCE|

</details>



## Actions

Actions allow you to change the status of the invoice agreement. 
The system creates invoice agreements in draft status. When you are ready to publish the invoice agreement and send it to the customer, change it to Confirmed.
You can cancel an invoice agreement by clicking on the Cancel button. Similarly, you can close any invoice agreement by clicking on the Close button.

A confirmed invoice agreement can be converted to other documents, and the corresponding buttons are available in the actions section.

<img src="/images/modules/ar/agreement/agreement_09.PNG" width="600"/>
