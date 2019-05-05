import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExameService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getExames () {
    return this.http.get(`${this.uri}/Exames`);
  }

  getExameByID(id) {
    return this.http.get(`${this.uri}/Exames/${id}`);
  }

  addExame(codigo, disciplina, semestre, epoca, data, dia, inicio, fim, sala) {
    const Exame = {
      codigo: codigo,
      disciplina: disciplina,
      semestre: semestre,
      epoca: epoca,
      data: data,
      dia: dia,
      inicio: inicio,
      fim: fim,
      sala: sala
    };
    return this.http.post(`${this.uri}/Exames/add`, Exame);
  }

  //update - n implementado
  /*
  updateExame(id, codigo, disciplina, semestre, epoca, data, dia, inicio, fim, sala) {
    const Exame = {
      codigo: codigo,
      disciplina: disciplina,
      semestre: semestre,
      epoca: epoca,
      data: data,
      dia: dia,
      inicio: inicio,
      fim: fim,
      sala: sala
    };
    return this.http.post(`${this.uri}/Exames/update/${id}`, Exame);
  }
  */

  deleteExame(id) {
    return this.http.get(`$this.uri/Exames/delete/${id}`);
  }
}
