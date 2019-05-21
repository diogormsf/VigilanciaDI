import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExameService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getAllExames() {
    return this.http.get(`${this.uri}/getAllExames`);
  }

  getExameById(id) {
    let params = new HttpParams();

    params = params.append('id', id);

    return this.http.get(`${this.uri}/getExameById`, { params: params });
  }

  getExamesResponsavel(id) {
    let params = new HttpParams();

    params = params.append('professorid', id);

    return this.http.get(`${this.uri}/getExamesResponsavel`, { params: params });
  }
}
