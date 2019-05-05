import { Component, OnInit } from '@angular/core';

export interface Indisponibilidade {
  datacriacao: String;
  datainicio: String;
  datafim: String;
  descricao: String;
}

const ELEMENT_DATA: Indisponibilidade[] = [
  {
    datacriacao: new Date().toLocaleDateString('pt-PT'),
    datainicio: new Date().toLocaleDateString('pt-PT'),
    datafim: new Date().toLocaleDateString('pt-PT'),
    descricao: ''
  },
  {
    datacriacao: new Date().toLocaleDateString('pt-PT'),
    datainicio: new Date().toLocaleDateString('pt-PT'),
    datafim: new Date().toLocaleDateString('pt-PT'),
    descricao: ''
  },
  {
    datacriacao: new Date().toLocaleDateString('pt-PT'),
    datainicio: new Date().toLocaleDateString('pt-PT'),
    datafim: new Date().toLocaleDateString('pt-PT'),
    descricao: ''
  },
  {
    datacriacao: new Date().toLocaleDateString('pt-PT'),
    datainicio: new Date().toLocaleDateString('pt-PT'),
    datafim: new Date().toLocaleDateString('pt-PT'),
    descricao: ''
  },
];

@Component({
  selector: 'app-comunicar-indisp',
  templateUrl: './comunicar-indisp.component.html',
  styleUrls: ['./comunicar-indisp.component.css']
})
export class ComunicarIndispComponent implements OnInit {

  displayedColumns: string[] = ['datacriacao', 'datainicio', 'datafim', 'descricao'];
  dataSource: Indisponibilidade[] = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
