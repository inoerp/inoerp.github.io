---
id: project
title: Project
sidebar_label: Project
---

:::caution

This documentation is incomplete.

:::

InoERP project module helps organizations manage the project life cycle, from planning to project closure. The project module is closely integrated with other modules such as inventory, human capital, sales and distribution, fixed asset accounting, and manufacturing. The project module can be used in to map business processes across industries :
- You can use it in a manufacturing environment to map project manufacturing
- You can use it for a distribution organization only to capture costs and bill customers at a regular interval
- You can use it for a pure service organization 

## Structure

### Elements

1. ***Project*** - The highest level of the project hierarchy. A project is a series of tasks and activities that must be completed to accomplish a goal. You can assign a customer to a project and track inventory stocks, revenues, and expenses at a project level.
2. ***Task*** - A task is a sub-component of a project. It represents several activities that need to be completed together. You can also track inventory stock at a task level. Tasks are also required for all project transactions: Issue Material, Create Delivery. etc.
3. ***Activity*** - An activity is a sub-component of a task. It represents a single unit of work that requires some materials and resources to complete that unit of work. Material and Resource requirements and usages are tracked at an activity level.
4. ***Item/Material*** - Inventory and non-Inventory items that are required to complete an activity.
5. *** Resource *** - Human resources that are required to complete an activity.


You can use the project screen to enter and maintain project details. The project screen can be configured to various project-related information. 

The application provides two seeded project screens. You can copy/edit the screen to create your custom project screens.

### Project Header Adv
Project Header Adv screen shows the below tabs.
1. Basic Information - Basic information about the project.
2. Project Child Task - Tasks directly associated with the project.
3. Project Task Ev - All tasks associated with the project. This includes tasks associated with the project and tasks associated with the project's tasks.
4. Project Activity - All activities associated with the project. This includes activities associated with the project and activities associated with the project's tasks.


### Project Header All Adv
The project Header All Adv screen shows all the tabs of the Project Header Adv screen and the following tabs.
5. Project All Material - All materials associated with the project. This includes materials associated with the project and the project's tasks.
6. Project All Resource - All resources associated with the project. This includes resources related to the project and resources associated with the project's tasks.



## Project

To create/view/update a project, navigate to the "project "  screen from your dashboard/favorite.

<img src="/images/modules/prj/project/project_01a.PNG" width="350"/>


Enter the project details or any other criteria in the search form and click on the search button to view an existing project.  


<img src="/images/modules/prj/project/project_01.PNG" width="800"/>

The system will show you all the projects if you don't enter any search criteria. If your organization has configured to make any field mandatory for search, you must enter those fields to search projects.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.

<img src="/images/modules/prj/project/project_02.PNG" width="800"/>


If you click on the create a new button, the system will open a simple step form to create a new project. You can click on the detail right bottom to view all the fields available for the object. 

<img src="/images/modules/prj/project/project_03.PNG" width="800"/>

To view the search result in a table format, click on the table icon in the bottom left corner.

To view specific project details, click on the menu of that record, and click on view/fetch & view.

You can also click the expand icon against any item on the search result screen to view the project header details, name, description, revision number, etc.

<img src="/images/modules/prj/project/project_04.PNG" width="800"/>

The system will fetch all the selected document detail line data. The document details are shown either on the search result screen or on a separate screen, depending on the device size.

**Project  Name:** Enter a name for the project. The project name is a mandatory field.

**Complete Percentage:** You can use the percentage field to maintain a high-level completion of all the tasks at the project level.
The completion percentage is not a mandatory field. However, if you want to generate invoices based on the project completion percentage, you need to maintain percentage completion.

**Current Phase:** You can maintain the status of all tasks individually. You can also maintain the status of the project as a whole.
Thus, the current phase is not a mandatory field and can be used for reporting purposes.

<img src="/images/modules/prj/project/project_05.PNG" width="800"/>

**Bu Org** Select the business organization to which the project belongs. Business Organization is a mandatory field; you can not change it once the project is created. All projects must belong to a business organization. All cost and revenue transactions are created under the business organization.

**Customer Number** Select a customer and customer site number if the project needs to create invoices for a customer. The customer field is not required for internal projects.

Scroll left, right, up, and down to view all the details. The document line and details are shown in a separate tab.
The default configuration shows fields in various functional groups, such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  

<img src="/images/modules/prj/project/project_06.PNG" width="800"/>

You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.

**Dates:**  You can use the date fields to maintain the start and end dates of the project.

**Project Type:**  Project type is a mandatory field. Select an appropriate project type from the list.
- Contract: Projects that are created for external customer
- Capital: Projects that are created for internal purposes, and the completion of the project results in a fixed asset.
- Indirect: Projects that are created for internal cost tracking.

The reference groups show various ids for reference only. You don't need to enter any information in this section. When you save a project for the first time, the system will auto-populate the newly created header id and line ids.



<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*vvBuOrg*| Bu Org |defferedSelect|ENTITY|
|**10**|*vvBuOrgCode*| Bu Org Code |defferedSelect|ENTITY|
|**20**|*vvCustomerNumber*| Customer Number |defferedSelect|DATA|
|**30**|*vvCustomerName*| Customer Name |defferedSelect|ENTITY|
|**40**|*vvCustomerSiteNumber*| Customer Site Number |defferedSelect|DATA|
|**50**|*vvCustomerSiteName*| Customer Site Name |defferedSelect|ENTITY|
|**60**|*vvProjectManager*| Project Manager |defferedSelect|DEFAULT|
|**70**|*vvLevel*| Level |InputType.text|DEFAULT|
|**80**|*vvLevelDescription*| Level Description |InputType.text|DEFAULT|
|**90**|*vvLevelName*| Level Name |InputType.text|DEFAULT|
|**100**|*vvLevelUniqueCode*| Level Unique Code |InputType.text|DEFAULT|
|**110**|*prjProjectHeaderId*|Prj Project Header Id |InputType.text|REFERENCE|
|**120**|*srcEntityName*|Src Entity Name |defferedSelect|DEFAULT|
|**130**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**140**|*projectSource*|Project Source |InputType.textField|DEFAULT|
|**150**|*projectName*|Project Name |defferedSelect|DEFAULT|
|**160**|*buOrgId*|Bu Org Id |defferedSelect|REFERENCE|
|**170**|*prjProjectType*|Prj Project Type |InputType.select|CONTROL|
|**180**|*projectClass*|Project Class |InputType.textField|DEFAULT|
|**190**|*projectNumber*|Project Number |defferedSelect|DATA|
|**200**|*arCustomerId*|Ar Customer Id |defferedSelect|REFERENCE|
|**210**|*arCustomerSiteId*|Ar Customer Site Id |defferedSelect|REFERENCE|
|**220**|*pmEmployeeId*|Pm Employee Id |defferedSelect|REFERENCE|
|**230**|*projectStatus*|Project Status |InputType.select|CONTROL|
|**240**|*approvalStatus*|Approval Status |InputType.select|CONTROL|
|**250**|*description*|Description |InputType.textField|DEFAULT|
|**260**|*managerUserId*|Manager User Id |InputType.text|REFERENCE|
|**270**|*completionPercentage*|Completion Percentage |InputType.textField|DEFAULT|
|**280**|*startDate*|Start Date |InputType.date|DATE|
|**290**|*completionDate*|Completion Date |InputType.date|DATE|
|**300**|*headerAmount*|Header Amount |InputType.textField|FINANCE|
|**310**|*category*|Category |InputType.textField|DEFAULT|
|**320**|*financeStructureCb*|Finance Structure Cb |InputType.switchField|FINANCE|
|**330**|*operationStructureCb*|Operation Structure Cb |InputType.switchField|DEFAULT|
|**340**|*lifeCycle*|Life Cycle |InputType.textField|DEFAULT|
|**350**|*currentPhase*|Current Phase |InputType.textField|DEFAULT|
|**360**|*roleListId*|Role List Id |InputType.text|REFERENCE|
|**370**|*prjWorkType*|Prj Work Type |InputType.number|CONTROL|
|**380**|*probability*|Probability |InputType.textField|DEFAULT|
|**390**|*docCurrency*|Doc Currency |defferedSelect|FINANCE|
|**400**|*exchangeRateType*|Exchange Rate Type |defferedSelect|CONTROL|
|**410**|*exchangeRate*|Exchange Rate |InputType.textField|FINANCE|
|**420**|*opportunityValue*|Opportunity Value |InputType.textField|DEFAULT|
|**430**|*expectedApprovalDate*|Expected Approval Date |InputType.date|DATE|
|**440**|*billingMethod*|Billing Method |InputType.textField|ENTITY|
|**450**|*billingCycle*|Billing Cycle |InputType.textField|ENTITY|
|**460**|*prjBurdenListHeaderId*|Prj Burden List Header Id |InputType.text|REFERENCE|
|**470**|*accountBurdenedCostCb*|Account Burdened Cost Cb |InputType.switchField|FINANCE|
|**480**|*laborBillingType*|Labor Billing Type |InputType.textField|CONTROL|
|**490**|*nlrBillingType*|Nlr Billing Type |InputType.textField|CONTROL|
|**500**|*employeeScheduleId*|Employee Schedule Id |InputType.text|REFERENCE|
|**510**|*jobScheduleId*|Job Schedule Id |InputType.text|REFERENCE|
|**520**|*lRevenueBurdenId*|L Revenue Burden Id |InputType.text|REFERENCE|
|**530**|*lInvoiceBurdernId*|L Invoice Burdern Id |InputType.text|REFERENCE|
|**540**|*nlrScheduleId*|Nlr Schedule Id |InputType.text|REFERENCE|
|**550**|*nrlRevenueBurdenId*|Nrl Revenue Burden Id |InputType.text|REFERENCE|
|**560**|*nlrInvoiceBurdernId*|Nlr Invoice Burdern Id |InputType.text|REFERENCE|
|**570**|*referenceType*|Reference Type |InputType.textField|CONTROL|
|**580**|*referenceKeyName*|Reference Key Name |InputType.text|REFERENCE|
|**590**|*referenceKeyValue*|Reference Key Value |InputType.text|REFERENCE|
|**600**|*directLaborCb*|Direct Labor Cb |InputType.switchField|DEFAULT|
|**610**|*isTemplateCb*|Is Template Cb |InputType.switchField|DEFAULT|
|**620**|*revEnabledCb*|Rev Enabled Cb |InputType.switchField|DEFAULT|
|**630**|*revNumber*|Rev Number |InputType.number|DATA|
|**680**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**690**|*glAcProfileHeaderId*|Gl Ac Profile Header Id |defferedSelect|REFERENCE|
|**5640**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5650**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5660**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5670**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>

### Actions

Copy action allows you to copy all the Project details to a new Project. You can also use other available actions in the action tab to change the Project status, etc.

<img src="/images/modules/prj/project/project_09.PNG" width="800"/>

You can 

Add your custom logic in assets/js/ierp/prj/prj_Project.js file.