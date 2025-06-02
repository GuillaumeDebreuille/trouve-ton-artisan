import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Artisan {
  id: number;
  name: string;
  specialty: string;
  note: number;
  location: string;
  about: string;
  email: string;
  website: string;
  category: string;
  top: boolean;
  image: string;
  alt: string;
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
