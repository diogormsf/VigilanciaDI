import { Component, OnInit } from '@angular/core';
import {FormControl } from '@angular/forms';
import { IndisponibilidadeService } from './../../services/indisponibilidade.service';

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

  indisponibilidadeUser: Indisponibilidade[];

  add(){
    this.dataSource = this.dataSource.concat({
      datacriacao: new Date().toLocaleDateString('pt-PT'),
      datainicio: this.dateFrom.toLocaleDateString('pt-PT'),
      datafim: this.dateTo.toLocaleDateString('pt-PT'),
      descricao: this.description
    });
  }
  description: string; 
  displayedColumns: string[] = ['datacriacao', 'datainicio', 'datafim', 'descricao'];
  dataSource= ELEMENT_DATA;
  dateFrom: Date;
  dateTo: Date;

  constructor( private indisponibilidadeService: IndisponibilidadeService) { }

  ngOnInit() {
    this.indisponibilidadeUser = [];
    this.fetchIndisponibilidadeUSER();
  }

  fetchIndisponibilidadeUSER() {
    
  }
}
