package za.co.arkitex.mobile.gondwana.ws.tst;

import za.co.arkitex.mobile.gondwana.db.SalesVisualizedQuery;

public class TestSalesVisualized {

	public static void main(String[] args) {
		SalesVisualizedQuery qry = new SalesVisualizedQuery("0008", "q2 2013");
//		qry.queryCommMonth();
//		qry.queryCommYear();
		qry.queryCommQuarter();
	}
}
