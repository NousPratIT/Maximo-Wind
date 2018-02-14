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
--%>
<%@page import="psdi.webclient.system.controller.ComponentInstance"%>
<%@page import="psdi.webclient.system.controller.ControlInstance"%>
<%@page import="psdi.webclient.system.runtime.WebClientConstants"%>
<%@ include file="../../common/iwidgetHeader.jsp" %>
<%	
	String id = component.getId();
	String href = control.getProperty("href");
	boolean isLocal = "true".equalsIgnoreCase(control.getProperty("islocal"));
	if (isLocal)
	{
		href = WebClientRuntime.getMaximoRequestContextURL(request) + WebClientConstants.IWIDGET_DIR + href;
	}
%>

<span class="mm_iWidget" id="<%=id%>">
	<a href="<%=href%>" class="mm_Definition"></a>
</span>

<%@ include file="../../common/iwidgetFooter.jsp" %>