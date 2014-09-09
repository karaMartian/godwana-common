package za.co.arkitex.mobile.domain;

import java.util.ArrayList;

import za.co.arkitex.mobile.gondwana.exceptions.WrongStringLengthException;

public class YearFilter {

	private String year;
	private ArrayList<String> yearList;
	
	public String getYear() {
		return year;
	}
	public ArrayList<String> getYearList() {
		return yearList;
	}

	public void setYear(String year) {
		this.year = year;
	}


	public String validate(String calendar) {
		 if (calendar.length() == 4) {
			
			 setYear(calendar);	
			 return getYear().toString();
			 
		 } else {
			
			 try {
				 throw new WrongStringLengthException("Your string is " + calendar.length() + "\nYou need 4 characters");
			 } catch(WrongStringLengthException wslex) {
				 wslex.printStackTrace();
			 }
			 return "Invalid format";
			 
		 }
		
	}

	public void format(String calendar) {
		yearList = new ArrayList<String>();
		yearList.add("jan " + calendar);
		yearList.add("feb " + calendar);
		yearList.add("mar " + calendar);
		yearList.add("apr " + calendar);
		yearList.add("may " + calendar);
		yearList.add("jun " + calendar);
		yearList.add("jul " + calendar);
		yearList.add("aug " + calendar);
		yearList.add("sep " + calendar);
		yearList.add("oct " + calendar);
		yearList.add("nov " + calendar);
		yearList.add("dec " + calendar);
	
		
	}
	
	public void  filter(String calendar) {
		validate(calendar);
		// to decide whether to format before validating?
		format(getYear());
		System.out.println(yearList);
		

	}

}
