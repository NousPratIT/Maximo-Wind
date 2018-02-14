package ibm.app.action;
//ibm.app.action.INSASendRepByEmailAction

import java.io.FileOutputStream;
import java.io.IOException;
import java.rmi.RemoteException;

import javax.mail.MessagingException;

import com.ibm.tivoli.maximo.report.birt.admin.ReportAdminServiceRemote;
import com.ibm.tivoli.maximo.report.birt.runtime.ReportParameterData;

import psdi.common.action.ActionCustomClass;
import psdi.common.commtmplt.CommTemplate;
import psdi.mbo.MboRemote;
import psdi.mbo.MboSetRemote;
import psdi.mbo.SqlFormat;
import psdi.security.UserInfo;
import psdi.server.MXServer;
import psdi.util.MXException;

public class INSASendRepByEmailAction implements ActionCustomClass {

	@Override
	public void applyCustomAction(MboRemote arg0, Object[] arg1)
			throws MXException, RemoteException {
		// TODO Auto-generated method stub
		System.out.println("[WIND][WO][EMAIL REPORT] Starting Email Report Action for WO " + arg0.getString("wonum"));
		
		try {
			MXServer.sendEMail(null, null, null, null, null, null, null, null, null);
		} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		
		ReportAdminServiceRemote  birtAdmService = (ReportAdminServiceRemote)MXServer.getMXServer().lookup("BIRTREPORT");

		UserInfo userInfo = arg0.getUserInfo();
		
		//report name
		String reportName = MXServer.getMXServer().getProperty("mxe.wind.wo.reportname");
		
		ReportParameterData parameterData = new ReportParameterData();
		parameterData.addParameter("wonum", arg0.getString("wonum"));
		
		//report output file name
		String filename = MXServer.getMXServer().getProperty("mxe.wind.wo.reportoutputname");
		
		//app name
		String appName = MXServer.getMXServer().getProperty("mxe.wind.wo.appname");
		
		//file path
		String filepath = MXServer.getMXServer().getProperty("mxe.wind.wo.temfilepath") + filename + ".pdf";
		
		//comm template
		String commTemplateID = MXServer.getMXServer().getProperty("mxe.wind.wo.commtemplate");
		
		//admin email
		String adminEmail = MXServer.getMXServer().getProperty("mxe.adminEmail");
		
		//PALLIS CHANGE: CC email
		String ccEmail = MXServer.getMXServer().getProperty("mxe.wind.wo.ccEmail");
				
		System.out.println("[WIND][WO][EMAIL REPORT] Report Name: " + reportName);
		System.out.println("[WIND][WO][EMAIL REPORT] Output File Name: " + filename);
		System.out.println("[WIND][WO][EMAIL REPORT] App Name: " + appName);
		System.out.println("[WIND][WO][EMAIL REPORT] File Path: " + filepath);
		System.out.println("[WIND][WO][EMAIL REPORT] Admin Email: " + adminEmail);
		System.out.println("[WIND][WO][EMAIL REPORT] CC Email: " + ccEmail);

		byte[] abyte0 = birtAdmService.runReport(userInfo, reportName, appName, parameterData, filename, "pdf");

		System.out.println("[WIND][WO][EMAIL REPORT] Report Generated");

		FileOutputStream fileoutputstream;
		try {
			fileoutputstream = new FileOutputStream(filepath);
			fileoutputstream.write(abyte0);
			fileoutputstream.flush();
			fileoutputstream.close();

			String fileNames[] = {filepath};
			
			MboSetRemote commSetRemote = MXServer.getMXServer().getMboSet("COMMTEMPLATE", arg0.getUserInfo());
			commSetRemote.setWhere("templateid='"+commTemplateID+"' and status = 'ACTIVE'");
			commSetRemote.reset();
			if(!commSetRemote.isEmpty()){
				
				CommTemplate commRemote = (CommTemplate)commSetRemote.getMbo(0);
				
				SqlFormat sqf = new SqlFormat(arg0, commRemote.getString("subject"));
				sqf.setIgnoreUnresolved(true);
				
				String subject = sqf.resolveContent();
				System.out.println("[WIND][WO][EMAIL REPORT] Subject: " + subject);
				
				sqf = new SqlFormat(arg0, commRemote.getString("message"));
				sqf.setIgnoreUnresolved(true);
				
				String message = sqf.resolveContent();
				System.out.println("[WIND][WO][EMAIL REPORT] Message: " + message);
				
				String sendTo = getEmailsToSend(arg0);
				System.out.println("[WIND][WO][EMAIL REPORT] sendTo: " + sendTo);
				
				System.out.println("[WIND][WO][EMAIL REPORT] CCTo: " + ccEmail);
				
				if(sendTo != null && adminEmail != null && message != null){
					MXServer.sendEMail(sendTo, ccEmail, null, adminEmail, subject, message, null, fileNames, null);
					System.out.println("[WIND][WO][EMAIL REPORT] Email Sent");
				}else {
					System.out.println("[WIND][WO][EMAIL REPORT] Email Not Sent");
				}
			}
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	private String getEmailsToSend(MboRemote arg0) throws RemoteException, MXException{
		
		String emails = null;
		//Get the labors from the assignement tab. DO NOT use wplabor, since this is the planned one,
		//not the assigned one.
		MboSetRemote assignLaborSet = arg0.getMboSet("assignment");
		MboSetRemote laborSet = null;
		MboSetRemote personSet = null;
		MboSetRemote emailSet = null;
		
		MboRemote labor = null;
		MboRemote person = null;
		MboRemote email;
		
		System.out.println("[WIND][WO][ESCALATION EMAIL] assignLaborSet:");
		for(MboRemote assignLabor = assignLaborSet.moveFirst(); assignLabor != null; 
			assignLabor = assignLaborSet.moveNext()){
			
			laborSet = assignLabor.getMboSet("labor");
			System.out.println("[WIND][WO][ESCALATION EMAIL] laborSet");
			if(!laborSet.isEmpty() && laborSet.count() == 1){
				labor = laborSet.getMbo(0);
				
				personSet = labor.getMboSet("person");
				System.out.println("[WIND][WO][ESCALATION EMAIL] personSet");
				if(!personSet.isEmpty() && personSet.count() == 1){
					person = personSet.getMbo(0);
					
					emailSet = person.getMboSet("PRIMARYEMAIL");
					System.out.println("[WIND][WO][ESCALATION EMAIL] emailSet");
					if(!personSet.isEmpty() && personSet.count() == 1){
						System.out.println("got email");
						email = emailSet.getMbo(0);
						
						if(emails == null){
							emails = email.getString("emailaddress");
						}else {
							emails = emails + ", " + email.getString("emailaddress");
						}
					}
				}
			}
		}
		
		System.out.println("[WIND][WO][ESCALATION EMAIL] returning :"+emails);
		return emails;
	}

}
