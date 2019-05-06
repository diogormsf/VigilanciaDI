import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getProfessores () {
    return this.http.get(`${this.uri}/professores`);
  }

  getProfessorByID(id) {
    return this.http.get(`${this.uri}/professores/${id}`);
  }

  addProfessor(nome, estatuto) {
    const professor = {
      nome: nome,
      estatuto: estatuto
    };
    return this.http.post(`${this.uri}/professores/add`, professor);
  }

  //update - n implementado
  /*
  updateProfessor(id, nome, estatuto) {
    const professor = {
      nome: nome,
      estatuto: estatuto
    };
    return this.http.post(`${this.uri}/professores/update/${id}`, professor);
  }
  */

  deleteProfessor(id) {
    return this.http.get(`$this.uri/professores/delete/${id}`);
  }
}
