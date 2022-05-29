---
id: currency
title: Currency
sidebar_label: Currency
---


:::caution

This documentation is incomplete.

:::

<img src="/images/modules/gl/currency/gl_currency_01.PNG" width="350"/>


To create/view/update a currency, navigate to the "currency"  screen from your dashboard/favorite.

Enter the organization/currency details or any other criteria in the search form and click on the search button to view an existing currency.  


<img src="/images/modules/gl/currency/gl_currency_02.PNG" width="800"/>

If you don't enter organization details, the system will show you all the currency. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search currency.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.


If you click on the create new button, the system will open a simple step form to create a new currency. You can click on the detail right bottom to view all the fields available for the object. 

<img src="/images/modules/gl/currency/gl_currency_03.PNG" width="350"/>

To view the search result in a table format, click on the table icon available on the bottom left corner.

To view specific currency details, click on the menu of that record, and click on view/fetch & view.
<img src="/images/modules/gl/currency/gl_currency_04a.PNG" width="350"/>


You can also click on the expand icon against any item on the search result screen to view the currency header details, such as currency name, balancing segment, etc.

<img src="/images/modules/gl/currency/gl_currency_04.PNG" width="800"/>

The system will fetch all the selected currency data. Depending on the device size, the cost details are shown either right to the search result screen or on a separate screen.


<img src="/images/modules/gl/currency/gl_currency_05.PNG" width="800"/>


Scroll left, right, up, down to view all the details. The document line and details are shown in a separate tab..
The default configuration shows fields in various functional groups such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  



You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.

<img src="/images/modules/gl/currency/gl_currency_06.PNG" width="800"/>


<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*glCurrencyId*|Gl Currency Id |InputType.text|REFERENCE|
|**10**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**20**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**30**|*currencyCode*|Currency Code |deferredSelect|FINANCE|
|**40**|*currencySymbol*|Currency Symbol |InputType.textField|FINANCE|
|**50**|*fromDate*|From Date |InputType.date|DATE|
|**60**|*toDate*|To Date |InputType.date|DATE|
|**70**|*enabledCb*|Enabled Cb |InputType.switchField|DEFAULT|
|**80**|*currencyFlagCb*|Currency Flag Cb |InputType.switchField|FINANCE|
|**90**|*currencyDescription*|Currency Description |InputType.textField|FINANCE|
|**100**|*issuingTerritoryCode*|Issuing Territory Code |InputType.textField|DEFAULT|
|**110**|*precision*|Precision |InputType.number|DEFAULT|
|**120**|*extendedPrecision*|Extended Precision |InputType.number|DEFAULT|
|**5130**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5140**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5150**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5160**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>