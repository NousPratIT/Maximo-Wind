<%--
* Licensed Materials - Property of IBM
* 
* 5724-U18
* 
* (C) COPYRIGHT IBM CORP. 2011,2012 All Rights Reserved.
* 
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with
* IBM Corp.
--%><%
%><%@page contentType="text/html;charset=UTF-8"
%><%@page import="psdi.webclient.system.controller.ComponentInstance"
%><%
	ComponentInstance component = ComponentInstance.getCurrent(request);

	if (component.needsRender())
	{
		String id = component.getRenderId();
		// Make a label for our button, we just use the control type as the
		//  label but in practice this would probably come from a component
		//  property or maybe a data attribute
		String label = component.getControl().getLocalizedType();
%>	<button type="button" id="<%=id%>">Open <%=label%></button>
	<script>
		// Load the dojo modules that we need
		require([ "dojo/domReady", 
		          "dojo/_base/kernel", 
		          "dojo/_base/connect", 
		          "dijit/Dialog"], 
		          function(domReady, kernel, connect, Dialog) {
			domReady(function() {
				// Connect an anonymous function to onclick that will create
				// and show the dialog
				connect.connect(kernel.byId("<%=id%>"), "onclick", function() {
					new dijit.Dialog(
						{
							title: "<%=label%> <%=id%>",
							content: "Test content",
							style: "width: 300px",
							onHide: function() 
							{
								// Since this dialog is created each time the
								//  button is pushed, we need to cleanup when
								//  the dialog is closed, otherwise we leak
								//  widgets and the memory they use.
								this.destroyRecursive(); 
							}
						}
					).show();
				});
			});
		});
	</script>
<%	}
%>