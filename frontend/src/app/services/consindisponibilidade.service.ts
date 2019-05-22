import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ConsIndisponibilidadeService {

    uri = 'http://localhost:4000';

    constructor(private http: HttpClient) { }

    addIndisponibilidade(id, dataInicio, dataFim, descricao) {
        let params = new HttpParams();

        params = params.append('id', id);
        params = params.append('inicio', dataInicio);
        params = params.append('fim', dataFim);
        params = params.append('justificacao', descricao);

        return this.http.get(`${this.uri}/consultarIndisponibilidade`, { params: params });
    } 

    updateDisponibilidade(vigilanciaId, consindisponibilidade) {
        let params = new HttpParams();

        params = params.append('vigilanciaid', vigilanciaId);
        params = params.append('consindisponibilidade', consindisponibilidade);

        return this.http.get(`${this.uri}/updateConsDisponibilidade`, { params: params });
    }
}
