import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../../services/clientes.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dentistas',
  templateUrl: './dentistas.component.html',
  styleUrls: ['./dentistas.component.scss']
})
export class DentistasComponent implements OnInit {

  datosClinicas: any = [];
  datosDentistas: any = [];
  cantidadDentistas: number;

  constructor(
    private cS: ClientesService,
    private toast: ToastrService,
    private _http: HttpClient 
  ) { }

  ngOnInit() {
    this.cargarClinicas();
    this.cargarDentistas();
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
      this.cantidadDentistas = this.datosDentistas.length;
    });
  }

  eliminarDentista(id){
    this.cS.eliminaDentista(id).subscribe(()=> this.cargarDentistas());
    this.toast.success('Dentista eliminado con éxito', 'Eliminación');
    
  }

}
