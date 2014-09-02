package za.co.arkitex.mobile.gondwana.db;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBAdapter {

	private static Connection conn = null;
	
	public static Connection getConnection() {
		String url = "jdbc:sqlserver://209.203.36.130:1433;DatabaseName=KONY_POC";
		try {
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver").newInstance();
			conn = DriverManager.getConnection(url,"sa", "17093258Viper");
		} catch(Exception ex) {
			ex.printStackTrace();
			
		}
		
		return conn;
	}
}
