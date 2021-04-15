import { Component, OnInit } from '@angular/core';
import { OrdenesService } from '../../../services/ordenes.service';
import { ClientesService } from '../../../services/clientes.service';
import { LaboratoristasService } from '../../../services/laboratoristas.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import moment from 'moment';

@Component({
  selector: 'app-todas',
  templateUrl: './todas.component.html',
  styleUrls: ['./todas.component.scss']
})
export class TodasComponent implements OnInit {

  allDatos: any = [];
  datosOrdenes: any = [];
  datosLaboratoristas: any = [];
  datosClinicas: any = [];
  datosDentistas: any = [];
  datosPacientes: any = [];
  datosEtapas: any = [];
  datosTrabajos: any = [];
  datosEstados: any = [];

  cantidadOrdenes: number;

  constructor(
    private oS: OrdenesService,
    private lS: LaboratoristasService,
    private cS: ClientesService,
    private _http: HttpClient,
    private toast: ToastrService) { }

  ngOnInit() {
    this.cargarClinicas();
    this.cargarDentistas();
    this.cargarPacientes();
    this.cargarLaboratistas();
    this.cargarTrabajos();
    this.cargarEtapas();
    this.cargarEstados();
    this.cargarOrdenes("todo", null);
  }

  cargarOrdenes(valor, tipo) {
    this.datosOrdenes = [];
    return this.oS.getOrdenes().subscribe((data: {}) => {
      this.allDatos = data;
      if (valor == "todo") {
        this.datosOrdenes = this.allDatos;
      } else {
        if (tipo == "estado") {
          for (let i = 0; i < this.allDatos.length; i++) {
            if (this.allDatos[i].estado == valor) {
              this.datosOrdenes.push(this.allDatos[i])
            }
          }
        }
        if (tipo == "clinica") {
          for (let i = 0; i < this.allDatos.length; i++) {
            if (this.allDatos[i].clinica == valor) {
              this.datosOrdenes.push(this.allDatos[i])
            }
          }
        }
        if (tipo == "dentista") {
          for (let i = 0; i < this.allDatos.length; i++) {
            if (this.allDatos[i].dentista == valor) {
              this.datosOrdenes.push(this.allDatos[i])
            }
          }
        }
        if (tipo == "paciente") {
          for (let i = 0; i < this.allDatos.length; i++) {
            if (this.allDatos[i].paciente == valor) {
              this.datosOrdenes.push(this.allDatos[i])
            }
          }
        }
      }

      for (let i = 0; i < this.datosOrdenes.length; i++) {
        for (let j = 0; j < this.datosClinicas.length; j++) {
          if (this.datosOrdenes[i].clinica == this.datosClinicas[j].id) {
            this.datosOrdenes[i].clinica = this.datosClinicas[j].nombre;
          }
        }
      }
      for (let i = 0; i < this.datosOrdenes.length; i++) {
        for (let j = 0; j < this.datosDentistas.length; j++) {
          if (this.datosOrdenes[i].dentista == this.datosDentistas[j].id) {
            this.datosOrdenes[i].dentista = this.datosDentistas[j].nombre + " " + this.datosDentistas[j].apellido;
          }
        }
      }
      for (let i = 0; i < this.datosOrdenes.length; i++) {
        for (let j = 0; j < this.datosPacientes.length; j++) {
          if (this.datosOrdenes[i].paciente == this.datosPacientes[j].id) {
            this.datosOrdenes[i].paciente = this.datosPacientes[j].nombre + " " + this.datosPacientes[j].apellido;
          }
        }
      }
      for (let i = 0; i < this.datosOrdenes.length; i++) {
        for (let j = 0; j < this.datosLaboratoristas.length; j++) {
          if (this.datosOrdenes[i].laboratorista == this.datosLaboratoristas[j].id) {
            this.datosOrdenes[i].laboratorista = this.datosLaboratoristas[j].nombre + " " + this.datosLaboratoristas[j].apellido;
          }
        }
      }
      for (let i = 0; i < this.datosOrdenes.length; i++) {
        for (let j = 0; j < this.datosTrabajos.length; j++) {
          if (this.datosOrdenes[i].tipoTrabajo == this.datosTrabajos[j].id) {
            this.datosOrdenes[i].tipoTrabajo = this.datosTrabajos[j].trabajo;
          }
        }
      }
      for (let i = 0; i < this.datosOrdenes.length; i++) {
        for (let j = 0; j < this.datosEtapas.length; j++) {
          if (this.datosOrdenes[i].etapa == this.datosEtapas[j].id) {
            this.datosOrdenes[i].etapa = this.datosEtapas[j].etapa;
          }
        }
      }
      for (let i = 0; i < this.datosOrdenes.length; i++) {
        for (let j = 0; j < this.datosEstados.length; j++) {
          if (this.datosOrdenes[i].estado == this.datosEstados[j].id) {
            this.datosOrdenes[i].estado = this.datosEstados[j].estado;
          }
        }
      }
      this.cantidadOrdenes = this.datosOrdenes.length;
      this.datosOrdenes.sort((a, b) => b.id - a.id);
    });
  }

  cargarLaboratistas() {
    return this.lS.getLaboratoristas().subscribe((data: {}) => {
      this.datosLaboratoristas = data;
    });

  }

  cargarClinicas() {
    return this.cS.getClinicas().subscribe((data: {}) => {
      this.datosClinicas = data;
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

  eliminar(id) {
    this.oS.eliminarOrden(id).subscribe(() => this.cargarOrdenes("todo", null));
    this.toast.success('Orden eliminada con éxito', 'Eliminación');
  }

  seleccion(value: any, tipo: string) {
    console.log('----------------------')
    console.log('valor: ' + value)
    switch (tipo) {
      case 'estado':
        this.cargarOrdenes(value, tipo);
        break;
      case 'clinica':
        this.cargarOrdenes(value, tipo);
        break;
        case 'dentista':
        this.cargarOrdenes(value, tipo);
        break;
        case 'paciente':
        this.cargarOrdenes(value, tipo);
        break;
    }
  }
}
