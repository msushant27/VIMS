import {Component, OnInit} from "@angular/core";
import {Http,Headers,RequestOptions} from "@angular/http";

import {Car} from "./car";

@Component({
	selector:'vims-app',
    templateUrl:'../partials/carsearch.component.html',
    styleUrls:['../css/carSearch.component.styles.css'],
})
export class CarSearchComponent implements  OnInit{

	title:string = "Search Your Car";
	cars:Car[];
    car:Car;
	qty:number;
    successMessage: string;
    errorMessage: string;
    imageUrl:string ="images/";
    searchField:string = "";
    searchFieldValue:string = "";
    private editted: boolean=false;


    constructor(private http:Http) {

    }


    ngOnInit() {

        var searchURL = "/rest/cars";

        // console.log(this.searchField);
        // console.log(this.searchFieldValue);

        // if (this.searchField === "" && this.searchFieldValue === "") {

        // } else {
        //     searchURL = "/rest/car/" + this.searchField + "/" + this.searchFieldValue;
        // }


        var requestHeaders = new Headers({'Accept': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        this.http.get(searchURL, options).subscribe(res => {
            this.cars = res.json();
            console.log(this.cars);
        });
    }
    show(){
        this.editted=true;
    }

        searchCars() {
            console.log("Inside searchCars()!!!!");

            var  searchURL = "";

            console.log(this.searchField);
            console.log(this.searchFieldValue);

            if(this.searchField === "" && this.searchFieldValue === "") {
                searchURL = "/rest/cars";
            }else{
                searchURL = "/rest/car/"+this.searchField+"/"+this.searchFieldValue;
            }


            var requestHeaders = new Headers({'Accept': 'application/json'});
            var options = new RequestOptions({headers: requestHeaders});

            this.http.get(searchURL, options).subscribe(res => this.cars = res.json());
        }

    deleteCars( id:any,qty:number){

        console.log(" Id is " + id +"qty is" +qty);

        let deleteUrl = "/rest/delete/" + id +"/"+qty;

        this.http.delete(deleteUrl,this.car).subscribe(
            res => {
                this.successMessage = res.toString();
                console.log(res.text());
                this.errorMessage = ""
                if(this.successMessage){
                    this.searchCars();
                    window.alert("Deleted successfully!");
                }
            },
            error => {
                this.errorMessage = <any>error;
                this.successMessage = ""
            });


    }

    }



