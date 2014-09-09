package za.co.arkitex.mobile.tst;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;

import za.co.arkitex.mobile.domain.SalesRepDataServiceImpl;

public class TestSalesTrendData {

	private SalesRepDataServiceImpl impl;
	private ArrayList<String> products;
	private ArrayList<Integer> salesList;
	
	private HashMap<String, ArrayList<Integer>> data = new HashMap<String, ArrayList<Integer>>();
	
	public HashMap<String, ArrayList<Integer>> getData() {
		return data;
	}

	public void setData(HashMap<String, ArrayList<Integer>> data) {
		this.data = data;
	}

	public static void main(String[] args) {
		long startTime = new Date().getTime();
		//some tasks
		TestSalesTrendData tst = new TestSalesTrendData();
		tst.go();
		
		long endTime = new Date().getTime();
	
		long difference = endTime - startTime;
	 
		System.out.println("Elapsed milliseconds: " + difference);
		System.out.println("Seconds: " + (difference/(1000)));
		
		
	}
	
	public void go() {
		String rep = "0008";
		impl = new SalesRepDataServiceImpl();
		impl.getBrandsByRepByDate(rep, "2013-01-01", "2013-06-30");
		products = new ArrayList<String>();
		
		products = impl.getBrandList();
		salesList = new ArrayList<Integer>();
		
//		System.out.println("Products :" + products);
		
		for (int i = 0; i < products.size(); i++) {
			impl.getSalesTrendDataByProduct(rep, products.get(i), "2013");	
//			salesList = impl.getValueList();
		}
		
//		System.out.println(salesList);
	}
	
	public void addData(String product, ArrayList<Integer> salesValues) {
		data.put(product, salesValues);
		
	}
}
