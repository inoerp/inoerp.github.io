---
id: payment
title: Payment
sidebar_label: Payment
---

:::caution

This documentation is incomplete.

:::

An AR payment is a document created by a business to record payments received from a customer. If the payment is received against an open invoice, you can match the customer invoice. Matching a payment to an invoice reduces customer open balance. 

In inoERP, you can create a payment using the payment screen. You can create a payment from an invoice/debit memo. You can also create a payment by manually entering all the required information such as customer, currency, amount, date, etc.
Payment consists of

- Header
- Line
- Detail


## Header

A payment header contains the customer, business unit, currency-related information. 

To view/create/update a payment, navigate to the "payment" search screen from your dashboard/favorite.

<img src="/images/modules/ar/payment/payment_01a.PNG" width="400"/>

Enter the organization/payment details or any other criteria in the search form and click on the search button to view an existing payment.  
Click on create a new button to create a new payment; by manually entering all the information,
Copy an existing payment to a new payment is always better than manually entering all the data to create a new payment.
The application lets you update all the details before confirmation; you can configure which fields are view-only after the confirmation.

<img src="/images/modules/ar/payment/payment_02.PNG" width="800"/>

If you don't enter organization/customer details, the system will show you all the payments. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search payments.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.

<img src="/images/modules/ar/payment/payment_03.PNG" width="350"/>

To view the search result in a table format, click on the table icon available on the bottom left corner.

To open a specific payment, click on the menu of that record, and click on view/fetch & view.

You can also click on the expand icon against any item on the search result screen to view the payment header details such as payment number, quantities, start date, status, etc.

<img src="/images/modules/ar/payment/payment_04.PNG" width="800"/>

The system will fetch all the data related to the selected payment. Depending on the device size, the payment details are shown either right to the search result screen or on a separate screen.

<img src="/images/modules/ar/payment/payment_05.PNG" width="800"/>

Scroll left, right, up, down to view all the details. The payment line and details are shown in a separate tab.
The default configuration shows fields in various functional groups such as
<img src="/images/modules/ar/payment/payment_06.PNG" width="800"/>

- Finance
- Entity
- Reference
- Data
- Control
- Etc  

<img src="/images/modules/ar/payment/payment_06b.PNG" width="800"/>

You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.


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
|**230**|*sdSoHeaderId*|Sd So Header Id |InputType.number|REFERENCE|
|**240**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**250**|*srcEntityId*|Src Entity Id |InputType.textField|REFERENCE|
|**260**|*buOrgId*|Bu Org Id |deferredSelect|REFERENCE|
|**270**|*documentType*|Document Type |InputType.select|CONTROL|
|**280**|*soNumber*|So Number |InputType.textField|DATA|
|**290**|*arCustomerId*|Ar Customer Id |deferredSelect|REFERENCE|
|**300**|*arCustomerSiteId*|Ar Customer Site Id |deferredSelect|REFERENCE|
|**310**|*hrEmployeeId*|Hr Employee Id |InputType.number|REFERENCE|
|**320**|*description*|Description |InputType.textField|DEFAULT|
|**330**|*shipToId*|Ship To Id |deferredSelect|REFERENCE|
|**340**|*billToId*|Bill To Id |deferredSelect|PLANNING|
|**350**|*priceListHeaderId*|Price List Header Id |InputType.number|REFERENCE|
|**360**|*prePaymentAmount*|Pre Payment Amount |InputType.textField|FINANCE|
|**370**|*docCurrency*|Doc Currency |deferredSelect|FINANCE|
|**380**|*paymentTermId*|Payment Term Id |deferredSelect|REFERENCE|
|**390**|*paymentTermDate*|Payment Term Date |InputType.date|DATE|
|**400**|*exchangeRateType*|Exchange Rate Type |deferredSelect|CONTROL|
|**410**|*exchangeRate*|Exchange Rate |InputType.textField|FINANCE|
|**420**|*orderSourceType*|Order Source Type |InputType.select|CONTROL|
|**430**|*orderReferenceTable*|Order Reference Table |InputType.textField|REFERENCE|
|**440**|*orderReferenceId*|Order Reference Id |InputType.number|REFERENCE|
|**450**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**460**|*referenceType*|Reference Type |InputType.textField|CONTROL|
|**470**|*referenceKeyName*|Reference Key Name |InputType.textField|REFERENCE|
|**480**|*referenceKeyValue*|Reference Key Value |InputType.number|REFERENCE|
|**490**|*approvalStatus*|Approval Status |InputType.select|CONTROL|
|**540**|*revEnabledCb*|Rev Enabled Cb |InputType.switchField|DEFAULT|
|**550**|*revNumber*|Rev Number |InputType.number|DATA|
|**560**|*glAcProfileHeaderId*|Gl Ac Profile Header Id |deferredSelect|REFERENCE|
|**5500**|*createdBy*|Created By |InputType.textField|REFERENCE|
|**5510**|*creationDate*|Creation Date |InputType.dateTime|REFERENCE|
|**5520**|*lastUpdatedBy*|Last Updated By |InputType.textField|REFERENCE|
|**5530**|*lastUpdateDate*|Last Update Date |InputType.dateTime|REFERENCE|

</details>

## Lines


You can add multiple lines to each payment header. Each payment line contains an item, UOM, price, etc.

<img src="/images/modules/ar/payment/payment_07.PNG" width="800"/>



Navigate to the lines tab to view/add/update lines.  
Click on the add new entity to add a new line. If a line already exists, click on copy entity to copy all the details.
You can enable/disable fields allowed to be copied in the menu configuration.  
<img src="/images/modules/ar/payment/payment_07a.PNG" width="300"/>


**Line Number**: Line number is a mandatory field. Enter a numeric value for the line  

**Line Price**: Line price is a mandatory field. Enter a numeric value for the line price. 

<img src="/images/modules/ar/payment/payment_07b.PNG" width="800"/>


The entity group shows information related to business organization, customer, etc. 

<img src="/images/modules/ar/payment/payment_07c.PNG" width="800"/>

The reference groups show various ids for reference only. You don't need to enter any information in this section. When you save payment for the first time, the system will auto-populate the newly created header id and line ids.


The header price is the sum of all the line prices. You don't need to enter any price at the payment header. In the finance section, enter the exchange rate and currency if the values are different from the header.

<img src="/images/modules/ar/payment/payment_07d.PNG" width="800"/>


Scroll left, right, up, and down view all other fields.


Enter all the other fields and click on the save button to save the payment. The app will post all the data to the server and will show the messages returned from the server.

<details>
<summary>All Fields</summary>

| Name     | Sequence                 | Label                    | InputType             | Field Group |
| -------- | ------------------------ | ------------------------ | --------------------- | ----------- |
|**10**|*vvOrgCode*| Org Code |deferredSelect|ENTITY|
|**10**|*vvItemNumber*| Item Number |deferredSelect|DEFAULT|
|**20**|*vvUomCode*| Uom Code |deferredSelect|DEFAULT|
|**30**|*vvUomDescription*| Uom Description |deferredSelect|DEFAULT|
|**40**|*vvItemStatus*| Item Status |deferredSelect|CONTROL|
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
|**170**|*vvDiscountedLinePrice*| Discounted Line Price |InputType.textField|FINANCE|
|**180**|*vvTaxCalculationMethod*| Tax Calculation Method |deferredSelect|FINANCE|
|**190**|*vvTaxPercentage*| Tax Percentage |deferredSelect|FINANCE|
|**200**|*vvTaxTaxAmount*| Tax Tax Amount |InputType.textField|FINANCE|
|**210**|*vvDiscountName*| Discount Name |deferredSelect|FINANCE|
|**220**|*vvDiscountPercentage*| Discount Percentage |deferredSelect|FINANCE|
|**230**|*vvDiscountAmount*| Discount Amount |InputType.textField|FINANCE|
|**240**|*vvTotalScheduledQty*| Total Scheduled Qty |InputType.textField|DEFAULT|
|**250**|*sdSoLineId*|Sd So Line Id |InputType.number|REFERENCE|
|**260**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**270**|*srcEntityId*|Src Entity Id |InputType.textField|REFERENCE|
|**280**|*sdSoHeaderId*|Sd So Header Id |InputType.number|REFERENCE|
|**290**|*lineNumber*|Line Number |InputType.number|DATA|
|**300**|*shippingOrgId*|Shipping Org Id |deferredSelect|REFERENCE|
|**310**|*invItemMasterId*|Inv Item Master Id |deferredSelect|REFERENCE|
|**320**|*itemDescription*|Item Description |deferredSelect|DEFAULT|
|**330**|*lineQuantity*|Line Quantity |InputType.textField|DATA|
|**340**|*priceListHeaderId*|Price List Header Id |InputType.number|REFERENCE|
|**350**|*priceDate*|Price Date |InputType.date|DATE|
|**360**|*unitPrice*|Unit Price |InputType.textField|FINANCE|
|**370**|*linePrice*|Line Price |InputType.textField|FINANCE|
|**380**|*taxAmount*|Tax Amount |InputType.textField|FINANCE|
|**390**|*taxCode*|Tax Code |deferredSelect|FINANCE|
|**400**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**410**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**420**|*needByDate*|Need By Date |InputType.dateTime|DATE|
|**430**|*promiseDate*|Promise Date |InputType.date|DATE|
|**440**|*scheduleShipDate*|Schedule Ship Date |InputType.date|DATE|
|**450**|*referenceDocType*|Reference Doc Type |InputType.textField|CONTROL|
|**460**|*referenceDocNumber*|Reference Doc Number |InputType.number|DATA|
|**470**|*soDocumentTypeLine*|So Document Type Line |deferredSelect|CONTROL|
|**480**|*supplySource*|Supply Source |InputType.select|DEFAULT|
|**490**|*destinationType*|Destination Type |InputType.select|CONTROL|
|**500**|*lineDescription*|Line Description |InputType.textField|DEFAULT|
|**510**|*uomCode*|Uom Code |deferredSelect|DEFAULT|
|**520**|*kitCb*|Kit Cb |InputType.switchField|DEFAULT|
|**530**|*kitConfiguredCb*|Kit Configured Cb |InputType.switchField|DEFAULT|
|**540**|*approvalStatus*|Approval Status |InputType.select|CONTROL|
|**550**|*sysSpdHeaderId*|Sys Spd Header Id |InputType.number|REFERENCE|
|**560**|*discountCode*|Discount Code |deferredSelect|FINANCE|
|**570**|*lineDiscountAmount*|Line Discount Amount |InputType.textField|FINANCE|
|**620**|*shipToId*|Ship To Id |deferredSelect|REFERENCE|
|**630**|*billToId*|Bill To Id |deferredSelect|PLANNING|
|**640**|*lineType*|Line Type |InputType.select|CONTROL|
|**5580**|*createdBy*|Created By |InputType.textField|REFERENCE|
|**5590**|*creationDate*|Creation Date |InputType.dateTime|REFERENCE|
|**5600**|*lastUpdatedBy*|Last Updated By |InputType.textField|REFERENCE|
|**5610**|*lastUpdateDate*|Last Update Date |InputType.dateTime|REFERENCE|

</details>


## Details

<img src="/images/modules/ar/payment/payment_08.PNG" width="800"/>

The system creates two details for each line :
* First line to debit cash
* Second line to credit receivables. 

Though you don't need to regularly review/update payment detail lines, It's advisable to review accounts and amounts after setup changes. 

Depending upon your configuration, the details of a line are shown either on a separate tab or in the links section of lines.
<img src="/images/modules/ar/payment/payment_08a.PNG" width="350"/>


Click on the Details button below a line to view/update/create details.
By default, when saving any line system adds detail with the price and account details. You can add multiple details and change the price/quantity as per your actual requirement.

<img src="/images/modules/ar/payment/payment_08b.PNG" width="800"/>

Click on the expandable button to view the fields of a detail line.

To create a new detail, click on Add New Line button. You can also copy an existing detail line to a new one by clicking on the Copy Line button.
<img src="/images/modules/ar/payment/payment_08c.PNG" width="800"/>


In the data section, enter the detail line number. The system always creates the first line as line number 1, but you can change it.
While adding a new detail line, enter a detail line number as its mandatory field.
Enter the detail quantity in the quantity field.

<img src="/images/modules/ar/payment/payment_08d.PNG" width="800"/>



The reference groups show various ids for reference only. You don't need to enter any information in this section.
<img src="/images/modules/ar/payment/payment_08e.PNG" width="800"/>


<details>
<summary>All Fields</summary>

| Name     | Sequence                 | Label                    | InputType           | Field Group |
| -------- | ------------------------ | ------------------------ | ------------------- | ----------- |
|**10**|*vvOrgCode*| Org Code |deferredSelect|ENTITY|
|**10**|*vvItemNumber*| Item Number |deferredSelect|DEFAULT|
|**20**|*vvUomCode*| Uom Code |deferredSelect|DEFAULT|
|**30**|*vvUomDescription*| Uom Description |deferredSelect|DEFAULT|
|**40**|*vvItemStatus*| Item Status |deferredSelect|CONTROL|
|**50**|*vvSdSoHeaderId*| Sd So Header Id |InputType.number|REFERENCE|
|**60**|*vvLineNumber*| Line Number |InputType.number|DATA|
|**70**|*vvShippingOrgId*| Shipping Org Id |deferredSelect|REFERENCE|
|**80**|*vvInvItemMasterId*| Inv Item Master Id |deferredSelect|REFERENCE|
|**90**|*vvItemDescription*| Item Description |deferredSelect|DEFAULT|
|**100**|*vvLineQuantity*| Line Quantity |InputType.textField|DATA|
|**110**|*vvTotalScheduledQty*| Total Scheduled Qty |InputType.textField|DEFAULT|
|**120**|*vvDetailLocator*| Detail Locator |deferredSelect|ENTITY|
|**130**|*sdSoDetailId*|Sd So Detail Id |InputType.number|REFERENCE|
|**140**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**150**|*srcEntityId*|Src Entity Id |InputType.textField|REFERENCE|
|**160**|*sdSoLineId*|Sd So Line Id |InputType.number|REFERENCE|
|**170**|*shipmentNumber*|Shipment Number |InputType.number|DATA|
|**180**|*subInventory*|Sub Inventory |deferredSelect|ENTITY|
|**190**|*locatorId*|Locator Id |deferredSelect|REFERENCE|
|**200**|*requestor*|Requestor |InputType.textField|DEFAULT|
|**210**|*shipToLocationId*|Ship To Location Id |InputType.number|REFERENCE|
|**220**|*uomCode*|Uom Code |deferredSelect|DEFAULT|
|**230**|*quantity*|Quantity |InputType.textField|DATA|
|**240**|*needByDate*|Need By Date |InputType.dateTime|DATE|
|**250**|*promiseDate*|Promise Date |InputType.date|DATE|
|**260**|*scheduleShipDate*|Schedule Ship Date |InputType.date|DATE|
|**270**|*status*|Status |InputType.textField|CONTROL|
|**5280**|*createdBy*|Created By |InputType.textField|REFERENCE|
|**5290**|*creationDate*|Creation Date |InputType.dateTime|REFERENCE|
|**5300**|*lastUpdatedBy*|Last Updated By |InputType.textField|REFERENCE|
|**5310**|*lastUpdateDate*|Last Update Date |InputType.dateTime|REFERENCE|

</details>


## Actions

Actions allow you to change the status of the payment. 
The system creates payments in draft status. When you are ready to publish the payment and send it to the customer, change it to Confirmed.
You can cancel a payment by clicking on the Cancel button. Similarly, you can close any payment by clicking on the Close button.

Payment journal lines can be created for confirmed payments.

<img src="/images/modules/ar/payment/payment_09.PNG" width="800"/>


## Accounting
When you save any payment line, the system creates the corresponding detail line.
If you enter any accounting profile on the payment header, the system will use the accounting profile to derive the accounts. Else, the system will use the default accounting profile for the business unit.

### Payment
When you enter payment and  match to an invoice, Receivables creates the following journal entry:

```
DR Cash
            CR Receivables
```            

### Advance Payment
```
DR Cash
            CR Unapplied
```     