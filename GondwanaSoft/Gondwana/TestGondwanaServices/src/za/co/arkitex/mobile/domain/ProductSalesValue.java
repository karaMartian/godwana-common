package za.co.arkitex.mobile.domain;

import java.util.ArrayList;

public class ProductSalesValue {

	private String name;
	private ArrayList<Integer> salesValueList = new ArrayList<Integer>();
	
	public ProductSalesValue(String name) {
		this.name = name;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public ArrayList<Integer> getSalesValueList() {
		return salesValueList;
	}
	
	public void addSalesValueToList(int salesValue) {
		salesValueList.add(salesValue);
		
	}
	
}
