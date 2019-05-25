import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { Exame } from '../models/exame';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExameService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getAllExames() {
    return this.http.get<Exame[]>(`${this.uri}/getAllExames`)
    .pipe(map(data => data.map(elem => new Exame().deserialize(elem))));
  }

  getExameById(id) {
    let params = new HttpParams();

    params = params.append('id', id);

    return this.http.get<Exame[]>(`${this.uri}/getExameById`, { params: params })
    .pipe(map(data => data.map(elem => new Exame().deserialize(elem))));
  }

  getExamesResponsavel(id) {
    let params = new HttpParams();

    params = params.append('professorid', id);

    return this.http.get<Exame[]>(`${this.uri}/getExamesResponsavel`, { params: params })
    .pipe(map(data => data.map(elem => new Exame().deserialize(elem))));
  }

  processSalasUnidadeCurr() {
    return forkJoin(
    /* this.http.get(`${this.uri}/getAllSalas`), */
    this.http.get(`${this.uri}/getExamesResponsavel`)
    );
  }
}
