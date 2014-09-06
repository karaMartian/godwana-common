package za.co.gondwana.soft.service.delegate;

import za.co.gondwana.soft.entity.GondwanaSoftRepositoryRemote;
import za.co.gondwana.soft.entity.transaction.TTTransaction;
import za.co.gondwana.soft.service.TTTransactionsByRepRequest;
import za.co.gondwana.soft.service.TTTransactionsByRepResponse;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.datatype.XMLGregorianCalendar;
import java.util.GregorianCalendar;
import java.util.Hashtable;
import java.util.List;

/**
 * Created by zonke on 9/6/2014.
 */
public class SalesRepDelegate {

    public TTTransactionsByRepResponse findTTTransactionsByRep(TTTransactionsByRepRequest request) {
        List<TTTransaction> ttTransactions = lookupGondwanaSoftRepository().findTTTransactionsByRep(request.getSalesRepId());

        TTTransactionsByRepResponse response = new TTTransactionsByRepResponse();
        for (TTTransaction ttTransaction : ttTransactions) {
            TTTransactionsByRepResponse.TTTransactionsByRepList ttTransactionsByRepItem = new TTTransactionsByRepResponse.TTTransactionsByRepList();
            ttTransactionsByRepItem.setCustomerCode(ttTransaction.getCustomerCode());
            ttTransactionsByRepItem.setProductCode(ttTransaction.getProductCode());
            ttTransactionsByRepItem.setProviderCode(ttTransaction.getProviderCode());
            ttTransactionsByRepItem.setRating(ttTransaction.getRating());
            ttTransactionsByRepItem.setSalesRep(ttTransaction.getRep());
            ttTransactionsByRepItem.setSalesValue(ttTransaction.getSalesValue().doubleValue());

            GregorianCalendar calendar = new GregorianCalendar();
            calendar.setTime(ttTransaction.getTransactionDate());
            XMLGregorianCalendar transactionDate = null;
            try {
                transactionDate = DatatypeFactory.newInstance().newXMLGregorianCalendar(calendar);
            } catch (DatatypeConfigurationException e) {
                throw new RuntimeException(e);
            }
            ttTransactionsByRepItem.setTransactionDate(transactionDate);
            ttTransactionsByRepItem.setUnits(ttTransaction.getUnits().doubleValue());
            response.getTTTransactionsByRepList().add(ttTransactionsByRepItem);
        }

        return response;
    }

    private static GondwanaSoftRepositoryRemote lookupGondwanaSoftRepository()  {
        try {
            final Hashtable jndiProperties = new Hashtable();
            jndiProperties.put(Context.URL_PKG_PREFIXES, "org.jboss.ejb.client.naming");
            final Context context = new InitialContext(jndiProperties);
            final String appName = "";
            final String moduleName = "GondwanaSoft";
            final String distinctName = "GondwanaSoft-ejb";
            final String beanName = "GondwanaSoftRepositoryBean";
            final String viewClassName = GondwanaSoftRepositoryRemote.class.getName();
            return (GondwanaSoftRepositoryRemote) context.lookup("ejb:" + appName +
                    "/" + moduleName + "/" + distinctName + "/" + beanName + "!" +
                    viewClassName);
        } catch (NamingException e) {
            throw new RuntimeException(e);
        }
    }

}
