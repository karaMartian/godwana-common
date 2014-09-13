package za.co.arkitex.mobile.gondwana.ws.endpoints;

import javax.xml.ws.Endpoint;

import za.co.arkitex.mobile.gondwana.ws.impl.SalesRepresentativeServiceImpl;



public class SalesRepDataPublisher {

	public static void main(String[] args) {
	       Endpoint.publish("http://209.203.36.130:8080/com/arkitex/mobile", new SalesRepresentativeServiceImpl());
	       System.out.println("Sales Rep Data Service Running... " ); 				
	}
}
