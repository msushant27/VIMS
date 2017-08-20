package com.cdk.vims.dao;

import com.cdk.vims.model.Supplier;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Collection;


@Repository
public class SupplierDAO {

    @PersistenceContext
    EntityManager entityManager;

    public Collection<Supplier> getSuppliers(String supplier_make, String supplier_model) {
        return (entityManager.createQuery("from Supplier where supplier_make =" + "'" + supplier_make + "'"  + "and supplier_model = " + "'" + supplier_model + "'" +" order by supplier_price")).getResultList();
    }

}
