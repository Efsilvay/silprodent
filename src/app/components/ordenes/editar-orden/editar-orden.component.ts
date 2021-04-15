import { Component, OnInit, NgZone } from '@angular/core';
import { LaboratoristasService } from '../../../services/laboratoristas.service';
import { OrdenesService } from '../../../services/ordenes.service';
import { ClientesService } from '../../../services/clientes.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-orden',
  templateUrl: './editar-orden.component.html',
  styleUrls: ['./editar-orden.component.scss']
})
export class EditarOrdenComponent implements OnInit {

  idOrden = null;

  ordenes = {
    id: null,
    clinica: null,
    dentista: null,
    paciente: null,
    color: null,
    tipoTrabajo: null,
    etapa: null,
    pieza: null,
    observacion: null,
    valor: null,
    estado: null,
    fechaIngreso: null,
    fechaTermino: null,
    fechaDespacho: null,
    laboratorista: null
  }

  datosOrdenes: any = [];
  datosEstados: any = [];
  datosLaboratoristas: any = [];
  datosClinicas: any = [];
  datosDentistas: any = [];
  datosPacientes: any = [];
  datosTrabajos: any = [];
  datosEtapas: any = [];

  formularioOk: boolean = false;
  classBoton = "btn btn-primary disabled"

  constructor(
    private _http: HttpClient,
    private lS: LaboratoristasService,
    private cS: ClientesService,
    private oS: OrdenesService,
    private toast: ToastrService,
    private ngZone: NgZone,
    private router: Router,
    private actRoute: ActivatedRoute,
  ) {
    this.idOrden = this.actRoute.snapshot.paramMap.get('id');

    this.oS.getOrden(this.idOrden).subscribe((data) => {
      this.ordenes = {
        id: this.idOrden,
        clinica: data.clinica,
        dentista: data.dentista,
        paciente: data.paciente,
        color: data.color,
        tipoTrabajo: data.tipoTrabajo,
        etapa: data.etapa,
        pieza: data.pieza,
        observacion: data.observacion,
        valor: data.valor,
        estado: data.estado,
        fechaIngreso: data.fechaIngreso,
        fechaTermino: data.fechaTermino,
        fechaDespacho: data.fechaDespacho,
        laboratorista: data.laboratorista
      }});

   }

  ngOnInit(){
    this.cargarClinicas();
    this.cargarLaboratistas();
    this.cargarDentistas();
    this.cargarPacientes();
    this.cargarTrabajos();
    this.cargarEtapas();
    this.cargarEstados();
  }

  cargarClinicas() {
    return this.cS.getClinicas().subscribe((data: {}) => {
      this.datosClinicas = data;
      console.log(this.datosClinicas)
    });
  }

  cargarDentistas() {
    return this.cS.getDentistas().subscribe((data: {}) => {
      this.datosDentistas = data;
    });
  }

  cargarPacientes() {
    return this.cS.getPacientes().subscribe((data: {}) => {
      this.datosPacientes = data;
    });
  }

  cargarLaboratistas() {
    return this.lS.getLaboratoristas().subscribe((data: {}) => {
      this.datosLaboratoristas = data;
    });
  }

  cargarTrabajos() {
    return this.oS.getTrabajos().subscribe((data: {}) => {
      this.datosTrabajos = data;
    });
  }

  cargarEtapas() {
    return this.oS.getEtapas().subscribe((data: {}) => {
      this.datosEtapas = data;
    });
  }

  cargarEstados() {
    return this.oS.getEstados().subscribe((data: {}) => {
      this.datosEstados = data;
    });
  }


  guardar(form: NgForm) {
    if (form.valid && this.formularioOk == true) {
      console.log('salida: ',this.ordenes)
      this.oS.editaOrden(this.ordenes)
        .subscribe(
          (datos) => {
            this.toast.success('Orden editada con éxito', 'Confirmación');
            this.ngZone.run(() => this.router.navigateByUrl('ordenes/todas'))
          },
          (err) => {
            this.toast.error('Hubo un error en el envío, favor intentar nuevamente', 'Error');
          }
        );
    }
    this.limpiarFormulario();
  }


  validaFormulario(value: any, tipo: string) {

    switch (tipo){
      case 'clinica': 
      this.ordenes.clinica = value;
      break;
      case 'dentista': 
      this.ordenes.dentista = value;
      break;
      case 'paciente': 
      this.ordenes.paciente = value;
      break;
      case 'tipoTrabajo': 
      this.ordenes.tipoTrabajo = value;
      break;
      case 'etapa': 
      this.ordenes.etapa = value;
      break;
      case 'estado': 
      this.ordenes.estado = value;
      break;
      case 'laboratorista': 
      this.ordenes.laboratorista = value;
      break;
    }

    if (
      (this.ordenes.clinica !== null) &&
      (this.ordenes.dentista !== null) &&
      (this.ordenes.paciente !== null) &&
      (this.ordenes.tipoTrabajo !== null) &&
      (this.ordenes.etapa !== null) &&
      (this.ordenes.pieza !== null) &&
      (this.ordenes.color !== null) &&
      (this.ordenes.observacion !== null) &&
      (this.ordenes.valor !== null) &&
      (this.ordenes.estado !== null) &&
      (this.ordenes.fechaIngreso !== null) &&
      (this.ordenes.laboratorista !== null)
    ) {
      this.classBoton = "btn btn-primary";
      this.formularioOk = true;
    } else {
      this.classBoton = "btn btn-primary disabled";
    }
    console.log('datos:', this.ordenes)
    console.log('formulario ok: ', this.formularioOk)
  }

  limpiarFormulario() {
    this.ordenes.clinica = null,
      this.ordenes.dentista = null,
      this.ordenes.paciente = null,
      this.ordenes.color = null,
      this.ordenes.tipoTrabajo = null,
      this.ordenes.etapa = null,
      this.ordenes.pieza = null,
      this.ordenes.observacion = null,
      this.ordenes.valor = null,
      this.ordenes.estado = null,
      this.ordenes.fechaIngreso = null,
      this.ordenes.fechaTermino = null,
      this.ordenes.fechaDespacho = null,
      this.ordenes.laboratorista = null
    this.classBoton = "btn btn-primary disabled";
    this.formularioOk = false;
  }

}
