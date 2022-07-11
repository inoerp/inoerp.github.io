---
id: activity
title: Activity
sidebar_label: Activity
---

:::caution

This documentation is incomplete.

:::

An activity is a sub-component of a task. It shows a single unit of work and the corresponding required materials and resources to complete that unit of work. Material and Resource requirements and usages are tracked at an activity level. It's a mandatory part of the project and required for the project to be valid. Activities are usually created by the project manager and are assigned to the project team. The project team is responsible for creating and maintaining the activities.

Project team members can create activities and assign them to activities. In manufacturing environments, activities are similar to operation steps. Resource and material requirements are assigned and tracked at the activity level. 

Team members can track the progress of activities by entering the time and materials used.


<img src="/images/modules/prj/activity/activity_01.PNG" width="800"/>
You can view the activity details in several formats:
1. In a list format
2. In a table format
3. In a simple step format with all the mandatory fields in a single step



## List View

<img src="/images/modules/prj/activity/activity_02.PNG" width="800"/>

To create/view/update any project activity, navigate to the "activity "  screen from your dashboard/favorite. Navigate to the Activities tab on the project screen to view/add/update activities associated with an activity of a project. You can also add activities to a project from the activity screen.


Click on any button to view the activity in the corresponding format.

<img src="/images/modules/prj/activity/activity_03.PNG" width="800"/>

In the project activity tab, click on the add new entity to add a new line. If a line exists, click on copy entity to copy all the details.
Enter the activity details or other criteria in the search form and click on the search button to view an existing activity.

You can enable/disable fields allowed to be copied in the menu configuration.  


<img src="/images/modules/prj/activity/activity_04.PNG" width="800"/>


If you click on the create a new button, the system will open a simple step form to create a new activity. You can click on the detail right bottom to view all the fields available for the object. 

<img src="/images/modules/prj/activity/activity_05.PNG" width="800"/>

To view the search result in a table format, click on the table icon in the bottom left corner.

You can also click the expand icon against any label to view all the fields of that label.



**Activity  Sequence:** Enter a numeric value for the activity sequence. The activity sequence is a mandatory field.

**Activity  Description:** Enter a description for the activity. The activity description is an optional field.

**Completion Percentage:** You can use the percentage field to maintain the percentage completion of the activity.
The completion percentage is not a mandatory field. However, if you want to generate invoices based on the activity completion percentage, you must maintain percentage completion.

<img src="/images/modules/prj/activity/activity_06.PNG" width="800"/>


**Doc Status** Document status is a mandatory field maintained by the system. The system automatically sets the status to "Draft" when creating a new activity. Similarly, the system automatically sets the status to "Completed" when the activity is completed.

**Org Code** Project and tasks are created at the business organization level. However, activities are created at the inventory organization level. All the inventory-related transactions are created in the project inventory organization. Thus, enter an org code to assign the activity to the project inventory organization.

Scroll left, right, up, and down to view all the details. The document line and details are shown in a separate tab.
The default configuration shows fields in various functional groups, such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  


You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.

**Dates:**  You can use the date fields to maintain the start and end dates of the activity.


<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*vvOrgCode*| Org Code |defferedSelect|ENTITY|
|**10**|*vvTaskLevel*| Task Level |defferedSelect|DEFAULT|
|**20**|*vvTaskName*| Task Name |defferedSelect|DEFAULT|
|**30**|*vvTaskNumber*| Task Number |defferedSelect|DATA|
|**40**|*vvProjectName*| Project Name |defferedSelect|DEFAULT|
|**50**|*vvProjectNumber*| Project Number |defferedSelect|DATA|
|**60**|*vvBuOrgId*| Bu Org Id |defferedSelect|REFERENCE|
|**70**|*vvTaskOwner*| Task Owner |defferedSelect|DEFAULT|
|**80**|*vvParentTaskName*| Parent Task Name |defferedSelect|DEFAULT|
|**90**|*vvParentTaskNumber*| Parent Task Number |defferedSelect|DATA|
|**100**|*vvParentTaskDescription*| Parent Task Description |defferedSelect|DEFAULT|
|**110**|*vvLevel*| Level |InputType.text|DEFAULT|
|**120**|*vvLevelDescription*| Level Description |InputType.text|DEFAULT|
|**130**|*vvLevelName*| Level Name |InputType.text|DEFAULT|
|**140**|*vvLevelUniqueCode*| Level Unique Code |InputType.text|DEFAULT|
|**150**|*vvLevelParentUniqueCode*| Level Parent Unique Code |InputType.text|DEFAULT|
|**160**|*vvPrjProjectHeaderId*| Prj Project Header Id |defferedSelect|REFERENCE|
|**170**|*prjProjectActivityId*|Prj Project Activity Id |InputType.text|REFERENCE|
|**180**|*srcEntityName*|Src Entity Name |defferedSelect|DEFAULT|
|**190**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**200**|*prjProjecTmpTaskId*|Prj Projec Tmp Task Id |InputType.text|REFERENCE|
|**210**|*prjProjectTaskId*|Prj Project Task Id |defferedSelect|REFERENCE|
|**220**|*activitySequence*|Activity Sequence |InputType.number|DEFAULT|
|**230**|*invOrgId*|Inv Org Id |defferedSelect|REFERENCE|
|**240**|*standardActivityId*|Standard Activity Id |InputType.text|REFERENCE|
|**250**|*departmentId*|Department Id |InputType.text|REFERENCE|
|**260**|*activityDescription*|Activity Description |InputType.textField|DEFAULT|
|**270**|*startDate*|Start Date |InputType.dateTime|DATE|
|**280**|*completionDate*|Completion Date |InputType.dateTime|DATE|
|**290**|*countPointCb*|Count Point Cb |InputType.switchField|DEFAULT|
|**300**|*autoChargeCb*|Auto Charge Cb |InputType.switchField|DEFAULT|
|**310**|*scheduledStartDate*|Scheduled Start Date |InputType.dateTime|DATE|
|**320**|*scheduledCompletionDate*|Scheduled Completion Date |InputType.dateTime|DATE|
|**330**|*minimumTransferQuantity*|Minimum Transfer Quantity |InputType.number|DATA|
|**340**|*progressPercentage*|Progress Percentage |InputType.number|DEFAULT|
|**390**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**5350**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5360**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5370**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5380**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>

## Simple Step View

<img src="/images/modules/prj/activity/activity_07a.PNG" width="400"/>

The simple step form shows all the mandatory fields required to create an activity in step form.
By default, the application shows only two mandatory fields:
- Activity Sequence
- Org Code

A simple step form is a simple way to create an activity as the user goes through the steps and needs to focus only on one field at a time. The application will show the next field when the user clicks the Next button. However, as per your business requirements, you can make any other field mandatory.



## Tabular View

<img src="/images/modules/prj/activity/activity_07b.PNG" width="800"/>

The tabular view shows all the activities in a table. The default configuration of the table shows all the fields. However, you can configure the table only to show the fields you want.