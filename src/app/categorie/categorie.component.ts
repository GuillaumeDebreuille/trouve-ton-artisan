import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisanService, Artisan } from '../artisan.service';
import { ActivatedRoute } from '@angular/router';
import { NameFilterPipe } from '../pipes/name-filter.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categorie',
  standalone: true,
  imports: [CommonModule, NameFilterPipe, FormsModule, RouterModule],
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.scss'
})
export class CategorieComponent implements OnInit {
  artisans: Artisan[] = [];
  recherche: string ='';
  
  constructor(
    private artisanService: ArtisanService,
    private route: ActivatedRoute 
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      const secteur = url[0].path;
      
      let categorieJson = '';
      switch(secteur) {
        case 'batiment': categorieJson = 'Bâtiment'; break;
        case 'services': categorieJson = 'Services'; break;
        case 'fabrication': categorieJson = 'Fabrication'; break;
        case 'alimentation': categorieJson = 'Alimentation'; break;
      }
      
      this.artisanService.getArtisans().subscribe(data => {
        this.artisans = data.filter(artisan => artisan.category === categorieJson); // Filtre dynamique !
      });
    });
  }
}

