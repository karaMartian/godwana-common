package za.co.arkitex.mobile.tst;

import za.co.arkitex.mobile.domain.PeriodFormatter;

public class TestPeriodFormatter {

	public static void main(String[] args) {
		PeriodFormatter pf = new PeriodFormatter("mar 2013");
		pf.getNextMonth();

	}

}
