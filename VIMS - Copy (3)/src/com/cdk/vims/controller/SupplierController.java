package com.cdk.vims.controller;

import com.cdk.vims.model.Supplier;
import com.cdk.vims.service.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
public class SupplierController {

    @Autowired
    SupplierService supplierService;

    @RequestMapping(value = "/search/{supplier_make}/{supplier_model}",produces = "application/json" ,method = RequestMethod.GET)
    public Collection<Supplier> suppliersearchAsJson(@PathVariable String supplier_make, @PathVariable String supplier_model){
        return supplierService.searchSuppliers(supplier_make,supplier_model);
    }
}