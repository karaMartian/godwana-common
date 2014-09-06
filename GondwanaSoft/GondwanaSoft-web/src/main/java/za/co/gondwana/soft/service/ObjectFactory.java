
package za.co.gondwana.soft.service;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the za.co.gondwana.soft.service package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {

    private final static QName _SalesRepresantativeBrandsRequest_QNAME = new QName("http://www.arkitex.co.za/kony/1.0", "SalesRepresantativeBrandsRequest");
    private final static QName _SalesRepresantativeBrandsResponse_QNAME = new QName("http://www.arkitex.co.za/kony/1.0", "SalesRepresantativeBrandsResponse");
    private final static QName _TTTransactionsByRepRequest_QNAME = new QName("http://www.arkitex.co.za/kony/1.0", "TTTransactionsByRepRequest");
    private final static QName _TTTransactionsByRepResponse_QNAME = new QName("http://www.arkitex.co.za/kony/1.0", "TTTransactionsByRepResponse");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: za.co.gondwana.soft.service
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link TTTransactionsByRepResponse.TTTransactionsByRepList }
     * 
     */
    public TTTransactionsByRepResponse.TTTransactionsByRepList createTTTransactionsByRepResponseTTTransactionsByRepList() {
        return new TTTransactionsByRepResponse.TTTransactionsByRepList();
    }

    /**
     * Create an instance of {@link SalesRepresantativeBrandsRequest }
     * 
     */
    public SalesRepresantativeBrandsRequest createSalesRepresantativeBrandsRequest() {
        return new SalesRepresantativeBrandsRequest();
    }

    /**
     * Create an instance of {@link TTTransactionsByRepRequest }
     * 
     */
    public TTTransactionsByRepRequest createTTTransactionsByRepRequest() {
        return new TTTransactionsByRepRequest();
    }

    /**
     * Create an instance of {@link SalesRepList }
     * 
     */
    public SalesRepList createSalesRepList() {
        return new SalesRepList();
    }

    /**
     * Create an instance of {@link TTTransactionsByRepResponse }
     * 
     */
    public TTTransactionsByRepResponse createTTTransactionsByRepResponse() {
        return new TTTransactionsByRepResponse();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link SalesRepresantativeBrandsRequest }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://www.arkitex.co.za/kony/1.0", name = "SalesRepresantativeBrandsRequest")
    public JAXBElement<SalesRepresantativeBrandsRequest> createSalesRepresantativeBrandsRequest(SalesRepresantativeBrandsRequest value) {
        return new JAXBElement<SalesRepresantativeBrandsRequest>(_SalesRepresantativeBrandsRequest_QNAME, SalesRepresantativeBrandsRequest.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link SalesRepList }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://www.arkitex.co.za/kony/1.0", name = "SalesRepresantativeBrandsResponse")
    public JAXBElement<SalesRepList> createSalesRepresantativeBrandsResponse(SalesRepList value) {
        return new JAXBElement<SalesRepList>(_SalesRepresantativeBrandsResponse_QNAME, SalesRepList.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link TTTransactionsByRepRequest }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://www.arkitex.co.za/kony/1.0", name = "TTTransactionsByRepRequest")
    public JAXBElement<TTTransactionsByRepRequest> createTTTransactionsByRepRequest(TTTransactionsByRepRequest value) {
        return new JAXBElement<TTTransactionsByRepRequest>(_TTTransactionsByRepRequest_QNAME, TTTransactionsByRepRequest.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link TTTransactionsByRepResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://www.arkitex.co.za/kony/1.0", name = "TTTransactionsByRepResponse")
    public JAXBElement<TTTransactionsByRepResponse> createTTTransactionsByRepResponse(TTTransactionsByRepResponse value) {
        return new JAXBElement<TTTransactionsByRepResponse>(_TTTransactionsByRepResponse_QNAME, TTTransactionsByRepResponse.class, null, value);
    }

}
