import {Component} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Router} from '@angular/router';

import {Car} from "./car";

@Component({
    selector: 'add',
    templateUrl: '../partials/car.component.html',
    styleUrls: ['../css/car.component.styles.css'],
})
export class CarComponent {

    title: string = "Add Car";
    car: Car;
    make: string[];
    model: string[];
    fieldMake: string;
    fieldModel: string;
    successMessage: string;
    errorMessage: string;

    constructor(private http: Http, private router: Router) {
        this.car = new Car('', '', 0, 0, '');
        var searchURL = "";

        searchURL = "/rest/make";

        var requestHeaders = new Headers({'Accept': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        this.http.get(searchURL, options).subscribe(res => {

            this.make = res.json();
            console.log(this.make);
        });
    }

    addCar() {
        console.log("Inside addCar()!!!!");
        let addUrl = "/rest/add";

        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        this.car.logo = this.fieldMake + '-' + this.fieldModel + '.png';
        this.car.make = this.fieldMake;
        this.car.model = this.fieldModel;
        this.http.post(addUrl, this.car, options).subscribe(
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

    getMake(event: any) {
        console.log(event);
        var searchURL = "/rest/make/" + event;
        this.fieldMake = event;

        var requestHeaders = new Headers({'Accept': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        this.http.get(searchURL, options).subscribe(res => {

            this.model = res.json();
            console.log(this.model);
        });

    }

    getModel(event: any) {
        console.log(event);
        this.fieldModel = event;

    }
}


