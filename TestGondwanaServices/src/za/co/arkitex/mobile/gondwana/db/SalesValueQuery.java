package za.co.arkitex.mobile.gondwana.db;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import za.co.arkitex.mobile.domain.PeriodFormatter;
import za.co.arkitex.mobile.domain.ProductSalesValue;

public class SalesValueQuery {

	private String commMonth;
	private String salesRepId;
	private String brand;
	
	private String quarterlyCommMonth;
	private String yearlyCommMonth;
	
	private int countquarter = 0;
	private int countyear = 0;
	
	private PeriodFormatter pformatter;
	private ProductSalesValue collection;
	
	public SalesValueQuery(String salesRepId, String brand, String commMonth) {
		this.salesRepId = salesRepId;
		this.brand = brand;
		this.commMonth = commMonth;
		collection = new ProductSalesValue(brand);
	}
	public SalesValueQuery(){}

	public String getCommMonth() {
		return commMonth;
	}
	public void setCommMonth(String commMonth) {
		this.commMonth = commMonth;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}

	public ArrayList<Integer> getSalesValueCollection() {
		return collection.getSalesValueList();
	}	
	
	public String getProductName() {
		return collection.getName();
	}
	
	public String getSalesRepId() {
		return salesRepId;
	}
	public void setSalesRepId(String salesRepId) {
		this.salesRepId = salesRepId;
	}
	
	
	
/*	SELECT 
	ROUND( SUM(SalesValue), 0) AS 'SalesValues'
FROM 
	vw_CUBE_FACT_TT_Transactions a
INNER JOIN 
    vw_CUBE_Products b
ON 
    a.ProductCode = b.ProductCode
INNER JOIN
	vw_CUBE_Times c 
ON 
	CAST (a.TransactionDate AS DATE)   = c.Date
WHERE 
	c.Comm_Month = 'feb 2013'
AND 
	a.Rep = '0008'
AND 
	b.Brand = 'Product 6'*/
	

	public void validatePeriod(String threshold) {
		
		if (threshold.trim().equalsIgnoreCase("monthly")) {
			runQuery();
		
		} else if (threshold.trim().equalsIgnoreCase("quarterly")) {
		
			quarterlyCommMonth = commMonth;
			runQuarterlyQuery();
		} else if (threshold.trim().equalsIgnoreCase("yearly")) {
			yearlyCommMonth = commMonth;
			runYearlyQuery();
		}
	}
	
	public String getQuarterlyCommMonth() {
		return quarterlyCommMonth;
	}
	public void setQuarterlyCommMonth(String quarterlyCommMonth) {
		this.quarterlyCommMonth = quarterlyCommMonth;
	}
	public String getYearlyCommMonth() {
		return yearlyCommMonth;
	}
	public void setYearlyCommMonth(String yearlyCommMonth) {
		this.yearlyCommMonth = yearlyCommMonth;
	}
	
	// run once for monthly.
	public void runQuery(){
		Connection conn = DBAdapter.getConnection();
/*		String sql = "";
		sql += " SELECT "; 
		sql += " 	ROUND( SUM(SalesValue), 0) AS 'SalesValues' ";	
		sql += " FROM ";
		sql += "	vw_CUBE_FACT_TT_Transactions a ";
		sql += " INNER JOIN ";
	    sql += "	vw_CUBE_Products b ";
	    sql += " ON "; 
	    sql += "	a.ProductCode = b.ProductCode ";
	    sql += " INNER JOIN ";
		sql += "	vw_CUBE_Times c ";
		sql += " ON ";
		sql += "	CAST (a.TransactionDate AS DATE)   = c.Date ";
		sql += " WHERE ";
		sql += " 	c.Comm_Month = 'aug 2013' ";
		sql += " AND ";
		sql += "	a.Rep = '0008'";
		sql += " AND ";
		sql += "	b.Brand = 'Product 6'";*/
		
		String sql = "";
		sql += " SELECT "; 
		sql += " 	ROUND( SUM(SalesValue), 0) AS 'SalesValues' ";	
		sql += " FROM ";
		sql += "	vw_CUBE_FACT_TT_Transactions a ";
		sql += " INNER JOIN ";
	    sql += "	vw_CUBE_Products b ";
	    sql += " ON "; 
	    sql += "	a.ProductCode = b.ProductCode ";
	    sql += " INNER JOIN ";
		sql += "	vw_CUBE_Times c ";
		sql += " ON ";
		sql += "	CAST (a.TransactionDate AS DATE)   = c.Date ";
		sql += " WHERE ";
		sql += " 	c.Comm_Month = '" + commMonth + "' ";
		sql += " AND ";
		sql += "	a.Rep = '"+ salesRepId +"'";
		sql += " AND ";
		sql += "	b.Brand = '"+ brand + "'";
		    
		try {
			Statement stmt = conn.createStatement();
	        ResultSet rs = stmt.executeQuery(sql);

	        while(rs.next()) {
	        	
	        //	System.out.println( rs.getString("SalesValues"));
	        	double sales = Double.parseDouble(rs.getString("SalesValues"));
	        	
	        	String s = String.format("%.0f", sales);
	        	Integer salesValue = Integer.parseInt(s);
	        	collection.addSalesValueToList(salesValue);
	        	System.out.println(s);
	        }
	
		} catch (SQLException sqle) {
			sqle.printStackTrace();
	  
	                   
		} catch (Exception ex) {
			ex.printStackTrace();
	                  	
		}				
	}
	
	// run three times for quarterly
	public void runQuarterlyQuery() {
		
		Connection conn = DBAdapter.getConnection();
		
		// Should run three times.
		while(countquarter < 3) {
	
			String sql = "";
			sql += " SELECT "; 
			sql += " 	ROUND( SUM(SalesValue), 0) AS 'SalesValues' ";	
			sql += " FROM ";
			sql += "	vw_CUBE_FACT_TT_Transactions a ";
			sql += " INNER JOIN ";
		    sql += "	vw_CUBE_Products b ";
		    sql += " ON "; 
		    sql += "	a.ProductCode = b.ProductCode ";
		    sql += " INNER JOIN ";
			sql += "	vw_CUBE_Times c ";
			sql += " ON ";
			sql += "	CAST (a.TransactionDate AS DATE)   = c.Date ";
			sql += " WHERE ";
			sql += " 	c.Comm_Month = '" + quarterlyCommMonth + "' ";
			sql += " AND ";
			sql += "	a.Rep = '"+ salesRepId +"'";
			sql += " AND ";
			sql += "	b.Brand = '"+ brand + "'";
			    
			try {
				Statement stmt = conn.createStatement();
		        ResultSet rs = stmt.executeQuery(sql);

		        while(rs.next()) {
		        	
		        //	System.out.println( rs.getString("SalesValues"));
		        	double sales = Double.parseDouble(rs.getString("SalesValues"));
		        	
		        	String s = String.format("%.0f", sales);
		        	Integer salesValue = Integer.parseInt(s);
		        	collection.addSalesValueToList(salesValue);
		        	System.out.println(s);
		        }
		
			} catch (SQLException sqle) {
				sqle.printStackTrace();
		  
		                   
			} catch (Exception ex) {
				ex.printStackTrace();
		                  	
			}		
			pformatter = new PeriodFormatter(quarterlyCommMonth);
			setQuarterlyCommMonth(pformatter.getNextMonth());
									
//			System.out.println("Count quarter loop: " + countquarter);
			countquarter++;
		}
	}
	
	// run 12 times for yearly
	public void runYearlyQuery() {
		
		Connection conn = DBAdapter.getConnection();
		
		// run this 12 times.
		while (countyear < 12) {
			
			String sql = "";
			sql += " SELECT "; 
			sql += " 	ROUND( SUM(SalesValue), 0) AS 'SalesValues' ";	
			sql += " FROM ";
			sql += "	vw_CUBE_FACT_TT_Transactions a ";
			sql += " INNER JOIN ";
		    sql += "	vw_CUBE_Products b ";
		    sql += " ON "; 
		    sql += "	a.ProductCode = b.ProductCode ";
		    sql += " INNER JOIN ";
			sql += "	vw_CUBE_Times c ";
			sql += " ON ";
			sql += "	CAST (a.TransactionDate AS DATE)   = c.Date ";
			sql += " WHERE ";
			sql += " 	c.Comm_Month = '" + yearlyCommMonth + "' ";
			sql += " AND ";
			sql += "	a.Rep = '"+ salesRepId +"'";
			sql += " AND ";
			sql += "	b.Brand = '"+ brand + "'";
			    
			try {
				Statement stmt = conn.createStatement();
		        ResultSet rs = stmt.executeQuery(sql);

		        while(rs.next()) {
		        	
		        //	System.out.println( rs.getString("SalesValues"));
		        	double sales = Double.parseDouble(rs.getString("SalesValues"));
		        	
		        	String s = String.format("%.0f", sales);
		        	Integer salesValue = Integer.parseInt(s);
		        	collection.addSalesValueToList(salesValue);
		        	System.out.println(s);
		        }
		
			} catch (SQLException sqle) {
				sqle.printStackTrace();
		  
		                   
			} catch (Exception ex) {
				ex.printStackTrace();
		                  	
			}	
			
			pformatter = new PeriodFormatter(yearlyCommMonth);
			setYearlyCommMonth(pformatter.getNextMonth());
			
//			System.out.println("Count year loop: " +  countyear);
			countyear++;
		}		
				
	}
	
}
