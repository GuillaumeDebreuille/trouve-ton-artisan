import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Artisan {
  id: number;
  nom: string;
  metier: string;
  categorie: string;
  note: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})

export class ArtisanService {
  constructor(private http: HttpClient) { }

  getArtisans(): Observable<Artisan[]> {
    return this.http.get<Artisan[]>('data/artisans.json');
  }
}
