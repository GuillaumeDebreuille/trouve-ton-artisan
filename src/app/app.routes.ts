import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BatimentComponent } from './batiment/batiment.component';
import { ServicesComponent } from './services/services.component';
import { FabricationComponent } from './fabrication/fabrication.component';
import { AlimentationComponent } from './alimentation/alimentation.component';

export const routes: Routes = [
    { path: "", component: HomeComponent},
    { path: "batiment", component: BatimentComponent},
    { path: "services", component: ServicesComponent},
    { path: "fabrication", component: FabricationComponent},
    { path: "alimentation", component: AlimentationComponent}
];
