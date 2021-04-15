import { Component, OnInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientesService } from '../../../services/clientes.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-pacientes',
  templateUrl: './editar-pacientes.component.html',
  styleUrls: ['./editar-pacientes.component.scss']
})
export class EditarPacientesComponent implements OnInit {

  paciente = {
    id: null,
    nombre: null,
    apellido: null,
    clinica: null,
    dentista: null,
    sexo: null,
    edad: null,
    color: null,
    telefono: null,
    celular: null
  }

  existeDentista: boolean = false

  sexo = [{ nombre: "Masculino", letra: "M" }, { nombre: "Femenino", letra: "F" }, { nombre: "Otro", letra: "-" }]

  idPac
  datosClinicas: any = [];
  datosDentistas: any = [];
  datosDentistasTmp: any = [];
  formularioOk: boolean = false;
  seleccion: boolean = false;
  classBoton = "btn btn-primary disabled"

  constructor(
    private cS: ClientesService,
    private _http: HttpClient,
    private toast: ToastrService,
    private actRoute: ActivatedRoute,
    private ngZone: NgZone,
    private router: Router
  ) {
    this.idPac = this.actRoute.snapshot.paramMap.get('id');
    this.cS.getPaciente(this.idPac).subscribe((data) => {
      this.paciente = {
        id: data.id,
        nombre: data.nombre,
        apellido: data.apellido,
        clinica: data.clinica,
        dentista: data.dentista,
        sexo: data.sexo,
        edad: data.edad,
        color: data.color,
        telefono: data.telefono,
        celular: data.celular
      }
    });
  }

  ngOnInit() {
    this.cargarClinicas();
    this.cargarDentistasInicial();
  }

  cargarClinicas() {
    return this.cS.getClinicas().subscribe((data: {}) => {
      this.datosClinicas = data;
      //console.log(this.datosClinicas)
    });
  }

  cargarDentistasInicial() {
    return this.cS.getDentistas().subscribe((data: {}) => {
      this.datosDentistas = data;
      if (this.datosDentistas.length > 0)
        this.existeDentista = true;
    });
  }

  async cargarDentistas(opcion) {
    return this.cS.getDentistas().subscribe((data: {}) => {
      this.datosDentistas = data;
      for (let i = 0; i < this.datosDentistas.length; i++) {
        if (this.datosDentistas[i].clinica == opcion) {
          this.datosDentistasTmp.push(this.datosDentistas[i]);
        }
      }
    });
  }



  async validaFormulario(value: any, tipo: string) {
    console.log('----------------------')
    switch (tipo) {
      case 'clinica':
        this.paciente.clinica = value;
        this.datosDentistasTmp = [];
        await this.cargarDentistas(this.paciente.clinica);
        this.seleccion = true;
        break;
      case 'dentista':
        this.paciente.dentista = value;
        break;
      case 'sexo':
        this.paciente.sexo = value;
        break;
    }
    if (
      (this.paciente.nombre !== null) &&
      (this.paciente.apellido !== null) &&
      (this.paciente.clinica !== null) &&
      (this.paciente.dentista !== null) &&
      (this.paciente.sexo !== null) &&
      (this.paciente.edad !== null) &&
      (this.paciente.color !== null) &&
      (this.paciente.telefono !== null) &&
      (this.paciente.celular !== null)
    ) {
      this.classBoton = "btn btn-primary";
      this.formularioOk = true;
    } else {
      this.classBoton = "btn btn-primary disabled";
      this.formularioOk = false;
    }
    console.log('datos:', this.paciente)
  }

  editar(form: NgForm) {
    if (form.valid && this.formularioOk == true) {

      console.log(this.paciente)
      this.cS.editaPaciente(this.paciente)
        .subscribe(
          (datos) => {
            this.toast.success('Paciente editado con éxito', 'Confirmación');
            this.ngZone.run(() => this.router.navigateByUrl('clientes/pacientes'))
          },
          (err) => {
            this.toast.error('Hubo un error en el envío, favor intentar nuevamente', 'Error');
          }
        );
      this.limpiarFormulario();
    }
  }

  limpiarFormulario() {
    this.paciente.nombre = null,
      this.paciente.apellido = null,
      this.paciente.dentista = null,
      this.paciente.clinica = null,
      this.paciente.sexo = null,
      this.paciente.edad = null,
      this.paciente.color = null,
      this.paciente.telefono = null,
      this.paciente.celular = null
    this.classBoton = "btn btn-primary disabled"
    this.formularioOk = false;
  }


}