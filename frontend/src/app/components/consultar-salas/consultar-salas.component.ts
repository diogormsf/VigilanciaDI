import { VigilanciaService } from './../../services/vigilancia.service';
import { SalaService } from './../../services/sala.service';
import { Component, OnInit } from '@angular/core';
import { element } from '@angular/core/src/render3';
import { Sala } from 'src/app/models/sala';
import { Vigilancia } from 'src/app/models/vigilancia';
import { Exame } from './../../models/exame';


export interface Exame {
  unidadecurricular: string;
  lotacaoNormal: String;
  lotacaoExame: string;
  sala: string;
}


@Component({
  selector: 'app-consultar-salas',
  templateUrl: './consultar-salas.component.html',
  styleUrls: ['./consultar-salas.component.css']
})
export class ConsultarSalasComponent implements OnInit {

  displayedColumns: string[] = ['unidadecurricular', 'lotacaoNormal', 'lotacaoExame', 'sala'];
  vigilancias: Vigilancia[];
  exames: Exame[];
  salaContainer: Sala[];
  auxArray: [];


  constructor(
    private SalaService: SalaService, private vigilanciaService: VigilanciaService
  ) { }

  ngOnInit() {
    this.salaContainer = [];
    this.salaContainer = [];
    this.getAllInfo();
  }

  getAllInfo() {
    this.SalaService.processSalasUnidadeCurr()[0]
    .subscribe(data => this.parseSalas(data));;
  }

  parseSalas(data): void {
    this.salaContainer = data;
    throw new Error("Method not implemented.");
  }
}
