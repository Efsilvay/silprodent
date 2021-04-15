import { Component, OnInit, NgZone } from '@angular/core';
import { LaboratoristasService } from '../../../services/laboratoristas.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  labo = {
    id: null,
    rut: null,
    nombre: null,
    apellido: null,
    telefono: null,
    email: null
  }
  idLab = null;
  cargando: boolean = false
  msg: string = ""
  formularioOk: boolean = false;
  classBoton = "btn btn-primary disabled"

  constructor(
    private lS: LaboratoristasService,
    private toast: ToastrService, 
    private _http: HttpClient,
    private actRoute: ActivatedRoute,
    private ngZone: NgZone,
    private router: Router
    ) { 
    this.idLab = this.actRoute.snapshot.paramMap.get('id');
    this.lS.getLaboratorista(this.idLab).subscribe((data) => {
      this.labo = {
        id: this.idLab,
        rut: data.rut,
        nombre: data.nombre,
        apellido: data.apellido,
        telefono: data.telefono,
        email: data.email
      }});
  }

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

  guardar(form: NgForm) {

    if(form.valid && this.formularioOk == true){
      this.lS.editaLaboratorista(this.labo)
    .subscribe(
      (datos) => {
        this.cargando = true;
        this.toast.success('Laboratorista Modificado con éxito', 'Confirmación');
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
