import { Component, OnInit } from '@angular/core';
import { LaboratoristasService } from '../../../services/laboratoristas.service';
import { Lab } from '../../../services/laboratoristas.service'
import { HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  datosLaboratoristas: any = [];
  cantidadLaboratoristas: number;
  recargar: boolean = true;
  labo = {
    rut: null,
    nombre: null,
    apellido: null,
    usuario: null,
    telefono: null,
    email: null
  }

  constructor(
    private lS: LaboratoristasService,
    private toast: ToastrService,
    private _http: HttpClient
    ) { }

  ngOnInit() {
    this.cargarLaboratistas();
  }

  cargarLaboratistas() {
    return this.lS.getLaboratoristas().subscribe((data: {}) => {
      this.datosLaboratoristas = data;
      this.cantidadLaboratoristas = this.datosLaboratoristas.length;
      //this.listaArticulos = this.datosArticulos.filter(obj => obj.vista === this.vistas);
      console.log(this.cantidadLaboratoristas);
      this.recargar = false;
      this.recargar = true;
    });

  }

  eliminar(id){
    this.lS.eliminaLaboratorista(id).subscribe(()=> this.cargarLaboratistas());
    this.toast.success('Eliminado con éxito', 'Eliminación');
    
  }

  editar(labo: NgForm){
    this.lS.editaLaboratorista(this.labo).subscribe(()=> this.cargarLaboratistas());
    labo.resetForm();
    this.toast.success('Actualizado con éxito', 'Actualización');
  }

}
