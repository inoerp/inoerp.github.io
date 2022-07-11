---
id: employee
title: Employee
sidebar_label: Employee
---

:::caution

This documentation is incomplete.

:::

You can use the employee screen to enter and maintain your employees' personal information, addresses, jobs, roles, payroll, compensation, and work assignment details. The employee screen can be configured to various employee-related information. The default screen shows the below tabs.

1. Header - basic employee information such as First Name, Last Name, Email, Phone, etc
2. Education - education details of the employee
3. Experience - experience details of the employee


:::info

Employee ids need to be assigned to users to access employee-related documents such as Leave Application, Payslip, etc.

:::

## Employee


To create/view/update an employee, navigate to the "employee "  screen from your dashboard/favorite.


<img src="/images/modules/hr/employee/employee_01.PNG" width="350"/>

Enter the employee details or any other criteria in the search form and click on the search button to view an existing employee.  


<img src="/images/modules/hr/employee/employee_02.PNG" width="800"/>

If you don't enter any search criteria, the system will show you all the employees. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search employees.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.

<img src="/images/modules/hr/employee/employee_03.PNG" width="350"/>

If you click on the create new button, the system will open a simple step form to create a new employee. You can click on the detail right bottom to view all the fields available for the object. 

<img src="/images/modules/hr/employee/employee_03a.PNG" width="800"/>

To view the search result in a table format, click on the table icon in the bottom left corner.

To view specific employee details, click on the menu of that record, and click on view/fetch & view.

<img src="/images/modules/hr/employee/employee_04a.PNG" width="800"/>

You can also click on the expand icon against any item on the search result screen to view the employee header details, name, description, revision number, etc.

<img src="/images/modules/hr/employee/employee_04.PNG" width="350"/>

The system will fetch all the selected document detail line data. The document details are shown either right on the search result screen or on a separate screen, depending on the device size.

**First  Name:** Enter the first name of the employee. First name is a mandatory field.

**Last  Name:** Enter the last name of the employee. Last name is a mandatory field.

**Person Type:** Enter the employee type : 'employee', 'ex_employee', 'applicant', 'contract'.



<img src="/images/modules/hr/employee/employee_05.PNG" width="800"/>


Scroll left, right, up, and down to view all the details. The document line and details are shown in a separate tab.
The default configuration shows fields in various functional groups, such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  

<img src="/images/modules/hr/employee/employee_06.PNG" width="800"/>

You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.

**Employee  Name:** It's a read-only field. The system shows "firstName lastName" as the employee name.

**Email:** Enter the employee's email address. The address can be the same or different from the Email on the user. The system sends notifications using Email on the user object.

<img src="/images/modules/hr/employee/employee_06a.PNG" width="800"/>

The reference groups show various ids for reference only. You don't need to enter any information in this section. When you save an employee for the first time, the system will auto-populate the newly created header id and line ids.

<img src="/images/modules/hr/employee/employee_06b.PNG" width="800"/>


<img src="/images/modules/hr/employee/employee_06c.PNG" width="800"/>


<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*vvHrJobName*| Hr Job Name |defferedSelect|CONTROL|
|**10**|*vvHrJobCode*| Hr Job Code |defferedSelect|CONTROL|
|**20**|*vvHrCompensationName*| Hr Compensation Name |defferedSelect|DEFAULT|
|**30**|*vvHrCompensationRevisionNumber*| Hr Compensation Revision Number |defferedSelect|DATA|
|**40**|*vvHrGrade*| Hr Grade |defferedSelect|CONTROL|
|**50**|*vvHrGradeRank*| Hr Grade Rank |defferedSelect|CONTROL|
|**60**|*vvHrPositionName*| Hr Position Name |defferedSelect|CONTROL|
|**70**|*vvPayrollName*| Payroll Name |defferedSelect|CONTROL|
|**80**|*vvPayrollCode*| Payroll Code |defferedSelect|CONTROL|
|**90**|*vvEntitlementName*| Entitlement Name |defferedSelect|DEFAULT|
|**100**|*vvEmpLeaveEntitlementHeaderId*| Emp Leave Entitlement Header Id |InputType.text|REFERENCE|
|**110**|*vvEmpCompensationHeaderId*| Emp Compensation Header Id |InputType.text|REFERENCE|
|**120**|*vvEmployeeName*| Employee Name |defferedSelect|ENTITY|
|**130**|*hrEmployeeId*|Hr Employee Id |InputType.text|REFERENCE|
|**140**|*identificationNumber*|Identification Number |InputType.textField|DATA|
|**150**|*startDate*|Start Date |InputType.date|DATE|
|**160**|*identificationType*|Identification Type |InputType.textField|CONTROL|
|**170**|*citizenNumber*|Citizen Number |InputType.textField|DATA|
|**180**|*firstName*|First Name |InputType.textField|DEFAULT|
|**190**|*lastName*|Last Name |InputType.textField|DEFAULT|
|**200**|*phone*|Phone |InputType.textField|ENTITY|
|**210**|*email*|Email |InputType.textField|ENTITY|
|**220**|*language*|Language |InputType.textField|DEFAULT|
|**230**|*title*|Title |InputType.textField|DEFAULT|
|**240**|*gender*|Gender |InputType.select|DEFAULT|
|**250**|*personType*|Person Type |InputType.select|CONTROL|
|**260**|*dateOfBirth*|Date Of Birth |InputType.date|personal|
|**270**|*cityOfBirth*|City Of Birth |InputType.textField|personal|
|**280**|*countryOfBirth*|Country Of Birth |InputType.textField|personal|
|**290**|*nationality*|Nationality |InputType.textField|personal|
|**300**|*disabilityCode*|Disability Code |InputType.textField|personal|
|**310**|*maritalStatus*|Marital Status |InputType.select|personal|
|**320**|*degree*|Degree |InputType.textField|personal|
|**330**|*highestEducation*|Highest Education |InputType.textField|personal|
|**340**|*educationDetails*|Education Details |InputType.textField|personal|
|**350**|*noOfChildren*|No Of Children |InputType.number|personal|
|**360**|*homeAddressId*|Home Address Id |InputType.text|REFERENCE|
|**370**|*homeAddress*|Home Address |InputType.textField|ENTITY|
|**380**|*permanentAddress*|Permanent Address |InputType.textField|ENTITY|
|**390**|*permanentAddressId*|Permanent Address Id |InputType.text|REFERENCE|
|**400**|*mobileNumber*|Mobile Number |InputType.textField|DATA|
|**410**|*homePhoneNumber*|Home Phone Number |InputType.textField|DATA|
|**420**|*otherEmail*|Other Email |InputType.textField|ENTITY|
|**430**|*dateFirstHired*|Date First Hired |InputType.date|DATE|
|**440**|*legalOrgId*|Legal Org Id |defferedSelect|REFERENCE|
|**450**|*hrJobId*|Hr Job Id |defferedSelect|REFERENCE|
|**460**|*hrPositionId*|Hr Position Id |defferedSelect|REFERENCE|
|**470**|*hrPayrollId*|Hr Payroll Id |defferedSelect|REFERENCE|
|**480**|*hrGradeId*|Hr Grade Id |defferedSelect|REFERENCE|
|**490**|*hrCompensationHeaderId*|Hr Compensation Header Id |defferedSelect|REFERENCE|
|**500**|*hrLeaveEntitlementHeaderId*|Hr Leave Entitlement Header Id |defferedSelect|REFERENCE|
|**510**|*locationId*|Location Id |InputType.text|REFERENCE|
|**520**|*jobType*|Job Type |InputType.select|CONTROL|
|**530**|*jobStatus*|Job Status |InputType.select|CONTROL|
|**540**|*supervisorEmployeeId*|Supervisor Employee Id |InputType.text|REFERENCE|
|**550**|*probationPeriodUom*|Probation Period Uom |defferedSelect|FINANCE|
|**560**|*probationPeriod*|Probation Period |InputType.number|FINANCE|
|**570**|*noticePeriodUom*|Notice Period Uom |defferedSelect|FINANCE|
|**580**|*noticePeriod*|Notice Period |InputType.number|FINANCE|
|**590**|*revisionNumber*|Revision Number |InputType.number|DATA|
|**600**|*workPolicyId*|Work Policy Id |InputType.text|REFERENCE|
|**610**|*expenseAcId*|Expense Ac Id |defferedSelect|REFERENCE|
|**620**|*salaryAcId*|Salary Ac Id |defferedSelect|REFERENCE|
|**630**|*performanceId*|Performance Id |InputType.text|REFERENCE|
|**640**|*vehicleNumber*|Vehicle Number |InputType.textField|DATA|
|**650**|*assetNumbers*|Asset Numbers |InputType.textField|DATA|
|**660**|*contractId*|Contract Id |InputType.text|REFERENCE|
|**670**|*bankAccountId*|Bank Account Id |InputType.text|REFERENCE|
|**680**|*taxRegNumber*|Tax Reg Number |InputType.textField|DATA|
|**690**|*socialAcNo*|Social Ac No |InputType.textField|personal|
|**700**|*socialAcNo2*|Social Ac No 2|InputType.textField|personal|
|**710**|*passportNumber*|Passport Number |InputType.textField|DATA|
|**760**|*glAcProfileHeaderId*|Gl Ac Profile Header Id |defferedSelect|REFERENCE|
|**770**|*srcEntityName*|Src Entity Name |defferedSelect|DEFAULT|
|**780**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**5720**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5730**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5740**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5750**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>



## Education

<img src="/images/modules/hr/employee/employee_07.PNG" width="800"/>

You can maintain employee education on the education tab. Employees can also add/update their education details in the self-service work area.


You can add multiple employee education details to each employee header. Each employee's education shows an employee's education name, code, education type, education value, etc.

<img src="/images/modules/hr/employee/employee_07a.PNG" width="350"/>

Navigate to the "employee education" tab to view/add/update employee education details.  
Click on the add new entity to add a new line. If a line already exists, click on copy entity to copy all the details.
You can enable/disable fields allowed to be copied in the menu configuration.  

<img src="/images/modules/hr/employee/employee_07b.PNG" width="800"/>


**Degree Level**: Select an education degree level. It's mandatory field with several values : 'high_school', 'apprenticeship', 'diploma', 'associate', 'bachelor', 'master', 'doctoral', 'professional', 'other'

You can make any other field, such as institute, education mode, start date, end date, etc., mandatory by changing the configuration.

<img src="/images/modules/hr/employee/employee_07c.PNG" width="800"/>


Scroll left, right, up, and down view all other fields.  
The reference groups show various ids for reference only. You don't need to enter any information in this section.



The default configuration shows fields in various functional groups, such as

- Reference
- Control
- Etc  

You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.

<img src="/images/modules/hr/employee/employee_07d.PNG" width="800"/>



Enter all the other fields and click on the save button to save the employee. The app will post all the data to the server and will show the messages returned from the server.



<details>
<summary>All Fields</summary>

| Sequence | Name                 | Label                    | InputType             | Field Group |
| -------- | ------------------------ | ------------------------ | --------------------- | ----------- |
|**10**|*hrEmployeeEducationId*|Hr Employee Education Id |InputType.text|REFERENCE|
|**10**|*hrEmployeeId*|Hr Employee Id |defferedSelect|REFERENCE|
|**20**|*degreeLevel*|Degree Level |InputType.select|DEFAULT|
|**30**|*seq*|Seq |InputType.number|DEFAULT|
|**40**|*degreeName*|Degree Name |InputType.textField|DEFAULT|
|**50**|*institute*|Institute |InputType.textField|DEFAULT|
|**60**|*instituteAddress*|Institute Address |InputType.textField|ENTITY|
|**70**|*specialization*|Specialization |InputType.textField|DEFAULT|
|**80**|*eduStartDate*|Edu Start Date |InputType.date|DATE|
|**90**|*eduEndDate*|Edu End Date |InputType.date|DATE|
|**100**|*modeOfEducation*|Mode Of Education |InputType.select|DEFAULT|
|**110**|*grade*|Grade |InputType.textField|DEFAULT|
|**120**|*marksPercentage*|Marks Percentage |InputType.textField|DEFAULT|
|**130**|*comments*|Comments |InputType.textField|DEFAULT|
|**180**|*srcEntityName*|Src Entity Name |defferedSelect|DEFAULT|
|**190**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**5140**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5150**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5160**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5170**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|
</details>



## Experience
<img src="/images/modules/hr/employee/employee_08.PNG" width="800"/>

You can maintain employee experiences on the experience tab. Employees can also add/update their experience details in the self-service work area.


You can add multiple employee experience details to each employee header. Each employee experience shows an employee experience name, code, experience type, experience value, etc.

<img src="/images/modules/hr/employee/employee_08a.PNG" width="350"/>

Navigate to the "employee experience" tab to view/add/update employee experience details.  
Click on the add new entity to add a new line. If a line already exists, click on copy entity to copy all the details.
You can enable/disable fields allowed to be copied in the menu configuration.  

<img src="/images/modules/hr/employee/employee_08b.PNG" width="800"/>


**Designation**:Enter a designation. It's a free text mandatory field.

**Organization**:Enter the name of the organization. It's also another free text mandatory field.

You can make any other field, such as job, position, salary, etc., mandatory by changing the configuration.

<img src="/images/modules/hr/employee/employee_08c.PNG" width="800"/>


Scroll left, right, up, and down view all other fields.  
The reference groups show various ids for reference only. You don't need to enter any information in this section.



The default configuration shows fields in various functional groups, such as

- Reference
- Control
- Etc  

You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.




Enter all the other fields and click on the save button to save the employee. The app will post all the data to the server and will show the messages returned from the server.



<details>
<summary>All Fields</summary>

| Sequence | Name                 | Label                    | InputType             | Field Group |
| -------- | ------------------------ | ------------------------ | --------------------- | ----------- |
|**10**|*hrEmployeeExperienceId*|Hr Employee Experience Id |InputType.text|REFERENCE|
|**10**|*hrEmployeeId*|Hr Employee Id |defferedSelect|REFERENCE|
|**20**|*organizationName*|Organization Name |InputType.textField|ENTITY|
|**30**|*designation*|Designation |InputType.textField|DEFAULT|
|**40**|*employmentType*|Employment Type |InputType.select|CONTROL|
|**50**|*seq*|Seq |InputType.number|DEFAULT|
|**60**|*employeeNumber*|Employee Number |InputType.textField|DATA|
|**70**|*department*|Department |InputType.textField|DEFAULT|
|**80**|*workStartDate*|Work Start Date |InputType.date|DATE|
|**90**|*workEndDate*|Work End Date |InputType.date|DATE|
|**100**|*job*|Job |InputType.textField|DEFAULT|
|**110**|*position*|Position |InputType.textField|DEFAULT|
|**120**|*grade*|Grade |InputType.textField|DEFAULT|
|**130**|*lastManager*|Last Manager |InputType.textField|DEFAULT|
|**140**|*lastDrawnSalary*|Last Drawn Salary |InputType.textField|DEFAULT|
|**150**|*communicationDetails*|Communication Details |InputType.textField|DEFAULT|
|**160**|*projectDetails*|Project Details |InputType.textField|DEFAULT|
|**170**|*srcEntityName*|Src Entity Name |defferedSelect|DEFAULT|
|**180**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**5190**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5200**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5210**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5220**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>



