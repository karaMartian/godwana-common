package za.co.arkitex.mobile.domain;

public class SalesGrowthFactory {

	private String defaultYear; // this is subjective
	private String previousYear;
	private String previousMTDMonth; // this is nov
	
	
	public String calcPreviousYear(String defaultYear) {
		this.defaultYear = defaultYear;

		int year = Integer.parseInt(defaultYear);
		int previous = year- 1;
		
		previousYear = "" + previous;
		return previousYear;
	}
	
	
	
}
