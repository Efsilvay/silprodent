import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor(private http: HttpClient) { }

  getOrdenes(){
    return this.http.get<Array<Ordenes>>(environment.rest.ordenes)
  }

  getOrden(id) : Observable<Ordenes>{
    return this.http.get<Ordenes>(`${environment.rest.ordenes}/${id}`);
  }

  agregaOrden(body) {
    return this.http.post<Ordenes>(environment.rest.ordenes, body);
  }

  editaOrden(body: Ordenes){
    return this.http.put<Ordenes>(`${environment.rest.ordenes}/${body.id}`,body);
  }

  eliminarOrden(id): Observable<Ordenes>{
    return this.http.delete<Ordenes>(`${environment.rest.ordenes}/${id}`)
  }

  getTrabajos(){
    return this.http.get<Array<TipoTrabajo>>(environment.rest.tipoTrabajo)
  }

  getEtapas(){
    return this.http.get<Array<Etapa>>(environment.rest.etapas)
  }
  getEstados(){
    return this.http.get<Array<Estado>>(environment.rest.estados)
  }

  agregaMensaje(body) {
    return this.http.post<Mensajes>(environment.rest.mensajes, body);
  }

  getMensajes(){
    return this.http.get<Array<Mensajes>>(environment.rest.mensajes);
  }

}

export interface Ordenes {
  id: number,
  clinica: number,
  dentista: number,
  paciente: number,
  tipoTrabajo: number,
  etapa: number,
  pieza: string,
  color: string,
  observacion: string,
  valor: number,
  estado: number
  fechaIngreso: string,
  fechaTermino: string,
  fechaDespacho: string,
  laboratorista: number
}

export interface TipoTrabajo{
  id: number,
  trabajo: string
}

export interface Etapa{
  id: number,
  etapa: string
}

export interface Estado{
  id: number,
  estado: string
}

export interface Mensajes{
  id: number,
  mensaje: string
}