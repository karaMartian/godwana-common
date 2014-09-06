package za.co.arkitex.mobile.domain;

import javax.jws.WebResult;
import javax.jws.WebService;

import za.co.arkitex.mobile.gondwana.db.BrandQuery;
import za.co.arkitex.mobile.gondwana.db.SalesValueQuery;
import za.co.arkitex.mobile.gondwana.exceptions.WrongStringLengthException;
import za.co.arkitex.mobile.gondwana.ws.interfaces.SalesRepDataService;

@WebService(endpointInterface = "za.co.arkitex.mobile.gondwana.ws.interfaces.SalesRepDataService", name="SalesRepDataFilterService")
public class SalesRepDataServiceImpl implements SalesRepDataService {
	
	private SalesValueQuery svq;
	private String quarterly;
	
	@Override
	@WebResult(name="getDateFilter", targetNamespace="http://gondwana.mobile.arkitex.com/")
	public String[] getDateFilter(String date) {
		if (date.length() == 8) {
			// call month filter
			MonthFilter month = new MonthFilter();
			month.filter(date);
			// lack of better wording
			String[] response = new String[1];
			response[0] = month.getMonth();
			return response;
			
		} else if (date.length() == 7) {
			// call quarter filter
			QuarterFilter quarter = new QuarterFilter();
			quarter.filter(date);
			// lack of better wording
			String[] response = new String[2];
			
			return response;
		} else if (date.length() == 4) {
			// call year filter
			YearFilter year = new YearFilter();
			year.filter(date);
			
			// lack of better wording
			String[] response = new String[11];
			response = year.getYearList().toArray(response);
			
			return response;
			
		} else {

			 try {
				 throw new WrongStringLengthException("Your string is " + date.length() + "\nYou need 4 characters");
			 } catch(WrongStringLengthException wslex) {
				 wslex.printStackTrace();
			 }
			return null;
		}

	}
/*
	@Override
	public String[] getYearFilter(String year) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getMonthFilter(String month) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String[] getQuarterFilter(String quarter) {
		// TODO Auto-generated method stub
		return null;
	}*/

	@Override
	@WebResult(name="getBrandsByRepByDate", targetNamespace="http://gondwana.mobile.arkitex.com/")
	public String[] getBrandsByRepByDate(String repId, String startDate, String endDate) {
		
		BrandQuery bq = new BrandQuery(repId, startDate, endDate);
		bq.runDefaultQuery();
		System.out.println(bq.getBrandsList());
		String[] response = new String[bq.getBrandsList().size()];
		
		return   response = bq.getBrandsList().toArray(response);
		
	}

	@Override
	public String getSalesTrendDataByMonthByBrand(String repId, String brand, String startDate, String endDate) {
		return null;
	}

	@Override
	@WebResult(name="getSalesTrendData", targetNamespace="http://gondwana.mobile.arkitex.com/")
	public String[][] getSalesTrendData(String[] months, Brand[] brands) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@WebResult(name="getSalesTrendDataByProduct", targetNamespace="http://gondwana.mobile.arkitex.com/")
	public String[] getSalesTrendDataByProduct(String repId, String product,String threshold) {

			// yearly
			if (threshold.length() == 4) {
				String yearly = "jan " + threshold;
				String qry = "yearly";
				svq = new SalesValueQuery(repId,product,yearly);
				String[] response = new String[svq.getSalesValueCollection().size()];

				// needs a string "yearly"
				svq.validatePeriod(qry);

				System.out.println(svq.getProductName() + ": " + svq.getSalesValueCollection());
//				response = svq.getSalesValueCollection().toArray(response);
				return response;

				
			// quarterly
			} else if (threshold.length() == 7) {
				String concat 	= threshold.substring(0, 2);
				String year 	= threshold.substring(3, 7);
				
				
				if (concat.trim().equalsIgnoreCase("q1")) {
					quarterly ="jan " + year;
					
				} else if (concat.equalsIgnoreCase("q2")) {
					quarterly = "apr " + year;
				} else if (concat.equalsIgnoreCase("q3")) {
					
					quarterly = "jul " + year;
				} else if (concat.equalsIgnoreCase("q4")){
					quarterly = "oct " + year;
				}
				
				
				svq = new SalesValueQuery(repId,product,quarterly);
				
				String[] response = new String[svq.getSalesValueCollection().size()];
				String qry = "quarterly";
				svq.validatePeriod(qry);
				
				System.out.println(svq.getProductName() + ": " + svq.getSalesValueCollection());	
//				response = svq.getSalesValueCollection().toArray(response);
				return response;
				
				
			// monthly
			} else if (threshold.length() == 8) {
				String monthly = threshold;
				svq = new SalesValueQuery(repId,product,monthly);
				
				String[] response = new String[svq.getSalesValueCollection().size()];
				String qry = "monthly";
				
				svq.validatePeriod(qry);
				System.out.println(svq.getProductName() + ": " + svq.getSalesValueCollection());	
			//	response = svq.getSalesValueCollection().toArray(response);
				
				return response;
				
			} else {

				 try {
					 throw new WrongStringLengthException("Your string is " + threshold.length() + "\nPlease refer to manual");
				 } catch(WrongStringLengthException wslex) {
					 wslex.printStackTrace();
				 }
				 String[] response = new String[0];
				 response[0] = "Invalid Request";
				 
				return response;
			}
	}

}
