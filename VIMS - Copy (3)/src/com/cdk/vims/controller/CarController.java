package com.cdk.vims.controller;

import com.cdk.vims.model.Car;
import com.cdk.vims.model.Supplier;
import com.cdk.vims.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

import static org.springframework.http.MediaType.TEXT_PLAIN_VALUE;

@RestController
public class CarController {

    @Autowired
    CarService carService;
    @RequestMapping(value = "/make",produces = "application/json" ,method = RequestMethod.GET)
    public Collection<String> readMakeAsJson(){
        return carService.readMake();
    }

    @RequestMapping(value = "/make/{make1}",produces = "application/json" ,method = RequestMethod.GET)
    public Collection<String> readModelAsJson(@PathVariable String make1){
        return carService.readModel(make1);
    }

    @RequestMapping(value = "/car/{field}/{fieldValue}",produces = "application/json" ,method = RequestMethod.GET)
    public Collection<Car> readCarsAsJson(@PathVariable String field, @PathVariable String fieldValue){
        return carService.readCars(field,fieldValue);
    }

    @RequestMapping(value = "/cars",produces = "application/json" ,method = RequestMethod.GET)
    public Collection<Car> readAllCarsAsJson(){
        return carService.readAllCars();
    }

    @RequestMapping(value = "/hello",produces = "application/json" ,method = RequestMethod.GET)
    public String HelloCarsAsJson(){
        return "Hi";
    }

    @RequestMapping(value = "/add",consumes ="application/json" ,produces = TEXT_PLAIN_VALUE ,method = RequestMethod.POST)
    public String addCar(@RequestBody Car car){

        System.out.println(car);
        int value = carService.save(car);
        return "Car with vin '"+value+" ' added successfully!";
    }

//    @RequestMapping(value = "/add/{make}/{model}/{price}/{logo}",consumes ="application/json" ,produces = TEXT_PLAIN_VALUE ,method = RequestMethod.POST)
//    public String addCars(@PathVariable String make,@PathVariable String model,@PathVariable String price,@PathVariable String logo){
//
//       int id=  carService.saveCar(make,model,price,logo);
//        return "Car added successfully!";
//    }

    @RequestMapping(value = "/delete/{id}/{qty}", produces = TEXT_PLAIN_VALUE, method = RequestMethod.DELETE)
    public String deleteCar(@PathVariable int id,@PathVariable int qty) {
        carService.remove(id,qty);
        return "Car with vin '"+id +"' deleted successfully!";
    }
}