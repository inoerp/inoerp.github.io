---
id: tax-code
title: Tax Code
sidebar_label: Tax Code
---


:::caution

This documentation is incomplete.

:::


Use the Tax Code screen to enter and maintain tax codes and the corresponding tax rates. You can enter a tax code at the customer and supplier level to default to various documents. The system also allows you to update defaulted tax codes on documents.

To create/view/update a tax, navigate to the "tax"  screen from your dashboard/favorite.


<img src="/images/modules/mdm/tax/tax_01.png" width="350"/>

Enter the tax details or any other criteria in the search form and click on the search button to view an existing tax.  


<img src="/images/modules/mdm/tax/tax_02.png" width="800"/>

If you don't enter organization details, the system will show you all the taxes. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search taxes.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.


If you click on the create new button, the system will open a simple step form to create a new tax. You can click on the detail right bottom to view all the fields available for the object. 

<img src="/images/modules/mdm/tax/tax_03.png" width="350"/>

To view the search result in a table format, click on the table icon in the bottom left corner.

To view specific tax details, click on the menu of that record, and click on view/fetch & view.

<img src="/images/modules/mdm/tax/tax_04.png" width="800"/>

You can also click on the expand icon against any item on the search result screen to view the tax header details, such as tax, description, etc.


The system will fetch all the selected entity data. The entity details are shown either right to the search result screen or in a separate screen, depending on the device size.

<img src="/images/modules/mdm/tax/tax_04a.png" width="400"/>



Scroll left, right, up, down to view all the details. The document line and details are shown in a separate tab..
The default configuration shows fields in various functional groups such as

- Reference
- Control
- Etc  

<img src="/images/modules/mdm/tax/tax_05.png" width="800"/>


You can configure the application to show which fields should be shown under which group. You can also create new groups as per your inventory requirements.



<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*mdmTaxCodeId*|Mdm Tax Code Id |InputType.text|REFERENCE|
|**10**|*srcEntityName*|Src Entity Name |deferredSelect|DEFAULT|
|**20**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**30**|*leOrgId*|Le Org Id |deferredSelect|REFERENCE|
|**40**|*taxCode*|Tax Code |InputType.textField|FINANCE|
|**50**|*taxType*|Tax Type |InputType.textField|CONTROL|
|**60**|*drCr*|Dr Cr |InputType.select|DEFAULT|
|**70**|*inOut*|In Out |InputType.textField|DEFAULT|
|**80**|*description*|Description |InputType.textField|DEFAULT|
|**90**|*printedTaxName*|Printed Tax Name |InputType.textField|FINANCE|
|**100**|*taxRegime*|Tax Regime |InputType.textField|FINANCE|
|**110**|*taxJurisdiction*|Tax Jurisdiction |InputType.textField|FINANCE|
|**120**|*offsetTaxCode*|Offset Tax Code |deferredSelect|FINANCE|
|**130**|*allowAdhocRateCb*|Allow Adhoc Rate Cb |InputType.switchField|FINANCE|
|**140**|*allowTaxExemptionsCb*|Allow Tax Exemptions Cb |InputType.switchField|FINANCE|
|**150**|*calculationMethod*|Calculation Method |InputType.textField|DEFAULT|
|**160**|*percentage*|Percentage |InputType.textField|DEFAULT|
|**170**|*taxAmount*|Tax Amount |InputType.textField|FINANCE|
|**180**|*taxAcId*|Tax Ac Id |deferredSelect|REFERENCE|
|**190**|*status*|Status |InputType.textField|CONTROL|
|**200**|*effectiveStartDate*|Effective Start Date |InputType.date|DATE|
|**210**|*effectiveEndDate*|Effective End Date |InputType.date|DATE|
|**5220**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5230**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5240**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5250**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>
