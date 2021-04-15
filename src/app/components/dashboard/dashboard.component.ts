import { Component, OnInit } from '@angular/core';
import { OrdenesService } from '../../services/ordenes.service';
import { ClientesService } from '../../services/clientes.service';
import { LaboratoristasService } from '../../services/laboratoristas.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  datosOrdenes: any = [];
  informadas: any = [];
  recepcionadas: any = [];
  enProceso: any = [];
  enRevision: any = [];
  terminadas: any = [];
  despachadas: any = [];
  datosLaboratoristas: any = [];
  datosClinicas: any = [];
  datosDentistas: any = [];
  datosPacientes: any = [];

  cantInformadas: number;
  cantRecepcionadas: number;
  cantEnProceso: number;
  cantEnRevision: number;
  cantTerminadas: number;
  cantDespachadas: number;
  cantTotal: number;
  cantClinicas: number;
  cantDentistas: number;
  cantPacientes: number;
  cantLaboratoristas: number;

  constructor(
    private oS: OrdenesService, 
    private lS: LaboratoristasService,
    private cS: ClientesService,
    private _http: HttpClient) { }

  ngOnInit() { 
    this.cargarOrdenes();
    this.cargarClinicas();
    this.cargarDentistas();
    this.cargarPacientes();
    this.cargarLaboratistas();
  }

  cargarOrdenes() {
    return this.oS.getOrdenes().subscribe((data: {}) => {
      this.datosOrdenes = data;

      for (let i = 0; i < this.datosOrdenes.length; i++) {
        if (this.datosOrdenes[i].estado == 1)
          this.informadas.push(this.datosOrdenes[i])
        if (this.datosOrdenes[i].estado == 2)
          this.recepcionadas.push(this.datosOrdenes[i])
        if (this.datosOrdenes[i].estado == 3)
          this.enProceso.push(this.datosOrdenes[i])
        if (this.datosOrdenes[i].estado == 4)
          this.enRevision.push(this.datosOrdenes[i])
        if (this.datosOrdenes[i].estado == 5)
          this.terminadas.push(this.datosOrdenes[i])
        if (this.datosOrdenes[i].estado == 6)
          this.despachadas.push(this.datosOrdenes[i])
      }
      this.cantInformadas = this.informadas.length;
      this.cantRecepcionadas = this.recepcionadas.length;
      this.cantEnProceso = this.enProceso.length;
      this.cantEnRevision = this.enRevision.length;
      this.cantTerminadas = this.terminadas.length;
      this.cantDespachadas = this.despachadas.length;
      this.cantTotal = this.datosOrdenes.length;
    });
  }
  cargarLaboratistas() {
    return this.lS.getLaboratoristas().subscribe((data: {}) => {
      this.datosLaboratoristas = data;
      this.cantLaboratoristas = this.datosLaboratoristas.length;
    });

  }

  cargarClinicas(){
    return this.cS.getClinicas().subscribe((data: {}) => {
      this.datosClinicas = data; 
      this.cantClinicas = this.datosClinicas.length;
    });
  }

  cargarDentistas(){
    return this.cS.getDentistas().subscribe((data: {}) => {
      this.datosDentistas = data; 
      this.cantDentistas = this.datosDentistas.length;
    });
  }

  cargarPacientes(){
    return this.cS.getPacientes().subscribe((data: {}) => {
      this.datosPacientes = data; 
      this.cantPacientes = this.datosPacientes.length;
    });
  }
}
