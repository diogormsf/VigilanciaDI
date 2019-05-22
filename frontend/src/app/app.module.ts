import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { MatSidenavModule, MatButtonModule, MatIconModule, MatListModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatTabsModule, MatMenuModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ComunicarIndispComponent } from './components/comunicar-indisp/comunicar-indisp.component';
import { ConsultarIndispComponent } from './components/consultar-indisp/consultar-indisp.component';
import { AssignedFinalsComponent } from './components/assigned-finals/assigned-finals.component';
import { HomeComponent } from './components/home/home.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './components/login/login.component';
import { CreateCalendarComponent } from './components/create-calendar/create-calendar.component';

import { AuthenticationService } from './services/authentication.service';
import { ExameService } from './services/exame.service';
import { IndisponibilidadeService } from './services/indisponibilidade.service';
import { ConsIndisponibilidadeService } from './services/consindisponibilidade.service';
import { ProfessorService } from './services/professor.service';
import { VigilanciaService } from './services/vigilancia.service';

import { ConsultarVigilantesComponent } from './components/consultar-vigilantes/consultar-vigilantes.component';
import { ConsultarSalasComponent } from './components/consultar-salas/consultar-salas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MainNavComponent,
    ComunicarIndispComponent,
    ConsultarIndispComponent,
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
    MatTabsModule,
    MatMenuModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService,
    ExameService,
    IndisponibilidadeService,
    ConsIndisponibilidadeService,
    ProfessorService,
    VigilanciaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
