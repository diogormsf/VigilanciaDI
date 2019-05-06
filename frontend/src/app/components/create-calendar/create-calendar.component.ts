import { Component, OnInit } from '@angular/core';

export interface UnidadeCurricular {
  name: string;
}

export interface Vigilancia {
  unidadecurricular:string;
  professor: string;
  data: Date;
  epoca: Number;
}

const DATA: Vigilancia[] = [
  {unidadecurricular: 'Sistemas Distribuidos',professor: 'Mário Calha', data: new Date(), epoca: 1},
  {unidadecurricular: 'Sistemas Distribuidos',professor: 'Mário Calha', data: new Date(), epoca: 2},
  {unidadecurricular: 'Projeto de Sistemas de Informação',professor: 'Carlos Duarte', data: new Date(), epoca: 1},
  {unidadecurricular: 'Projeto de Sistemas de Informação',professor: 'Carlos Duarte', data: new Date(), epoca: 2},
];

@Component({
  selector: 'app-create-calendar',
  templateUrl: './create-calendar.component.html',
  styleUrls: ['./create-calendar.component.css']
})
export class CreateCalendarComponent implements OnInit {

  isGenerated = false;

  unidades: UnidadeCurricular[] = [
    {name: 'Principios da Programação'},
    {name: 'Projeto de Sistemas de Informação'},
    {name: 'Sistemas Distribuidos'}
  ];

  generate() {
    this.isGenerated = true;
  }

  filterTable(uni) {
    console.log(uni);
    this.dataSource = DATA;
    function filterByUC(element, index, array) {
      return (element.unidadecurricular == uni); 
    }
    const newDataSource = this.dataSource.filter(filterByUC); 
    this.dataSource = newDataSource;
    console.log(newDataSource);
  }

  displayedColumns: string[] = ['professor', 'data','epoca'];
  dataSource = DATA;

  constructor() { }

  ngOnInit() {
  }

}
