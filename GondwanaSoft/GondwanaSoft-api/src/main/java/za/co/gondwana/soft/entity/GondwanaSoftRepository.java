package za.co.gondwana.soft.entity;

import za.co.gondwana.soft.entity.customer.Customer;
import za.co.gondwana.soft.entity.transaction.TTTransaction;

import java.util.List;

/**
 * Created by zonke on 9/6/2014.
 */
public interface GondwanaSoftRepository {

    Customer findCustomerByCode(String customerCode);

    List<TTTransaction> findTTTransactionsByRep(String representativeCode);
}
