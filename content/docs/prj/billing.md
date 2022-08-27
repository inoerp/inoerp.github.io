---
id: billing
title: Billing
sidebar_label: Billing
---

:::caution

This documentation is incomplete.

:::


## Budget Header

 A cost budget for a project is the expected combined costs of all activities related to material, resources, and "misc. expenditures." You can create multiple cost budgets for the same project for reporting purposes. However, the system uses only the primary cost budget (budget with revision 0) for all costs and revenue calculations.

If you want to use "percentage of completion" revenue recognization, you must also enter an expected revenue from the project in the budget screen.

In summary: the cost budget is the total amount of money you'll need to finish the project, and the revenue budget is the expected earnings from the project before its closure.


To create/view/update the budget, navigate to the "project budget"  screen from your dashboard/favorite.


<img src="/images/modules/prj/billing/budget/project_budget_01.PNG" width="450"/>

Enter the budget details or other criteria in the search form and click on the search button to view an existing budget.  

<img src="/images/modules/prj/billing/budget/project_budget_02.PNG" width="800"/>

The system will show you all the budgets if you don't enter any search criteria. If your organization configures any field mandatory for search, you must enter those fields to search budgets.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.

<img src="/images/modules/prj/billing/budget/project_budget_03.PNG" width="450"/>

If you click on the create a new button, the system will open a simple step form to create a new budget. You can click on the detail right bottom to view all the fields available for the object. 


To view the search result in a table format, click on the table icon in the bottom left corner.

To view specific budget details, click on the menu of that record, and click on view/fetch & view.


You can also click on the expand icon against any item on the search result screen to view the budget header details such as description, various cost budget amounts, etc.

<img src="/images/modules/prj/billing/budget/project_budget_04.PNG" width="800"/>

The system will fetch all the selected document detail line data. Depending on the device size, the document details are shown either right to the search result screen or on a separate screen.

**Material Cost:** Expected cost of materials for the project. You record material costs by issuing materials to the project.

**Resource Cost:** Expected cost of resources for the project. You record resource costs by applying resources to the project.

**Misc. Expenditures:** Expected cost of miscellaneous expenses for the project. You record miscellaneous expenses by creating expenditure transactions against the project.

<img src="/images/modules/prj/billing/budget/project_budget_05.PNG" width="800"/>

**Total Cost:** A read-only field that shows the sum of all the budget cost amounts in the budget

Scroll left, right, up, and down to view all the details. The document line and details are shown in a separate tab.
The default configuration shows fields in various functional groups, such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  

<img src="/images/modules/prj/billing/budget/project_budget_06.PNG" width="800"/>

You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.



<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*vvProjectName*| Project Name |deferredSelect|DEFAULT|
|**10**|*vvProjectNumber*| Project Number |deferredSelect|DATA|
|**20**|*vvTotalCost*| Total Cost |InputType.text|FINANCE|
|**30**|*prjBudgetHeaderId*|Prj Budget Header Id |InputType.text|REFERENCE|
|**40**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**50**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**60**|*prjProjectHeaderId*|Prj Project Header Id |deferredSelect|REFERENCE|
|**70**|*prjProjectTaskId*|Prj Project Task Id |deferredSelect|REFERENCE|
|**80**|*versionNumber*|Version Number |InputType.number|DATA|
|**90**|*versionName*|Version Name |InputType.textField|DEFAULT|
|**100**|*versionType*|Version Type |InputType.select|CONTROL|
|**110**|*description*|Description |InputType.textField|DEFAULT|
|**120**|*status*|Status |InputType.textField|CONTROL|
|**130**|*materialCost*|Material Cost |InputType.textField|FINANCE|
|**140**|*resourceCost*|Resource Cost |InputType.textField|FINANCE|
|**150**|*otherCost*|Other Cost |InputType.textField|FINANCE|
|**160**|*revenue*|Revenue |InputType.textField|DEFAULT|
|**170**|*confirmedBy*|Confirmed By |InputType.textField|DEFAULT|
|**180**|*confirmationDate*|Confirmation Date |InputType.date|DATE|
|**190**|*docStatus*|Doc Status |InputType.text|CONTROL|
|**200**|*approvalStatus*|Approval Status |InputType.text|CONTROL|
|**5210**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5220**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5230**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5240**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>



### Budget Items

<img src="/images/modules/prj/billing/budget/project_budget_07.PNG" width="800"/>

You can add budget details in the budget items tab. The budget items are used only for reporting purposes: i.e., to compare the actual cost with the expected cost. The system does not use the budget items for any other purpose.

You can add multiple budget items to each budget header. Each budget item shows a budget amount, expense type, etc.

<img src="/images/modules/prj/billing/budget/project_budget_07a.PNG" width="800"/>

Navigate to the "budget line" tab to view/add/update budget items.  
Click on the add new entity to add a new line. If a line already exists, click on copy entity to copy all the details.
You can enable/disable fields allowed to be copied in the menu configuration.  

<img src="/images/modules/prj/billing/budget/project_budget_07b.PNG" width="800"/>

**Task Name**: Select a task name from the list. The task name is used to identify the task in the budget. While recording expenses, you can also select the task name.

**Component Item Number**: You can select the component item number from the list for material cost entries. 

**Resource Name**: You can select the resource name from the list for resource cost entries.

<img src="/images/modules/prj/billing/budget/project_budget_07c.PNG" width="800"/>

**Quantity**: Expected quantity of the budget item. The value is applicable only for material and resource budget items.

**Raw Cost**: Expected raw cost of the budget item. 

**Overhead Cost**: Enter an overhead cost for the budget item if you want to track and compare the overhead cost with the actual cost.


Scroll left, right, up, and down view all other fields.

<img src="/images/modules/prj/billing/budget/project_budget_07d.PNG" width="800"/>

The default configuration shows fields in various functional groups, such as

- Reference
- Control
- Etc  

You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.


Enter all the other fields and click on the save button to save the budget. The app will post all the data to the server and show the messages returned from the server.


<details>
<summary>All Fields</summary>

| Sequence | Name                 | Label                    | InputType             | Field Group |
| -------- | ------------------------ | ------------------------ | --------------------- | ----------- |
|**10**|*vvInvOrgId*| Inv Org Id |deferredSelect|REFERENCE|
|**10**|*vvOrgCode*| Org Code |deferredSelect|ENTITY|
|**20**|*vvTaskName*| Task Name |deferredSelect|DEFAULT|
|**30**|*vvTaskNumber*| Task Number |deferredSelect|DATA|
|**40**|*vvProjectName*| Project Name |deferredSelect|DEFAULT|
|**50**|*vvProjectNumber*| Project Number |deferredSelect|DATA|
|**60**|*vvComponentItemNumber*| Component Item Number |deferredSelect|DEFAULT|
|**70**|*vvUomCode*| Uom Code |deferredSelect|DEFAULT|
|**80**|*vvComponentItemDescription*| Component Item Description |deferredSelect|DEFAULT|
|**90**|*vvResourceName*| Resource Name |deferredSelect|DEFAULT|
|**100**|*vvResourceDescription*| Resource Description |deferredSelect|DEFAULT|
|**110**|*prjBudgetLineId*|Prj Budget Line Id |InputType.text|REFERENCE|
|**120**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**130**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**140**|*prjBudgetHeaderId*|Prj Budget Header Id |InputType.text|REFERENCE|
|**150**|*description*|Description |InputType.textField|DEFAULT|
|**160**|*prjProjectActivityId*|Prj Project Activity Id |deferredSelect|REFERENCE|
|**170**|*componentItemIdM*|Component Item Id M |deferredSelect|REFERENCE|
|**180**|*hrResourceId*|Hr Resource Id |InputType.text|REFERENCE|
|**190**|*uomCode*|Uom Code |deferredSelect|DEFAULT|
|**200**|*quantity*|Quantity |InputType.textField|DATA|
|**210**|*rawCost*|Raw Cost |InputType.textField|FINANCE|
|**220**|*revenueQuantity*|Revenue Quantity |InputType.textField|DATA|
|**230**|*revenueAmount*|Revenue Amount |InputType.textField|FINANCE|
|**240**|*overheadCost*|Overhead Cost |InputType.textField|FINANCE|
|**290**|*docStatus*|Doc Status |InputType.text|CONTROL|
|**5250**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5260**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5270**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5280**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>


### Actions



<img src="/images/modules/prj/billing/budget/project_budget_09.PNG" width="800"/>

You can use action buttons to perform the following actions:

**Copy**: Copy the selected budget to a new budget. The system will create a budget with the same name as the selected budget and will increase the budget revision number by 1 of the highest budget revisions for the same project.

**Make Primary Revision**: Make the selected budget the primary one. The system will change the budget revision number to 0. The system will throw an error message if a primary budget exists for the project. 

**Copy To Primary Revision**: Copy the selected budget details to the primary budget. The values that are copied :
- Material Cost
- Resource Cost
- Misc. Expenditures
- Revenue

 A cost budget for a project is the expected combined costs of all activities related to material, resources, and "misc. expenditures." You can create multiple cost budgets for the same project for reporting purposes. However, the system uses only the primary cost budget (budget with revision 0) for all costs and revenue calculations.

If you want to use "percentage of completion" revenue recognization, you must also enter an expected revenue from the project in the budget screen.

In summary: the cost budget is the total amount of money you'll need to finish the project, and the revenue budget is the total expected earnings from the project before its closure.