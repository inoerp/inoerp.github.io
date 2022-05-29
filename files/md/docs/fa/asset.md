---
id: asset
title: Asset
sidebar_label: Asset
---

:::caution

This documentation is incomplete.

:::

A fixed asset is a long-term asset that an organization owns and uses for regular business activities.
Using the asset screen, you can create, edit, and manage the master data required for creating and maintaining Fixed Asset.



The fixed asset screen consists of four tabs
* Basic tab - shows basic information about the asset such as asset number, name, tag, serial number, etc
* Asset book - shows all the books assigned to the asset. You must assign each to a primary book  
              asset book also shows all financial information such as original cost, accumulated depreciation, asset life, etc
* Location - shows the physical location of the assets. You can assign assets to a business organization/inventory organization.
            The data in the location tab is used only for reporting purposes and has no direct financial impact on asset accounting
* Components - Shows all the sub-components (other lower-level fixed assets) associated with the main parent group asset

:::info

In InoERP, assets are created and maintained at a legal organization level.

:::

## Header


To create/view/update Asset, navigate to the "Asset"  screen from your dashboard/favorite.


<img src="/images/modules/fa/asset/asset_01.PNG" width="350"/>

Enter the organization/Asset details or any other criteria in the search form and click on the search button to view an existing Asset.  


<img src="/images/modules/fa/asset/asset_02.PNG" width="800"/>

If you don't enter organization details, the system will show you all the Assets. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search Assets.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.


If you click on the create new button, the system will open a simple step form to create a new Asset. You can click on the detail right bottom to view all the fields available for the object. 

<img src="/images/modules/fa/asset/asset_03.PNG" width="350"/>

To view the search result in a table format, click on the table icon in the bottom left corner.

To view specific Asset details, click on the menu of that record, and click on view/fetch & view.
<img src="/images/modules/fa/asset/asset_04a.PNG" width="450"/>

You can also click on the expand icon against any item on the search result screen to view the Asset header details, such as price list name, module, status, currency, etc.

<img src="/images/modules/fa/asset/asset_04.PNG" width="800"/>

The system will fetch all the selected document detail line data. The document details are shown either right on the search result screen or on a separate screen, depending on the device size.

**Asset Number:** Enter a unique name for the asset. Asset number is a mandatory field.

**Asset Name:** Enter an asset name. If you maintain asset names in your organization

**Description:** Enter a meaningful description for the asset

<img src="/images/modules/fa/asset/asset_06b.PNG" width="800"/>

**Legal Org:** Enter a legal organization name. Legal Org is a mandatory field. The system defaults asset accounts from the asset category assigned to the asset legal organization.

**Units:** Enter the number of units of the asset. If you create a separate Asset for each unit, then enter 1 in units.

The system also allows you to enter and maintain other values such as supplier, manufacturer, tags, etc. All these values are stored only for reporting and tracking purposes.

<img src="/images/modules/fa/asset/asset_05.PNG" width="800"/>


Scroll left, right, up, and down to view all the details. The document line and details are shown in a separate tab..
The default configuration shows fields in various functional groups, such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  

<img src="/images/modules/fa/asset/asset_06.PNG" width="800"/>

You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.

<img src="/images/modules/fa/asset/asset_06a.PNG" width="800"/>


<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*vvLegalOrgCode*| Legal Org Code |defferedSelect|ENTITY|
|**10**|*vvItemNumber*| Item Number |defferedSelect|DEFAULT|
|**20**|*vvItemDescription*| Item Description |defferedSelect|DEFAULT|
|**30**|*vvParantAssetName*| Parant Asset Name |InputType.text|DEFAULT|
|**40**|*vvAssetNumber*| Asset Number |defferedSelect|DATA|
|**50**|*vvAssetCategory*| Asset Category |defferedSelect|DEFAULT|
|**60**|*vvSupplierName*| Supplier Name |defferedSelect|ENTITY|
|**70**|*vvSupplierNumber*| Supplier Number |defferedSelect|DATA|
|**80**|*vvSupplierSiteNumber*| Supplier Site Number |defferedSelect|DATA|
|**90**|*vvSupplierSiteName*| Supplier Site Name |defferedSelect|ENTITY|
|**100**|*faAssetId*|Fa Asset Id |defferedSelect|REFERENCE|
|**110**|*srcEntityName*|Src Entity Name |defferedSelect|DEFAULT|
|**120**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**130**|*assetName*|Asset Name |InputType.textField|DEFAULT|
|**140**|*assetNumber*|Asset Number |InputType.textField|DATA|
|**150**|*assetType*|Asset Type |InputType.select|CONTROL|
|**160**|*legalOrgId*|Legal Org Id |defferedSelect|REFERENCE|
|**170**|*tagNumber*|Tag Number |InputType.textField|DATA|
|**180**|*serialNumber*|Serial Number |InputType.textField|DATA|
|**190**|*keyNumber*|Key Number |InputType.textField|DATA|
|**200**|*description*|Description |InputType.textField|DEFAULT|
|**210**|*assetStatus*|Asset Status |InputType.text|CONTROL|
|**220**|*faAssetCategoryId*|Fa Asset Category Id |defferedSelect|REFERENCE|
|**230**|*units*|Units |InputType.textField|DEFAULT|
|**240**|*invItemMasterId*|Inv Item Master Id |defferedSelect|REFERENCE|
|**250**|*parentAssetId*|Parent Asset Id |InputType.text|REFERENCE|
|**260**|*manufacturer*|Manufacturer |InputType.textField|DEFAULT|
|**270**|*apSupplierId*|Ap Supplier Id |defferedSelect|REFERENCE|
|**280**|*apSupplierSiteId*|Ap Supplier Site Id |defferedSelect|REFERENCE|
|**290**|*modelNumber*|Model Number |InputType.textField|DATA|
|**300**|*warrrantyNumber*|Warrranty Number |InputType.textField|DATA|
|**310**|*leaseNumber*|Lease Number |InputType.textField|DATA|
|**320**|*physicalInventoryCb*|Physical Inventory Cb |InputType.switchField|DEFAULT|
|**330**|*revEnabled*|Rev Enabled |InputType.textField|DEFAULT|
|**340**|*revNumber*|Rev Number |InputType.number|DATA|
|**390**|*glAcProfileHeaderId*|Gl Ac Profile Header Id |defferedSelect|REFERENCE|
|**5350**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5360**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5370**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5380**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>



## Asset Book
An asset book maintains all the asset's financial values, such as asset cost, cost adjustment, accumulated depreciation, net book value, etc. After defining an asset, you need to assign asset books to the asset before creating any transaction. Though the system keeps asset cost and depreciation amounts for all books, it creates accounting entries only for the primary book.
Add an asset with a depreciation start date before the current period. The system will create depreciation for all the past periods in the first period of the depreciation run. Reporting books can be added or removed for assets in "active" or "pending activation" status.


:::tip
The system creates accounting entries only if the below conditions are satisfied
* The asset book is primary
* Depreciate checkbox field is enabled
* Asset is in "active" status
:::

Primary Book
An asset can belong to any number of reporting books but must belong to only one primary book. All new assets must first be added to a primary book and then can be copied to all the required reporting books. As assets are created with reference to a legal organization, the system creates journal entries only in the primary ledger of the assigned legal organization.


<img src="/images/modules/fa/asset/asset_07.PNG" width="800"/>


You can add multiple books to each asset header. Each book shows a book name, depreciation method, start date, original cost, current cost, net book value, etc.

<img src="/images/modules/fa/asset/asset_07a.PNG" width="300"/>

Navigate to the "Asset Book" tab to view/add/update books.  
Click on the add new entity to add a new line. If a line already exists, click on copy entity to copy all the details.
You can enable/disable fields allowed to be copied in the menu configuration.  

<img src="/images/modules/fa/asset/asset_07b.PNG" width="800"/>


**Book Name**: Select a book name. The system will default all the book-related values from the selected book.

**Depreciation Method**: Select a depreciation method you want to use for the book.

<img src="/images/modules/fa/asset/asset_07c.PNG" width="800"/>

**Life Months**: Total expected life of the assets in months. The system uses this value to calculate depreciation methods. If you change this value after the first depreciation, the system will adjust the depreciation amount in the following runs.

**Depreciation Cb**: The field specifies if the system will consider an asset for depreciation or not

The entity group shows information related to shipping inventory organization. 

The reference groups show various ids for reference only. You don't need to enter any information in this section. When you save an Asset for the first time, the system will auto-populate the newly created header id and line ids.

**Asset Status**: This shows the current status of the asset. It's a read-only field, and the system updates the value.
Possible status values are
* Pending Addition: Newly added assets that are not yet activated and thus not considered in depreciation
* Active: Active assets and are eligible for all transactions
* Retired: Assets completed their life and retired
* On Hold: Previously active but currently on hold for depreciation 

**Market Value**: Current market value of the asset. They are used only for reporting purposes.

Scroll left, right, up, and down view all other fields.

<img src="/images/modules/fa/asset/asset_07d.PNG" width="800"/>

**Original Cost**: The original cost of the asset. The cost with which the asset was first added.

**Current Cost**: Current cost of the asset. It's the sum of the original cost and all the cost adjustments created for the asset. The value of the original cost and current cost will be the same for newly created assets without any cost adjustment.

**Accumulated Depreciation**: The total accumulated depreciation for the asset in the given book.

**Net Book Value**: Net book value of the asset.
```
Net Book Value = Current Cost - Accumulated Depreciation
Current Cost   = Original Cost + SumOf(Cost Adjustments)
Net Book Value = Original Cost + SumOf(Cost Adjustments) - Accumulated Depreciation
```       

<img src="/images/modules/fa/asset/asset_07e.PNG" width="800"/>

**Depreciation Start Date**: The date from which depreciation starts. It can be any date in the past or the future.

**Depreciation Limit Value**: Maximum depreciation amount on a single depreciation period. The system calculates the depreciation amount depending on the values entered in the book.
if the depreciation limit amount is entered, then 
```
Depreciation Limit Value = depreciation limit amount
```   
Else if the depreciation limit percentage is entered, then the system calculates the Amount as 
```
Depreciation Limit Value = (Depreciation Limit Percentage / 100)*Current Cost
                   = (Depreciation Limit Percentage / 100)*( Original Cost + SumOf(Cost Adjustments))
```       
else 
```
Depreciation Limit Value = no limit.
```   

<img src="/images/modules/fa/asset/asset_07f.PNG" width="800"/>

**Salvage Amount**: Expected net book value of an asset after all depreciation has been fully expensed. 
The system calculates the salvage amount depending on the values entered in the book.
if salvage value amount is entered, then 
```
Salvage Amount = salvage value amount.
```   
Else if salvage percentage is entered, then the system calculates the Amount as 
```
Salvage Amount = (Salvage Value Percentage / 100)*Current Cost
               = (Salvage Value Percentage / 100)*( Original Cost + SumOf(Cost Adjustments))
```       
else 
```
Salvage Amount = 0
```   

Enter all the other fields and click on the save button to save the asset. The app will post all the data to the server and will show the messages returned from the server.



<details>
<summary>All Fields</summary>

| Sequence | Name                 | Label                    | InputType             | Field Group |
| -------- | ------------------------ | ------------------------ | --------------------- | ----------- |
|**10**|*vvBookName*| Book Name |defferedSelect|DEFAULT|
|**10**|*vvBookType*| Book Type |defferedSelect|CONTROL|
|**20**|*vvFaAssetCategoryId*| Fa Asset Category Id |defferedSelect|REFERENCE|
|**30**|*vvLegalOrgId*| Legal Org Id |defferedSelect|REFERENCE|
|**40**|*vvAssetNumber*| Asset Number |defferedSelect|DATA|
|**50**|*vvAssetName*| Asset Name |defferedSelect|DEFAULT|
|**60**|*vvAssetStatus*| Asset Status |InputType.text|CONTROL|
|**70**|*vvAssetType*| Asset Type |InputType.text|CONTROL|
|**80**|*vvDepreciationMethod*| Depreciation Method |defferedSelect|DEFAULT|
|**90**|*vvDepreciationType*| Depreciation Type |defferedSelect|CONTROL|
|**100**|*vvCalculationBasis*| Calculation Basis |InputType.text|DEFAULT|
|**110**|*vvFactorPercentage*| Factor Percentage |InputType.text|DEFAULT|
|**120**|*vvTotalAdjustedCost*| Total Adjusted Cost |InputType.text|FINANCE|
|**130**|*vvLastDepreciationPeriodNo*| Last Depreciation Period No |InputType.text|FINANCE|
|**140**|*vvCurrentCost*| Current Cost |InputType.text|FINANCE|
|**150**|*vvAccumulatedDepreciation*| Accumulated Depreciation |InputType.text|DEFAULT|
|**160**|*vvNetBookValue*| Net Book Value |InputType.text|DEFAULT|
|**170**|*vvDepreciationPeriods*| Depreciation Periods |InputType.text|FINANCE|
|**180**|*vvDepreciationLimitAmount*| Depreciation Limit Amount |InputType.text|FINANCE|
|**190**|*vvSalvageAmount*| Salvage Amount |InputType.text|FINANCE|
|**200**|*vvRecoverableAmount*| Recoverable Amount |InputType.text|FINANCE|
|**210**|*faAssetBookId*|Fa Asset Book Id |InputType.text|REFERENCE|
|**220**|*srcEntityName*|Src Entity Name |defferedSelect|DEFAULT|
|**230**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**240**|*faBookId*|Fa Book Id |defferedSelect|REFERENCE|
|**250**|*faAssetId*|Fa Asset Id |defferedSelect|REFERENCE|
|**260**|*referece*|Referece |InputType.textField|DEFAULT|
|**270**|*originalCost*|Original Cost |InputType.textField|FINANCE|
|**280**|*marketValue*|Market Value |InputType.textField|DEFAULT|
|**290**|*description*|Description |InputType.textField|DEFAULT|
|**300**|*salvageValueAmount*|Salvage Value Amount |InputType.textField|FINANCE|
|**310**|*glAcProfileHeaderId*|Gl Ac Profile Header Id |defferedSelect|REFERENCE|
|**320**|*salvageValuePercentage*|Salvage Value Percentage |InputType.textField|DEFAULT|
|**330**|*faDepreciationMethodId*|Fa Depreciation Method Id |defferedSelect|REFERENCE|
|**340**|*lifeMonths*|Life Months |InputType.number|DEFAULT|
|**350**|*depreciationCb*|Depreciation Cb |InputType.switchField|DEFAULT|
|**360**|*bookStatus*|Book Status |InputType.select|CONTROL|
|**370**|*dateInService*|Date In Service |InputType.date|DATE|
|**380**|*depreciationStartDate*|Depreciation Start Date |InputType.date|DATE|
|**390**|*depreciationLimitAmount*|Depreciation Limit Amount |InputType.textField|FINANCE|
|**400**|*depreciationLimitPercentage*|Depreciation Limit Percentage |InputType.textField|DEFAULT|
|**5410**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5420**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5430**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5440**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|
</details>



## Components 

<img src="/images/modules/fa/asset/asset_08.PNG" width="800"/>

You can maintain a parent-child relationship for assets by adding component assets to any fixed asset. Currently, the system does not do any group depreciation. However, the group depreciation features will be added in future releases.


To create/view/update an asset component, navigate to the "asset component"  screen from your dashboard/favorite. You can also view/update asset components by navigating to the component tab of an asset.

<img src="/images/modules/fa/asset/asset_08a.PNG" width="350"/>

Enter the organization/asset component details or any other criteria in the search form and click on the search button to view an existing asset component.  

If you navigate to the component tab from the asset screen, the system will show you all the components added to the current asset shown in the basic tab.


<img src="/images/modules/fa/asset/asset_08b.PNG" width="800"/>

Click on the add new entity to add a new line. If a line already exists, click on copy entity to copy all the details.
You can enable/disable fields allowed to be copied in the menu configuration.  


<img src="/images/modules/fa/asset/asset_08c.PNG" width="800"/>

**Asset Number:** Select the child component asset number.
The system will default all the values of the asset, such as asset name, description, asset status,  source type, etc., from the asset.

<img src="/images/modules/fa/asset/asset_08d.PNG" width="800"/>


Scroll left, right, up, and down to view all the details.
The default configuration shows fields in various functional groups, such as

- Reference
- Control
- Etc  



You can configure the application to show which fields should be shown under which group. You can also create new groups as per your inventory requirements.

<img src="/images/modules/fa/asset/asset_08e.PNG" width="800"/>


<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*vvAssetName*| Asset Name |defferedSelect|DEFAULT|
|**10**|*vvAssetNumber*| Asset Number |defferedSelect|DATA|
|**20**|*vvAssetType*| Asset Type |InputType.text|CONTROL|
|**30**|*faAssetComponentId*|Fa Asset Component Id |InputType.text|REFERENCE|
|**40**|*srcEntityName*|Src Entity Name |defferedSelect|DEFAULT|
|**50**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**60**|*faAssetId*|Fa Asset Id |defferedSelect|REFERENCE|
|**70**|*componentAssetId*|Component Asset Id |InputType.text|REFERENCE|
|**80**|*sourceType*|Source Type |InputType.textField|CONTROL|
|**90**|*componentType*|Component Type |InputType.textField|CONTROL|
|**100**|*lineNumber*|Line Number |InputType.number|DATA|
|**110**|*description*|Description |InputType.textField|DEFAULT|
|**120**|*reference1*|Reference 1|InputType.text|REFERENCE|
|**130**|*reference2*|Reference 2|InputType.text|REFERENCE|
|**5140**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5150**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5160**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5170**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>



## Actions

Copy action allows you to copy all the asset details to a new asset. The system creates the new asset with "Copy of {{source asset number}}" as the asset number.
You should change the asset number to a more meaningful value.


<img src="/images/modules/fa/asset/asset_09.PNG" width="800"/>

Other actions are explained in different sections of this document.

