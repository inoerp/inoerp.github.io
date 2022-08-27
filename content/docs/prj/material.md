---
id: material
title: Material
sidebar_label: Material
---

:::caution

This documentation is incomplete.

:::

Material management in the project module provides tools to manage the requirement and usage of materials for a project. Materials/Components/Items are assigned to activities. However, the system shows various views on the total material requirement at project and task levels.

You can divide the overall process flow of Material Management into three segments
- **Demand**: Adding material to an activity creates a demand for the planning engine
- **Supply**: The planning engine suggests a supply to fulfill the project demand
- **Transaction**: The application provides four different types of transactions to manage the supply and demand  
***1. Project Issue*** - Issue material to a project from an inventory stock/onhand  
***2. Project Return*** - Receive material from a project to an inventory stock/onhand  
***3. Project Shipment*** - Ship a material from the project to a customer  
***4. Project Shipment Return*** - Receive material from a customer against a project  


<img src="/images/modules/prj/material/material_01.PNG" width="800"/>

You can view the material details in several formats:
1. In a list format
2. In a table format
3. In a simple step format with all the mandatory fields in a single step



## List View

<img src="/images/modules/prj/material/material_02.PNG" width="800"/>

To create/view/update any project material, navigate to the "project material"  screen from your dashboard/favorite. Navigate to the materials tab on the project screen to view/add/update activities associated with a project's material. You can also add activities to a project from the material screen.


Click on any button to view the material in the corresponding format.

<img src="/images/modules/prj/material/material_03.PNG" width="800"/>

In the project material tab, click on the add new entity to add a new line. If a line exists, click on copy entity to copy all the details.
Enter the material details or other criteria in the search form and click on the search button to view an existing material.

You can enable/disable fields allowed to be copied in the menu configuration.  


<img src="/images/modules/prj/material/material_04.PNG" width="800"/>


If you click on the create a new button, the system will open a simple step form to create a new material. You can click on the detail right bottom to view all the fields available for the object. 

<img src="/images/modules/prj/material/material_05.PNG" width="800"/>

To view the search result in a table format, click on the table icon in the bottom left corner.

You can also click the expand icon against any label to view all the fields of that label.



**Material  Sequence:** Enter a numeric value for the material sequence. The material sequence is a mandatory field.

**Component Item Number:** Select a component item number from the list of component items. A component item is a select field, i.e., you can enter three letters of the component item number to search for the component item. You can also click the search popup icon to search and select the component item.

**UOM & Item Description:** System defaults the UOM and description fields from the item master.

<img src="/images/modules/prj/material/material_06.PNG" width="800"/>


**Required Quantity** Required quantity for the activity.

**Org Code** The value defaults from the activity.

Scroll left, right, up, and down to view all the details. The document line and details are shown in a separate tab.
The default configuration shows fields in various functional groups, such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  


You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.

**Need by date:**  You can use the date fields to specify the requirement date/need by date of the material to start the activity.


<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*vvOrgCode*| Org Code |deferredSelect|ENTITY|
|**10**|*vvPrjProjectHeaderId*| Prj Project Header Id |deferredSelect|REFERENCE|
|**20**|*vvPrjProjectTaskId*| Prj Project Task Id |deferredSelect|REFERENCE|
|**30**|*vvProjectName*| Project Name |deferredSelect|DEFAULT|
|**40**|*vvProjectNumber*| Project Number |deferredSelect|DATA|
|**50**|*vvTaskOwner*| Task Owner |deferredSelect|DEFAULT|
|**60**|*vvTaskLevel*| Task Level |deferredSelect|DEFAULT|
|**70**|*vvTaskNumber*| Task Number |deferredSelect|DATA|
|**80**|*vvTaskName*| Task Name |deferredSelect|DEFAULT|
|**90**|*vvActivitySequence*| Activity Sequence |InputType.text|DEFAULT|
|**100**|*vvInvOrgId*| Inv Org Id |deferredSelect|REFERENCE|
|**110**|*vvActivityDescription*| Activity Description |InputType.text|DEFAULT|
|**120**|*vvComponentItemNumber*| Component Item Number |deferredSelect|DEFAULT|
|**130**|*vvUomCode*| Uom Code |deferredSelect|DEFAULT|
|**140**|*vvComponentItemDescription*| Component Item Description |deferredSelect|DEFAULT|
|**150**|*prjProjectActivityMatId*|Prj Project Activity Mat Id |InputType.text|REFERENCE|
|**160**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**170**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**180**|*prjProjectActivityId*|Prj Project Activity Id |InputType.text|REFERENCE|
|**190**|*itemSequence*|Item Sequence |InputType.number|DEFAULT|
|**200**|*componentItemIdM*|Component Item Id M |deferredSelect|REFERENCE|
|**210**|*componentRevision*|Component Revision |InputType.textField|DEFAULT|
|**220**|*usageBasis*|Usage Basis |InputType.textField|DEFAULT|
|**230**|*usageQuantity*|Usage Quantity |InputType.textField|DATA|
|**240**|*autoRequestMaterialCb*|Auto Request Material Cb |InputType.switchField|DEFAULT|
|**250**|*planningPercentage*|Planning Percentage |InputType.textField|PLANNING|
|**260**|*yield*|Yield |InputType.textField|DEFAULT|
|**270**|*wipSupplyType*|Wip Supply Type |InputType.select|CONTROL|
|**280**|*supplySubInventory*|Supply Sub Inventory |deferredSelect|PLANNING|
|**290**|*supplyLocatorId*|Supply Locator Id |deferredSelect|PLANNING|
|**300**|*requiredQuantity*|Required Quantity |InputType.number|DATA|
|**310**|*issuedQuantity*|Issued Quantity |InputType.number|DATA|
|**5320**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5330**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5340**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5350**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>

## Simple Step View

<img src="/images/modules/prj/material/material_07a.PNG" width="400"/>

The simple step form shows all the mandatory fields required to add a material/component to activities in step form.
By default, the application shows only two mandatory fields:
- Material Sequence
- Org Code

A simple step form is a simple way to create material as the user goes through the steps and needs to focus only on one field at a time. The application will show the next field when the user clicks the Next button. However, as per your business requirements, you can make any other field mandatory.



## Tabular View

<img src="/images/modules/prj/material/material_07b.PNG" width="800"/>

The tabular view shows all the activities in a table. The default configuration of the table shows all the fields. However, you can configure the table only to show the fields you want.