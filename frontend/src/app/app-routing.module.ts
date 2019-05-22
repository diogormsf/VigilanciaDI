import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AssignedFinalsComponent } from './components/assigned-finals/assigned-finals.component';
import { ComunicarIndispComponent } from './components/comunicar-indisp/comunicar-indisp.component';
import { ConsultarIndispComponent } from './components/consultar-indisp/consultar-indisp.component';
import { LoginComponent } from './components/login/login.component';
import { CreateCalendarComponent } from './components/create-calendar/create-calendar.component';
import { CommonModule } from '@angular/common';
import { ConsultarVigilantesComponent } from './components/consultar-vigilantes/consultar-vigilantes.component';
import { ConsultarSalasComponent } from './components/consultar-salas/consultar-salas.component';

import { AuthGuard } from './guards/auth.guard'


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'create-calendar', component: CreateCalendarComponent, canActivate: [AuthGuard] },
  { path: 'assigned-finals', component: AssignedFinalsComponent, canActivate: [AuthGuard] },
  { path: 'comunicar-indisp', component: ComunicarIndispComponent, canActivate: [AuthGuard] },
  { path: 'consultar-vigilantes', component: ConsultarVigilantesComponent, canActivate: [AuthGuard] },
  { path: 'consultar-salas', component: ConsultarSalasComponent, canActivate: [AuthGuard] },
  { path: 'consultar-indisp', component: ConsultarIndispComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
