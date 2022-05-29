---
id: depreciation
title: Depreciation
sidebar_label: Depreciation
---

:::caution

This documentation is incomplete.

:::

Depreciation is the process of expensing the total cost of a fixed asset over the asset's life. Depreciation represents how much of an asset's value has been utilized in a given period. It allows organizations to earn revenue from the fixed assets they own by paying for the asset over a certain period of time. The number of years over which an asset is depreciated is maintained in asset books. Similarly, the rule against an asset being depreciated is specified in the depreciation rule. Depreciation rules are assigned to asset books.

:::info

In InoERP, assets are created and maintained at a legal organization level.

:::


## Methods

InoERP provides below four depreciation methods. However, you can also create your own methods using JavaScript APIs.

* Straight-line
* Double declining balance
* Sum of years digits
* Table Rate

### Straight-line
In the Straight-line method, the depreciation of an asset is spread evenly across its life. The value of an asset is reduced uniformly over each period until it reaches its salvage value.
The straight line is the simplest form of depreciation, and the below simple formula calculates the depreciation amount.

if the calculation basis is cost, then 
```
 Depreciation Amount = Current Cost / Life In Months;
```   
if the calculation basis is cost, then 

```
    Depreciation Amount =
      (Recoverable Amount - Accumulated Depreciation) /
      (Life In Months - No Of Completed Deprecated Periods);

    Recoverable amount = Current Cost - Salvage Amount
    Accumulated Depreciation = Sum of all the past depreciation for the asset in the asset book
```     


### Double declining balance
A double-declining balance method is a form of an accelerated depreciation method in which the asset value is depreciated at a higher rate than it is done in the straight-line method. It is frequently used to depreciate fixed assets more heavily in the early years, which allows the company to defer income taxes to later years. The rate is determined by the factor specified in the depreciation method.


if the calculation basis is cost, then 
```
 Depreciation Amount = (Current Cost / Life In Months)*(Depreciation Factor Percentage / 100);
```   
if the calculation basis is cost, then 

```
    Depreciation Amount =
      ((Recoverable Amount - Accumulated Depreciation) /
      (Life In Months - No Of Completed Deprecated Periods))*(Depreciation Factor Percentage / 100);

    Recoverable amount = Current Cost - Salvage Amount
    Accumulated Depreciation = Sum of all the past depreciation for the asset in the asset book
```    


### Sum of years digits
Sum of years digits is another accelerated depreciation method in which the total life determines the acceleration factor against the current period. For example, if an asset has a life of 3 years, the sum of years is 1+2+3 = 6. Fractional parts are built with the year as the numerator and the sum of years as the denominator but in reverse order. Year 1 is 3/6 * depreciable cost; Year 2 is 2/6 * depreciable cost, Year 3 is 1/6 * depreciable cost, etc.


if the calculation basis is cost, then 
```
 Depreciation Amount = (Current Cost / Life In Months)*(factor);

 factor = (Life Years - Current Year) / Sum Of Years;

```   
if the calculation basis is cost, then 

```
    Depreciation Amount =
      ((Recoverable Amount - Accumulated Depreciation) /
      (Life In Months - No Of Completed Deprecated Periods))*(factor);

    factor = (Life Years - Current Year) / Sum Of Years;
    Recoverable amount = Current Cost - Salvage Amount
    Accumulated Depreciation = Sum of all the past depreciation for the asset in the asset book
```    

### Table Rate
The table rate is the most flexible depreciation rule. In this method, you can specify what should be the depreciation rate for a specific period. The sum of all the rate must be 100, and the table must contain periods that is the maximum life of an asset.

if the calculation basis is cost, then 
```
 Depreciation Amount = Current Cost * Rate for the period in the table;
```   
if the calculation basis is cost, then 

```
    Depreciation Amount =
      (Recoverable Amount - Accumulated Depreciation) * Rate for the period in the table;

    Recoverable amount = Current Cost - Salvage Amount
    Accumulated Depreciation = Sum of all the past depreciation for the asset in the asset book

```

## Depreciation Method

To create/view/update the depreciation rule, navigate to the "depreciation rule"  screen from your dashboard/favorite.

<img src="/images/modules/fa/depreciation/rule/rule_02.PNG" width="300"/>

Enter the organization/depreciation rule details or any other criteria in the search form and click on the search button to view an existing depreciation rule.  


If you don't enter organization details, the system will show you all the depreciation rules. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search depreciation rules.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.

<img src="/images/modules/fa/depreciation/rule/rule_03.PNG" width="800"/>

If you click on the create new button, the system will open a simple step form to create a new depreciation rule. You can click on the detail right bottom to view all the fields available for the object. 


To view the search result in a table format, click on the table icon in the bottom left corner.

To view specific depreciation rule details, click on the menu of that record, and click on view/fetch & view.
<img src="/images/modules/fa/depreciation/rule/rule_04a.PNG" width="450"/>

You can also click on the expand icon against any item on the search result screen to view the depreciation rule header details, such as price list name, module, status, currency, etc.

<img src="/images/modules/fa/depreciation/rule/rule_04.PNG" width="350"/>

The system will fetch all the selected document detail line data. The document details are shown either right on the search result screen or on a separate screen, depending on the device size.

**Depreciation Method:** Enter a unique name for the depreciation rule. The field is available in other forms (such as Asset Book) to select.  
**Calculation Basis:** Calculation basis specifies the system's amount to calculate the depreciation amount. The two possible values are 
* Cost
* Net Book Value

<img src="/images/modules/fa/depreciation/rule/rule_06a.PNG" width="800"/>

**Method Type:** Select one of the four methods available in the system
* Straight-line
* Double declining balance
* Sum of years digits
* Table Rate

<img src="/images/modules/fa/depreciation/rule/rule_05.PNG" width="800"/>


Scroll left, right, up, and down to view all the details. The document line and details are shown in a separate tab..
The default configuration shows fields in various functional groups, such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  

<img src="/images/modules/fa/depreciation/rule/rule_06.PNG" width="800"/>

You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.

<img src="/images/modules/fa/depreciation/rule/rule_06a.PNG" width="800"/>


<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*faDepreciationMethodId*|Fa Depreciation Method Id |defferedSelect|REFERENCE|
|**10**|*srcEntityName*|Src Entity Name |defferedSelect|DEFAULT|
|**20**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**30**|*depreciationMethod*|Depreciation Method |InputType.textField|DEFAULT|
|**40**|*methodType*|Method Type |InputType.select|CONTROL|
|**50**|*calculationBasis*|Calculation Basis |InputType.select|DEFAULT|
|**60**|*lifeMonth*|Life Month |InputType.number|DEFAULT|
|**70**|*factorPercentage*|Factor Percentage |InputType.number|DEFAULT|
|**80**|*reducingBalanceRate*|Reducing Balance Rate |InputType.textField|FINANCE|
|**90**|*status*|Status |InputType.select|CONTROL|
|**100**|*description*|Description |InputType.textField|DEFAULT|
|**5110**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5120**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5130**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5140**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>



### Rates
Rule lines are applicable only for the "Table Rate" type of depreciation method. If you select the method type as "Table Rate," then you must enter the rate for each period in the rule lines,

<img src="/images/modules/fa/depreciation/rule/rule_07.PNG" width="800"/>

You can add multiple rule lines to each rule header. Each line specifies the period and the depreciation rate for that period.

<img src="/images/modules/fa/depreciation/rule/rule_07a.PNG" width="300"/>

Navigate to the "rule lines" tab to view/add/update books.  
Click on the add new entity to add a new line. If a line already exists, click on copy entity to copy all the details.
You can enable/disable fields allowed to be copied in the menu configuration.  

<img src="/images/modules/fa/depreciation/rule/rule_07b.PNG" width="800"/>


**year**: Enter a year number. It's a mandatory field.

**period**: Enter a value between 1 and 12. It's also a mandatory field.

<img src="/images/modules/fa/depreciation/rule/rule_07c.PNG" width="800"/>


**Monthly Period**: A read-only field. The system calculates the monthly period by the below formula.

```
 Monthly Period = ((Year - 1) * 12) + Period;
```   

Scroll left, right, up, and down view all other fields.

<img src="/images/modules/fa/depreciation/rule/rule_07d.PNG" width="800"/>

Enter all the other fields and click on the save button to save the asset. The app will post all the data to the server and will show the messages returned from the server.



<details>
<summary>All Fields</summary>

| Sequence | Name                 | Label                    | InputType             | Field Group |
| -------- | ------------------------ | ------------------------ | --------------------- | ----------- |
|**10**|*vvMonthlyPeriodNo*| Monthly Period No |InputType.text|FINANCE|
|**10**|*faDepreciationMethodRateId*|Fa Depreciation Method Rate Id |InputType.text|REFERENCE|
|**20**|*srcEntityName*|Src Entity Name |defferedSelect|DEFAULT|
|**30**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**40**|*faDepreciationMethodId*|Fa Depreciation Method Id |defferedSelect|REFERENCE|
|**50**|*year*|Year |InputType.number|DEFAULT|
|**60**|*period*|Period |InputType.number|FINANCE|
|**70**|*rate*|Rate |InputType.textField|FINANCE|
|**80**|*description*|Description |InputType.textField|DEFAULT|
|**5090**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5100**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5110**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5120**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|
</details>

## Run Depreciation

You can run depreciation for an asset in the asset action screen. The application also allows you to run depreciation for all the assets in an asset category and all the assets in a legal organization.
<img src="/images/modules/fa/depreciation/transaction/transaction_01a.PNG" width="800"/>

**Run Asset Depreciation**: Run the depreciation for the current asset in all the books. The system creates depreciation transactions for all the books, but it does not generate any accounting entries.

**Run Category Depreciation**: System runs the depreciation for all the assets with the same asset category as the current asset. 

**Run Legal Org Depreciation**: System runs the depreciation for all the assets with the same legal organization as the current asset. 

You can also schedule/run the depreciation using the depreciation program.



## View Transaction 

The system creates depreciation transactions for each asset and each book combination. You can run depreciation only once in a period. If required, you can generate depreciation adjustments. However, the system does not allow you to update/delete any asset depreciation transaction.

<img src="/images/modules/fa/depreciation/transaction/transaction_01.PNG" width="300"/>

Navigate to the "depreciation transaction"  screen from your dashboard/favorite to view a depreciation transaction.


<img src="/images/modules/fa/depreciation/transaction/transaction_02.PNG" width="800"/>

Enter the organization/depreciation transaction details or any other criteria in the search form and click on the search button to view an existing depreciation transaction.  


<img src="/images/modules/fa/depreciation/transaction/transaction_03.PNG" width="800"/>

The depreciation transaction is a customized view of Fa transaction screens. So, you can also use the FA transaction screen to view all the depreciation transactions. Enter the transaction type as depreciation.


<img src="/images/modules/fa/depreciation/transaction/transaction_04.PNG" width="800"/>


Scroll left, right, up, and down to view all the details.
The default configuration shows fields in various functional groups, such as

- Reference
- Control
- Etc  

<img src="/images/modules/fa/depreciation/transaction/transaction_05.PNG" width="800"/>



You can configure the application to show which fields should be shown under which group. You can also create new groups as per your inventory requirements.

<img src="/images/modules/fa/depreciation/transaction/transaction_06.PNG" width="800"/>


<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*vvGlLedgerId*| Gl Ledger Id |defferedSelect|REFERENCE|
|**10**|*vvGlDocumentType*| Gl Document Type |InputType.text|CONTROL|
|**20**|*vvBookName*| Book Name |defferedSelect|DEFAULT|
|**30**|*vvBookType*| Book Type |defferedSelect|CONTROL|
|**40**|*vvFaAssetCategoryId*| Fa Asset Category Id |defferedSelect|REFERENCE|
|**50**|*vvLegalOrgId*| Legal Org Id |defferedSelect|REFERENCE|
|**60**|*vvAssetNumber*| Asset Number |defferedSelect|DATA|
|**70**|*vvAssetName*| Asset Name |defferedSelect|DEFAULT|
|**80**|*vvAssetStatus*| Asset Status |InputType.text|CONTROL|
|**90**|*vvAssetType*| Asset Type |InputType.text|CONTROL|
|**100**|*vvDepreciationCb*| Depreciation Cb |InputType.text|DEFAULT|
|**110**|*faAssetTransactionId*|Fa Asset Transaction Id |InputType.text|REFERENCE|
|**120**|*srcEntityName*|Src Entity Name |defferedSelect|DEFAULT|
|**130**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**140**|*faAssetId*|Fa Asset Id |defferedSelect|REFERENCE|
|**150**|*faAssetBookId*|Fa Asset Book Id |InputType.text|REFERENCE|
|**160**|*transactionType*|Transaction Type |InputType.select|CONTROL|
|**170**|*quantity*|Quantity |InputType.textField|DATA|
|**180**|*amount*|Amount |InputType.textField|FINANCE|
|**190**|*amount10*|Amount 10|InputType.textField|FINANCE|
|**200**|*amount20*|Amount 20|InputType.textField|FINANCE|
|**210**|*amount30*|Amount 30|InputType.textField|FINANCE|
|**220**|*amount40*|Amount 40|InputType.textField|FINANCE|
|**230**|*amount50*|Amount 50|InputType.textField|FINANCE|
|**240**|*amount60*|Amount 60|InputType.textField|FINANCE|
|**250**|*faBookId*|Fa Book Id |defferedSelect|REFERENCE|
|**260**|*glPeriodId*|Gl Period Id |defferedSelect|REFERENCE|
|**270**|*glAcProfileHeaderId*|Gl Ac Profile Header Id |defferedSelect|REFERENCE|
|**280**|*glJournalHeaderId*|Gl Journal Header Id |InputType.text|REFERENCE|
|**290**|*glJournalLineId*|Gl Journal Line Id |InputType.text|REFERENCE|
|**300**|*description*|Description |InputType.textField|DEFAULT|
|**310**|*depreciationPeriodNo*|Depreciation Period No |InputType.number|FINANCE|
|**320**|*referenceType*|Reference Type |InputType.textField|CONTROL|
|**330**|*referenceKeyName*|Reference Key Name |InputType.text|REFERENCE|
|**340**|*referenceKeyValue*|Reference Key Value |InputType.text|REFERENCE|
|**5350**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5360**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5370**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5380**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>
