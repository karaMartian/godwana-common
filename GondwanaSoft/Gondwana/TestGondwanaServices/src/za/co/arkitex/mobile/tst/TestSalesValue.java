package za.co.arkitex.mobile.tst;

import za.co.arkitex.mobile.gondwana.db.SalesValueQuery;

public class TestSalesValue {

	public static void main(String[] args) {
		SalesValueQuery svq = new SalesValueQuery("0008",
												  "Product 6",
												  "jan 2013");

//		svq.runQuery();
		
		svq.validatePeriod("quarterly");
		svq.runQuarterlyQuery();

//		svq.validatePeriod("yearly");
//		svq.runYearlyQuery();
		
		System.out.println(svq.getProductName() + ": " + svq.getSalesValueCollection());
	}

}
