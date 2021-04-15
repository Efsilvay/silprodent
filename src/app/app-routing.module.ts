import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { BlankComponent } from './components/blank/blank.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './utils/guards/auth.guard';
import { NonAuthGuard } from './utils/guards/non-auth.guard';


// vistas ordenes

import { TodasComponent } from './components/ordenes/todas/todas.component';
import { DespachadasComponent } from './components/ordenes/despachadas/despachadas.component';
import { EnProcesoComponent } from './components/ordenes/en-proceso/en-proceso.component';
import { InformadasComponent } from './components/ordenes/informadas/informadas.component';
import { RecepcionadasComponent } from './components/ordenes/recepcionadas/recepcionadas.component';
import { RevisionComponent } from './components/ordenes/revision/revision.component';
import { TerminadasComponent } from './components/ordenes/terminadas/terminadas.component';
import { IngresarComponent } from './components/ordenes/ingresar/ingresar.component';
import { EditarOrdenComponent } from './components/ordenes/editar-orden/editar-orden.component';

// vistas laboratorio
import { TodosComponent } from './components/laboratoristas/todos/todos.component';
import { TrabajosComponent } from './components/laboratoristas/trabajos/trabajos.component';
import { AgregarComponent } from './components/laboratoristas/agregar/agregar.component';
import { EditarComponent } from './components/laboratoristas/editar/editar.component';

// vistas clientes
import { ClinicasComponent } from './components/clientes/clinicas/clinicas.component';
import { AgregarClinicasComponent } from './components/clientes/agregar-clinicas/agregar-clinicas.component';
import { EditarClinicasComponent } from './components/clientes/editar-clinicas/editar-clinicas.component';
import { AgregarDentistasComponent } from './components/clientes/agregar-dentistas/agregar-dentistas.component';
import { EditarDentistasComponent } from './components/clientes/editar-dentistas/editar-dentistas.component';
import { AgregarPacientesComponent } from './components/clientes/agregar-pacientes/agregar-pacientes.component';
import { EditarPacientesComponent } from './components/clientes/editar-pacientes/editar-pacientes.component';
import { DentistasComponent } from './components/clientes/dentistas/dentistas.component';
import { PacientesComponent } from './components/clientes/pacientes/pacientes.component';
import {HolaComponent} from './components/clientes/hola/hola.component'




const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'perfil',
        component: ProfileComponent,
      },
      {
        path: 'blank',
        component: BlankComponent,
      },
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'ordenes/ingresar',
        component: IngresarComponent,
      },
      {
        path: 'ordenes/editar/:id',
        component: EditarOrdenComponent,
      },
      {
        path: 'ordenes',
        component: TodasComponent,
      },
      {
        path: 'ordenes/informadas',
        component: InformadasComponent,
      },
      {
        path: 'ordenes/recepcionadas',
        component: RecepcionadasComponent,
      },
      {
        path: 'ordenes/en-proceso',
        component: EnProcesoComponent,
      },
      {
        path: 'ordenes/revision',
        component: RevisionComponent,
      },
      {
        path: 'ordenes/terminadas',
        component: TerminadasComponent,
      },
      {
        path: 'ordenes/despachadas',
        component: DespachadasComponent,
      },
      {
        path: 'laboratoristas/todos',
        component: TodosComponent,
      },
      {
        path: 'laboratoristas/agregar',
        component: AgregarComponent,
      },
      {
        path: 'laboratoristas/editar/:id',
        component: EditarComponent,
      },
      {
        path: 'laboratoristas/trabajos',
        component: TrabajosComponent,
      },
      {
        path: 'clientes/clinicas',
        component: ClinicasComponent,
      },
      {
        path: 'clientes/dentistas',
        component: DentistasComponent,
      },
      {
        path: 'clientes/pacientes',
        component: PacientesComponent,
      },
      {
        path: 'clientes/agregar-clinicas',
        component: AgregarClinicasComponent,
      },
      {
        path: 'clientes/editar-clinica/:id',
        component: EditarClinicasComponent,
      },
      {
        path: 'clientes/agregar-dentistas',
        component: AgregarDentistasComponent,
      },
      {
        path: 'clientes/editar-dentista/:id',
        component: EditarDentistasComponent,
      },
      {
        path: 'clientes/agregar-pacientes',
        component: AgregarPacientesComponent,
      },
      {
        path: 'clientes/editar-paciente/:id',
        component: EditarPacientesComponent,
      },
      {
        path: 'hola',
        component: HolaComponent,
      }
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NonAuthGuard],
  },
  {
    path: 'registro',
    component: RegisterComponent,
    canActivate: [NonAuthGuard],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
