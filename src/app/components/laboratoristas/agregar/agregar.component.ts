import { Component, OnInit, NgZone } from '@angular/core';
import { LaboratoristasService } from '../../../services/laboratoristas.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  labo = {
    rut: null,
    nombre: null,
    apellido: null,
    telefono: null,
    email: null
  }

  cargando: boolean = false
  msg: string = ""
  formularioOk: boolean = false;
  classBoton = "btn btn-primary disabled"

  constructor(
    private lS: LaboratoristasService,
    private toast: ToastrService, 
    private _http: HttpClient,
    private ngZone: NgZone,
    private router: Router) { }

  ngOnInit(){

  }

  validaFormulario(value: any, tipo: string) {

    if (
      (this.labo.nombre !== null) &&
      (this.labo.apellido !== null) &&
      (this.labo.rut !== null) &&
      (this.labo.email !== null) &&
      (this.labo.telefono !== null)
    ) {
      this.classBoton = "btn btn-primary";
      this.formularioOk = true;
    } else {
      this.classBoton = "btn btn-primary disabled";
    }
    console.log('datos:', this.labo)
    console.log('formulario ok: ', this.formularioOk)
  }

  agregar(form: NgForm) {

    if(form.valid && this.formularioOk == true){
      this.lS.agregaLaboratorista(this.labo)
      .subscribe(
        (datos) => {
          this.cargando = true;
          this.toast.success('Laboratorista ingresado con éxito', 'Confirmación');
          this.ngZone.run(() => this.router.navigateByUrl('laboratoristas/todos'))
        },
        (err) => {
          this.cargando = false;
          this.toast.error('Hubo un error en el envío, favor intentar nuevamente', 'Error');
        }
      );
      this.limpiarFormulario();
    }
  }

  limpiarFormulario(){ 
    this.labo.rut = null;
    this.labo.nombre = null;
    this.labo.apellido = null;
    this.labo.telefono = null;
    this.labo.email = null;
    this.classBoton = "btn btn-primary disabled";
    this.formularioOk = false;
  }

}
