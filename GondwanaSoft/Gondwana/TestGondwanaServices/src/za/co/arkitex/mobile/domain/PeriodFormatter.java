package za.co.arkitex.mobile.domain;

public class PeriodFormatter {
	
	private String month;
	private String nextMonth;
	private Truncate chop;
	private Concatenate concat;
	
	// provide a comm month 
	public PeriodFormatter(String month) {
		// lets validate first that our month is acceptable: 8 chars
		if (month.length() == 8) {
			this.month = month;
			chop = new Truncate(month);
			chop.chop();
			setMonth(chop.getResult());
		} else {
			System.out.println("Please refer to manual.\nProvide a qualified month example 'nov 1990'\nYou need 8 chars");
		}
	}
	
	public void setNextMonth(String nextMonth) {
		this.nextMonth = nextMonth;
	}

	public String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}
	
	// pass only 3 chars.
	public String getNextMonth() {
		
		if (month.equalsIgnoreCase("jan")){
			System.out.println("Next Month is Feb");
			System.out.println("Which Year? " + chop.getEndPoint());
			
			nextMonth = "feb";
			
			// lets append the year, to have a fully qualified comm month
			concat = new Concatenate(nextMonth, chop.getEndPoint());
			System.out.println("Fully Qualified next comm month is: " + concat.getResult());
		
			return concat.getResult();
			
		} else if (month.equalsIgnoreCase("feb")) {
			System.out.println("Next Month is Mar");
			System.out.println("Which Year? " + chop.getEndPoint());
			nextMonth = "mar";	
			
			// lets append the year, to have a fully qualified comm month
			concat = new Concatenate(nextMonth, chop.getEndPoint());
			System.out.println("Fully Qualified next comm month is: " + concat.getResult());
		
			return concat.getResult();		
			
		} else if (month.equalsIgnoreCase("mar")) {
			System.out.println("Next Month is Apr");
			System.out.println("Which Year? " + chop.getEndPoint());
			nextMonth = "apr";	
			
			// lets append the year, to have a fully qualified comm month
			concat = new Concatenate(nextMonth, chop.getEndPoint());
			System.out.println("Fully Qualified next comm month is: " + concat.getResult());
		
			return concat.getResult();
			
		} else if (month.equalsIgnoreCase("apr")) {
			System.out.println("Next Month is May");
			System.out.println("Which Year? " + chop.getEndPoint());
			nextMonth = "may";
			
			// lets append the year, to have a fully qualified comm month
			concat = new Concatenate(nextMonth, chop.getEndPoint());
			System.out.println("Fully Qualified next comm month is: " + concat.getResult());
		
			return concat.getResult();
			
		} else if (month.equalsIgnoreCase("may")) {
			System.out.println("Next Month is Jun");
			System.out.println("Which Year? " + chop.getEndPoint());
			nextMonth = "jun";
			
			// lets append the year, to have a fully qualified comm month
			concat = new Concatenate(nextMonth, chop.getEndPoint());
			System.out.println("Fully Qualified next comm month is: " + concat.getResult());
		
			return concat.getResult();
			
		} else if (month.equalsIgnoreCase("jun")) {
			System.out.println("Next Month is Jul");
			System.out.println("Which Year? " + chop.getEndPoint());
			nextMonth = "jul";
			
			// lets append the year, to have a fully qualified comm month
			concat = new Concatenate(nextMonth, chop.getEndPoint());
			System.out.println("Fully Qualified next comm month is: " + concat.getResult());
		
			return concat.getResult();
			
		} else if (month.equalsIgnoreCase("jul")) {
			System.out.println("Next Month is Aug");
			System.out.println("Which Year? " + chop.getEndPoint());
			nextMonth = "aug";
			
			// lets append the year, to have a fully qualified comm month
			concat = new Concatenate(nextMonth, chop.getEndPoint());
			System.out.println("Fully Qualified next comm month is: " + concat.getResult());
		
			return concat.getResult();
			
		} else if (month.equalsIgnoreCase("aug")) {
			System.out.println("Next Month is Sep");
			System.out.println("Which Year? " + chop.getEndPoint());
			nextMonth = "sep";
			
			// lets append the year, to have a fully qualified comm month
			concat = new Concatenate(nextMonth, chop.getEndPoint());
			System.out.println("Fully Qualified next comm month is: " + concat.getResult());
		
			return concat.getResult();
			
		} else if (month.equalsIgnoreCase("sep")) {
			System.out.println("Which Year? " + chop.getEndPoint());
			System.out.println("Next Month is Oct");
			nextMonth = "oct";
			
			// lets append the year, to have a fully qualified comm month
			concat = new Concatenate(nextMonth, chop.getEndPoint());
			System.out.println("Fully Qualified next comm month is: " + concat.getResult());
		
			return concat.getResult();
			
		} else if (month.equalsIgnoreCase("oct")) {
			System.out.println("Which Year? " + chop.getEndPoint());
			System.out.println("Next Month is Nov");
			nextMonth = "nov";
			
			// lets append the year, to have a fully qualified comm month
			concat = new Concatenate(nextMonth, chop.getEndPoint());
			System.out.println("Fully Qualified next comm month is: " + concat.getResult());
		
			return concat.getResult();
			
		} else if (month.equalsIgnoreCase("nov")) {
			System.out.println("Next Month is Dec");
			System.out.println("Which Year? " + chop.getEndPoint());
			nextMonth = "dec";

			// lets append the year, to have a fully qualified comm month
			concat = new Concatenate(nextMonth, chop.getEndPoint());
			System.out.println("Fully Qualified next comm month is: " + concat.getResult());
		
			return concat.getResult();
			
		} else if (month.equalsIgnoreCase("dec")){
			// dec, for now let not return next month jan. just return the same month.
			nextMonth = month;
			System.out.println("Month is " + nextMonth);
			System.out.println("Which Year? " + chop.getEndPoint());

			// lets append the year, to have a fully qualified comm month
			concat = new Concatenate(nextMonth, chop.getEndPoint());
			System.out.println("Fully Qualified next comm month is: " + concat.getResult());
		
			return concat.getResult();
			
			
		} else {
			System.out.println("Please refer to manual.\nCould not process your request");
			return "Invalid request";
		}
		
		
	}
	
	

}
