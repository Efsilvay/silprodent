import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { ClientesService } from '../../../services/clientes.service';
import { LaboratoristasService } from '../../../services/laboratoristas.service';
 
@Component({
  selector: 'app-terminadas',
  templateUrl: './terminadas.component.html',
  styleUrls: ['./terminadas.component.scss']
})
export class TerminadasComponent implements OnInit {

  allDatos: any = []; 
  datosOrdenes: any = [];
  cantidadOrdenes: number;
  hayDatos: boolean = false;
  datosLaboratoristas: any = [];
  datosClinicas: any = [];
  datosDentistas: any = [];
  datosPacientes: any = [];

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
    this.cargarOrdenes();
  }

  cargarOrdenes() {
    return this.oS.getOrdenes().subscribe((data: {}) => {
      this.allDatos = data;
      for (let i = 0; i < this.allDatos.length; i++) {
        if (this.allDatos[i].estado == 5)
          this.datosOrdenes.push(this.allDatos[i])
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

      this.cantidadOrdenes = this.datosOrdenes.length;

      if (this.cantidadOrdenes > 0)
      this.hayDatos = true;
      else
      this.hayDatos = false;

    });
  }

  cargarLaboratistas() {
    return this.lS.getLaboratoristas().subscribe((data: {}) => {
      this.datosLaboratoristas = data;
    });

  }

  cargarClinicas(){
    return this.cS.getClinicas().subscribe((data: {}) => {
      this.datosClinicas = data; 
    });
  }

  cargarDentistas(){
    return this.cS.getDentistas().subscribe((data: {}) => {
      this.datosDentistas = data; 
    });
  }

  cargarPacientes(){
    return this.cS.getPacientes().subscribe((data: {}) => {
      this.datosPacientes = data; 
    });
  }

}
