import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { Filmes } from '../models/filmes';



const url = 'http://localhost:3000/filmes/';

@Injectable({
  providedIn: 'root'
})

export class FilmesService {

  dataChange: BehaviorSubject<Filmes[]> = new BehaviorSubject<Filmes[]>([]);
 
  constructor(private http: HttpClient) { }


  

  pegarTodos(): Observable<Filmes[]> {
    return this.http.get<Filmes[]>(url);
    
  }


  selecionar(id: number): Observable<Filmes> {
    return this.http.get<Filmes>(url + id);
  }
}
