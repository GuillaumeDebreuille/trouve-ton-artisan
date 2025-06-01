import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategorieComponent } from './categorie/categorie.component';

export const routes: Routes = [
    { path: "", component: HomeComponent},
    { path: "batiment", component: CategorieComponent},
    { path: "services", component: CategorieComponent},
    { path: "fabrication", component: CategorieComponent},
    { path: "alimentation", component: CategorieComponent}
];
