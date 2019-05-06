import { Component, OnInit } from '@angular/core';

export interface Exame {
  unidadecurricular: string;
  data: String;
  horario: string;
  sala: string;
}

const ELEMENT_DATA: Exame[] = [
  {unidadecurricular: 'Projeto de Sistemas de Informação', data: new Date().toLocaleDateString('pt-PT'), horario: '12:00 - 15:00', sala: '1.2.32'},
  {unidadecurricular: 'Introdução à Programação', data: new Date().toLocaleDateString('pt-PT'), horario: '16:00 - 19:00', sala: '6.2.34'}
];

@Component({
  selector: 'app-assigned-finals',
  templateUrl: './assigned-finals.component.html',
  styleUrls: ['./assigned-finals.component.css']
})
export class AssignedFinalsComponent implements OnInit {

  displayedColumns: string[] = ['unidadecurricular', 'data', 'horario', 'sala'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
