package za.co.arkitex.mobile.domain;


public class SalesTrendData {
	
	private String brandName;
	private Double[] monthlySalesValues;
	
	
	public String getBrandName() {
		return brandName;
	}
	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}
	public Double[] getMonthlySalesValues() {
		return monthlySalesValues;
	}
	public void setMonthlySalesValues(Double[] monthlySalesValues) {
		this.monthlySalesValues = monthlySalesValues;
	}
	
	
	
	
}
