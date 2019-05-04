import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'side-bar', component: SideBarComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'side-bar', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
