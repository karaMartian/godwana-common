package za.co.arkitex.mobile.tst;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import za.co.arkitex.mobile.domain.PeriodFormatter;
import za.co.arkitex.mobile.domain.ProductSalesValue;
import za.co.arkitex.mobile.gondwana.db.DBAdapter;

public class TestYearlyQuery {


	private String salesRepId = "0008";
	private String brand =  "Product 6";
	
	private PeriodFormatter pformatter;
	private String yearlyCommMonth =  "jan 2013";
	private int monthcounter = 0;
	
	
	private ProductSalesValue collection;
	
	public TestYearlyQuery() {
		collection = new ProductSalesValue(brand);
		
	}
	public static void main(String[] args) {
		TestYearlyQuery tst = new TestYearlyQuery();
		tst.runYearlyQuery();
		System.out.println(tst.getSalesValueCollection());
	}
	public void setYearlyCommMonth(String yearlyCommMonth) {
		this.yearlyCommMonth = yearlyCommMonth;
	}
	public ArrayList<Integer> getSalesValueCollection() {
		return collection.getSalesValueList();
	}	
	
	
	// run 12 times for yearly
	public void runYearlyQuery() {
		
		Connection conn = DBAdapter.getConnection();

		// run this 12 times.
		while (monthcounter < 12) {
	
			
			pformatter = new PeriodFormatter(yearlyCommMonth);
			setYearlyCommMonth(pformatter.getNextMonth());			
			
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
		
			monthcounter++;
		}		

	}
}
