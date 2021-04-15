import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './pages/main/header/header.component';
import { FooterComponent } from './pages/main/footer/footer.component';
import { MenuSidebarComponent } from './pages/main/menu-sidebar/menu-sidebar.component';
import { BlankComponent } from './components/blank/blank.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { MessagesDropdownMenuComponent } from './pages/main/header/messages-dropdown-menu/messages-dropdown-menu.component';
import { NotificationsDropdownMenuComponent } from './pages/main/header/notifications-dropdown-menu/notifications-dropdown-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppButtonComponent } from './components/app-button/app-button.component';

import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import { UserDropdownMenuComponent } from './pages/main/header/user-dropdown-menu/user-dropdown-menu.component';
import { TodasComponent } from './components/ordenes/todas/todas.component';
import { InformadasComponent } from './components/ordenes/informadas/informadas.component';
import { RecepcionadasComponent } from './components/ordenes/recepcionadas/recepcionadas.component';
import { EnProcesoComponent } from './components/ordenes/en-proceso/en-proceso.component';
import { RevisionComponent } from './components/ordenes/revision/revision.component';
import { TerminadasComponent } from './components/ordenes/terminadas/terminadas.component';
import { DespachadasComponent } from './components/ordenes/despachadas/despachadas.component';
import { TodosComponent } from './components/laboratoristas/todos/todos.component';
import { AgregarComponent } from './components/laboratoristas/agregar/agregar.component';
import { EditarComponent} from './components/laboratoristas/editar/editar.component';
import { TrabajosComponent } from './components/laboratoristas/trabajos/trabajos.component';
import { ClinicasComponent } from './components/clientes/clinicas/clinicas.component';
import { AgregarClinicasComponent } from './components/clientes/agregar-clinicas/agregar-clinicas.component';
import { IngresarComponent } from './components/ordenes/ingresar/ingresar.component';
import { AgregarDentistasComponent } from './components/clientes/agregar-dentistas/agregar-dentistas.component';
import { AgregarPacientesComponent } from './components/clientes/agregar-pacientes/agregar-pacientes.component';
import { EditarClinicasComponent } from './components/clientes/editar-clinicas/editar-clinicas.component';
import { EditarDentistasComponent } from './components/clientes/editar-dentistas/editar-dentistas.component';
import { EditarPacientesComponent } from './components/clientes/editar-pacientes/editar-pacientes.component';
import { EditarOrdenComponent } from './components/ordenes/editar-orden/editar-orden.component';
import { DentistasComponent } from './components/clientes/dentistas/dentistas.component';
import { PacientesComponent } from './components/clientes/pacientes/pacientes.component';
import { HolaComponent } from './components/clientes/hola/hola.component';



registerLocaleData(localeEn, 'en-EN');

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MenuSidebarComponent,
    BlankComponent,
    ProfileComponent,
    RegisterComponent,
    DashboardComponent,
    MessagesDropdownMenuComponent,
    NotificationsDropdownMenuComponent,
    AppButtonComponent,
    UserDropdownMenuComponent,
    TodasComponent,
    InformadasComponent,
    RecepcionadasComponent,
    EnProcesoComponent,
    RevisionComponent,
    TerminadasComponent,
    DespachadasComponent,
    TodosComponent,
    AgregarComponent,
    EditarComponent,
    TrabajosComponent,
    ClinicasComponent,
    AgregarClinicasComponent,
    IngresarComponent,
    AgregarDentistasComponent,
    AgregarPacientesComponent,
    EditarComponent,
    EditarClinicasComponent,
    EditarDentistasComponent,
    EditarPacientesComponent,
    EditarOrdenComponent,
    DentistasComponent,
    PacientesComponent,
    HolaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
