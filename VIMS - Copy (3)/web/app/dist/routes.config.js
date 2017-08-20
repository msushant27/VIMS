"use strict";
const router_1 = require('@angular/router');
const cardelete_component_1 = require("./cardelete.component");
const home_component_1 = require("./home.component");
const carsearch_component_1 = require("./carsearch.component");
const suppliersearch_component_1 = require("./suppliersearch.component");
let routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'sell', component: cardelete_component_1.CarDeleteComponent },
    { path: 'add', component: suppliersearch_component_1.SupplierSearchComponent },
    { path: 'view', component: carsearch_component_1.CarSearchComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
exports.configuredRoutes = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=routes.config.js.map