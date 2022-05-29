---
id: ledger
title: Ledger
sidebar_label: Ledger
---

:::caution

This documentation is incomplete.

:::


<img src="/images/modules/gl/ledger/gl_ledger_01.PNG" width="350"/>


A ledger is an object that classifies and stores all financial transactions in a legal entity. All journals in a legal entity are created with reference to a ledger. Ledgers have mainly three primary components
-   **Chart of Account**
-   **Calendar**
-   **Currency**  

In combination with **Accounting Profile** and **Journal Profile**, the ledger controls how and when journals are created for an operational transaction.


To create/view/update a ledger, navigate to the "ledger"  screen from your dashboard/favorite.

Enter the organization/ledger details or any other criteria in the search form and click on the search button to view an existing ledger.  


<img src="/images/modules/gl/ledger/gl_ledger_02.PNG" width="800"/>

If you don't enter organization details, the system will show you all the ledgers. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search ledgers.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.


If you click on the create new button, the system will open a simple step form to create a new ledger. You can click on the detail right bottom to view all the fields available for the object. 

<img src="/images/modules/gl/ledger/gl_ledger_03.PNG" width="350"/>

To view the search result in a table format, click on the table icon in the bottom left corner.

To view specific ledger details, click on the menu of that record, and click on view/fetch & view.
<img src="/images/modules/gl/ledger/gl_ledger_04a.PNG" width="350"/>


You can also click on the expand icon against any item on the search result screen to view the ledger header details, such as ledger name, balancing segment, etc.

<img src="/images/modules/gl/ledger/gl_ledger_04.PNG" width="800"/>

The system will fetch all the selected ledger data. Depending on the device size, the cost details are shown either right to the search result screen or on a separate screen.


<img src="/images/modules/gl/ledger/gl_ledger_05.PNG" width="800"/>


Scroll left, right, up, down to view all the details. The document line and details are shown in a separate tab..
The default configuration shows fields in various functional groups such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  



You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.

<img src="/images/modules/gl/ledger/gl_ledger_06.PNG" width="800"/>


<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*glLedgerId*|Gl Ledger Id |InputType.text|REFERENCE|
|**10**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**20**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**30**|*ledger*|Ledger |InputType.textField|FINANCE|
|**40**|*glCoaId*|Gl Coa Id |deferredSelect|REFERENCE|
|**50**|*description*|Description |InputType.textField|DEFAULT|
|**60**|*glCalendarHeaderId*|Gl Calendar Header Id |deferredSelect|REFERENCE|
|**70**|*currencyCode*|Currency Code |deferredSelect|FINANCE|
|**80**|*calendarOptionLineCode*|Calendar Option Line Code |InputType.textField|DEFAULT|
|**90**|*futureEnabledPeriods*|Future Enabled Periods |InputType.number|FINANCE|
|**100**|*currencyBalancingAcId*|Currency Balancing Ac Id |deferredSelect|REFERENCE|
|**110**|*retainedEarningsAcId*|Retained Earnings Ac Id |deferredSelect|REFERENCE|
|**120**|*suspenseAcId*|Suspense Ac Id |deferredSelect|REFERENCE|
|**130**|*revEnabled*|Rev Enabled |InputType.checkBox|DEFAULT|
|**140**|*revNumber*|Rev Number |InputType.number|DATA|
|**5150**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5160**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5170**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5180**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>