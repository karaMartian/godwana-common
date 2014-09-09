package za.co.arkitex.mobile.gondwana.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import java.util.ArrayList;

public class BrandQuery {
	
	private String date;
	private String salesRepId;
	private ArrayList<String> brandsList;
	
	
	public BrandQuery(String salesRepId, String date) {
		this.salesRepId = salesRepId;
		this.date = date;

	}
	
	public ArrayList<String> getBrandsList() {
		return brandsList;
	}

	public String getSalesRepId() {
		return salesRepId;
	}
	public void setSalesRepId(String salesRepId) {
		this.salesRepId = salesRepId;
	}
	
	
	// fetch brands for comm month
	public void queryCommMonth() {
		Connection conn = DBAdapter.getConnection();
		
		String sql = "";
		sql += " SELECT ";
		sql += " distinct ";
		sql += " b.Brand ";
		sql += " FROM ";
		sql += " vw_CUBE_FACT_TT_Transactions a ";
		sql += " INNER JOIN ";
		sql += " vw_CUBE_Products b ";
		sql += " ON ";
		sql += " a.ProductCode = b.ProductCode ";
		sql += " INNER JOIN ";
		sql += " vw_CUBE_Times c ";
		sql += " ON ";
		sql += " CAST (a.TransactionDate AS DATE)   = c.Date ";
		sql += " WHERE ";
		sql += " c.Comm_Month = '" + date +"'";
		sql += " AND";
		sql += " a.Rep = '0008'";
		
		brandsList = new ArrayList<String>();
		
		try {
			PreparedStatement ps = conn.prepareStatement(sql);
	        ResultSet rs = ps.executeQuery();
			
			while (rs.next()) {
				brandsList.add(rs.getString("Brand"));
			//	System.out.println(rs.getString("Brand"));
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		} 
	}
	
	// fetch brands for comm quarter
	public void queryCommQuarter() {
		Connection conn = DBAdapter.getConnection();
		String sql = "";
		sql += " SELECT ";
		sql += " distinct ";
		sql += " b.Brand ";
		sql += " FROM ";
		sql += " vw_CUBE_FACT_TT_Transactions a ";
		sql += " INNER JOIN ";
		sql += " vw_CUBE_Products b ";
		sql += " ON ";
		sql += " a.ProductCode = b.ProductCode ";
		sql += " INNER JOIN ";
		sql += " vw_CUBE_Times c ";
		sql += " ON ";
		sql += " CAST (a.TransactionDate AS DATE)   = c.Date ";
		sql += " WHERE ";
		sql += " c.Comm_Quarter = '" + date + "'";
		sql += " AND";
		sql += " a.Rep = '0008'";
		
		brandsList = new ArrayList<String>();
		
		try {
			PreparedStatement ps = conn.prepareStatement(sql);
	        ResultSet rs = ps.executeQuery();
			
			while (rs.next()) {
				brandsList.add(rs.getString("Brand"));
			//	System.out.println(rs.getString("Brand"));
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		} 
	}
	
	
	// fetch brands for comm year
	public void queryCommYear() {
		Connection conn = DBAdapter.getConnection();
		String sql = "";
		sql += " SELECT ";
		sql += " distinct ";
		sql += " b.Brand ";
		sql += " FROM ";
		sql += " vw_CUBE_FACT_TT_Transactions a ";
		sql += " INNER JOIN ";
		sql += " vw_CUBE_Products b ";
		sql += " ON ";
		sql += " a.ProductCode = b.ProductCode ";
		sql += " INNER JOIN ";
		sql += " vw_CUBE_Times c ";
		sql += " ON ";
		sql += " CAST (a.TransactionDate AS DATE)   = c.Date ";
		sql += " WHERE ";
		sql += " c.Comm_Year = '" + date + "'";
		sql += " AND";
		sql += " a.Rep = '0008'";
		
		brandsList = new ArrayList<String>();
		
		try {
			PreparedStatement ps = conn.prepareStatement(sql);
			
	        ResultSet rs = ps.executeQuery();
			
			while (rs.next()) {
				brandsList.add(rs.getString("Brand"));
			//	System.out.println(rs.getString("Brand"));
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		} 
	}
}


/*SELECT 
distinct
	b.Brand
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
c.Comm_Quarter = 'q2 2013'
AND
a.Rep = '0008'*/

/*String sql = "";
sql += " SELECT ";
sql += " distinct ";
sql += " b.Brand ";
sql += " FROM ";
sql += " vw_CUBE_FACT_TT_Transactions a ";
sql += " INNER JOIN ";
sql += " vw_CUBE_Products b ";
sql += " ON ";
sql += " a.ProductCode = b.ProductCode ";
sql += " INNER JOIN ";
sql += " vw_CUBE_Times c ";
sql += " ON ";
sql += " CAST (a.TransactionDate AS DATE)   = c.Date ";
sql += " WHERE ";
sql += " c.Comm_Quarter = 'q2 2013'";
sql += " AND";
sql += " a.Rep = '0008'";*/