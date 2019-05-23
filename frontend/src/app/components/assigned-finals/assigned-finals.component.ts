import { VigilanciaService } from './../../services/vigilancia.service';
import { Exame } from './../../models/exame';
import { Component, OnInit } from '@angular/core';
import { Vigilancia } from 'src/app/models/vigilancia';

@Component({
  selector: 'app-assigned-finals',
  templateUrl: './assigned-finals.component.html',
  styleUrls: ['./assigned-finals.component.css']
})
export class AssignedFinalsComponent implements OnInit {

  displayedColumns: string[] = ['unidadecurricular', 'data', 'horario', 'sala'];
  vigilancias: Vigilancia[];
  exames: Exame[];

  constructor(
    private vigilanciaService: VigilanciaService
  ) { }

  ngOnInit() {
    this.fetchVigilancias();
    this.getExamesFromVigilancias();
    console.log(this.exames);
  }

  fetchVigilancias() {
    const professorId = JSON.parse(localStorage.getItem('currentUser')).id;
    this.vigilanciaService.getVigilanciasByProfessor(professorId)
    .subscribe((data: Vigilancia[]) => {
      console.log(data);
      this.vigilancias = data;
      console.log('Data requested ... ');
      console.log(this.vigilancias);
    });
  }

  getExamesFromVigilancias() {
    this.vigilancias.forEach(elem => {
      this.exames.push(elem.exame);
    });
  }

}
