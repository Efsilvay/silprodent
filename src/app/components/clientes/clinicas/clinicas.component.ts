import { Component, OnInit } from '@angular/core'; 
import { ClientesService } from '../../../services/clientes.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-clinicas',
  templateUrl: './clinicas.component.html',
  styleUrls: ['./clinicas.component.scss']
})
export class ClinicasComponent implements OnInit {

  datosClinicas: any = [];
  cantidadClinicas: number;
  datosDentistas: any = [];
  cantidadDentistas: number;
  datosPacientes: any = [];
  cantidadPacientes: number;

  cliActivo:boolean = true;
  denActivo: boolean = false;
  pacActivo: boolean = false;

  constructor(
    private cS: ClientesService,
    private toast: ToastrService,
    private _http: HttpClient
    ) { }

  ngOnInit(){
    this.cargarClinicas();
    this.cargarDentistas();
    this.cargarPacientes();
  }

  cargarClinicas(){
    return this.cS.getClinicas().subscribe((data: {}) => {
      this.datosClinicas = data; 
      this.cantidadClinicas = this.datosClinicas.length;
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
      this.cantidadDentistas = this.datosDentistas.length;
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

  eliminarClinica(id){
    this.cS.eliminaClinica(id).subscribe(()=> this.cargarClinicas());
    this.toast.success('Clinica eliminada con éxito', 'Eliminación');
    
  }

  eliminarDentista(id){
    this.cS.eliminaDentista(id).subscribe(()=> this.cargarDentistas());
    this.toast.success('Dentista eliminado con éxito', 'Eliminación');
    
  }

  eliminarPaciente(id){
    this.cS.eliminaPaciente(id).subscribe(()=> this.cargarPacientes());
    this.toast.success('Paciente eliminado con éxito', 'Eliminación');
    
  }

  /*editar(labo: NgForm){
    this.lS.editaLaboratorista(this.labo).subscribe(()=> this.cargarLaboratistas());
    labo.resetForm();
    this.toast.success('Actualizado con éxito', 'Actualización');
  }*/

  activar(valor){
    switch (valor){
      case 'cli': 
      this.cliActivo = true;
      this.denActivo = false;
      this.pacActivo = false;
      break;
      case 'den': 
      this.cliActivo = false;
      this.denActivo = true;
      this.pacActivo = false;
      break;
      case 'pac': 
      this.cliActivo = false;
      this.denActivo = false;
      this.pacActivo = true;
      break;
    }
  }

}
