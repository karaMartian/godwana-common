package za.co.arkitex.mobile.gondwana.ws.interfaces;


import java.util.ArrayList;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;

import za.co.arkitex.mobile.domain.Brand;

@WebService
@SOAPBinding(style = SOAPBinding.Style.RPC) 
public interface SalesRepDataService {

	@WebMethod
	public String[] getDateFilter(@WebParam(name="date", targetNamespace="http://mobile.arkitex.com/")
			String date);
	

/*	@WebMethod(exclude=true)
	public String[] getYearFilter(@WebParam(name="year", targetNamespace="http://mobile.arkitex.com/")
			String year);
	
	@WebMethod(exclude=true)
	public String getMonthFilter(String month);
	
	
	@WebMethod(exclude=true)
	public String[] getQuarterFilter(String quarter);*/
	
	@WebMethod
	public String[] getBrandsByRepByDate(
			@WebParam(name="repId", targetNamespace="http://mobile.arkitex.com/")
			String repId, 
			@WebParam(name="startDate", targetNamespace="http://mobile.arkitex.com/")
			String startDate, 
			@WebParam(name="endDate", targetNamespace="http://mobile.arkitex.com/")
			String endDate);
	
	
	@WebMethod(exclude=true)
	public String getSalesTrendDataByMonthByBrand(String repId, String brand, String startDate, String endDate);
	
	@WebMethod
	public String[] getSalesTrendDataByProduct(
			@WebParam(name="repId", targetNamespace="http://mobile.arkitex.com/")
			String repId,
			@WebParam(name="product", targetNamespace="http://mobile.arkitex.com/")
			String product,
			@WebParam(name="threshold", targetNamespace="http://mobile.arkitex.com/")
			String threshold
			
			);
	
	@WebMethod
	public String[][] getSalesTrendData(
			@WebParam(name="months", targetNamespace="http://mobile.arkitex.com/")
			String[] months, 
			@WebParam(name="brands", targetNamespace="http://mobile.arkitex.com/")
			Brand[] brands);
	
	
	
}
