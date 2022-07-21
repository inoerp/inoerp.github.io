---
id: transaction
title: Transaction
sidebar_label: Transaction
---

To create an inventory transaction, you need to create an inventory transaction document. In inoERP, we follow the same process for all inventory-related transactions irrespective of the document (Sales Order, Purchase Order, Work Order, Project, etc.). The process is similar to SAP MIGO (there is no corresponding process in Oracle) with some extra features such as
-  The transaction document creation (ex: planner activity) and transaction completion (ex: warehouse operator activity) can be managed by different employees
- You can use the approval process for all transaction documents
- A single transaction document can contain information from multiple source documents (i.e., a Single Shipping transaction document for multiple sales orders or a Single purchasing receiving document for multiple purchase orders)

Special inventory transactions track the movement of materials that are not directly related to any standard document (such as SO, PO, WO, etc.).You can create special inventory transactions to receive/issue/transfer materials without existing documents.   "Inventory Transaction Docs" record all such special transactions.


The application provides many standard transaction types and allows you to create custom transaction types to map any unique business requirement.
 - Miscellaneous Receipt 
 - Miscellaneous Issue 
 - Sub-Inventory Transfer
 - Inter-Org Transfer Direct 

:::info

Though the system allows you to create inventory transactions directly, it's always advisable to use transaction documents to create inventory transactions. Transaction document provides many validation layers for serial, lot, subinventory, etc. Also, by using transaction documents, you can incorporate custom functionalities such as approval, etc.

:::

Transaction document consists of

- a header
- several lines that contain item and quantity information
- serial details for serial controlled items
- lot number details for lot controlled items


## Transaction Document

You can use transaction documents to create all inventory-related transactions with/without reference to a document.
Ex: PO Receipt, PO Delivery, SO Shipment, WIP Completion, Project Material Issue, etc.


Document type controls what kind of transaction types you can select on a new transaction document. Once a transaction document is saved system does not allow you to change the document type.

```jsx title="Document Type and Corresponding Transaction Type"

{
    "transactionType": {
        "purchase_order": [
            "PO_RECEIPT",
            "PO_DELIVERY",
            "PO_RETURN"
        ],
        "project": [
            "PRJ_MATERIAL_ISSUE",
            "PRJ_MATERIAL_RETURN",
            "PRJ_SHIPPING",
            "PRJ_SHIPPING_RETURN"
        ],
        "sales_order": [
            "SO_PICKING",
            "SO_SHIPPING",
            "INV_MOVE_TRANSACTION",
            "SO_REVERSE_PICKING",
            "SO_REVERSE_SHIPPING",
            "SO_RETURN"
        ],
        "transfer_order": [
            "INTER_ORG_TRANSFER_INTRANSIT",
            "INTER_ORG_TRANSFER_RECEIPT"
        ],
        "work_order": [
            "WIP_MATERIAL_ISSUE",
            "WIP_MATERIAL_RETURN",
            "WIP_NEGATIVE_ISSUE",
            "WIP_NEGATIVE_RETURN",
            "WIP_WOL_COMPLETION",
            "WIP_WOL_RETURN",
            "WIP_ASSEMBLY_COMPLETION",
            "WIP_ASSEMBLY_RETURN",
            "INV_MOVE_TRANSACTION"
        ],
        "other": [
            "MISCELLANEOUS_ISSUE",
            "MISCELLANEOUS_RECEIPT",
            "SUBINVENTORY_TRANSFER",
            "INTER_ORG_TRANSFER_DIRECT",
            "INTER_ORG_TRANSFER_INTRANSIT",
            "INTER_ORG_TRANSFER_RECEIPT",
            "INV_MOVE_TRANSACTION"
        ]
    }

}

```


To create/view/update a transaction doc, navigate to the "transaction doc"  screen from your dashboard/favorite.


<img src="/images/modules/inv/transaction_doc/transaction_doc_01.PNG" width="350"/>

Enter the organization/transaction doc details or any other criteria in the search form and click on the search button to view an existing transaction doc.  


<img src="/images/modules/inv/transaction_doc/transaction_doc_02.PNG" width="800"/>

The system will show you all the transaction docs if you don't enter organization details. If your organization has configured to make any field mandatory for search, you must enter those fields to search transaction docs.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.


If you click on the create a new button, the system will open a simple step form to create a new transaction doc. You can click on the detail right bottom to view all the fields available for the object. 

<img src="/images/modules/inv/transaction_doc/transaction_doc_03.PNG" width="600"/>

To view the search result in a table format, click on the table icon available in the bottom left corner.

To view specific transaction doc details, click on the menu of that record, and click on view/fetch & view.
<img src="/images/modules/inv/transaction_doc/transaction_doc_04.PNG" width="350"/>

Select one or more lines to create a transaction doc and select "create transaction doc" from the action.

You can also click the expand icon against any item on the search result screen to view the transaction doc header details, such as number, quantities, start date, status, etc.
<img src="/images/modules/inv/transaction_doc/transaction_doc_05.PNG" width="800"/>


The system will fetch all the selected document detail line data. The document details are shown either on the search result screen or on a separate screen, depending on the device size.


<img src="/images/modules/inv/transaction_doc/transaction_doc_06.PNG" width="800"/>


Scroll left, right, up, and down to view all the details. The document line and components are shown in a separate tab.
The default configuration shows fields in various functional groups, such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  


<img src="/images/modules/inv/transaction_doc/transaction_doc_06a.PNG" width="800"/>

You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.

<img src="/images/modules/inv/transaction_doc/transaction_doc_06b.PNG" width="800"/>


<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*sdtransaction docHeaderId*|Sd transaction doc Header Id |InputType.number|REFERENCE|
|**10**|*invOrgId*|Inv Org Id |deferredSelect|REFERENCE|
|**20**|*sdSoHeaderId*|Sd So Header Id |InputType.number|REFERENCE|
|**30**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**40**|*srcEntityId*|Src Entity Id |InputType.textField|REFERENCE|
|**50**|*docNumber*|Doc Number |InputType.textField|DATA|
|**60**|*transaction docNumber*|transaction doc Number |InputType.textField|DATA|
|**70**|*comment*|Comment |InputType.textField|DEFAULT|
|**80**|*transactionTypeId*|Transaction Type Id |InputType.number|CONTROL|
|**90**|*transaction docDate*|transaction doc Date |InputType.dateTime|DATE|
|**100**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**110**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**120**|*receivedBy*|Received By |InputType.textField|DEFAULT|
|**130**|*carrier*|Carrier |InputType.textField|DEFAULT|
|**140**|*vehicleNumber*|Vehicle Number |InputType.textField|DATA|
|**150**|*transaction docReceivedBy*|transaction doc Received By |InputType.textField|DEFAULT|
|**160**|*carrierReceiptNumber*|Carrier Receipt Number |InputType.textField|DATA|
|**170**|*expetcedtransaction docDate*|Expetced transaction doc Date |InputType.date|DATE|
|**180**|*actualtransaction docDate*|Actual transaction doc Date |InputType.date|DATE|
|**190**|*handlingInstruction*|Handling Instruction |InputType.textField|DEFAULT|
|**200**|*systemMessage*|System Message |InputType.textField|DEFAULT|
|**5210**|*createdBy*|Created By |InputType.textField|REFERENCE|
|**5220**|*creationDate*|Creation Date |InputType.dateTime|REFERENCE|
|**5230**|*lastUpdatedBy*|Last Updated By |InputType.textField|REFERENCE|
|**5240**|*lastUpdateDate*|Last Update Date |InputType.dateTime|REFERENCE|

</details>

### Lines

<img src="/images/modules/inv/transaction_doc/transaction_doc_07.PNG" width="800"/>


You can add multiple lines to each transaction doc header. Each transaction doc line contains an item, UOM, product description, Quantity, serial, and lot details.

<img src="/images/modules/inv/transaction_doc/transaction_doc_07a.PNG" width="400"/>

Navigate to the lines tab to view/add/update lines.  
Click on the add new entity to add a new line. If a line already exists, click on copy entity to copy all the details.
You can enable/disable fields allowed to be copied in the menu configuration.  

<img src="/images/modules/inv/transaction_doc/transaction_doc_07b.PNG" width="800"/>


**Quantity**: Enter the Quantity to be transacted against the doc line.

**Line Number**: Enter a document line number.

**Item**: Enter an item number.

<img src="/images/modules/inv/transaction_doc/transaction_doc_07c.PNG" width="800"/>


The entity group shows information related to shipping inventory organization. 

The reference groups show various ids for reference only. You don't need to enter any information in this section. When you save a transaction doc for the first time, the system will auto-populate the newly created header id and line ids.

<img src="/images/modules/inv/transaction_doc/transaction_doc_07d.PNG" width="800"/>



Scroll left, right, up, and down view all other fields.
<img src="/images/modules/inv/transaction_doc/transaction_doc_07e.PNG" width="800"/>


Enter all the other fields and click on the save button to save the transaction doc. The app will post all the data to the server and will show the messages returned from the server.

<img src="/images/modules/inv/transaction_doc/transaction_doc_07f.PNG" width="800"/>


<details>
<summary>All Fields</summary>

| Sequence | Name                | Label                    | InputType             | Field Group |
| -------- | ------------------------ | ------------------------ | --------------------- | ----------- |
|**10**|*vvSoNumber*| So Number |InputType.textField|DATA|
|**10**|*vvSoDocNumber*| So Doc Number |InputType.textField|DATA|
|**20**|*vvOrgCode*| Org Code |deferredSelect|ENTITY|
|**30**|*vvItemNumber*| Item Number |deferredSelect|DEFAULT|
|**40**|*vvUomCode*| Uom Code |deferredSelect|DEFAULT|
|**50**|*vvUomDescription*| Uom Description |deferredSelect|DEFAULT|
|**60**|*vvItemStatus*| Item Status |deferredSelect|CONTROL|
|**70**|*vvSdSoHeaderId*| Sd So Header Id |InputType.number|REFERENCE|
|**80**|*vvLineNumber*| Line Number |InputType.number|DATA|
|**90**|*vvInvOrgId*| Inv Org Id |deferredSelect|REFERENCE|
|**100**|*vvInvItemMasterId*| Inv Item Master Id |deferredSelect|REFERENCE|
|**110**|*vvItemDescription*| Item Description |deferredSelect|DEFAULT|
|**120**|*vvLineQuantity*| Line Quantity |InputType.textField|DATA|
|**130**|*vvShipmentNumber*| Shipment Number |InputType.number|DATA|
|**140**|*vvSubInventory*| Sub Inventory |deferredSelect|ENTITY|
|**150**|*vvLocatorId*| Locator Id |deferredSelect|REFERENCE|
|**160**|*vvDetailLocator*| Detail Locator |deferredSelect|ENTITY|
|**170**|*vvQuantity*| Quantity |InputType.textField|DATA|
|**180**|*sdtransaction docLineId*|Sd transaction doc Line Id |InputType.number|REFERENCE|
|**190**|*sdtransaction docHeaderId*|Sd transaction doc Header Id |InputType.number|REFERENCE|
|**200**|*sdSoLineId*|Sd So Line Id |InputType.textField|REFERENCE|
|**210**|*sdSoDetailId*|Sd So Detail Id |InputType.number|REFERENCE|
|**220**|*transaction docLineNumber*|transaction doc Line Number |InputType.number|DATA|
|**230**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**240**|*srcEntityId*|Src Entity Id |InputType.textField|REFERENCE|
|**250**|*transaction docQuantity*|transaction doc Quantity |InputType.textField|DATA|
|**260**|*subInventory*|Sub Inventory |deferredSelect|ENTITY|
|**270**|*locatorId*|Locator Id |deferredSelect|REFERENCE|
|**280**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**290**|*pickingDate*|Picking Date |InputType.date|DATE|
|**300**|*actualShipDate*|Actual Ship Date |InputType.date|DATE|
|**310**|*referenceDocType*|Reference Doc Type |InputType.number|CONTROL|
|**320**|*referenceDocNumber*|Reference Doc Number |InputType.number|DATA|
|**330**|*shipToLocationId*|Ship To Location Id |InputType.number|REFERENCE|
|**340**|*uomCode*|Uom Code |deferredSelect|DEFAULT|
|**350**|*volumeUomCode*|Volume Uom Code |deferredSelect|DEFAULT|
|**360**|*totalVolume*|Total Volume |InputType.textField|DATA|
|**370**|*weightUomCode*|Weight Uom Code |deferredSelect|DEFAULT|
|**380**|*totalWeight*|Total Weight |InputType.date|DATA|
|**5390**|*createdBy*|Created By |InputType.textField|REFERENCE|
|**5400**|*creationDate*|Creation Date |InputType.dateTime|REFERENCE|
|**5410**|*lastUpdatedBy*|Last Updated By |InputType.textField|REFERENCE|
|**5420**|*lastUpdateDate*|Last Update Date |InputType.dateTime|REFERENCE|

</details>



### Actions

Actions allow you to change the status of the transaction doc. 
The system creates a transaction doc in draft status. If you are using custom approval or requesting someone else to complete the transaction, click on the confirm button to confirm that the document is ready for a transaction.
Confirmation is an optional step. You can directly create inventory transactions from draft status.



<img src="/images/modules/inv/transaction_doc/transaction_doc_09.PNG" width="800"/>

Usage of various button

**Confirm**  
If the person entering a transaction document is different from the person who physically completes the task, then the document entering person can create and confirm the document. The person who completes the physical task can complete the Transaction.

**Validate**  
All transaction documents need to be validated before the system can use them for the inventory transaction. The validation process checks the document details and confirms several checks - such as enough stock is available to create an inventory transaction, etc.
You can create your custom validation using javascript.

**Transaction**  
The system uses the transaction document information to create inventory transactions. This process results in stock change and later allows you to generate GL journals against inventory transaction

You can cancel a transaction doc by clicking on the Cancel button. Similarly, you can close any transaction doc by clicking on the Close button.

Click on the Create Transaction button to create inventory transactions. Create transaction process creates below transaction
* Inventory transaction
* Inventory serial transaction for serial numbers entered on transaction doc lines
* Inventory lot transaction for lot numbers entered on transaction doc lines

You can create only one inventory transaction against one transaction doc line.

## Review

### Inventory Transaction

<img src="/images/modules/inv/transaction_doc/review/transaction_review_01.PNG" width="350"/>

After creating inventory transactions against an inventory transaction doc, you can review the inventory transactions in the inventory transaction screen.
Navigate to the inventory transaction search screen and search with the transaction doc number, ID, or other criteria.
<img src="/images/modules/inv/transaction_doc/review/transaction_review_01a.PNG" width="800"/>

The system will show all the transactions created against a transaction document. The inventory transaction shows all the lines in the inventory transaction doc, and the system generates automatic lines created using inventory transaction doc lines. For certain transactions (such as Sub-Inventory Transfer and Inter-Org Transfer), the system might show more inventory transaction lines than the number of lines on the inventory transaction.

<img src="/images/modules/inv/transaction_doc/review/transaction_review_01b.PNG" width="800"/>


### Transaction Doc

After creating inventory transactions against an inventory transaction doc, you can review the inventory transactions doc in the inventory transaction doc screen.
Navigate to the "inventory transaction doc" search screen and search with the transaction doc number, ID, or other criteria.
The system will show you the updated transaction with closed status.

<img src="/images/modules/inv/transaction_doc/review/transaction_review_02.PNG" width="800"/>


### OnHand

After creating inventory transactions against an inventory transaction doc, you can review the inventory transactions doc in the inventory OnHand screen.
Navigate to the inventory OnHand search screen and search the item number used in the inventory transaction doc.
The system will show you the updated OnHand details.

<img src="/images/modules/inv/transaction_doc/review/transaction_review_03.PNG" width="800"/>


## Miscellaneous Receipt
<img src="/images/modules/inv/transaction_doc/type/misc_receipt_01.PNG" width="800"/>

You can receive material to inventory against a general ledger account with a miscellaneous receipt transaction. Miscellaneous receipt allows you to receive material to inventory unrelated to any sales order/purchase order/work order. You can also use the miscellaneous receipt for initial stock loading from a different ERP system.

Miscellaneous receipts can also be used for manual adjustments.
:::tip

From Sub-inventory is required for miscellaneous receipt transactions. The system will throw an error if you try to create an inventory transaction without entering from the sub-inventory.

:::

## Miscellaneous Issue
<img src="/images/modules/inv/transaction_doc/type/misc_issue_01.PNG" width="800"/>

You can issue material from inventory against a general ledger account with a miscellaneous issue transaction. The miscellaneous issue allows you to receive material to inventory unrelated to any sales order/purchase order/work order. 

Miscellaneous issues can also be used for manual adjustments.
:::tip

Sub-inventory is required for miscellaneous issue transactions. The system will throw an error if you try to create an inventory transaction without entering to sub-inventory.

:::


## Sub-Inventory Transfer
<img src="/images/modules/inv/transaction_doc/type/sub_inventory_01.PNG" width="800"/>

You can use "Subinventory Transfer" to move material from one subinventory to another. If you specify the same subinventory as the From and To Subinventory, you can move material between locators within a subinventory.

Enter serial and lot numbers for serial & lot controlled items before creating inventory transactions. Otherwise, the inventory transaction will fail, and the system will show you an error message.

:::tip

Both From Sub-inventory & To Sub-inventory are required for subinventory transfer transactions. The system will throw an error if you create a subinventory transfer transaction without entering from sub-inventory or sub-inventory.

:::



## Inter-Org Transfer Direct
<img src="/images/modules/inv/transaction_doc/type/inter_org_01.PNG" width="800"/>

You can use "Inter-Org Transfer Direct" to move material from one organization to another. If you specify the same organization as the From and To organization, you can move material between locators within an organization.
Enter all the below mandatory fields to create an Inter-Org Transfer Direct
- Item Number
- UOM
- Quantity
- From Inventory Org
- To Inventory Org
- From Sub-inventory
- To Sub-inventory

Enter serial and lot numbers for serial & lot controlled items before creating inventory transactions. Else, the inventory transaction will fail, and the system will show you an error message.
