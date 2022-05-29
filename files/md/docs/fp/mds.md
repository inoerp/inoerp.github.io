---
id: mds
title: Master Demand Schedule
sidebar_label: Master Demand Schedule
---


:::caution

This documentation is incomplete.

:::


A master demand schedule (MDS) collects sales order and forecast data and contains information on the number of items to be planned from an inventory organization. Thus, MDS is a collection of demand that is considered final and used for demand-supply reconciliation in MRP. MDS consolidates all sources of demand to represent a statement of total anticipated shipments. MDS connects the demands to planned supplies and thus, provides an extra level of control that allows you to view and modify demands before creating planned orders.


You can use the MDS screen to collect, review, and update MDS data.

## Header
<img src="/images/modules/fp/mds/mds_01.PNG" width="350"/>

To create/view/update an MDS, navigate to the "MDS"  screen from your dashboard/favorite.

Enter the organization/MDS details or any other criteria in the search form and click on the search button to view an existing MDS.  


<img src="/images/modules/fp/mds/mds_02.PNG" width="800"/>

If you don't enter any search criteria, the system will show you all the MDSs. If your organization has configured to make any field mandatory for search, then you have to enter those fields to search MDSs.  
The application will fetch all the server data and take you to the search result screen. The search result screen looks a bit different on desktop and mobile devices.

<img src="/images/modules/fp/mds/mds_03.PNG" width="350"/>

If you click on the create new button, the system will open a simple step form to create a new MDS. You can click on the detail right bottom to view all the fields available for the object. 
<img src="/images/modules/fp/mds/mds_04.PNG" width="800"/>


To view the search result in a table format, click on the table icon in the bottom left corner.

To view specific MDS details, click on the menu of that record, and click on view/fetch & view.


You can also click on the expand icon against any item on the search result screen to view the MDS header details, such as MDS name, description, etc.
<img src="/images/modules/fp/mds/mds_04a.PNG" width="300"/>

**MDS Name:** Enter a unique  name for the MDS

**Description:** Enter a meaningful description for the MDS

<img src="/images/modules/fp/mds/mds_05.PNG" width="800"/>

**Inv Org:** Enter an inventory organization name. Inv Org is a mandatory field. Sales orders with a ship-to organization, same as MDS inv org, are considered for consumption.

**Source List:** Source list of the demands. The system will collect all the forecast data in the source list.


Scroll left, right, up, and down to view all the details. The line details are shown in a separate tab.
The default configuration shows fields in various functional groups, such as

- Finance
- Entity
- Reference
- Data
- Control
- Etc  

<img src="/images/modules/fp/mds/mds_06.PNG" width="800"/>


You can configure the application to show which fields should be shown under which group. You can also create new groups as per your business requirements.


<details>
<summary>All Fields</summary>

| Sequence | Name                  | Label                    | InputType             | Field Group |
| -------- | -------------------------- | ------------------------ | --------------------- | ----------- |
|**10**|*vvInvOrgName*| Inv Org Name |defferedSelect|ENTITY|
|**10**|*vvInvOrgCode*| Inv Org Code |defferedSelect|ENTITY|
|**20**|*vvMdsSourceList*| Mds Source List |defferedSelect|DEFAULT|
|**30**|*fpMdsHeaderId*|Fp Mds Header Id |defferedSelect|REFERENCE|
|**40**|*invOrgId*|Inv Org Id |defferedSelect|REFERENCE|
|**50**|*mdsName*|Mds Name |InputType.textField|DEFAULT|
|**60**|*description*|Description |InputType.textField|DEFAULT|
|**70**|*mdsSourceListId*|Mds Source List Id |defferedSelect|REFERENCE|
|**80**|*includeSoCb*|Include So Cb |InputType.switchField|DEFAULT|
|**90**|*consumeSoCb*|Consume So Cb |InputType.switchField|DEFAULT|
|**100**|*isInactiveCb*|Is Inactive Cb |InputType.switchField|DEFAULT|
|**150**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**160**|*srcEntityName*|Src Entity Name |defferedSelect|DEFAULT|
|**170**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**5110**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5120**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5130**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5140**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>


## Line - Item & Date

<img src="/images/modules/fp/mds/mds_07.PNG" width="800"/>

You can add multiple items to each MDS header. The combination of item and date is a unique key within an MDS header, i.e., you can add an item for a given date only once in an MDS header. However, the system allows you to change the collected quantity from a forecast.

<img src="/images/modules/fp/mds/mds_07a.PNG" width="250"/>

Navigate to the Items tab to view/add/update items.  
Click on the add new entity to add a new line. If a line already exists, click on copy entity to copy all the details.
You can enable/disable fields allowed to be copied in the menu configuration.  

<img src="/images/modules/fp/mds/mds_07b.PNG" width="800"/>

***Item Number*** Enter the item number for which you want to create MDS

***UOM Code*** System defaults the item code from the item master

<img src="/images/modules/fp/mds/mds_07e.PNG" width="800"/>


*** quantity *** The demand quantity. The value is collected either from a forecast or a sales order. The system also allows you to update the quantity.

***Consumed Quantity*** A read-only field that shows the total consumed quantity. Multiple sales order detail lines can consume a single forecast.

***Forecast Available Quantity*** The difference between quantity and consumed quantity. This quantity is used in MRP for demand/supply matching.


<img src="/images/modules/fp/mds/mds_07f.PNG" width="800"/>

***Demand Date*** Forecast date for forecast demands and scheduled ship date for sales order demands.

***Source Type*** Source of the MDS line - sales order or forecast.


The reference groups show various ids for reference only. You don't need to enter any information in this section. When you save an MDS for the first time, the system will auto-populate the newly created header id and line ids.

Scroll left, right, up, and down view all other fields.

<img src="/images/modules/fp/mds/mds_07c.PNG" width="800"/>



Enter all the other fields and click on the save button to save the MDS. The app will post all the data to the server and will show the messages returned from the server.



<details>
<summary>All Fields</summary>

| Sequence | Name                | Label                    | InputType             | Field Group |
| -------- | ------------------------ | ------------------------ | --------------------- | ----------- |
|**10**|*vvItemNumber*| Item Number |defferedSelect|DEFAULT|
|**10**|*vvItemDescription*| Item Description |defferedSelect|DEFAULT|
|**20**|*vvUomCode*| Uom Code |defferedSelect|DEFAULT|
|**30**|*vvInvOrgId*| Inv Org Id |defferedSelect|REFERENCE|
|**40**|*vvConsumedQuantity*| Consumed Quantity |InputType.text|DATA|
|**50**|*forecastAvailableQuantity*|Forecast Available Quantity |InputType.textField|DATA|
|**60**|*fpMdsLineId*|Fp Mds Line Id |InputType.text|REFERENCE|
|**70**|*fpMdsHeaderId*|Fp Mds Header Id |defferedSelect|REFERENCE|
|**80**|*srcEntityName*|Src Entity Name |defferedSelect|DEFAULT|
|**90**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**100**|*invItemMasterId*|Inv Item Master Id |defferedSelect|REFERENCE|
|**110**|*demandDate*|Demand Date |InputType.date|PLANNING|
|**120**|*quantity*|Quantity |InputType.textField|DATA|
|**130**|*sdSoDetailId*|Sd So Detail Id |defferedSelect|REFERENCE|
|**140**|*fpForecastDetailId*|Fp Forecast Detail Id |InputType.number|PLANNING|
|**150**|*sourceType*|Source Type |InputType.select|CONTROL|
|**160**|*sourceHeaderId*|Source Header Id |InputType.text|REFERENCE|
|**170**|*sourceLineId*|Source Line Id |InputType.text|REFERENCE|
|**220**|*docStatus*|Doc Status |InputType.select|CONTROL|
|**5180**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5190**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5200**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5210**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>



## Details - Consumptions

<img src="/images/modules/fp/mds/mds_08.PNG" width="800"/>


When you Refresh the MDS or run the "Create Consumption" program, the system creates/updates consumption lines. The detail lines show all the consumption lines for each forecast detail. The detail lines are used only for reference. You should not update any details values as the system maintains these values.

<img src="/images/modules/fp/mds/mds_08a.PNG" width="800"/>


To view all the MDS details of a given line in a table format, click on the popup icon next to the "Fp Forecast Detail" heading.
The system will show you all the details on a separate screen. You can also view the details as a list or in a simple data entry form. Click on the corresponding icon to view the data in that specific format.

<img src="/images/modules/fp/mds/mds_08e.PNG" width="900"/>

Click on the close button to navigate back to the original screen. You can also press the escape button on your keyboard to remove the screen.

<img src="/images/modules/fp/mds/mds_08f.PNG" width="900"/>

Navigate to the MDS details tab to view MDS details.  


<img src="/images/modules/fp/mds/mds_08b.PNG" width="800"/>

***Item Number*** ViewOnly field. The system shows the item number on the MDS line for reference purposes.

***UOM Code***  ViewOnly field. The system shows the UOM code on the MDS line for reference purposes.

<img src="/images/modules/fp/mds/mds_08e.PNG" width="800"/>


**SO Number**: A ViewOnly field that shows the sales order that has consumed the forecast.

**SO Line Number**:  A ViewOnly field that shows the sales order line that has consumed the forecast.

**SO Detail Number**: A ViewOnly field that shows the sales order detail line that has consumed the forecast.

***Consumption Quantity*** A read-only field that shows the quantity consumed.


<img src="/images/modules/fp/mds/mds_08d.PNG" width="800"/>

The reference groups show various ids for reference only. You don't need to enter any information in this section. When you save an MDS for the first time, the system will auto-populate the newly created header id and line ids.

Scroll left, right, up, and down view all other fields.


Enter all the other fields and click on the save button to save the MDS. The app will post all the data to the server and will show the messages returned from the server.



<details>
<summary>All Fields</summary>

| Sequence | Name                | Label                    | InputType             | Field Group |
| -------- | ------------------------ | ------------------------ | --------------------- | ----------- |
|**10**|*vvSoNumber*| So Number |InputType.text|DATA|
|**10**|*vvSoLineNumber*| So Line Number |InputType.text|DATA|
|**20**|*vvSoShipmentNumber*| So Shipment Number |InputType.text|DATA|
|**30**|*vvOrigSoQuantity*| Orig So Quantity |InputType.text|DATA|
|**40**|*vvFpMdsHeaderId*| Fp Mds Header Id |defferedSelect|REFERENCE|
|**50**|*vvForecastDate*| Forecast Date |InputType.text|PLANNING|
|**60**|*vvOrigForecastQuantity*| Orig Forecast Quantity |InputType.text|DATA|
|**70**|*fpMdsDetailId*|Fp Mds Detail Id |InputType.text|REFERENCE|
|**80**|*fpMdsLineId*|Fp Mds Line Id |InputType.text|REFERENCE|
|**90**|*srcEntityName*|Src Entity Name |defferedSelect|DEFAULT|
|**100**|*srcEntityId*|Src Entity Id |InputType.text|REFERENCE|
|**110**|*fpForecastLineId*|Fp Forecast Line Id |InputType.number|PLANNING|
|**120**|*sdSoDetailId*|Sd So Detail Id |defferedSelect|REFERENCE|
|**130**|*fpForecastGroupId*|Fp Forecast Group Id |InputType.number|PLANNING|
|**140**|*fpForecastDetailId*|Fp Forecast Detail Id |InputType.number|PLANNING|
|**150**|*soQuantity*|So Quantity |InputType.textField|DATA|
|**160**|*forecastQuantity*|Forecast Quantity |InputType.textField|DATA|
|**170**|*consumptionQuantity*|Consumption Quantity |InputType.textField|DATA|
|**180**|*reason*|Reason |InputType.text|REFERENCE|
|**5190**|*createdBy*|Created By |InputType.text|REFERENCE|
|**5200**|*creationDate*|Creation Date |InputType.text|REFERENCE|
|**5210**|*lastUpdatedBy*|Last Updated By |InputType.text|REFERENCE|
|**5220**|*lastUpdateDate*|Last Update Date |InputType.text|REFERENCE|

</details>



## Actions

Actions allow you to change, collect, refresh and consume the MDS.
Click on the refresh button to collect and consume the MDS.
Refresh action completes all the activities i.e. 
- Collects all the forecast details as per the forecasts in the MDS source list 
- Collects all the sales order data that has shipping inventory org same as the MDS inventory org
- Consumes forecasts if available

<img src="/images/modules/fp/mds/mds_09.PNG" width="800"/>



