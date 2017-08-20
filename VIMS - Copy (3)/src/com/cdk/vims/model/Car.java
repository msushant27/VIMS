package com.cdk.vims.model;


import javax.persistence.*;

@Entity
@Table(name = "car_detail")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int vin;

    @Column(length = 20, nullable = false)
    private String make;

    @Column(length = 20, nullable = false)
    private String model;

    @Column(nullable = false)
    private double price;

    @Column(length = 30, nullable = true)
    private String logo;

    @Column(nullable = false)
    private int qty;


    public Car() {
    }


    public Car(int vin, int qty) {
        this.vin = vin;
        this.qty = qty;
    }

    public Car(String make, String model, double price, String logo, int qty) {
        this.make = make;
        this.model = model;
        this.price = price;
        this.logo = logo;
        this.qty = qty;
    }

    public Car(int vin, String make, String model, double price, String logo, int qty) {
        this.vin = vin;
        this.make = make;
        this.model = model;
        this.price = price;
        this.logo = logo;
        this.qty = qty;
    }




    public int getVin() {
        return vin;
    }

    public void setVin(int vin) {
        this.vin = vin;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }

    @Override
    public String toString() {
        return "Car{" +
                "vin=" + vin +
                ", make='" + make + '\'' +
                ", model='" + model + '\'' +
                ", price=" + price +
                ", logo='" + logo + '\'' +
                ", qty=" + qty +
                '}';
    }
}
