
package za.co.gondwana.soft.service;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;
import javax.xml.bind.annotation.XmlSeeAlso;


/**
 * This class was generated by the JAX-WS RI.
 * JAX-WS RI 2.1.7-b01-
 * Generated source version: 2.1
 * 
 */
@WebService(name = "SalesRep", targetNamespace = "http://www.arkitex.co.za/kony/1.0")
@SOAPBinding(parameterStyle = SOAPBinding.ParameterStyle.BARE)
@XmlSeeAlso({
    ObjectFactory.class
})
public interface SalesRep {


    /**
     * 
     * @param salesRepresantativeBrandsRequest
     * @return
     *     returns za.co.gondwana.soft.service.SalesRepList
     */
    @WebMethod(operationName = "SalesRepOp")
    @WebResult(name = "SalesRepresantativeBrandsResponse", targetNamespace = "http://www.arkitex.co.za/kony/1.0", partName = "SalesRepresantativeBrandsResponse")
    public SalesRepList salesRepOp(
        @WebParam(name = "SalesRepresantativeBrandsRequest", targetNamespace = "http://www.arkitex.co.za/kony/1.0", partName = "SalesRepresantativeBrandsRequest")
        SalesRepresantativeBrandsRequest salesRepresantativeBrandsRequest);

    /**
     * 
     * @param ttTransactionsByRepRequest
     * @return
     *     returns za.co.gondwana.soft.service.TTTransactionsByRepResponse
     */
    @WebMethod(operationName = "TTTransactionsByRepOp")
    @WebResult(name = "TTTransactionsByRepResponse", targetNamespace = "http://www.arkitex.co.za/kony/1.0", partName = "TTTransactionsByRepResponse")
    public TTTransactionsByRepResponse ttTransactionsByRepOp(
        @WebParam(name = "TTTransactionsByRepRequest", targetNamespace = "http://www.arkitex.co.za/kony/1.0", partName = "TTTransactionsByRepRequest")
        TTTransactionsByRepRequest ttTransactionsByRepRequest);

}
