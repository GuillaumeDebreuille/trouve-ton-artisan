import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisanService, Artisan } from '../artisan.service';

@Component({
  selector: 'app-batiment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batiment.component.html',
  styleUrl: './batiment.component.scss'
})
export class BatimentComponent implements OnInit {
  artisans: Artisan[] = [];

  constructor(private artisanService: ArtisanService) {}

  ngOnInit(): void {
    this.artisanService.getArtisans().subscribe(data => {
      this.artisans = data.filter(artisan => artisan.categorie === 'Bâtiment');
    });
  }
}

