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
<%@ include file="../../common/componentheader.jsp" %>


<%
 	if (component.getProperty("refbuttontype").equals("order"))
	{ %>
		<script>
		
			// send out of order requests test
			queueRequests = function()
			{
				showWait();
				
				console.log("\nSending clear, sequenceNum = " + queueManager.sequenceNum);
				sendXHREvent("outoforder", "refcomm", "clear", REQUESTTYPE_ASYNC);
				startingSeqNum = queueManager.sequenceNum;
				console.log("Starting Sequence Number = " + startingSeqNum);
		
				alert("sending request sequence " + queueManager.sequenceNum);
				console.log("queueManager.sequenceNum = " + queueManager.sequenceNum);
				sendXHREvent("outoforder", "refcomm", "" + queueManager.sequenceNum, REQUESTTYPE_ASYNC);
							
				alert("sending request sequence " + queueManager.sequenceNum);
				console.log("queueManager.sequenceNum = " + queueManager.sequenceNum);
				sendXHREvent("outoforder", "refcomm", "" + queueManager.sequenceNum, REQUESTTYPE_ASYNC);
		
				alert("sending request sequence " + queueManager.sequenceNum);
				console.log("queueManager.sequenceNum = " + queueManager.sequenceNum);
				sendXHREvent("outoforder", "refcomm", "" + queueManager.sequenceNum, REQUESTTYPE_ASYNC);
		
				alert("sending request sequence " + queueManager.sequenceNum);
				console.log("queueManager.sequenceNum = " + queueManager.sequenceNum);
				sendXHREvent("outoforder", "refcomm", "" + queueManager.sequenceNum, REQUESTTYPE_ASYNC);
		
				console.log("Final Sequence Number = " + queueManager.sequenceNum);
		
				hideWait();
			};
		
		</script>

		<span id="<%=id%>">
			<button type="button" onclick="queueRequests()">Queue Up Requests</button>
		</span>
<%	}
	else if (component.getProperty("refbuttontype").equals("lost"))
	{	%>

		<script>
			var secondEvent = null; 
			// simulate losing a request 
			loseRequest = function()
			{
				// if we're using the new code do this
				if (queueManager.requestOverflow)	// test to see if we have the new code
				{
					console.log("queueManager.sequenceNum = " + queueManager.sequenceNum);
					sendXHREvent("lostrequesttest", "refcomm", null, REQUESTTYPE_SYNC);
					secondEvent = dojo.clone(queueManager.sentRequest);
					//window.setTimeout('waitForRequestToFinish()', 100);
					waitForRequestToFinish();
				}
				else
					queueManager.sequenceNum = queueManager.sequenceNum + 1;
			};
			
			waitForRequestToFinish = function()
			{
				if (secondEvent)
				{
					if (queueManager.sentRequest)
					{
						//showWait();
						window.setTimeout('waitForRequestToFinish()', 50);					
					}
					else
					{
						console.log("queueManager.sequenceNum = " + queueManager.sequenceNum);
						secondEvent.headers['xhrseqnum'] = queueManager.sequenceNum;
						secondEvent.headers['_QM_Try'] = 1;
						//secondEvent.headers['nosleep'] = true;
						queueManager.lastSentReq =  queueManager.sequenceNum;
						queueManager.sequenceNum = queueManager.sequenceNum + 1;
						queueManager.sentRequest = secondEvent;
						console.log("queueManager.sentRequest = " + queueManager.sentRequest);
						console.log(secondEvent);
						queueManager.requestTimeout = window.setTimeout('queueManager.reSendRequest()', 5000);
						console.log("done with secondevent");
						//hideWait();
					}
				}
				else
				{
					console.log("no second event");
				}
			};
						
		</script>

		<span id="<%=id%>">
			<button type="button" onclick="loseRequest()">Send Lost Request</button>
		</span>
<%	}	%>

<%@ include file="../../common/componentfooter.jsp" %>
