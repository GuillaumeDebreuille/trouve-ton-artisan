import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisanService, Artisan } from '../artisan.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  artisans : Artisan[] = [];

  constructor(private artisanService : ArtisanService) {}

  ngOnInit(): void {
    this.artisanService.getArtisans().subscribe(data => {
      this.artisans = data.filter(artisan => artisan.top === true);
    })
  }
}
