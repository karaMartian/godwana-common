package za.co.arkitex.mobile.gondwana.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;


public class Top25CustomersQuery {

	private String repId;
	private String date;
	private ArrayList<ProxyCustomer> customerValuesList;
	
	public Top25CustomersQuery(String repId, String date) {
		this.repId = repId;
		this.date = date;
		
	}
	
	public ArrayList<ProxyCustomer> getCustomerValuesList() {
		return customerValuesList;
	}

	public void queryCommMonth() {
		String sql = " SELECT DISTINCT TOP 25 ";
		sql += "c.CustomerName ,";
		sql += "c.Brick, ";
		sql += "ROUND  (sum(tt.SalesValue), 0)  AS Total_Sales ";
		sql += " FROM vw_CUBE_FACT_TT_Transactions as  tt";
		sql += " INNER JOIN vw_CUBE_Times tm ";
		sql += " ON tm.Date = tt.TransactionDate ";
		sql += " INNER JOIN vw_CUBE_Customers c ";
		sql += " ON ";
		sql += "c.CustomerCode = tt.CustomerCode";
		sql += " WHERE ";
		sql += "tt.Rep = '" + repId + "' and tm.Comm_Month = '" + date + "'";
		sql += " GROUP BY";
		sql += " CustomerName, Brick";
		sql += " ORDER BY";
		sql += " Total_Sales DESC";
		
//		System.out.println(sql);
		customerValuesList = new ArrayList<ProxyCustomer>();

		try {
			Connection conn = DBAdapter.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);

			ResultSet rs = ps.executeQuery();
			// System.out.println(sql);
			while (rs.next()) {
		
				double sales = Double.parseDouble(rs.getString("Total_Sales"));
				
				System.out.println(rs.getString("CustomerName"));
				System.out.println(rs.getString("Brick"));
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
		String sql = " SELECT DISTINCT TOP 25 ";
		sql += "c.CustomerName ,";
		sql += "c.Brick, ";
		sql += "ROUND  (sum(tt.SalesValue), 0)  AS Total_Sales ";
		sql += " FROM vw_CUBE_FACT_TT_Transactions as  tt";
		sql += " INNER JOIN vw_CUBE_Times tm ";
		sql += " ON tm.Date = tt.TransactionDate ";
		sql += " INNER JOIN vw_CUBE_Customers c ";
		sql += " ON ";
		sql += "c.CustomerCode = tt.CustomerCode";
		sql += " WHERE ";
		sql += "tt.Rep = '" + repId + "' and tm.Comm_Quarter = '" + date + "'";
		sql += " GROUP BY";
		sql += " CustomerName, Brick";
		sql += " ORDER BY";
		sql += " Total_Sales DESC";
		
		customerValuesList = new ArrayList<ProxyCustomer>();

		try {
			Connection conn = DBAdapter.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);

			ResultSet rs = ps.executeQuery();
			// System.out.println(sql);
			while (rs.next()) {
				ProxyCustomer values = new ProxyCustomer();
				// System.out.println( rs.getString("Comm_Month"));
				double sales = Double.parseDouble(rs.getString("Total_Sales"));
				values.setValues(sales);
				values.setName(rs.getString("CustomerName"));
				values.setBrick(rs.getString("Brick"));
				String s = String.format("%.0f", sales);
				Integer salesValue = Integer.parseInt(s);

				customerValuesList.add(values);

				// System.out.println(s);
			}

		} catch (SQLException sqle) {
			sqle.printStackTrace();

		} catch (Exception ex) {
			ex.printStackTrace();

		}

		
	}
	
	public void queryCommYear() {
		String sql = " SELECT DISTINCT TOP 25 ";
		sql += "c.CustomerName ,";
		sql += "c.Brick, ";
		sql += "ROUND  (sum(tt.SalesValue), 0)  AS Total_Sales ";
		sql += " FROM vw_CUBE_FACT_TT_Transactions as  tt";
		sql += " INNER JOIN vw_CUBE_Times tm ";
		sql += " ON tm.Date = tt.TransactionDate ";
		sql += " INNER JOIN vw_CUBE_Customers c ";
		sql += " ON ";
		sql += "c.CustomerCode = tt.CustomerCode";
		sql += " WHERE ";
		sql += "tt.Rep = '" + repId + "' and tm.Comm_Year = '" + date + "'";
		sql += " GROUP BY";
		sql += " CustomerName, Brick";
		sql += " ORDER BY";
		sql += " Total_Sales DESC;";

		customerValuesList = new ArrayList<ProxyCustomer>();

		try {
			Connection conn = DBAdapter.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);

			ResultSet rs = ps.executeQuery();
			// System.out.println(sql);
			while (rs.next()) {
				ProxyCustomer proxyCustomer = new ProxyCustomer();
				// System.out.println( rs.getString("Comm_Month"));
				double sales = Double.parseDouble(rs.getString("Total_Sales"));
				proxyCustomer.setValues(sales);
				proxyCustomer.setName(rs.getString("CustomerName"));
				proxyCustomer.setBrick(rs.getString("Brick"));
				String s = String.format("%.0f", sales);
				Integer salesValue = Integer.parseInt(s);

				customerValuesList.add(proxyCustomer);

				// System.out.println(s);
			}

		} catch (SQLException sqle) {
			sqle.printStackTrace();

		} catch (Exception ex) {
			ex.printStackTrace();

		}


	}
/*	
	public ArrayList<ProxyCustomer> getQuaterValues(String salesRepId,
			String quater) {
		// TODO Auto-generated method stub
		String sql = " SELECT DISTINCT TOP 25 ";
		sql += "c.CustomerName ,";
		sql += "c.Brick, ";
		sql += "ROUND  (sum(tt.SalesValue), 0)  AS Total_Sales ";
		sql += " FROM vw_CUBE_FACT_TT_Transactions as  tt";
		sql += " INNER JOIN vw_CUBE_Times tm ";
		sql += " ON tm.Date = tt.TransactionDate ";
		sql += " INNER JOIN vw_CUBE_Customers c ";
		sql += " ON ";
		sql += "c.CustomerCode = tt.CustomerCode";
		sql += " WHERE ";
		sql += "tt.Rep = " + salesRepId + " and tm.Comm_Quarter = " + quater;
		sql += "' GROUP BY";
		sql += " CustomerName, Brick";
		sql += " ORDER BY";
		sql += " Total_Sales DESC";
		
		
		ArrayList<ProxyCustomer> yearValues = new ArrayList<ProxyCustomer>();

		try {
			Connection conn = DBAdapter.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);

			ResultSet rs = ps.executeQuery();
			// System.out.println(sql);
			while (rs.next()) {
				ProxyCustomer values = new ProxyCustomer();
				// System.out.println( rs.getString("Comm_Month"));
				double sales = Double.parseDouble(rs.getString("Total_Sales"));
				values.setValues(sales);
				values.setDescription(rs.getString("CustomerName"));
				values.setBrick(rs.getString("Brick"));
				String s = String.format("%.0f", sales);
				Integer salesValue = Integer.parseInt(s);

				yearValues.add(values);

				// System.out.println(s);
			}

		} catch (SQLException sqle) {
			sqle.printStackTrace();

		} catch (Exception ex) {
			ex.printStackTrace();

		}

		return yearValues;

	}

	@Override
	public ArrayList<ProxyCustomer> getMonthValues(String salesRepId,
			String month) {
		// TODO Auto-generated method stub
		String sql = " SELECT DISTINCT TOP 25 ";
		sql += "c.CustomerName ,";
		sql += "c.Brick, ";
		sql += "ROUND  (sum(tt.SalesValue), 0)  AS Total_Sales ";
		sql += " FROM vw_CUBE_FACT_TT_Transactions as  tt";
		sql += " INNER JOIN vw_CUBE_Times tm ";
		sql += " ON tm.Date = tt.TransactionDate ";
		sql += " INNER JOIN vw_CUBE_Customers c ";
		sql += " ON ";
		sql += "c.CustomerCode = tt.CustomerCode";
		sql += " WHERE ";
		sql += "tt.Rep = '" + salesRepId + "' and tm.Comm_Month = '" + month;
		sql += "' GROUP BY";
		sql += " CustomerName, Brick";
		sql += " ORDER BY";
		sql += " Total_Sales DESC";
		
		System.out.println(sql);

		ArrayList<ProxyCustomer> yearValues = new ArrayList<ProxyCustomer>();

		try {
			Connection conn = DBAdapter.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);

			ResultSet rs = ps.executeQuery();
			// System.out.println(sql);
			while (rs.next()) {
				ProxyCustomer values = new ProxyCustomer();
		
				double sales = Double.parseDouble(rs.getString("Total_Sales"));
				values.setValues(sales);
				values.setDescription(rs.getString("CustomerName"));
				values.setBrick(rs.getString("Brick"));
				String s = String.format("%.0f", sales);
				Integer salesValue = Integer.parseInt(s);

				yearValues.add(values);

				// System.out.println(s);
			}

		} catch (SQLException sqle) {
			sqle.printStackTrace();

		} catch (Exception ex) {
			ex.printStackTrace();

		}

		return yearValues;
	}

	@Override
	public ArrayList<ProxyCustomer> getYearValues(String salesRepId,
			String year) {
		// TODO Auto-generated method stub
		String sql = " SELECT DISTINCT TOP 25 ";
		sql += "c.CustomerName ,";
		sql += "c.Brick, ";
		sql += "ROUND  (sum(tt.SalesValue), 0)  AS Total_Sales ";
		sql += " FROM vw_CUBE_FACT_TT_Transactions as  tt";
		sql += " INNER JOIN vw_CUBE_Times tm ";
		sql += " ON tm.Date = tt.TransactionDate ";
		sql += " INNER JOIN vw_CUBE_Customers c ";
		sql += " ON ";
		sql += "c.CustomerCode = tt.CustomerCode";
		sql += " WHERE ";
		sql += "tt.Rep = " + salesRepId + " and tm.Comm_Year = " + year;
		sql += "' GROUP BY";
		sql += " CustomerName, Brick";
		sql += " ORDER BY";
		sql += " Total_Sales DESC";

		ArrayList<ProxyCustomer> customerValuesList = new ArrayList<ProxyCustomer>();

		try {
			Connection conn = DBAdapter.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);

			ResultSet rs = ps.executeQuery();
			// System.out.println(sql);
			while (rs.next()) {
				ProxyCustomer customerValues = new ProxyCustomer();
				// System.out.println( rs.getString("Comm_Month"));
				double sales = Double.parseDouble(rs.getString("Total_Sales"));
				customerValues.setValues(sales);
				customerValues.setDescription(rs.getString("CustomerName"));
				customerValues.setBrick(rs.getString("Brick"));
				String s = String.format("%.0f", sales);
				Integer salesValue = Integer.parseInt(s);

				customerValuesList.add(customerValues);

				// System.out.println(s);
			}

		} catch (SQLException sqle) {
			sqle.printStackTrace();

		} catch (Exception ex) {
			ex.printStackTrace();

		}

		return customerValuesList;
	}
*/
}