---
id: configuration
title: Configuration
sidebar_label: Configuration
---

Use the asset accounting configurations to manage all aspects of your fixed asset accounting processes. Asset accounting setups default values from various settings to documents and transactions to simplify data entry and automate various transactions.

## Asset Category

Asset category allows you to group similar assets and thereby allows organizations to activate and create depreciation of several assets together. The asset category also provides accounts for various asset transactions.

Asset category is a mandatory field on assets. Thus, you need to define at least one asset category before creating an asset in the system.


To view/create/update an asset category, navigate to the "asset category" search screen from your dashboard/favorite.

<img src="/images/modules/fa/config/category/category_01.PNG" width="300"/>

Enter the organization/asset category details or any other criteria in the search form and click on the search button to view an existing asset category.  
Click on create a new button to create a new asset category; by manually entering all the information,

<img src="/images/modules/fa/config/category/category_02.PNG" width="800"/>

If you don't enter organization details, the system will show you all the asset categories. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search asset categories.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.

<img src="/images/modules/fa/config/category/category_03.PNG" width="350"/>

To view the search result in a table format, click on the table icon available in the bottom left corner.

To open a specific asset category, click on the menu of that record, and click on view/fetch & view.

You can also click on the expand icon against any item on the search result screen to view the asset category details such as business unit name, payment term, price list, etc.

<img src="/images/modules/fa/config/category/category_04.PNG" width="800"/>

The system will fetch all the data related to the selected asset category. The asset category details are shown either right to the search result screen or on a separate screen, depending on the device size.
<img src="/images/modules/fa/config/category/category_04a.PNG" width="400"/>


Scroll left, right, up, and down to view all the details. The asset category line and details are shown in a separate tab.
The default configuration shows fields in various functional groups, such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  


<img src="/images/modules/fa/config/category/category_05.PNG" width="800"/>

You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.

<img src="/images/modules/fa/config/category/category_06.PNG" width="800"/>

<details>
<summary>All Fields</summary>

| Name     | Sequence                   | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*faAssetCategoryId*|Fa Asset Category Id |defferedSelect|REFERENCE|
|**10**|*srcEntityName*|Src Entity Name |defferedSelect|DEFAULT|
|**20**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**30**|*assetCategory*|Asset Category |InputType.textField|DEFAULT|
|**40**|*segment1*|Segment 1|InputType.textField|FINANCE|
|**50**|*segment2*|Segment 2|InputType.textField|FINANCE|
|**60**|*segment3*|Segment 3|InputType.textField|FINANCE|
|**70**|*categoryType*|Category Type |InputType.select|CONTROL|
|**80**|*description*|Description |InputType.textField|DEFAULT|
|**90**|*enabledCb*|Enabled Cb |InputType.switchField|DEFAULT|
|**100**|*capitalizeCb*|Capitalize Cb |InputType.switchField|DEFAULT|
|**110**|*inPhysicalInvCb*|In Physical Inv Cb |InputType.switchField|DEFAULT|
|**120**|*glAcProfileHeaderId*|Gl Ac Profile Header Id |defferedSelect|REFERENCE|
|**5130**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5140**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5150**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5160**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>


## Book

Asset books maintain asset costs and the accumulated depreciation. You can create and assign several asset books to an asset. 
The system maintains deprecation for each asset in all assigned asset books. However, the system creates accounting entries for only the primary asset book. You must assign one primary asset book to each asset before running depreciation for that asset.
Each asset book contains its own depreciation rules, cost, and other associated settings. 


To view/create/update an asset book, navigate to the "asset book" search screen from your dashboard/favorite.

<img src="/images/modules/fa/config/book/book_01.PNG" width="300"/>

Enter the organization/asset book details or any other criteria in the search form and click on the search button to view an existing asset book.  
Click on create a new button to create a new asset book; by manually entering all the information,

<img src="/images/modules/fa/config/book/book_02.PNG" width="800"/>

If you don't enter organization details, the system will show you all the asset books. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search asset books.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.

<img src="/images/modules/fa/config/book/book_03.PNG" width="350"/>

To view the search result in a table format, click on the table icon available in the bottom left corner.

To open a specific asset book, click on the menu of that record, and click on view/fetch & view.

You can also click on the expand icon against any item on the search result screen to view the asset book details such as business unit name, payment term, price list, etc.

<img src="/images/modules/fa/config/book/book_04.PNG" width="800"/>

The system will fetch all the data related to the selected asset book. Depending on the device size, the asset book details are shown either right to the search result screen or on a separate screen.
<img src="/images/modules/fa/config/book/book_04a.PNG" width="400"/>


Scroll left, right, up, and down to view all the details. The asset book line and details are shown in a separate tab.
The default configuration shows fields in various functional groups, such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  


<img src="/images/modules/fa/config/book/book_05.PNG" width="800"/>

You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.

<img src="/images/modules/fa/config/book/book_06.PNG" width="500"/>

<details>
<summary>All Fields</summary>

| Name     | Sequence                   | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*faBookId*|Fa Book Id |defferedSelect|REFERENCE|
|**10**|*srcEntityName*|Src Entity Name |defferedSelect|DEFAULT|
|**20**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**30**|*bookName*|Book Name |InputType.textField|DEFAULT|
|**40**|*bookType*|Book Type |InputType.select|CONTROL|
|**50**|*primaryFaAssetBookId*|Primary Fa Asset Book Id |InputType.text|REFERENCE|
|**60**|*description*|Description |InputType.textField|DEFAULT|
|**70**|*inactiveOn*|Inactive On |InputType.date|DEFAULT|
|**80**|*allowGlPostingCb*|Allow Gl Posting Cb |InputType.switchField|DEFAULT|
|**90**|*faCalendarCode*|Fa Calendar Code |InputType.textField|DEFAULT|
|**100**|*revalueAccumDepriciationCb*|Revalue Accum Depriciation Cb |InputType.switchField|DEFAULT|
|**110**|*retireRevaluationReserveCb*|Retire Revaluation Reserve Cb |InputType.switchField|DEFAULT|
|**120**|*revalueYtdDepriciationCb*|Revalue Ytd Depriciation Cb |InputType.switchField|DEFAULT|
|**130**|*saleProceedsGainAcId*|Sale Proceeds Gain Ac Id |defferedSelect|REFERENCE|
|**140**|*saleProceedsLossAcId*|Sale Proceeds Loss Ac Id |defferedSelect|REFERENCE|
|**150**|*saleProceedsClearingAcId*|Sale Proceeds Clearing Ac Id |defferedSelect|REFERENCE|
|**160**|*removalCostGainAcId*|Removal Cost Gain Ac Id |defferedSelect|REFERENCE|
|**170**|*removalCostLossAcId*|Removal Cost Loss Ac Id |defferedSelect|REFERENCE|
|**180**|*removalCostClearingAcId*|Removal Cost Clearing Ac Id |defferedSelect|REFERENCE|
|**190**|*nbvRetiredGainAcId*|Nbv Retired Gain Ac Id |defferedSelect|REFERENCE|
|**200**|*nbvRetiredLossAcId*|Nbv Retired Loss Ac Id |defferedSelect|REFERENCE|
|**210**|*revalReserveRetiredGainAcId*|Reval Reserve Retired Gain Ac Id |defferedSelect|REFERENCE|
|**220**|*revalReserveRetiredLossAcId*|Reval Reserve Retired Loss Ac Id |defferedSelect|REFERENCE|
|**230**|*deffDepriciationReserveAcId*|Deff Depriciation Reserve Ac Id |defferedSelect|REFERENCE|
|**240**|*deffDepriciationExpenseAcId*|Deff Depriciation Expense Ac Id |defferedSelect|REFERENCE|
|**250**|*deffDepriciationAdjustmentAcId*|Deff Depriciation Adjustment Ac Id |defferedSelect|REFEREN
|**260**|*defaultAcId*|Default Ac Id |defferedSelect|PLANNING|
|**310**|*glAcProfileHeaderId*|Gl Ac Profile Header Id |defferedSelect|REFERENCE|
|**5270**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5280**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5290**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5300**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>
