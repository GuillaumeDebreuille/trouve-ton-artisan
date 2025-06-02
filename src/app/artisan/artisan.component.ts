import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ArtisanService, Artisan } from '../artisan.service';

@Component({
  selector: 'app-artisan',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './artisan.component.html',
  styleUrl: './artisan.component.scss'
})
export class ArtisanComponent implements OnInit{
  artisan: Artisan | null = null;

  constructor(
    private route: ActivatedRoute,
    private artisanService: ArtisanService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.artisanService.getArtisans().subscribe(data => {
        this.artisan = data.find(artisan => +artisan.id === +id) || null;
      });
    }
  }

}
