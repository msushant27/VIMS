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
const car_1 = require("./car");
let SupplierSearchComponent = class SupplierSearchComponent {
    constructor(http) {
        this.http = http;
        this.title = "Search Supplier";
        this.imageUrl = "images/";
        this.car = new car_1.Car('', '', 0, 0, '');
        var searchURL = "";
        searchURL = "/rest/make";
        var requestHeaders = new http_1.Headers({ 'Accept': 'application/json' });
        var options = new http_1.RequestOptions({ headers: requestHeaders });
        this.http.get(searchURL, options).subscribe(res => {
            this.makes = res.json();
            console.log(this.makes);
        });
    }
    searchCars() {
        this.editted = true;
        console.log("Inside searchCar()!!!!");
        let addUrl = "/rest/search/" + this.fieldMake + "/" + this.fieldModel;
        var requestHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: requestHeaders });
        this.http.get(addUrl, options).subscribe(res => {
            // this.successMessage = res.toString();
            this.suppliers = res.json();
            console.log(this.suppliers);
            this.errorMessage = "";
        }, error => {
            // this.errorMessage = <any>error;
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
            this.models = res.json();
            console.log(this.models);
        });
    }
    getModel(event) {
        console.log(event);
        // var searchURL = "/rest/make/"+event.t;
        this.fieldModel = event;
    }
    addCar(supplier) {
        console.log("Inside addCar()!!!!" + this.car.price);
        let addUrl = "/rest/add";
        console.log(this.car);
        console.log(supplier);
        this.car.make = this.fieldMake;
        this.car.model = this.fieldModel;
        var requestHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: requestHeaders });
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
};
SupplierSearchComponent = __decorate([
    core_1.Component({
        selector: 'supplier',
        templateUrl: '../partials/suppliersearch.component.html',
    }), 
    __metadata('design:paramtypes', [http_1.Http])
], SupplierSearchComponent);
exports.SupplierSearchComponent = SupplierSearchComponent;
//# sourceMappingURL=suppliersearch.component.js.map