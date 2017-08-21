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
let CarDeleteComponent = class CarDeleteComponent {
    constructor(http) {
        this.http = http;
        this.title = "Car Delete";
    }
    deleteCar() {
        console.log("Inside deleteCar()!!!!");
        console.log(this.vin);
        console.log(this.qty);
        let deleteUrl = "/rest/delete/" + this.vin + "/" + this.qty;
        this.http.delete(deleteUrl, this.car).subscribe(res => {
            this.successMessage = res.toString();
            console.log(res.text());
            this.errorMessage = "";
        }, error => {
            this.errorMessage = error;
            this.successMessage = "";
        });
    }
};
CarDeleteComponent = __decorate([
    core_1.Component({
        selector: 'sell',
        templateUrl: '../partials/cardelete.component.html',
        styleUrls: ['../css/carSearch.component.styles.css'],
    }), 
    __metadata('design:paramtypes', [http_1.Http])
], CarDeleteComponent);
exports.CarDeleteComponent = CarDeleteComponent;
//# sourceMappingURL=cardelete.component.js.map