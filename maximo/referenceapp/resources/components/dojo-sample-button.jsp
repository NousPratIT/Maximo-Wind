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

%>	<span id="<%=id%>">The button will replace this span</span>
	<span id="<%=id%>_result"></span>

	<script type="text/javascript">
		require([ "dojo/_base/kernel", 
		          "dijit/registry", 
		          "dijit/form/Button" ],
		          function(kernel, registry, Button) {
			// If the user switched tabs and came back, we need to cleanup the
			//  previous widget before we create a new one.
			var myButton = registry.byId("<%=id%>"); 
			if (myButton != undefined) 
			{
				myButton.destroyRecursive();
			}
			// Create the button
			new Button(
				{
					label: "<%=label%>",
					onClick: function() 
					{
						 kernel.byId("<%=id%>_result").innerHTML += "Click ";
					}
				},
				"<%=id%>"
			);
		});
	</script>
<%	}
%>