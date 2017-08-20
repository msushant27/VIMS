import {Component} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";

import {Car} from "./car";

@Component({
    selector: 'sell',
    templateUrl: '../partials/cardelete.component.html',
    styleUrls: ['../css/carSearch.component.styles.css'],
})
export class CarDeleteComponent {

    title: string = "Car Delete";
    car: Car;
    vin: number;
    qty: number;
    successMessage: string;
    errorMessage: string;

    constructor(private http:Http) {}

    deleteCar() {
        console.log("Inside deleteCar()!!!!");
        console.log(this.vin);
        console.log(this.qty);
        let deleteUrl = "/rest/delete/" + this.vin+"/"+this.qty;

        //var requestHeaders = new Headers({'Accept': 'text/plain'});
        //var options = new RequestOptions({headers: requestHeaders});

        this.http.delete(deleteUrl,this.car).subscribe(
            res => {
                this.successMessage = res.toString();
                console.log(res.text());
                this.errorMessage = ""
            },
            error => {
                this.errorMessage = <any>error;
                this.successMessage = ""
            });
    }
}