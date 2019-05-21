import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { MatSidenavModule, MatButtonModule, MatIconModule, MatListModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ComunicarIndispComponent } from './components/comunicar-indisp/comunicar-indisp.component';
import { AssignedFinalsComponent } from './components/assigned-finals/assigned-finals.component';
import { HomeComponent } from './components/home/home.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './components/login/login.component';
import { CreateCalendarComponent } from './components/create-calendar/create-calendar.component';

import { ProfessorService } from './professor.service';
import { ExameService } from './exame.service';
import { ConsultarVigilantesComponent } from './components/consultar-vigilantes/consultar-vigilantes.component';
import { ConsultarSalasComponent } from './components/consultar-salas/consultar-salas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MainNavComponent,
    ComunicarIndispComponent,
    AssignedFinalsComponent,
    LoginComponent,
    CreateCalendarComponent,
    ConsultarVigilantesComponent,
    ConsultarSalasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [
    ProfessorService,
    ExameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
