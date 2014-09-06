package za.co.arkitex.mobile.tst;

import za.co.arkitex.mobile.gondwana.db.BrandQuery;

public class Tester {

	public static void main(String[] args) {
		BrandQuery bq = new BrandQuery();
		bq.setSalesRepId("0008");
		bq.setFromPeriod("2013-01-26");
		bq.setToPeriod("2013-06-25");
//		bq.runQuery();
		
	
	}
}
