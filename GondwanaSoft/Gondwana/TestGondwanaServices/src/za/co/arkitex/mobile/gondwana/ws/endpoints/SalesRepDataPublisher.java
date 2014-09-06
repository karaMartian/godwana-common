package za.co.arkitex.mobile.gondwana.ws.endpoints;

import javax.xml.ws.Endpoint;

import za.co.arkitex.mobile.domain.SalesRepDataServiceImpl;

public class SalesRepDataPublisher {

	public static void main(String[] args) {
	       Endpoint.publish("http://209.203.36.130:8080/com/arkitex/mobile", new SalesRepDataServiceImpl());
	       System.out.println("Sales Rep Data Retriever Service Running... " ); 		
	}
}
