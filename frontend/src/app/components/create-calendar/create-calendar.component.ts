import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';

export interface UnidadeCurricular {
  name: string;
}

export interface Vigilancia {
  unidadecurricular: string;
  professor: string;
  data: string;
  epoca: Number;
}

const DATA: Vigilancia[] = [
  { unidadecurricular: 'Sistemas Distribuidos', professor: 'Mário Calha', data: new Date().toLocaleDateString('pt-PT'), epoca: 1 },
  { unidadecurricular: 'Sistemas Distribuidos', professor: 'Mário Calha', data: new Date().toLocaleDateString('pt-PT'), epoca: 2 },
  { unidadecurricular: 'Projeto de Sistemas de Informação', professor: 'Carlos Duarte', data: new Date().toLocaleDateString('pt-PT'), epoca: 1 },
  { unidadecurricular: 'Projeto de Sistemas de Informação', professor: 'Carlos Duarte', data: new Date().toLocaleDateString('pt-PT'), epoca: 2 },
];

@Component({
  selector: 'app-create-calendar',
  templateUrl: './create-calendar.component.html',
  styleUrls: ['./create-calendar.component.css']
})
export class CreateCalendarComponent implements OnInit {

  isGenerated: Array<boolean>;
  currIndex: number;
  displayedColumns: string[] = ['professor', 'data', 'epoca'];
  dataSource = DATA;

  constructor() { }

  ngOnInit() {
    this.isGenerated = [false, false];
    this.currIndex = 0;


  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.currIndex = tabChangeEvent.index;
  }

  unidades: UnidadeCurricular[] = [
    { name: 'Principios da Programação' },
    { name: 'Projeto de Sistemas de Informação' },
    { name: 'Sistemas Distribuidos' }
  ];

  generateCalendar() {
    this.isGenerated[this.currIndex] = true;
  }

  filterTable(uni) {
    console.log(uni);
    this.dataSource = DATA;
    function filterByUC(element, index, array) {
      return (element.unidadecurricular === uni);
    }
    const newDataSource = this.dataSource.filter(filterByUC);
    this.dataSource = newDataSource;
    console.log(newDataSource);
  }

}
