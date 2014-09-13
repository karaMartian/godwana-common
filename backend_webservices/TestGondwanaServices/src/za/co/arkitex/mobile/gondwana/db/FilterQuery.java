package za.co.arkitex.mobile.gondwana.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;

import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;

import za.co.arkitex.mobile.domain.ProductSalesValue;

@WebService
@SOAPBinding(style = SOAPBinding.Style.RPC)
public class FilterQuery {

	// filter by  month
	public String[] filerByYear() {

		String sql = " SELECT Distinct Comm_Year FROM vw_CUBE_Times ";
		String[] defaultvalues = new String [0];

		ArrayList<String> allValues = new ArrayList<String>();
		try {
			Connection conn = DBAdapter.getConnection();
			Statement stmt = conn.createStatement();
			
			 ResultSet rs = stmt.executeQuery(sql);

			while (rs.next()) {

				allValues.add(rs.getString("Comm_Year"));
				
			}
			
			
			String[] values = new String[allValues.size()];


			for(int i = 0; i < allValues.size(); i++) {
				values[i]= (String) allValues.get(i);
				
			 }

			
			return values;
		} catch (SQLException sqle) {
			sqle.printStackTrace();

		}
		return defaultvalues;
	}
	

	// filter by  month
	public String[] filerByMonth() {

		String sql = " SELECT Distinct Comm_Month  FROM vw_CUBE_Times ";
		String[] defaultvalues = new String [0];

		ArrayList<String> allValues = new ArrayList<String>();
		try {
			Connection conn = DBAdapter.getConnection();
			Statement stmt = conn.createStatement();
			
			 ResultSet rs = stmt.executeQuery(sql);

			while (rs.next()) {

				allValues.add(rs.getString("Comm_Month"));
				
			}
			
			
			String[] values = new String[allValues.size()];


			for(int i = 0; i < allValues.size(); i++) {
				values[i]= (String) allValues.get(i);
				
			 }

			
			return values;
		} catch (SQLException sqle) {
			sqle.printStackTrace();

		}
		return defaultvalues;
	}
	
		// filter by  Quater
		public String[] filerByQuater() {

			String sql = " SELECT  Distinct Comm_Quarter FROM vw_CUBE_Times ORDER BY Comm_Quarter";
			String[] defaultvalues = new String [0];
			
			ArrayList<String> allValues = new ArrayList<String>();
			try {
				Connection conn = DBAdapter.getConnection();
				Statement stmt = conn.createStatement();
				
				 ResultSet rs = stmt.executeQuery(sql);

				while (rs.next()) {

					allValues.add(rs.getString("Comm_Quarter"));
					
				}
				
				
				String[] values = new String[allValues.size()];


				for(int i = 0; i < allValues.size(); i++) {
					values[i]= (String) allValues.get(i);
					
				 }

				
				return values;
			} catch (SQLException sqle) {
				sqle.printStackTrace();

			}
			return defaultvalues;
		}
		
				// filter by Brand
				public String[] filerByBrand() {

					String sql = "SELECT Distinct Brand FROM vw_CUBE_Products";
					String[] defaultvalues = new String [0];

					ArrayList<String> allValues = new ArrayList<String>();
					try {
						Connection conn = DBAdapter.getConnection();
						Statement stmt = conn.createStatement();
						
						 ResultSet rs = stmt.executeQuery(sql);

						while (rs.next()) {

							allValues.add(rs.getString("Brand"));
							
						}
						
						
						String[] values = new String[allValues.size()];


						for(int i = 0; i < allValues.size(); i++) {
							values[i]= (String) allValues.get(i);
							
						 }

						
						return values;
					} catch (SQLException sqle) {
						sqle.printStackTrace();

					}
					return defaultvalues;
				}
				
				// filter by Rating
				public String[] filerRating() {

					String sql = "SELECT Distinct Rating  FROM vw_CUBE_Rating";
					String[] defaultvalues = new String [0];

					ArrayList<String> allValues = new ArrayList<String>();
					try {
						Connection conn = DBAdapter.getConnection();
						Statement stmt = conn.createStatement();
						
						 ResultSet rs = stmt.executeQuery(sql);

						while (rs.next()) {

							allValues.add(rs.getString("Rating"));
							
						}
						
						
						String[] values = new String[allValues.size()];


						for(int i = 0; i < allValues.size(); i++) {
							values[i]= (String) allValues.get(i);
							
						 }

						
						return values;
					} catch (SQLException sqle) {
						sqle.printStackTrace();

					}
					return defaultvalues;
				}
				
				// filter by Brick
				public String[] filerBrick() {

					String sql = "SELECT Distinct Brick FROM vw_CUBE_Customers";
					String[] defaultvalues = new String [0];

					ArrayList<String> allValues = new ArrayList<String>();
					try {
						Connection conn = DBAdapter.getConnection();
						Statement stmt = conn.createStatement();
						
						 ResultSet rs = stmt.executeQuery(sql);

						while (rs.next()) {

							allValues.add(rs.getString("Brick"));
							
						}
						
						
						String[] values = new String[allValues.size()];


						for(int i = 0; i < allValues.size(); i++) {
							values[i]= (String) allValues.get(i);
							
						 }

						
						return values;
					} catch (SQLException sqle) {
						sqle.printStackTrace();

					}
					return defaultvalues;
				}
				
				
				// filter by RepID
				public String[] filerRepID() {

					String sql = "SELECT DISTINCT  Rep FROM vw_CUBE_FACT_TT_Transactions";
					String[] defaultvalues = new String [0];
					ArrayList<String> allValues = new ArrayList<String>();
					try {
						Connection conn = DBAdapter.getConnection();
						Statement stmt = conn.createStatement();
						
						 ResultSet rs = stmt.executeQuery(sql);

						while (rs.next()) {

							allValues.add(rs.getString("Rep"));
							
						}
						
						
						String[] values = new String[allValues.size()];


						for(int i = 0; i < allValues.size(); i++) {
							values[i]= (String) allValues.get(i);
							
						 }

						
						return values;
					} catch (SQLException sqle) {
						sqle.printStackTrace();

					}
					return defaultvalues;
				}
}
