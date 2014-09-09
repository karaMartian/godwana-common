package za.co.arkitex.mobile.gondwana.ws.impl;

import java.util.ArrayList;
import java.util.HashMap;

import javax.jws.WebResult;
import javax.jws.WebService;

import za.co.arkitex.mobile.domain.MonthFilter;
import za.co.arkitex.mobile.domain.QuarterFilter;
import za.co.arkitex.mobile.domain.SalesTrendData;
import za.co.arkitex.mobile.domain.YearFilter;
import za.co.arkitex.mobile.gondwana.db.AggregatedSalesValueQuery;
import za.co.arkitex.mobile.gondwana.db.BrandQuery;
import za.co.arkitex.mobile.gondwana.db.ProxyCustomer;
import za.co.arkitex.mobile.gondwana.db.SalesValueQuery;
import za.co.arkitex.mobile.gondwana.db.Top25CustomersQuery;
import za.co.arkitex.mobile.gondwana.exceptions.WrongStringLengthException;
import za.co.arkitex.mobile.gondwana.ws.interfaces.SalesRepresentativeServiceContract;

@WebService(endpointInterface = "za.co.arkitex.mobile.gondwana.ws.interfaces.SalesRepresentativeServiceContract",
			name="SalesRepresentativeDataFilterService")
public class SalesRepresentativeServiceImpl implements
		SalesRepresentativeServiceContract {

	private ArrayList<String> brandList;
	private ArrayList<Integer> salesList;
	
	
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

	@Override
	@WebResult(name="getBrandsByDate", targetNamespace="http://gondwana.mobile.arkitex.com/")
	public String[] getBrandsByDate(String repId, String date) {
		BrandQuery query;
		// fetch for year
		 if (date.length() == 4) {
			 query = new BrandQuery(repId, date);
			 query.queryCommYear();
			 
			 System.out.println(query.getBrandsList());
			 String[] response = new String[query.getBrandsList().size()];
				
			 // lets add brands to our brands list.
			 brandList = new ArrayList<String>();
			 brandList = query.getBrandsList();
//				System.out.println("Local Brands:" + brandList);
				
			return   response = query.getBrandsList().toArray(response);
				
		 } else if (date.length() == 7) {
			// fetch for quarter
			 query = new BrandQuery(repId, date);
			 query.queryCommQuarter();
			 
			 System.out.println(query.getBrandsList());
			 String[] response = new String[query.getBrandsList().size()];
				
			 // lets add brands to our brands list.
			 brandList = new ArrayList<String>();
			 brandList = query.getBrandsList();
//				System.out.println("Local Brands:" + brandList);
				
			return   response = query.getBrandsList().toArray(response);			 
			 
		 } else if (date.length() == 8) {
			// fetch for month
			 query = new BrandQuery(repId, date);
			 query.queryCommMonth();
			 
			 System.out.println(query.getBrandsList());
			 String[] response = new String[query.getBrandsList().size()];
				
			 // lets add brands to our brands list.
			 brandList = new ArrayList<String>();
			 brandList = query.getBrandsList();
//				System.out.println("Local Brands:" + brandList);
				
			return   response = query.getBrandsList().toArray(response);
		 } else {
			 return null;
		 }
		
		

	}

	@Override
	public Integer[] getSalesTrendDataByProduct(String repId, String product, String date) {
		SalesValueQuery query;
		
		if (date.length() == 4) {
			// fetch for year
			query = new SalesValueQuery(repId, product, date);
			query.queryCommYear();
			
			System.out.println(query.getSalesValuesList());
			Integer[] response = new Integer[query.getSalesValuesList().size()];
		
			salesList = query.getSalesValuesList();
				
			return   response = query.getSalesValuesList().toArray(response);
			
		} else if (date.length() == 7) {
			// fetch for quarter
			query = new SalesValueQuery(repId, product, date);
			query.queryCommQuarter();
			
			System.out.println(query.getSalesValuesList());
			Integer[] response = new Integer[query.getSalesValuesList().size()];
		
			salesList = query.getSalesValuesList();
				
			return   response = query.getSalesValuesList().toArray(response);			
		} else if (date.length() == 8) {
			query = new SalesValueQuery(repId, product, date);
			query.queryCommMonth();
			
			System.out.println(query.getSalesValuesList());
			Integer[] response = new Integer[query.getSalesValuesList().size()];
		
			salesList = query.getSalesValuesList();
				
			return   response = query.getSalesValuesList().toArray(response);	
			
		} else {
			
			return null;	
		}
		
		
	}

	// all brands and sales values
	@Override
	@WebResult(name="getSalesTrendData", targetNamespace="http://gondwana.mobile.arkitex.com/")
	public SalesTrendData[] getSalesTrendData(String repId, String date) {
		
		AggregatedSalesValueQuery aggQuery;
		
//		HashMap<String, Double[]> chartDataMap;
		SalesTrendData[] salesTrendData;
		
//		if (date.length() == 4) {
			aggQuery = new AggregatedSalesValueQuery();

	//		chartDataMap = aggQuery.queryCommYear(repId, date);
			salesTrendData =  aggQuery.queryCommYear(repId, date);
			
			
			return salesTrendData;
			
//		} 
		/*else if (date.length() == 7) {
			aggQuery = new AggregatedSalesValueQuery);
			aggQuery.queryCommQuarter((repId, date);
			chartDataMap = aggQuery.queryCommYear(repId, date);

			return chartDataMap;

		} else if (date.length() == 8) {
			aggQuery = new AggregatedSalesValueQuery(repId, date);
			aggQuery.queryCommMonth();
			
			String[] salesList = new String[aggQuery.getSalesList().size()];
			salesList = aggQuery.getSalesList().toArray(salesList);
			
			String[] productList = new String[aggQuery.getProductList().size()];
			productList = aggQuery.getProductList().toArray(productList);
			
			
			String[] commList = new String[aggQuery.getCommList().size()];
			commList = aggQuery.getCommList().toArray(commList);
			
//			Integer[] response = new Integer[aggQuery.]
			
			return salesList;
	
		} else {
			return null;
		}
 		
*/	
			
	}

	
	
	@Override
	public ProxyCustomer[] getMyTop25Customers(String repId, String date) {
		Top25CustomersQuery query;
		
		if (date.length() == 4) {
			// year
			query = new Top25CustomersQuery(repId, date);
			query.queryCommYear();
			
			ProxyCustomer[] response = new ProxyCustomer[query.getCustomerValuesList().size()];
			
			response = query.getCustomerValuesList().toArray(response);
			return response;
			
		} else if (date.length() == 7) {
			// quarter
			query = new Top25CustomersQuery(repId, date);
			query.queryCommQuarter();
			
			ProxyCustomer[] response = new ProxyCustomer[query.getCustomerValuesList().size()];
			
			response = query.getCustomerValuesList().toArray(response);
			return response;
			
		} else if (date.length() == 8) {
			 // month
			query = new Top25CustomersQuery(repId, date);
			query.queryCommMonth();
			
			ProxyCustomer[] response = new ProxyCustomer[query.getCustomerValuesList().size()];
			
			response = query.getCustomerValuesList().toArray(response);
			return response;

		} else {
			return null;
		}
			
		
	}

	@Override
	public String[] getMySalesVisualized(String repId, String date) {

		return null;
	}

	
}
