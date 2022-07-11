---
id: coa
title: Chart Of Accounts
sidebar_label: Chart Of Accounts
---


:::caution

This documentation is incomplete.

:::

<img src="/images/modules/gl/coa/coa_99.PNG" width="750"/>


A chart of accounts lists all the accounts created in an organization for recording transactions in its general ledger. Accounts can only be added to the chart of accounts as needed; they can not be removed, especially if any transaction had been posted to the account. However, the system allows you to update certain accounts' values (such as Status, Description, etc.).

In InoERP, Chart Of Accounts are created in 3 steps
1. Create Chart Of Accounts Structure
2. Create values for each element of the Chart Of Accounts structure
3. Create Chart Of Account Combinations




## COA Structure


To create/view/update a COA, navigate to the "COA"  screen from your dashboard/favorite.


<img src="/images/modules/gl/coa/structure/gl_coa_01.PNG" width="350"/>

Enter the organization/COA details or any other criteria in the search form and click on the search button to view an existing COA.  


<img src="/images/modules/gl/coa/structure/gl_coa_02.PNG" width="800"/>

If you don't enter organization details, the system will show you all the COAs. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search COAs.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.


If you click on the create new button, the system will open a simple step form to create a new COA. You can click on the detail right bottom to view all the fields available for the object. 

<img src="/images/modules/gl/coa/structure/gl_coa_03.PNG" width="350"/>

To view the search result in a table format, click on the table icon available on the bottom left corner.

To view specific COA details, click on the menu of that record, and click on view/fetch & view.
<img src="/images/modules/gl/coa/structure/gl_coa_04a.PNG" width="350"/>


You can also click on the expand icon against any item on the search result screen to view the COA header details, such as COA name, balancing segment, etc.

<img src="/images/modules/gl/coa/structure/gl_coa_04.PNG" width="800"/>

The system will fetch all the selected COA data. Depending on the device size, the cost details are shown either right to the search result screen or on a separate screen.


<img src="/images/modules/gl/coa/structure/gl_coa_05.PNG" width="800"/>


Scroll left, right, up, down to view all the details. The document line and details are shown in a separate tab..
The default configuration shows fields in various functional groups such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  



You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.

<img src="/images/modules/gl/coa/structure/gl_coa_06.PNG" width="800"/>


<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*glCoaId*|Gl Coa Id |deferredSelect|REFERENCE|
|**10**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**20**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**30**|*coaName*|Coa Name |InputType.textField|DEFAULT|
|**40**|*description*|Description |InputType.textField|DEFAULT|
|**50**|*balancing*|Balancing |InputType.select|DEFAULT|
|**60**|*costCenter*|Cost Center |InputType.select|FINANCE|
|**70**|*naturalAccount*|Natural Account |InputType.select|FINANCE|
|**80**|*interCompany*|Inter Company |InputType.select|FINANCE|
|**90**|*coaSegment1*|Coa Segment 1|InputType.textField|FINANCE|
|**100**|*coaSegment2*|Coa Segment 2|InputType.textField|FINANCE|
|**110**|*coaSegment3*|Coa Segment 3|InputType.textField|FINANCE|
|**120**|*coaSegment4*|Coa Segment 4|InputType.textField|FINANCE|
|**130**|*coaSegment5*|Coa Segment 5|InputType.textField|FINANCE|
|**140**|*coaSegment6*|Coa Segment 6|InputType.textField|FINANCE|
|**150**|*coaSegment7*|Coa Segment 7|InputType.textField|FINANCE|
|**160**|*coaSegment8*|Coa Segment 8|InputType.textField|FINANCE|
|**170**|*coaSeparator*|Coa Separator |InputType.select|DEFAULT|
|**180**|*allowDynamicInsert*|Allow Dynamic Insert |InputType.select|DEFAULT|
|**190**|*status*|Status |InputType.select|CONTROL|
|**200**|*revEnabledCb*|Rev Enabled Cb |InputType.switchField|DEFAULT|
|**210**|*revNumber*|Rev Number |InputType.number|DATA|
|**5220**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5230**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5240**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5250**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>






## Segment Values

To create/view/update segment values, navigate to the "System Value Group Header"  screen from your dashboard/favorite.


<img src="/images/modules/gl/coa/segment/coa_segment_01.PNG" width="400"/>

Enter the header code details or any other criteria in the search form and click on the search button to view existing segment values.  


:::info HeaderCodes for COA values

- COA_SEGMENT1: Values for the chart of account segment 1
- COA_SEGMENT2: Values for the chart of account segment 2
- COA_SEGMENT3: Values for the chart of account segment 3
- COA_SEGMENT4: Values for the chart of account segment 4
- COA_SEGMENT5: Values for the chart of account segment 5
- COA_SEGMENT6: Values for the chart of account segment 6
- COA_SEGMENT7: Values for the chart of account segment 7
- COA_SEGMENT8: Values for the chart of account segment 8

:::


<img src="/images/modules/gl/coa/segment/coa_segment_02.PNG" width="800"/>

If you don't enter any search criteria, the system will show you all the segment values. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search segment values.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.


If you click on the create new button, the system will open a simple step form to create new segment values. You can click on the detail right bottom to view all the fields available for the object. 

<img src="/images/modules/gl/coa/segment/coa_segment_03.PNG" width="350"/>

To view the search result in a table format, click on the table icon in the bottom left corner.

To view specific segment values details, click on the menu of that record, and click on view/fetch & view.
<img src="/images/modules/gl/coa/segment/coa_segment_04a.PNG" width="350"/>


You can also click on the expand icon against any item on the search result screen to view the segment values header details, such as segment values name, balancing segment, etc.

<img src="/images/modules/gl/coa/segment/coa_segment_04.PNG" width="800"/>

The system will fetch all the selected segment values data. Depending on the device size, the cost details are shown either right to the search result screen or on a separate screen.


<img src="/images/modules/gl/coa/segment/coa_segment_05.PNG" width="800"/>


Scroll left, right, up, down to view all the details. The document line and details are shown in a separate tab..
The default configuration shows fields in various functional groups such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  



You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.


<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*sysValueGroupHeaderId*|Sys Value Group Header Id |InputType.text|REFERENCE|
|**10**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**20**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**30**|*headerCode*|Header Code |InputType.textField|DEFAULT|
|**40**|*accessLevel*|Access Level |InputType.textField|DEFAULT|
|**50**|*valueGroup*|Value Group |InputType.textField|DEFAULT|
|**60**|*description*|Description |InputType.textField|DEFAULT|
|**70**|*moduleCode*|Module Code |InputType.textField|DEFAULT|
|**80**|*validationType*|Validation Type |InputType.textField|CONTROL|
|**90**|*fieldType*|Field Type |InputType.textField|CONTROL|
|**100**|*minSize*|Min Size |InputType.number|PLANNING|
|**110**|*maxSize*|Max Size |InputType.number|PLANNING|
|**120**|*minValue*|Min Value |InputType.number|PLANNING|
|**130**|*maxValue*|Max Value |InputType.number|PLANNING|
|**140**|*fixedSize*|Fixed Size |InputType.number|DEFAULT|
|**150**|*numberOnlyCb*|Number Only Cb |InputType.switchField|DATA|
|**160**|*uppercaseOnlyCb*|Uppercase Only Cb |InputType.switchField|DEFAULT|
|**170**|*optionAssignments*|Option Assignments |InputType.textField|DEFAULT|
|**180**|*status*|Status |InputType.select|CONTROL|
|**190**|*revEnabled*|Rev Enabled |InputType.select|DEFAULT|
|**200**|*revNumber*|Rev Number |InputType.number|DATA|
|**250**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**5210**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5220**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5230**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5240**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|
|**10**|*sysValueGroupHeaderId*|Sys Value Group Header Id |InputType.text|REFERENCE|
|**10**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**20**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**30**|*headerCode*|Header Code |InputType.textField|DEFAULT|
|**40**|*accessLevel*|Access Level |InputType.textField|DEFAULT|
|**50**|*valueGroup*|Value Group |InputType.textField|DEFAULT|
|**60**|*description*|Description |InputType.textField|DEFAULT|
|**70**|*moduleCode*|Module Code |InputType.textField|DEFAULT|
|**80**|*validationType*|Validation Type |InputType.textField|CONTROL|
|**90**|*fieldType*|Field Type |InputType.textField|CONTROL|
|**100**|*minSize*|Min Size |InputType.number|PLANNING|
|**110**|*maxSize*|Max Size |InputType.number|PLANNING|
|**120**|*minValue*|Min Value |InputType.number|PLANNING|
|**130**|*maxValue*|Max Value |InputType.number|PLANNING|
|**140**|*fixedSize*|Fixed Size |InputType.number|DEFAULT|
|**150**|*numberOnlyCb*|Number Only Cb |InputType.switchField|DATA|
|**160**|*uppercaseOnlyCb*|Uppercase Only Cb |InputType.switchField|DEFAULT|
|**170**|*optionAssignments*|Option Assignments |InputType.textField|DEFAULT|
|**180**|*status*|Status |InputType.select|CONTROL|
|**190**|*revEnabled*|Rev Enabled |InputType.select|DEFAULT|
|**200**|*revNumber*|Rev Number |InputType.number|DATA|
|**250**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**5210**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5220**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5230**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5240**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>


### Lines

<img src="/images/modules/gl/coa/segment/coa_segment_07.PNG" width="800"/>


You can add multiple lines to each COA header. Each COA line contains an item, UOM, product segment code, segment value, description, account type, etc.

<img src="/images/modules/gl/coa/segment/coa_segment_07a.PNG" width="400"/>

Navigate to the lines tab to view/add/update lines.  
Click on the add new entity to add a new line. If a line already exists, click on copy entity to copy all the details.
You can enable/disable fields allowed to be copied in the menu configuration.  

<img src="/images/modules/gl/coa/segment/coa_segment_07b.PNG" width="800"/>


**Code**: Enter an alpha-numeric code for the segment code.

**Value**: Enter an alpha-numeric code for the segment code. You can use the same value for both Code and value if you don't have any business requirement to show COAs values in different meanings.


<img src="/images/modules/gl/coa/segment/coa_segment_07c.PNG" width="800"/>


The reference groups show various ids for reference only. You don't need to enter any information in this section. When you save a COA for the first time, the system will auto-populate the newly created header id and line ids.

<img src="/images/modules/gl/coa/segment/coa_segment_07d.PNG" width="800"/>



Scroll left, right, up, and down view all other fields.


Enter all the other fields and click on the save button to save the COA. The app will post all the data to the server and will show the messages returned from the server.



<details>
<summary>All Fields</summary>

| Sequence | Name                | Label                    | InputType             | Field Group |
| -------- | ------------------------ | ------------------------ | --------------------- | ----------- |
|**10**|*sysValueGroupLineId*|Sys Value Group Line Id |InputType.text|REFERENCE|
|**10**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**20**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**30**|*headerCode*|Header Code |InputType.deferredSelect|DEFAULT|
|**40**|*sysValueGroupHeaderId*|Sys Value Group Header Id |InputType.text|REFERENCE|
|**50**|*code*|Code |InputType.textField|DEFAULT|
|**60**|*codeValue*|Code Value |InputType.textField|DEFAULT|
|**70**|*description*|Description |InputType.textField|DEFAULT|
|**80**|*accountQualifier*|Account Qualifier |InputType.textField|FINANCE|
|**90**|*allowBudgetingCb*|Allow Budgeting Cb |InputType.switchField|DEFAULT|
|**100**|*allowPostingCb*|Allow Posting Cb |InputType.switchField|DEFAULT|
|**110**|*status*|Status |InputType.select|CONTROL|
|**120**|*parentCb*|Parent Cb |InputType.switchField|DEFAULT|
|**130**|*parentLineId*|Parent Line Id |InputType.text|REFERENCE|
|**140**|*effectiveStartDate*|Effective Start Date |InputType.date|DATE|
|**150**|*effectiveEndDate*|Effective End Date |InputType.date|DATE|
|**200**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**5160**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5170**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5180**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5190**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|
|**10**|*sysValueGroupLineId*|Sys Value Group Line Id |InputType.text|REFERENCE|
|**10**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**20**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**30**|*headerCode*|Header Code |InputType.deferredSelect|DEFAULT|
|**40**|*sysValueGroupHeaderId*|Sys Value Group Header Id |InputType.text|REFERENCE|
|**50**|*code*|Code |InputType.textField|DEFAULT|
|**60**|*codeValue*|Code Value |InputType.textField|DEFAULT|
|**70**|*description*|Description |InputType.textField|DEFAULT|
|**80**|*acType*|Ac Type |InputType.select|CONTROL|
|**90**|*allowBudgetingCb*|Allow Budgeting Cb |InputType.switchField|DEFAULT|
|**100**|*allowPostingCb*|Allow Posting Cb |InputType.switchField|DEFAULT|
|**110**|*status*|Status |InputType.select|CONTROL|
|**120**|*parentCb*|Parent Cb |InputType.switchField|DEFAULT|
|**130**|*parentLineId*|Parent Line Id |InputType.text|REFERENCE|
|**140**|*effectiveStartDate*|Effective Start Date |InputType.date|DATE|
|**150**|*effectiveEndDate*|Effective End Date |InputType.date|DATE|
|**200**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**5160**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5170**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5180**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5190**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>



## Accounts - COA  Combinations


To create/view/update a COA Combination, navigate to the "COA Combination"  screen from your dashboard/favorite.


<img src="/images/modules/gl/coa/combination/gl_combination_01.PNG" width="350"/>

Enter the organization/COA Combination details or any other criteria in the search form and click on the search button to view an existing COA Combination.  


<img src="/images/modules/gl/coa/combination/gl_combination_02.PNG" width="800"/>

If you don't enter organization details, the system will show you all the COA Combinations. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search COA Combinations.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.


If you click on the create new button, the system will open a simple step form to create a new COA Combination. You can click on the detail right bottom to view all the fields available for the object. 

<img src="/images/modules/gl/coa/combination/gl_combination_03.PNG" width="350"/>

To view the search result in a table format, click on the table icon in the bottom left corner.

To view specific COA Combination details, click on the menu of that record, and click on view/fetch & view.
<img src="/images/modules/gl/coa/combination/gl_combination_04a.PNG" width="350"/>


You can also click on the expand icon against any item on the search result screen to view the COA Combination header details, such as COA Combination name, balancing segment, etc.

<img src="/images/modules/gl/coa/combination/gl_combination_04.PNG" width="800"/>

The system will fetch all the selected COA Combination data. Depending on the device size, the cost details are shown either right to the search result screen or on a separate screen.


<img src="/images/modules/gl/coa/combination/gl_combination_05.PNG" width="800"/>


Scroll left, right, up, down to view all the details. The document line and details are shown in a separate tab..
The default configuration shows fields in various functional groups such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  



You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.

<img src="/images/modules/gl/coa/combination/gl_combination_06.PNG" width="800"/>


<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*glCoaCombinationId*|Gl Coa Combination Id |InputType.text|REFERENCE|
|**10**|*acType*|Ac Type |InputType.select|CONTROL|
|**20**|*status*|Status |InputType.select|CONTROL|
|**30**|*glCoaId*|Gl Coa Id |deferredSelect|REFERENCE|
|**40**|*coaSegment1*|Coa Segment 1|deferredSelect|FINANCE|
|**50**|*coaSegment2*|Coa Segment 2|deferredSelect|FINANCE|
|**60**|*coaSegment3*|Coa Segment 3|deferredSelect|FINANCE|
|**70**|*coaSegment4*|Coa Segment 4|deferredSelect|FINANCE|
|**80**|*coaSegment5*|Coa Segment 5|deferredSelect|FINANCE|
|**90**|*coaSegment6*|Coa Segment 6|deferredSelect|FINANCE|
|**100**|*coaSegment7*|Coa Segment 7|deferredSelect|FINANCE|
|**110**|*coaSegment8*|Coa Segment 8|deferredSelect|FINANCE|
|**120**|*shortCombination*|Short Combination |InputType.textField|DEFAULT|
|**130**|*combination*|Combination |InputType.textField|DEFAULT|
|**180**|*description*|Description |InputType.textField|DEFAULT|
|**190**|*vvCoaName*| Coa Name |deferredSelect|DEFAULT|
|**200**|*vvBalancing*| Balancing |InputType.text|DEFAULT|
|**210**|*vvCostCenter*| Cost Center |InputType.text|FINANCE|
|**220**|*vvNaturalAccount*| Natural Account |InputType.text|FINANCE|
|**230**|*vvInterCompany*| Inter Company |InputType.text|FINANCE|
|**240**|*vvCoaCoaSegment1*| Coa Coa Segment 1|deferredSelect|FINANCE|
|**250**|*vvCoaCoaSegment2*| Coa Coa Segment 2|deferredSelect|FINANCE|
|**260**|*vvCoaCoaSegment3*| Coa Coa Segment 3|deferredSelect|FINANCE|
|**270**|*vvCoaCoaSegment4*| Coa Coa Segment 4|deferredSelect|FINANCE|
|**280**|*vvCoaCoaSegment5*| Coa Coa Segment 5|deferredSelect|FINANCE|
|**290**|*vvCoaCoaSegment6*| Coa Coa Segment 6|deferredSelect|FINANCE|
|**300**|*vvCoaCoaSegment7*| Coa Coa Segment 7|deferredSelect|FINANCE|
|**310**|*vvCoaCoaSegment8*| Coa Coa Segment 8|deferredSelect|FINANCE|
|**320**|*vvCoaSeparator*| Coa Separator |InputType.text|DEFAULT|
|**330**|*vvAllowDynamicInsert*| Allow Dynamic Insert |InputType.text|DEFAULT|
|**5140**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5150**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5160**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5170**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>



