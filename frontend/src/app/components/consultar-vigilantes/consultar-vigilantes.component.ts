import { Component, OnInit } from '@angular/core';


export interface Exame {
  unidadecurricular: string;
  data: String;
  nomeVigi: string;
  sala: string;
}

const ELEMENT_DATA: Exame[] = [
  {
    unidadecurricular: 'Projeto de Sistemas de Informação',
    data: new Date().toLocaleDateString('pt-PT'), 
    nomeVigi: 'Inocêncio Coitadinho', 
    sala: '1.2.32'
  },
  {
    unidadecurricular: 'Introdução à Programação', 
    data: new Date().toLocaleDateString('pt-PT'), 
    nomeVigi: 'Sr.Tobias', 
    sala: '6.2.34'
  }
];

@Component({
  selector: 'app-consultar-vigilantes',
  templateUrl: './consultar-vigilantes.component.html',
  styleUrls: ['./consultar-vigilantes.component.css']
})
export class ConsultarVigilantesComponent implements OnInit {

  displayedColumns: string[] = ['unidadecurricular', 'data', 'nomeVigi', 'sala'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
