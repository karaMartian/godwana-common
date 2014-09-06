package za.co.arkitex.mobile.gondwana.db;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

public class BrandQuery {
	
	private String fromPeriod;
	private String toPeriod;
	private String salesRepId;
	private String brand;
	private ArrayList<String> brandsList;
	
	
	public BrandQuery(String salesRepId, String brand, String fromPeriod, String toPeriod) {
		this.salesRepId = salesRepId;
		this.brand = brand;
		this.fromPeriod = fromPeriod;
		this.toPeriod = toPeriod;
		
	//	runQuery();
	}
	
	public BrandQuery(String salesRepId, String fromPeriod, String toPeriod) {
		this.salesRepId = salesRepId;
		this.fromPeriod = fromPeriod;
		this.toPeriod = toPeriod;
		
	//	runQuery();
	}
	public BrandQuery(){}
	
	
	public ArrayList<String> getBrandsList() {
		return brandsList;
	}


	public String getFromPeriod() {
		return fromPeriod;
	}
	public void setFromPeriod(String fromPeriod) {
		this.fromPeriod = fromPeriod;
	}
	public String getToPeriod() {
		return toPeriod;
	}
	public void setToPeriod(String toPeriod) {
		this.toPeriod = toPeriod;
	}
	public String getSalesRepId() {
		return salesRepId;
	}
	public void setSalesRepId(String salesRepId) {
		this.salesRepId = salesRepId;
	}
	
	public void runDefaultQuery() {
		Connection conn = DBAdapter.getConnection();
		
		// get brand
/*		SELECT distinct
		 b.Brand
		FROM 
			vw_CUBE_FACT_TT_Transactions a
		INNER JOIN 
		    vw_CUBE_Products b
		ON 
		    a.ProductCode = b.ProductCode
		WHERE 
			a.TransactionDate >= '2013-01-26'		
		AND
			a.TransactionDate <= '2013-06-25'
		AND 
			a.Rep = '0008'*/
		
		String sql = "";
		sql += " SELECT distinct ";
		sql += " 	b.Brand ";
		sql += " FROM ";
		sql += " 	vw_CUBE_FACT_TT_Transactions a ";
		sql += " INNER JOIN ";
		sql += " 	vw_CUBE_Products b ";
		sql += " ON ";
		sql += " 	a.ProductCode = b.ProductCode ";
		sql += " WHERE ";
		sql += " 	a.TransactionDate >= '";
		sql +=  fromPeriod + "' "; // from period?
		sql += " AND ";
		sql += " 	a.TransactionDate <= '";
		sql	+= 	toPeriod + "' "; // to ?
		sql += " AND ";
		sql += " 	a.Rep = '" + salesRepId  + "'"; // which Rep?
		
		brandsList = new ArrayList<String>();
		
		try {
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(sql);
			
			while (rs.next()) {
				brandsList.add(rs.getString("Brand"));
			//	System.out.println(rs.getString("Brand"));
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		} 
	}
	
}
