import { Vigilancia } from './../../models/vigilancia';
import { VigilanciaService } from './../../services/vigilancia.service';
import { Exame } from './../../models/exame';
import { Component, OnInit } from '@angular/core';

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
    this.vigilancias = [];
    this.exames = [];
    this.fetchVigilancias();
  }

  fetchVigilancias() {
    const professorId = JSON.parse(localStorage.getItem('currentUser'))._id;
    this.vigilanciaService.getVigilanciasByProfessor(professorId)
      .subscribe(data => this.parseVigilancias(data));
  }

  parseVigilancias(data) {
    this.vigilancias = data;
    console.log('Data requested ... ');
    console.log(this.vigilancias);
    this.vigilancias.forEach(elem => {
      const vigData = new Date(elem.exame.data);
      const vigHoraIni = vigData.getHours();
      const vigHoraFim = vigHoraIni + 3;
      elem.exame.horario = `${vigHoraIni}:00--${vigHoraFim}:00`;
      this.exames.push(elem.getExame());
    });
    this.exames = [...this.exames];
  }

}
