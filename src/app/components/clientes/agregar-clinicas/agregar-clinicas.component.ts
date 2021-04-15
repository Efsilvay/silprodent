import { Component, OnInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientesService } from '../../../services/clientes.service';
import { HttpClient } from '@angular/common/http'; 
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-clinicas',
  templateUrl: './agregar-clinicas.component.html',
  styleUrls: ['./agregar-clinicas.component.scss']
})
export class AgregarClinicasComponent implements OnInit {

  clinica = {
    id: null,
    rut: null,
    nombre: null,
    razonSocial: null,
    giro: null,
    representanteLegal: null,
    direccion: null,
    comuna: null,
    ciudad: null,
    telefono: null,
    celular: null,
    email: null
  }

  formularioOk: boolean = false;
  classBoton = "btn btn-primary disabled"

  constructor(
    private cS: ClientesService, 
    private _http: HttpClient,
    private toast: ToastrService,
    private ngZone: NgZone,
    private router: Router 
    ) { }

  ngOnInit(): void {

  }

  agregar(form: NgForm) {

    if(form.valid && this.formularioOk == true){
      this.cS.agregaClinica(this.clinica)
      .subscribe(
        (datos) => {
          this.toast.success('Clinica ingresada con éxito', 'Confirmación');
            this.ngZone.run(() => this.router.navigateByUrl('clientes/clinicas'))
        },
        (err) => {
          this.toast.error('Hubo un error en el envío, favor intentar nuevamente', 'Error');
        }
      );
    }
  }

  validaFormulario(value: any, tipo: string) {
    if (
      (this.clinica.rut !== null) &&
      (this.clinica.nombre !== null) &&
      (this.clinica.razonSocial !== null) &&
      (this.clinica.giro !== null) &&
      (this.clinica.representanteLegal !== null) &&
      (this.clinica.direccion !== null) &&
      (this.clinica.comuna !== null) &&
      (this.clinica.ciudad !== null) &&
      (this.clinica.telefono !== null) &&
      (this.clinica.celular !== null) &&
      (this.clinica.email !== null)
    ) {
      this.classBoton = "btn btn-primary";
      this.formularioOk = true;
    } else {
      this.classBoton = "btn btn-primary disabled";
      this.formularioOk = false;
    }
  }

  limpiarFormulario(){
    this.clinica.rut= null,
    this.clinica.nombre= null,
    this.clinica.razonSocial= null,
    this.clinica.giro= null,
    this.clinica.representanteLegal= null,
    this.clinica.direccion= null,
    this.clinica.comuna= null,
    this.clinica.ciudad= null,
    this.clinica.telefono= null,
    this.clinica.celular= null,
    this.clinica.email= null
    this.classBoton = "btn btn-primary disabled";
    this.formularioOk = false;
  }


}
