---
id: organization
title: Organization
sidebar_label: Organization
---


:::caution

This documentation is incomplete.

:::

<img src="/images/modules/mdm/org/org_99.PNG" width="700"/>



## Inventory Organization

An inventory organization is a sub-division of an inventory organization with separate operational ownership. All manufacturing, receiving, shipping, stock maintenance activities are carried out at the inventory organization level.
Inventory organizations represent distinct entities in your inventory organization that provides the following functions:
- A physical area such as a manufacturing facility, warehouse, or distribution center.
- Inventory identification for an item. Different inventory organizations might have different item attributes for the same item. 
- Provide a mechanism to track stock and establishes ownership of inventory

To create/view/update an inventory organization, navigate to the "inventory organization"  screen from your dashboard/favorite.


<img src="/images/modules/mdm/org/inventory_org/inventory_org_01.PNG" width="350"/>

Enter the organization/inventory organization details or any other criteria in the search form and click on the search button to view an existing inventory organization.  


<img src="/images/modules/mdm/org/inventory_org/inventory_org_02.PNG" width="800"/>

If you don't enter organization details, the system will show you all the inventory organizations. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search inventory organizations.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.


If you click on the create new button, the system will open a simple step form to create a new inventory organization. You can click on the detail right bottom to view all the fields available for the object. 

<img src="/images/modules/mdm/org/inventory_org/inventory_org_03.PNG" width="350"/>

To view the search result in a table format, click on the table icon in the bottom left corner.

To view specific inventory organization details, click on the menu of that record, and click on view/fetch & view.

<img src="/images/modules/mdm/org/inventory_org/inventory_org_04.PNG" width="800"/>

You can also click on the expand icon against any item on the search result screen to view the inventory organization header details, such as inventory organization, description, etc.


The system will fetch all the selected entity data. The entity details are shown either right to the search result screen or in a separate screen, depending on the device size.

<img src="/images/modules/mdm/org/inventory_org/inventory_org_04a.PNG" width="400"/>



Scroll left, right, up, down to view all the details. The document line and details are shown in a separate tab..
The default configuration shows fields in various functional groups such as

- Reference
- Control
- Etc  

<img src="/images/modules/mdm/org/inventory_org/inventory_org_05.PNG" width="800"/>


You can configure the application to show which fields should be shown under which group. You can also create new groups as per your inventory requirements.



<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*mdmInventoryOrgId*|Mdm Inventory Org Id |deferredSelect|PLANNING|
|**10**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**20**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**30**|*mdmBusinessOrgId*|Mdm Business Org Id |deferredSelect|REFERENCE|
|**40**|*inventoryType*|Inventory Type |InputType.select|CONTROL|
|**50**|*inventoryCode*|Inventory Code |deferredSelect|DEFAULT|
|**60**|*inventoryOrgName*|Inventory Org Name |deferredSelect|ENTITY|
|**70**|*isItemMaster*|Is Item Master |InputType.checkBox|DEFAULT|
|**80**|*masterInventoryId*|Master Inventory Id |InputType.text|REFERENCE|
|**90**|*calendar*|Calendar |deferredSelect|DEFAULT|
|**100**|*locatorControl*|Locator Control |InputType.textField|ENTITY|
|**110**|*allowNegativeBalanceCb*|Allow Negative Balance Cb |InputType.switchField|DEFAULT|
|**120**|*costingOrg*|Costing Org |deferredSelect|FINANCE|
|**130**|*posPriceListHeaderId*|Pos Price List Header Id |InputType.text|REFERENCE|
|**140**|*costingMethod*|Costing Method |InputType.textField|FINANCE|
|**150**|*transferToGlCb*|Transfer To Gl Cb |InputType.switchField|DEFAULT|
|**160**|*defaultCostGroup*|Default Cost Group |InputType.textField|PLANNING|
|**170**|*materialAcId*|Material Ac Id |deferredSelect|REFERENCE|
|**180**|*materialOhAcId*|Material Oh Ac Id |deferredSelect|REFERENCE|
|**190**|*overheadAcId*|Overhead Ac Id |deferredSelect|REFERENCE|
|**200**|*resourceAcId*|Resource Ac Id |deferredSelect|REFERENCE|
|**210**|*expenseAcId*|Expense Ac Id |deferredSelect|REFERENCE|
|**220**|*lotUniqueness*|Lot Uniqueness |InputType.textField|CONTROL|
|**230**|*lotGeneration*|Lot Generation |InputType.textField|CONTROL|
|**240**|*lotPrefix*|Lot Prefix |InputType.textField|CONTROL|
|**250**|*lotStartingNumber*|Lot Starting Number |InputType.textField|DATA|
|**260**|*serialUniqueness*|Serial Uniqueness |InputType.textField|CONTROL|
|**270**|*serialGeneration*|Serial Generation |InputType.textField|CONTROL|
|**280**|*serialPrefix*|Serial Prefix |InputType.textField|CONTROL|
|**290**|*serialStartingNumber*|Serial Starting Number |InputType.textField|DATA|
|**300**|*atp*|Atp |InputType.textField|DEFAULT|
|**310**|*pickingRule*|Picking Rule |InputType.textField|DEFAULT|
|**320**|*sourcingRule*|Sourcing Rule |InputType.textField|DEFAULT|
|**330**|*interOrgPpvAcId*|Inter Org Ppv Ac Id |deferredSelect|REFERENCE|
|**340**|*interOrgReceivableAcId*|Inter Org Receivable Ac Id |deferredSelect|REFERENCE|
|**350**|*interOrgPayableAcId*|Inter Org Payable Ac Id |deferredSelect|REFERENCE|
|**360**|*interOrgIntransitAcId*|Inter Org Intransit Ac Id |deferredSelect|REFERENCE|
|**370**|*invApAccrualAcId*|Inv Ap Accrual Ac Id |deferredSelect|REFERENCE|
|**380**|*invApExpAccrualAcId*|Inv Ap Exp Accrual Ac Id |deferredSelect|REFERENCE|
|**390**|*invPpvAcId*|Inv Ppv Ac Id |deferredSelect|REFERENCE|
|**400**|*invIpvAcId*|Inv Ipv Ac Id |deferredSelect|REFERENCE|
|**410**|*salesAcId*|Sales Ac Id |deferredSelect|REFERENCE|
|**420**|*cogsAcId*|Cogs Ac Id |deferredSelect|REFERENCE|
|**430**|*deferredCogsAcId*|Deferred Cogs Ac Id |deferredSelect|REFERENCE|
|**440**|*costupdateAcId*|Costupdate Ac Id |deferredSelect|REFERENCE|
|**450**|*itemRevEnabledCb*|Item Rev Enabled Cb |InputType.switchField|DEFAULT|
|**460**|*revStartNumber*|Rev Start Number |InputType.textField|DATA|
|**470**|*status*|Status |InputType.select|CONTROL|
|**480**|*revEnabled*|Rev Enabled |InputType.select|DEFAULT|
|**490**|*revNumber*|Rev Number |InputType.number|DATA|
|**540**|*glAcProfileHeaderId*|Gl Ac Profile Header Id |deferredSelect|REFERENCE|
|**5500**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5510**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5520**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5530**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>


## Business Organization

A business organization is a sub-division of a legal entity with separate management ownership. All the external documents (such as PO, SO, AR/AP Invoice) are created at the business organization level.
Operation by the business organization is aimed to introduce the following features:

- Security and data access control
- Ownership and Communication with external entities (Customer and Suppliers)
- Generate P&L at BO level



To create/view/update a business organization, navigate to the "business organization"  screen from your dashboard/favorite.


<img src="/images/modules/mdm/org/business_org/business_org_01.PNG" width="350"/>

Enter the organization/business organization details or any other criteria in the search form and click on the search button to view an existing business organization.  


<img src="/images/modules/mdm/org/business_org/business_org_02.PNG" width="800"/>

If you don't enter organization details, the system will show you all the business organizations. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search business organizations.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.


If you click on the create new button, the system will open a simple step form to create a new business organization. You can click on the detail right bottom to view all the fields available for the object. 

<img src="/images/modules/mdm/org/business_org/business_org_03.PNG" width="350"/>

To view the search result in a table format, click on the table icon in the bottom left corner.

To view specific business organization details, click on the menu of that record, and click on view/fetch & view.

<img src="/images/modules/mdm/org/business_org/business_org_04.PNG" width="800"/>

You can also click on the expand icon against any item on the search result screen to view the business organization header details, such as business organization, description, etc.


The system will fetch all the selected entity data. The entity details are shown either right to the search result screen or in a separate screen, depending on the device size.

<img src="/images/modules/mdm/org/business_org/business_org_04a.PNG" width="500"/>



Scroll left, right, up, down to view all the details. The document line and details are shown in a separate tab..
The default configuration shows fields in various functional groups such as

- Reference
- Control
- Etc  

<img src="/images/modules/mdm/org/business_org/business_org_05.PNG" width="800"/>


You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.



<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*mdmBusinessOrgId*|Mdm Business Org Id |deferredSelect|REFERENCE|
|**10**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**20**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**30**|*mdmLegalOrgId*|Mdm Legal Org Id |deferredSelect|REFERENCE|
|**40**|*businessOrgCode*|Business Org Code |deferredSelect|ENTITY|
|**50**|*businessOrgType*|Business Org Type |InputType.select|CONTROL|
|**60**|*businessOrgName*|Business Org Name |deferredSelect|ENTITY|
|**70**|*manager*|Manager |InputType.textField|DEFAULT|
|**80**|*status*|Status |InputType.select|CONTROL|
|**90**|*cashAcId*|Cash Ac Id |deferredSelect|REFERENCE|
|**100**|*retainedEarningAcId*|Retained Earning Ac Id |deferredSelect|REFERENCE|
|**110**|*liabilityAcId*|Liability Ac Id |deferredSelect|REFERENCE|
|**120**|*revenueAcId*|Revenue Ac Id |deferredSelect|REFERENCE|
|**130**|*receviableAcId*|Receviable Ac Id |deferredSelect|REFERENCE|
|**140**|*accrualAcId*|Accrual Ac Id |deferredSelect|REFERENCE|
|**150**|*cogsAcId*|Cogs Ac Id |deferredSelect|REFERENCE|
|**160**|*expenseAcId*|Expense Ac Id |deferredSelect|REFERENCE|
|**170**|*suspenseAcId*|Suspense Ac Id |deferredSelect|REFERENCE|
|**220**|*glAcProfileHeaderId*|Gl Ac Profile Header Id |deferredSelect|REFERENCE|
|**5180**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5190**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5200**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5210**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>




## Legal Organization

"Legal Organization" represents a  "legal entity" or "company" in the legal world. A legal organization can enter into contracts and assume the obligations of those contracts, can borrow and pay debts, and be held to account for its business. You can store legal entity information such as Organization Name, Address, Tax Id for a legal organization.

Operation by the legal organization is aimed to introduce the following features:

- Maintenance and segregation of all financial data
- Representation with all legal authority
- Set up bank accounts 



To create/view/update a legal organization, navigate to the "legal organization"  screen from your dashboard/favorite.


<img src="/images/modules/mdm/org/legal_org/legal_org_01.PNG" width="350"/>

Enter the organization/legal organization details or any other criteria in the search form and click on the search button to view an existing legal organization.  


<img src="/images/modules/mdm/org/legal_org/legal_org_02.PNG" width="800"/>

If you don't enter organization details, the system will show you all the legal organizations. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search for legal organizations.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.


If you click on the create new button, the system will open a simple step form to create a new legal organization. You can click on the detail right bottom to view all the fields available for the object. 

<img src="/images/modules/mdm/org/legal_org/legal_org_03.PNG" width="350"/>

To view the search result in a table format, click on the table icon in the bottom left corner.

To view specific legal organization details, click on the menu of that record, and click on view/fetch & view.

<img src="/images/modules/mdm/org/legal_org/legal_org_04.PNG" width="800"/>

You can also click on the expand icon against any item on the search result screen to view the legal organization header details, such as legal organization, description, etc.


The system will fetch all the selected entity data. The entity details are shown either right to the search result screen or in a separate screen, depending on the device size.

<img src="/images/modules/mdm/org/legal_org/legal_org_04a.PNG" width="500"/>



Scroll left, right, up, down to view all the details. The document line and details are shown in a separate tab..
The default configuration shows fields in various functional groups such as

- Reference
- Control
- Etc  

<img src="/images/modules/mdm/org/legal_org/legal_org_05.PNG" width="800"/>


You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.



<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*mdmLegalOrgId*|Mdm Legal Org Id |deferredSelect|REFERENCE|
|**10**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**20**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**30**|*glLedgerId*|Gl Ledger Id |InputType.text|REFERENCE|
|**40**|*mdmEnterpriseOrgId*|Mdm Enterprise Org Id |deferredSelect|REFERENCE|
|**50**|*legalOrgName*|Legal Org Name |deferredSelect|ENTITY|
|**60**|*legalOrgCode*|Legal Org Code |deferredSelect|ENTITY|
|**70**|*legalOrgType*|Legal Org Type |InputType.textField|CONTROL|
|**80**|*registrationNumber*|Registration Number |InputType.textField|DATA|
|**90**|*placeOfRegistration*|Place Of Registration |InputType.textField|DEFAULT|
|**100**|*countryOfRegistration*|Country Of Registration |InputType.textField|DEFAULT|
|**110**|*identificationNumber*|Identification Number |InputType.textField|DATA|
|**120**|*einTinTan*|Ein Tin Tan |InputType.textField|DEFAULT|
|**130**|*balancingSegments*|Balancing Segments |InputType.textField|DEFAULT|
|**140**|*status*|Status |InputType.select|CONTROL|
|**190**|*cashAcId*|Cash Ac Id |deferredSelect|REFERENCE|
|**200**|*retainedEarningAcId*|Retained Earning Ac Id |deferredSelect|REFERENCE|
|**210**|*revenueAcId*|Revenue Ac Id |deferredSelect|REFERENCE|
|**220**|*liabilityAcId*|Liability Ac Id |deferredSelect|REFERENCE|
|**230**|*receviableAcId*|Receviable Ac Id |deferredSelect|REFERENCE|
|**240**|*accrualAcId*|Accrual Ac Id |deferredSelect|REFERENCE|
|**250**|*cogsAcId*|Cogs Ac Id |deferredSelect|REFERENCE|
|**260**|*expenseAcId*|Expense Ac Id |deferredSelect|REFERENCE|
|**270**|*suspenseAcId*|Suspense Ac Id |deferredSelect|REFERENCE|
|**280**|*glAcProfileHeaderId*|Gl Ac Profile Header Id |deferredSelect|REFERENCE|
|**5150**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5160**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5170**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5180**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>


## Enterprise 

"Enterprise" represents an organization at the highest level. Only HR-related information is maintained at the enterprise level.

To create/view/update an Enterprise, navigate to the "Enterprise "  screen from your dashboard/favorite.

<img src="/images/modules/mdm/org/ent/ent_01.PNG" width="350"/>

Enter the organization/Enterprise details or any other criteria in the search form and click on the search button to view an existing Enterprise.  


<img src="/images/modules/mdm/org/ent/ent_02.PNG" width="800"/>

If you don't enter organization details, the system will show you all the Enterprise s. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search Enterprise s.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.


If you click on the create new button, the system will open a simple step form to create a new Enterprise. You can click on the detail right bottom to view all the fields available for the object. 

<img src="/images/modules/mdm/org/ent/ent_03.PNG" width="350"/>

To view the search result in a table format, click on the table icon in the bottom left corner.

To view specific Enterprise details, click on the menu of that record, and click on view/fetch & view.

<img src="/images/modules/mdm/org/ent/ent_04.PNG" width="800"/>

You can also click on the expand icon against any item on the search result screen to view the Enterprise header details, such as Enterprise, description, etc.


The system will fetch all the selected entity data. The entity details are shown either right to the search result screen or in a separate screen, depending on the device size.

<img src="/images/modules/mdm/org/ent/ent_04a.PNG" width="500"/>



Scroll left, right, up, down to view all the details. The document line and details are shown in a separate tab..
The default configuration shows fields in various functional groups such as

- Reference
- Control
- Etc  

<img src="/images/modules/mdm/org/ent/ent_05.PNG" width="800"/>


You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.



<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*mdmEnterpriseOrgId*|Mdm Enterprise Org Id |deferredSelect|REFERENCE|
|**10**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**20**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**30**|*enterpriseName*|Enterprise Name |InputType.textField|DEFAULT|
|**40**|*designationOptionHeaderId*|Designation Option Header Id |InputType.text|REFERENCE|
|**50**|*typeOptionHeaderId*|Type Option Header Id |InputType.number|CONTROL|
|**60**|*enterpriseCode*|Enterprise Code |InputType.textField|DEFAULT|
|**70**|*status*|Status |InputType.select|CONTROL|
|**80**|*revEnabled*|Rev Enabled |InputType.select|DEFAULT|
|**90**|*revNumber*|Rev Number |InputType.number|DATA|
|**140**|*glAcProfileHeaderId*|Gl Ac Profile Header Id |deferredSelect|REFERENCE|
|**5100**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5110**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5120**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5130**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>


