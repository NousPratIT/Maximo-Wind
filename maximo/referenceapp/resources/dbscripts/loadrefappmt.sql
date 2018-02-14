insert into maxpresentation ( app, presentation, maxpresentationid) values ('REFAPPMT', '<?xml version="1.0" encoding="UTF-8"?>

<presentation id="refappmt" beanclass="psdi.refapp.webclient.beans.RefAppAppBean" version="7.5.0.0" >

  <page id="mainrec" >
    <include id="pageHeader" />

    <clientarea id="clientarea" >

        <tabgroup id="maintabs" style="form">

    <tab id="tenant" default="true" label="Tenant records" type="insert">

     <table id="tenant_table" mboname="REFTENANT" label="Tenant Records" >
      <menubar id="actiontoolbar" event="search" sourcemethod="getAppSearchOptions" />

        <tablebody id="tenant_tablebody" displayrowsperpage="25" >
          <tablecol id="select_tenant_col_1" type="event" mxevent="toggledetailstate" mxevent_desc="Show Detail" sortable="false" filterable="false" hidden="false" />
          <tablecol id="select_tenant_col_2"  dataattribute="attr1" />
          <tablecol id="select_tenant_col_3"  dataattribute="description" />
          <tablecol id="select_tenant_col_4"  dataattribute="attr2" />
          <tablecol id="select_tenant_col_5"  dataattribute="attr3" />
                  <tablecol id="select_tenant_col_6"  dataattribute="attr4" />
          <tablecol id="select_tenant_col_7"  dataattribute="attr5" />
          <tablecol id="select_tenant_col_8" type="event" mxevent="toggledeleterow" mxevent_icon="btn_garbage.gif" mxevent_desc="Mark Row for Delete" sortable="false" filterable="false" hidden="false" />

        </tablebody>

        <tabledetails id="tenant_Tabledetails">
                        <section id="tenant_table_1_grid4"  label="Details">
                                <sectionrow id="tenant_table_1_grid4_1">
                                        <sectioncol id="tenant_table_1_grid4_1_1">
                                                <section id="tenant_table_1_grid4_1_1_1" >
                                                        <multiparttextbox id="tenant_table_1_grid1_1" dataattribute="attr1" descdataattribute="description" defaultfocus="true" />
                                                        <textbox id="tenant_table_1_grid1_2"    dataattribute="attr2" />
                                                </section>
                                        </sectioncol>
                                        <sectioncol id="tenant_table_1_grid4_1_2">
                                                <section id="tenant_table_1_grid4_1_1_2" >', nextval for maxpresentationseq);
														
														
update maxpresentation set presentation=presentation || '<textbox id="tenant_table_1_grid1_3"   dataattribute="attr3" />
                                                        <textbox id="tenant_table_1_grid4_6"  dataattribute="attr5"/>
                                                </section>
                                        </sectioncol>
                                        <sectioncol id="tenant_table_1_grid4_1_3">
                                                <section id="tenant_table_1_grid4_1_1_3" >
                                                        <checkbox id="tenant_table_1_grid4_8"  dataattribute="attr4"/>
                                                </section>
                                        </sectioncol>
                                </sectionrow>
                        </section>
                </tabledetails>

                <buttongroup id="tenant_table_buttongroup" >
                  <pushbutton id="tenant_table_buttongroup_1" label="New Row" mxevent="addrow" default="true" />
                </buttongroup>

      </table>

    </tab>
    <tab id="master" label="Master records" type="insert">

      <table id="master_table" mboname="REFMASTER" label="Master Records" >
      <menubar id="actiontoolbar1" event="search" sourcemethod="getAppSearchOptions" />

        <tablebody id="master_tablebody" displayrowsperpage="25" >
          <tablecol id="select_master_col_1" type="event" mxevent="toggledetailstate" mxevent_desc="Show Detail" sortable="false" filterable="false" hidden="false" />
          <tablecol id="select_master_col_2"  dataattribute="attr1" />
          <tablecol id="select_master_col_3"  dataattribute="description" />
          <tablecol id="select_master_col_4"  dataattribute="attr2" />
          <tablecol id="select_master_col_5"  dataattribute="attr3" />
                  <tablecol id="select_master_col_6"  dataattribute="attr4" />
          <tablecol id="select_master_col_7"  dataattribute="attr5" />
          <tablecol id="select_master_col_8" type="event" mxevent="toggledeleterow" mxevent_icon="btn_garbage.gif" mxevent_desc="Mark Row for Delete" sortable="false" filterable="false" hidden="false" />

        </tablebody>

        <tabledetails id="master_Tabledetails">
                        <section id="master_table_1_grid4"  label="Details">
                                <sectionrow id="master_table_1_grid4_1">
                                        <sectioncol id="master_table_1_grid4_1_1">
                                                <section id="master_table_1_grid4_1_1_1" ><mult' 
where app='REFAPPMT';
														
														
update maxpresentation set presentation=presentation || 
		'iparttextbox id="master_table_1_grid1_1" dataattribute="attr1" descdataattribute="description" defaultfocus="true" />
                                                        <textbox id="master_table_1_grid1_2"    dataattribute="attr2" />
                                                </section>
                                        </sectioncol>
                                        <sectioncol id="master_table_1_grid4_1_2">
                                                <section id="master_table_1_grid4_1_1_2" >
                                                        <textbox id="master_table_1_grid1_3"   dataattribute="attr3" />
                                                        <textbox id="master_table_1_grid4_6"  dataattribute="attr5"/>
                                                </section>
                                        </sectioncol>
                                        <sectioncol id="master_table_1_grid4_1_3">
                                                <section id="master_table_1_grid4_1_1_3" >
                                                        <checkbox id="master_table_1_grid4_8"  dataattribute="attr4"/>
                                                </section>
                                        </sectioncol>
                                </sectionrow>
                        </section>
                </tabledetails>

                <buttongroup id="master_table_buttongroup" >
                  <pushbutton id="master_table_buttongroup_1" label="New Row" mxevent="addrow" default="true" />
                </buttongroup>

      </table>

    </tab>
    <tab id="system" label="System records" type="list">
      <menubar id="actiontoolbar2" event="search" sourcemethod="getAppSearchOptions" />

      <table id="system_table" mboname="REFSYSTEM" label="System Records" >

        <tablebody id="system_tablebody" displayrowsperpage="25" >
          <tablecol id="select_system_col_1" type="event" mxevent="toggledetailstate" mxevent_desc="Show Detail" sortable="false" filterable="false" hidden="false" />
          <tablecol id="select_system_col_2"  dataattribute="attr1" />
          <tablecol id="select_system_col_3"  dataattribute="description" />
          <tablecol id="select_system_col_4"  dataattribute="attr2" />
          <tablecol id="select_system_col_5"  dataattribute="attr3" />
                  <tablecol id="select_system_col_6"  dataattribute="attr4" />
          <tablecol id="select_system_col_7"  dataattribute="attr5" />
          <tablecol id="select_system_col_8" type="event" mxevent="toggledeleterow" mxevent_icon="btn_garbage.gif" mxevent_desc="Mark Row for Delete" sortabl' 
 where app='REFAPPMT';
 
 
update maxpresentation set presentation=presentation 
		|| 'e="false" filterable="false" hidden="false" />

        </tablebody>

        <tabledetails id="system_Tabledetails">
                        <section id="system_table_1_grid4"  label="Details">
                                <sectionrow id="system_table_1_grid4_1">
                                        <sectioncol id="system_table_1_grid4_1_1">
                                                <section id="system_table_1_grid4_1_1_1" >
                                                        <multiparttextbox id="system_table_1_grid1_1" dataattribute="attr1" descdataattribute="description" defaultfocus="true" />
                                                        <textbox id="system_table_1_grid1_2"    dataattribute="attr2" />
                                                </section>
                                        </sectioncol>
                                        <sectioncol id="system_table_1_grid4_1_2">
                                                <section id="system_table_1_grid4_1_1_2" >
                                                        <textbox id="system_table_1_grid1_3"   dataattribute="attr3" />
                                                        <textbox id="system_table_1_grid4_6"  dataattribute="attr5"/>
                                                </section>
                                        </sectioncol>
                                        <sectioncol id="system_table_1_grid4_1_3">
                                                <section id="system_table_1_grid4_1_1_3" >
                                                        <checkbox id="system_table_1_grid4_8"  dataattribute="attr4"/>
                                                </section>
                                        </sectioncol>
                                </sectionrow>
                        </section>
                </tabledetails>

                <buttongroup id="system_table_buttongroup" >
                  <pushbutton id="system_table_buttongroup_1" label="New Row" mxevent="addrow" default="true" />
                </buttongroup>

      </table>

    </tab>
    <tab id="template" label="Template records" type="list">
      <menubar id="actiontoolbar3" event="search" sourcemethod="getAppSearchOptions" />

      <table id="template_table" mboname="REFTEMPLATE" label="Template Records">

        <tablebody id="template_tablebody" displayrowsperpage="25" >
          <tablecol id="select_template_col_1" type="event" mxevent="toggledetailstate" mxevent_desc="Show Detail" sortable="false" filterable="false" hidden="false" />
          <tablecol id="select_template_col_2"  dataattribute="attr1" />
          <tablecol id="select_template_col_3"  dataattribute="description" />
          <tablecol id="select_template_col_4"  dataattribute="attr2" />
          <tab' 
where app='REFAPPMT';
		  
		  
update maxpresentation set presentation=presentation || 
			'lecol id="select_template_col_5"  dataattribute="attr3" />
                  <tablecol id="select_template_col_6"  dataattribute="attr4" />

          <tablecol id="select_template_col_7"  dataattribute="attr5" />
          <tablecol id="select_template_col_8" type="event" mxevent="toggledeleterow" mxevent_icon="btn_garbage.gif" mxevent_desc="Mark Row for Delete" sortable="false" filterable="false" hidden="false" />

        </tablebody>

        <tabledetails id="template_Tabledetails">
                        <section id="template_table_1_grid4"  label="Details">
                                <sectionrow id="template_table_1_grid4_1">
                                        <sectioncol id="template_table_1_grid4_1_1">
                                                <section id="template_table_1_grid4_1_1_1" >
                                                        <multiparttextbox id="template_table_1_grid1_1" dataattribute="attr1" descdataattribute="description" defaultfocus="true" />
                                                        <textbox id="template_table_1_grid1_2"    dataattribute="attr2" />
                                                </section>
                                        </sectioncol>
                                        <sectioncol id="template_table_1_grid4_1_2">
                                                <section id="template_table_1_grid4_1_1_2" >
                                                        <textbox id="template_table_1_grid1_3"   dataattribute="attr3" />
                                                        <textbox id="template_table_1_grid4_6"  dataattribute="attr5"/>
                                                </section>
                                        </sectioncol>
                                        <sectioncol id="template_table_1_grid4_1_3">
                                                <section id="template_table_1_grid4_1_1_3" >
                                                        <checkbox id="template_table_1_grid4_8"  dataattribute="attr4"/>
                                                </section>
                                        </sectioncol>
                                </sectionrow>
                        </section>
                </tabledetails>

                <buttongroup id="template_table_buttongroup" >
                  <pushbutton id="template_table_buttongroup_1" label="New Row" mxevent="addrow" default="true" />
                </buttongroup>

      </table>

    </tab>
    <tab id="sysresource" label="System Resource records" type="list">
      <menubar id="actiontoolbar4" event="search" sourcemethod="getAppSearchOptions" />

      <table id="sysresource_table" mboname="REFSYSRESOURCE" label="System Resource Records" >

        <tablebody id="sysresource_tablebody" displayrowsperpa' 
where app='REFAPPMT';


update maxpresentation set presentation=presentation || 
			'ge="25" >
          <tablecol id="select_sysresource_col_1" type="event" mxevent="toggledetailstate" mxevent_desc="Show Detail" sortable="false" filterable="false" hidden="false" />
          <tablecol id="select_sysresource_col_2"  dataattribute="attr1" />
          <tablecol id="select_sysresource_col_3"  dataattribute="description" />
          <tablecol id="select_sysresource_col_4"  dataattribute="attr2" />
          <tablecol id="select_sysresource_col_5"  dataattribute="attr3" />
                  <tablecol id="select_sysresource_col_6"  dataattribute="attr4" />
          <tablecol id="select_sysresource_col_7"  dataattribute="attr5" />
          <tablecol id="select_sysresource_col_8"  dataattribute="tenantcode" />

          <tablecol id="select_sysresource_col_9" type="event" mxevent="toggledeleterow" mxevent_icon="btn_garbage.gif" mxevent_desc="Mark Row for Delete" sortable="false" filterable="false" hidden="false" />

        </tablebody>

        <tabledetails id="sysresource_Tabledetails">
                        <section id="sysresource_table_1_grid4"  label="Details">
                                <sectionrow id="sysresource_table_1_grid4_1">
                                        <sectioncol id="sysresource_table_1_grid4_1_1">
                                                <section id="sysresource_table_1_grid4_1_1_1" >
                                                        <multiparttextbox id="sysresource_table_1_grid1_1" dataattribute="attr1" descdataattribute="description" defaultfocus="true" />
                                                        <textbox id="sysresource_table_1_grid1_2"    dataattribute="tenantcode" />
                                                        <textbox id="sysresource_table_1_grid1_3"    dataattribute="attr2" />
                                                </section>
                                        </sectioncol>
                                        <sectioncol id="sysresource_table_1_grid4_1_2">
                                                <section id="sysresource_table_1_grid4_1_1_2" >
                                                        <textbox id="sysresource_table_1_grid1_4"   dataattribute="attr3" />
                                                        <textbox id="sysresource_table_1_grid4_6"  dataattribute="attr5"/>
                                                </section>
                                        </sectioncol>
                                        <sectioncol id="sysresource_table_1_grid4_1_3">
                                                <section id="sysresource_table_1_grid4_1_1_3" >
                                                        <checkbox id="sysreso' 
where app='REFAPPMT';

update maxpresentation set presentation=presentation || 'urce_table_1_grid4_8"  dataattribute="attr4"/>
                                                </section>
                                        </sectioncol>
                                </sectionrow>
                        </section>
                </tabledetails>

                <buttongroup id="sysresource_table_buttongroup" >
                  <pushbutton id="sysresource_table_buttongroup_1" label="New Row" mxevent="addrow" default="true" />
                </buttongroup>

      </table>

    </tab>
    <tab id="master_setup" label="Master (with setup) records" type="list">
      <menubar id="actiontoolbar5" event="search" sourcemethod="getAppSearchOptions" />

      <table id="master_setup_table" mboname="REFMASTERSETUP" label="Master (with setup) Records" >

        <tablebody id="master_setup_tablebody" displayrowsperpage="25" >
          <tablecol id="select_master_setup_col_1" type="event" mxevent="toggledetailstate" mxevent_desc="Show Detail" sortable="false" filterable="false" hidden="false" />
          <tablecol id="select_master_setup_col_2"  dataattribute="attr1" />
          <tablecol id="select_master_setup_col_3"  dataattribute="description"/>
          <tablecol id="select_master_setup_col_4"  dataattribute="attr2" />
          <tablecol id="select_master_setup_col_5"  dataattribute="attr3" />
                  <tablecol id="select_master_setup_col_6"  dataattribute="attr4" />
          <tablecol id="select_master_setup_col_7"  dataattribute="attr5" />
          <tablecol id="select_master_setup_col_8" type="event" mxevent="toggledeleterow" mxevent_icon="btn_garbage.gif" mxevent_desc="Mark Row for Delete" sortable="false" filterable="false" hidden="false" />

        </tablebody>

        <tabledetails id="master_setup_Tabledetails">
                        <section id="master_setup_table_1_grid4"  label="Details">
                                <sectionrow id="master_setup_table_1_grid4_1">
                                        <sectioncol id="master_setup_table_1_grid4_1_1">
                                                <section id="master_setup_table_1_grid4_1_1_1" >
                                                        <multiparttextbox id="master_setup_table_1_grid1_1" dataattribute="attr1" descdataattribute="description" defaultfocus="true" />
                                                        <textbox id="master_setup_table_' 
where app='REFAPPMT';
														
update maxpresentation set presentation=presentation || '1_grid1_2"    dataattribute="attr2" />
                                                </section>
                                        </sectioncol>
                                        <sectioncol id="master_setup_table_1_grid4_1_2">
                                                <section id="master_setup_table_1_grid4_1_1_2" >
                                                        <textbox id="master_setup_table_1_grid1_3"   dataattribute="attr3" />
                                                        <textbox id="master_setup_table_1_grid4_6"  dataattribute="attr5"/>
                                                </section>
                                        </sectioncol>
                                        <sectioncol id="master_setup_table_1_grid4_1_3">
                                                <section id="master_setup_table_1_grid4_1_1_3" >

                                                        <checkbox id="master_setup_table_1_grid4_8"  dataattribute="attr4"/>
                                                </section>
                                        </sectioncol>
                                </sectionrow>
                        </section>
                </tabledetails>

                <buttongroup id="master_setup_table_buttongroup" >
                  <pushbutton id="master_setup_table_buttongroup_1" label="New Row" mxevent="addrow" default="true" />
                </buttongroup>

      </table>

    </tab>
    <tab id="template_setup" label="Template (with setup) records" type="list">
      <menubar id="actiontoolbar6" event="search" sourcemethod="getAppSearchOptions" />

      <table id="template_setup_table" mboname="REFTEMPATESETUP" label="Template (with setup) Records" >

        <tablebody id="template_setup_tablebody" displayrowsperpage="25" >
          <tablecol id="select_template_setup_col_1" type="event" mxevent="toggledetailstate" mxevent_desc="Show Detail" sortable="false" filterable="false" hidden="false" />
          <tablecol id="select_template_setup_col_2"  dataattribute="attr1" />
          <tablecol id="select_template_setup_col_3"  dataattribute="description" />
          <tablecol id="select_template_setup_col_4"  dataattribute="attr2" />
          <tablecol id="select_template_setup_col_5"  dataattribute="attr3" />
                  <tablecol id="select_template_setup_col_6"  dataattribute="attr4" />
          <tablecol id="select_template_setup_col_7"  dataattribute="attr5" />
          <tablecol id="select_template_setup_col_8" type="event" mxevent="toggledeleterow" mxevent_icon="btn_garbage.gif" mxevent_desc="M' 
where app='REFAPPMT';

update maxpresentation set presentation=presentation || 
		'ark Row for Delete" sortable="false" filterable="false" hidden="false" />

        </tablebody>

        <tabledetails id="template_setup_Tabledetails">
                        <section id="template_setup_table_1_grid4"  label="Details">
                                <sectionrow id="template_setup_table_1_grid4_1">

                                        <sectioncol id="template_setup_table_1_grid4_1_1">
                                                <section id="template_setup_table_1_grid4_1_1_1" >
                                                        <multiparttextbox id="template_setup_table_1_grid1_1" dataattribute="attr1" descdataattribute="description" defaultfocus="true" />
                                                        <textbox id="template_setup_table_1_grid1_2"    dataattribute="attr2" />
                                                </section>
                                        </sectioncol>
                                        <sectioncol id="template_setup_table_1_grid4_1_2">
                                                <section id="template_setup_table_1_grid4_1_1_2" >
                                                        <textbox id="template_setup_table_1_grid1_3"   dataattribute="attr3" />
                                                        <textbox id="template_setup_table_1_grid4_6"  dataattribute="attr5"/>
                                                </section>
                                        </sectioncol>
                                        <sectioncol id="template_setup_table_1_grid4_1_3">
                                                <section id="template_setup_table_1_grid4_1_1_3" >

                                                        <checkbox id="template_setup_table_1_grid4_8"  dataattribute="attr4"/>
                                                </section>
                                        </sectioncol>
                                </sectionrow>
                        </section>
                </tabledetails>

                <buttongroup id="template_setup_table_buttongroup" >
                  <pushbutton id="template_setup_table_buttongroup_1" label="New Row" mxevent="addrow" default="true" />
                </buttongroup>

      </table>

    </tab>
    <tab id="tenant_monitor" label="Tenant Monitor records" type="list">
      <menubar id="actiontoolbar7" event="search" sourcemethod="getAppSearchOptions" />

      <table id="tenant_monitor_table" mboname="REFTENANTMON" label="Tenant Monitor Records" >

        <tablebody id="tenant_monitor_tablebody" displayrowsperpage="25" >
          <tablecol id="select_tenant_monitor_col_1" type="event" mxevent="toggledetailstate" mxevent_desc="Show Detail" sortable="false" filterable="false" hidden="false" />
          <tablecol id="select_tenant_monitor_c' 
where app='REFAPPMT';

update maxpresentation set presentation=presentation || 'ol_2"  dataattribute="attr1" />
          <tablecol id="select_tenant_monitor_col_3"  dataattribute="description" />
          <tablecol id="select_tenant_monitor_col_4"  dataattribute="attr2" />
          <tablecol id="select_tenant_monitor_col_5"  dataattribute="attr3" />
                  <tablecol id="select_tenant_monitor_col_6"  dataattribute="attr4" />
          <tablecol id="select_tenant_monitor_col_7"  dataattribute="attr5" />
          <tablecol id="select_tenant_monitor_col_8" type="event" mxevent="toggledeleterow" mxevent_icon="btn_garbage.gif" mxevent_desc="Mark Row for Delete" sortable="false" filterable="false" hidden="false" />

        </tablebody>

        <tabledetails id="tenant_monitor_Tabledetails">
                        <section id="tenant_monitor_table_1_grid4"  label="Details">
                                <sectionrow id="tenant_monitor_table_1_grid4_1">

                                        <sectioncol id="tenant_monitor_table_1_grid4_1_1">
                                                <section id="tenant_monitor_table_1_grid4_1_1_1" >
                                                        <multiparttextbox id="tenant_monitor_table_1_grid1_1" dataattribute="attr1" descdataattribute="description" defaultfocus="true" />
                                                        <textbox id="tenant_monitor_table_1_grid1_2"    dataattribute="attr2" />
                                                </section>
                                        </sectioncol>
                                        <sectioncol id="tenant_monitor_table_1_grid4_1_2">
                                                <section id="tenant_monitor_table_1_grid4_1_1_2" >
                                                        <textbox id="tenant_monitor_table_1_grid1_3"   dataattribute="attr3" />
                                                        <textbox id="tenant_monitor_table_1_grid4_6"  dataattribute="attr5"/>
                                                </section>
                                        </sectioncol>
                                        <sectioncol id="tenant_monitor_table_1_grid4_1_3">
                                                <section id="tenant_monitor_table_1_grid4_1_1_3" >

                                                        <checkbox id="tenant_monitor_table_1_grid4_8"  dataattribute="attr4"/>
                                                </section>
                                        </sectioncol>
                                </sectionrow>
                        </section>
                </tabledetails>

                <buttongroup id="tenant_monitor_table_buttongroup" >
                  <pushbutton id="tenant_monitor_table_buttongroup_1" label="New Row" mxevent="addrow" default="true" />
                </buttongroup>

      </table>'
where app='REFAPPMT';

update maxpresentation set presentation=presentation || '
    </tab>
  </tabgroup>
    </clientarea>

    <include id="pageFooter" />
  </page>

  <dialog id="searchmore" label="More Search Fields" inputmode="query" beanclass="psdi.webclient.system.beans.QbeBean">
    <section id="qbe_grid2" >
      <sectionrow id="qbe_grid2_1">
        <sectioncol id="qbe_grid2_1_1">
          <section id="qbe_grid2_1_1_grid3"   >
            <textbox id="qbe_grid2_1_1_grid3_1" dataattribute="attr1" inputmode="query" />
            <textbox id="qbe_grid2_1_1_grid3_1a" dataattribute="attr2" inputmode="query" />
           </section>
       </sectioncol>
       </sectionrow>
       </section>


      <buttongroup id="qbe_grid5_1_1_grid6" >
        <pushbutton id="qbe_grid5_1_1_grid6_1" label="Find" default="true" mxevent="dialogok" />
        <pushbutton id="qbe_grid5_1_1_grid6_2" label="Clear" mxevent="qbeclear"/>
        <pushbutton id="qbe_grid5_1_1_grid6_3" label="Cancel" mxevent="qbecancel" />
      </buttongroup>

  </dialog>

  <dialog id="searchbook" label="My Bookmarks" mboname="REFTENANT" beanclass="psdi.webclient.system.beans.ViewBookmarksBean" >

    <table id="bookmarks_table" selectmode="single" label="Tenant" inputmode="readonly" >

      <tablebody id="bookmarks_table_tablebody" displayrowsperpage="20" filterable="true" >
        <tablecol id="bookmarks_tablebody_1" dataattribute="attr1" mxevent="selectrecord" type="link" />
        <tablecol id="bookmarks_table_tablebody_2" dataattribute="attr2" />
        <tablecol id="bookmarks_table_tablebody_3" dataattribute="attr3" />
        <tablecol id="bookmarks_table_tablebody_delete" type="event" mxevent="instantdelete" mxevent_icon="btn_delete.gif" mxevent_desc="Delete" sortable="false" filterable="false" hidden="false" />
      </tablebody>

    </table>

    <buttongroup id="bookmarks_2" >
      <pushbutton id="bookmarks_2_1" label="OK" mxevent="dialogok" default="true" />
    </buttongroup>

  </dialog>

</presentation>' 
where app='REFAPPMT';
commit;
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','sysresource_table','label','System Resource Records', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','master','label','Master records', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','template','label','Template records', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','select_template_setup_col_1','mxevent_desc','Show Detail', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','select_template_col_8','mxevent_desc','Mark Row for Delete', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','tenant_monitor_table','label','Tenant Monitor Records', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','select_template_col_1','mxevent_desc','Show Detail', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','tenant','label','Tenant records', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','tenant_monitor_table_1_grid4','label','Details', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','select_system_col_8','mxevent_desc','Mark Row for Delete', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','select_tenant_monitor_col_1','mxevent_desc','Show Detail', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','bookmarks_table_tablebody_delete','mxevent_desc','Delete', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','select_template_setup_col_8','mxevent_desc','Mark Row for Delete', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','tenant_table_1_grid4','label','Details', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','select_master_col_1','mxevent_desc','Show Detail', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','tenant_monitor_table_buttongroup_1','label','New Row', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','system_table_buttongroup_1','label','New Row', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','master_setup_table_buttongroup_1','label','New Row', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','template_table','label','Template Records', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','qbe_grid5_1_1_grid6_1','label','Find', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','select_tenant_col_1','mxevent_desc','Show Detail', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','master_setup','label','Master (with setup) records', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','sysresource','label','System Resource records', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','system','label','System records', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','template_setup_table_1_grid4','label','Details', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','sysresource_table_1_grid4','label','Details', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','sysresource_table_buttongroup_1','label','New Row', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','qbe_grid5_1_1_grid6_3','label','Cancel', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','select_tenant_monitor_col_8','mxevent_desc','Mark Row for Delete', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','template_table_1_grid4','label','Details', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','searchmore','label','More Search Fields', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','template_table_buttongroup_1','label','New Row', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','tenant_monitor','label','Tenant Monitor records', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','select_system_col_1','mxevent_desc','Show Detail', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','system_table','label','System Records', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','template_setup_table_buttongroup_1','label','New Row', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','select_master_setup_col_1','mxevent_desc','Show Detail', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','template_setup','label','Template (with setup) records', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','select_sysresource_col_9','mxevent_desc','Mark Row for Delete', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','template_setup_table','label','Template (with setup) Records', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','master_table_1_grid4','label','Details', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','select_master_col_8','mxevent_desc','Mark Row for Delete', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','bookmarks_table','label','Tenant', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','select_master_setup_col_8','mxevent_desc','Mark Row for Delete', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','system_table_1_grid4','label','Details', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','select_sysresource_col_1','mxevent_desc','Show Detail', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','select_tenant_col_8','mxevent_desc','Mark Row for Delete', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','tenant_table_buttongroup_1','label','New Row', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','master_setup_table_1_grid4','label','Details', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','master_table','label','Master Records', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','master_setup_table','label','Master (with setup) Records', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','tenant_table','label','Tenant Records', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','qbe_grid5_1_1_grid6_2','label','Clear', nextval for maxlabelsseq);
insert into maxlabels (app, id, property, value, maxlabelsid) values 
('REFAPPMT','master_table_buttongroup_1','label','New Row', nextval for maxlabelsseq);
commit;
