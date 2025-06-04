import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ArtisanComponent } from './artisan/artisan.component';
import { ResultatsComponent } from './resultats/resultats.component';
import { Page404Component } from './page404/page404.component';

export const routes: Routes = [
    { path: "", component: HomeComponent},
    { path: "batiment", component: CategorieComponent},
    { path: "services", component: CategorieComponent},
    { path: "fabrication", component: CategorieComponent},
    { path: "alimentation", component: CategorieComponent},
    { path: "artisan/:id", component: ArtisanComponent, data: { renderMode: 'client-side' }},
    { path: "artisans", component: ResultatsComponent },
    { path: '**', component: Page404Component }
];
