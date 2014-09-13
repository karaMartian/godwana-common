package za.co.arkitex.mobile.tst;

import za.co.arkitex.mobile.domain.Period;
import za.co.arkitex.mobile.gondwana.db.SalesGradingCustomersQuery;

public class CopyOfTest {

	public static void main(String[] args) {
	
		SalesGradingCustomersQuery tst = new SalesGradingCustomersQuery();
		tst.getYearValues("0022", "2012", "A");

	}
}
