---
id: bank
title: Bank
sidebar_label: Bank
---

:::caution

This documentation is incomplete.

:::

Banks are required to create payment transactions both in AP & AR. AR uses internal bank accounts to receive payments from customers, and AP uses internal bank accounts to create a pay to suppliers. You can define bank accounts for your customers, suppliers, and internal organization.

A bank consists of

- Header
- Line
- Detail


## Header - Bank
<img src="/images/modules/mdm/bank/bank_01.png" width="400"/>

A bank header contains basic information about a bank, such as a name, location, etc.

To view/create/update a bank, navigate to the "bank" search screen from your dashboard/favorite.
<img src="/images/modules/mdm/bank/bank_02.png" width="800"/>


Enter the organization/bank details or any other criteria in the search form and click on the search button to view an existing bank.  
Click on create a new button to create a new bank; by manually entering all the information,
Copy an existing bank to a new bank is always better than manually entering all the data to create a new bank.
The application lets you update all the details before confirmation; you can configure which fields are view-only after the confirmation.

<img src="/images/modules/mdm/bank/bank_03.png" width="350"/>

If you don't enter organization/bank details, the system will show you all the banks. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search banks.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.

<img src="/images/modules/mdm/bank/bank_04.png" width="800"/>

To view the search result in a table format, click on the table icon in the bottom left corner.

To open a specific bank, click on the menu of that record, and click on view/fetch & view.

You can also click on the expand icon against any item on the search result screen to view the bank header details such as bank number, quantities, start date, status, etc.

<img src="/images/modules/mdm/bank/bank_04a.png" width="500"/>

The system will fetch all the data related to the selected bank. Depending on the device size, the bank details are shown either right to the search result screen or on a separate screen.

<img src="/images/modules/mdm/bank/bank_05.png" width="800"/>

Scroll left, right, up, down to view all the details. The bank line and details are shown in a separate tab.
The default configuration shows fields in various functional groups such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  


<img src="/images/modules/mdm/bank/bank_06.png" width="800"/>


You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.
<img src="/images/modules/mdm/bank/bank_06a.png" width="800"/>


<details>
<summary>All Fields</summary>

| Name     | Sequence                   | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*mdmBankHeaderId*|Mdm Bank Header Id |InputType.text|REFERENCE|
|**10**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**20**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**30**|*country*|Country |InputType.textField|DEFAULT|
|**40**|*bankName*|Bank Name |InputType.textField|FINANCE|
|**50**|*bankNumber*|Bank Number |InputType.number|DATA|
|**60**|*description*|Description |InputType.textField|DEFAULT|
|**70**|*bankNameShort*|Bank Name Short |InputType.textField|FINANCE|
|**80**|*bankNameAlt*|Bank Name Alt |InputType.textField|PLANNING|
|**90**|*taxRegNo*|Tax Reg No |InputType.textField|FINANCE|
|**100**|*taxPayerId*|Tax Payer Id |InputType.text|REFERENCE|
|**110**|*addressId*|Address Id |InputType.text|REFERENCE|
|**120**|*contactId*|Contact Id |InputType.text|REFERENCE|
|**130**|*status*|Status |InputType.select|CONTROL|
|**180**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**190**|*glAcProfileHeaderId*|Gl Ac Profile Header Id |deferredSelect|REFERENCE|
|**5140**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5150**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5160**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5170**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>

## Lines - Branch
<img src="/images/modules/mdm/bank/bank_07.png" width="800"/>

You can add multiple lines to each bank header. Each bank line contains branch name, shortcode, IBAN, ifsc, location, etc.


<img src="/images/modules/mdm/bank/bank_07a.png" width="400"/>


Navigate to the lines tab to view/add/update lines.  
Click on the add new entity to add a new line. If a line already exists, click on copy entity to copy all the details.
You can enable/disable fields allowed to be copied in the menu configuration.  

<img src="/images/modules/mdm/bank/bank_07b.png" width="800"/>


The entity group shows information related to shipping inventory organization. Though the details are not required to create a bank, you need to enter the information before using it for payment purposes.

<img src="/images/modules/mdm/bank/bank_07c.png" width="800"/>


The reference groups show various ids for reference only. You don't need to enter any information in this section. When you save a bank for the first time, the system will auto-populate the newly created header id and line ids.





<img src="/images/modules/mdm/bank/bank_07d.png" width="800"/>



Scroll left, right, up, and down view all other fields.


Enter all the other fields and click on the save button to save the bank. The app will post all the data to the server and will show the messages returned from the server.

<img src="/images/modules/mdm/bank/bank_07e.png" width="800"/>




<details>
<summary>All Fields</summary>

| Name     | Sequence                 | Label                    | InputType             | Field Group |
| -------- | ------------------------ | ------------------------ | --------------------- | ----------- |
|**10**|*mdmBankLineId*|Mdm Bank Line Id |InputType.text|REFERENCE|
|**10**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**20**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**30**|*mdmBankHeaderId*|Mdm Bank Header Id |InputType.deferredSelect|REFERENCE|
|**40**|*branchName*|Branch Name |InputType.textField|DEFAULT|
|**50**|*country*|Country |InputType.textField|DEFAULT|
|**60**|*branchNumber*|Branch Number |InputType.number|DATA|
|**70**|*description*|Description |InputType.textField|DEFAULT|
|**80**|*branchNameShort*|Branch Name Short |InputType.textField|DEFAULT|
|**90**|*branchNameAlt*|Branch Name Alt |InputType.textField|PLANNING|
|**100**|*ifscCode*|Ifsc Code |InputType.textField|DEFAULT|
|**110**|*swiftCode*|Swift Code |InputType.textField|DEFAULT|
|**120**|*routingNumber*|Routing Number |InputType.textField|DATA|
|**130**|*ibanCode*|Iban Code |InputType.textField|DEFAULT|
|**140**|*taxRegNo*|Tax Reg No |InputType.textField|FINANCE|
|**150**|*taxPayerId*|Tax Payer Id |InputType.text|REFERENCE|
|**160**|*siteAddressId*|Site Address Id |InputType.text|REFERENCE|
|**170**|*contactId*|Contact Id |InputType.text|REFERENCE|
|**180**|*status*|Status |InputType.select|CONTROL|
|**5190**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5200**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5210**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5220**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>


## Details - Account

<img src="/images/modules/mdm/bank/bank_08.png" width="800"/>

You can add multiple details to each bank line. Each bank detail represents a unique bank account id.


Depending upon your configuration, the details of a line are shown either on a separate tab or in the links section of lines.
<img src="/images/modules/mdm/bank/bank_08a.png" width="250"/>


Click on the Details button below a line to view/update/create details.

<img src="/images/modules/mdm/bank/bank_08b.png" width="800"/>

Click on the expandable button to view the fields of a detail line.

To create a new detail, click on Add New Line button. You can also copy an existing detail line to a new one by clicking on the Copy Line button.
<img src="/images/modules/mdm/bank/bank_08c.png" width="800"/>


A bank account can be
- *Internal*
- *Supplier*
- *Customer*

<img src="/images/modules/mdm/bank/bank_08d.png" width="800"/>

You can only use internal bank accounts to create Payments in AR & AP. For an internal bank account, enter the business organization details. Similarly, enter supplier and customer details for customer and supplier bank accounts, respectively.


<img src="/images/modules/mdm/bank/bank_08e.png" width="800"/>


<details>
<summary>All Fields</summary>

| Name     | Sequence                 | Label                    | InputType           | Field Group |
| -------- | ------------------------ | ------------------------ | ------------------- | ----------- |
|**10**|*vvBuOrg*| Bu Org |deferredSelect|ENTITY|
|**10**|*vvBuOrgCode*| Bu Org Code |deferredSelect|ENTITY|
|**20**|*vvSupplierNumber*| Supplier Number |deferredSelect|DATA|
|**30**|*vvSupplierName*| Supplier Name |deferredSelect|ENTITY|
|**40**|*vvSupplierSiteNumber*| Supplier Site Number |deferredSelect|DATA|
|**50**|*vvSupplierSiteName*| Supplier Site Name |deferredSelect|ENTITY|
|**60**|*vvCustomerNumber*| Customer Number |deferredSelect|DATA|
|**70**|*vvCustomerName*| Customer Name |deferredSelect|ENTITY|
|**80**|*vvCustomerSiteNumber*| Customer Site Number |deferredSelect|DATA|
|**90**|*vvCustomerSiteName*| Customer Site Name |deferredSelect|ENTITY|
|**100**|*mdmBankDetailId*|Mdm Bank Detail Id |InputType.text|REFERENCE|
|**110**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**120**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**130**|*mdmBankLineId*|Mdm Bank Line Id |InputType.text|REFERENCE|
|**140**|*accountNumber*|Account Number |InputType.textField|DATA|
|**150**|*cashAcId*|Cash Ac Id |deferredSelect|REFERENCE|
|**160**|*currencyCode*|Currency Code |deferredSelect|FINANCE|
|**170**|*description*|Description |InputType.textField|DEFAULT|
|**180**|*accountUsage*|Account Usage |InputType.select|DEFAULT|
|**190**|*accountType*|Account Type |InputType.textField|CONTROL|
|**200**|*buOrgId*|Bu Org Id |deferredSelect|REFERENCE|
|**210**|*apSupplierSiteId*|Ap Supplier Site Id |deferredSelect|REFERENCE|
|**220**|*arCustomerSiteId*|Ar Customer Site Id |deferredSelect|REFERENCE|
|**230**|*cashClearingAcId*|Cash Clearing Ac Id |deferredSelect|REFERENCE|
|**240**|*bankChargeAcId*|Bank Charge Ac Id |deferredSelect|REFERENCE|
|**250**|*exchangeGlAcId*|Exchange Gl Ac Id |deferredSelect|REFERENCE|
|**260**|*hrCashAcId*|Hr Cash Ac Id |deferredSelect|REFERENCE|
|**270**|*hrCashClearingAcId*|Hr Cash Clearing Ac Id |deferredSelect|REFERENCE|
|**280**|*hrBankChargeAcId*|Hr Bank Charge Ac Id |deferredSelect|REFERENCE|
|**290**|*hrExchangeGlAcId*|Hr Exchange Gl Ac Id |deferredSelect|REFERENCE|
|**300**|*nettingAcCb*|Netting Ac Cb |InputType.switchField|DEFAULT|
|**310**|*minimumPayment*|Minimum Payment |InputType.textField|PLANNING|
|**320**|*maximumPayment*|Maximum Payment |InputType.textField|PLANNING|
|**330**|*contactId*|Contact Id |InputType.text|REFERENCE|
|**340**|*apPaymentMethodId*|Ap Payment Method Id |InputType.text|REFERENCE|
|**350**|*status*|Status |InputType.select|CONTROL|
|**400**|*glAcProfileHeaderId*|Gl Ac Profile Header Id |deferredSelect|REFERENCE|
|**5360**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5370**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5380**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5390**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>

