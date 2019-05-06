import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AssignedFinalsComponent } from './components/assigned-finals/assigned-finals.component';
import { ComunicarIndispComponent } from './components/comunicar-indisp/comunicar-indisp.component';
import { LoginComponent } from './components/login/login.component';
import { CreateCalendarComponent } from './components/create-calendar/create-calendar.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-calendar', component: CreateCalendarComponent },
  { path: 'assigned-finals', component: AssignedFinalsComponent },
  { path: 'comunicar-indisp', component: ComunicarIndispComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
