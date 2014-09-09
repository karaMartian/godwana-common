package za.co.arkitex.mobile.gondwana.db;

public class ProxyCustomer {
	
	private String brick;
	private double values;
	private String name;
	
	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}

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

	public String toString() {
		return name + "------ " + values  + ":";
	}
}
