package za.co.gondwana.soft.entity;

import za.co.gondwana.soft.DataAccessConstants;
import za.co.gondwana.soft.entity.customer.Customer;
import za.co.gondwana.soft.entity.transaction.TTTransaction;

import javax.ejb.Local;
import javax.ejb.Remote;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

/**
 * Created by zonke on 9/3/2014.
 */

@Stateless
@Local(GondwanaSoftRepository.class)
@Remote(GondwanaSoftRepositoryRemote.class)
public class GondwanaSoftRepositoryBean implements GondwanaSoftRepository{

    private EntityManager entityManager;

    @PersistenceContext(unitName = DataAccessConstants.GONDWANA_PERSISTENCE_CONTEXT)
    void setEntityManager(EntityManager em) {
        this.entityManager = em;
    }

    public Customer findCustomerByCode(String customerCode) {
        return entityManager.find(Customer.class, customerCode);
    }

    @Override
    public List<TTTransaction> findTTTransactionsByRep(String representativeCode) {
        Query query = entityManager.createQuery("from TTTransaction where rep = :rep");
        List<TTTransaction> ttTransactions = query.setParameter("rep", representativeCode).getResultList();
        return ttTransactions;
    }
}
