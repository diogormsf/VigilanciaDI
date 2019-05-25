import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { ProfessorService } from './../../services/professor.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

export interface nomeProfessores {
  name: string;
}


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

  unidades: nomeProfessores[] = [
    { name: 'Mário Calha'},
    { name: 'João Inácio'},
    { name: 'Carlos Duarte'},
  ];
  
  constructor(private professorService: ProfessorService) { }


  getAllProfessores() {
    /**this.professores = this.professorService.getAllProfessores().subscribe;*/
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
  columnsToDisplay = ['name', 'dataInicio', 'dataFim'];
  expandedElement: Professores;
}

export interface Professores {
  name: string;
  dataInicio: string;
  dataFim: string;
}

// Falta colocar isto automático com service
const ELEMENT_DATA: Professores[] = [
  {
    name: 'Mário Calha', 
    dataInicio: '28.01.2019', 
    dataFim: '03.02.2019'
  },
  {
    name: 'Mário Calha', 
    dataInicio: '28.01.2019', 
    dataFim: '03.02.2019'
  },
  {
    name: 'Carlos Duarte', 
    dataInicio: '28.01.2019', 
    dataFim: '03.02.2019'
  },
  {
    name: 'Mário Calha', 
    dataInicio: '28.01.2019', 
    dataFim: '03.02.2019'
  },
  {
    name: 'Carlos Duarte', 
    dataInicio: '28.01.2019', 
    dataFim: '03.02.2019'
  },
  {
    name: 'João Inácio', 
    dataInicio: '28.01.2019', 
    dataFim: '03.02.2019'
  }
];

