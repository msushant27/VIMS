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
const core_1 = require('@angular/core');
const platform_browser_1 = require('@angular/platform-browser');
const forms_1 = require('@angular/forms');
const http_1 = require('@angular/http');
const routes_config_1 = require('./routes.config');
const carsearch_component_1 = require("./carsearch.component");
const app_component_1 = require("./app.component");
const home_component_1 = require("./home.component");
const suppliersearch_component_1 = require("./suppliersearch.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, routes_config_1.configuredRoutes],
        declarations: [carsearch_component_1.CarSearchComponent, home_component_1.HomeComponent, suppliersearch_component_1.SupplierSearchComponent, app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map