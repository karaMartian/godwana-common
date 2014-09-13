package za.co.arkitex.mobile.gondwana.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class AuthenticateQuery {

	private String imei;
	private boolean isVerified;
	
	public String getImei() {
		return imei;
	}

	public void setImei(String imei) {
		this.imei = imei;
	}
	
	public boolean aunthenticate(String imei) {
		
		Connection conn = DBAdapter.getConnection();
		String sql = "";
		sql += " SELECT ";
	    sql += " 	repId, ";
		sql += " 	username ";
		sql += " FROM "; 
		sql += " 	device_owner ";
		sql += " WHERE ";
		sql += " 	IMEI = '" + imei + "'";
		
//		System.out.println(sql);
		
		
		try {
			PreparedStatement ps = conn.prepareStatement(sql);
	        ResultSet rs = ps.executeQuery();

           
           if (rs.next()){
               while(rs.next()) {
   				System.out.println(rs.getString("repId"));
   				System.out.println(rs.getString("username"));
                   
               }    
               isVerified = true;
               System.out.println(isVerified);
               return isVerified;
           } else {
                    
        	   isVerified = false;
               System.out.println(isVerified);
               return isVerified;                   
           }

		} catch (Exception ex) {
			ex.printStackTrace();
            isVerified = false;
            System.out.println(isVerified);
            return isVerified;
		}
		
		
	}
}
/*
SELECT
repId,
[username]
FROM 
device_owner
WHERE 
IMEI ='358904053464104'*/
