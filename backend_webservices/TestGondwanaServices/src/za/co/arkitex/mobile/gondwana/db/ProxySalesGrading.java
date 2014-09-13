package za.co.arkitex.mobile.gondwana.db;

import java.io.Serializable;

public class ProxySalesGrading implements Serializable {
	
	private String brick;
	private double values;
	private String rating;
	private String Brand;
	public String getBrick() {
		return brick;
	}
	public void setBrick(String brick) {
		this.brick = brick;
	}
	public double getValues() {
		return values;
	}
	public void setValues(double values) {
		this.values = values;
	}
	public String getRating() {
		return rating;
	}
	public void setRating(String rating) {
		this.rating = rating;
	}
	public String getBrand() {
		return Brand;
	}
	public void setBrand(String brand) {
		Brand = brand;
	}
	
	
}
