import { GraficosIndexComponent } from './components/graficos/graficos-index/graficos-index.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PensumsService } from './services/pensums.service';
import { GraficosService } from './services/graficos.service';
import { VotosService } from './services/votos.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { PensumsEditComponent } from './components/pensums/pensums-edit/pensums-edit.component';
import { PensumsCreateComponent } from './components/pensums/pensums-create/pensums-create.component';
import { PensumsIndexComponent } from './components/pensums/pensums-index/pensums-index.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DashboardCoordinadorComponent } from './components/dashboard-coordinador/dashboard-coordinador.component';
import { DashboardOptionComponent } from './components/dashboard-option/dashboard-option.component';
import { DashboardAdministradorComponent } from './components/dashboard-administrador/dashboard-administrador.component';
import { DashboardAlumnoComponent } from './components/dashboard-alumno/dashboard-alumno.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CrearEncuestaComponent } from './components/encuestas/crear-encuesta/crear-encuesta.component';
import { WeekDaySelectorComponent } from './components/week-day-selector/week-day-selector.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {UsuariosService} from './services/usuarios.service';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { LogoutComponent } from './components/logout/logout.component';
import {EncuestaService} from './services/encuesta.service';
import { ListaEncuestasComponent } from './components/encuestas/lista-encuestas/lista-encuestas.component';
import { CatedraticosService } from './services/catedraticos.service';
import { EncuestasCerradasComponent } from './components/encuestas/encuestas-cerradas/encuestas-cerradas.component';
import { PerfilComponent } from './components/dashboard-alumno/perfil/perfil.component';
import { ClasesCursadasComponent } from './components/dashboard-alumno/clases-cursadas/clases-cursadas.component';
import { EncuestasPendientesComponent } from './components/dashboard-alumno/encuestas-pendientes/encuestas-pendientes.component';
import { EncuestasCompletarComponent } from './components/dashboard-alumno/encuestas-completar/encuestas-completar.component';
import {RoutingSettingsGuard} from './routingSettings';
import { ClasesComponent } from './components/pensums/clases/clases.component';
import { ListaClasesComponent } from './components/pensums/clases/lista-clases/lista-clases.component';
import { ListarusuarioscoordinadoresComponent } from './components/dashboard-administrador/listarusuarioscoordinadores/listarusuarioscoordinadores.component';
import { CrearusuarioscoordinadoresComponent } from './components/dashboard-administrador/crearusuarioscoordinadores/crearusuarioscoordinadores.component';
import { VotosListaComponent } from './components/votos-lista/votos-lista.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const  routes: Routes = [
  {
    path: 'create',
    component: PensumsCreateComponent
  },
  {
    path: 'edit/:id',
    component: PensumsEditComponent
  },
  {
    path: 'pensum/lista',
    component: PensumsIndexComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'coordinador',
    component: DashboardCoordinadorComponent
  },
  {
    path: 'administrador',
    component: DashboardAdministradorComponent
  },
  {
    path: 'dashboard',
    component: DashboardAlumnoComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'encuesta/crear',
    component: CrearEncuestaComponent
  },
  {
    path: 'graficos/:id',
    component: GraficosIndexComponent
  },
  {
    path:'encuesta/lista',
    component: ListaEncuestasComponent
  },
  {
    path:'encuesta/listar',
    component: EncuestasCerradasComponent
  },
  {
    path:'dashboard/perfil',
    component: PerfilComponent
  },
  {
    path:'dashboard/perfil/clasesCursadas',
    component: ClasesCursadasComponent
  },
  {
    path:'dashboard/encuesta',
    component: EncuestasPendientesComponent
  },

  {
    path:'dashboard/encuesta/completar/:id',
    component: EncuestasCompletarComponent
  },
  { path: '',canActivate: [RoutingSettingsGuard],  component: LoginComponent, pathMatch: 'full' },

  {
    path:'pensum/clases/lista/:id',
    component: ListaClasesComponent
  },
  {
    path:'pensum/clases/crear',
    component: ClasesComponent
  },
  {
    path:'usuarios',
    component: ListarusuarioscoordinadoresComponent
  },
  {
    path:'usuario/crear',
    component: CrearusuarioscoordinadoresComponent
  }
  
];
@NgModule({
  declarations: [
    AppComponent,
    PensumsEditComponent,
    PensumsCreateComponent,
    PensumsIndexComponent,
    LoginComponent,
    NavBarComponent,
    DashboardCoordinadorComponent,
    DashboardOptionComponent,
    DashboardAdministradorComponent,
    DashboardAlumnoComponent,
    SignUpComponent,
    CrearEncuestaComponent,
    WeekDaySelectorComponent,
    LogoutComponent,
    GraficosIndexComponent,
    ListaEncuestasComponent,
    EncuestasCerradasComponent,
    PerfilComponent,
    ClasesCursadasComponent,
    EncuestasPendientesComponent,
    EncuestasCompletarComponent,
    ClasesComponent,
    ListaClasesComponent,
    ListarusuarioscoordinadoresComponent,
    CrearusuarioscoordinadoresComponent,
    VotosListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    SlimLoadingBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaterialTimepickerModule.forRoot(),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
],
  providers: [
    PensumsService, 
    UsuariosService,
    EncuestaService,
    CatedraticosService,
    VotosService,
    RoutingSettingsGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi:true
    },
    GraficosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }