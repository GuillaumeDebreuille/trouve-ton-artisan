import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Categorie {
  id: number;
  categorie: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})

export class CategorieService {
  constructor(private http: HttpClient) { }

  getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>('data/categorie.json');
  }
}
