package za.co.arkitex.mobile.gondwana.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;

@WebService
@SOAPBinding(style = SOAPBinding.Style.RPC)
public class SalesGradingCustomersQuery {


	public ProxySalesGrading[] getYearValues(
			@WebParam(name = "repId", targetNamespace = "http://mobile.arkitex.com/") String repId,
			@WebParam(name = "date", targetNamespace = "http://mobile.arkitex.com/") String date) {

		String sql = "	SELECT  ";
		sql += " ROUND( SUM(SalesValue), 0) AS 'SalesValues', ";
		sql += " b.Brand, ";
		sql += "rating";
	
		sql += " FROM ";
		sql += " vw_CUBE_FACT_TT_Transactions a ";
		sql += " INNER JOIN  ";
		sql += " vw_CUBE_Products b  ";
		sql += " ON  ";
		sql += " a.ProductCode = b.ProductCode  ";
		sql += " INNER JOIN ";
		sql += " vw_CUBE_Times c  ";
		sql += " ON  ";
		sql += " CAST (a.TransactionDate AS DATE) = c.Date ";
		sql += " INNER JOIN ";
		sql += " vw_CUBE_Customers d ";
		sql += " ON ";
		sql += "  a.CustomerCode = d.CustomerCode ";
		sql += " WHERE  ";
		sql += " c.Comm_Year = '" + date + "'AND  a.Rep = '" + repId + "'";
	//	sql += " and ";
	//	sql += " rating = '" + rate;
		sql += "  GROUP BY  ";
		sql += " rating, ";
		sql += " b.Brand ";

		sql += " ORDER BY  ";
		sql += " b.Brand	";

		ArrayList<ProxySalesGrading> yearValues = new ArrayList<ProxySalesGrading>();
		System.out.println(sql);
		try {
			
			
			Connection conn = DBAdapter.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);

			ResultSet rs = ps.executeQuery();
			// System.out.println(sql);
			while (rs.next()) {
				ProxySalesGrading values = new ProxySalesGrading();
				// System.out.println( rs.getString("Comm_Month"));
				double sales = Double.parseDouble(rs.getString("SalesValues"));
				values.setValues(sales);
				// values.setDescription(rs.getString("CustomerName"));
				String s = String.format("%.0f", sales);
				Integer salesValue = Integer.parseInt(s);
				values.setBrand(rs.getString("Brand"));
				values.setRating(rs.getString("Rating"));
				yearValues.add(values);

				// System.out.println(s);
			}

		} catch (SQLException sqle) {
			sqle.printStackTrace();

		} catch (Exception ex) {
			ex.printStackTrace();

		}

		ProxySalesGrading[] proxyArray = new ProxySalesGrading[yearValues.size()];


for(int i = 0; i < yearValues.size(); i++) {
		proxyArray[i]= (ProxySalesGrading) yearValues.get(i);
	
 }
System.out.println(proxyArray);
		return proxyArray;
	}

	
	///////////
	
	public ProxySalesGrading[] getQuaterlyValues(
			@WebParam(name = "repId", targetNamespace = "http://mobile.arkitex.com/") String repId,
			@WebParam(name = "date", targetNamespace = "http://mobile.arkitex.com/") String date) {
		// TODO Auto-generated method stub

		String sql = "	SELECT  ";
		sql += " ROUND( SUM(SalesValue), 0) AS 'SalesValues', ";
		sql += " b.Brand, ";
		sql += "rating";
		sql += " FROM ";
		sql += " vw_CUBE_FACT_TT_Transactions a ";
		sql += " INNER JOIN  ";
		sql += " vw_CUBE_Products b  ";
		sql += " ON  ";
		sql += " a.ProductCode = b.ProductCode  ";
		sql += " INNER JOIN ";
		sql += " vw_CUBE_Times c  ";
		sql += " ON  ";
		sql += " CAST (a.TransactionDate AS DATE) = c.Date ";
		sql += " INNER JOIN ";
		sql += " vw_CUBE_Customers d ";
		sql += " ON ";
		sql += "  a.CustomerCode = d.CustomerCode ";
		sql += " WHERE  ";
		sql += " c.Comm_Quater = '" + date + "'AND  a.Rep = '" + repId + "'";
	//	sql += " and ";
	//	sql += " rating = '" + rate;
		sql += " GROUP BY  ";
		sql += " rating, ";
		sql += " b.Brand ";
		sql += " ORDER BY  ";
		sql += " b.Brand	";

		ArrayList<ProxySalesGrading> yearValues = new ArrayList<ProxySalesGrading>();
		System.out.println(sql);
		try {
			
			
			Connection conn = DBAdapter.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);

			ResultSet rs = ps.executeQuery();
			// System.out.println(sql);
			while (rs.next()) {
				ProxySalesGrading values = new ProxySalesGrading();
				// System.out.println( rs.getString("Comm_Month"));
				double sales = Double.parseDouble(rs.getString("SalesValues"));
				values.setValues(sales);
				// values.setDescription(rs.getString("CustomerName"));

				String s = String.format("%.0f", sales);
				Integer salesValue = Integer.parseInt(s);
				values.setBrand(rs.getString("Brand"));
				values.setRating(rs.getString("Rating"));
				yearValues.add(values);

				// System.out.println(s);
			}

		} catch (SQLException sqle) {
			sqle.printStackTrace();

		} catch (Exception ex) {
			ex.printStackTrace();

		}

		ProxySalesGrading[] proxyArray = new ProxySalesGrading[yearValues.size()];


for(int i = 0; i < yearValues.size(); i++) {
		proxyArray[i]= (ProxySalesGrading) yearValues.get(i);
	
 }
System.out.println(proxyArray);
		return proxyArray;
	}

	
	public ProxySalesGrading[] getMothlyValues(
			@WebParam(name = "repId", targetNamespace = "http://mobile.arkitex.com/") String repId,
			@WebParam(name = "date", targetNamespace = "http://mobile.arkitex.com/") String date) {
		// TODO Auto-generated method stub

		String sql = "	SELECT  ";
		sql += " ROUND( SUM(SalesValue), 0) AS 'SalesValues', ";
		sql += " b.Brand, ";
		sql += "rating";
		sql += " FROM ";
		sql += " vw_CUBE_FACT_TT_Transactions a ";
		sql += " INNER JOIN  ";
		sql += " vw_CUBE_Products b  ";
		sql += " ON  ";
		sql += " a.ProductCode = b.ProductCode  ";
		sql += " INNER JOIN ";
		sql += " vw_CUBE_Times c  ";
		sql += " ON  ";
		sql += " CAST (a.TransactionDate AS DATE) = c.Date ";
		sql += " INNER JOIN ";
		sql += " vw_CUBE_Customers d ";
		sql += " ON ";
		sql += "  a.CustomerCode = d.CustomerCode ";
		sql += " WHERE  ";
		sql += " c.Comm_Month = '" + date + "'AND  a.Rep = '" + repId + "'";
	//	sql += " and ";
	//	sql += " rating = '" + rate;
		sql += "  GROUP BY  ";
		sql += " rating, ";
		sql += " b.Brand ";
		sql += " ORDER BY  ";
		sql += " b.Brand	";

		ArrayList<ProxySalesGrading> yearValues = new ArrayList<ProxySalesGrading>();
		System.out.println(sql);
		try {
			
			
			Connection conn = DBAdapter.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);

			ResultSet rs = ps.executeQuery();
			// System.out.println(sql);
			while (rs.next()) {
				ProxySalesGrading values = new ProxySalesGrading();
				// System.out.println( rs.getString("Comm_Month"));
				double sales = Double.parseDouble(rs.getString("SalesValues"));
				values.setValues(sales);
				// values.setDescription(rs.getString("CustomerName"));
				String s = String.format("%.0f", sales);
				Integer salesValue = Integer.parseInt(s);
				values.setBrand(rs.getString("Brand"));
				values.setRating(rs.getString("Rating"));
				yearValues.add(values);

				// System.out.println(s);
			}

		} catch (SQLException sqle) {
			sqle.printStackTrace();

		} catch (Exception ex) {
			ex.printStackTrace();

		}

		ProxySalesGrading[] proxyArray = new ProxySalesGrading[yearValues.size()];


for(int i = 0; i < yearValues.size(); i++) {
		proxyArray[i]= (ProxySalesGrading) yearValues.get(i);
	
 }
System.out.println(proxyArray);
		return proxyArray;
	}

	
	
	
	//////////////////////// BY BRICK
	
	
	///////////////////////////
	
	public ProxySalesGrading[] getYearValuesByBrick(
			@WebParam(name = "repId", targetNamespace = "http://mobile.arkitex.com/") String repId,
			@WebParam(name = "date", targetNamespace = "http://mobile.arkitex.com/") String date,
			@WebParam(name = "brick", targetNamespace = "http://mobile.arkitex.com/") String brick) {
		// TODO Auto-generated method stub

		String sql = "	SELECT  ";
		sql += " ROUND( SUM(SalesValue), 0) AS 'SalesValues', ";
		sql += " b.Brand, ";
		sql += "rating,";
		sql += "brick ";
		sql += " FROM ";
		sql += " vw_CUBE_FACT_TT_Transactions a ";
		sql += " INNER JOIN  ";
		sql += " vw_CUBE_Products b  ";
		sql += " ON  ";
		sql += " a.ProductCode = b.ProductCode  ";
		sql += " INNER JOIN ";
		sql += " vw_CUBE_Times c  ";
		sql += " ON  ";
		sql += " CAST (a.TransactionDate AS DATE) = c.Date ";
		sql += " INNER JOIN ";
		sql += " vw_CUBE_Customers d ";
		sql += " ON ";
		sql += "  a.CustomerCode = d.CustomerCode ";  
		sql += " and   d.Brick = '";
		sql += brick;
		sql += "' WHERE  ";
		sql += " c.Comm_Year = '" + date + "'AND  a.Rep = '" + repId + "'";
	//	sql += " and ";
	//	sql += " rating = '" + rate;
		sql += "  GROUP BY  ";
		sql += " rating, ";
		sql += " b.Brand, ";
		sql += " brick ";
		sql += " ORDER BY  ";
		sql += " b.Brand	";

		ArrayList<ProxySalesGrading> yearValues = new ArrayList<ProxySalesGrading>();
		System.out.println(sql);
		try {
			
			
			Connection conn = DBAdapter.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);

			ResultSet rs = ps.executeQuery();
			// System.out.println(sql);
			while (rs.next()) {
				ProxySalesGrading values = new ProxySalesGrading();
				// System.out.println( rs.getString("Comm_Month"));
				double sales = Double.parseDouble(rs.getString("SalesValues"));
				values.setValues(sales);
				// values.setDescription(rs.getString("CustomerName"));
				values.setBrick(rs.getString("Brick"));
				String s = String.format("%.0f", sales);
				Integer salesValue = Integer.parseInt(s);
				values.setBrand(rs.getString("Brand"));
				values.setRating(rs.getString("Rating"));
				yearValues.add(values);

				// System.out.println(s);
			}

		} catch (SQLException sqle) {
			sqle.printStackTrace();

		} catch (Exception ex) {
			ex.printStackTrace();

		}

		ProxySalesGrading[] proxyArray = new ProxySalesGrading[yearValues.size()];


for(int i = 0; i < yearValues.size(); i++) {
		proxyArray[i]= (ProxySalesGrading) yearValues.get(i);
	
 }
System.out.println(proxyArray);
		return proxyArray;
	}

	
	///////////
	
	public ProxySalesGrading[] getQuaterlyValuesByBrick(
			@WebParam(name = "repId", targetNamespace = "http://mobile.arkitex.com/") String repId,
			@WebParam(name = "date", targetNamespace = "http://mobile.arkitex.com/") String date,
			@WebParam(name = "brick", targetNamespace = "http://mobile.arkitex.com/") String brick) {
		// TODO Auto-generated method stub

		String sql = "	SELECT  ";
		sql += " ROUND( SUM(SalesValue), 0) AS 'SalesValues', ";
		sql += " b.Brand, ";
		sql += "rating,";
		sql += "brick ";
		sql += " FROM ";
		sql += " vw_CUBE_FACT_TT_Transactions a ";
		sql += " INNER JOIN  ";
		sql += " vw_CUBE_Products b  ";
		sql += " ON  ";
		sql += " a.ProductCode = b.ProductCode  ";
		sql += " INNER JOIN ";
		sql += " vw_CUBE_Times c  ";
		sql += " ON  ";
		sql += " CAST (a.TransactionDate AS DATE) = c.Date ";
		sql += " INNER JOIN ";
		sql += " vw_CUBE_Customers d ";
		sql += " ON ";
		sql += "  a.CustomerCode = d.CustomerCode ";
		sql += " and   d.Brick = '";
		sql += brick;
		sql += "' WHERE  ";
		sql += " c.Comm_Quater = '" + date + "'AND  a.Rep = '" + repId + "'";
	//	sql += " and ";
	//	sql += " rating = '" + rate;
		sql += " GROUP BY  ";
		sql += " rating, ";
		sql += " b.Brand, ";
		sql += " brick ";
		sql += " ORDER BY  ";
		sql += " b.Brand	";

		ArrayList<ProxySalesGrading> yearValues = new ArrayList<ProxySalesGrading>();
		System.out.println(sql);
		try {
			
			
			Connection conn = DBAdapter.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);

			ResultSet rs = ps.executeQuery();
			// System.out.println(sql);
			while (rs.next()) {
				ProxySalesGrading values = new ProxySalesGrading();
				// System.out.println( rs.getString("Comm_Month"));
				double sales = Double.parseDouble(rs.getString("SalesValues"));
				values.setValues(sales);
				// values.setDescription(rs.getString("CustomerName"));
				values.setBrick(rs.getString("Brick"));
				String s = String.format("%.0f", sales);
				Integer salesValue = Integer.parseInt(s);
				values.setBrand(rs.getString("Brand"));
				values.setRating(rs.getString("Rating"));
				yearValues.add(values);

				// System.out.println(s);
			}

		} catch (SQLException sqle) {
			sqle.printStackTrace();

		} catch (Exception ex) {
			ex.printStackTrace();

		}

		ProxySalesGrading[] proxyArray = new ProxySalesGrading[yearValues.size()];


for(int i = 0; i < yearValues.size(); i++) {
		proxyArray[i]= (ProxySalesGrading) yearValues.get(i);
	
 }
System.out.println(proxyArray);
		return proxyArray;
	}

	
	////////////////////////
	
	public ProxySalesGrading[] getMothlyValuesByBrick(
			@WebParam(name = "repId", targetNamespace = "http://mobile.arkitex.com/") String repId,
			@WebParam(name = "date", targetNamespace = "http://mobile.arkitex.com/") String date,
			@WebParam(name = "brick", targetNamespace = "http://mobile.arkitex.com/") String brick) {
		// TODO Auto-generated method stub

		String sql = "	SELECT  ";
		sql += " ROUND( SUM(SalesValue), 0) AS 'SalesValues', ";
		sql += " b.Brand, ";
		sql += "rating,";
		sql += "brick ";
		sql += " FROM ";
		sql += " vw_CUBE_FACT_TT_Transactions a ";
		sql += " INNER JOIN  ";
		sql += " vw_CUBE_Products b  ";
		sql += " ON  ";
		sql += " a.ProductCode = b.ProductCode  ";
		sql += " INNER JOIN ";
		sql += " vw_CUBE_Times c  ";
		sql += " ON  ";
		sql += " CAST (a.TransactionDate AS DATE) = c.Date ";
		sql += " INNER JOIN ";
		sql += " vw_CUBE_Customers d ";
		sql += " ON ";
		sql += "  a.CustomerCode = d.CustomerCode ";
		sql += " and   d.Brick = '";
		sql += brick;
		sql += "' WHERE  ";
		sql += " c.Comm_Month = '" + date + "'AND  a.Rep = '" + repId + "'";
	//	sql += " and ";
	//	sql += " rating = '" + rate;
		sql += "  GROUP BY  ";
		sql += " rating, ";
		sql += " b.Brand, ";
		sql += " brick ";
		sql += " ORDER BY  ";
		sql += " b.Brand	";

		ArrayList<ProxySalesGrading> yearValues = new ArrayList<ProxySalesGrading>();
		System.out.println(sql);
		try {
			
			
			Connection conn = DBAdapter.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);

			ResultSet rs = ps.executeQuery();
			// System.out.println(sql);
			while (rs.next()) {
				ProxySalesGrading values = new ProxySalesGrading();
				// System.out.println( rs.getString("Comm_Month"));
				double sales = Double.parseDouble(rs.getString("SalesValues"));
				values.setValues(sales);
				// values.setDescription(rs.getString("CustomerName"));
				values.setBrick(rs.getString("Brick"));
				String s = String.format("%.0f", sales);
				Integer salesValue = Integer.parseInt(s);
				values.setBrand(rs.getString("Brand"));
				values.setRating(rs.getString("Rating"));
				yearValues.add(values);

				// System.out.println(s);
			}

		} catch (SQLException sqle) {
			sqle.printStackTrace();

		} catch (Exception ex) {
			ex.printStackTrace();

		}

		ProxySalesGrading[] proxyArray = new ProxySalesGrading[yearValues.size()];


for(int i = 0; i < yearValues.size(); i++) {
		proxyArray[i]= (ProxySalesGrading) yearValues.get(i);
	
 }
System.out.println(proxyArray);
		return proxyArray;
	}

	
	///////////////////////////  BY BRAND
	
	
///////////////////////////
	
public ProxySalesGrading[] getYearValuesByBrand(
@WebParam(name = "repId", targetNamespace = "http://mobile.arkitex.com/") String repId,
@WebParam(name = "date", targetNamespace = "http://mobile.arkitex.com/") String date,
@WebParam(name = "brand", targetNamespace = "http://mobile.arkitex.com/") String brand) {
// TODO Auto-generated method stub

	String sql = "	SELECT  ";
	sql += " ROUND( SUM(SalesValue), 0) AS 'SalesValues', ";
	sql += " b.Brand, ";
	sql += "rating,";
	sql += "brick ";
	sql += " FROM ";
	sql += " vw_CUBE_FACT_TT_Transactions a ";
	sql += " INNER JOIN  ";
	sql += " vw_CUBE_Products b  ";
	sql += " ON  ";
	sql += " a.ProductCode = b.ProductCode  AND b.Brand='" + brand;
	sql += "' INNER JOIN ";
	sql += " vw_CUBE_Times c  ";
	sql += " ON  ";
	sql += " CAST (a.TransactionDate AS DATE) = c.Date ";
	sql += " INNER JOIN ";
	sql += " vw_CUBE_Customers d ";
	sql += " ON ";
	sql += "  a.CustomerCode = d.CustomerCode ";
	sql += " WHERE  ";
	sql += " c.Comm_Year = '" + date + "'AND  a.Rep = '" + repId + "'";
//	sql += " and ";
//	sql += " rating = '" + rate;
	sql += "  GROUP BY  ";
	sql += " rating, ";
	sql += " b.Brand, ";
	sql += " brick ";
	sql += " ORDER BY  ";
	sql += " b.Brand	";
	
ArrayList<ProxySalesGrading> yearValues = new ArrayList<ProxySalesGrading>();
System.out.println(sql);
try {


Connection conn = DBAdapter.getConnection();
PreparedStatement ps = conn.prepareStatement(sql);

ResultSet rs = ps.executeQuery();
// System.out.println(sql);
while (rs.next()) {
ProxySalesGrading values = new ProxySalesGrading();
// System.out.println( rs.getString("Comm_Month"));
double sales = Double.parseDouble(rs.getString("SalesValues"));
values.setValues(sales);
// values.setDescription(rs.getString("CustomerName"));
values.setBrick(rs.getString("Brick"));
String s = String.format("%.0f", sales);
Integer salesValue = Integer.parseInt(s);
values.setBrand(rs.getString("Brand"));
values.setRating(rs.getString("Rating"));
yearValues.add(values);

// System.out.println(s);
}

} catch (SQLException sqle) {
sqle.printStackTrace();

} catch (Exception ex) {
ex.printStackTrace();

}

ProxySalesGrading[] proxyArray = new ProxySalesGrading[yearValues.size()];


for(int i = 0; i < yearValues.size(); i++) {
proxyArray[i]= (ProxySalesGrading) yearValues.get(i);

}
System.out.println(proxyArray);
return proxyArray;
}


///////////

public ProxySalesGrading[] getQuaterlyValuesByBrand(
@WebParam(name = "repId", targetNamespace = "http://mobile.arkitex.com/") String repId,
@WebParam(name = "date", targetNamespace = "http://mobile.arkitex.com/") String date,
@WebParam(name = "brand", targetNamespace = "http://mobile.arkitex.com/") String brand) {
// TODO Auto-generated method stub

	String sql = "	SELECT  ";
	sql += " ROUND( SUM(SalesValue), 0) AS 'SalesValues', ";
	sql += " b.Brand, ";
	sql += "rating,";
	sql += "brick ";
	sql += " FROM ";
	sql += " vw_CUBE_FACT_TT_Transactions a ";
	sql += " INNER JOIN  ";
	sql += " vw_CUBE_Products b  ";
	sql += " ON  ";
	sql += " a.ProductCode = b.ProductCode  AND b.Brand='" + brand;
	sql += "' INNER JOIN ";
	sql += " vw_CUBE_Times c  ";
	sql += " ON  ";
	sql += " CAST (a.TransactionDate AS DATE) = c.Date ";
	sql += " INNER JOIN ";
	sql += " vw_CUBE_Customers d ";
	sql += " ON ";
	sql += "  a.CustomerCode = d.CustomerCode ";
	sql += " WHERE  ";
	sql += " c.Comm_Year = '" + date + "'AND  a.Rep = '" + repId + "'";
//	sql += " and ";
//	sql += " rating = '" + rate;
	sql += "  GROUP BY  ";
	sql += " rating, ";
	sql += " b.Brand, ";
	sql += " brick ";
	sql += " ORDER BY  ";
	sql += " b.Brand	";

ArrayList<ProxySalesGrading> yearValues = new ArrayList<ProxySalesGrading>();
System.out.println(sql);
try {


Connection conn = DBAdapter.getConnection();
PreparedStatement ps = conn.prepareStatement(sql);

ResultSet rs = ps.executeQuery();
// System.out.println(sql);
while (rs.next()) {
ProxySalesGrading values = new ProxySalesGrading();
// System.out.println( rs.getString("Comm_Month"));
double sales = Double.parseDouble(rs.getString("SalesValues"));
values.setValues(sales);
// values.setDescription(rs.getString("CustomerName"));
values.setBrick(rs.getString("Brick"));
String s = String.format("%.0f", sales);
Integer salesValue = Integer.parseInt(s);
values.setBrand(rs.getString("Brand"));
values.setRating(rs.getString("Rating"));
yearValues.add(values);

// System.out.println(s);
}

} catch (SQLException sqle) {
sqle.printStackTrace();

} catch (Exception ex) {
ex.printStackTrace();

}

ProxySalesGrading[] proxyArray = new ProxySalesGrading[yearValues.size()];


for(int i = 0; i < yearValues.size(); i++) {
proxyArray[i]= (ProxySalesGrading) yearValues.get(i);

}
System.out.println(proxyArray);
return proxyArray;
}


////////////////////////

public ProxySalesGrading[] getMothlyValuesByBrand(
@WebParam(name = "repId", targetNamespace = "http://mobile.arkitex.com/") String repId,
@WebParam(name = "date", targetNamespace = "http://mobile.arkitex.com/") String date,
@WebParam(name = "brand", targetNamespace = "http://mobile.arkitex.com/") String brand) {
// TODO Auto-generated method stub

	String sql = "	SELECT  ";
	sql += " ROUND( SUM(SalesValue), 0) AS 'SalesValues', ";
	sql += " b.Brand, ";
	sql += "rating,";
	sql += "brick ";
	sql += " FROM ";
	sql += " vw_CUBE_FACT_TT_Transactions a ";
	sql += " INNER JOIN  ";
	sql += " vw_CUBE_Products b  ";
	sql += " ON  ";
	sql += " a.ProductCode = b.ProductCode  AND b.Brand='" + brand;
	sql += "' INNER JOIN ";
	sql += " vw_CUBE_Times c  ";
	sql += " ON  ";
	sql += " CAST (a.TransactionDate AS DATE) = c.Date ";
	sql += " INNER JOIN ";
	sql += " vw_CUBE_Customers d ";
	sql += " ON ";
	sql += "  a.CustomerCode = d.CustomerCode ";
	sql += " WHERE  ";
	sql += " c.Comm_Year = '" + date + "'AND  a.Rep = '" + repId + "'";
//	sql += " and ";
//	sql += " rating = '" + rate;
	sql += "  GROUP BY  ";
	sql += " rating, ";
	sql += " b.Brand, ";
	sql += " brick ";
	sql += " ORDER BY  ";
	sql += " b.Brand	";

ArrayList<ProxySalesGrading> yearValues = new ArrayList<ProxySalesGrading>();
System.out.println(sql);
try {


Connection conn = DBAdapter.getConnection();
PreparedStatement ps = conn.prepareStatement(sql);

ResultSet rs = ps.executeQuery();
// System.out.println(sql);
while (rs.next()) {
ProxySalesGrading values = new ProxySalesGrading();
// System.out.println( rs.getString("Comm_Month"));
double sales = Double.parseDouble(rs.getString("SalesValues"));
values.setValues(sales);
// values.setDescription(rs.getString("CustomerName"));
values.setBrick(rs.getString("Brick"));
String s = String.format("%.0f", sales);
Integer salesValue = Integer.parseInt(s);
values.setBrand(rs.getString("Brand"));
values.setRating(rs.getString("Rating"));
yearValues.add(values);

// System.out.println(s);
}

} catch (SQLException sqle) {
sqle.printStackTrace();

} catch (Exception ex) {
ex.printStackTrace();

}

ProxySalesGrading[] proxyArray = new ProxySalesGrading[yearValues.size()];


for(int i = 0; i < yearValues.size(); i++) {
proxyArray[i]= (ProxySalesGrading) yearValues.get(i);

}
System.out.println(proxyArray);
return proxyArray;
}

/////////////////////////////////////////////BY RATING

///////////////////////////

public ProxySalesGrading[] getYearValuesByRating(
@WebParam(name = "repId", targetNamespace = "http://mobile.arkitex.com/") String repId,
@WebParam(name = "date", targetNamespace = "http://mobile.arkitex.com/") String date,
@WebParam(name = "rating", targetNamespace = "http://mobile.arkitex.com/") String rating) {
//TODO Auto-generated method stub

	String sql = "	SELECT  ";
	sql += " 	ROUND( SUM(SalesValue), 0) AS 'SalesValues', "; 
	sql += " 	b.Brand, "; 
	sql += " 	rating, ";
	sql += " 	brick ";
	sql += " FROM  ";
	sql += " 	vw_CUBE_FACT_TT_Transactions a  ";
	sql += " INNER JOIN  ";
	sql += " 	vw_CUBE_Products b  ";
	sql += " ON  ";
	sql += " 	a.ProductCode = b.ProductCode  ";
	sql += " INNER JOIN  ";
	sql += " 	vw_CUBE_Times c  ";
	sql += " ON  ";
	sql += " 	CAST (a.TransactionDate AS DATE) = c.Date  ";
	sql += " INNER JOIN ";
	sql += "   vw_CUBE_Customers d ";
	sql += " ON ";
	sql += "    a.CustomerCode = d.CustomerCode ";
	sql += " WHERE  ";
	sql += " 	c.Comm_Year = ' " + date;
	sql += " '  AND  ";
	sql += " 	a.Rep = ' " + repId;
	sql += " '  AND ";

	sql += " 	rating = '" + rating + "'"; 
	sql += " GROUP BY rating,	b.Brand,	brick  ORDER BY b.Brand ";
		

ArrayList<ProxySalesGrading> yearValues = new ArrayList<ProxySalesGrading>();
System.out.println(sql);
try {


Connection conn = DBAdapter.getConnection();
PreparedStatement ps = conn.prepareStatement(sql);

ResultSet rs = ps.executeQuery();
//System.out.println(sql);
while (rs.next()) {
ProxySalesGrading values = new ProxySalesGrading();
//System.out.println( rs.getString("Comm_Month"));
double sales = Double.parseDouble(rs.getString("SalesValues"));
values.setValues(sales);
//values.setDescription(rs.getString("CustomerName"));
values.setBrick(rs.getString("Brick"));
String s = String.format("%.0f", sales);
Integer salesValue = Integer.parseInt(s);
values.setBrand(rs.getString("Brand"));
values.setRating(rs.getString("Rating"));
yearValues.add(values);

//System.out.println(s);
}

} catch (SQLException sqle) {
sqle.printStackTrace();

} catch (Exception ex) {
ex.printStackTrace();

}

ProxySalesGrading[] proxyArray = new ProxySalesGrading[yearValues.size()];


for(int i = 0; i < yearValues.size(); i++) {
proxyArray[i]= (ProxySalesGrading) yearValues.get(i);

}
System.out.println(proxyArray);
return proxyArray;
}


///////////

public ProxySalesGrading[] getQuaterlyValuesByRating(
@WebParam(name = "repId", targetNamespace = "http://mobile.arkitex.com/") String repId,
@WebParam(name = "date", targetNamespace = "http://mobile.arkitex.com/") String date,
@WebParam(name = "rating", targetNamespace = "http://mobile.arkitex.com/") String rating) {
//TODO Auto-generated method stub

	String sql = "	SELECT  ";
	sql += " 	ROUND( SUM(SalesValue), 0) AS 'SalesValues', "; 
	sql += " 	b.Brand, "; 
	sql += " 	rating, ";
	sql += " 	brick ";
	sql += " FROM  ";
	sql += " 	vw_CUBE_FACT_TT_Transactions a  ";
	sql += " INNER JOIN  ";
	sql += " 	vw_CUBE_Products b  ";
	sql += " ON  ";
	sql += " 	a.ProductCode = b.ProductCode  ";
	sql += " INNER JOIN  ";
	sql += " 	vw_CUBE_Times c  ";
	sql += " ON  ";
	sql += " 	CAST (a.TransactionDate AS DATE) = c.Date  ";
	sql += " INNER JOIN ";
	sql += "   vw_CUBE_Customers d ";
	sql += " ON ";
	sql += "    a.CustomerCode = d.CustomerCode ";
	sql += " WHERE  ";
	sql += " 	c.Comm_Quater = ' " + date;
	sql += " '  AND  ";
	sql += " 	a.Rep = ' " + repId;
	sql += " '  AND ";

	sql += " 	rating = '" + rating + "'"; 
	sql += " GROUP BY rating,	b.Brand,	brick  ORDER BY b.Brand ";

ArrayList<ProxySalesGrading> yearValues = new ArrayList<ProxySalesGrading>();
System.out.println(sql);
try {


Connection conn = DBAdapter.getConnection();
PreparedStatement ps = conn.prepareStatement(sql);

ResultSet rs = ps.executeQuery();
//System.out.println(sql);
while (rs.next()) {
ProxySalesGrading values = new ProxySalesGrading();
//System.out.println( rs.getString("Comm_Month"));
double sales = Double.parseDouble(rs.getString("SalesValues"));
values.setValues(sales);
//values.setDescription(rs.getString("CustomerName"));
values.setBrick(rs.getString("Brick"));
String s = String.format("%.0f", sales);
Integer salesValue = Integer.parseInt(s);
values.setBrand(rs.getString("Brand"));
values.setRating(rs.getString("Rating"));
yearValues.add(values);

//System.out.println(s);
}

} catch (SQLException sqle) {
sqle.printStackTrace();

} catch (Exception ex) {
ex.printStackTrace();

}

ProxySalesGrading[] proxyArray = new ProxySalesGrading[yearValues.size()];


for(int i = 0; i < yearValues.size(); i++) {
proxyArray[i]= (ProxySalesGrading) yearValues.get(i);

}
System.out.println(proxyArray);
return proxyArray;
}


////////////////////////

public ProxySalesGrading[] getMothlyValuesByRating(
@WebParam(name = "repId", targetNamespace = "http://mobile.arkitex.com/") String repId,
@WebParam(name = "date", targetNamespace = "http://mobile.arkitex.com/") String date,
@WebParam(name = "rating", targetNamespace = "http://mobile.arkitex.com/") String rating) {
//TODO Auto-generated method stub
	
String sql = "	SELECT  ";
sql += " 	ROUND( SUM(SalesValue), 0) AS 'SalesValues', "; 
sql += " 	b.Brand, "; 
sql += " 	rating, ";
sql += " 	brick ";
sql += " FROM  ";
sql += " 	vw_CUBE_FACT_TT_Transactions a  ";
sql += " INNER JOIN  ";
sql += " 	vw_CUBE_Products b  ";
sql += " ON  ";
sql += " 	a.ProductCode = b.ProductCode  ";
sql += " INNER JOIN  ";
sql += " 	vw_CUBE_Times c  ";
sql += " ON  ";
sql += " 	CAST (a.TransactionDate AS DATE) = c.Date  ";
sql += " INNER JOIN ";
sql += "   vw_CUBE_Customers d ";
sql += " ON ";
sql += "    a.CustomerCode = d.CustomerCode ";
sql += " WHERE  ";
sql += " 	c.Comm_Month = ' " + date;
sql += " '  AND  ";
sql += " 	a.Rep = ' " + repId;
sql += " '  AND ";

sql += " 	rating = '" + rating + "'"; 
sql += " GROUP BY rating,	b.Brand,	brick  ORDER BY b.Brand ";
	
	
	
ArrayList<ProxySalesGrading> yearValues = new ArrayList<ProxySalesGrading>();
System.out.println(sql);
try {


Connection conn = DBAdapter.getConnection();
PreparedStatement ps = conn.prepareStatement(sql);

ResultSet rs = ps.executeQuery();
//System.out.println(sql);
while (rs.next()) {
ProxySalesGrading values = new ProxySalesGrading();
//System.out.println( rs.getString("Comm_Month"));
double sales = Double.parseDouble(rs.getString("SalesValues"));
values.setValues(sales);
//values.setDescription(rs.getString("CustomerName"));
values.setBrick(rs.getString("Brick"));
String s = String.format("%.0f", sales);
Integer salesValue = Integer.parseInt(s);
values.setBrand(rs.getString("Brand"));
values.setRating(rs.getString("Rating"));
yearValues.add(values);

//System.out.println(s);
}

} catch (SQLException sqle) {
sqle.printStackTrace();

} catch (Exception ex) {
ex.printStackTrace();

}

ProxySalesGrading[] proxyArray = new ProxySalesGrading[yearValues.size()];


for(int i = 0; i < yearValues.size(); i++) {
proxyArray[i]= (ProxySalesGrading) yearValues.get(i);

}
System.out.println(proxyArray);
return proxyArray;
}
	
}