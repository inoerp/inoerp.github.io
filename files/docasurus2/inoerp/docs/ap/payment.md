---
id: payment
title: Payment
sidebar_label: Payment
---

:::caution

This documentation is incomplete.

:::

An AP payment is a document created by a business to record payments made to a supplier. If the payment is received against an open invoice, you can match the supplier invoice. Matching a payment to an invoice reduces supplier open balance. 

In inoERP, you can create a payment using the payment screen or the payment button available on the invoice action tab. You can also create a payment by manually entering all the required information such as supplier, currency, amount, date, etc.
Payment consists of

- Header
- Line
- Detail


## Header

A payment header contains the supplier, business unit, currency-related information. 

To view/create/update a payment, navigate to the "payment" search screen from your dashboard/favorite.

<img src="/images/modules/ap/payment/payment_01.PNG" width="400"/>

Enter the organization/payment details or any other criteria in the search form and click on the search button to view an existing payment.  
Click on create a new button to create a new payment; by manually entering all the information,
Copy an existing payment to a new payment is always better than manually entering all the data to create a new payment.
The application lets you update all the details before confirmation; you can configure which fields are view-only after the confirmation.

<img src="/images/modules/ap/payment/payment_02.PNG" width="800"/>

If you don't enter organization/supplier details, the system will show you all the payments. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search payments.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.

<img src="/images/modules/ap/payment/payment_03.PNG" width="350"/>

To view the search result in a table format, click on the table icon available on the bottom left corner.

To open a specific payment, click on the menu of that record, and click on view/fetch & view.

You can also click on the expand icon against any item on the search result screen to view the payment header details such as payment number, quantities, start date, status, etc.

<img src="/images/modules/ap/payment/payment_04.PNG" width="800"/>

The system will fetch all the data related to the selected payment. Depending on the device size, the payment details are shown either right to the search result screen or on a separate screen.

<img src="/images/modules/ap/payment/payment_05.PNG" width="800"/>

Scroll left, right, up, down to view all the details. The payment line and details are shown in a separate tab.
The default configuration shows fields in various functional groups such as
<img src="/images/modules/ap/payment/payment_06.PNG" width="800"/>

- Finance
- Entity
- Reference
- Data
- Control
- Etc  

<img src="/images/modules/ap/payment/payment_06b.PNG" width="800"/>

You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.


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
|**80**|*vvBillToAddressName*| Bill To Address Name |defferedSelect|PLANNING|
|**90**|*vvBillToAddress*| Bill To Address |defferedSelect|PLANNING|
|**100**|*vvBillToCountry*| Bill To Country |defferedSelect|PLANNING|
|**110**|*vvBillToPostalCode*| Bill To Postal Code |defferedSelect|PLANNING|
|**120**|*vvBillToEmail*| Bill To Email |defferedSelect|PLANNING|
|**130**|*vvBillToPhone*| Bill To Phone |defferedSelect|PLANNING|
|**140**|*vvHeaderAmount*| Header Amount |InputType.textField|FINANCE|
|**150**|*apPaymentHeaderId*|Ap Payment Header Id |InputType.number|REFERENCE|
|**160**|*srcEntityName*|Src Entity Name |defferedSelect|DEFAULT|
|**170**|*srcEntityId*|Src Entity Id |InputType.textField|REFERENCE|
|**180**|*buOrgId*|Bu Org Id |defferedSelect|REFERENCE|
|**190**|*documentType*|Document Type |InputType.select|CONTROL|
|**200**|*paymentType*|Payment Type |InputType.select|CONTROL|
|**210**|*paymentNumber*|Payment Number |InputType.textField|DATA|
|**220**|*docNumber*|Doc Number |InputType.textField|DATA|
|**230**|*apSupplierId*|Ap Supplier Id |defferedSelect|REFERENCE|
|**240**|*apSupplierSiteId*|Ap Supplier Site Id |defferedSelect|REFERENCE|
|**250**|*hrEmployeeId*|Hr Employee Id |InputType.number|REFERENCE|
|**260**|*description*|Description |InputType.textField|DEFAULT|
|**270**|*billToId*|Bill To Id |defferedSelect|PLANNING|
|**280**|*priceListHeaderId*|Price List Header Id |InputType.number|REFERENCE|
|**290**|*prePaymentAmount*|Pre Payment Amount |InputType.textField|FINANCE|
|**300**|*docCurrency*|Doc Currency |defferedSelect|FINANCE|
|**310**|*paymentTermId*|Payment Term Id |defferedSelect|REFERENCE|
|**320**|*paymentTermDate*|Payment Term Date |InputType.date|DATE|
|**330**|*exchangeRateType*|Exchange Rate Type |defferedSelect|CONTROL|
|**340**|*exchangeRate*|Exchange Rate |InputType.textField|FINANCE|
|**350**|*sourceType*|Source Type |InputType.select|CONTROL|
|**360**|*referenceTable*|Reference Table |InputType.textField|REFERENCE|
|**370**|*orderReferenceId*|Order Reference Id |InputType.number|REFERENCE|
|**380**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**390**|*referenceType*|Reference Type |InputType.textField|CONTROL|
|**400**|*referenceKeyName*|Reference Key Name |InputType.textField|REFERENCE|
|**410**|*referenceKeyValue*|Reference Key Value |InputType.number|REFERENCE|
|**420**|*approvalStatus*|Approval Status |InputType.select|CONTROL|
|**470**|*revEnabledCb*|Rev Enabled Cb |InputType.switchField|DEFAULT|
|**480**|*revNumber*|Rev Number |InputType.number|DATA|
|**490**|*glAcProfileHeaderId*|Gl Ac Profile Header Id |defferedSelect|REFERENCE|
|**500**|*glPeriodId*|Gl Period Id |InputType.number|REFERENCE|
|**510**|*apTransactionHeaderId*|Ap Transaction Header Id |InputType.number|REFERENCE|
|**5430**|*createdBy*|Created By |InputType.textField|REFERENCE|
|**5440**|*creationDate*|Creation Date |InputType.dateTime|REFERENCE|
|**5450**|*lastUpdatedBy*|Last Updated By |InputType.textField|REFERENCE|
|**5460**|*lastUpdateDate*|Last Update Date |InputType.dateTime|REFERENCE|

</details>

## Lines


You can add multiple lines to each payment header. Each payment line contains an item, UOM, price, etc.

<img src="/images/modules/ap/payment/payment_07.PNG" width="800"/>



Navigate to the lines tab to view/add/update lines.  
Click on the add new entity to add a new line. If a line already exists, click on copy entity to copy all the details.
You can enable/disable fields allowed to be copied in the menu configuration.  
<img src="/images/modules/ap/payment/payment_07a.PNG" width="300"/>


**Line Number**: Line number is a mandatory field. Enter a numeric value for the line  

**amount**: Amount is a mandatory field. Enter a numeric value for the amount. 

<img src="/images/modules/ap/payment/payment_07b.PNG" width="800"/>


The entity group shows information related to business organization, supplier, etc. 

<img src="/images/modules/ap/payment/payment_07c.PNG" width="800"/>

The reference groups show various ids for reference only. You don't need to enter any information in this section. When you save payment for the first time, the system will auto-populate the newly created header id and line ids.


The header price is the sum of all the amounts. You don't need to enter any price at the payment header. In the finance section, enter the exchange rate and currency if the values are different from the header.

<img src="/images/modules/ap/payment/payment_07d.PNG" width="800"/>


Scroll left, right, up, and down view all other fields.


Enter all the other fields and click on the save button to save the payment. The app will post all the data to the server and will show the messages returned from the server.

<details>
<summary>All Fields</summary>

| Name     | Sequence                 | Label                    | InputType             | Field Group |
| -------- | ------------------------ | ------------------------ | --------------------- | ----------- |
|**10**|*vvPaymentNumber*| Payment Number |InputType.textField|DATA|
|**10**|*vvDocNumber*| Doc Number |InputType.textField|DATA|
|**20**|*vvDocCurrency*| Doc Currency |defferedSelect|FINANCE|
|**30**|*vvExchangeRate*| Exchange Rate |InputType.textField|FINANCE|
|**40**|*vvExchangeRateType*| Exchange Rate Type |defferedSelect|CONTROL|
|**50**|*vvBuOrgId*| Bu Org Id |defferedSelect|REFERENCE|
|**60**|*apPaymentLineId*|Ap Payment Line Id |InputType.number|REFERENCE|
|**70**|*srcEntityName*|Src Entity Name |defferedSelect|DEFAULT|
|**80**|*srcEntityId*|Src Entity Id |InputType.textField|REFERENCE|
|**90**|*apPaymentHeaderId*|Ap Payment Header Id |InputType.number|REFERENCE|
|**100**|*apTransactionLineId*|Ap Transaction Line Id |defferedSelect|REFERENCE|
|**110**|*lineNumber*|Line Number |InputType.number|DATA|
|**120**|*amount*|Amount |InputType.textField|FINANCE|
|**130**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**140**|*referenceDocType*|Reference Doc Type |InputType.textField|CONTROL|
|**150**|*referenceDocNumber*|Reference Doc Number |InputType.number|DATA|
|**160**|*lineDocumentType*|Line Document Type |InputType.textField|CONTROL|
|**170**|*lineDescription*|Line Description |InputType.textField|DEFAULT|
|**180**|*approvalStatus*|Approval Status |InputType.select|CONTROL|
|**190**|*discountCode*|Discount Code |defferedSelect|FINANCE|
|**200**|*lineDiscountAmount*|Line Discount Amount |InputType.textField|FINANCE|
|**5210**|*createdBy*|Created By |InputType.textField|REFERENCE|
|**5220**|*creationDate*|Creation Date |InputType.dateTime|REFERENCE|
|**5230**|*lastUpdatedBy*|Last Updated By |InputType.textField|REFERENCE|
|**5240**|*lastUpdateDate*|Last Update Date |InputType.dateTime|REFERENCE|

</details>


## Details

<img src="/images/modules/ap/payment/payment_08.PNG" width="800"/>

The system creates two details for each line :
* First line to debit cash
* Second line to credit receivables. 

Though you don't need to regularly review/update payment detail lines, It's advisable to review accounts and amounts after setup changes. 

Depending upon your configuration, the details of a line are shown either on a separate tab or in the links section of lines.
<img src="/images/modules/ap/payment/payment_08a.PNG" width="350"/>


Click on the Details button below a line to view/update/create details.
By default, when saving any line system adds detail with the price and account details. You can add multiple details and change the price/quantity as per your actual requirement.

<img src="/images/modules/ap/payment/payment_08b.PNG" width="800"/>

Click on the expandable button to view the fields of a detail line.

To create a new detail, click on Add New Line button. You can also copy an existing detail line to a new one by clicking on the Copy Line button.
<img src="/images/modules/ap/payment/payment_08c.PNG" width="800"/>


In the data section, enter the detail line number. The system always creates the first line as line number 1, but you can change it.
While adding a new detail line, enter a detail line number as its mandatory field.
Enter the detail quantity in the quantity field.

<img src="/images/modules/ap/payment/payment_08d.PNG" width="800"/>



The reference groups show various ids for reference only. You don't need to enter any information in this section.
<img src="/images/modules/ap/payment/payment_08e.PNG" width="800"/>


<details>
<summary>All Fields</summary>

| Name     | Sequence                 | Label                    | InputType           | Field Group |
| -------- | ------------------------ | ------------------------ | ------------------- | ----------- |
|**10**|*vvCombination*| Combination |defferedSelect|DEFAULT|
|**10**|*vvPaymentNumber*| Payment Number |InputType.textField|DATA|
|**20**|*vvDocNumber*| Doc Number |InputType.textField|DATA|
|**30**|*vvLineAmount*| Line Amount |InputType.textField|FINANCE|
|**40**|*apPaymentDetailId*|Ap Payment Detail Id |InputType.number|REFERENCE|
|**50**|*srcEntityName*|Src Entity Name |defferedSelect|DEFAULT|
|**60**|*srcEntityId*|Src Entity Id |InputType.textField|REFERENCE|
|**70**|*apPaymentLineId*|Ap Payment Line Id |InputType.number|REFERENCE|
|**80**|*detailNumber*|Detail Number |InputType.number|DATA|
|**90**|*acId*|Ac Id |defferedSelect|REFERENCE|
|**100**|*drCr*|Dr Cr |InputType.select|DEFAULT|
|**110**|*accountType*|Account Type |InputType.select|CONTROL|
|**120**|*amount*|Amount |InputType.textField|FINANCE|
|**130**|*journalCreatedCb*|Journal Created Cb |InputType.switchField|DEFAULT|
|**140**|*status*|Status |InputType.textField|CONTROL|
|**150**|*referenceType*|Reference Type |InputType.textField|CONTROL|
|**160**|*referenceKeyName*|Reference Key Name |InputType.textField|REFERENCE|
|**170**|*referenceKeyValue*|Reference Key Value |InputType.textField|REFERENCE|
|**180**|*description*|Description |InputType.textField|DEFAULT|
|**5190**|*createdBy*|Created By |InputType.textField|REFERENCE|
|**5200**|*creationDate*|Creation Date |InputType.dateTime|REFERENCE|
|**5210**|*lastUpdatedBy*|Last Updated By |InputType.textField|REFERENCE|
|**5220**|*lastUpdateDate*|Last Update Date |InputType.dateTime|REFERENCE|

</details>


## Actions

Actions allow you to change the status of the payment. 
The system creates payments in draft status. When you are ready to publish the payment and send it to the supplier, change it to Confirmed.
You can cancel a payment by clicking on the Cancel button. Similarly, you can close any payment by clicking on the Close button.

Payment journal lines can be created for confirmed payments.

<img src="/images/modules/ap/payment/payment_09.PNG" width="800"/>


## Accounting
The system creates the corresponding detail line when you save any payment line.
If you enter any accounting profile on the payment header, the system will use the accounting profile to derive the accounts. Else, the system will use the default accounting profile for the business unit.

### Payment
When you enter payment and  match to an invoice, Receivables creates the following journal entry:

```
DR Liability
            CR Cash
```            

### Advance Payment
```
DR PrePayment
            CR Cash
```     