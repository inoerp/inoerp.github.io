---
id: master-data
title: Master Data
sidebar_label: Master Data
---

:::caution

This documentation is incomplete.

:::

All inventory and non-inventory items are first defined in the item master. An item master records all key information about an item. This information may include the description, unit of measure, weight, dimensions, ordering quantity, and so forth for an item. 

When you enable an item master in an inventory organization, the system copies all the attributes of the item master. However, it also allows changing attribute values at the organization level.

- Master item
- Organization item (or simply item)


## Item Master


To view/create/update a master item, navigate to the "master item" search screen from your dashboard/favorite.

<img src="/images/modules/inv/item_master/item_master_01.PNG" width="400"/>

Enter the master item details or any other criteria in the search form and click on the search button to view an existing master item.  
Click on create a new button to create a new master item; by manually entering all the information,
Copy an existing master item to a new master item is always better than manually entering all the data to create a new master item.
You can configure which fields must be view-only after an item is created.

<img src="/images/modules/inv/item_master/item_master_02.PNG" width="800"/>

If you click on the create new button, the system will open a simple step form to create a new item. You can click on the detail right bottom to view all the fields available for the object.

<img src="/images/modules/inv/item_master/item_master_02a.PNG" width="400"/>


If you click on the search button without entering any organization/master item details, the system will show you all the master items. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search master items.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.

<img src="/images/modules/inv/item_master/item_master_03.PNG" width="350"/>

To view the search result in a table format, click on the table icon available on the bottom left corner.

To open a specific master item, click on the menu of that record, and click on view/fetch & view.

You can also click on the expand icon against any item on the search result screen to view the master item header details such as master item number, quantities, start date, status, etc.

<img src="/images/modules/inv/item_master/item_master_04.PNG" width="800"/>

The system will fetch all the data related to the selected master item. The master item details are shown either right to the search result screen or on a separate screen, depending on the device size.

<img src="/images/modules/inv/item_master/item_master_05.PNG" width="800"/>

Scroll left, right, up, down to view all the details. The master item line and details are shown in a separate tab.
The default configuration shows fields in various functional groups such as
<img src="/images/modules/inv/item_master/item_master_06.PNG" width="800"/>

- Finance
- Entity
- Reference
- Data
- Control
- Etc  

<img src="/images/modules/inv/item_master/item_master_06a.PNG" width="800"/>



You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.

<img src="/images/modules/inv/item_master/item_master_06b.PNG" width="800"/>

The data tab shows information related to physical attributes of the item such as Weight, Volume, Length, Height, etc.


<img src="/images/modules/inv/item_master/item_master_06c.PNG" width="800"/>

The finance tab shows information related to price, invoice, tax, discount, etc.

<img src="/images/modules/inv/item_master/item_master_06d.PNG" width="800"/>


<details>
<summary>All Fields</summary>

| Sequence | Name                   | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*vvAssignToOrg*| Assign To Org |deferredSelect|ENTITY|
|**10**|*vvAssignToOrgId*| Assign To Org Id |deferredSelect|REFERENCE|
|**20**|*invItemMasterId*|Inv Item Master Id |deferredSelect|REFERENCE|
|**30**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**40**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**50**|*itemNumber*|Item Number |InputType.textField|DEFAULT|
|**60**|*itemDescription*|Item Description |InputType.textField|DEFAULT|
|**70**|*imageFileId*|Image File Id |InputType.text|REFERENCE|
|**80**|*productLine*|Product Line |deferredSelect|DEFAULT|
|**90**|*productLinePercentage*|Product Line Percentage |InputType.textField|DEFAULT|
|**100**|*locatorControl*|Locator Control |InputType.textField|ENTITY|
|**110**|*allowNegativeBalanceCb*|Allow Negative Balance Cb |InputType.switchField|CONTROL|
|**120**|*longDescription*|Long Description |InputType.textField|DEFAULT|
|**130**|*uomCode*|Uom Code |deferredSelect|DEFAULT|
|**140**|*originationType*|Origination Type |InputType.textField|CONTROL|
|**150**|*originationDate*|Origination Date |InputType.date|DATE|
|**160**|*itemType*|Item Type |deferredSelect|CONTROL|
|**170**|*itemStatus*|Item Status |deferredSelect|CONTROL|
|**180**|*inventoryItemCb*|Inventory Item Cb |InputType.switchField|CONTROL|
|**190**|*stockableCb*|Stockable Cb |InputType.switchField|CONTROL|
|**200**|*transactableCb*|Transactable Cb |InputType.switchField|CONTROL|
|**210**|*reservableCb*|Reservable Cb |InputType.switchField|CONTROL|
|**220**|*cycleCountEnabledCb*|Cycle Count Enabled Cb |InputType.switchField|CONTROL|
|**230**|*kitCb*|Kit Cb |InputType.switchField|CONTROL|
|**240**|*bomEnabledCb*|Bom Enabled Cb |InputType.switchField|CONTROL|
|**250**|*bomType*|Bom Type |InputType.select|CONTROL|
|**260**|*costingEnabledCb*|Costing Enabled Cb |InputType.switchField|CONTROL|
|**270**|*inventoryAssetCb*|Inventory Asset Cb |InputType.switchField|CONTROL|
|**280**|*defaultCostGroup*|Default Cost Group |InputType.textField|PLANNING|
|**290**|*materialAcId*|Material Ac Id |deferredSelect|REFERENCE|
|**300**|*materialOhAcId*|Material Oh Ac Id |deferredSelect|REFERENCE|
|**310**|*overheadAcId*|Overhead Ac Id |deferredSelect|REFERENCE|
|**320**|*resourceAcId*|Resource Ac Id |deferredSelect|REFERENCE|
|**330**|*ospAcId*|Osp Ac Id |deferredSelect|REFERENCE|
|**340**|*expenseAcId*|Expense Ac Id |deferredSelect|REFERENCE|
|**350**|*lotUniqueness*|Lot Uniqueness |InputType.textField|CONTROL|
|**360**|*lotControl*|Lot Control |InputType.select|CONTROL|
|**370**|*lotPrefix*|Lot Prefix |InputType.textField|CONTROL|
|**380**|*lotStartingNumber*|Lot Starting Number |InputType.textField|DATA|
|**390**|*serialUniqueness*|Serial Uniqueness |InputType.textField|CONTROL|
|**400**|*serialControl*|Serial Control |InputType.select|CONTROL|
|**410**|*serialPrefix*|Serial Prefix |InputType.textField|CONTROL|
|**420**|*serialStartingNumber*|Serial Starting Number |InputType.number|DATA|
|**430**|*purchasedCb*|Purchased Cb |InputType.switchField|CONTROL|
|**440**|*useAslCb*|Use Asl Cb |InputType.switchField|CONTROL|
|**450**|*invoiceMatching*|Invoice Matching |InputType.textField|FINANCE|
|**460**|*defaultBuyer*|Default Buyer |InputType.number|PLANNING|
|**470**|*listPrice*|List Price |InputType.textField|FINANCE|
|**480**|*contractItemType*|Contract Item Type |deferredSelect|CONTROL|
|**490**|*durationUomId*|Duration Uom Id |deferredSelect|REFERENCE|
|**500**|*receiptSubInventory*|Receipt Sub Inventory |deferredSelect|PLANNING|
|**510**|*overReceiptPercentage*|Over Receipt Percentage |InputType.number|PLANNING|
|**520**|*overReceiptAction*|Over Receipt Action |InputType.textField|PLANNING|
|**530**|*receiptDaysEarly*|Receipt Days Early |InputType.number|PLANNING|
|**540**|*receiptDaysLate*|Receipt Days Late |InputType.number|PLANNING|
|**550**|*receiptDayAction*|Receipt Day Action |InputType.select|PLANNING|
|**560**|*receiptRouting*|Receipt Routing |InputType.select|PLANNING|
|**570**|*weightUomId*|Weight Uom Id |deferredSelect|DATA|
|**580**|*weight*|Weight |InputType.number|DATA|
|**590**|*volumeUomId*|Volume Uom Id |deferredSelect|DATA|
|**600**|*volume*|Volume |InputType.number|DATA|
|**610**|*dimensionUomId*|Dimension Uom Id |deferredSelect|REFERENCE|
|**620**|*length*|Length |InputType.number|DATA|
|**630**|*width*|Width |InputType.text|REFERENCE|
|**640**|*height*|Height |InputType.number|DATA|
|**650**|*equipmentCb*|Equipment Cb |InputType.switchField|CONTROL|
|**660**|*electronicFormatCb*|Electronic Format Cb |InputType.switchField|CONTROL|
|**670**|*planningMethod*|Planning Method |InputType.textField|PLANNING|
|**680**|*planner*|Planner |InputType.textField|PLANNING|
|**690**|*makeBuy*|Make Buy |InputType.select|PLANNING|
|**700**|*wipSupplySubinventory*|Wip Supply Subinventory |deferredSelect|PLANNING|
|**710**|*wipSupplyLocator*|Wip Supply Locator |deferredSelect|PLANNING|
|**720**|*fixOrderQuantity*|Fix Order Quantity |InputType.number|DATA|
|**730**|*safteyStockDays*|Saftey Stock Days |InputType.number|DATA|
|**740**|*safteyStockPercentage*|Saftey Stock Percentage |InputType.number|DATA|
|**750**|*safteyStockQuantity*|Saftey Stock Quantity |InputType.number|DATA|
|**760**|*fixDaysSupply*|Fix Days Supply |InputType.number|PLANNING|
|**770**|*fixLotMultiplier*|Fix Lot Multiplier |InputType.number|CONTROL|
|**780**|*minimumOrderQuantity*|Minimum Order Quantity |InputType.number|DATA|
|**790**|*maximumOrderQuantity*|Maximum Order Quantity |InputType.number|DATA|
|**800**|*minmaxMinQuantity*|Minmax Min Quantity |InputType.textField|DATA|
|**810**|*minmaxMaxQuantity*|Minmax Max Quantity |InputType.textField|DATA|
|**820**|*minmaxMultibinNumber*|Minmax Multibin Number |InputType.number|DATA|
|**830**|*minmaxMultibinSize*|Minmax Multibin Size |InputType.textField|PLANNING|
|**840**|*forecastMethod*|Forecast Method |InputType.textField|PLANNING|
|**850**|*forecastControl*|Forecast Control |InputType.select|PLANNING|
|**860**|*demandTimefence*|Demand Timefence |InputType.number|PLANNING|
|**870**|*planningTimefence*|Planning Timefence |InputType.number|PLANNING|
|**880**|*releaseTimefence*|Release Timefence |InputType.number|DATE|
|**890**|*preProcessingLt*|Pre Processing Lt |InputType.number|PLANNING|
|**900**|*postProcessingLt*|Post Processing Lt |InputType.number|PLANNING|
|**910**|*processingLt*|Processing Lt |InputType.number|PLANNING|
|**920**|*cumulativeMfgLt*|Cumulative Mfg Lt |InputType.number|PLANNING|
|**930**|*cumulativeTotalLt*|Cumulative Total Lt |InputType.number|PLANNING|
|**940**|*ltLotSize*|Lt Lot Size |InputType.number|CONTROL|
|**950**|*buildInWipCb*|Build In Wip Cb |InputType.switchField|CONTROL|
|**960**|*wipSupplyType*|Wip Supply Type |InputType.select|CONTROL|
|**970**|*customerOrderedCb*|Customer Ordered Cb |InputType.switchField|CONTROL|
|**980**|*internalOrderedCb*|Internal Ordered Cb |InputType.switchField|CONTROL|
|**990**|*shippableCb*|Shippable Cb |InputType.switchField|CONTROL|
|**1000**|*returnableCb*|Returnable Cb |InputType.switchField|CONTROL|
|**1010**|*invoiceableCb*|Invoiceable Cb |InputType.switchField|CONTROL|
|**1020**|*billingType*|Billing Type |InputType.textField|CONTROL|
|**1030**|*serviceRequestCb*|Service Request Cb |InputType.switchField|CONTROL|
|**1040**|*atp*|Atp |InputType.textField|DEFAULT|
|**1050**|*pickingRule*|Picking Rule |InputType.textField|DEFAULT|
|**1060**|*sourcingRuleId*|Sourcing Rule Id |InputType.text|REFERENCE|
|**1070**|*salesAcId*|Sales Ac Id |deferredSelect|REFERENCE|
|**1080**|*cogsAcId*|Cogs Ac Id |deferredSelect|REFERENCE|
|**1090**|*deferredCogsAcId*|deferred Cogs Ac Id |deferredSelect|REFERENCE|
|**1100**|*ipTaxClass*|Ip Tax Class |InputType.textField|FINANCE|
|**1110**|*opTaxClass*|Op Tax Class |InputType.textField|FINANCE|
|**1120**|*apPaymentTerm*|Ap Payment Term |deferredSelect|FINANCE|
|**1130**|*arPaymentTerm*|Ar Payment Term |deferredSelect|FINANCE|
|**1140**|*duration*|Duration |InputType.textField|DEFAULT|
|**1150**|*revEnabledCb*|Rev Enabled Cb |InputType.switchField|CONTROL|
|**1160**|*roundingOption*|Rounding Option |InputType.textField|DEFAULT|
|**1170**|*onhandWithRevCb*|Onhand With Rev Cb |InputType.switchField|CONTROL|
|**1180**|*itemRevNumber*|Item Rev Number |InputType.number|DATA|
|**1190**|*invoiceMatchType*|Invoice Match Type |InputType.select|CONTROL|
|**1200**|*amAssetType*|Am Asset Type |InputType.textField|CONTROL|
|**1210**|*amActivityCause*|Am Activity Cause |InputType.textField|DEFAULT|
|**1220**|*amActivityType*|Am Activity Type |InputType.textField|CONTROL|
|**1230**|*amActivitySource*|Am Activity Source |InputType.textField|DEFAULT|
|**1240**|*discountClass*|Discount Class |InputType.textField|FINANCE|
|**1250**|*demandClass*|Demand Class |InputType.textField|PLANNING|
|**1260**|*costingMethod*|Costing Method |InputType.select|FINANCE|
|**6270**|*createdBy*|Created By |InputType.text|REFERENCE|
|**6280**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**6290**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**6300**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>

## Organization Item

<img src="/images/modules/inv/item_master/item_master_07.PNG" width="900"/>

Master Items are used for item definition, and Organization items are used for all business operations such as Purchasing, Selling, Inventory Keeping, etc. Item number and item description are available only on the item master level. You can change all item master attributes except item number and item description at the item organization level.

You can assign the same master item to multiple inventory organizations.

Navigate to the organization item tab to view/update any existing organization item.  
<img src="/images/modules/inv/item_master/item_master_07a_1.PNG" width="700"/>

To view/create/update a master item, navigate to the "organization item" search screen from your dashboard/favorite.
<img src="/images/modules/inv/item_master/item_master_07a_2.PNG" width="400"/>

Enter the organization item details or any other criteria in the search form and click on the search button to view an existing organization item.

<img src="/images/modules/inv/item_master/item_master_07a.PNG" width="800"/>

Modify any attribute, if required, and click on the save button to save the changes.

<img src="/images/modules/inv/item_master/item_master_07b.PNG" width="800"/>


The entity group shows information related to business organization, master item, etc. 

<img src="/images/modules/inv/item_master/item_master_07c.PNG" width="800"/>

The reference groups show various ids for reference only. You don't need to enter any information in this section. When you save a master item for the first time, the system will auto-populate the newly created header id and line ids.

<img src="/images/modules/inv/item_master/item_master_07d.PNG" width="800"/>

Scroll left, right, up, and down view all other fields.

Enter all the other fields and click on the save button to save the master item. The app will post all the data to the server and will show the messages returned from the server.

<details>
<summary>All Fields</summary>

| Sequence | Name                | Label                    | InputType             | Field Group |
| -------- | ------------------------ | ------------------------ | --------------------- | ----------- |
|**10**|*vvAssignToOrg*| Assign To Org |deferredSelect|ASSIGN|
|**10**|*vvAssignToOrgId*| Assign To Org Id |deferredSelect|ASSIGN|
|**20**|*vvInvOrgCode*| Inv Org Code |deferredSelect|ENTITY|
|**30**|*vvItemNumber*| Item Number |InputType.text|DEFAULT|
|**40**|*vvItemDescription*| Item Description |InputType.text|DEFAULT|
|**50**|*vvProfileCode*| Profile Code |InputType.text|DEFAULT|
|**60**|*itemId*|Item Id |InputType.text|REFERENCE|
|**70**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**80**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**90**|*invItemMasterId*|Inv Item Master Id |deferredSelect|REFERENCE|
|**100**|*mdmInventoryOrgId*|Mdm Inventory Org Id |deferredSelect|PLANNING|
|**110**|*imageFileId*|Image File Id |InputType.text|REFERENCE|
|**120**|*productLine*|Product Line |deferredSelect|DEFAULT|
|**130**|*productLinePercentage*|Product Line Percentage |InputType.textField|DEFAULT|
|**140**|*locatorControl*|Locator Control |InputType.textField|ENTITY|
|**150**|*allowNegativeBalanceCb*|Allow Negative Balance Cb |InputType.switchField|CONTROL|
|**160**|*longDescription*|Long Description |InputType.textField|DEFAULT|
|**170**|*uomCode*|Uom Code |deferredSelect|DEFAULT|
|**180**|*originationType*|Origination Type |InputType.textField|CONTROL|
|**190**|*originationDate*|Origination Date |InputType.date|DATE|
|**200**|*itemType*|Item Type |deferredSelect|CONTROL|
|**210**|*itemStatus*|Item Status |deferredSelect|CONTROL|
|**220**|*inventoryItemCb*|Inventory Item Cb |InputType.switchField|CONTROL|
|**230**|*stockableCb*|Stockable Cb |InputType.switchField|CONTROL|
|**240**|*transactableCb*|Transactable Cb |InputType.switchField|CONTROL|
|**250**|*reservableCb*|Reservable Cb |InputType.switchField|CONTROL|
|**260**|*cycleCountEnabledCb*|Cycle Count Enabled Cb |InputType.switchField|CONTROL|
|**270**|*kitCb*|Kit Cb |InputType.switchField|CONTROL|
|**280**|*bomEnabledCb*|Bom Enabled Cb |InputType.switchField|CONTROL|
|**290**|*bomType*|Bom Type |InputType.select|CONTROL|
|**300**|*costingEnabledCb*|Costing Enabled Cb |InputType.switchField|CONTROL|
|**310**|*inventoryAssetCb*|Inventory Asset Cb |InputType.switchField|CONTROL|
|**320**|*defaultCostGroup*|Default Cost Group |InputType.textField|PLANNING|
|**330**|*materialAcId*|Material Ac Id |deferredSelect|REFERENCE|
|**340**|*materialOhAcId*|Material Oh Ac Id |deferredSelect|REFERENCE|
|**350**|*overheadAcId*|Overhead Ac Id |deferredSelect|REFERENCE|
|**360**|*resourceAcId*|Resource Ac Id |deferredSelect|REFERENCE|
|**370**|*ospAcId*|Osp Ac Id |deferredSelect|REFERENCE|
|**380**|*expenseAcId*|Expense Ac Id |deferredSelect|REFERENCE|
|**390**|*lotUniqueness*|Lot Uniqueness |InputType.textField|CONTROL|
|**400**|*lotControl*|Lot Control |InputType.select|CONTROL|
|**410**|*lotPrefix*|Lot Prefix |InputType.textField|CONTROL|
|**420**|*lotStartingNumber*|Lot Starting Number |InputType.textField|DATA|
|**430**|*serialUniqueness*|Serial Uniqueness |InputType.textField|CONTROL|
|**440**|*serialControl*|Serial Control |InputType.select|CONTROL|
|**450**|*serialPrefix*|Serial Prefix |InputType.textField|CONTROL|
|**460**|*serialStartingNumber*|Serial Starting Number |InputType.number|DATA|
|**470**|*purchasedCb*|Purchased Cb |InputType.switchField|CONTROL|
|**480**|*useAslCb*|Use Asl Cb |InputType.switchField|CONTROL|
|**490**|*invoiceMatching*|Invoice Matching |InputType.textField|FINANCE|
|**500**|*defaultBuyer*|Default Buyer |InputType.number|PLANNING|
|**510**|*listPrice*|List Price |InputType.textField|FINANCE|
|**520**|*contractItemType*|Contract Item Type |deferredSelect|CONTROL|
|**530**|*durationUomId*|Duration Uom Id |deferredSelect|REFERENCE|
|**540**|*receiptSubInventory*|Receipt Sub Inventory |deferredSelect|PLANNING|
|**550**|*overReceiptPercentage*|Over Receipt Percentage |InputType.number|PLANNING|
|**560**|*overReceiptAction*|Over Receipt Action |InputType.textField|PLANNING|
|**570**|*receiptDaysEarly*|Receipt Days Early |InputType.number|PLANNING|
|**580**|*receiptDaysLate*|Receipt Days Late |InputType.number|PLANNING|
|**590**|*receiptDayAction*|Receipt Day Action |InputType.select|PLANNING|
|**600**|*receiptRouting*|Receipt Routing |InputType.select|PLANNING|
|**610**|*weightUomId*|Weight Uom Id |deferredSelect|DATA|
|**620**|*weight*|Weight |InputType.number|DATA|
|**630**|*volumeUomId*|Volume Uom Id |deferredSelect|DATA|
|**640**|*volume*|Volume |InputType.number|DATA|
|**650**|*dimensionUomId*|Dimension Uom Id |deferredSelect|REFERENCE|
|**660**|*length*|Length |InputType.number|DATA|
|**670**|*width*|Width |InputType.text|REFERENCE|
|**680**|*height*|Height |InputType.number|DATA|
|**690**|*equipmentCb*|Equipment Cb |InputType.switchField|CONTROL|
|**700**|*electronicFormatCb*|Electronic Format Cb |InputType.switchField|CONTROL|
|**710**|*planningMethod*|Planning Method |InputType.textField|PLANNING|
|**720**|*planner*|Planner |InputType.textField|PLANNING|
|**730**|*makeBuy*|Make Buy |InputType.select|PLANNING|
|**740**|*wipSupplySubinventory*|Wip Supply Subinventory |deferredSelect|PLANNING|
|**750**|*wipSupplyLocator*|Wip Supply Locator |deferredSelect|PLANNING|
|**760**|*fixOrderQuantity*|Fix Order Quantity |InputType.number|DATA|
|**770**|*safteyStockDays*|Saftey Stock Days |InputType.number|DATA|
|**780**|*safteyStockPercentage*|Saftey Stock Percentage |InputType.number|DATA|
|**790**|*safteyStockQuantity*|Saftey Stock Quantity |InputType.number|DATA|
|**800**|*fixDaysSupply*|Fix Days Supply |InputType.number|PLANNING|
|**810**|*fixLotMultiplier*|Fix Lot Multiplier |InputType.number|CONTROL|
|**820**|*minimumOrderQuantity*|Minimum Order Quantity |InputType.number|DATA|
|**830**|*maximumOrderQuantity*|Maximum Order Quantity |InputType.number|DATA|
|**840**|*minmaxMinQuantity*|Minmax Min Quantity |InputType.textField|DATA|
|**850**|*minmaxMaxQuantity*|Minmax Max Quantity |InputType.textField|DATA|
|**860**|*minmaxMultibinNumber*|Minmax Multibin Number |InputType.number|DATA|
|**870**|*minmaxMultibinSize*|Minmax Multibin Size |InputType.textField|PLANNING|
|**880**|*forecastMethod*|Forecast Method |InputType.textField|PLANNING|
|**890**|*forecastControl*|Forecast Control |InputType.select|PLANNING|
|**900**|*demandTimefence*|Demand Timefence |InputType.number|PLANNING|
|**910**|*planningTimefence*|Planning Timefence |InputType.number|PLANNING|
|**920**|*releaseTimefence*|Release Timefence |InputType.number|DATE|
|**930**|*preProcessingLt*|Pre Processing Lt |InputType.number|PLANNING|
|**940**|*postProcessingLt*|Post Processing Lt |InputType.number|PLANNING|
|**950**|*processingLt*|Processing Lt |InputType.number|PLANNING|
|**960**|*cumulativeMfgLt*|Cumulative Mfg Lt |InputType.number|PLANNING|
|**970**|*cumulativeTotalLt*|Cumulative Total Lt |InputType.number|PLANNING|
|**980**|*ltLotSize*|Lt Lot Size |InputType.number|CONTROL|
|**990**|*buildInWipCb*|Build In Wip Cb |InputType.switchField|CONTROL|
|**1000**|*wipSupplyType*|Wip Supply Type |InputType.select|CONTROL|
|**1010**|*customerOrderedCb*|Customer Ordered Cb |InputType.switchField|CONTROL|
|**1020**|*internalOrderedCb*|Internal Ordered Cb |InputType.switchField|CONTROL|
|**1030**|*shippableCb*|Shippable Cb |InputType.switchField|CONTROL|
|**1040**|*returnableCb*|Returnable Cb |InputType.switchField|CONTROL|
|**1050**|*invoiceableCb*|Invoiceable Cb |InputType.switchField|CONTROL|
|**1060**|*billingType*|Billing Type |InputType.textField|CONTROL|
|**1070**|*serviceRequestCb*|Service Request Cb |InputType.switchField|CONTROL|
|**1080**|*atp*|Atp |InputType.textField|DEFAULT|
|**1090**|*pickingRule*|Picking Rule |InputType.textField|DEFAULT|
|**1100**|*sourcingRuleId*|Sourcing Rule Id |InputType.text|REFERENCE|
|**1110**|*salesAcId*|Sales Ac Id |deferredSelect|REFERENCE|
|**1120**|*cogsAcId*|Cogs Ac Id |deferredSelect|REFERENCE|
|**1130**|*deferredCogsAcId*|deferred Cogs Ac Id |deferredSelect|REFERENCE|
|**1140**|*ipTaxClass*|Ip Tax Class |InputType.textField|FINANCE|
|**1150**|*opTaxClass*|Op Tax Class |InputType.textField|FINANCE|
|**1160**|*apPaymentTerm*|Ap Payment Term |deferredSelect|FINANCE|
|**1170**|*arPaymentTerm*|Ar Payment Term |deferredSelect|FINANCE|
|**1180**|*duration*|Duration |InputType.textField|DEFAULT|
|**1190**|*revEnabledCb*|Rev Enabled Cb |InputType.switchField|CONTROL|
|**1200**|*roundingOption*|Rounding Option |InputType.textField|DEFAULT|
|**1210**|*onhandWithRevCb*|Onhand With Rev Cb |InputType.switchField|CONTROL|
|**1220**|*itemRevNumber*|Item Rev Number |InputType.number|DATA|
|**1230**|*invoiceMatchType*|Invoice Match Type |InputType.select|CONTROL|
|**1240**|*amAssetType*|Am Asset Type |InputType.textField|CONTROL|
|**1250**|*amActivityCause*|Am Activity Cause |InputType.textField|DEFAULT|
|**1260**|*amActivityType*|Am Activity Type |InputType.textField|CONTROL|
|**1270**|*amActivitySource*|Am Activity Source |InputType.textField|DEFAULT|
|**1280**|*discountClass*|Discount Class |InputType.textField|FINANCE|
|**1290**|*demandClass*|Demand Class |InputType.textField|PLANNING|
|**1300**|*costingMethod*|Costing Method |InputType.select|FINANCE|
|**1310**|*frozenCost*|Frozen Cost |InputType.textField|FINANCE|
|**1360**|*glAcProfileHeaderId*|Gl Ac Profile Header Id |deferredSelect|REFERENCE|
|**1370**|*itemNumber2*|Item Number 2|InputType.textField|DEFAULT|
|**1380**|*itemDescription2*|Item Description 2|InputType.textField|DEFAULT|
|**6320**|*createdBy*|Created By |InputType.text|REFERENCE|
|**6330**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**6340**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**6350**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>


## Serial Number


To view/create/update a serial number, navigate to the "serial number" search screen from your dashboard/favorite.

<img src="/images/modules/inv/serial_number/serial_number_01.PNG" width="400"/>

Enter the serial number details or any other criteria in the search form and click on the search button to view an existing serial number. Click on create a new button to create a new serial number; by manually entering all the information. Copying an existing serial number to a new serial number is always better than manually entering all the data to create a new serial number. 

<img src="/images/modules/inv/serial_number/serial_number_02.PNG" width="800"/>

If you click on the create a new button, the system will open a simple step form to create a new item. You can click on the detail right bottom to view all the fields available for the object.

<img src="/images/modules/inv/serial_number/serial_number_03.PNG" width="350"/>


If you click on the search button without entering any organization/serial number details, the system will show you all the serial numbers. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search serial numbers. The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.
<img src="/images/modules/inv/serial_number/serial_number_04.PNG" width="350"/>


To view the search result in a table format, click on the table icon available on the bottom left corner.

To open a specific serial number, click on the menu of that record, and click on view/fetch & view.

You can also click on the expand icon against any item on the search result screen to view the serial number header details such as serial number, quantities, start date, status, etc.
<img src="/images/modules/inv/serial_number/serial_number_05.PNG" width="800"/>


The system will fetch all the data related to the selected serial number. The serial number details are shown either right to the search result screen or on a separate screen, depending on the device size.


Scroll left, right, up, down to view all the details. The serial number line and details are shown in a separate tab.
The default configuration shows fields in various functional groups such as
<img src="/images/modules/inv/serial_number/serial_number_06.PNG" width="800"/>

- Finance
- Entity
- Reference
- Data
- Control
- Etc  

<img src="/images/modules/inv/serial_number/serial_number_06a.PNG" width="800"/>



You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.

The data tab shows information related to physical attributes of the item such as Weight, Volume, Length, Height, etc.
The finance tab shows information related to price, invoice, tax, discount, etc.

<img src="/images/modules/inv/serial_number/serial_number_06b.PNG" width="800"/>


<details>
<summary>All Fields</summary>

| Sequence | Name                   | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*vvInvOrgCode*| Inv Org Code |deferredSelect|ENTITY|
|**10**|*vvItemNumber*| Item Number |deferredSelect|DEFAULT|
|**20**|*vvItemDescription*| Item Description |deferredSelect|DEFAULT|
|**30**|*vvSerialControl*| Serial Control |InputType.text|CONTROL|
|**40**|*vvLotControl*| Lot Control |InputType.text|CONTROL|
|**50**|*invSerialNumberId*|Inv Serial Number Id |deferredSelect|DATA|
|**60**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**70**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**80**|*serialNumber*|Serial Number |InputType.textField|DATA|
|**90**|*invItemMasterId*|Inv Item Master Id |deferredSelect|REFERENCE|
|**100**|*generation*|Generation |InputType.select|DEFAULT|
|**110**|*invOrgId*|Inv Org Id |deferredSelect|REFERENCE|
|**120**|*lockCb*|Lock Cb |InputType.switchField|DEFAULT|
|**130**|*snInvLotNumberId*|Sn Inv Lot Number Id |deferredSelect|DATA|
|**140**|*firstInvTransactionId*|First Inv Transaction Id |InputType.text|REFERENCE|
|**150**|*referenceKeyName*|Reference Key Name |InputType.text|REFERENCE|
|**160**|*referenceKeyValue*|Reference Key Value |InputType.text|REFERENCE|
|**170**|*originationType*|Origination Type |InputType.textField|CONTROL|
|**180**|*originationDate*|Origination Date |InputType.dateTime|DATE|
|**190**|*status*|Status |InputType.select|CONTROL|
|**200**|*activationDate*|Activation Date |InputType.date|DATE|
|**210**|*supplierSiteId*|Supplier Site Id |deferredSelect|REFERENCE|
|**220**|*poHeaderId*|Po Header Id |InputType.text|REFERENCE|
|**230**|*supplierSn*|Supplier Sn |InputType.textField|ENTITY|
|**240**|*supplierLn*|Supplier Ln |InputType.textField|ENTITY|
|**250**|*currentInvOrgCode*|Current Inv Org Code |deferredSelect|ENTITY|
|**260**|*currentSubInventory*|Current Sub Inventory |deferredSelect|ENTITY|
|**270**|*currentLocatorId*|Current Locator Id |deferredSelect|REFERENCE|
|**280**|*itemRevision*|Item Revision |InputType.textField|DEFAULT|
|**290**|*parentSerialNumberId*|Parent Serial Number Id |InputType.number|DATA|
|**300**|*originalWipWoHeaderId*|Original Wip Wo Header Id |deferredSelect|REFERENCE|
|**310**|*currentWipWoHeaderId*|Current Wip Wo Header Id |deferredSelect|REFERENCE|
|**320**|*lastInvTransactionId*|Last Inv Transaction Id |InputType.text|REFERENCE|
|**330**|*countryOfOrigin*|Country Of Origin |InputType.textField|DEFAULT|
|**340**|*fixedAssetCb*|Fixed Asset Cb |InputType.switchField|DEFAULT|
|**350**|*description*|Description |InputType.textField|DEFAULT|
|**360**|*arCustomerSiteId*|Ar Customer Site Id |deferredSelect|REFERENCE|
|**370**|*sdSoLineId*|Sd So Line Id |deferredSelect|REFERENCE|
|**380**|*faAssetId*|Fa Asset Id |InputType.text|REFERENCE|
|**5390**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5400**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5410**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5420**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>






## Lot Number


To view/create/update a lot number, navigate to the "lot number" search screen from your dashboard/favorite.

<img src="/images/modules/inv/lot_number/lot_number_01.PNG" width="400"/>

Enter the lot number details or any other criteria in the search form and click on the search button to view an existing lot number. Click on create a new button to create a new lot number; by manually entering all the information. Copying an existing lot number to a new lot number is always better than manually entering all the data to create a new lot number.

<img src="/images/modules/inv/lot_number/lot_number_02.PNG" width="800"/>

If you click on the create a new button, the system will open a simple step form to create a new item. You can click on the detail right bottom to view all the fields available for the object.

<img src="/images/modules/inv/lot_number/lot_number_03.PNG" width="350"/>


If you click on the search button without entering any organization/lot number details, the system will show you all the lot numbers. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search lot numbers. The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.
<img src="/images/modules/inv/lot_number/lot_number_04.PNG" width="800"/>


To view the search result in a table format, click on the table icon available on the bottom left corner.

To open a specific lot number, click on the menu of that record, and click on view/fetch & view.

You can also click on the expand icon against any item on the search result screen to view the lot number header details such as lot number, quantities, start date, status, etc.
<img src="/images/modules/inv/lot_number/lot_number_05.PNG" width="800"/>


The system will fetch all the data related to the selected lot number. Depending on the device size, the lot number details are shown either right to the search result screen or on a separate screen.


Scroll left, right, up, down to view all the details. The lot number line and details are shown in a separate tab.
The default configuration shows fields in various functional groups such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  


<img src="/images/modules/inv/lot_number/lot_number_06.PNG" width="800"/>

You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.

The data tab shows information related to physical attributes of the item such as Weight, Volume, Length, Height, etc.
The finance tab shows information related to price, invoice, tax, discount, etc.


<details>
<summary>All Fields</summary>

| Name     | Sequence                   | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*vvInvOrgCode*| Inv Org Code |deferredSelect|ENTITY|
|**10**|*vvItemNumber*| Item Number |deferredSelect|DEFAULT|
|**20**|*vvItemDescription*| Item Description |deferredSelect|DEFAULT|
|**30**|*vvLotControl*| Lot Control |InputType.text|CONTROL|
|**40**|*vvSerialControl*| Serial Control |InputType.text|CONTROL|
|**50**|*invLotNumberId*|Inv Lot Number Id |deferredSelect|DATA|
|**60**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**70**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**80**|*lotNumber*|Lot Number |deferredSelect|DATA|
|**90**|*initialQuantity*|Initial Quantity |InputType.textField|DATA|
|**100**|*invItemMasterId*|Inv Item Master Id |deferredSelect|REFERENCE|
|**110**|*generation*|Generation |InputType.select|DEFAULT|
|**120**|*invOrgId*|Inv Org Id |deferredSelect|REFERENCE|
|**130**|*lockCb*|Lock Cb |InputType.switchField|DEFAULT|
|**140**|*firstInvTransactionId*|First Inv Transaction Id |InputType.text|REFERENCE|
|**150**|*referenceKeyName*|Reference Key Name |InputType.text|REFERENCE|
|**160**|*referenceKeyValue*|Reference Key Value |InputType.text|REFERENCE|
|**170**|*originationType*|Origination Type |InputType.textField|CONTROL|
|**180**|*originationDate*|Origination Date |InputType.date|DATE|
|**190**|*status*|Status |InputType.select|CONTROL|
|**200**|*activationDate*|Activation Date |InputType.date|DATE|
|**210**|*expirationDate*|Expiration Date |InputType.date|DATE|
|**220**|*supplierSiteId*|Supplier Site Id |deferredSelect|REFERENCE|
|**230**|*poHeaderId*|Po Header Id |InputType.text|REFERENCE|
|**240**|*supplierSn*|Supplier Sn |InputType.textField|ENTITY|
|**250**|*supplierLn*|Supplier Ln |InputType.textField|ENTITY|
|**260**|*expirationAction*|Expiration Action |InputType.textField|DEFAULT|
|**270**|*itemRevision*|Item Revision |InputType.textField|DEFAULT|
|**280**|*parentLotNumberId*|Parent Lot Number Id |InputType.number|DATA|
|**290**|*originalWipWoHeaderId*|Original Wip Wo Header Id |deferredSelect|REFERENCE|
|**300**|*lastInvTransactionId*|Last Inv Transaction Id |InputType.text|REFERENCE|
|**310**|*countryOfOrigin*|Country Of Origin |InputType.textField|DEFAULT|
|**320**|*description*|Description |InputType.textField|DEFAULT|
|**330**|*arCustomerSiteId*|Ar Customer Site Id |deferredSelect|REFERENCE|
|**5340**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5350**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5360**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5370**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>




