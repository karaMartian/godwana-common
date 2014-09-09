package za.co.arkitex.mobile.gondwana.ws.interfaces;

import java.util.HashMap;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;

import za.co.arkitex.mobile.domain.SalesTrendData;
import za.co.arkitex.mobile.gondwana.db.ProxyCustomer;

@WebService
@SOAPBinding(style = SOAPBinding.Style.RPC) 
public interface SalesRepresentativeServiceContract {

	@WebMethod
	public String[] getDateFilter(
			@WebParam(name="date", targetNamespace="http://mobile.arkitex.com/")
			String date);
	
	
	@WebMethod
	public String[] getBrandsByDate(
			@WebParam(name="repId", targetNamespace="http://mobile.arkitex.com/")
			String repId, 
			@WebParam(name="date", targetNamespace="http://mobile.arkitex.com/")
			String date);
	
	@WebMethod
	public Integer[] getSalesTrendDataByProduct(
			@WebParam(name="repId", targetNamespace="http://mobile.arkitex.com/")
			String repId,
			@WebParam(name="product", targetNamespace="http://mobile.arkitex.com/")
			String product,
			@WebParam(name="date", targetNamespace="http://mobile.arkitex.com/")
			String date);
	
	// to refactor this we need good collection to hold my elements. 
	
	@WebMethod
	public SalesTrendData[] getSalesTrendData(
			@WebParam(name="repId", targetNamespace="http://mobile.arkitex.com/")
			String repId,
			@WebParam(name="date", targetNamespace="http://mobile.arkitex.com/")
			String date);
	
	@WebMethod
	public ProxyCustomer[] getMyTop25Customers(			
			@WebParam(name="repId", targetNamespace="http://mobile.arkitex.com/")
			String repId,
			@WebParam(name="date", targetNamespace="http://mobile.arkitex.com/")
			String date);
	
	@WebMethod
	public String[] getMySalesVisualized(			
			@WebParam(name="repId", targetNamespace="http://mobile.arkitex.com/")
			String repId,
			@WebParam(name="date", targetNamespace="http://mobile.arkitex.com/")
			String date);
	

}
