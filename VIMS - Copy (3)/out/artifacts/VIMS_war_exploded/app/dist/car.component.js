"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const router_1 = require('@angular/router');
const car_1 = require("./car");
let CarComponent = class CarComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.title = "Add Car";
        //this.car = new Car('Audi','A4',4300000,'audi-a4.png',10);
        this.car = new car_1.Car('', '', 0, 0, '');
        var searchURL = "";
        searchURL = "/rest/make";
        var requestHeaders = new http_1.Headers({ 'Accept': 'application/json' });
        var options = new http_1.RequestOptions({ headers: requestHeaders });
        this.http.get(searchURL, options).subscribe(res => {
            this.make = res.json();
            console.log(this.make);
        });
    }
    addCar() {
        console.log("Inside addCar()!!!!");
        let addUrl = "/rest/add";
        var requestHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: requestHeaders });
        this.car.logo = this.fieldMake + '-' + this.fieldModel + '.png';
        this.car.make = this.fieldMake;
        this.car.model = this.fieldModel;
        //this.http.post(addUrl,this.car,options).subscribe(res => this.successMessage = res.toString());
        this.http.post(addUrl, this.car, options).subscribe(res => {
            this.successMessage = res.toString();
            console.log(res.text());
            this.errorMessage = "";
        }, error => {
            this.errorMessage = error;
            this.successMessage = "";
        });
    }
    getMake(event) {
        console.log(event);
        var searchURL = "/rest/make/" + event;
        this.fieldMake = event;
        var requestHeaders = new http_1.Headers({ 'Accept': 'application/json' });
        var options = new http_1.RequestOptions({ headers: requestHeaders });
        this.http.get(searchURL, options).subscribe(res => {
            this.model = res.json();
            console.log(this.model);
        });
    }
    getModel(event) {
        console.log(event);
        // var searchURL = "/rest/make/"+event.t;
        this.fieldModel = event;
        // var requestHeaders = new Headers({'Accept': 'application/json'});
        // var options = new RequestOptions({headers: requestHeaders});
        //
        // this.http.get(searchURL, options).subscribe(res => {
        //
        //     this.model = res.json();
        //     console.log(this.model);
        // }) ;
    }
};
CarComponent = __decorate([
    core_1.Component({
        selector: 'add',
        templateUrl: '../partials/car.component.html',
        styleUrls: ['../css/car.component.styles.css'],
    }), 
    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
], CarComponent);
exports.CarComponent = CarComponent;
//# sourceMappingURL=car.component.js.map