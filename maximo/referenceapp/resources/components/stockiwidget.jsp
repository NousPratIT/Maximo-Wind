<%--
* Licensed Materials - Property of IBM
* 
* 5724-U18
* 
* (C) COPYRIGHT IBM CORP. 2011 All Rights Reserved.
* 
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with
* IBM Corp.
--%><%@ include file="../../common/iwidgetHeader.jsp" %>
<%@page import="psdi.webclient.system.runtime.WebClientConstants"%>
<%
	String stockhref = WebClientRuntime.getMaximoRequestContextURL(request) + WebClientConstants.IWIDGET_DIR + "stock.xml";
	String number = control.getProperty("number");
	if ("1".equals(number)) {
%>
<span class="mm_iWidget" style="color:blue;font-size:12pt;font-family: courier;fact-name:Verdan" id="2" >
      <a class="mm_Definition" href="<%=stockhref%>" ></a>
      <span class="mm_ItemSet" title="attributes">
        <a class="mm_Item" href="#company" style="visibility:hidden">BigStock</a>
        <a class="mm_Item" href="#stock" style="visibility:hidden">27</a>
        <a class="mm_Item" href="#broker"style="visibility:hidden" >BigBroker</a>
      </span>
       <span class="mm_ReceivedEvent" >
        <a class="mm_SourceEvent"href="#1" style="visibility:hidden" >sendStockData</a>
        <span class="mm_TargetEvent" style="visibility:hidden" >onGetCompanyName</span>
        <!-- one per overridden handler attribute -->
      </span>
</span>
<%} else { %>
<span class="mm_iWidget"  style="color:green;font-size:12pt;font-family: courier;fact-name:Verdan" id="1" >
      <a class="mm_Definition" href="<%=stockhref%>" ></a>
      <span class="mm_ItemSet" title="attributes">
        <a class="mm_Item" href="#company" style="visibility:hidden" >IBM</a>
        <a class="mm_Item" href="#stock" style="visibility:hidden" >115</a>
      </span>
 </span>
<%} %>
<%@ include file="../../common/iwidgetFooter.jsp" %>

