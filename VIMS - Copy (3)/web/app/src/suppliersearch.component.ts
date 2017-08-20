import {Component} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";

import {Supplier} from "./supplier";
import {Car} from "./car";
import {DataService} from "./dataservice.service";

@Component({
    selector: 'supplier',
    templateUrl: '../partials/suppliersearch.component.html',
    styleUrls:['../css/suppliersearch.component.styles.css'],
})

export class SupplierSearchComponent {

    title: string = "Search Supplier";
    suppliers: Supplier[];
    supplier: Supplier;
    successMessage: string;
    errorMessage: string;
    supplier_make: string;
    supplier_model: string;
    imageUrl: string = "images/";

    car: Car;
    makes: string[];
    models: string[];
    fieldMake: string;
    fieldModel: string;
    quantity:number;
    private editted: boolean;

    constructor(private http: Http) {
        this.car = new Car('', '', 0, 0, '');
        var searchURL = "";

        searchURL = "/rest/make";

        var requestHeaders = new Headers({'Accept': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        this.http.get(searchURL, options).subscribe(res => {

            this.makes = res.json();
            console.log(this.makes);
        });
    }

    searchCars() {
        this.editted=true;
        console.log("Inside searchCar()!!!!" );
        let addUrl = "/rest/search/" + this.fieldMake + "/" + this.fieldModel;

        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        this.http.get(addUrl, options).subscribe(
            res => {
                // this.successMessage = res.toString();
                this.suppliers = res.json();
                console.log(this.suppliers);
                // if(this.suppliers.length==0){
                //     this.editted=false;
                //     window.alert("No record found!!");
                // }
                this.errorMessage = ""
            },
            error => {
                // this.errorMessage = <any>error;
                this.successMessage = ""
                if(this.errorMessage){
                    window.alert("No records found!!!");
                }
            });
    }

    getMake(event: any) {
        console.log(event);
        var searchURL = "/rest/make/" + event;
        this.fieldMake = event;

        var requestHeaders = new Headers({'Accept': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        this.http.get(searchURL, options).subscribe(res => {

            this.models = res.json();
            console.log(this.models);
        });

    }

    getModel(event: any) {

        console.log(event);
        // var searchURL = "/rest/make/"+event.t;
        this.fieldModel = event;


    }

    addCar(supplier_price:any) {
        console.log("Inside addCar()!!!!"+ this.car.price);
        let addUrl = "/rest/add";

        console.log(this.car);
        console.log(supplier_price);


        this.car.make = this.fieldMake;
        this.car.model = this.fieldModel;
        this.car.price=supplier_price;
        this.car.logo=this.car.make + '-'+this.car.model+'.png';

        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        //this.http.post(addUrl,this.car,options).subscribe(res => this.successMessage = res.toString());
        this.http.post(addUrl, this.car, options).subscribe(
            res => {
                this.successMessage = res.toString();
                if(this.successMessage){
                    window.alert("Added successfully!!");
                }
                console.log(res.text());
                this.errorMessage = ""
            },
            error => {
                this.errorMessage = <any>error;
                this.successMessage = ""
            });
    }
}