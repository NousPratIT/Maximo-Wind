package ibm.webclient.beans.workorder;
//ibm.webclient.beans.workorder.INSAWoChangeStatusBean

import java.rmi.RemoteException;

import psdi.mbo.MboConstants;
import psdi.util.MXException;
import psdi.webclient.beans.common.StatefulAppBean;
import psdi.webclient.beans.workorder.WOChangeStatusBean;

public class INSAWoChangeStatusBean extends WOChangeStatusBean {

	public INSAWoChangeStatusBean() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public void initialize() throws MXException, RemoteException {
		// TODO Auto-generated method stub
		super.initialize();
		
		StatefulAppBean appBean = (StatefulAppBean)this.app.getAppBean();
		
		String statusChange = appBean.statusChangeButtonSigoption;
		
		if(statusChange != null){
			if(statusChange.equalsIgnoreCase("FAIL")){
				setValue("status", statusChange, MboConstants.NOACCESSCHECK);
			}else if(statusChange.equalsIgnoreCase("CAN")){
				setValue("status", statusChange, MboConstants.NOACCESSCHECK);
			}else if(statusChange.equalsIgnoreCase("REJECTED")){
				setValue("status", statusChange, MboConstants.NOACCESSCHECK);
			}
		}
	}
}
 