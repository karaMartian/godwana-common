package za.co.arkitex.mobile.tst;



public class TestMyQueries {

	public static void main(String[] args) {
		
		String year  = "2013";
		String month = "jan 2013";
		String quarter = "q1 2013";
		String rep = "0008";
		String product = "product 6";
		
//		SalesValueYearQuery yearQuery = new SalesValueYearQuery(rep, product, year);
//		yearQuery.execute();
		System.out.println(yearQuery.getMapValues());
		
//		SalesValueMonthQuery monthQuery = new SalesValueMonthQuery(rep, product,month);
//		monthQuery.execute();
		
//		SalesValueQuarterQuery quarterQuery = new SalesValueQuarterQuery(rep, product, quarter);
//		quarterQuery.execute();

	}

}
