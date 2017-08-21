import { Routes,RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";
import {CarSearchComponent} from "./carsearch.component";
import {SupplierSearchComponent} from "./suppliersearch.component";

let routes:Routes = [
    {path:'home',component:HomeComponent},
    {path:'add',component:SupplierSearchComponent},
    {path:'view',component:CarSearchComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'},
];

export const configuredRoutes = RouterModule.forRoot(routes);