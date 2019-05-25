import { Professor } from './../models/professor';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getAllProfessores() {
    return this.http.get<Professor[]>(`${this.uri}/getAllProfessores`)
    .pipe(map(data => data.map(elem => new Professor().deserialize(elem))));
  }

  getProfessorById(id) {
    let params = new HttpParams();
    params = params.append('id', id);

    return this.http.get<Professor[]>(`${this.uri}/getProfessorById`, { params: params })
    .pipe(map(data => data.map(elem => new Professor().deserialize(elem))));
  }
}
