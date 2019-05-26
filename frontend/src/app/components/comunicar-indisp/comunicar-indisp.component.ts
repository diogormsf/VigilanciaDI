import { ProfessorService } from './../../services/professor.service';
import { Component, OnInit } from '@angular/core';
import {FormControl } from '@angular/forms';
import { IndisponibilidadeService } from './../../services/indisponibilidade.service';
import { Indisponibilidade } from 'src/app/models/indisponibilidade';

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

  description: string; 
  displayedColumns: string[] = ['datacriacao', 'datainicio', 'datafim', 'descricao'];
  dataSource= ELEMENT_DATA;
  dateFrom: Date;
  dateTo: Date;


  constructor( 
    private indisponibilidadeService: IndisponibilidadeService , 
    private professorService: ProfessorService
  ){ }

  ngOnInit() {
    this.indisponibilidadeUser = [];
    //vai buscar a indisponibilidade do user logged in
    this.fetchIndisponibilidadeUSER();
  }



  //get indisponibilidade
  fetchIndisponibilidadeUSER() {
    const professorId = JSON.parse(localStorage.getItem('currentUser'))._id;
    this.indisponibilidadeService.getIndisponibilidadebyProfessor(professorId)
    .subscribe(data => this.parseIndisponibilidadeFromUser(data));;
  }
  parseIndisponibilidadeFromUser(data): void {
    this.indisponibilidadeUser = [...data];
    
  }

  //verifica com a indisponibilidades ja inseridas depois de carregar no 'mais'
  checkAndAddIndisp () {
    const professorId = JSON.parse(localStorage.getItem('currentUser'))._id;
    this.indisponibilidadeUser.forEach( indisp => {
      if (this.dateFrom.getMilliseconds < indisp.inicio.getMilliseconds && this.dateTo.getMilliseconds < indisp.inicio.getMilliseconds
         || this.dateFrom.getMilliseconds > indisp.fim.getMilliseconds && this.dateFrom.getMilliseconds > indisp.fim.getMilliseconds ) 
      {
        this.indisponibilidadeService.addIndisponibilidade(professorId, this.dateFrom, this.dateTo, this.description);
      }else{
        console.log ('insert a new date');
      }
    });
  }
}
