import { Component, OnInit } from '@angular/core';
import { element } from '@angular/core/src/render3';

export interface Exame {
  unidadecurricular: string;
  lotacaoNormal: String;
  lotacaoExame: string;
  sala: string;
}

const ELEMENT_DATA: Exame[] = [
  {
    unidadecurricular: 'Projeto de Sistemas de Informação',
    lotacaoNormal: '50', 
    lotacaoExame: '100', 
    sala: '1.2.32'
  },
  {
    unidadecurricular: 'Introdução à Programação', 
    lotacaoNormal: '50', 
    lotacaoExame: '100', 
    sala: '6.2.34'
  },
  {
    unidadecurricular: 'Projeto de Sistemas de Informação',
    lotacaoNormal: '50', 
    lotacaoExame: '100', 
    sala: '1.2.32'
  },
  {
    unidadecurricular: 'Introdução à Programação', 
    lotacaoNormal: '50', 
    lotacaoExame: '100', 
    sala: '6.2.34'
  },
  {
    unidadecurricular: 'Projeto de Sistemas de Informação',
    lotacaoNormal: '50', 
    lotacaoExame: '100', 
    sala: '1.2.32'
  },
  {
    unidadecurricular: 'Introdução à Programação', 
    lotacaoNormal: '50', 
    lotacaoExame: '100', 
    sala: '6.2.34'
  }
];

@Component({
  selector: 'app-consultar-salas',
  templateUrl: './consultar-salas.component.html',
  styleUrls: ['./consultar-salas.component.css']
})
export class ConsultarSalasComponent implements OnInit {

  displayedColumns: string[] = ['unidadecurricular', 'lotacaoNormal', 'lotacaoExame', 'sala'];
  dataSource = ELEMENT_DATA;

  

  constructor() { }

  ngOnInit() {
  }

}
