package ibm.webclient.beans.workorder;
//ibm.webclient.beans.workorder.INSAWoAppBean

import java.rmi.RemoteException;

import psdi.mbo.StatefulMboRemote;
import psdi.util.MXApplicationException;
import psdi.util.MXException;
import psdi.webclient.beans.workorder.WorkorderAppBean;
import psdi.webclient.system.beans.DataBean;

public class INSAWoAppBean extends WorkorderAppBean {

	public INSAWoAppBean() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int FAIL() throws MXException, RemoteException {
		DataBean appBean = this.app.getAppBean();
		StatefulMboRemote stateful = (StatefulMboRemote)appBean.getMbo();
		
		if(stateful.getMboSet("ZFAILREPORT_EMPTY").isEmpty()){
			throw new MXApplicationException("workorder","nofailurereport");
		}
		
		if(!stateful.getMboSet("ZCAUSE_HIGHCOST").isEmpty() && stateful.isNull("ZESTCONSTRUCTCOST")){
			throw new MXApplicationException("workorder","estimationCostRequired");
		}

		this.targetStatusOption = "COMP";
		this.statusChangeButtonSigoption = "FAIL";

		stateful.setTargetStatusOption("COMP");
		stateful.setStatusChangeButtonSigoption("FAIL");
		STATUSSUB();
		if (this.app.onListTab())
			this.clientSession.loadDialog("list_status");
		else
			this.clientSession.loadDialog("status");
		return 1;
	}
	
	public int REJECT() throws MXException, RemoteException {
		DataBean appBean = this.app.getAppBean();
		StatefulMboRemote stateful = (StatefulMboRemote)appBean.getMbo();

		this.targetStatusOption = "CAN";
		this.statusChangeButtonSigoption = "REJECTED";

		stateful.setTargetStatusOption("CAN");
		stateful.setStatusChangeButtonSigoption("REJECTED");
		STATUSSUB();
		if (this.app.onListTab())
			this.clientSession.loadDialog("list_status");
		else
			this.clientSession.loadDialog("status");
		return 1;
	}
	
	public int CANCEL() throws MXException, RemoteException {
		DataBean appBean = this.app.getAppBean();
		StatefulMboRemote stateful = (StatefulMboRemote)appBean.getMbo();

		this.targetStatusOption = "CAN";
		this.statusChangeButtonSigoption = "CAN";

		stateful.setTargetStatusOption("CAN");
		stateful.setStatusChangeButtonSigoption("CAN");
		STATUSSUB();
		if (this.app.onListTab())
			this.clientSession.loadDialog("list_status");
		else
			this.clientSession.loadDialog("status");
		return 1;
	}
}
