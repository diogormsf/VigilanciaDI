import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getAllProfessores() {
    return this.http.get(`${this.uri}/getAllProfessores`);
  }

  getProfessorById(id) {
    let params = new HttpParams();

    params = params.append('id', id);

    return this.http.get(`${this.uri}/getProfessorById`, { params: params })
  }
}
