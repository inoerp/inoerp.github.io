---
id: compensation
title: Compensation
sidebar_label: Compensation
---

:::caution

This documentation is incomplete.

:::

Compensation allows you to plan and manage your employee salary structure. 
The system allows you to define compensation elements (ex Basic Pay, House Allowance, Bonus, Tax Deduction, Parking Deduction, etc.) and various elements to create a pay structure as per your business requirement. Compensation can be assigned and defaulted from different level
1. Employee - The highest level, i.e., if compensation is assigned to an employee, then it will always be used
2. Position
3. Grade


:::info

In InoERP, compensations are created and maintained at a global level. i.e., you can use compensation structure across all organizations.

:::

## Header - Compensation Structure


To create/view/update compensation, navigate to the "compensation "  screen from your dashboard/favorite.


<img src="/images/modules/hr/compensation/compensation_01.PNG" width="350"/>

Enter the compensation details or any other criteria in the search form and click on the search button to view an existing compensation.  


<img src="/images/modules/hr/compensation/compensation_02.PNG" width="800"/>

If you don't enter any search criteria, the system will show you all the compensations. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search compensations.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.

<img src="/images/modules/hr/compensation/compensation_03.PNG" width="800"/>

If you click on the create new button, the system will open a simple step form to create a new compensation. You can click on the detail right bottom to view all the fields available for the object. 

<img src="/images/modules/hr/compensation/compensation_03a.PNG" width="350"/>

To view the search result in a table format, click on the table icon in the bottom left corner.

To view specific compensation details, click on the menu of that record, and click on view/fetch & view.

<img src="/images/modules/hr/compensation/compensation_04a.PNG" width="350"/>

You can also click on the expand icon against any item on the search result screen to view the compensation header details, name, description, revision number, etc.

<img src="/images/modules/hr/compensation/compensation_04.PNG" width="800"/>

The system will fetch all the selected document detail line data. The document details are shown either right on the search result screen or on a separate screen, depending on the device size.

**Compensation  Name:** Enter a unique compensation name. Compensation name is a mandatory field.

**Revision  Number:** If you want to track the history of a compensation change, then use the revision number; else, use a single value (ex: 1) for all compensations.

**Description:** Enter a meaningful description for the compensation



<img src="/images/modules/hr/compensation/compensation_05.PNG" width="800"/>


Scroll left, right, up, and down to view all the details. The document line and details are shown in a separate tab.
The default configuration shows fields in various functional groups, such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  

<img src="/images/modules/hr/compensation/compensation_06.PNG" width="800"/>

You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.



<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*hrCompensationHeaderId*|Hr Compensation Header Id |InputType.text|REFERENCE|
|**10**|*compensationName*|Compensation Name |InputType.textField|DEFAULT|
|**20**|*revisionNumber*|Revision Number |InputType.number|DATA|
|**30**|*description*|Description |InputType.textField|DEFAULT|
|**80**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**90**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**100**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**5040**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5050**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5060**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5070**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>



## Lines - Compensation Elements

<img src="/images/modules/hr/compensation/compensation_07.PNG" width="800"/>

Compensation elements specify the type and value of a compensation line. The sum of the value of all compensation elements is an employee's total pay/salary.
compensation values can be 
* Positive (ex: salary, allowance, bonus, etc.)
* Negative (ex: parking charge, canteen food, tax deduction, loan deduction, advanced pay deduction, etc.)


You can add multiple compensation elements to each compensation header. Each compensation element shows a compensation element name, code, element type, element value, etc.

<img src="/images/modules/hr/compensation/compensation_07a.PNG" width="800"/>

Navigate to the "compensation  element" tab to view/add/update compensation elements.  
Click on the add new entity to add a new line. If a line already exists, click on copy entity to copy all the details.
You can enable/disable fields allowed to be copied in the menu configuration.  

<img src="/images/modules/hr/compensation/compensation_07b.PNG" width="350"/>


**Compensation Element Name**: Select a compensation element name. The system will default all the compensation element-related values from the selected compensation element.

**Compensation Element Code**: System will default the element code from the element name.

<img src="/images/modules/hr/compensation/compensation_07c.PNG" width="800"/>

**Element Value**: Enter a value for the compensation element.

Scroll left, right, up, and down view all other fields.

<img src="/images/modules/hr/compensation/compensation_07d.PNG" width="800"/>



```
Total Compensation Value = SumOf(All Element Values)
```       

The default configuration shows fields in various functional groups, such as

- Reference
- Control
- Etc  

You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.

<img src="/images/modules/hr/compensation/compensation_07e.PNG" width="800"/>



Enter all the other fields and click on the save button to save the compensation. The app will post all the data to the server and will show the messages returned from the server.



<details>
<summary>All Fields</summary>

| Sequence | Name                 | Label                    | InputType             | Field Group |
| -------- | ------------------------ | ------------------------ | --------------------- | ----------- |
|**10**|*vvCompElementName*| Comp Element Name |deferredSelect|DEFAULT|
|**10**|*vvCompElementCode*| Comp Element Code |deferredSelect|DEFAULT|
|**20**|*vvCompElementType*| Comp Element Type |deferredSelect|CONTROL|
|**30**|*vvStartDate*| Start Date |InputType.text|DATE|
|**40**|*hrCompensationLineId*|Hr Compensation Line Id |InputType.text|REFERENCE|
|**50**|*hrCompensationHeaderId*|Hr Compensation Header Id |deferredSelect|REFERENCE|
|**60**|*hrCompensationElementId*|Hr Compensation Element Id |deferredSelect|REFERENCE|
|**70**|*elementValue*|Element Value |InputType.textField|DEFAULT|
|**80**|*description*|Description |InputType.textField|DEFAULT|
|**130**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**140**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**5090**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5100**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5110**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5120**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|
</details>





## Define Compensation Element
Compensation elements specify the type of compensation lines paid to an employee, for example:

- Salary
- Allowance
- Bonus
- Tax deduction
- Loan deduction

To view/create/update a compensation element, navigate to the "compensation element" search screen from your dashboard/favorite.

<img src="/images/modules/hr/compensation/element/element_01.PNG" width="400"/>

Enter the compensation element details or any other criteria in the search form and click on the search button to view an existing compensation element.  
Click on create a new button to create a new compensation element; by manually entering all the information,
Copy an existing compensation element to a new compensation element is always better than manually entering all the data to create a new compensation element.
You can configure which fields must be view-only after creating a compensation element.

<img src="/images/modules/hr/compensation/element/element_02.PNG" width="800"/>

If you click on the create new button, the system will open a simple step form to create a new compensation element. You can click on the detail right bottom to view all the fields available for the object.

<img src="/images/modules/hr/compensation/element/element_03.PNG" width="800"/>


If you click on the search button without entering any compensation element details, the system will show you all the compensation elements. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search compensation elements.  

The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.

<img src="/images/modules/hr/compensation/element/element_04a.PNG" width="400"/>

To view the search result in a table format, click on the table icon available in the bottom left corner.

<img src="/images/modules/hr/compensation/element/element_03a.PNG" width="350"/>

To open a specific compensation element, click on the menu of that record, and click on view/fetch & view.

You can also click on the expand icon against any compensation element on the search result screen to view the compensation element header details, such as name, code, category, etc.

<img src="/images/modules/hr/compensation/element/element_04.PNG" width="800"/>

The system will fetch all the data related to the selected compensation element. The compensation element details are shown either right to the search result screen or on a separate screen, depending on the device size.

**Element Name** Compensation element name field is mandatory. Enter a unique value.

**Element Code** Compensation element code field is mandatory. Enter a unique value.

<img src="/images/modules/hr/compensation/element/element_05.PNG" width="800"/>

**Element Category** Compensation element category is also a mandatory field. Select a value from the list of values.

Scroll left, right, up, and down to view all the details. The compensation element line and details are shown in a separate tab.
The default configuration shows fields in various functional groups such as
<img src="/images/modules/hr/compensation/element/element_06.PNG" width="800"/>

<img src="/images/modules/hr/employee/employee_02.PNG" width="800"/>


- Finance
- Entity
- Reference
- Data
- Control
- Etc  

You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.


<details>
<summary>All Fields</summary>

| Sequence | Name                   | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*hrCompensationElementId*|Hr Compensation Element Id |InputType.text|REFERENCE|
|**10**|*elementCode*|Element Code |InputType.textField|DEFAULT|
|**20**|*elementType*|Element Type |InputType.select|CONTROL|
|**30**|*startDate*|Start Date |InputType.date|DATE|
|**40**|*elementName*|Element Name |InputType.textField|DEFAULT|
|**50**|*description*|Description |InputType.textField|DEFAULT|
|**60**|*category*|Category |InputType.select|DEFAULT|
|**70**|*calculationRule*|Calculation Rule |InputType.select|DEFAULT|
|**80**|*endDate*|End Date |InputType.date|DATE|
|**90**|*priority*|Priority |InputType.number|DEFAULT|
|**100**|*recurringCb*|Recurring Cb |InputType.switchField|DEFAULT|
|**110**|*deductionRule*|Deduction Rule |InputType.textField|DEFAULT|
|**120**|*separateCheckCb*|Separate Check Cb |InputType.switchField|FINANCE|
|**130**|*frequencyMonths*|Frequency Months |InputType.textField|DEFAULT|
|**140**|*standardLinkCb*|Standard Link Cb |InputType.text|REFERENCE|
|**150**|*deductionStartRule*|Deduction Start Rule |InputType.textField|DEFAULT|
|**160**|*status*|Status |InputType.textField|CONTROL|
|**210**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**220**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**5170**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5180**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5190**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5200**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|


</details>



## Actions

Copy action allows you to copy all the compensation details to a new compensation. The system creates the new compensation with "Copy of {{source compensation name}}" as the compensation number.
You should change the compensation number to a more meaningful value.


<img src="/images/modules/hr/compensation/compensation_09.PNG" width="800"/>

