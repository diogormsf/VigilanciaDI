import { VigilanciaService } from './../../services/vigilancia.service';
import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { forkJoin } from 'rxjs';
import { Vigilancia } from 'src/app/models/vigilancia';
import { UnidadeCurricular } from 'src/app/models/unidade-curricular';

@Component({
  selector: 'app-create-calendar',
  templateUrl: './create-calendar.component.html',
  styleUrls: ['./create-calendar.component.css']
})
export class CreateCalendarComponent implements OnInit {

  isGenerated: Array<boolean>;
  currIndex: number;
  displayedColumns: string[] = ['professor', 'data', 'epoca'];
  dataSource: Vigilancia[][];
  fixedDataSource: Vigilancia[][];
  unidades: UnidadeCurricular[];

  constructor(
    private vigilanciaService: VigilanciaService,
  ) { }

  ngOnInit() {
    this.isGenerated = [false, false];
    this.currIndex = 0;
    this.dataSource = [[], []];
    this.fixedDataSource = [[], []];

    const getVigilanciasSemestre1 = this.vigilanciaService.getVigilanciasBySemestre(1);
    const getVigilanciasSemestre2 = this.vigilanciaService.getVigilanciasBySemestre(2);
    const getUnidadesCurriculares = this.vigilanciaService.getAllUnidadesCurriculares();

    forkJoin([getVigilanciasSemestre1, getVigilanciasSemestre2, getUnidadesCurriculares]).subscribe(results => {
      this.parseUnidadesCurriculares(results[2]);
      if (results[0].length > 0) {
        this.parseVigilancias(results[0], 0);
      }
      if (results[1].length > 0) {
        this.parseVigilancias(results[1], 1);
      }
    });
  }

  parseUnidadesCurriculares(unidadesCurr) {
    this.unidades = [...unidadesCurr];
    console.log(this.unidades);
  }

  parseVigilancias(vigilancias, index) {
    this.dataSource[index] = vigilancias;
    this.dataSource = [...this.dataSource];
    this.fixedDataSource = [...this.dataSource];
    this.isGenerated[index] = true;
    this.isGenerated = [...this.isGenerated];
    console.log(this.dataSource);
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.currIndex = tabChangeEvent.index;
  }

  generateCalendar() {
    this.vigilanciaService.getVigilanciasBySemestre(1)
    .subscribe(data => {
      this.parseVigilancias(data, this.currIndex);
    });
  }

  filterTable(uni) {
    this.dataSource = [...this.fixedDataSource];
    function filterByUC(element) {
      return (element.exame.unidadecurricular.nome === uni);
    }
    const newDataSource = this.dataSource[this.currIndex].filter(filterByUC);
    this.dataSource[this.currIndex] = newDataSource;
  }

}
