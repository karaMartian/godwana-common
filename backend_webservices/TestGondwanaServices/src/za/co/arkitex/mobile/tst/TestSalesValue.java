package za.co.arkitex.mobile.tst;

import java.util.Date;

import za.co.arkitex.mobile.gondwana.db.SalesValueQuery;

public class TestSalesValue {

	public static void main(String[] args) {
		
		long startTime = new Date().getTime();
		//some tasks
		SalesValueQuery svq = new SalesValueQuery("0008",
												  "Product 6",
												  "jan 2013");

//		svq.runQuery();
		
//		svq.validatePeriod("quarterly");
//		svq.runQuarterlyQuery();

		svq.validatePeriod("yearly");
		svq.runYearlyQuery();
	
		System.out.println(svq.getProductName() + ": " + svq.getSalesValueCollection());
		
		long endTime = new Date().getTime();
		long difference = endTime - startTime;
	 
		System.out.println("Elapsed milliseconds: " + difference);
		System.out.println("Seconds: " + (difference/(1000)));
	}

}
