import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatTabChangeEvent } from '@angular/material';
import { Professor } from './../../models/professor';
import { Indisponibilidade } from './../../models/indisponibilidade';
import { ProfessorService } from './../../services/professor.service';
import { IndisponibilidadeService } from './../../services/indisponibilidade.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-consultar-indisp',
  templateUrl: './consultar-indisp.component.html',
  styleUrls: ['./consultar-indisp.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ConsultarIndispComponent implements OnInit{

  professores: Professor[];
  indisponibilidades;
  auxInd: Indisponibilidade[];
  displayedColumns: string[] = ['docente', 'inicio', 'fim'];
  expandedElement: Indisponibilidade | null;

  constructor(private professorService: ProfessorService,
    private indisponibilidadeService: IndisponibilidadeService,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.professores = [];
    this.indisponibilidades = [];
    this.auxInd = [];
    this.fetchProfessores();
    this.fetchIndisponibilidades();
    console.log(this.indisponibilidades);
  }

  formatDate(date){
    date = date.split('T')[0];
  }

  fetchProfessores() {
    this.professorService.getAllProfessores()
      .subscribe(data => this.parseProfessores(data));
  }

  fetchIndisponibilidades() {
    this.indisponibilidadeService.getAllIndisponibilidade()
      .subscribe(data => this.parseIndisponibilidades(data));
  }

  parseProfessores(data) {
    this.professores = data;
    console.log('Data requested ... ');
    console.log(this.professores);
  }

  parseIndisponibilidades(data) {
    this.indisponibilidades = data;
    this.indisponibilidades.forEach(function(elem){
      elem.indisponibilidade.inicio = elem.indisponibilidade.inicio.split('T')[0];
      elem.indisponibilidade.fim = elem.indisponibilidade.fim.split('T')[0];
    });
    this.auxInd = data;
    console.log('Data requested ... ');
    console.log(this.indisponibilidades);
  }

  filterTable(uni) {
    this.indisponibilidades = this.auxInd;
    function filterByUC(element, index, array) {
      console.log(uni);
      console.log(element.indisponibilidade.professor._id);
      return ('' + element.indisponibilidade.professor._id === '' + uni);
    }
    const newDataSource = this.indisponibilidades.filter(filterByUC);
    this.indisponibilidades = newDataSource;
    console.log(newDataSource);
  }
}
