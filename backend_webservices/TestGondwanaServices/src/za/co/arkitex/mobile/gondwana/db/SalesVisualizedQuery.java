package za.co.arkitex.mobile.gondwana.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class SalesVisualizedQuery {

	private String repId;
	private String date;
	
	public SalesVisualizedQuery(String repId, String date) {
		this.repId = repId;
		this.date = date;
	}
	
	public void queryCommMonth() {
		
		String sql = "";
		sql += " SELECT DISTINCT ";
		sql += " p.ProductCode , ";
		sql += " p.ProductDescription , ";
		sql += " p.Brand, ";
		sql += " tt.Rating, ";
		sql += " ROUND  (sum(tt.SalesValue), 0)  AS Total_Sales ";
		sql += " FROM vw_CUBE_FACT_TT_Transactions as  tt ";
		sql += " INNER JOIN vw_CUBE_Times tm ";
		sql += " ON tm.Date = tt.TransactionDate ";
		sql += " INNER JOIN vw_CUBE_Products p ";
		sql += " ON ";
		sql += " p.ProductCode = tt.ProductCode ";
		sql += " WHERE ";
		sql += " tt.Rep ='" + repId +"' and tm.Comm_Month = '" + date +"' ";
		sql += " GROUP BY ";
		sql += " ProductDescription , p.ProductCode , Brand , Rating";
		sql += " ORDER BY ";
		sql += "  Total_Sales DESC; ";


		try {
			Connection conn = DBAdapter.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);

			ResultSet rs = ps.executeQuery();
			// System.out.println(sql);
			while (rs.next()) {
			
				System.out.println( rs.getString("ProductCode"));
				System.out.println(rs.getString("ProductDescription"));
				System.out.println(rs.getString("Brand"));
				System.out.println(rs.getString("Rating"));
				double sales = Double.parseDouble(rs.getString("Total_Sales"));

				String s = String.format("%.0f", sales);
				Integer salesValue = Integer.parseInt(s);
				System.out.println(s);
			}

		} catch (SQLException sqle) {
			sqle.printStackTrace();

		} catch (Exception ex) {
			ex.printStackTrace();

		}

		
	}
	
	public void queryCommQuarter() {
		
		String sql = "";
		sql += " SELECT DISTINCT ";
		sql += " p.ProductCode , ";
		sql += " p.ProductDescription , ";
		sql += " p.Brand, ";
		sql += " tt.Rating, ";
		sql += " ROUND  (sum(tt.SalesValue), 0)  AS Total_Sales ";
		sql += " FROM vw_CUBE_FACT_TT_Transactions as  tt ";
		sql += " INNER JOIN vw_CUBE_Times tm ";
		sql += " ON tm.Date = tt.TransactionDate ";
		sql += " INNER JOIN vw_CUBE_Products p ";
		sql += " ON ";
		sql += " p.ProductCode = tt.ProductCode ";
		sql += " WHERE ";
		sql += " tt.Rep ='" + repId +"' and tm.Comm_Quarter = '" + date +"' ";
		sql += " GROUP BY ";
		sql += " ProductDescription , p.ProductCode , Brand , Rating";
		sql += " ORDER BY ";
		sql += "  Total_Sales DESC; ";


		try {
			Connection conn = DBAdapter.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);

			ResultSet rs = ps.executeQuery();
			// System.out.println(sql);
			while (rs.next()) {
			
				System.out.println( rs.getString("ProductCode"));
				System.out.println(rs.getString("ProductDescription"));
				System.out.println(rs.getString("Brand"));
				System.out.println(rs.getString("Rating"));
				double sales = Double.parseDouble(rs.getString("Total_Sales"));

				String s = String.format("%.0f", sales);
				Integer salesValue = Integer.parseInt(s);
				System.out.println(s);
			}

		} catch (SQLException sqle) {
			sqle.printStackTrace();

		} catch (Exception ex) {
			ex.printStackTrace();

		}

				
	}
	
	public void queryCommYear() {
		
		String sql = "";
		sql += " SELECT DISTINCT ";
		sql += " p.ProductCode , ";
		sql += " p.ProductDescription , ";
		sql += " p.Brand, ";
		sql += " tt.Rating, ";
		sql += " ROUND  (sum(tt.SalesValue), 0)  AS Total_Sales ";
		sql += " FROM vw_CUBE_FACT_TT_Transactions as  tt ";
		sql += " INNER JOIN vw_CUBE_Times tm ";
		sql += " ON tm.Date = tt.TransactionDate ";
		sql += " INNER JOIN vw_CUBE_Products p ";
		sql += " ON ";
		sql += " p.ProductCode = tt.ProductCode ";
		sql += " WHERE ";
		sql += " tt.Rep ='" + repId +"' and tm.Comm_Year = '" + date +"' ";
		sql += " GROUP BY ";
		sql += " ProductDescription , p.ProductCode , Brand , Rating";
		sql += " ORDER BY ";
		sql += "  Total_Sales DESC; ";


		try {
			Connection conn = DBAdapter.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);

			ResultSet rs = ps.executeQuery();
			// System.out.println(sql);
			while (rs.next()) {
			
				System.out.println( rs.getString("ProductCode"));
				System.out.println(rs.getString("ProductDescription"));
				System.out.println(rs.getString("Brand"));
				System.out.println(rs.getString("Rating"));
				double sales = Double.parseDouble(rs.getString("Total_Sales"));

				String s = String.format("%.0f", sales);
				Integer salesValue = Integer.parseInt(s);
				System.out.println(s);
			}

		} catch (SQLException sqle) {
			sqle.printStackTrace();

		} catch (Exception ex) {
			ex.printStackTrace();

		}

			
	}
}

/*
SELECT DISTINCT 
p.ProductCode ,
p.ProductDescription ,
p.Brand,
tt.Rating,
	
ROUND  (sum(tt.SalesValue), 0)  AS Total_Sales 
FROM vw_CUBE_FACT_TT_Transactions as  tt
INNER JOIN vw_CUBE_Times tm
ON tm.Date = tt.TransactionDate
INNER JOIN vw_CUBE_Products p
ON
p.ProductCode = tt.ProductCode 
WHERE 
tt.Rep ='0008' and tm.Comm_Month = 'Feb 2012' 
GROUP BY
 ProductDescription , p.ProductCode , Brand , Rating
ORDER BY
Total_Sales DESC;*/