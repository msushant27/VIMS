import {Component} from "@angular/core";
import {Http,Headers,RequestOptions} from "@angular/http";

import {Car} from "./car";

@Component({
	selector:'vims-app',
    templateUrl:'../partials/carsell.component.html',
    // styleUrls:['../css/car.component.styles.css'],
})
export class CarSellComponent{

	title:string ="Car Sell";
	car:Car;
	successMessage:string;
    errorMessage:string;


    constructor(private http:Http) {
        // this.car = new Car('Audi','A4',400000,'audi-a4.png');
    }

    // addCar() {
    //     console.log("Inside addCar()!!!!");
    //     let addUrl = "/rest/add";
    //
    //     var requestHeaders = new Headers({'Content-Type': 'application/json'});
    //     var options = new RequestOptions({headers: requestHeaders});
    //
    //     this.car.logo = this.car.make + '-' + this.car.model + '.png';
    //     //this.http.post(addUrl,this.car,options).subscribe(res => this.successMessage = res.toString());
    //     this.http.post(addUrl, this.car, options).subscribe(
    //         res => {
    //             this.successMessage = res.toString();
    //             console.log(res.text());
    //             this.errorMessage=""
    //         },
    //         error => {
    //             this.errorMessage = <any>error;
    //             this.successMessage = ""
    //         });
    // }
}


