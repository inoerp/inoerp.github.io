---
id: price-list
title: Price List
sidebar_label: Price List
---

:::caution

This documentation is incomplete.

:::

A price list is a list of prices assigned to a given set of items. 

Price lists are used in Sales and Purchasing to default prices on sales orders and purchase orders. Price lists are usually maintained for a particular customer or a group of customers for a specific duration.

 Each price list is divided into 2 sections  
 - ***Header***:  
 A header contains basic information that applies to all the items in the price list, such as Price  List Name, Currency, etc.
  - ***Line***:  
 A line contains item and price details. Each header can have multiple lines.


## Header


To create/view/update Price List, navigate to the "Price List"  screen from your dashboard/favorite.


<img src="/images/modules/mdm/price_list/price_list_01.PNG" width="350"/>

Enter the organization/Price List details or any other criteria in the search form and click on the search button to view an existing Price List.  


<img src="/images/modules/mdm/price_list/price_list_02.PNG" width="800"/>

If you don't enter organization details, the system will show you all the Price Lists. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search Price Lists.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.


If you click on the create new button, the system will open a simple step form to create a new Price List. You can click on the detail right bottom to view all the fields available for the object. 

<img src="/images/modules/mdm/price_list/price_list_03.PNG" width="350"/>

To view the search result in a table format, click on the table icon in the bottom left corner.

To view specific Price List details, click on the menu of that record, and click on view/fetch & view.
<img src="/images/modules/mdm/price_list/price_list_04a.PNG" width="450"/>

You can also click on the expand icon against any item on the search result screen to view the Price List header details, such as price list name, module, status, currency, etc.

<img src="/images/modules/mdm/price_list/price_list_04.PNG" width="800"/>

The system will fetch all the selected document detail line data. The document details are shown either right to the search result screen or in a separate screen, depending on the device size.


<img src="/images/modules/mdm/price_list/price_list_05.PNG" width="800"/>


Scroll left, right, up, down to view all the details. The document line and details are shown in a separate tab..
The default configuration shows fields in various functional groups such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  

<img src="/images/modules/mdm/price_list/price_list_06.PNG" width="800"/>


<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*mdmPriceListHeaderId*|Mdm Price List Header Id |deferredSelect|REFERENCE|
|**10**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**20**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**30**|*priceList*|Price List |InputType.textField|FINANCE|
|**40**|*moduleName*|Module Name |deferredSelect|DEFAULT|
|**50**|*currencyCode*|Currency Code |deferredSelect|FINANCE|
|**60**|*description*|Description |InputType.textField|DEFAULT|
|**70**|*status*|Status |InputType.textField|CONTROL|
|**80**|*allowMutliCurrencyCb*|Allow Mutli Currency Cb |InputType.switchField|FINANCE|
|**90**|*currencyConversionType*|Currency Conversion Type |InputType.textField|CONTROL|
|**140**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**5100**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5110**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5120**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5130**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>



## Lines - Item

<img src="/images/modules/mdm/price_list/price_list_07.PNG" width="800"/>


You can add multiple lines to each Price List header. Each Price List line shows an item, UOM, product description details.

<img src="/images/modules/mdm/price_list/price_list_07a.PNG" width="400"/>

Navigate to the lines tab to view/add/update lines.  
Click on the add new entity to add a new line. If a line already exists, click on copy entity to copy all the details.
You can enable/disable fields allowed to be copied in the menu configuration.  

<img src="/images/modules/mdm/price_list/price_list_07b.PNG" width="800"/>


**Unit Price**: Price of 1 unit of the item.  

**Item**: Inventory item number.

<img src="/images/modules/mdm/price_list/price_list_07c.PNG" width="800"/>


The entity group shows information related to shipping inventory organization. 

The reference groups show various ids for reference only. You don't need to enter any information in this section. When you save a Price List for the first time, the system will auto-populate the newly created header id and line ids.




Scroll left, right, up, and down view all other fields.

<img src="/images/modules/mdm/price_list/price_list_07d.PNG" width="800"/>

Enter all the other fields and click on the save button to save the Price List. The app will post all the data to the server and will show the messages returned from the server.



<details>
<summary>All Fields</summary>

| Sequence | Name                 | Label                    | InputType             | Field Group |
| -------- | ------------------------ | ------------------------ | --------------------- | ----------- |
|**10**|*vvOrgCode*| Org Code |deferredSelect|ENTITY|
|**10**|*vvItemNumber*| Item Number |deferredSelect|DEFAULT|
|**20**|*vvItemDescription*| Item Description |deferredSelect|DEFAULT|
|**30**|*mdmPriceListLineId*|Mdm Price List Line Id |InputType.text|REFERENCE|
|**40**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**50**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**60**|*mdmPriceListHeaderId*|Mdm Price List Header Id |deferredSelect|REFERENCE|
|**70**|*lineType*|Line Type |InputType.select|CONTROL|
|**80**|*invOrgId*|Inv Org Id |deferredSelect|REFERENCE|
|**90**|*invItemMasterId*|Inv Item Master Id |deferredSelect|REFERENCE|
|**100**|*uomCode*|Uom Code |deferredSelect|DEFAULT|
|**110**|*unitPrice*|Unit Price |InputType.number|FINANCE|
|**120**|*formula*|Formula |InputType.textField|DEFAULT|
|**130**|*effectiveStartDate*|Effective Start Date |InputType.date|DATE|
|**140**|*effectiveEndDate*|Effective End Date |InputType.date|DATE|
|**150**|*usePriceBreakCb*|Use Price Break Cb |InputType.switchField|FINANCE|
|**200**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**5160**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5170**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5180**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5190**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|
</details>



## Actions

Copy action allows you to copy all the price list details, including line items and prices, to a new price list.


<img src="/images/modules/mdm/price_list/price_list_09.PNG" width="600"/>

Click on the copy button to copy all price list information to a new price list.


## Discount 

<img src="/images/modules/mdm/discount/discount_01.PNG" width="350"/>


You can offer a discount to customers on specific orders by using discount codes.

To create/view/update a discount, navigate to the "discount"  screen from your dashboard/favorite.

<img src="/images/modules/mdm/discount/discount_02.PNG" width="800"/>


Enter the organization/discount details or any other criteria in the search form and click on the search button to view an existing discount.  



If you don't enter organization details, the system will show you all the discounts. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search discounts.  

<img src="/images/modules/mdm/discount/discount_03.PNG" width="350"/>

The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.


If you click on the create new button, the system will open a simple step form to create a new discount. You can click on the detail right bottom to view all the fields available for the object. 
<img src="/images/modules/mdm/discount/discount_04.PNG" width="800"/>


To view the search result in a table format, click on the table icon in the bottom left corner.

To view specific discount details, click on the menu of that record, and click on view/fetch & view.
<img src="/images/modules/mdm/discount/discount_04a.PNG" width="400"/>


You can also click on the expand icon against any item on the search result screen to view the discount header details, such as discount, description, etc.


The system will fetch all the selected entity data. The entity details are shown either right to the search result screen or in a separate screen, depending on the device size.

<img src="/images/modules/mdm/discount/discount_05.PNG" width="800"/>



Scroll left, right, up, down to view all the details. The document line and details are shown in a separate tab..
The default configuration shows fields in various functional groups such as

- Reference
- Control
- Etc  



You can configure the application to show which fields should be shown under which group. You can also create new groups as per your inventory requirements.

<img src="/images/modules/mdm/discount/discount_06.PNG" width="800"/>


<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*mdmDiscountHeaderId*|Mdm Discount Header Id |InputType.text|REFERENCE|
|**10**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**20**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**30**|*discountName*|Discount Name |InputType.textField|FINANCE|
|**40**|*discountCode*|Discount Code |InputType.textField|FINANCE|
|**50**|*moduleCode*|Module Code |InputType.textField|DEFAULT|
|**60**|*description*|Description |InputType.textField|DEFAULT|
|**70**|*status*|Status |InputType.textField|CONTROL|
|**80**|*discountType*|Discount Type |InputType.textField|CONTROL|
|**90**|*discountPercentage*|Discount Percentage |InputType.textField|FINANCE|
|**100**|*discountAmount*|Discount Amount |InputType.textField|FINANCE|
|**110**|*discountFormula*|Discount Formula |InputType.textField|FINANCE|
|**120**|*checkConditionCb*|Check Condition Cb |InputType.switchField|DEFAULT|
|**170**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**5130**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5140**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5150**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5160**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>

