---
id: item-cost
title: Item Cost
sidebar_label: Item Cost
---


:::caution

This documentation is incomplete.

:::

Inventory item costs are maintained in 2 different groups in inoERP  
1. **Reporting Item Cost**  
   You can create many different versions of reporting item costs for the same item. The system does not use reporting item costs for any transactions/accounting.

2. **Frozen Item Cost**  
The system uses frozen costs for all operational activities. You can only run the cost update program to create frozen costs from a reporting cost. You can't manually create/update frozen item costs.  


An item cost consists of

- a header with an item number and an organization
- several cost elements



## Header


To create/view/update an item cost, navigate to the "item cost"  screen from your dashboard/favorite.


<img src="/images/modules/cst/item_cost/item_cost_01.PNG" width="350"/>

Enter the organization/item cost details or any other criteria in the search form and click on the search button to view an existing item cost.  


<img src="/images/modules/cst/item_cost/item_cost_02.PNG" width="800"/>

If you don't enter organization details, the system will show you all the item costs. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search item costs.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.


If you click on the create new button, the system will open a simple step form to create a new item cost. You can click on the detail right bottom to view all the fields available for the object. 

<img src="/images/modules/cst/item_cost/item_cost_03.PNG" width="350"/>

To view the search result in a table format, click on the table icon available on the bottom left corner.

To view specific item cost details, click on the menu of that record, and click on view/fetch & view.
<img src="/images/modules/cst/item_cost/item_cost_03a.PNG" width="450"/>


You can also click on the expand icon against any item on the search result screen to view the item cost header details, such as item number, UOM, etc.

<img src="/images/modules/cst/item_cost/item_cost_04.PNG" width="800"/>

The system will fetch all the selected item cost data. Depending on the device size, the cost details are shown either right to the search result screen or on a separate screen.


<img src="/images/modules/cst/item_cost/item_cost_05.PNG" width="800"/>


Scroll left, right, up, down to view all the details. The document line and details are shown in a separate tab..
The default configuration shows fields in various functional groups such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  



You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.

<img src="/images/modules/cst/item_cost/item_cost_06.PNG" width="800"/>


<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*vvInvOrgCode*| Inv Org Code |deferredSelect|ENTITY|
|**10**|*vvItemNumber*| Item Number |deferredSelect|DEFAULT|
|**20**|*vvItemDescription*| Item Description |deferredSelect|DEFAULT|
|**30**|*vvCostingMethod*| Costing Method |InputType.text|FINANCE|
|**40**|*vvCostingEnabledCb*| Costing Enabled Cb |InputType.text|FINANCE|
|**50**|*vvUomCode*| Uom Code |deferredSelect|DEFAULT|
|**60**|*vvTotalAmount*| Total Amount |InputType.text|FINANCE|
|**70**|*vvCostType*| Cost Type |deferredSelect|CONTROL|
|**80**|*cstItemCostHeaderId*|Cst Item Cost Header Id |InputType.text|REFERENCE|
|**90**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**100**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**110**|*cstCostTypeId*|Cst Cost Type Id |InputType.number|CONTROL|
|**120**|*invOrgId*|Inv Org Id |deferredSelect|REFERENCE|
|**130**|*invItemMasterId*|Inv Item Master Id |deferredSelect|REFERENCE|
|**140**|*basedOnRollupCb*|Based On Rollup Cb |InputType.switchField|DEFAULT|
|**150**|*includeInRollupCb*|Include In Rollup Cb |InputType.switchField|DEFAULT|
|**160**|*salesPrice*|Sales Price |InputType.textField|FINANCE|
|**170**|*purchasePrice*|Purchase Price |InputType.textField|FINANCE|
|**220**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**5180**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5190**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5200**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5210**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>

## Lines

<img src="/images/modules/cst/item_cost/item_cost_07.PNG" width="800"/>


You can add multiple lines to each item's cost header. Each item cost line contains cost element code, cost element type, amount.


Navigate to the lines tab to view/add/update lines.  
Click on the add new entity to add a new line. If a line already exists, click on copy entity to copy all the details.
You can enable/disable fields allowed to be copied in the menu configuration.  


<img src="/images/modules/cst/item_cost/item_cost_07a.PNG" width="300"/>

**Cost Element Code**: Enter a cost element code. The system will show the base cost element type.

**amount**: Enter the cost amount for the cost element.



The reference groups show various ids for reference only. You don't need to enter any information in this section. When you save an item cost for the first time, the system will auto-populate the newly created header id and line ids.

<img src="/images/modules/cst/item_cost/item_cost_07b.PNG" width="800"/>



Scroll left, right, up, and down view all other fields.


Enter all the other fields and click on the save button to save the item cost. The app will post all the data to the server and will show the messages returned from the server.
<img src="/images/modules/cst/item_cost/item_cost_07c.PNG" width="800"/>



<details>
<summary>All Fields</summary>

| Sequence | Name                | Label                    | InputType             | Field Group |
| -------- | ------------------------ | ------------------------ | --------------------- | ----------- |
|**10**|*vvCostElementCode*| Cost Element Code |deferredSelect|FINANCE|
|**10**|*vvCostElementType*| Cost Element Type |InputType.text|CONTROL|
|**20**|*vvCostElementDescription*| Cost Element Description |InputType.text|FINANCE|
|**30**|*cstItemCostLineId*|Cst Item Cost Line Id |InputType.text|REFERENCE|
|**40**|*cstItemCostHeaderId*|Cst Item Cost Header Id |InputType.text|REFERENCE|
|**50**|*cstCostElementId*|Cst Cost Element Id |deferredSelect|REFERENCE|
|**60**|*amount*|Amount |InputType.textField|FINANCE|
|**70**|*costBasis*|Cost Basis |InputType.textField|FINANCE|
|**80**|*thisLevelCb*|This Level Cb |InputType.switchField|DEFAULT|
|**90**|*status*|Status |InputType.textField|CONTROL|
|**5100**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5110**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5120**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5130**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>



## Actions

Actions allow you to update the frozen cost from an item cost.   
You can also use ***" Cost Update Program"*** to update item costs for several items.   
***"Cost RollUp"*** allows you to calculate the cost of an item with BOM. The system rolls up the cost of all child component costs to the item cost.



<img src="/images/modules/cst/item_cost/item_cost_09.PNG" width="800"/>
