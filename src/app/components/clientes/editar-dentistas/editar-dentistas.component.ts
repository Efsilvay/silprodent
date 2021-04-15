import { Component, OnInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientesService } from '../../../services/clientes.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-dentistas',
  templateUrl: './editar-dentistas.component.html',
  styleUrls: ['./editar-dentistas.component.scss']
})
export class EditarDentistasComponent implements OnInit {

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

  idDent
  formularioOk: boolean = false;
  classBoton = "btn btn-primary disabled"

  datosClinicas: any = [];

  constructor(
    private cS: ClientesService, 
    private _http: HttpClient,
    private toast: ToastrService,
    private actRoute: ActivatedRoute,
    private ngZone: NgZone,
    private router: Router 
    ) { 
      this.idDent = this.actRoute.snapshot.paramMap.get('id');
      this.cS.getDentista(this.idDent).subscribe((data) => {
        this.dentista = {
          id: data.id,
          rut: data.rut,
          nombre: data.nombre,
          apellido: data.apellido,
          clinica: data.clinica,
          direccion: data.direccion,
          comuna: data.comuna,
          ciudad: data.ciudad,
          telefono: data.telefono,
          celular: data.celular,
          email: data.email
        }});
    }

  ngOnInit(){
    this.cargarClinicas();
  }

  cargarClinicas(){
    return this.cS.getClinicas().subscribe((data: {}) => {
      this.datosClinicas = data; 
      console.log(this.datosClinicas)
    });
  }

  editar(form: NgForm) {
    console.log(this.dentista)
    console.log(form.valid)
    console.log(this.formularioOk)
    if(form.valid && this.formularioOk == true){
      this.cS.editaDentista(this.dentista)
      .subscribe(
        (datos) => {
          this.toast.success('Dentista ingresado con éxito', 'Confirmación');
          this.ngZone.run(() => this.router.navigateByUrl('clientes/dentistas'))
        },
        (err) => {
          this.toast.error('Hubo un error en el envío, favor intentar nuevamente', 'Error');
        }
      );
    this.limpiarFormulario(); 
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
    console.log(this.dentista)
  }
  
}