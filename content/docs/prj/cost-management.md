---
id: cost-management
title: Cost Management
sidebar_label: Costing
---

:::caution

This documentation is incomplete.

:::


Project cost management is the process of budgeting, calculating, and controlling costs throughout the project life cycle to keep expenditures and revenues within the approved budget.

## Cost Calculation

Cost can be charged to a project in 3 different ways.
* ***Material Transaction*** - All the costed materials used in a project can be charged to a project through material transactions. (Refer to [inventory transaction](transaction.md) for more details)
* ***Resource Transaction*** - All the costed resources used in a project can be charged to a project through resource transactions.  (Refer to [resource transaction](transaction#resource-transaction) for more details)
* ***Misc. Expenditures*** - All other expenses can be recorded through misc expenditures.(Refer to [project expenditures](cost-management#project-expenditure) for more details)

Inventory modules own material transactions and thus, follow the inventory accounting process. Similarly, Resource transaction is owned by Human Capital Module and follows the HCM accounting practice. 

Expenditures are owned by the project module and are accounted for using the project accounting and journal rules. 

```
Total Project Cost = Total Material Transaction Cost 
                     + Total Resource Transaction Cost 
                     + Total Misc. Expenditures

```


:::info

Only accounted expenditures are considered in the total project cost calculation.

:::


## Project Cost

To view/update the project cost, navigate to the "project cost"  screen from your dashboard/favorite.


<img src="/images/modules/prj/costing/project_cost/project_cost_01.PNG" width="450"/>

Enter the project cost details or other criteria in the search form and click on the search button to view an existing project cost.  

<img src="/images/modules/prj/costing/project_cost/project_cost_02.PNG" width="800"/>

The system will show you all the project costs if you don't enter the search criteria. If your organization configures any field mandatory for search, you must enter those fields to search project costs.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.

<img src="/images/modules/prj/costing/project_cost/project_cost_03.PNG" width="350"/>

Project cost is a hierarchical view. You can view all the material, resources, and misc—expenditures by navigating to the respective tabs. The system will show you the sum of all project costs for different tasks.



To view the search result in a table format, click on the table icon in the bottom left corner.

To view specific project cost details, click on the menu of that record, and click on view/fetch & view.

<img src="/images/modules/prj/costing/project_cost/project_cost_04.PNG" width="800"/>

You can also click the expand icon against any item on the search result screen to view the project cost header details such as description, project number, etc.


The system will fetch all the selected document detail line data. Depending on the device size, the document details are shown either right to the search result screen or on a separate screen.

**Material Cost:** Sum of all the material costs in the project. To view the details of the material transaction, navigate to the "material cost" screen from your dashboard/favorite or click on the material tab.

**Resource Cost:** Sum of all the resource costs in the project. To view the details of the resource transaction, navigate to the "resource cost" screen from your dashboard/favorite or click on the resource tab.

**Misc. Expenditure:** Sum of all the misc. Expenditure in the project. To view the details of the "misc. expenditure" transactions, navigate to the "misc. expenditure" screen from your dashboard/favorite or click on the "misc expenditure" tab.

<img src="/images/modules/prj/costing/project_cost/project_cost_05.PNG" width="800"/>

You can use the "Update project cost" button in the action tab to update the project cost. The "update project cost" program recalculates all the project expenses and updates the project cost.

Scroll left, right, up, and down to view all the details. The document line and details are shown in a separate tab.
The default configuration shows fields in various functional groups, such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  

<img src="/images/modules/prj/costing/project_cost/project_cost_06.PNG" width="800"/>

You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.



<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*lastRefreshDate*|Last Refresh Date |InputType.dateTime|DATE|
|**10**|*materialCost*|Material Cost |InputType.textField|cost|
|**20**|*resourceCost*|Resource Cost |InputType.textField|cost|
|**30**|*miscExpenditure*|Misc Expenditure |InputType.textField|cost|
|**40**|*prjProjectHeaderId*|Prj Project Header Id |InputType.text|REFERENCE|
|**50**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**60**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**70**|*projectSource*|Project Source |InputType.textField|DEFAULT|
|**80**|*projectName*|Project Name |deferredSelect|DEFAULT|
|**90**|*buOrgId*|Bu Org Id |deferredSelect|REFERENCE|
|**100**|*prjProjectType*|Prj Project Type |InputType.select|CONTROL|
|**110**|*projectClass*|Project Class |InputType.textField|DEFAULT|
|**120**|*projectNumber*|Project Number |deferredSelect|DATA|
|**130**|*arCustomerId*|Ar Customer Id |deferredSelect|REFERENCE|
|**140**|*arCustomerSiteId*|Ar Customer Site Id |deferredSelect|REFERENCE|
|**150**|*pmEmployeeId*|Pm Employee Id |deferredSelect|REFERENCE|
|**160**|*projectStatus*|Project Status |InputType.select|CONTROL|
|**170**|*approvalStatus*|Approval Status |InputType.text|CONTROL|
|**180**|*description*|Description |InputType.textField|DEFAULT|
|**190**|*managerUserId*|Manager User Id |InputType.text|REFERENCE|
|**200**|*completionPercentage*|Completion Percentage |InputType.textField|DEFAULT|
|**210**|*startDate*|Start Date |InputType.date|DATE|
|**220**|*completionDate*|Completion Date |InputType.date|DATE|
|**230**|*headerAmount*|Header Amount |InputType.textField|FINANCE|
|**240**|*category*|Category |InputType.textField|DEFAULT|
|**250**|*financeStructureCb*|Finance Structure Cb |InputType.switchField|FINANCE|
|**260**|*operationStructureCb*|Operation Structure Cb |InputType.switchField|DEFAULT|
|**270**|*lifeCycle*|Life Cycle |InputType.textField|DEFAULT|
|**280**|*currentPhase*|Current Phase |InputType.textField|DEFAULT|
|**290**|*roleListId*|Role List Id |InputType.text|REFERENCE|
|**300**|*prjWorkType*|Prj Work Type |InputType.number|CONTROL|
|**310**|*probability*|Probability |InputType.textField|DEFAULT|
|**320**|*docCurrency*|Doc Currency |deferredSelect|FINANCE|
|**330**|*exchangeRateType*|Exchange Rate Type |deferredSelect|CONTROL|
|**340**|*exchangeRate*|Exchange Rate |InputType.textField|FINANCE|
|**350**|*opportunityValue*|Opportunity Value |InputType.textField|DEFAULT|
|**360**|*expectedApprovalDate*|Expected Approval Date |InputType.date|DATE|
|**370**|*billing periods*|billing periods|InputType.number|FINANCE|
|**380**|*referenceType*|Reference Type |InputType.textField|CONTROL|
|**390**|*referenceKeyName*|Reference Key Name |InputType.text|REFERENCE|
|**400**|*referenceKeyValue*|Reference Key Value |InputType.text|REFERENCE|
|**410**|*directLaborCb*|Direct Labor Cb |InputType.switchField|DEFAULT|
|**420**|*isTemplateCb*|Is Template Cb |InputType.switchField|DEFAULT|
|**430**|*revEnabledCb*|Rev Enabled Cb |InputType.switchField|DEFAULT|
|**440**|*revNumber*|Rev Number |InputType.number|DATA|
|**490**|*docStatus*|Doc Status |InputType.text|CONTROL|
|**500**|*glAcProfileHeaderId*|Gl Ac Profile Header Id |deferredSelect|REFERENCE|
|**5450**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5460**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5470**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5480**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>

### Expenditure Line

<img src="/images/modules/prj/costing/project_cost/project_cost_07.PNG" width="800"/>

Navigate to the expenditure lines tab to view all expenditures charged to the project. The expenditure lines tab shows all the expenditure lines of the project. The sum of all the expenditure lines is shown in the expenditure cost field in the basics tab.

You can add multiple lines to each project cost header. Each project cost line shows expenditure type, project number, line amount, etc.

<img src="/images/modules/inv/transaction_doc/transaction_doc_07a.PNG" width="400"/>

**Expenditure Type**: This shows the type of expenditure. You can charge the same expenditure type to multiple lines.

**Line Amount**: The total amount of the expenditure line.

**Expenditure Date**: The date of the expenditure.
  
<img src="/images/modules/prj/costing/project_cost/project_cost_07b.PNG" width="800"/>


### Resource Transaction

<img src="/images/modules/prj/costing/project_cost/project_cost_08.PNG" width="800"/>

Navigate to the resource transactions tab to view all resource costs charged to the project. The resource transactions tab shows all the resource transactions of the project. The sum of all the resource transactions is shown in the resource cost field in the basics tab.

You can add multiple lines to each project cost header. Each project cost line shows resource cost type, project number, line amount, etc.

<img src="/images/modules/prj/costing/project_cost/project_cost_08a.PNG" width="800"/>

**Transaction Type**: This shows the type of resource transaction. You can charge the same resource transaction type to multiple lines.

**Transaction Quantity**The total quantity of the resource transaction. The system automatically calculates the line amount based on the transaction quantity and resource unit price.

**Transaction Date**: The date of the resource transaction.
  
<img src="/images/modules/prj/costing/project_cost/project_cost_08b.PNG" width="800"/>


### Material Transaction

<img src="/images/modules/prj/costing/project_cost/project_cost_10.PNG" width="800"/>

Navigate to the material transactions tab to view all material costs charged to the project. The material transactions tab shows all the material transactions of the project. The material transactions sum is shown in the material cost field in the basics tab.

You can add multiple lines to each project cost header. Each project cost line shows material cost type, project number, line amount, etc.

<img src="/images/modules/prj/costing/project_cost/project_cost_10a.PNG" width="800"/>

**Transaction Type**: This shows the type of material transaction. You can charge the same material transaction type to multiple lines.

**Transaction Quantity**The total quantity of the material transaction. The system automatically calculates the line amount based on the transaction quantity and material unit price.

**Transaction Date**: The date of the material transaction.
  
<img src="/images/modules/prj/costing/project_cost/project_cost_10b.PNG" width="800"/>


### Actions

Use actions to update the project cost. The "update project cost" recalculates all the project expenses and updates the project cost. When you run the update cost for the first time, the system inserts a new task cost record for the project. On each subsequent update, the system updates the existing task cost record.

<img src="/images/modules/prj/costing/project_cost/project_cost_09.PNG" width="800"/>



## Project Expenditure

You can charge expenditures to a project to record expenses incurred for various business activities that are not captured via material and resource transactions.

To create/view/update the expenditure, navigate to the "expenditure"  screen from your dashboard/favorite.


<img src="/images/modules/prj/costing/expenditure/expenditure_01.PNG" width="450"/>

Enter the expenditure details or other criteria in the search form and click on the search button to view an existing expenditure.  

<img src="/images/modules/prj/costing/expenditure/expenditure_02.PNG" width="800"/>

The system will show you all the expenditures if you don't enter any search criteria. If your organization has configured to make any field mandatory for search, you must enter those fields to search expenditures.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.

:::info

You can't update an accounted expenditure.

:::

<img src="/images/modules/prj/costing/expenditure/expenditure_03.PNG" width="350"/>

If you click on the create a new button, the system will open a simple step form to create a new expenditure. You can click on the detail right bottom to view all the fields available for the object. 

<img src="/images/modules/prj/costing/expenditure/expenditure_03a.PNG" width="800"/>

To view the search result in a table format, click on the table icon in the bottom left corner.

To view specific expenditure details, click on the menu of that record, and click on view/fetch & view.

<img src="/images/modules/prj/costing/expenditure/expenditure_04a.PNG" width="350"/>

You can also click on the expand icon against any item on the search result screen to view the expenditure header details such as description, purpose, etc.

<img src="/images/modules/prj/costing/expenditure/expenditure_04.PNG" width="800"/>

The system will fetch all the selected document detail line data. Depending on the device size, the document details are shown either right to the search result screen or on a separate screen.

**Batch Name:** Enter a meaningful name for the expenditure batch. It's a mandatory field.

**Business Organization:** Select the business organization to which the expenditure belongs. The business organization is a mandatory field and must be the same as the business organization of the project.

<img src="/images/modules/prj/costing/expenditure/expenditure_05.PNG" width="800"/>

**Total Amount:** A read-only field that shows the sum of all line amounts in the expenditure.

Scroll left, right, up, and down to view all the details. The document line and details are shown in a separate tab.
The default configuration shows fields in various functional groups, such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  

**GL Document Type:** A read-only field that shows the GL document type for project expenditure.

<img src="/images/modules/prj/costing/expenditure/expenditure_06.PNG" width="800"/>

You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.



<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*hrExpenditureHeaderId*|Hr Expenditure Header Id |InputType.text|REFERENCE|
|**10**|*hrEmployeeId*|Hr Employee Id |deferredSelect|REFERENCE|
|**20**|*Description*|Claim Description |InputType.textField|DEFAULT|
|**30**|*detailDescription*|Detail Description |InputType.textField|DEFAULT|
|**40**|*Number*|Claim Number |InputType.textField|DATA|
|**50**|*approvalStatus*|Approval Status |InputType.text|CONTROL|
|**60**|*exchangeRateType*|Exchange Rate Type |deferredSelect|CONTROL|
|**70**|*exchangeRate*|Exchange Rate |InputType.textField|FINANCE|
|**80**|*departmentId*|Department Id |InputType.text|REFERENCE|
|**90**|*Date*|Claim Date |InputType.date|DATE|
|**100**|*approvedDate*|Approved Date |InputType.date|DATE|
|**110**|*approvedBy*|Approved By |InputType.textField|DEFAULT|
|**120**|*approvedByEmployeeId*|Approved By Employee Id |InputType.text|REFERENCE|
|**130**|*purpose*|Purpose |InputType.textField|DEFAULT|
|**140**|*expenditureTemplateId*|Expenditure Template Id |InputType.text|REFERENCE|
|**150**|*currency*|Currency |deferredSelect|FINANCE|
|**160**|*docCurrency*|Doc Currency |deferredSelect|FINANCE|
|**170**|*headerAmount*|Header Amount |InputType.textField|FINANCE|
|**180**|*reason*|Reason |InputType.text|REFERENCE|
|**190**|*contactDetails*|Contact Details |InputType.textField|DEFAULT|
|**240**|*glAcProfileHeaderId*|Gl Ac Profile Header Id |deferredSelect|REFERENCE|
|**250**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**260**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**5200**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5210**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5220**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5230**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>



### Expenditure Items

<img src="/images/modules/prj/costing/expenditure/expenditure_07.PNG" width="800"/>

You can add multiple expenditure items to each expenditure header. Each expenditure item shows an expenditure amount, receipt amount, expenditure type, etc.

<img src="/images/modules/prj/costing/expenditure/expenditure_07a.PNG" width="350"/>

Navigate to the "expenditure line" tab to view/add/update expenditure items.  
Click on the add new entity to add a new line. If a line already exists, click on copy entity to copy all the details.
You can enable/disable fields allowed to be copied in the menu configuration.  

<img src="/images/modules/prj/costing/expenditure/expenditure_07b.PNG" width="800"/>

**purpose**: Purpose is a mandatory free text field. Enter a purpose for the expenditure item.

**Claim Amount**: Enter a numeric value in the field. The sum of all amounts is shown in the header as the total amount.

<img src="/images/modules/prj/costing/expenditure/expenditure_07c.PNG" width="800"/>

Scroll left, right, up, and down view all other fields.

<img src="/images/modules/prj/costing/expenditure/expenditure_07d.PNG" width="800"/>

The default configuration shows fields in various functional groups, such as

- Reference
- Control
- Etc  

You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.



Enter all the other fields and click on the save button to save the expenditure. The app will post all the data to the server and show the messages returned from the server.



<details>
<summary>All Fields</summary>

| Sequence | Name                 | Label                    | InputType             | Field Group |
| -------- | ------------------------ | ------------------------ | --------------------- | ----------- |
|**10**|*hrExpenditureLineId*|Hr Expenditure Line Id |InputType.text|REFERENCE|
|**10**|*hrExpenditureHeaderId*|Hr Expenditure Header Id |InputType.text|REFERENCE|
|**20**|*lineNumber*|Line Number |InputType.textField|DATA|
|**30**|*Date*|Claim Date |InputType.date|DATE|
|**40**|*Amount*|Claim Amount |InputType.textField|FINANCE|
|**50**|*purpose*|Purpose |InputType.textField|DEFAULT|
|**60**|*receiptAmount*|Receipt Amount |InputType.textField|PLANNING|
|**70**|*receiptCurrency*|Receipt Currency |deferredSelect|PLANNING|
|**80**|*expenditureType*|Expenditure Type |InputType.textField|CONTROL|
|**90**|*startDate*|Start Date |InputType.date|DATE|
|**100**|*dailyRate*|Daily Rate |InputType.textField|FINANCE|
|**110**|*noOfDays*|No Of Days |InputType.number|DEFAULT|
|**120**|*expenditureLocation*|Expenditure Location |InputType.textField|ENTITY|
|**130**|*vendorName*|Vendor Name |InputType.textField|DEFAULT|
|**140**|*vendorDetails*|Vendor Details |InputType.textField|DEFAULT|
|**150**|*originalReceiptMissingCb*|Original Receipt Missing Cb |InputType.switchField|PLANNING|
|**160**|*exchangeRate*|Exchange Rate |InputType.textField|FINANCE|
|**170**|*perDiemRate*|Per Diem Rate |InputType.textField|FINANCE|
|**180**|*perDiemDays*|Per Diem Days |InputType.textField|DEFAULT|
|**190**|*mileageUomId*|Mileage Uom Id |deferredSelect|REFERENCE|
|**200**|*mileageDistance*|Mileage Distance |InputType.textField|DEFAULT|
|**210**|*mileageRate*|Mileage Rate |InputType.textField|FINANCE|
|**220**|*ccTransactionId*|Cc Transaction Id |InputType.text|REFERENCE|
|**230**|*ccTransactionDate*|Cc Transaction Date |InputType.date|DATE|
|**240**|*ccAge*|Cc Age |InputType.number|DEFAULT|
|**250**|*ccTransactionAmount*|Cc Transaction Amount |InputType.textField|FINANCE|
|**300**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**310**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**320**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**5260**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5270**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5280**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5290**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>


### Actions

You can use "Create Accounting" actions to create accounting entries for a "misc. expenditure."

<img src="/images/modules/prj/costing/expenditure/expenditure_09.PNG" width="800"/>
