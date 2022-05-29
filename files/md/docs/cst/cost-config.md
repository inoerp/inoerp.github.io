---
id: cost-config
title: Cost Configuration
sidebar_label: Cost Configuration
---


:::caution

This documentation is incomplete.

:::

## Cost Type


To create/view/update a cost type, navigate to the "cost-type"  screen from your dashboard/favorite.


<img src="/images/modules/cst/config/cost_type/cst_cost_type_01.PNG" width="350"/>

Enter the organization/cost type details or any other criteria in the search form and click on the search button to view an existing cost type.  


<img src="/images/modules/cst/config/cost_type/cst_cost_type_02.PNG" width="800"/>

If you don't enter organization details, the system will show you all the cost types. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search cost types.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.


If you click on the create new button, the system will open a simple step form to create a new cost type. You can click on the detail right bottom to view all the fields available for the object. 

<img src="/images/modules/cst/config/cost_type/cst_cost_type_03.PNG" width="350"/>

To view the search result in a table format, click on the table icon in the bottom left corner.

To view specific cost type details, click on the menu of that record, and click on view/fetch & view.


You can also click on the expand icon against any item on the search result screen to view the cost type header details, such as cost type, description, etc.


The system will fetch all the selected document detail line data. The document details are shown either right to the search result screen or in a separate screen, depending on the device size.


<img src="/images/modules/cst/config/cost_type/cst_cost_type_04.PNG" width="800"/>


Scroll left, right, up, down to view all the details. The document line and details are shown in a separate tab..
The default configuration shows fields in various functional groups such as

- Reference
- Control
- Etc  

<img src="/images/modules/cst/config/cost_type/cst_cost_type_05.PNG" width="800"/>


You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.



<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*cstCostTypeId*|Cst Cost Type Id |InputType.text|CONTROL|
|**10**|*costType*|Cost Type |InputType.textField|CONTROL|
|**20**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**30**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**40**|*description*|Description |InputType.textField|DEFAULT|
|**5050**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5060**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5070**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5080**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>



## Cost Element


To create/view/update a cost element, navigate to the "cost element"  screen from your dashboard/favorite.



Enter the cost element details or any other criteria in the search form and click on the search button to view an existing cost element.  
<img src="/images/modules/cst/config/cost_element/cst_cost_element_01.PNG" width="350"/>



If you don't enter organization details, the system will show you all the cost elements. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search cost elements.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.
<img src="/images/modules/cst/config/cost_element/cst_cost_element_02.PNG" width="800"/>


If you click on the create new button, the system will open a simple step form to create a new cost element. You can click on the detail right bottom to view all the fields available for the object. 


To view the search result in a table format, click on the table icon in the bottom left corner.

To view specific cost element details, click on the menu of that record, and click on view/fetch & view.
<img src="/images/modules/cst/config/cost_element/cst_cost_element_03.PNG" width="350"/>


You can also click on the expand icon against any item on the search result screen to view the cost element header details, such as cost element, description,  etc.


The system will fetch all the selected document detail. The document details are shown either right to the search result screen or in a separate screen, depending on the device size.

<img src="/images/modules/cst/config/cost_element/cst_cost_element_04.PNG" width="800"/>



Scroll left, right, up, down to view all the details. The document line and details are shown in a separate tab..
The default configuration shows fields in various functional groups such as

- Finance
- Reference
- Control
- Etc  

<img src="/images/modules/cst/config/cost_element/cst_cost_element_05.PNG" width="800"/>


You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.



<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*cstCostElementId*|Cst Cost Element Id |deferredSelect|REFERENCE|
|**10**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**20**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**30**|*description*|Description |InputType.textField|DEFAULT|
|**40**|*costElementCode*|Cost Element Code |InputType.textField|FINANCE|
|**50**|*costElementType*|Cost Element Type |InputType.select|CONTROL|
|**5060**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5070**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5080**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5090**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>

