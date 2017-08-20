package com.cdk.vims.service;

import com.cdk.vims.dao.CarDAO;
import com.cdk.vims.model.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;

@Service
public class CarService {

    @Autowired
    CarDAO carDAO;

    public Collection<Car> readAllCars() {
        return carDAO.getAllCars();
    }

    @Transactional
    public int save(Car car) {
        return carDAO.save(car);
    }

    public Collection<Car> readCars(String field, String fieldValue) {
        return carDAO.getCars(field, fieldValue);
    }

    @Transactional
    public void remove(int id, int qty) {
        carDAO.delete(id, qty);
    }

    public Collection<String> readMake() {
        return carDAO.readMakeOfCars();
    }

    public Collection<String> readModel(String make1) {
        return carDAO.getModel(make1);
    }

    public void setCarDAO(CarDAO carDAO) {
        this.carDAO = carDAO;
    }

}
