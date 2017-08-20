package com.cdk.vims.dao;

import com.cdk.vims.model.Car;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.Collection;
import java.util.List;

@Repository
public class CarDAO {

    @PersistenceContext
    EntityManager entityManager;

    public Collection<Car> getAllCars() {
        return (entityManager.createQuery("from com.cdk.vims.model.Car")).getResultList();
    }


    public int save(Car car) {
//        int id = car.getVin();
//        Car car1 = entityManager.find(Car.class, id);
//        if (car1 != null) {
//            car1.setQty(car1.getQty()+car.getQty());
//            entityManager.merge(car1);
//        } else
            entityManager.persist(car);
        return car.getVin();

    }

//    public int save(Car car) {
//        String model = car.getModel();
//        Car car1 = entityManager.find(Car.class, model);
//        if (car1 != null) {
//            car1.setQty(car1.getQty()+car.getQty());
//            entityManager.merge(car1);
//        } else
//            entityManager.persist(car);
//        return car.getVin();
//
//    }

    public Collection<Car> getCars(String field, String fieldValue) {
        return (entityManager.createQuery("from com.cdk.vims.model.Car where " + field + "='" + fieldValue + "' order by " + field)).getResultList();
    }

    public void delete(int id, int qty) {
        Car car = entityManager.find(Car.class, id);
        if (qty == car.getQty()) {
            entityManager.remove(car);
        } else if (qty < car.getQty()) {
            car.setQty(car.getQty() - qty);
            entityManager.merge(car);
        }
    }

    public void delete(int id) {
        Car car = entityManager.find(Car.class, id);
        entityManager.remove(car);

    }

    public List<String> readMakeOfCars() {
        return (entityManager.createQuery("select make from Car group by make")).getResultList();
    }

    public Collection<String> getModel(String make1) {
        return (entityManager.createQuery("select model from Car where make='" + make1 + "' group by model")).getResultList();

    }

//    public int saveCar(String make, String model, String price, String logo) {
//        entityManager.createQuery("insert into Car()");
//    }
}