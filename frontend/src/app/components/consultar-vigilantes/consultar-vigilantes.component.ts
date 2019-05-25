import { Component, OnInit } from '@angular/core';
import { Exame } from 'src/app/models/exame';
import { VigilanciaService } from 'src/app/services/vigilancia.service';
import { Vigilancia } from 'src/app/models/vigilancia';

@Component({
  selector: 'app-consultar-vigilantes',
  templateUrl: './consultar-vigilantes.component.html',
  styleUrls: ['./consultar-vigilantes.component.css']
})
export class ConsultarVigilantesComponent implements OnInit {

  displayedColumns: string[] = ['unidadecurricular', 'data', 'sala', 'nomeVigi'];
  vigilancias: Vigilancia[];

  constructor(
    private vigilanciaService: VigilanciaService
  ) { }

  ngOnInit() {
    this.vigilancias = [];
    this.fetchVigilancias();
  }

  fetchVigilancias() {
    const professorId = JSON.parse(localStorage.getItem('currentUser'))._id;
    this.vigilanciaService.getVigilanciasResponsavel(professorId)
      .subscribe(data => this.parseVigilancias(data));
  }

  parseVigilancias(data) {
    this.vigilancias = [...data];
  }

}
