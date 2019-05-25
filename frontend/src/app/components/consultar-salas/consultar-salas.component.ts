import { ExameService } from './../../services/exame.service';
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

  displayedColumns: string[] = ['cadeira', 'semestre', 'sala', 'lotacaoNormal', 'lotacaoExame'];
  vigilancias: Vigilancia[];
  exames: Exame[];
  salaContainer: Exame[];
  auxArray: [];


  constructor(
    private ExameService: ExameService
  ) { }

  ngOnInit() {
    this.salaContainer = [];
    this.auxArray = [];
    this.getAllInfo();
  }

  getAllInfo() {
    const professorId = JSON.parse(localStorage.getItem('currentUser')).id;
    this.ExameService.getExamesResponsavel(professorId)
    .subscribe(data => this.parseSalas(data));
  }

  parseSalas(data ): void {
    this.salaContainer = data[0];
    console.log(this.salaContainer);
    this.salaContainer.forEach(salaContainerElement => {
      if (salaContainerElement.sala.length > 1) {
          salaContainerElement.sala.forEach(salaElement => {
            this.auxArray.push({
              'cadeira': salaContainerElement.unidadecurricular.nome,
              'epoca' : salaContainerElement.semestre, 
              'sala': salaElement.localizacao,
              'lotacaoNormal': salaElement.lotacaoNormal,
              'lotacaoExame': salaElement.lotacaoExame
            });
          });
      }else{
        /* this.auxArray.push({
          cadeira: salaContainerElement.exame.unidadecurricular.nome,
          sala: salaContainerElement.exame.sala.localizacao,
          lotacaoNormal: salaContainerElement.exame.sala.lotacaoNormal,
          lotacaoExame: salaContainerElement.exame.sala.lotacaoExame
        }); */
      }
    });
    console.log(this.auxArray);
    this.auxArray = [...this.auxArray];
    throw new Error("Method not implemented.");
  }
}
