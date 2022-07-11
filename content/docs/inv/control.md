---
id: control
title: Control
sidebar_label: Control
---


InoERP provides a perpetual inventory management system. The application continuously and immediately updates inventory values based on inventory transactions. This mechanism offers accurate stock on-hand accounting at all times. However, this also requires organizations to correctly classify inventory and create policies (such as frequency of count, min order quantity, safety stock, etc.) based on those classifications.
The important inventory control actions that an organization must follow to get the best out of the system are
-  ABC Classification  
   -  Create diff classification to server diff requirement  
   -  Create Policies based on ABC classification  
-  Cycle Count  
   -  Regular (Daily/Weekly) Entry  
   -  Robust Approval Mechanism  
-  Yearly Physical Inventory

:::caution

This documentation is incomplete.

:::

## ABC Classification

:::info

The application supports up to 5 levels of classification
A, B, C, D & E.
You need to use at least two values for ABC classification.

:::

### Header - Valuation


To create/view/update ABC Classification, navigate to the "ABC Classification"  screen from your dashboard/favorite.


<img src="/images/modules/inv/control/abc/abc_control_01.PNG" width="350"/>

Enter the organization/ABC Classification details or any other criteria in the search form and click on the search button to view an existing ABC Classification.  


<img src="/images/modules/inv/control/abc/abc_control_02.PNG" width="800"/>

If you don't enter organization details, the system will show you all the ABC Classifications. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search ABC Classifications.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.


If you click on the create new button, the system will open a simple step form to create a new ABC Classification. You can click on the detail right bottom to view all the fields available for the object. 

<img src="/images/modules/inv/control/abc/abc_control_03.PNG" width="350"/>

To view the search result in a table format, click on the table icon available on the bottom left corner.

To view specific ABC Classification details, click on the menu of that record, and click on view/fetch & view.
<img src="/images/modules/inv/control/abc/abc_control_03a.PNG" width="450"/>

Select one or more lines to create an ABC Classification and select "create ABC Classification" from the action.

You can also click on the expand icon against any item on the search result screen to view the ABC Classification header details, such as number, quantities, start date, status, etc.


:::tip

The sum of all five classification values must be 100.  
Ex: 
- A 20, B 80
- A 5, B 15, C 25, D 55

:::

<img src="/images/modules/inv/control/abc/abc_control_04.PNG" width="800"/>

The system will fetch all the selected document detail line data. The document details are shown either right to the search result screen or in a separate screen, depending on the device size.

The application provides several seeded criteria such as
- OnHand Quantity:  Current inventory OnHand Quantity.
- OnHand Value:  Current inventory OnHand value.
- Std Cost:  Current inventory cost of the item.
- MRP Demand Quantity:   Total MRP demand quantity in the organization.
- MRP Demand Value:   Total MRP demand quantity value in the organization.
You can also add new criteria as per your business requirements


```
function createOhQtyValuation(
  invOrgId,
  invAbcValHeaderId,
  aPercentage,
  bPercentage,
  cPercentage,
  dPercentage,
  ePercentage,
  criteria
) {
  let totalNoOfItems = 0;
  let aItemsCount = 0;
  let bItemsCount = 0;
  let cItemsCount = 0;
  let dItemsCount = 0;
  let eItemsCount = 0;
  let countSql = getCountSql(criteria, invOrgId);

  let countRequest = {
    sql: countSql,
    dbType: "MySQL",
    connName: "Inoerp",
  };

  let countResponse = sqlSelect(countRequest);
  let countData = countResponse["data"];

  if (countData.length > 0) {
    totalNoOfItems = countData.length;
    aItemsCount = Math.ceil((totalNoOfItems * aPercentage) / 100);
    bItemsCount = Math.ceil((totalNoOfItems * bPercentage) / 100) + aItemsCount;
    cItemsCount = Math.ceil((totalNoOfItems * cPercentage) / 100) + bItemsCount;
    dItemsCount = Math.ceil((totalNoOfItems * dPercentage) / 100) + cItemsCount;
    eItemsCount = Math.ceil((totalNoOfItems * ePercentage) / 100) + dItemsCount;
    let completedCount = 0;
    let cumQuantity = 0;
    let cumValue = 0;
    let insertSql =
      " INSERT INTO `inoerp`.`inv_abc_val_line` (`inv_abc_val_header_id`, `seq_number`, `inv_item_master_id`, " +
      "`quantity`, `value`, `cum_quantity`, `cum_value`, `sys_suggested_abc`, `abc_class`) VALUES  ";
    while (completedCount < totalNoOfItems) {
      let currData = countData[completedCount];
      if (!isNaN(currData["onhand"])) {
        cumQuantity += parseFloat(currData["onhand"]);
      }
      if (!isNaN(currData["onhandValue"])) {
        cumValue += parseFloat(currData["onhandValue"]);
      }
      let abcClass = "E";
      if (completedCount < aItemsCount) {
        abcClass = "A";
      } else if (completedCount < bItemsCount) {
        abcClass = "B";
      } else if (completedCount < cItemsCount) {
        abcClass = "C";
      } else if (completedCount < dItemsCount) {
        abcClass = "D";
      }
      insertSql +=
        "('" +
        invAbcValHeaderId +
        "', '" +
        (completedCount + 1) +
        "', '" +
        currData["invItemMasterId"] +
        "', '" +
        currData["onhand"] +
        "', '" +
        currData["onhandValue"] +
        "', '" +
        cumQuantity +
        "', '" +
        cumValue +
        "', '" +
        abcClass +
        "', '" +
        abcClass +
        "')";

      if (completedCount < totalNoOfItems - 1) {
        insertSql += ",";
      }
      completedCount++;
    }


    request = {
      sql: insertSql,
      dbType: "MySQL",
      connName: "Inoerp",
    };
    let retMessage1 = sqlInsert(request);
    return retMessage1;
  }
}
```


<img src="/images/modules/inv/control/abc/abc_control_05.PNG" width="800"/>


Scroll left, right, up, down to view all the details. The document line and details are shown in a separate tab..
The default configuration shows fields in various functional groups such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  

<img src="/images/modules/inv/control/abc/abc_control_06.PNG" width="800"/>


<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*vvInvOrgCode*| Inv Org Code |deferredSelect|ENTITY|
|**10**|*invAbcValHeaderId*|Inv Abc Val Header Id |deferredSelect|REFERENCE|
|**20**|*valuationName*|Valuation Name |deferredSelect|DEFAULT|
|**30**|*invOrgId*|Inv Org Id |deferredSelect|REFERENCE|
|**40**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**50**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**60**|*subInventoryId*|Sub Inventory Id |InputType.text|REFERENCE|
|**70**|*aPercentage*|A Percentage |InputType.textField|DEFAULT|
|**80**|*bPercentage*|B Percentage |InputType.textField|DEFAULT|
|**90**|*cPercentage*|C Percentage |InputType.textField|DEFAULT|
|**100**|*dPercentage*|D Percentage |InputType.textField|DEFAULT|
|**110**|*ePercentage*|E Percentage |InputType.textField|DEFAULT|
|**120**|*scopeOrgHirearchyId*|Scope Org Hirearchy Id |InputType.text|REFERENCE|
|**130**|*description*|Description |InputType.textField|DEFAULT|
|**140**|*scopeProductLine*|Scope Product Line |deferredSelect|DEFAULT|
|**150**|*criteria*|Criteria |InputType.select|DEFAULT|
|**160**|*costType*|Cost Type |deferredSelect|CONTROL|
|**170**|*fpForecastHeaderId*|Fp Forecast Header Id |InputType.number|PLANNING|
|**180**|*fpMrpHeaderId*|Fp Mrp Header Id |InputType.text|REFERENCE|
|**190**|*fromDate*|From Date |InputType.date|DATE|
|**200**|*toDate*|To Date |InputType.date|DATE|
|**5210**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5220**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5230**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5240**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>

### Actions

Actions allow you to assign ABC classification to items as per the details entered in the header section.  
Click on the Create ABC Analysis button to create/Overwrite ABC classification for all the items in the ABC valuation line.


<img src="/images/modules/inv/control/abc/abc_control_09.PNG" width="600"/>

You can update the ABC classification by navigating to the line items.

### Lines - Item

<img src="/images/modules/inv/control/abc/abc_control_07.PNG" width="800"/>


You can add multiple lines to each ABC Classification header. Each ABC Classification line shows an item, UOM, product description details.

<img src="/images/modules/inv/control/abc/abc_control_07a.PNG" width="400"/>

Navigate to the lines tab to view/add/update lines.  
Click on the add new entity to add a new line. If a line already exists, click on copy entity to copy all the details.
You can enable/disable fields allowed to be copied in the menu configuration.  

<img src="/images/modules/inv/control/abc/abc_control_07b.PNG" width="800"/>


**Value**: Value of the specific line.  
Ex: OnHand Quantity for quantity-based valuation.  
OnHand Value (Quantity * Cost) for OnHand Value-based valuation. 

**Cum Value**: Cumulative Value of all the lines from the first line to the current line.

**Item**: Inventory item number.

<img src="/images/modules/inv/control/abc/abc_control_07c.PNG" width="800"/>


The entity group shows information related to shipping inventory organization. 

The reference groups show various ids for reference only. You don't need to enter any information in this section. When you save an ABC Classification for the first time, the system will auto-populate the newly created header id and line ids.

<img src="/images/modules/inv/control/abc/abc_control_07d.PNG" width="800"/>



Scroll left, right, up, and down view all other fields.
<img src="/images/modules/inv/control/abc/abc_control_07e.PNG" width="600"/>


Enter all the other fields and click on the save button to save the ABC Classification. The app will post all the data to the server and will show the messages returned from the server.



<details>
<summary>All Fields</summary>

| Sequence | Name                 | Label                    | InputType             | Field Group |
| -------- | ------------------------ | ------------------------ | --------------------- | ----------- |
|**10**|*vvInvOrgCode*| Inv Org Code |deferredSelect|ENTITY|
|**10**|*vvValuationName*| Valuation Name |deferredSelect|DEFAULT|
|**20**|*vvInvOrgId*| Inv Org Id |deferredSelect|REFERENCE|
|**30**|*vvItemNumber*| Item Number |deferredSelect|DEFAULT|
|**40**|*vvItemDescription*| Item Description |deferredSelect|DEFAULT|
|**50**|*invAbcValLineId*|Inv Abc Val Line Id |InputType.text|REFERENCE|
|**60**|*invAbcValHeaderId*|Inv Abc Val Header Id |deferredSelect|REFERENCE|
|**70**|*seqNumber*|Seq Number |InputType.number|DATA|
|**80**|*invItemMasterId*|Inv Item Master Id |deferredSelect|REFERENCE|
|**90**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**100**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**110**|*quantity*|Quantity |InputType.number|DATA|
|**120**|*value*|Value |InputType.textField|DEFAULT|
|**130**|*cumQuantity*|Cum Quantity |InputType.number|DATA|
|**140**|*cumValue*|Cum Value |InputType.textField|DEFAULT|
|**150**|*invAbcDefinitionIdSys*|Inv Abc Definition Id Sys |InputType.text|REFERENCE|
|**160**|*invAbcDefinitionId*|Inv Abc Definition Id |InputType.text|REFERENCE|
|**210**|*sysSuggestedAbc*|Sys Suggested Abc |InputType.text|DEFAULT|
|**220**|*abcClass*|Abc Class |InputType.select|DEFAULT|
|**5170**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5180**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5190**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5200**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|
</details>






## Cycle Count
Cycle count is a process of regularly counting a subset of inventory with a plan which ensures that everything eventually gets counted over a determined period of time. Though inoERP provides both Cycle Count and Physical Inventory, options you can work with their internal or external auditors to ensure that a cycle count is reliable and sufficient — over time. If cycle counting proves accurate, auditors and accountants may accept them in place of a full physical count.

### Header - Count Name


To create/view/update Cycle Count, navigate to the "Cycle Count"  screen from your dashboard/favorite.


<img src="/images/modules/inv/control/count/count_01.PNG" width="350"/>

Enter the organization/Cycle Count details or any other criteria in the search form and click on the search button to view an existing Cycle Count.  


<img src="/images/modules/inv/control/count/count_02.PNG" width="800"/>

If you don't enter organization details, the system will show you all the Cycle Counts. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search Cycle Counts.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.


If you click on the create new button, the system will open a simple step form to create a new Cycle Count. You can click on the detail right bottom to view all the fields available for the object. 

<img src="/images/modules/inv/control/count/count_03.PNG" width="350"/>

To view the search result in a table format, click on the table icon available on the bottom left corner.

To view specific Cycle Count details, click on the menu of that record, and click on view/fetch & view.

Select one or more lines to create a Cycle Count and select "create Cycle Count" from the action.

You can also click on the expand icon against any item on the search result screen to view the Cycle Count header details, such as number, quantities, start date, status, etc.
<img src="/images/modules/inv/control/count/count_04.PNG" width="400"/>


The system will fetch all the selected document detail line data. The document details are shown either right to the search result screen or in a separate screen, depending on the device size.


<img src="/images/modules/inv/control/count/count_05.PNG" width="800"/>


Scroll left, right, up, down to view all the details. The document line and details are shown in a separate tab..
The default configuration shows fields in various functional groups such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  

<img src="/images/modules/inv/control/count/count_06.PNG" width="800"/>



:::note AutoSchedule Examples

Class A 200 items  
Count 12 Times  

TotalCount = 2400  
Daily Count =  200*12 / 365 = 7 (Up)  
TimeGap = 365 / 2400 = 0  - 1 = 0 (Low)  


---------------

Class A 2 items  
Count 12 Times  

Total Count = 24  
Daily Count =  2*12 / 365 = 1  
TimeGap = 365/24 = 10 - 1 = 9  


---------------

Class A 6 items  
Count 50 Times  

Total Count = 300  
Daily Count =  6*50 / 365 = 1  
TimeGap = 365/300 = 1 - 1 = 0  

:::




<details>
<summary>All Fields</summary>

| Name     | Sequence                   | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*vvInvOrgCode*| Inv Org Code |deferredSelect|ENTITY|
|**10**|*vvValuationName*| Valuation Name |deferredSelect|DEFAULT|
|**20**|*invCountHeaderId*|Inv Count Header Id |InputType.text|REFERENCE|
|**30**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**40**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**50**|*countName*|Count Name |InputType.textField|DEFAULT|
|**60**|*adjustmentAcId*|Adjustment Ac Id |deferredSelect|REFERENCE|
|**70**|*invOrgId*|Inv Org Id |deferredSelect|REFERENCE|
|**80**|*subInventory*|Sub Inventory |deferredSelect|ENTITY|
|**90**|*description*|Description |InputType.textField|DEFAULT|
|**100**|*invAbcValHeaderId*|Inv Abc Val Header Id |deferredSelect|REFERENCE|
|**110**|*approvalType*|Approval Type |InputType.select|CONTROL|
|**120**|*quantityVariancePositive*|Quantity Variance Positive |InputType.textField|DATA|
|**130**|*quantityVarianceNegative*|Quantity Variance Negative |InputType.textField|DATA|
|**140**|*valueVariancePositive*|Value Variance Positive |InputType.textField|DEFAULT|
|**150**|*valueVarianceNegative*|Value Variance Negative |InputType.textField|DEFAULT|
|**160**|*aCountPerYear*|A Count Per Year |InputType.number|DEFAULT|
|**170**|*bCountPerYear*|B Count Per Year |InputType.number|DEFAULT|
|**180**|*cCountPerYear*|C Count Per Year |InputType.number|DEFAULT|
|**190**|*dCountPerYear*|D Count Per Year |InputType.number|DEFAULT|
|**200**|*eCountPerYear*|E Count Per Year |InputType.number|DEFAULT|
|**210**|*itemWithOnhandCb*|Item With Onhand Cb |InputType.switchField|DEFAULT|
|**220**|*status*|Status |InputType.select|CONTROL|
|**5230**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5240**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5250**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5260**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>

### Actions

Actions allow you to 
- Generate count schedules as per data entered for the count and the corresponding ABC class
- Approve pending open counts for the count

<img src="/images/modules/inv/control/count/count_09.PNG" width="800"/>



### Lines - Count Schedule
<img src="/images/modules/inv/control/count/count_07a.PNG" width="800"/>

Count schedule shows all the counts scheduled by the system. Click on the "Generate Count Schedule"  to create count Schedules for a new count name.  

:::danger

Generate Count Schedule process deletes all existing counts for the count name.

:::
You can add multiple lines to each Cycle Count header. Each Cycle Count line shows an item, UOM, product description details.
<img src="/images/modules/inv/control/count/count_07b.PNG" width="400"/>


Navigate to the lines tab to view/add/update lines.  
Click on the add new entity to add a new line. If a line already exists, click on copy entity to copy all the details.
You can enable/disable fields allowed to be copied in the menu configuration.  



<img src="/images/modules/inv/control/count/count_07c.PNG" width="800"/>


The entity group shows information related to shipping inventory organization. 

The reference groups show various ids for reference only. You don't need to enter any information in this section. When you save a Cycle Count for the first time, the system will auto-populate the newly created header id and line ids.

<img src="/images/modules/inv/control/count/count_07d.PNG" width="800"/>



Scroll left, right, up, and down view all other fields.
<img src="/images/modules/inv/control/count/count_07e.PNG" width="800"/>


Enter all the other fields and click on the save button to save the Cycle Count. The app will post all the data to the server and will show the messages returned from the server.



<details>
<summary>All Fields</summary>

| Name     | Sequence                 | Label                    | InputType             | Field Group |
| -------- | ------------------------ | ------------------------ | --------------------- | ----------- |
|**10**|*vvInvOrgCode*| Inv Org Code |deferredSelect|ENTITY|
|**10**|*vvCountName*| Count Name |InputType.text|DEFAULT|
|**20**|*vvItemNumber*| Item Number |deferredSelect|DEFAULT|
|**30**|*vvItemDescription*| Item Description |deferredSelect|DEFAULT|
|**40**|*invCountLineId*|Inv Count Line Id |InputType.text|REFERENCE|
|**50**|*invCountHeaderId*|Inv Count Header Id |InputType.text|REFERENCE|
|**60**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**70**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**80**|*invCountScheduleId*|Inv Count Schedule Id |InputType.text|REFERENCE|
|**90**|*invOrgId*|Inv Org Id |deferredSelect|REFERENCE|
|**100**|*invItemMasterId*|Inv Item Master Id |deferredSelect|REFERENCE|
|**110**|*uomCode*|Uom Code |deferredSelect|DEFAULT|
|**120**|*subInventory*|Sub Inventory |deferredSelect|ENTITY|
|**130**|*scheduleDate*|Schedule Date |InputType.dateTime|DATE|
|**140**|*locatorId*|Locator Id |deferredSelect|REFERENCE|
|**150**|*invLotTransactionId*|Inv Lot Transaction Id |InputType.textField|CONTROL|
|**160**|*invSerialTransactionId*|Inv Serial Transaction Id |InputType.textField|CONTROL|
|**170**|*countNumber*|Count Number |InputType.number|DATA|
|**180**|*adjustmentAcId*|Adjustment Ac Id |deferredSelect|REFERENCE|
|**190**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**200**|*reason*|Reason |InputType.text|REFERENCE|
|**210**|*reference*|Reference |InputType.text|REFERENCE|
|**220**|*countedBy*|Counted By |InputType.textField|DEFAULT|
|**230**|*countDate*|Count Date |InputType.dateTime|DATE|
|**240**|*vvSystemQty*| System Qty |InputType.text|DEFAULT|
|**250**|*vvAdjustedQty*| Adjusted Qty |InputType.text|DEFAULT|
|**260**|*countQty*|Count Qty |InputType.textField|DEFAULT|
|**270**|*description*|Description |InputType.textField|DEFAULT|
|**5280**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5290**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5300**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5310**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>



### Lines - Count Entry


Use the country entry to record the physically counted quantities in the system. The fields in the Count Entry screen are similar to the fields on the count schedule screen. The main difference is that all the fields except the "Count Quantity" field are disabled in the count entry screen.

<img src="/images/modules/inv/control/count/count_08a.PNG" width="800"/>

Navigate to the lines tab to view/add/update lines.  
Click on the add new entity to add a new line. If a line already exists, click on copy entity to copy all the details.
You can enable/disable fields allowed to be copied in the menu configuration.  

<img src="/images/modules/inv/control/count/count_08b.PNG" width="350"/>


**Count Qty**: Enter the physically counted Quantity 

**System Qty**: When you save a count, the system takes an inventory snapshot of the item and shows the value in this field

**Adjusted Qty**: The difference between the count qty and system qty. The system creates a cycle count adjustment transaction when the count is approved.

<img src="/images/modules/inv/control/count/count_08c.PNG" width="800"/>


The entity group shows information related to shipping inventory organization. 

The reference groups show various ids for reference only. You don't need to enter any information in this section. When you save a Cycle Count for the first time, the system will auto-populate the newly created header id and line ids.

<img src="/images/modules/inv/control/count/count_08d.PNG" width="800"/>



Scroll left, right, up, and down view all other fields.
<img src="/images/modules/inv/control/count/count_08e.PNG" width="600"/>


Enter all the other fields and click on the save button to save the Cycle Count. The app will post all the data to the server and will show the messages returned from the server.

<img src="/images/modules/inv/control/count/count_08f.PNG" width="600"/>


<details>
<summary>All Fields</summary>

| Name     | Sequence                 | Label                    | InputType             | Field Group |
| -------- | ------------------------ | ------------------------ | --------------------- | ----------- |
|**10**|*vvInvOrgCode*| Inv Org Code |deferredSelect|ENTITY|
|**10**|*vvCountName*| Count Name |InputType.text|DEFAULT|
|**20**|*vvItemNumber*| Item Number |deferredSelect|DEFAULT|
|**30**|*vvItemDescription*| Item Description |deferredSelect|DEFAULT|
|**40**|*invCountLineId*|Inv Count Line Id |InputType.text|REFERENCE|
|**50**|*invCountHeaderId*|Inv Count Header Id |InputType.text|REFERENCE|
|**60**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**70**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**80**|*invCountScheduleId*|Inv Count Schedule Id |InputType.text|REFERENCE|
|**90**|*invOrgId*|Inv Org Id |deferredSelect|REFERENCE|
|**100**|*invItemMasterId*|Inv Item Master Id |deferredSelect|REFERENCE|
|**110**|*uomCode*|Uom Code |deferredSelect|DEFAULT|
|**120**|*subInventory*|Sub Inventory |deferredSelect|ENTITY|
|**130**|*scheduleDate*|Schedule Date |InputType.dateTime|DATE|
|**140**|*locatorId*|Locator Id |deferredSelect|REFERENCE|
|**150**|*invLotTransactionId*|Inv Lot Transaction Id |InputType.textField|CONTROL|
|**160**|*invSerialTransactionId*|Inv Serial Transaction Id |InputType.textField|CONTROL|
|**170**|*countNumber*|Count Number |InputType.number|DATA|
|**180**|*adjustmentAcId*|Adjustment Ac Id |deferredSelect|REFERENCE|
|**190**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**200**|*reason*|Reason |InputType.text|REFERENCE|
|**210**|*reference*|Reference |InputType.text|REFERENCE|
|**220**|*countedBy*|Counted By |InputType.textField|DEFAULT|
|**230**|*countDate*|Count Date |InputType.dateTime|DATE|
|**240**|*vvSystemQty*| System Qty |InputType.text|DEFAULT|
|**250**|*vvAdjustedQty*| Adjusted Qty |InputType.text|DEFAULT|
|**260**|*countQty*|Count Qty |InputType.textField|DEFAULT|
|**270**|*description*|Description |InputType.textField|DEFAULT|
|**5280**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5290**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5300**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5310**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>



### Lines - Count Approval
<img src="/images/modules/inv/control/count/count_10a.PNG" width="800"/>

The count approval screen shows all the counts entered in the system and waiting for approval. The system creates inventory transactions when you approve all these open counts. The system also adjusts the inventory value and removes the count from the open approval count list.
The fields in the Count Entry screen are similar to the fields on the count schedule screen. The main difference is that all the fields on this screen are read-only.

:::tip Approve

To approve all the open counts, click on the "Approve Count Schedule" button in the action tab.
:::



<img src="/images/modules/inv/control/count/count_10b.PNG" width="800"/>


**Count Qty**: Enter the physically counted Quantity 

**System Qty**: When you save a count, the system takes an inventory snapshot of the item and shows the value in this field

**Adjusted Qty**: The difference between the count qty and system qty. The system creates a cycle count adjustment transaction when the count is approved.

<img src="/images/modules/inv/control/count/count_10c.PNG" width="800"/>


The entity group shows information related to shipping inventory organization. 

The reference groups show various ids for reference only. You don't need to enter any information in this section. When you save a Cycle Count for the first time, the system will auto-populate the newly created header id and line ids.


Scroll left, right, up, and down view all other fields.


Enter all the other fields and click on the save button to save the Cycle Count. The app will post all the data to the server and will show the messages returned from the server.



<details>
<summary>All Fields</summary>

| Name     | Sequence                 | Label                    | InputType             | Field Group |
| -------- | ------------------------ | ------------------------ | --------------------- | ----------- |
|**10**|*vvInvOrgCode*| Inv Org Code |deferredSelect|ENTITY|
|**10**|*vvCountName*| Count Name |InputType.text|DEFAULT|
|**20**|*vvItemNumber*| Item Number |deferredSelect|DEFAULT|
|**30**|*vvItemDescription*| Item Description |deferredSelect|DEFAULT|
|**40**|*invCountLineId*|Inv Count Line Id |InputType.text|REFERENCE|
|**50**|*invCountHeaderId*|Inv Count Header Id |InputType.text|REFERENCE|
|**60**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**70**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**80**|*invCountScheduleId*|Inv Count Schedule Id |InputType.text|REFERENCE|
|**90**|*invOrgId*|Inv Org Id |deferredSelect|REFERENCE|
|**100**|*invItemMasterId*|Inv Item Master Id |deferredSelect|REFERENCE|
|**110**|*uomCode*|Uom Code |deferredSelect|DEFAULT|
|**120**|*subInventory*|Sub Inventory |deferredSelect|ENTITY|
|**130**|*scheduleDate*|Schedule Date |InputType.dateTime|DATE|
|**140**|*locatorId*|Locator Id |deferredSelect|REFERENCE|
|**150**|*invLotTransactionId*|Inv Lot Transaction Id |InputType.textField|CONTROL|
|**160**|*invSerialTransactionId*|Inv Serial Transaction Id |InputType.textField|CONTROL|
|**170**|*countNumber*|Count Number |InputType.number|DATA|
|**180**|*adjustmentAcId*|Adjustment Ac Id |deferredSelect|REFERENCE|
|**190**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**200**|*reason*|Reason |InputType.text|REFERENCE|
|**210**|*reference*|Reference |InputType.text|REFERENCE|
|**220**|*countedBy*|Counted By |InputType.textField|DEFAULT|
|**230**|*countDate*|Count Date |InputType.dateTime|DATE|
|**240**|*vvSystemQty*| System Qty |InputType.text|DEFAULT|
|**250**|*vvAdjustedQty*| Adjusted Qty |InputType.text|DEFAULT|
|**260**|*countQty*|Count Qty |InputType.textField|DEFAULT|
|**270**|*description*|Description |InputType.textField|DEFAULT|
|**5280**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5290**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5300**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5310**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>

