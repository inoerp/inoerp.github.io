---
id: onhand
title: OnHand
sidebar_label: OnHand
---

:::caution

This documentation is incomplete.

:::


## On-hand
You can view on-hand/stock quantities for items in the OnHand screen. If the item is Serial/Lot controlled, you can view the Serial/Lot details on the same screen or the corresponding Serial /Lot OnHand screen.

To view On-hand, navigate to the "On-hand" search screen from your dashboard/favorite.

<img src="/images/modules/inv/onhand/onhand_01.PNG" width="400"/>

Enter the On-hand details or any other criteria in the search form and click on the search button to view an existing On-hand. OnHand details are updated by the system when you do inventory transactions. You can't directly update any OnHand information.

<img src="/images/modules/inv/onhand/onhand_02.PNG" width="800"/>



The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices. If you click on the search button without entering any organization/On-hand details, the system will show you all the stock available across all inventory organizations. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search OnHand details.

<img src="/images/modules/inv/onhand/onhand_03.PNG" width="350"/>


To view the search result in a table format, click on the table icon available on the bottom left corner.

To open a specific On-hand, click on the menu of that record, and click on view/fetch & view.

You can also click on the expand icon against any item on the search result screen to view the On-hand header details such as On-hand, quantities, start date, status, etc.
<img src="/images/modules/inv/onhand/onhand_04.PNG" width="800"/>


The system will fetch all the data related to the selected On-hand. The On-hand details are shown either right to the search result screen or on a separate screen, depending on the device size.
<img src="/images/modules/inv/onhand/onhand_05.PNG" width="800"/>


Scroll left, right, up, down to view all the details. The On-hand line and details are shown in a separate tab.
The default configuration shows fields in various functional groups such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  


<img src="/images/modules/inv/onhand/onhand_06.PNG" width="800"/>


You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.

The data tab shows information related to physical attributes of the item such as Weight, Volume, Length, Height, etc.
The finance tab shows price, invoice, tax, discount, etc.



<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*invOrgCode*|Inv Org Code |deferredSelect|ENTITY|
|**10**|*vvItemNumber*| Item Number |deferredSelect|DEFAULT|
|**20**|*vvItemDescription*| Item Description |deferredSelect|DEFAULT|
|**30**|*vvSerialControl*| Serial Control |InputType.text|CONTROL|
|**40**|*vvLotControl*| Lot Control |InputType.text|CONTROL|
|**50**|*onhandId*|Onhand Id |InputType.text|REFERENCE|
|**60**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**70**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**80**|*invItemMasterId*|Inv Item Master Id |deferredSelect|REFERENCE|
|**90**|*revisionName*|Revision Name |InputType.textField|DEFAULT|
|**100**|*invOrgId*|Inv Org Id |deferredSelect|REFERENCE|
|**110**|*subInventory*|Sub Inventory |deferredSelect|ENTITY|
|**120**|*locatorId*|Locator Id |deferredSelect|REFERENCE|
|**130**|*lotId*|Lot Id |InputType.number|CONTROL|
|**140**|*serialId*|Serial Id |InputType.number|CONTROL|
|**150**|*onhand*|Onhand |InputType.textField|DEFAULT|
|**160**|*reservableOnhand*|Reservable Onhand |InputType.textField|DEFAULT|
|**170**|*transactableOnhand*|Transactable Onhand |InputType.textField|DEFAULT|
|**180**|*lotStatus*|Lot Status |InputType.textField|CONTROL|
|**190**|*serialStatus*|Serial Status |InputType.textField|CONTROL|
|**200**|*uomCode*|Uom Code |deferredSelect|DEFAULT|
|**210**|*secondaryUomId*|Secondary Uom Id |deferredSelect|REFERENCE|
|**220**|*onhandStatus*|Onhand Status |InputType.textField|CONTROL|
|**230**|*docComment*|Doc Comment |InputType.textField|DEFAULT|
|**5240**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5250**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5260**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5270**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>



## Lot On-hand
You can view lot on-hand/stock quantities for items in the Lot OnHand screen.

To view the lot on-hand, navigate to the "lot on-hand" search screen from your dashboard/favorite.

<img src="/images/modules/inv/onhand/lot/lot_onhand_01.PNG" width="400"/>

Enter the lot on-hand details or any other criteria in the search form and click on the search button to view an existing lot on-hand. OnHand details are updated by the system when you do inventory transactions. You can't directly edit any Lot OnHand information.

<img src="/images/modules/inv/onhand/lot/lot_onhand_02.PNG" width="800"/>



The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices. If you click on the search button without entering any organization/lot on-hand details, the system will show you all the Lots available across all inventory organizations. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search OnHand details.
<img src="/images/modules/inv/onhand/lot/lot_onhand_03.PNG" width="350"/>


To view the search result in a table format, click on the table icon available on the bottom left corner.

To open a specific lot on-hand, click on the menu of that record and click on view/fetch & view.

You can also click on the expand icon against any item on the search result screen to view the lot on-hand header details such as lot on-hand, quantities, start date, status, etc.
<img src="/images/modules/inv/onhand/lot/lot_onhand_04.PNG" width="800"/>


The system will fetch all the data related to the selected lot on hand. Depending on the device size, the lot on-hand details are shown either right to the search result screen or on a separate screen.
<img src="/images/modules/inv/onhand/lot/lot_onhand_05.PNG" width="800"/>


Scroll left, right, up, down to view all the details. 
The default configuration shows fields in various functional groups such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  


<img src="/images/modules/inv/onhand/lot/lot_onhand_06.PNG" width="800"/>


You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.



<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*vvInvOrgCode*| Inv Org Code |deferredSelect|ENTITY|
|**10**|*vvLotNumber*| Lot Number |deferredSelect|DATA|
|**20**|*vvInvLotNumberId*| Inv Lot Number Id |deferredSelect|DATA|
|**30**|*vvItemNumber*| Item Number |deferredSelect|DEFAULT|
|**40**|*vvItemDescription*| Item Description |deferredSelect|DEFAULT|
|**50**|*vvLocator*| Locator |deferredSelect|ENTITY|
|**60**|*vvInvOrgId*| Inv Org Id |deferredSelect|REFERENCE|
|**70**|*vvInvItemMasterId*| Inv Item Master Id |deferredSelect|REFERENCE|
|**80**|*vvSubInventory*| Sub Inventory |deferredSelect|ENTITY|
|**90**|*vvUomCode*| Uom Code |deferredSelect|DEFAULT|
|**100**|*vvOnhand*| Onhand |InputType.text|DEFAULT|
|**110**|*vvLocatorId*| Locator Id |deferredSelect|REFERENCE|
|**120**|*invLotOnhandId*|Inv Lot Onhand Id |InputType.number|CONTROL|
|**130**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**140**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**150**|*onhandId*|Onhand Id |InputType.text|REFERENCE|
|**160**|*invLotNumberId*|Inv Lot Number Id |deferredSelect|DATA|
|**170**|*lotQuantity*|Lot Quantity |InputType.textField|DATA|
|**5180**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5190**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5200**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5210**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>


## Serial 
You can view serial on-hand/stock quantities for items on the serial screen.

To view serial, navigate to the "serial" search screen from your dashboard/favorite.

<img src="/images/modules/inv/onhand/serial/serial_onhand_01.PNG" width="400"/>

Enter the serial on-hand details or any other criteria in the search form and click on the search button to view an existing serial on-hand. OnHand information is updated by the system when you do inventory transactions. You can't directly update any serial OnHand information.

<img src="/images/modules/inv/onhand/serial/serial_onhand_02.PNG" width="800"/>



The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices. If you click on the search button without entering any organization/serial on-hand details, the system will show you all the serials available across all inventory organizations. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search OnHand details.
<img src="/images/modules/inv/onhand/serial/serial_onhand_03.PNG" width="350"/>


To view the search result in a table format, click on the table icon available on the bottom left corner.

To open a specific serial on-hand, click on the menu of that record, and click on view/fetch & view.

You can also click on the expand icon against any item on the search result screen to view the serial details such as serial number, organization code, sub-inventory, locator, etc.
<img src="/images/modules/inv/onhand/serial/serial_onhand_04.PNG" width="800"/>


The system will fetch all the data related to the selected serial on hand. The serial on-hand details are shown either right to the search result screen or on a separate screen, depending on the device size.
<img src="/images/modules/inv/onhand/serial/serial_onhand_05.PNG" width="800"/>


Scroll left, right, up, down to view all the details. 
The default configuration shows fields in various functional groups such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  


<img src="/images/modules/inv/onhand/serial/serial_onhand_06.PNG" width="800"/>


You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.



<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*currentOrgCode*|Current Org Code |deferredSelect|ENTITY|
|**10**|*itemNumber*|Item Number |deferredSelect|DEFAULT|
|**20**|*itemDescription*|Item Description |deferredSelect|DEFAULT|
|**30**|*currentLocatorAlias*|Current Locator Alias |InputType.textField|ENTITY|
|**40**|*invSerialNumberId*|Inv Serial Number Id |deferredSelect|DATA|
|**50**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**60**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**70**|*serialNumber*|Serial Number |InputType.textField|DATA|
|**80**|*invItemMasterId*|Inv Item Master Id |deferredSelect|REFERENCE|
|**90**|*generation*|Generation |InputType.select|DEFAULT|
|**100**|*invOrgId*|Inv Org Id |deferredSelect|REFERENCE|
|**110**|*lockCb*|Lock Cb |InputType.switchField|DEFAULT|
|**120**|*snInvLotNumberId*|Sn Inv Lot Number Id |deferredSelect|DATA|
|**130**|*firstInvTransactionId*|First Inv Transaction Id |InputType.text|REFERENCE|
|**140**|*referenceKeyName*|Reference Key Name |InputType.text|REFERENCE|
|**150**|*referenceKeyValue*|Reference Key Value |InputType.text|REFERENCE|
|**160**|*originationType*|Origination Type |InputType.textField|CONTROL|
|**170**|*originationDate*|Origination Date |InputType.dateTime|DATE|
|**180**|*status*|Status |InputType.select|CONTROL|
|**190**|*activationDate*|Activation Date |InputType.date|DATE|
|**200**|*supplierSiteId*|Supplier Site Id |deferredSelect|REFERENCE|
|**210**|*poHeaderId*|Po Header Id |InputType.text|REFERENCE|
|**220**|*supplierSn*|Supplier Sn |InputType.textField|ENTITY|
|**230**|*supplierLn*|Supplier Ln |InputType.textField|ENTITY|
|**240**|*currentInvOrgCode*|Current Inv Org Code |deferredSelect|ENTITY|
|**250**|*currentSubInventory*|Current Sub Inventory |deferredSelect|ENTITY|
|**260**|*currentLocatorId*|Current Locator Id |deferredSelect|REFERENCE|
|**270**|*itemRevision*|Item Revision |InputType.textField|DEFAULT|
|**280**|*parentSerialNumberId*|Parent Serial Number Id |InputType.number|DATA|
|**290**|*originalWipWoHeaderId*|Original Wip Wo Header Id |deferredSelect|REFERENCE|
|**300**|*currentWipWoHeaderId*|Current Wip Wo Header Id |deferredSelect|REFERENCE|
|**310**|*lastInvTransactionId*|Last Inv Transaction Id |InputType.text|REFERENCE|
|**320**|*countryOfOrigin*|Country Of Origin |InputType.textField|DEFAULT|
|**330**|*fixedAssetCb*|Fixed Asset Cb |InputType.switchField|DEFAULT|
|**340**|*description*|Description |InputType.textField|DEFAULT|
|**350**|*arCustomerSiteId*|Ar Customer Site Id |deferredSelect|REFERENCE|
|**360**|*sdSoLineId*|Sd So Line Id |deferredSelect|REFERENCE|
|**370**|*faAssetId*|Fa Asset Id |InputType.text|REFERENCE|
|**5380**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5390**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5400**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5410**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>