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
%><%@page import="psdi.webclient.system.controller.BoundComponentInstance"
%><%@page import="psdi.webclient.system.controller.ComponentInstance"
%><%
	BoundComponentInstance component = (BoundComponentInstance)ComponentInstance.getCurrent(request);
	String id = component.getRenderId();

	boolean readonly = component.isReadOnly();

	int min = component.getInt("minimum", 0);
	int max = component.getInt("maximum", 100);

	int increment = component.getInt("increment", 1);
	int labelIncrement = component.getInt("labelincrement", 10);

	String stringValue = component.getString();

	int value;
	if(stringValue.isEmpty())
	{
		value = min;
	}
	else
	{
		try
		{
			value = Integer.parseInt(stringValue);
		}
		catch(NumberFormatException ex)
		{
			%>Number format exception <%=ex.getMessage()%> for <%=component%><%
			return;
		}
	}

	if(value < min)
	{
		value = min;
	}
	else if(value > max)
	{
		value = max;
	}

	if (component.needsRender())
	{
%>	<span id="<%=id%>"></span>
	<script type="text/javascript">
		// Load the dojo modules that we need
		require([ "dojo/_base/kernel", 
		          "dijit/registry", 
		          "dijit/form/HorizontalRule",
		          "dijit/form/HorizontalRuleLabels",
		          "dijit/form/HorizontalSlider" ], 
		          function(kernel, registry, HorizontalRule, HorizontalRuleLabels, HorizontalSlider) {
			// If the user switched tabs and came back, we need to cleanup the
			//  previous widget before we create a new one.
			// Unfortunately we can't easily reuse the old one
			var slider = registry.byId("<%=id%>");
			if (slider != undefined)
			{
				slider.destroyRecursive();
			}

			// Create some dom nodes as children of the slider to hold the
			//  rules and rule labels
			var node = kernel.byId("<%=id%>");
			var ruleNode = document.createElement('div');
			node.appendChild(ruleNode);
			var ruleLabelsNode = document.createElement('div');
			node.appendChild(ruleLabelsNode);

			var sliderRule = new HorizontalRule({
				count: <%=(max - min) / labelIncrement + 1%>,
				style: "height:5px"
			}, ruleNode);

			var sliderLabels = new HorizontalRuleLabels({
				minimum: <%=min%>,
				maximum: <%=max%>,
				count: <%=(max - min) / labelIncrement + 1%>,
				constraints: {pattern:"#"},
				style: "height:2em;font-size:75%;"
			}, ruleLabelsNode); 

			slider = new HorizontalSlider({
				name: "<%=id%>",
				value: "<%=value%>",
				minimum: <%=min%>,
				maximum: <%=max%>,
				onChange: function(value)
				{
					// Only change the value if the widget has focus, otherwise
					//  its a result of a call to set('value', value) and we
					//  want to ignore those as the source will send the
					//  setvalue event
					if(this.hasFocus)
					{
						dojohelper.input_changed_value(this, value);
						// Update any other components on the page that are
						//  bound to the same attribute
						setMatchingFieldStates(this.valueNode, false);
					}
				},
				onFocus: function(event)
				{
					this.hasFocus = true;
					
					// Non straight forward way to call dojohelper.on_focus(),
					//  but necessary so that 'this' in that function is set to
					//  the slider
					dojohelper.on_focus.call(this);
				},
				onBlur: function(event)
				{
					delete this.hasFocus;
				},
				style: {width:"200px"},
				discreteValues: <%=(max - min) / increment + 1%>,
				showButtons: "true",
				disabled: <%=readonly%>
			}, node);

			// Start the widgets
			slider.startup();
			sliderRule.startup();
			sliderLabels.startup();

			// Set the fieldInfo so the update of same attributes works
			slider.valueNode.setAttribute('fldInfo', '<%=component.getFieldInfo()%>');
			
<%			if(component.isAsyncEnabled())
			{
%>          // Mark it with the appropriate attributes for async
			slider.domNode.setAttribute('async', '1');
			slider.domNode.setAttribute('ae', 'setvalue');
<%			}
%>
		});
	</script>
<%	}
	else
	{
%>	<component id="<%=id%>_holder"><%="<![CDATA["%>
		<script>
			require([ "dijit/registry" ], function(registry) {
				var slider = registry.byId('<%=id%>');
				slider.set('value', <%=value%>);
				slider.set('disabled', <%=readonly%>);
			});
		</script>
	<%="]]>"%></component>
<%	}
%>