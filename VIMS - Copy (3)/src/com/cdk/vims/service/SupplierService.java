package com.cdk.vims.service;

import com.cdk.vims.dao.SupplierDAO;
import com.cdk.vims.model.Supplier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class SupplierService {
    @Autowired
    SupplierDAO supplierDAO;

    public Collection<Supplier> searchSuppliers(String supplier_make, String supplier_model) {
        return supplierDAO.getSuppliers(supplier_make,supplier_model);
    }

}

