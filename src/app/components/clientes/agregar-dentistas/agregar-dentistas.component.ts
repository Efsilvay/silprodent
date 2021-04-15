import { Component, OnInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientesService } from '../../../services/clientes.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-dentistas',
  templateUrl: './agregar-dentistas.component.html',
  styleUrls: ['./agregar-dentistas.component.scss']
})
export class AgregarDentistasComponent implements OnInit {

  dentista = {
    id: null,
    rut: null,
    nombre: null,
    apellido: null,
    clinica: null,
    direccion: null,
    comuna: null,
    ciudad: null,
    telefono: null,
    celular: null,
    email: null 
  }

  formularioOk: boolean = false;
  classBoton = "btn btn-primary disabled"

  datosClinicas: any = [];

  constructor(
    private cS: ClientesService, 
    private _http: HttpClient,
    private toast: ToastrService,
    private ngZone: NgZone,
    private router: Router 
    ) { }

  ngOnInit(){
    this.cargarClinicas();
  }

  cargarClinicas(){
    return this.cS.getClinicas().subscribe((data: {}) => {
      this.datosClinicas = data; 
      console.log(this.datosClinicas)
    });
  }

  agregar(form: NgForm) {
    if(form.valid && this.formularioOk == true){
      this.cS.agregaDentista(this.dentista)
      .subscribe(
        (datos) => {
          this.toast.success('Dentista ingresado con éxito', 'Confirmación');
          this.ngZone.run(() => this.router.navigateByUrl('clientes/dentistas'))
        },
        (err) => {
          this.toast.error('Hubo un error en el envío, favor intentar nuevamente', 'Error');
        }
      );
     
    }
  }

  limpiarFormulario(){
    this.dentista.rut= null,
    this.dentista.nombre= null,
    this.dentista.apellido= null,
    this.dentista.clinica= null,
    this.dentista.direccion= null,
    this.dentista.comuna= null,
    this.dentista.ciudad= null,
    this.dentista.telefono= null,
    this.dentista.celular= null,
    this.dentista.email= null,
    this.classBoton = "btn btn-primary disabled";
    this.formularioOk = false;
  }

  validaFormulario(value : any, tipo: string) {
    console.log('----------------------')
    switch (tipo){
      case 'clinica': 
      this.dentista.clinica = value;
      break;
    }
    if (
      (this.dentista.rut !== null) &&
      (this.dentista.nombre !== null) &&
      (this.dentista.apellido !== null) &&
      (this.dentista.clinica !== null) &&
      (this.dentista.direccion !== null) &&
      (this.dentista.comuna !== null) &&
      (this.dentista.ciudad !== null) &&
      (this.dentista.telefono !== null) &&
      (this.dentista.celular !== null) &&
      (this.dentista.email !== null)
      ) {
      this.classBoton = "btn btn-primary";
      this.formularioOk = true;
    } else {
      this.classBoton = "btn btn-primary disabled";
      this.formularioOk = false;
    }
  }
  
}
