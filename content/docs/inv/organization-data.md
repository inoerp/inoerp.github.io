---
id: organization-data
title: Organization Data
sidebar_label: Organization Data
---

:::caution

This documentation is incomplete.

:::


## Sub-Inventory
A sub-inventory is a subdivision of an inventory organization representing either a physical area or a logical grouping of items such as a store-room or receiving dock. All material within an inventory organization is tracked in a subinventory thus, you must create at least one sub-inventory before creating transactions in an inventory organization.

To view/create/update a Sub-Inventory, navigate to the "Sub-Inventory" search screen from your dashboard/favorite.

<img src="/images/modules/inv/sub_inventory/sub_inventory_01a.PNG" width="400"/>

Enter the Sub-Inventory details or any other criteria in the search form and click on the search button to view an existing Sub-Inventory. Click on create a new button to create a new Sub-Inventory; by manually entering all the information. Copying an existing Sub-Inventory to a new Sub-Inventory is always better than manually entering all the data to create a new Sub-Inventory. 

<img src="/images/modules/inv/sub_inventory/sub_inventory_02.PNG" width="800"/>

If you click on the create a new button, the system will open a simple step form to create a new item. You can click on the detail right bottom to view all the fields available for the object.

<img src="/images/modules/inv/sub_inventory/sub_inventory_03.PNG" width="350"/>


If you click on the search button without entering any organization/Sub-Inventory details, the system will show you all the Sub-Inventories. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search Sub-Inventories. The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.
<img src="/images/modules/inv/sub_inventory/sub_inventory_04.PNG" width="350"/>


To view the search result in a table format, click on the table icon available on the bottom left corner.

To open a specific Sub-Inventory, click on the menu of that record, and click on view/fetch & view.

You can also click on the expand icon against any item on the search result screen to view the Sub-Inventory header details such as Sub-Inventory, quantities, start date, status, etc.
<img src="/images/modules/inv/sub_inventory/sub_inventory_05.PNG" width="800"/>


The system will fetch all the data related to the selected Sub-Inventory. The Sub-Inventory details are shown either right to the search result screen or on a separate screen, depending on the device size.


Scroll left, right, up, down to view all the details. The Sub-Inventory line and details are shown in a separate tab.
The default configuration shows fields in various functional groups such as
<img src="/images/modules/inv/sub_inventory/sub_inventory_06.PNG" width="800"/>

- Finance
- Entity
- Reference
- Data
- Control
- Etc  

<img src="/images/modules/inv/sub_inventory/sub_inventory_07.PNG" width="800"/>



You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.

The data tab shows information related to physical attributes of the item such as Weight, Volume, Length, Height, etc.
The finance tab shows information related to price, invoice, tax, discount, etc.

<img src="/images/modules/inv/sub_inventory/sub_inventory_08.PNG" width="800"/>


<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*vvInvOrgCode*| Inv Org Code |deferredSelect|ENTITY|
|**10**|*vvInvOrgId*| Inv Org Id |deferredSelect|REFERENCE|
|**20**|*subInventoryId*|Sub Inventory Id |InputType.text|REFERENCE|
|**30**|*subInventory*|Sub Inventory |InputType.textField|ENTITY|
|**40**|*subInventoryType*|Sub Inventory Type |InputType.select|CONTROL|
|**50**|*mdmInventoryOrgId*|Mdm Inventory Org Id |deferredSelect|PLANNING|
|**60**|*subInventoryClass*|Sub Inventory Class |InputType.select|ENTITY|
|**70**|*description*|Description |InputType.textField|DEFAULT|
|**80**|*locatorControl*|Locator Control |InputType.textField|ENTITY|
|**90**|*allowNegativeBalanceCb*|Allow Negative Balance Cb |InputType.switchField|DEFAULT|
|**100**|*defaultCostGroup*|Default Cost Group |InputType.textField|PLANNING|
|**110**|*shipmentPickPriority*|Shipment Pick Priority |InputType.number|ENTITY|
|**120**|*materialAcId*|Material Ac Id |deferredSelect|REFERENCE|
|**130**|*materialOhAcId*|Material Oh Ac Id |deferredSelect|REFERENCE|
|**140**|*overheadAcId*|Overhead Ac Id |deferredSelect|REFERENCE|
|**150**|*resourceAcId*|Resource Ac Id |deferredSelect|REFERENCE|
|**160**|*ospAcId*|Osp Ac Id |deferredSelect|REFERENCE|
|**170**|*expenseAcId*|Expense Ac Id |deferredSelect|REFERENCE|
|**180**|*status*|Status |InputType.textField|CONTROL|
|**190**|*revNumber*|Rev Number |InputType.textField|DATA|
|**240**|*glAcProfileHeaderId*|Gl Ac Profile Header Id |deferredSelect|REFERENCE|
|**250**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**260**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**5200**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5210**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5220**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5230**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>







## Locator
A locator is a subdivision of an sub-inventory representing either a physical location where items are stored. 
You can use locator to represent physical position such as aisle, rack, or bin locations of your inventory storage.
Locators are not mandatory. However, it helps organization to map the exact physical location of storage  in the system.

To view/create/update a locator, navigate to the "locator" search screen from your dashboard/favorite.

<img src="/images/modules/inv/locator/locator_01.PNG" width="400"/>

Enter the locator details or any other criteria in the search form and click on the search button to view an existing locator. Click on create a new button to create a new locator; by manually entering all the information. Copying an existing locator to a new locator is always better than manually entering all the data to create a new locator. 

<img src="/images/modules/inv/locator/locator_02.PNG" width="800"/>

If you click on the create a new button, the system will open a simple step form to create a new item. You can click on the detail right bottom to view all the fields available for the object.

<img src="/images/modules/inv/locator/locator_03.PNG" width="350"/>


If you click on the search button without entering any organization/locator details, the system will show you all the Locators. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search Locators. The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.
<img src="/images/modules/inv/locator/locator_04.PNG" width="350"/>


To view the search result in a table format, click on the table icon available on the bottom left corner.

To open a specific locator, click on the menu of that record, and click on view/fetch & view.

You can also click on the expand icon against any item on the search result screen to view the locator header details such as locator, quantities, start date, status, etc.
<img src="/images/modules/inv/locator/locator_05.PNG" width="800"/>


The system will fetch all the data related to the selected locator. The locator details are shown either right to the search result screen or on a separate screen, depending on the device size.


Scroll left, right, up, down to view all the details. The locator line and details are shown in a separate tab.
The default configuration shows fields in various functional groups such as
<img src="/images/modules/inv/locator/locator_06.PNG" width="800"/>

- Finance
- Entity
- Reference
- Data
- Control
- Etc  

<img src="/images/modules/inv/locator/locator_06a.PNG" width="800"/>



You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.

The data tab shows information related to physical attributes of the item such as Weight, Volume, Length, Height, etc.
The finance tab shows information related to price, invoice, tax, discount, etc.



<details>
<summary>All Fields</summary>

| Sequence | Name                   | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*vvSubInventory*| Sub Inventory |deferredSelect|ENTITY|
|**10**|*vvSubInventoryId*| Sub Inventory Id |InputType.text|REFERENCE|
|**20**|*vvSubInventoryDescription*| Sub Inventory Description |InputType.text|ENTITY|
|**30**|*vvLocatorOrgCode*| Locator Org Code |deferredSelect|ENTITY|
|**40**|*vvLocatorOrgId*| Locator Org Id |deferredSelect|REFERENCE|
|**50**|*locatorId*|Locator Id |deferredSelect|REFERENCE|
|**60**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**70**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**80**|*subInventoryId*|Sub Inventory Id |InputType.text|REFERENCE|
|**90**|*locator*|Locator |InputType.textField|ENTITY|
|**100**|*locatorStructure*|Locator Structure |InputType.textField|ENTITY|
|**110**|*alias*|Alias |InputType.textField|DEFAULT|
|**120**|*dimensionUomId*|Dimension Uom Id |deferredSelect|REFERENCE|
|**130**|*length*|Length |InputType.textField|DATA|
|**140**|*height*|Height |InputType.textField|DATA|
|**150**|*width*|Width |InputType.text|REFERENCE|
|**160**|*xCoordinate*|X Coordinate |InputType.textField|DEFAULT|
|**170**|*yCoordinate*|Y Coordinate |InputType.textField|DEFAULT|
|**180**|*zCoordinate*|Z Coordinate |InputType.textField|DEFAULT|
|**190**|*maxUnits*|Max Units |InputType.textField|PLANNING|
|**200**|*maxVolumeUomId*|Max Volume Uom Id |deferredSelect|DATA|
|**210**|*maxVolume*|Max Volume |InputType.textField|DATA|
|**220**|*maxWeightUomId*|Max Weight Uom Id |deferredSelect|DATA|
|**230**|*maxWeight*|Max Weight |InputType.textField|DATA|
|**240**|*status*|Status |InputType.textField|CONTROL|
|**250**|*revEnabledCb*|Rev Enabled Cb |InputType.switchField|DEFAULT|
|**260**|*revNumber*|Rev Number |InputType.textField|DATA|
|**5270**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5280**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5290**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5300**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>


