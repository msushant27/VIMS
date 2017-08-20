import { Routes,RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {CarComponent} from "./car.component";
import {CarDeleteComponent} from "./cardelete.component";
import {HomeComponent} from "./home.component";
import {CarSearchComponent} from "./carsearch.component";
import {SupplierComponent} from "./supplier.component";
import {SupplierSearchComponent} from "./suppliersearch.component";

let routes:Routes = [
    {path:'home',component:HomeComponent},
    {path:'sell',component:CarDeleteComponent},
    {path:'add',component:SupplierSearchComponent},
    {path:'view',component:CarSearchComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'},
];

export const configuredRoutes = RouterModule.forRoot(routes);