import { Component, OnInit } from '@angular/core';
import { OrdenesService } from '../../../services/ordenes.service';
import { ClientesService } from '../../../services/clientes.service';
import { LaboratoristasService } from '../../../services/laboratoristas.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.scss']
})
export class TrabajosComponent implements OnInit {

  allDatos: any = [];
  datosOrdenes: any = [];
  cantTotal: number = 0;
  datosLaboratoristas: any = [];
  datosClinicas: any = [];
  datosDentistas: any = [];
  datosPacientes: any = [];
  mostrar: boolean = false;



  constructor(
    private oS: OrdenesService,
    private lS: LaboratoristasService,
    private cS: ClientesService,
    private _http: HttpClient) { }

  ngOnInit() {
    this.cargarClinicas();
    this.cargarDentistas();
    this.cargarPacientes();
    this.cargarLaboratistas();
    this.cargarOrdenes("todo")
  }

  cargarOrdenes(id) {
    this.datosOrdenes = [];
    return this.oS.getOrdenes().subscribe((data: {}) => {
      this.allDatos = data;
      if (id == "todo") {
        this.datosOrdenes = this.allDatos;
      }
      else {
        for (let i = 0; i < this.allDatos.length; i++) {
          if (this.allDatos[i].laboratorista == id) {
            this.datosOrdenes.push(this.allDatos[i])
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
      this.cantTotal = this.datosOrdenes.length;
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

  seleccionLaboratorista(value: any, tipo: string) {
    console.log('----------------------')
    switch (tipo) {
      case 'laboratorista':
        this.cargarOrdenes(value);
        this.mostrar = true;
        break;
      case 'todo':
        this.cargarOrdenes(value);
        this.mostrar = true;
        break;
    }
  }
}
