import {Component, OnInit} from "@angular/core";
import {Http,Headers,RequestOptions} from "@angular/http";

import {Car} from "./car";

@Component({
	selector:'vims-app',
    templateUrl:'../partials/cardetailsearch.component.html',
    // styleUrls:['../css/cardetailSearch.component.styles.css'],
})
export class CarDetailSearchComponent implements  OnInit {
    ngOnInit(): void {
    }

    title: string = "Search Your Car";
    cars: Car[];
    imageUrl: string = "images/";
    searchField: string = "";
    searchFieldValue: string = "";

    constructor(private http:Http){}


}