## Budget  Header

Budget functionality in inoERP helps organizations automate business expenses entry, approval, and payment processes.
- Employees can create budgets against expenses incurred for various business activities.
- Employees can attach expense bills/receipts.
- Managers can review the budgets with all the attachments 
- Managers can approve/reject/require more info

To create/view/update the budget , navigate to the "expense header"  screen from your dashboard/favorite.


<img src="/images/modules/prj/billing/budget/budget_01.PNG" width="450"/>

Enter the budget  details or other criteria in the search form and click on the search button to view an existing budget .  
v

<img src="/images/modules/prj/billing/budget/budget_02.PNG" width="800"/>

If you don't enter any search criteria, the system will show you all the budgets. If your organization has configured to make any field mandatory for search, you must enter those fields to search budgets.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.

<img src="/images/modules/prj/billing/budget/budget_03.PNG" width="450"/>

If you click on the create new button, the system will open a simple step form to create a new budget . You can click on the detail right bottom to view all the fields available for the object. 

<img src="/images/modules/prj/billing/budget/budget_03a.PNG" width="800"/>

To view the search result in a table format, click on the table icon in the bottom left corner.

To view specific budget  details, click on the menu of that record, and click on view/fetch & view.

<img src="/images/modules/prj/billing/budget/budget_04a.PNG" width="450"/>

You can also click on the expand icon against any item on the search result screen to view the budget  header details such as description, purpose, etc.

<img src="/images/modules/prj/billing/budget/budget_04.PNG" width="800"/>

The system will fetch all the selected document detail line data. Depending on the device size, the document details are shown either right to the search result screen or on a separate screen.

**Total Claim Amount:** A read-only field that shows the sum of the all line amounts in the claim


**Claim Description:** Enter a meaningful description for the budget . It's a mandatory field.


**Total Receipt Amount:** A read-only field that shows the sum of the all line amounts in the claim with a receipt



<img src="/images/modules/prj/billing/budget/budget_05.PNG" width="800"/>


**Approval Status:** A read-only field that shows the current status of the claim


Scroll left, right, up, and down to view all the details. The document line and details are shown in a separate tab.
The default configuration shows fields in various functional groups, such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  

<img src="/images/modules/prj/billing/budget/budget_06.PNG" width="800"/>

You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.



<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*hrBudget HeaderId*|Hr Budget  Header Id |InputType.text|REFERENCE|
|**10**|*hrEmployeeId*|Hr Employee Id |defferedSelect|REFERENCE|
|**20**|*claimDescription*|Claim Description |InputType.textField|DEFAULT|
|**30**|*detailDescription*|Detail Description |InputType.textField|DEFAULT|
|**40**|*claimNumber*|Claim Number |InputType.textField|DATA|
|**50**|*approvalStatus*|Approval Status |InputType.text|CONTROL|
|**60**|*exchangeRateType*|Exchange Rate Type |defferedSelect|CONTROL|
|**70**|*exchangeRate*|Exchange Rate |InputType.textField|FINANCE|
|**80**|*departmentId*|Department Id |InputType.text|REFERENCE|
|**90**|*claimDate*|Claim Date |InputType.date|DATE|
|**100**|*approvedDate*|Approved Date |InputType.date|DATE|
|**110**|*approvedBy*|Approved By |InputType.textField|DEFAULT|
|**120**|*approvedByEmployeeId*|Approved By Employee Id |InputType.text|REFERENCE|
|**130**|*purpose*|Purpose |InputType.textField|DEFAULT|
|**140**|*expenseTemplateId*|Budget  Template Id |InputType.text|REFERENCE|
|**150**|*currency*|Currency |defferedSelect|FINANCE|
|**160**|*docCurrency*|Doc Currency |defferedSelect|FINANCE|
|**170**|*headerAmount*|Header Amount |InputType.textField|FINANCE|
|**180**|*reason*|Reason |InputType.text|REFERENCE|
|**190**|*contactDetails*|Contact Details |InputType.textField|DEFAULT|
|**240**|*glAcProfileHeaderId*|Gl Ac Profile Header Id |defferedSelect|REFERENCE|
|**250**|*srcEntityName*|Src Entity Name |defferedSelect|DEFAULT|
|**260**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**5200**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5210**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5220**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5230**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>



## Budget  Items

<img src="/images/modules/prj/billing/budget/budget_07.PNG" width="800"/>

You can add multiple budget  items to each budget  header. Each budget  item shows an budget  amount, receipt amount, expense type, etc.

<img src="/images/modules/prj/billing/budget/budget_07a.PNG" width="400"/>

Navigate to the "expense line" tab to view/add/update budget  items.  
Click on the add new entity to add a new line. If a line already exists, click on copy entity to copy all the details.
You can enable/disable fields allowed to be copied in the menu configuration.  

<img src="/images/modules/prj/billing/budget/budget_07b.PNG" width="800"/>

**purpose**: Purpose is a mandatory free text field. Enter a purpose for the expense item.

**Claim Amount**: Enter a numeric value in the claim field. The sum of all claim amounts is shown in the claim header as the total claim amount.

<img src="/images/modules/prj/billing/budget/budget_07c.PNG" width="800"/>

Scroll left, right, up, and down view all other fields.

<img src="/images/modules/prj/billing/budget/budget_07d.PNG" width="800"/>

The default configuration shows fields in various functional groups, such as

- Reference
- Control
- Etc  

You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.



Enter all the other fields and click on the save button to save the budget . The app will post all the data to the server and show the messages returned from the server.



<details>
<summary>All Fields</summary>

| Sequence | Name                 | Label                    | InputType             | Field Group |
| -------- | ------------------------ | ------------------------ | --------------------- | ----------- |
|**10**|*hrBudget LineId*|Hr Budget  Line Id |InputType.text|REFERENCE|
|**10**|*hrBudget HeaderId*|Hr Budget  Header Id |InputType.text|REFERENCE|
|**20**|*lineNumber*|Line Number |InputType.textField|DATA|
|**30**|*claimDate*|Claim Date |InputType.date|DATE|
|**40**|*claimAmount*|Claim Amount |InputType.textField|FINANCE|
|**50**|*purpose*|Purpose |InputType.textField|DEFAULT|
|**60**|*receiptAmount*|Receipt Amount |InputType.textField|PLANNING|
|**70**|*receiptCurrency*|Receipt Currency |defferedSelect|PLANNING|
|**80**|*expenseType*|Budget  Type |InputType.textField|CONTROL|
|**90**|*startDate*|Start Date |InputType.date|DATE|
|**100**|*dailyRate*|Daily Rate |InputType.textField|FINANCE|
|**110**|*noOfDays*|No Of Days |InputType.number|DEFAULT|
|**120**|*expenseLocation*|Budget  Location |InputType.textField|ENTITY|
|**130**|*vendorName*|Vendor Name |InputType.textField|DEFAULT|
|**140**|*vendorDetails*|Vendor Details |InputType.textField|DEFAULT|
|**150**|*originalReceiptMissingCb*|Original Receipt Missing Cb |InputType.switchField|PLANNING|
|**160**|*exchangeRate*|Exchange Rate |InputType.textField|FINANCE|
|**170**|*perDiemRate*|Per Diem Rate |InputType.textField|FINANCE|
|**180**|*perDiemDays*|Per Diem Days |InputType.textField|DEFAULT|
|**190**|*mileageUomId*|Mileage Uom Id |defferedSelect|REFERENCE|
|**200**|*mileageDistace*|Mileage Distace |InputType.textField|DEFAULT|
|**210**|*mileageRate*|Mileage Rate |InputType.textField|FINANCE|
|**220**|*ccTransactionId*|Cc Transaction Id |InputType.text|REFERENCE|
|**230**|*ccTransactionDate*|Cc Transaction Date |InputType.date|DATE|
|**240**|*ccAge*|Cc Age |InputType.number|DEFAULT|
|**250**|*ccTransactionAmount*|Cc Transaction Amount |InputType.textField|FINANCE|
|**300**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**310**|*srcEntityName*|Src Entity Name |defferedSelect|DEFAULT|
|**320**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**5260**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5270**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5280**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5290**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>


## Actions

Use actions to start the approval process of an budget .

<img src="/images/modules/hr/payroll/process/process_09.PNG" width="800"/>