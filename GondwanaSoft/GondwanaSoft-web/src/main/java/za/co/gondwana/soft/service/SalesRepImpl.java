package za.co.gondwana.soft.service;

import za.co.gondwana.soft.service.delegate.SalesRepDelegate;

import javax.jws.WebParam;

/**
 * Created by zonke on 9/6/2014.
 */
public class SalesRepImpl implements SalesRep {

    @Override
    public SalesRepList salesRepOp(@WebParam(name = "SalesRepresantativeBrandsRequest", targetNamespace = "http://www.arkitex.co.za/kony/1.0",
            partName = "SalesRepresantativeBrandsRequest") SalesRepresantativeBrandsRequest salesRepresantativeBrandsRequest) {
        return null;
    }

    @Override
    public TTTransactionsByRepResponse ttTransactionsByRepOp(@WebParam(name = "TTTransactionsByRepRequest", targetNamespace = "http://www.arkitex.co.za/kony/1.0",
            partName = "TTTransactionsByRepRequest") TTTransactionsByRepRequest ttTransactionsByRepRequest) {

        SalesRepDelegate salesRepDelegate = new SalesRepDelegate();
        return salesRepDelegate.findTTTransactionsByRep(ttTransactionsByRepRequest);
    }
}
