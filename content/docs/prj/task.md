---
id: task
title: Task
sidebar_label: Task
---

:::caution

This documentation is incomplete.

:::

A task represents a work item or a group of activities with a specific purpose related to the project goal. It's a mandatory part of the project and required for the project to be valid. Tasks are usually created by the project manager and are assigned to the project team. The system tracks all inventory transactions with reference to tasks; thus, tasks are mandatory on project transactions.

A task is usually accomplished by set completion date. You can associate a task with a project by creating a task-project relationship. Similarly, creating a task-activity relationship can associate a task with several activities. You don't have to assign materials and resources directly to any task. The system shows the associated activities' material and resource requirements/usages.

You can add multiple tasks to each project. Each task contains a task name, number, description,  etc.

<img src="/images/modules/prj/task/project_07.PNG" width="800"/>

To create/view/update any task of a project, navigate to the "task "  screen from your dashboard/favorite. Navigate to the Tasks tab on the project screen to view/add/update tasks associated with a project. You can also add tasks to a project from the task screen.

## List View

<img src="/images/modules/prj/task/project_07a.PNG" width="500"/>

You can view the task details in several formats:
1. In a list format
2. In a table format
3. In a hierarchy format with the task name as the root node
4. In a calendar(Gantt chart) format with task dates
5. In a simple step format with all the mandatory fields in a single step

Click on any button to view the task in the corresponding format.

<img src="/images/modules/prj/task/project_07a1.PNG" width="800"/>

In the project task tab, click on the add new entity to add a new line. If a line exists, click on copy entity to copy all the details.
Enter the task details or any other criteria in the search form and click on the search button to view an existing task.

You can enable/disable fields allowed to be copied in the menu configuration.  


<img src="/images/modules/prj/task/project_07a2.PNG" width="300"/>


If you click on the create a new button, the system will open a simple step form to create a new task. You can click on the detail right bottom to view all the fields available for the object. 

<img src="/images/modules/prj/task/project_07a3.PNG" width="800"/>

To view the search result in a table format, click on the table icon in the bottom left corner.

You can also click the expand icon against any label to view all the fields of that label.



**Task  Name:** Enter a name for the task. The task name is a mandatory field.

**Task  Number:** Enter a number for the task. The task number is a mandatory field.

**Completion Percentage:** You can use the percentage field to maintain the percentage completion of the task.
The completion percentage is not a mandatory field. However, if you want to generate invoices based on the task completion percentage, you must maintain percentage completion.

<img src="/images/modules/prj/task/project_07a4.PNG" width="800"/>


**Doc Status** Document status is a mandatory field maintained by the system. The system automatically sets the status to "Draft" when creating a new task. Similarly, the system automatically sets the status to "Completed" when the task is completed.

**Task  Status** Task status is user maintained field. You can use task status to track the task's status per your business requirements. The task status is not a mandatory field.

Scroll left, right, up, and down to view all the details. The document line and details are shown in a separate tab.
The default configuration shows fields in various functional groups, such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  

<img src="/images/modules/prj/task/project_07a5.PNG" width="800"/>

You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.

**Dates:**  You can use the date fields to maintain the start and end dates of the task.


The reference groups show various ids for reference only. You don't need to enter any information in this section. When you save a task for the first time, the system will auto-populate the newly created header id and line ids.



<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*vvTaskLevel*| Task Level |defferedSelect|DEFAULT|
|**10**|*vvTaskNumber*| Task Number |defferedSelect|DATA|
|**20**|*vvProjectName*| Project Name |defferedSelect|DEFAULT|
|**30**|*vvProjectNumber*| Project Number |defferedSelect|DATA|
|**40**|*vvBuOrgId*| Bu Org Id |defferedSelect|REFERENCE|
|**50**|*vvTaskOwner*| Task Owner |defferedSelect|DEFAULT|
|**60**|*vvParentTaskName*| Parent Task Name |defferedSelect|DEFAULT|
|**70**|*vvParentTaskNumber*| Parent Task Number |defferedSelect|DATA|
|**80**|*vvParentTaskDescription*| Parent Task Description |defferedSelect|DEFAULT|
|**90**|*vvLevel*| Level |InputType.text|DEFAULT|
|**100**|*vvLevelDescription*| Level Description |InputType.text|DEFAULT|
|**110**|*vvLevelName*| Level Name |InputType.text|DEFAULT|
|**120**|*vvLevelUniqueCode*| Level Unique Code |InputType.text|DEFAULT|
|**130**|*vvLevelParentUniqueCode*| Level Parent Unique Code |InputType.text|DEFAULT|
|**140**|*prjProjectTaskId*|Prj Project Task Id |InputType.text|REFERENCE|
|**150**|*srcEntityName*|Src Entity Name |defferedSelect|DEFAULT|
|**160**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**170**|*prjProjectHeaderId*|Prj Project Header Id |defferedSelect|REFERENCE|
|**180**|*taskLevel*|Task Level |InputType.number|DEFAULT|
|**190**|*taskNumber*|Task Number |InputType.textField|DATA|
|**200**|*taskName*|Task Name |InputType.textField|DEFAULT|
|**210**|*parentPrjProjectTaskId*|Parent Prj Project Task Id |defferedSelect|REFERENCE|
|**220**|*completionPercentage*|Completion Percentage |InputType.textField|DEFAULT|
|**230**|*description*|Description |InputType.textField|DEFAULT|
|**240**|*startDate*|Start Date |InputType.date|DATE|
|**250**|*endDate*|End Date |InputType.date|DATE|
|**260**|*lineDescription*|Line Description |InputType.textField|DEFAULT|
|**270**|*taskStatus*|Task Status |InputType.select|CONTROL|
|**280**|*ownerEmployeeId*|Owner Employee Id |defferedSelect|REFERENCE|
|**290**|*serviceType*|Service Type |InputType.textField|CONTROL|
|**300**|*workType*|Work Type |InputType.textField|CONTROL|
|**310**|*allowChargesCb*|Allow Charges Cb |InputType.switchField|DEFAULT|
|**320**|*capitalizableCb*|Capitalizable Cb |InputType.switchField|DEFAULT|
|**330**|*milestoneCb*|Milestone Cb |InputType.switchField|DEFAULT|
|**340**|*docCurrency*|Doc Currency |defferedSelect|FINANCE|
|**350**|*rateType*|Rate Type |InputType.textField|CONTROL|
|**360**|*cipAssetId*|Cip Asset Id |InputType.text|REFERENCE|
|**410**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**5370**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5380**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5390**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5400**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>

## Hierarchal View

<img src="/images/modules/prj/task/project_07b.PNG" width="800"/>

Task hierarchy is the structure that shows 
- top level (root) tasks
- how tasks relate to each other
- leaf tasks:  tasks that are at the lowest level and do not contain any task.
A hierarchal view helps break down the whole project into different tasks, including groups of tasks and subtasks.

The hierarchal view of the project shows all the task and their dependencies. The hierarchy starts from the project, then shows all the root tasks and child tasks of the root tasks. The view shows all the parent-child relationships and ends at the leaf task.


## Calendar(Gantt Chart)

<img src="/images/modules/prj/task/project_07c.PNG" width="800"/>

The calendar(Gantt chart) view includes two sections
- the left side outlines a list of task names, numbers, completion percentage, start date, end date
- the right side has a timeline with schedule bars that shows the start and end of a task in relation to all the other tasks. The right also shows the percentage completion of the task in a light green color.


## Simple Step View

<img src="/images/modules/prj/task/project_07d.PNG" width="400"/>

The simple step form shows all the mandatory fields required to create a task in step form.
By default, the application shows only two mandatory fields:
- Task Name
- Task Number

A simple step form is a simple way to create a task as the user goes through the steps and needs to focus only on one field at a time. The application will show the next field when the user clicks the Next button. However, as per your business requirements, you can make any other field mandatory.

<img src="/images/modules/prj/task/project_07e.PNG" width="400"/>


## Tabular View

<img src="/images/modules/prj/task/project_07f.PNG" width="800"/>

The tabular view shows all the tasks in a table. The default configuration of the table shows all the fields. However, you can configure the table only to show the fields you want.