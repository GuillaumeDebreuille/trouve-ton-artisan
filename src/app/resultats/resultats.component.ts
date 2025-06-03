import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ArtisanService, Artisan } from '../artisan.service';
import { NameFilterPipe } from '../pipes/name-filter.pipe';

@Component({
  selector: 'app-resultats',
  standalone: true,
  imports: [CommonModule, RouterModule, NameFilterPipe],
  templateUrl: './resultats.component.html',
  styleUrl: './resultats.component.scss'
})
export class ResultatsComponent implements OnInit {
  artisans : Artisan[] = [];
  terme : string = '';

  constructor(
    private route : ActivatedRoute,
    private artisanService : ArtisanService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.terme = params ['search'] || '';

      this.artisanService.getArtisans().subscribe(data => {
        const pipe = new NameFilterPipe();
        this.artisans = pipe.transform(data, this.terme);
      })
    })
  }
}
