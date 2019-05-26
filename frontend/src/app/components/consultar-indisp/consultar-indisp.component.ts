import { Component, OnInit } from '@angular/core';
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
export class ConsultarIndispComponent {

  unidades: Professor[];
  indisponibilidades: Indisponibilidade[];
  columnsToDisplay = ['name', 'dataInicio', 'dataFim'];

  
  constructor(private professorService: ProfessorService) { }

  ngOnInit() {
    this.unidades = [];
    this.fetchProfessores();
  }
  
  fetchProfessores() {
    this.professorService.getAllProfessores()
      .subscribe(data => this.parseProfessores(data));
  }

  parseProfessores(data) {
    this.unidades = data;
    console.log('Data requested ... ');
    console.log(this.unidades);
  }

  filterTable(uni) {
    console.log(uni);
    this.dataSource = ELEMENT_DATA;
    function filterByUC(element, index, array) {
      return (element.name == uni);
    }
    const newDataSource = this.dataSource.filter(filterByUC);
    this.dataSource = newDataSource;
    console.log(newDataSource);
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log(tabChangeEvent);
  }

  dataSource = ELEMENT_DATA;
  expandedElement: Indisponibilidade;
}
