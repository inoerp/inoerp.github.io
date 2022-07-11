---
id: config
title: Config
sidebar_label: Config
---

:::caution

This documentation is incomplete.

:::


## Transaction Type
<img src="/images/modules/inv/inv_transaction_type/inv_transaction_type_01.PNG" width="350"/>


INV transaction type is an object that is assigned to all inventory transactions
- Manufacturing related - WIP Component Issue, WIP Component Return, WIP Completion, WIP  Return, etc
- Sales Order related - SO Picking, Shipping, etc
- Purchase Order related - PO Receiving, PO Delivery, etc
- Non-Document - SUbInventory Transfer, Misc. Issue, Misc. Receipt, Direct Inter-org Transfer, etc

Inventory transaction controls
- If the transaction will have OnHand (stock) impact
- how the operational transaction is recorded in the financial system(GL Journal Entry) 


To create/view/update an INV transaction type, navigate to the "INV transaction type"  screen from your dashboard/favorite.

Enter the Organization/INV transaction type details or any other criteria in the search form and click on the search button to view an existing INV transaction type.  


<img src="/images/modules/inv/inv_transaction_type/inv_transaction_type_02.PNG" width="800"/>

If you don't enter organization details, the system will show you all the INV transaction types. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search INV transaction type.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.


If you click on the create new button, the system will open a simple step form to create a new INV transaction type. You can click on the detail right bottom to view all the fields available for the object. 

<img src="/images/modules/inv/inv_transaction_type/inv_transaction_type_03.PNG" width="350"/>

To view the search result in a table format, click on the table icon available on the bottom left corner.

To view specific INV transaction type details, click on the menu of that record, and click on view/fetch & view.
<img src="/images/modules/inv/inv_transaction_type/inv_transaction_type_04a.PNG" width="350"/>


You can also click on the expand icon against any item on the search result screen to view the INV transaction type header details, such as INV transaction type name, balancing segment, etc.

<img src="/images/modules/inv/inv_transaction_type/inv_transaction_type_04.PNG" width="800"/>

The system will fetch all the selected INV transaction type data. Depending on the device size, the cost details are shown either right to the search result screen or on a separate screen.


<img src="/images/modules/inv/inv_transaction_type/inv_transaction_type_05.PNG" width="800"/>


Scroll left, right, up, down to view all the details. The document line and details are shown in a separate tab..
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

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*transactionTypeId*|Transaction Type Id |InputType.text|CONTROL|
|**10**|*ohImpactType*|Oh Impact Type |InputType.select|CONTROL|
|**20**|*invTransactionCode*|Inv Transaction Code |deferredSelect|DEFAULT|
|**30**|*transactionTypeClass*|Transaction Type Class |InputType.select|CONTROL|
|**40**|*glDocumentType*|Gl Document Type |InputType.deferredSelect|CONTROL|
|**50**|*invTransactionType*|Inv Transaction Type |deferredSelect|CONTROL|
|**60**|*typeClass*|Type Class |InputType.textField|CONTROL|
|**70**|*transactionAction*|Transaction Action |InputType.textField|DEFAULT|
|**80**|*journalProfileHeaderId*|Journal Profile Header Id |InputType.text|REFERENCE|
|**90**|*description*|Description |InputType.textField|DEFAULT|
|**100**|*allowNegativeBalanceCb*|Allow Negative Balance Cb |InputType.switchField|DEFAULT|
|**110**|*accountId*|Account Id |InputType.text|REFERENCE|
|**120**|*status*|Status |InputType.select|CONTROL|
|**130**|*revEnabledCb*|Rev Enabled Cb |InputType.switchField|DEFAULT|
|**140**|*revNumber*|Rev Number |InputType.textField|DATA|
|**190**|*glAcProfileHeaderId*|Gl Ac Profile Header Id |deferredSelect|REFERENCE|
|**200**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**210**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**5150**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5160**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5170**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5180**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>

