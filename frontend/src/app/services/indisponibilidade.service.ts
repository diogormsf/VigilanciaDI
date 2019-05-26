import { Indisponibilidade } from 'src/app/models/indisponibilidade';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class IndisponibilidadeService {

    uri = 'http://localhost:4000';

    constructor(private http: HttpClient) { }

    addIndisponibilidade(id, dataInicio, dataFim, descricao) {
        let params = new HttpParams();

        params = params.append('id', id);
        params = params.append('inicio', dataInicio);
        params = params.append('fim', dataFim);
        params = params.append('justificacao', descricao);

        return this.http.get(`${this.uri}/addIndisponibilidade`, { params: params })
        .pipe(map(elem => new Indisponibilidade().deserialize(elem)));
    }

    updateDisponibilidade(vigilanciaId, indisponibilidade) {
        let params = new HttpParams();

        params = params.append('vigilanciaid', vigilanciaId);
        params = params.append('indisponibilidade', indisponibilidade);

        return this.http.get<Indisponibilidade[]>(`${this.uri}/updateDisponibilidade`, { params: params })
        .pipe(map(data => data.map(elem => new Indisponibilidade().deserialize(elem))));
    }

    getIndisponibilidadebyProfessor(idProfessor) {
        let params = new HttpParams();
        params = params.append('idprofessor', idProfessor);

        //confirmar nome do serviço do lado do server
        return this.http.get<Indisponibilidade[]>(`${this.uri}/getIndisponibilidadebyProfessor`, { params: params })
        .pipe(map(data => data.map(elem => new Indisponibilidade().deserialize(elem))));
    }

    getAllIndisponibilidade() {
        return this.http.get(`${this.uri}/getAllIndisponibilidades`)
        .pipe(
            map(elem => elem['exames'].map(elem => new Indisponibilidade().deserialize(elem))),
            map(elem => new Indisponibilidade().deserialize(elem['indisponibilidade'])),
        );
    }


}
