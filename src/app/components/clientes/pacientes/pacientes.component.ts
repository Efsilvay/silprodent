import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../../services/clientes.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

  datosClinicas: any = [];
  datosDentistas: any = [];
  datosPacientes: any = [];
  cantidadPacientes: number;

  constructor(
    private cS: ClientesService,
    private toast: ToastrService,
    private _http: HttpClient
  ) { }

  ngOnInit() {
    this.cargarClinicas();
    this.cargarDentistas();
    this.cargarPacientes();
  }

  cargarClinicas(){
    return this.cS.getClinicas().subscribe((data: {}) => {
      this.datosClinicas = data; 
    });
  }

  cargarDentistas(){
    return this.cS.getDentistas().subscribe((data: {}) => {
      this.datosDentistas = data; 
      for(let i = 0; i <this.datosDentistas.length; i++){
        for(let j = 0; j <this.datosClinicas.length; j++){
          if(this.datosDentistas[i].clinica == this.datosClinicas[j].id){
            this.datosDentistas[i].clinica = this.datosClinicas[j].nombre;
          }
        }
      }
    });
  }

  cargarPacientes(){
    return this.cS.getPacientes().subscribe((data: {}) => {
      this.datosPacientes = data; 
      for(let i = 0; i <this.datosPacientes.length; i++){
        for(let j = 0; j <this.datosDentistas.length; j++){
          if(this.datosPacientes[i].dentista == this.datosDentistas[j].id){
            this.datosPacientes[i].dentista = this.datosDentistas[j].nombre + " " + this.datosDentistas[j].apellido;
          }
        }
      }
      console.log(this.datosDentistas)
      this.cantidadPacientes = this.datosPacientes.length;
    });
  }

  eliminarPaciente(id){
    this.cS.eliminaPaciente(id).subscribe(()=> this.cargarPacientes());
    this.toast.success('Paciente eliminado con éxito', 'Eliminación'); 
  }

}
