import {Component, OnInit} from "@angular/core";
import {Http,Headers,RequestOptions} from "@angular/http";

import {Suppliers} from "./suppliers";
import {Car} from "./car";

@Component({
	selector:'supplier',
    templateUrl:'../partials/supplier.component.html',
    styleUrls:['../css/carSearch.component.styles.css'],
})
export class SupplierComponent implements  OnInit{

    title:string = "List of Suppliers";
    suppliers:Suppliers[];
    car: Car;
    successMessage:string;
    errorMessage:string;


    constructor(private http:Http) {}


    ngOnInit(){

    }
    searchSuppliers() {
        console.log("Inside searchSuppliers()!!!!");

        var  searchURL = "/rest/suppliers";

        var requestHeaders = new Headers({'Accept': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        this.http.get(searchURL, options).subscribe(res => this.suppliers = res.json());
    }
    add() {
        console.log("Inside addCar()!!!!");
        let addUrl = "/rest/add";

        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        this.car.logo = this.car.make + '-' + this.car.model + '.png';
        //this.http.post(addUrl,this.car,options).subscribe(res => this.successMessage = res.toString());
        this.http.post(addUrl, this.car, options).subscribe(
            res => {
                this.successMessage = res.toString();
                console.log(res.text());
                this.errorMessage=""
            },
            error => {
                this.errorMessage = <any>error;
                this.successMessage = ""
            });
    }

}


