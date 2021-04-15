import { Component, OnInit, NgZone} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientesService } from '../../../services/clientes.service';
import { HttpClient } from '@angular/common/http'; 
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-editar-clinicas',
  templateUrl: './editar-clinicas.component.html',
  styleUrls: ['./editar-clinicas.component.scss']
})
export class EditarClinicasComponent implements OnInit {

  clinica = {
    id: null,
    rut: null,
    nombre: null,
    razonSocial: null,
    giro: null,
    representanteLegal: null,
    direccion: null,
    comuna: null,
    ciudad: null,
    telefono: null,
    celular: null,
    email: null
  }

  idCli: any;
  formularioOk: boolean = false;
  classBoton = "btn btn-primary disabled"

  constructor(
    private cS: ClientesService, 
    private _http: HttpClient,
    private toast: ToastrService, 
    private actRoute: ActivatedRoute,
    private ngZone: NgZone,
    private router: Router
    ) { }

  ngOnInit(){
    this.idCli = this.actRoute.snapshot.paramMap.get('id');
    this.cS.getClinica(this.idCli).subscribe((data) => {
      this.clinica = {
        id: data.id,
        rut: data.rut,
        nombre: data.nombre,
        razonSocial: data.razonSocial,
        giro: data.giro,
        representanteLegal: data.representanteLegal,
        direccion: data.direccion,
        comuna: data.comuna,
        ciudad: data.ciudad,
        telefono: data.telefono,
        celular: data.celular,
        email: data.email
      }});
  }

  guardar(form: NgForm) {

    if(form.valid && this.formularioOk == true)
    this.cS.editaClinica(this.clinica)
    .subscribe(
      (datos) => {
        this.toast.success('Clinica Modificada con éxito', 'Confirmación');
        this.ngZone.run(() => this.router.navigateByUrl('clientes/clinicas'))
      },
      (err) => {
        this.toast.error('Hubo un error en el envío, favor intentar nuevamente', 'Error');
      }
    );
    this.limpiarFormulario();
  }

  validaFormulario(value: any, tipo: string) {
    if (
      (this.clinica.rut !== null) &&
      (this.clinica.nombre !== null) &&
      (this.clinica.razonSocial !== null) &&
      (this.clinica.giro !== null) &&
      (this.clinica.representanteLegal !== null) &&
      (this.clinica.direccion !== null) &&
      (this.clinica.comuna !== null) &&
      (this.clinica.ciudad !== null) &&
      (this.clinica.telefono !== null) &&
      (this.clinica.celular !== null) &&
      (this.clinica.email !== null)
    ) {
      this.classBoton = "btn btn-primary";
      this.formularioOk = true;
    } else {
      this.classBoton = "btn btn-primary disabled";
    }
  }

  limpiarFormulario(){
    this.clinica.rut= null,
    this.clinica.nombre= null,
    this.clinica.razonSocial= null,
    this.clinica.giro= null,
    this.clinica.representanteLegal= null,
    this.clinica.direccion= null,
    this.clinica.comuna= null,
    this.clinica.ciudad= null,
    this.clinica.telefono= null,
    this.clinica.celular= null,
    this.clinica.email= null
    this.classBoton = "btn btn-primary disabled";
    this.formularioOk = false;
  }


}
