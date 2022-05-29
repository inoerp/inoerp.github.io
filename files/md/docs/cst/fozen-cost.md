---
id: frozen-cost
title: Frozen Item Cost
sidebar_label: Frozen Item Cost
---


:::caution

This documentation is incomplete.

:::

The system uses frozen item costs for all operational purposes and thus does not allow users to create/update frozen costs directly.
The restrictions are in place at the front end and the database level.

Run the " Cost Update Program " to create frozen costs for a new item. You can also create frozen costs from item costs by using the cost update action.



## Header

<img src="/images/modules/cst/frozen_cost/cst_frozen_cost_01.PNG" width="350"/>

Navigate to the "item cost"  screen from your dashboard/favorite to view an item cost.



Enter the organization/item cost details or any other criteria in the search form and click on the search button to view an existing item cost.  


<img src="/images/modules/cst/frozen_cost/cst_frozen_cost_02.PNG" width="800"/>

If you don't enter organization details, the system will show you all the item costs. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search item costs.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.


<img src="/images/modules/cst/frozen_cost/cst_frozen_cost_03.PNG" width="300"/>

To view the search result in a table format, click on the table icon in the bottom left corner.

To view specific item cost details, click on the menu of that record, and click on view/fetch & view.

<img src="/images/modules/cst/frozen_cost/cst_frozen_cost_04.PNG" width="800"/>

You can also click on the expand icon against any item on the search result screen to view the item cost header details, such as item number, UOM, etc.


The system will fetch all the selected document detail line data. The document details are shown either right to the search result screen or in a separate screen, depending on the device size.


<img src="/images/modules/cst/frozen_cost/cst_frozen_cost_05.PNG" width="800"/>


Scroll left, right, up, down to view all the details. The document line and details are shown in a separate tab..
The default configuration shows fields in various functional groups such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  



You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.

<img src="/images/modules/cst/frozen_cost/cst_frozen_cost_06.PNG" width="800"/>


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
|**60**|*cstFrozenCostHeaderId*|Cst Frozen Cost Header Id |InputType.text|REFERENCE|
|**70**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**80**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**90**|*invOrgId*|Inv Org Id |deferredSelect|REFERENCE|
|**100**|*invItemMasterId*|Inv Item Master Id |deferredSelect|REFERENCE|
|**110**|*cstItemCostHeaderId*|Cst Item Cost Header Id |InputType.text|REFERENCE|
|**120**|*amount*|Amount |InputType.textField|FINANCE|
|**130**|*costDetails*|Cost Details |InputType.textField|FINANCE|
|**140**|*docStatus*|Doc Status |InputType.textField|CONTROL|
|**5150**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5160**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5170**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5180**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>

## Lines

<img src="/images/modules/cst/frozen_cost/cst_frozen_cost_07.PNG" width="800"/>

You can have multiple lines for each item cost header. Each item cost line contains cost element code, cost element type, amount.


<img src="/images/modules/cst/frozen_cost/cst_frozen_cost_07a.PNG" width="800"/>

Navigate to the lines tab to view lines.  


**Cost Element Code**: The system copies the cost element code from the item cost.

**amount**: The system copies the amount value from the item cost.

<img src="/images/modules/cst/frozen_cost/cst_frozen_cost_07b.PNG" width="800"/>


The reference groups show various ids for reference only. You don't need to enter any information in this section. When you save an item cost for the first time, the system will auto-populate the newly created header id and line ids.

Scroll left, right, up, and down view all other fields.


<img src="/images/modules/cst/frozen_cost/cst_frozen_cost_07c.PNG" width="800"/>


<details>
<summary>All Fields</summary>

| Sequence | Name                | Label                    | InputType             | Field Group |
| -------- | ------------------------ | ------------------------ | --------------------- | ----------- |
|**10**|*costElementCode*|Cost Element Code |deferredSelect|FINANCE|
|**10**|*costElementType*|Cost Element Type |InputType.select|CONTROL|
|**20**|*costElementDescription*|Cost Element Description |InputType.textField|FINANCE|
|**30**|*cstFrozenCostLineId*|Cst Frozen Cost Line Id |InputType.text|REFERENCE|
|**40**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**50**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**60**|*cstFrozenCostHeaderId*|Cst Frozen Cost Header Id |InputType.text|REFERENCE|
|**70**|*cstItemCostLineId*|Cst Item Cost Line Id |InputType.text|REFERENCE|
|**80**|*cstCostElementId*|Cst Cost Element Id |deferredSelect|REFERENCE|
|**90**|*amount*|Amount |InputType.textField|FINANCE|
|**100**|*costBasis*|Cost Basis |InputType.textField|FINANCE|
|**110**|*thisLevelCb*|This Level Cb |InputType.switchField|DEFAULT|
|**120**|*status*|Status |InputType.textField|CONTROL|
|**170**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**5130**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5140**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5150**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5160**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>



## Current Frozen Cost

Curr Frozen Item Cost is the last frozen cost added for a given item. When you update cost from item to frozen cost, the system creates a new record for frozen cost and always uses the latest value for all operations.

### Header

<img src="/images/modules/cst/curr_frozen_cost/curr_frozen_cost_01.PNG" width="350"/>

Navigate to the "frozen cost"  screen from your dashboard/favorite to view a frozen cost.



Enter the organization/frozen cost details or any other criteria in the search form and click on the search button to view an existing frozen cost.  


<img src="/images/modules/cst/curr_frozen_cost/curr_frozen_cost_02.PNG" width="800"/>

If you don't enter organization details, the system will show you all the frozen costs. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search frozen costs.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.


<img src="/images/modules/cst/curr_frozen_cost/curr_frozen_cost_03.PNG" width="300"/>

To view the search result in a table format, click on the table icon in the bottom left corner.

To view specific frozen cost details, click on the menu of that record, and click on view/fetch & view.

<img src="/images/modules/cst/curr_frozen_cost/curr_frozen_cost_04.PNG" width="800"/>

You can also click on the expand icon against any item on the search result screen to view the frozen cost header details, such as item number, UOM, etc.


The system will fetch all the selected document detail line data. The document details are shown either right to the search result screen or in a separate screen, depending on the device size.


<img src="/images/modules/cst/curr_frozen_cost/curr_frozen_cost_05.PNG" width="800"/>


Scroll left, right, up, down to view all the details. The document line and details are shown in a separate tab..
The default configuration shows fields in various functional groups such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  



You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.

<img src="/images/modules/cst/curr_frozen_cost/curr_frozen_cost_06.PNG" width="800"/>


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
|**60**|*cstFrozenCostHeaderId*|Cst Frozen Cost Header Id |InputType.text|REFERENCE|
|**70**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**80**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**90**|*invOrgId*|Inv Org Id |deferredSelect|REFERENCE|
|**100**|*invItemMasterId*|Inv Item Master Id |deferredSelect|REFERENCE|
|**110**|*cstItemCostHeaderId*|Cst Item Cost Header Id |InputType.text|REFERENCE|
|**120**|*amount*|Amount |InputType.textField|FINANCE|
|**130**|*costDetails*|Cost Details |InputType.textField|FINANCE|
|**140**|*docStatus*|Doc Status |InputType.textField|CONTROL|
|**5150**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5160**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5170**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5180**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>

### Lines

<img src="/images/modules/cst/curr_frozen_cost/curr_frozen_cost_07.PNG" width="800"/>


You can have multiple lines for each frozen cost header. Each frozen cost line contains a cost element code, cost element type, amount.


<img src="/images/modules/cst/curr_frozen_cost/curr_frozen_cost_07a.PNG" width="800"/>

Navigate to the lines tab to view lines.  


**Cost Element Code**: The system copies the cost element code from the item cost.

**amount**: The system copies the amount value from the item cost.

<img src="/images/modules/cst/curr_frozen_cost/curr_frozen_cost_07b.PNG" width="800"/>


The reference groups show various ids for reference only. You don't need to enter any information in this section. When you save a frozen cost for the first time, the system will auto-populate the newly created header id and line ids.

Scroll left, right, up, and down view all other fields.


<img src="/images/modules/cst/curr_frozen_cost/curr_frozen_cost_07c.PNG" width="800"/>


<details>
<summary>All Fields</summary>

| Sequence | Name                | Label                    | InputType             | Field Group |
| -------- | ------------------------ | ------------------------ | --------------------- | ----------- |
|**10**|*costElementCode*|Cost Element Code |deferredSelect|FINANCE|
|**10**|*costElementType*|Cost Element Type |InputType.select|CONTROL|
|**20**|*costElementDescription*|Cost Element Description |InputType.textField|FINANCE|
|**30**|*cstFrozenCostLineId*|Cst Frozen Cost Line Id |InputType.text|REFERENCE|
|**40**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**50**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**60**|*cstFrozenCostHeaderId*|Cst Frozen Cost Header Id |InputType.text|REFERENCE|
|**70**|*cstItemCostLineId*|Cst Item Cost Line Id |InputType.text|REFERENCE|
|**80**|*cstCostElementId*|Cst Cost Element Id |deferredSelect|REFERENCE|
|**90**|*amount*|Amount |InputType.textField|FINANCE|
|**100**|*costBasis*|Cost Basis |InputType.textField|FINANCE|
|**110**|*thisLevelCb*|This Level Cb |InputType.switchField|DEFAULT|
|**120**|*status*|Status |InputType.textField|CONTROL|
|**170**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**5130**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5140**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5150**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5160**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>
