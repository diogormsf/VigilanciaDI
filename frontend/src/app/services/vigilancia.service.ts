import { Vigilancia } from 'src/app/models/vigilancia';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VigilanciaService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getAllVigilancias() {
    return this.http.get<Vigilancia[]>(`${this.uri}/getAllVigilancias`)
    .pipe(map(data => data.map(elem => new Vigilancia().deserialize(elem))));
  }

  getVigilanciasByProfessor(id): Observable<Vigilancia[]> {
    let params = new HttpParams();

    params = params.append('idprofessor', id);

    return this.http.get<Vigilancia[]>(`${this.uri}/getVigilanciasByProfessor`, { params: params })
    .pipe(map(data => data.map(elem => new Vigilancia().deserialize(elem))));
  }

  createCalendar(epoca) {
    let params = new HttpParams();

    params = params.append('epoca', epoca);

    return this.http.get(`${this.uri}/createCalendar`, { params: params });
  }

  getVigilanciasResponsavel(id) {
    let params = new HttpParams();

    params = params.append('professorid', id);

    return this.http.get<Vigilancia[]>(`${this.uri}/getVigilanciasResponsavel`, { params: params })
    .pipe(map(data => data.map(elem => new Vigilancia().deserialize(elem))));
  }

  getVigilanciasBySemestre(semestre) {
    let params = new HttpParams();

    params = params.append('semestre', semestre);

    return this.http.get<Vigilancia[]>(`${this.uri}/getVigilanciasBySemestre`, { params: params })
    .pipe(map(data => data.map(elem => new Vigilancia().deserialize(elem))));
  }
}
