import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Vigilancia } from 'src/app/models/vigilancia';
import { map } from 'rxjs/internal/operators/map';
import { Observable, forkJoin } from 'rxjs';
import { Exame } from '../models/exame';


@Injectable({
  providedIn: 'root'
})

export class SalaService {

  uri = 'http://localhost:4000';

  constructor( private http: HttpClient) { }

  getAllSalas() {
    return this.http.get(`${this.uri}/getAllSalas`);
  }

 

}
