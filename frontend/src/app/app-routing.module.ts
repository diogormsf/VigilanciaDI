import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AssignedFinalsComponent } from './components/assigned-finals/assigned-finals.component';
import { ComunicarIndispComponent } from './components/comunicar-indisp/comunicar-indisp.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
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
