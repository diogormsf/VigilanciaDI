import { Component, OnInit } from '@angular/core';
import {FormControl } from '@angular/forms';
import { Indisponibilidade } from './../../models/indisponibilidade';
import { IndisponibilidadeService } from './../../services/indisponibilidade.service';


@Component({
  selector: 'app-comunicar-indisp',
  templateUrl: './comunicar-indisp.component.html',
  styleUrls: ['./comunicar-indisp.component.css']
})
export class ComunicarIndispComponent implements OnInit {

  description: string; 

  displayedColumns: string[] = ['inicio', 'fim', 'justificacao'];
  indisponibilidades;

  professorId;

  dateFrom: Date;
  dateTo: Date;

  constructor(private indisponibilidadeService: IndisponibilidadeService) { }
  
  ngOnInit() {
    this.professorId = JSON.parse(localStorage.getItem('currentUser'))._id;
    this.indisponibilidades = [];
    this.fetchIndisponibilidades();
    console.log(this.indisponibilidades);
  }

  fetchIndisponibilidades() {
    this.indisponibilidadeService.getIndisponibilidadeByProfessor(this.professorId)
      .subscribe(data => this.parseIndisponibilidades(data));
  }

  parseIndisponibilidades(data) {
    this.indisponibilidades = data;
    this.indisponibilidades.forEach(function(elem){
      elem.inicio = elem.inicio.split('T')[0];
      elem.fim = elem.fim.split('T')[0];
    });
    console.log('Data requested ... ');
    console.log(this.indisponibilidades);
  }

  parseAdd(data) {
    this.indisponibilidades = this.indisponibilidades.concat(data);
    this.indisponibilidades.forEach(function(elem){
      elem.inicio = elem.inicio.split('T')[0];
      elem.fim = elem.fim.split('T')[0];
    });
    console.log('Data requested ... ');
    console.log(this.indisponibilidades);
  }

  add(){
   this.indisponibilidadeService.addIndisponibilidade(this.professorId,
    this.dateFrom,
    this.dateTo,
    this.description)
    .subscribe(data => this.parseAdd(data));
  }
}
