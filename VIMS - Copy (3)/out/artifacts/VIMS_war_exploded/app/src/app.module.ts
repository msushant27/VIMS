// import {NgModule} from '@angular/core';
// import {BrowserModule} from '@angular/platform-browser';
// import {FormsModule} from '@angular/forms';
// import { HttpModule } from '@angular/http';
//
// import {CarComponent} from './car.component';
// import {LoginComponent} from './login.component';
// import {CarSearchComponent} from './carsearch.component';
// import {CarDetailSearchComponent} from "./cardetailsearch.component";
// import {SupplierComponent} from "./supplier.component";
// import {AppComponent} from "./app.component";
//
//
// @NgModule({
// 	imports:[BrowserModule,FormsModule,HttpModule],
// 	declarations:[CarComponent,LoginComponent,CarSearchComponent,CarDetailSearchComponent,SupplierComponent,AppComponent],
// 	bootstrap:[CarSearchComponent]
// })
// export class AppModule{
// }

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import {configuredRoutes} from './routes.config';


import {CarSearchComponent} from "./carsearch.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home.component";
import {SupplierSearchComponent} from "./suppliersearch.component";




@NgModule({
    imports:[BrowserModule,FormsModule,HttpModule,configuredRoutes],
    declarations:[CarSearchComponent,HomeComponent,SupplierSearchComponent,AppComponent],
    bootstrap:[AppComponent]
})
export class AppModule{
}
