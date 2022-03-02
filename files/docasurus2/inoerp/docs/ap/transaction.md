---
id: transaction
title: Transaction
sidebar_label: Transaction
---

:::caution

This documentation is incomplete.

:::

An AP invoice is a document received by a business from a supplier specifying the goods and services purchased from the supplier. In inoERP, you can create an invoice using the transaction screen. You can also use the transaction screen to create Credit Memos. The application also allows you to create Invoices from a purchase order.

You can create a transaction from a purchase order/PO receipt. You can also create a transaction by manually entering all the required information such as supplier, items/product description, quantities, date, etc.

If the purchase order detail has Two Way match, the system allows you to create invoices without a receipt. However, if the match option is three ways, you need to receive the purchase order to create the invoice.

A transaction consists of

- Header
- Line
- Detail


## Header

A transaction header contains the supplier, business unit, currency-related information. When converting a transaction to an Invoice, the system copies all the header level information to the destination document.

To view/create/update a transaction, navigate to the "transaction" search screen from your dashboard/favorite.

<img src="/images/modules/ap/transaction/transaction_01.png" width="250"/>

Enter the organization/transaction details or any other criteria in the search form and click on the search button to view an existing transaction.  
Click on create a new button to create a new transaction; by manually entering all the information,
Copy an existing transaction to a new transaction is always better than manually entering all the data to create a new transaction.
The application lets you update all the details before confirmation; you can configure which fields are view-only after the confirmation.

<img src="/images/modules/ap/transaction/transaction_02.PNG" width="800"/>

If you don't enter organization/supplier details, the system will show you all the transactions. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search transactions.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.

<img src="/images/modules/ap/transaction/transaction_03.PNG" width="350"/>

To view the search result in a table format, click on the table icon available on the bottom left corner.

To open a specific transaction, click on the menu of that record, and click on view/fetch & view.

You can also click on the expand icon against any item on the search result screen to view the transaction header details such as transaction number, quantities, start date, status, etc.

<img src="/images/modules/ap/transaction/transaction_04.PNG" width="800"/>

The system will fetch all the data related to the selected transaction. The transaction details are shown either right to the search result screen or on a separate screen, depending on the device size.

<img src="/images/modules/ap/transaction/transaction_05.PNG" width="800"/>

Scroll left, right, up, down to view all the details. The transaction line and details are shown in a separate tab.
The default configuration shows fields in various functional groups such as
<img src="/images/modules/ap/transaction/transaction_06.PNG" width="800"/>

- Finance
- Entity
- Reference
- Data
- Control
- Etc  

<img src="/images/modules/ap/transaction/transaction_06a.PNG" width="800"/>

You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.

<img src="/images/modules/ap/transaction/transaction_06b.PNG" width="800"/>


<details>
<summary>All Fields</summary>

| Name     | Sequence                   | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*vvBuOrg*| Bu Org |defferedSelect|ENTITY|
|**10**|*vvBuOrgCode*| Bu Org Code |defferedSelect|ENTITY|
|**20**|*vvSupplierNumber*| Supplier Number |defferedSelect|DATA|
|**30**|*vvSupplierName*| Supplier Name |defferedSelect|ENTITY|
|**40**|*vvSupplierSiteNumber*| Supplier Site Number |defferedSelect|DATA|
|**50**|*vvSupplierSiteName*| Supplier Site Name |defferedSelect|ENTITY|
|**60**|*vvPaymentTerm*| Payment Term |defferedSelect|FINANCE|
|**70**|*vvPaymentTermDescription*| Payment Term Description |InputType.textField|FINANCE|
|**80**|*vvHeaderAmount*| Header Amount |InputType.textField|FINANCE|
|**90**|*vvHeaderTaxAmount*| Header Tax Amount |InputType.textField|FINANCE|
|**100**|*vvHeaderDiscountAmount*| Header Discount Amount |InputType.textField|FINANCE|
|**110**|*apTransactionHeaderId*|Ap Transaction Header Id |InputType.number|REFERENCE|
|**120**|*srcEntityName*|Src Entity Name |defferedSelect|DEFAULT|
|**130**|*srcEntityId*|Src Entity Id |InputType.textField|REFERENCE|
|**140**|*buOrgId*|Bu Org Id |defferedSelect|REFERENCE|
|**150**|*transactionType*|Transaction Type |InputType.select|CONTROL|
|**160**|*transactionNumber*|Transaction Number |InputType.textField|DATA|
|**170**|*docNumber*|Doc Number |InputType.textField|DATA|
|**180**|*supplierId*|Supplier Id |defferedSelect|REFERENCE|
|**190**|*supplierSiteId*|Supplier Site Id |defferedSelect|REFERENCE|
|**200**|*hrEmployeeId*|Hr Employee Id |InputType.textField|REFERENCE|
|**210**|*description*|Description |InputType.textField|DEFAULT|
|**220**|*shipToId*|Ship To Id |defferedSelect|REFERENCE|
|**230**|*billToId*|Bill To Id |defferedSelect|PLANNING|
|**240**|*payGroup*|Pay Group |InputType.textField|FINANCE|
|**250**|*paymentTermId*|Payment Term Id |defferedSelect|REFERENCE|
|**260**|*paymentTermDate*|Payment Term Date |InputType.date|DATE|
|**270**|*paymentMethod*|Payment Method |InputType.textField|FINANCE|
|**280**|*taxControlAmount*|Tax Control Amount |InputType.textField|FINANCE|
|**290**|*exchangeRateType*|Exchange Rate Type |defferedSelect|CONTROL|
|**300**|*exchangeRate*|Exchange Rate |InputType.textField|FINANCE|
|**310**|*exchangeRateDate*|Exchange Rate Date |InputType.date|DATE|
|**320**|*dueDate*|Due Date |InputType.date|DATE|
|**330**|*docCurrency*|Doc Currency |defferedSelect|FINANCE|
|**340**|*transactionStatus*|Transaction Status |InputType.date|CONTROL|
|**350**|*documentNumber*|Document Number |InputType.number|DATA|
|**360**|*approvalStatus*|Approval Status |InputType.select|CONTROL|
|**370**|*referenceType*|Reference Type |InputType.textField|CONTROL|
|**380**|*referenceKeyName*|Reference Key Name |InputType.textField|REFERENCE|
|**390**|*referenceKeyValue*|Reference Key Value |InputType.textField|REFERENCE|
|**400**|*poHeaderId*|Po Header Id |InputType.number|REFERENCE|
|**450**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**460**|*glAcProfileHeaderId*|Gl Ac Profile Header Id |defferedSelect|REFERENCE|
|**470**|*glPeriodId*|Gl Period Id |InputType.number|REFERENCE|
|**480**|*docRequestorType*|Doc Requestor Type |InputType.select|CONTROL|
|**5410**|*createdBy*|Created By |InputType.textField|REFERENCE|
|**5420**|*creationDate*|Creation Date |InputType.dateTime|REFERENCE|
|**5430**|*lastUpdatedBy*|Last Updated By |InputType.textField|REFERENCE|
|**5440**|*lastUpdateDate*|Last Update Date |InputType.dateTime|REFERENCE|

</details>

## Lines

You can add multiple lines to each transaction header. Each transaction line contains an item, UOM, product description, quantity, received inventory organization, line number, unit price, etc.

<img src="/images/modules/ap/transaction/transaction_07.PNG" width="800"/>

Navigate to the lines tab to view/add/update lines.  
Click on the add new entity to add a new line. If a line already exists, click on copy entity to copy all the details.
You can enable/disable fields allowed to be copied in the menu configuration.  

<img src="/images/modules/ap/transaction/transaction_07b.PNG" width="800"/>

**Line Number**: Line number is a mandatory field. Enter a numeric value for the line  

**Line Quantity**: Line quantity is a mandatory field. Enter a numeric value for the line quantity. The system uses the line quantity to create detail lines. System multiplies the line quantity with the unit price to calculate journal line amounts.

<img src="/images/modules/ap/transaction/transaction_07c.PNG" width="800"/>


The entity group shows information related to business organization, supplier, etc. 

<img src="/images/modules/ap/transaction/transaction_07f.PNG" width="800"/>

The reference groups show various ids for reference only. You don't need to enter any information in this section. When you save a transaction for the first time, the system will auto-populate the newly created header id and line ids.

<img src="/images/modules/ap/transaction/transaction_07d.PNG" width="800"/>

In the finance section, enter the unit price. The system calculates the line price by multiplying the unit price with quantity. The header price is the sum of all the line prices. You don't need to enter any price at the transaction header.

<img src="/images/modules/ap/transaction/transaction_07e.PNG" width="800"/>


Scroll left, right, up, and down view all other fields.

Enter all the other fields and click on the save button to save the transaction. The app will post all the data to the server and will show the messages returned from the server.

<img src="/images/modules/ap/transaction/transaction_07f.PNG" width="800"/>



<details>
<summary>All Fields</summary>

| Name     | Sequence                 | Label                    | InputType             | Field Group |
| -------- | ------------------------ | ------------------------ | --------------------- | ----------- |
|**10**|*vvOrg*| Org |defferedSelect|ENTITY|
|**10**|*vvOrgCode*| Org Code |defferedSelect|ENTITY|
|**20**|*vvItemNumber*| Item Number |defferedSelect|DEFAULT|
|**30**|*vvUomCode*| Uom Code |defferedSelect|DEFAULT|
|**40**|*vvUomDescription*| Uom Description |defferedSelect|DEFAULT|
|**50**|*vvShipToAddressName*| Ship To Address Name |defferedSelect|ENTITY|
|**60**|*vvShipToAddress*| Ship To Address |defferedSelect|ENTITY|
|**70**|*vvShipToCountry*| Ship To Country |defferedSelect|ENTITY|
|**80**|*vvShipToPostalCode*| Ship To Postal Code |defferedSelect|ENTITY|
|**90**|*vvShipToEmail*| Ship To Email |defferedSelect|ENTITY|
|**100**|*vvShipToPhone*| Ship To Phone |defferedSelect|ENTITY|
|**110**|*vvDiscountName*| Discount Name |defferedSelect|FINANCE|
|**120**|*vvDiscountPercentage*| Discount Percentage |defferedSelect|FINANCE|
|**130**|*vvDiscountAmount*| Discount Amount |InputType.textField|FINANCE|
|**140**|*vvPoNumber*| Po Number |InputType.textField|DATA|
|**150**|*vvPoLineNumber*| Po Line Number |InputType.number|DATA|
|**160**|*vvTaxCalculationMethod*| Tax Calculation Method |defferedSelect|FINANCE|
|**170**|*vvTaxPercentage*| Tax Percentage |defferedSelect|FINANCE|
|**180**|*vvTaxTaxAmount*| Tax Tax Amount |InputType.textField|FINANCE|
|**190**|*vvReceiptNumber*| Receipt Number |InputType.textField|DATA|
|**200**|*vvShipmentNumber*| Shipment Number |InputType.number|DATA|
|**210**|*vvSupplierSiteId*| Supplier Site Id |defferedSelect|REFERENCE|
|**220**|*vvSupplierId*| Supplier Id |defferedSelect|REFERENCE|
|**230**|*vvTransactionNumber*| Transaction Number |InputType.textField|DATA|
|**240**|*vvTransactionType*| Transaction Type |InputType.select|CONTROL|
|**250**|*vvDocCurrency*| Doc Currency |defferedSelect|FINANCE|
|**260**|*vvDocNumber*| Doc Number |InputType.textField|DATA|
|**270**|*vvExchangeRate*| Exchange Rate |InputType.textField|FINANCE|
|**280**|*vvExchangeRateType*| Exchange Rate Type |defferedSelect|CONTROL|
|**290**|*vvBuOrgId*| Bu Org Id |defferedSelect|REFERENCE|
|**300**|*vvDiscountedLinePrice*| Discounted Line Price |InputType.textField|FINANCE|
|**310**|*apTransactionLineId*|Ap Transaction Line Id |defferedSelect|REFERENCE|
|**320**|*apTransactionHeaderId*|Ap Transaction Header Id |InputType.number|REFERENCE|
|**330**|*lineNumber*|Line Number |InputType.number|DATA|
|**340**|*invItemMasterId*|Inv Item Master Id |defferedSelect|REFERENCE|
|**350**|*productDescription*|Product Description |InputType.textField|DEFAULT|
|**360**|*lineQuantity*|Line Quantity |InputType.textField|DATA|
|**370**|*unitPrice*|Unit Price |InputType.textField|FINANCE|
|**380**|*linePrice*|Line Price |InputType.textField|FINANCE|
|**390**|*taxCode*|Tax Code |defferedSelect|FINANCE|
|**400**|*taxAmount*|Tax Amount |InputType.textField|FINANCE|
|**410**|*lineType*|Line Type |InputType.select|CONTROL|
|**420**|*lineDescription*|Line Description |InputType.textField|DEFAULT|
|**430**|*assetCb*|Asset Cb |InputType.switchField|DEFAULT|
|**440**|*faAssetCategoryId*|Fa Asset Category Id |InputType.number|REFERENCE|
|**450**|*prjProjectHeaderId*|Prj Project Header Id |InputType.number|REFERENCE|
|**460**|*prjProjectLineId*|Prj Project Line Id |InputType.number|REFERENCE|
|**470**|*uomCode*|Uom Code |defferedSelect|DEFAULT|
|**480**|*revenueAcId*|Revenue Ac Id |InputType.number|REFERENCE|
|**490**|*taxAcId*|Tax Ac Id |InputType.number|REFERENCE|
|**500**|*glTaxAmount*|Gl Tax Amount |InputType.textField|PLANNING|
|**510**|*glInvLinePrice*|Gl Inv Line Price |InputType.textField|FINANCE|
|**520**|*status*|Status |InputType.textField|CONTROL|
|**530**|*lineSource*|Line Source |InputType.textField|DEFAULT|
|**540**|*referenceType*|Reference Type |InputType.textField|CONTROL|
|**550**|*referenceKeyName*|Reference Key Name |InputType.textField|REFERENCE|
|**560**|*referenceKeyValue*|Reference Key Value |InputType.textField|REFERENCE|
|**570**|*poHeaderId*|Po Header Id |InputType.number|REFERENCE|
|**580**|*poLineId*|Po Line Id |InputType.number|REFERENCE|
|**590**|*poDetailId*|Po Detail Id |defferedSelect|REFERENCE|
|**600**|*refTransactionHeaderId*|Ref Transaction Header Id |InputType.number|REFERENCE|
|**610**|*refTransactionLineId*|Ref Transaction Line Id |InputType.number|REFERENCE|
|**620**|*periodId*|Period Id |InputType.number|REFERENCE|
|**670**|*lineDiscountAmount*|Line Discount Amount |InputType.textField|FINANCE|
|**680**|*discountCode*|Discount Code |defferedSelect|FINANCE|
|**690**|*approvalStatus*|Approval Status |InputType.select|CONTROL|
|**700**|*poReceiptLineId*|Po Receipt Line Id |defferedSelect|REFERENCE|
|**5630**|*createdBy*|Created By |InputType.textField|REFERENCE|
|**5640**|*creationDate*|Creation Date |InputType.dateTime|REFERENCE|
|**5650**|*lastUpdatedBy*|Last Updated By |InputType.textField|REFERENCE|
|**5660**|*lastUpdateDate*|Last Update Date |InputType.dateTime|REFERENCE|

</details>


## Details

<img src="/images/modules/ap/transaction/transaction_08.PNG" width="800"/>

The system creates multiple details for each line depending upon the line type (ITEM, FREIGHT, TAX, etc.). Though you don't need to regularly review/update transaction detail lines, It's advisable to review accounts and amounts after setup changes. 

Depending upon your configuration, the details of a line are shown either on a separate tab or in the links section of lines.
<img src="/images/modules/ap/transaction/transaction_08a.PNG" width="600"/>


Click on the Details button below a line to view/update/create details.
By default, when saving any line system adds detail with the quantity, price, and account details. You can add multiple details and change the account/quantity as per your actual requirement.

<img src="/images/modules/ap/transaction/transaction_08b.PNG" width="800"/>

Click on the expandable button to view the fields of a detail line.

To create a new detail, click on Add New Line button. You can also copy an existing detail line to a new one by clicking on the Copy Line button.
<img src="/images/modules/ap/transaction/transaction_08c.PNG" width="800"/>


In the data section, enter the detail line number. The system always creates the first line as line number 1, but you can change it.
While adding a new detail line, enter a detail line number as its mandatory field.
Enter the detail quantity in the quantity field.

<img src="/images/modules/ap/transaction/transaction_08d.PNG" width="800"/>



The reference groups show various ids for reference only. You don't need to enter any information in this section.
<img src="/images/modules/ap/transaction/transaction_08e.PNG" width="800"/>


<details>
<summary>All Fields</summary>

| Name     | Sequence                 | Label                    | InputType           | Field Group |
| -------- | ------------------------ | ------------------------ | ------------------- | ----------- |
|**10**|*vvDetailAcCombination*| Detail Ac Combination |defferedSelect|DEFAULT|
|**10**|*vvOrgCode*| Org Code |defferedSelect|ENTITY|
|**20**|*vvItemNumber*| Item Number |defferedSelect|DEFAULT|
|**30**|*vvTransactionNumber*| Transaction Number |InputType.textField|DATA|
|**40**|*vvUomCode*| Uom Code |defferedSelect|DEFAULT|
|**50**|*lineQuantity*|Line Quantity |InputType.textField|DATA|
|**60**|*unitPrice*|Unit Price |InputType.textField|FINANCE|
|**70**|*linePrice*|Line Price |InputType.textField|FINANCE|
|**80**|*taxCode*|Tax Code |defferedSelect|FINANCE|
|**90**|*taxAmount*|Tax Amount |InputType.textField|FINANCE|
|**100**|*vvPoNumber*| Po Number |InputType.textField|DATA|
|**110**|*vvPoLineNumber*| Po Line Number |InputType.number|DATA|
|**120**|*apTransactionDetailId*|Ap Transaction Detail Id |InputType.number|REFERENCE|
|**130**|*srcEntityName*|Src Entity Name |defferedSelect|DEFAULT|
|**140**|*srcEntityId*|Src Entity Id |InputType.textField|REFERENCE|
|**150**|*apTransactionLineId*|Ap Transaction Line Id |defferedSelect|REFERENCE|
|**160**|*detailNumber*|Detail Number |InputType.number|DATA|
|**170**|*acId*|Ac Id |InputType.number|REFERENCE|
|**180**|*accountType*|Account Type |InputType.select|CONTROL|
|**190**|*drCr*|Dr Cr |InputType.select|DEFAULT|
|**200**|*amount*|Amount |InputType.textField|FINANCE|
|**210**|*journalCreatedCb*|Journal Created Cb |InputType.switchField|DEFAULT|
|**220**|*status*|Status |InputType.textField|CONTROL|
|**230**|*referenceType*|Reference Type |InputType.textField|CONTROL|
|**240**|*referenceKeyName*|Reference Key Name |InputType.textField|REFERENCE|
|**250**|*referenceKeyValue*|Reference Key Value |InputType.textField|REFERENCE|
|**260**|*description*|Description |InputType.textField|DEFAULT|
|**5270**|*createdBy*|Created By |InputType.textField|REFERENCE|
|**5280**|*creationDate*|Creation Date |InputType.dateTime|REFERENCE|
|**5290**|*lastUpdatedBy*|Last Updated By |InputType.textField|REFERENCE|
|**5300**|*lastUpdateDate*|Last Update Date |InputType.dateTime|REFERENCE|

</details>


## Actions

Actions allow you to change the status of the transaction. 
The system creates transactions in draft status. When you are ready to publish the transaction and send it to the supplier, change it to Confirmed.
You can cancel a transaction by clicking on the Cancel button. Similarly, you can close any transaction by clicking on the Close button.

A confirmed transaction can be converted to other documents, and the corresponding buttons are available in the actions section.

<img src="/images/modules/ap/transaction/transaction_09.PNG" width="800"/>


## Accounting
The system creates the corresponding detail line when you save any invoice line.
If you enter any accounting profile on the transaction header, the system will use the accounting profile to derive the accounts. Else, the system will use the default accounting profile for the business unit.

### Invoice
```
DR Charge/Expense/Accrual
DR Tax 
DR Freight 
            CR Liability
            
```            

### Credit Memo
```
CR Liability
            DR Charge/Expense/Accrual
            DR Tax 
            DR Freight
```     

     

## Credit Memo

The process of creating a credit memo is the same as creating an invoice. Follow the steps mentioned in Header, Line & Detail section to create a credit memo. Select the document type as "Credit Memo."

<img src="/images/modules/ap/transaction/transaction_10a.PNG" width="800"/>

You can also convert an invoice to a credit memo using the "Convert to credit" action.