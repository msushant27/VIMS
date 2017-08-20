package com.cdk.vims.model;

import javax.persistence.*;

@Entity
@Table(name = "supplier_detail")
public class Supplier {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int supplier_id;

    @Column(length = 20, nullable = false)
    String supplier_name;

    @Column(length = 20, nullable = false)
    String supplier_make;

    @Column(length = 20, nullable = false)
    String supplier_model;

    @Column(length = 20, nullable = false)
    String supplier_logo;

    @Column(nullable = false)
    double supplier_price;

    public Supplier() {
    }

    public Supplier(int supplier_id, String supplier_name, String supplier_make, String supplier_model, String supplier_logo, double supplier_price) {
        this.supplier_id = supplier_id;
        this.supplier_name = supplier_name;
        this.supplier_make = supplier_make;
        this.supplier_model = supplier_model;
        this.supplier_logo = supplier_logo;
        this.supplier_price = supplier_price;
    }

    public Supplier(String supplier_name, String supplier_make, String supplier_model, String supplier_logo, double supplier_price) {
        this.supplier_name = supplier_name;
        this.supplier_make = supplier_make;
        this.supplier_model = supplier_model;
        this.supplier_logo = supplier_logo;
        this.supplier_price = supplier_price;
    }

    public int getSupplier_id() {
        return supplier_id;
    }

    public void setSupplier_id(int supplier_id) {
        this.supplier_id = supplier_id;
    }

    public String getSupplier_name() {
        return supplier_name;
    }

    public void setSupplier_name(String supplier_name) {
        this.supplier_name = supplier_name;
    }

    public String getSupplier_make() {
        return supplier_make;
    }

    public void setSupplier_make(String supplier_make) {
        this.supplier_make = supplier_make;
    }

    public String getSupplier_model() {
        return supplier_model;
    }

    public void setSupplier_model(String supplier_model) {
        this.supplier_model = supplier_model;
    }

    public String getSupplier_logo() {
        return supplier_logo;
    }

    public void setSupplier_logo(String supplier_logo) {
        this.supplier_logo = supplier_logo;
    }

    public double getSupplier_price() {
        return supplier_price;
    }

    public void setSupplier_price(double supplier_price) {
        this.supplier_price = supplier_price;
    }

    @Override
    public String toString() {
        return "Supplier{" +
                "supplier_id=" + supplier_id +
                ", supplier_name='" + supplier_name + '\'' +
                ", supplier_make='" + supplier_make + '\'' +
                ", supplier_model='" + supplier_model + '\'' +
                ", supplier_logo='" + supplier_logo + '\'' +
                ", supplier_price=" + supplier_price +
                '}';
    }
}
