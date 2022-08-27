---
id: resource
title: Resource
sidebar_label: Resource
---

:::caution

This documentation is incomplete.

:::

Resource management in the project module provides tools to manage the requirement and usage of resources for a project. Resources are defined in HCM modules and assigned to activities against a department. However, the system shows various views on the total resource requirement at project and task levels.

You can divide the overall process flow of Resource Management into three segments
- **Demand**: Adding a resource to an activity creates a demand for the capacity planning
- **Supply**: The capacity planning suggests a supply to fulfill the project demand
- **Transaction**: The application provides four different types of transactions to manage the demand and availability of resources  
***1. Apply Resource*** - Charge resources to a project activity  
***2. Reverse Resource*** - Reverse a wrongly applied resource to an activity  



<img src="/images/modules/prj/resource/resource_01.PNG" width="800"/>

You can view the resource details in several formats:
1. In a list format
2. In a table format
3. In a simple step format with all the mandatory fields in a single step



## List View

<img src="/images/modules/prj/resource/resource_02.PNG" width="800"/>

To create/view/update any project resource, navigate to the "project resource"  screen from your dashboard/favorite. Navigate to the Resources tab on the project screen to view/add/update activities associated with a project's resource. You can also add activities to a project from the resource screen.


Click on any button to view the resource in the corresponding format.

<img src="/images/modules/prj/resource/resource_03.PNG" width="800"/>

In the project resource tab, click on the add new entity to add a new line. If a line exists, click on copy entity to copy all the details.
Enter the resource details or other criteria in the search form and click on the search button to view an existing resource.

You can enable/disable fields allowed to be copied in the menu configuration.  


<img src="/images/modules/prj/resource/resource_04.PNG" width="800"/>


If you click on the create a new button, the system will open a simple step form to create a new resource. You can click on the detail right bottom to view all the fields available for the object. 


To view the search result in a table format, click on the table icon in the bottom left corner.

You can also click the expand icon against any label to view all the fields of that label.



**Resource  Sequence:** Enter a numeric value for the resource sequence. The resource sequence is a mandatory field.

**Mfg Resource:** Select a resource name from the resource list. The resource is a select field, i.e., you can enter three letters of the resource name to search for the resource. You can also click the search popup icon to search and select the resource.

<img src="/images/modules/prj/resource/resource_05.PNG" width="800"/>


**Required Quantity** Required resource quantity for the activity. This value is used to calculate the resource requirement for the activity. The system allows you to charge more/less quantity than the required quantity.

**Required Units** Number of units of the same resource required for the activity. Ex: If you need two units of the same resource, enter 2. If the required quantity is 10 hrs, the system will consider 20 hrs as required hours.

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

**Need by date:**  You can use the date fields to specify the requirement date/need by date of the resource to start the activity.


<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*vvOrgCode*| Org Code |deferredSelect|ENTITY|
|**10**|*vvPrjProjectHeaderId*| Prj Project Header Id |deferredSelect|REFERENCE|
|**20**|*vvProjectName*| Project Name |deferredSelect|DEFAULT|
|**30**|*vvProjectNumber*| Project Number |deferredSelect|DATA|
|**40**|*vvTaskOwner*| Task Owner |deferredSelect|DEFAULT|
|**50**|*vvTaskLevel*| Task Level |deferredSelect|DEFAULT|
|**60**|*vvTaskNumber*| Task Number |deferredSelect|DATA|
|**70**|*vvTaskName*| Task Name |deferredSelect|DEFAULT|
|**80**|*vvActivitySequence*| Activity Sequence |InputType.text|DEFAULT|
|**90**|*vvInvOrgId*| Inv Org Id |deferredSelect|REFERENCE|
|**100**|*vvActivityDescription*| Activity Description |InputType.text|DEFAULT|
|**110**|*vvMfgResource*| Mfg Resource |deferredSelect|DEFAULT|
|**120**|*vvResourceDescription*| Resource Description |InputType.text|DEFAULT|
|**130**|*prjProjectActivityResId*|Prj Project Activity Res Id |InputType.text|REFERENCE|
|**140**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**150**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**160**|*prjProjectActivityId*|Prj Project Activity Id |InputType.text|REFERENCE|
|**170**|*resourceSequence*|Resource Sequence |InputType.number|DEFAULT|
|**180**|*chargeBasis*|Charge Basis |InputType.select|DEFAULT|
|**190**|*bomResourceId*|Bom Resource Id |deferredSelect|REFERENCE|
|**200**|*resourceUsage*|Resource Usage |InputType.textField|DEFAULT|
|**210**|*resourceScheduledCb*|Resource Scheduled Cb |InputType.switchField|DEFAULT|
|**220**|*requiredQuantity*|Required Quantity |InputType.textField|DATA|
|**230**|*chargeType*|Charge Type |InputType.select|CONTROL|
|**240**|*standardRateCb*|Standard Rate Cb |InputType.switchField|FINANCE|
|**5250**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5260**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5270**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5280**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>

## Simple Step View

<img src="/images/modules/prj/resource/resource_07a.PNG" width="400"/>

The simple step form shows all the mandatory fields required to add a resource to activity in step form.
By default, the application shows only two mandatory fields:
- Resource Sequence
- Org Code

A simple step form is a simple way to create a resource as the user goes through the steps and needs to focus only on one field at a time. The application will show the next field when the user clicks the Next button. However, as per your business requirements, you can make any other field mandatory.



## Tabular View

<img src="/images/modules/prj/resource/resource_07b.PNG" width="800"/>

The tabular view shows all the activities in a table. The default configuration of the table shows all the fields. However, you can configure the table only to show the fields you want.