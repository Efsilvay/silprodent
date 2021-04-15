import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  getClinicas(){
    return this.http.get<Array<Clinicas>>(environment.rest.clinicas)
  }

  getClinica(id) : Observable<Clinicas>{
    return this.http.get<Clinicas>(`${environment.rest.clinicas}/${id}`);
  }

  agregaClinica(body) {
    return this.http.post<Clinicas>(environment.rest.clinicas, body);
  }
  
  editaClinica(body: Clinicas){
    return this.http.put<Clinicas>(`${environment.rest.clinicas}/${body.id}`,body);
  }

  eliminaClinica(id): Observable<Clinicas>{
    return this.http.delete<Clinicas>(`${environment.rest.clinicas}/${id}`)
  }


  getDentistas(){
    return this.http.get<Array<Dentistas>>(environment.rest.dentistas)
  }

  getDentista(id) : Observable<Dentistas>{
    return this.http.get<Dentistas>(`${environment.rest.dentistas}/${id}`);
  }

  agregaDentista(body) {
    return this.http.post<Dentistas>(environment.rest.dentistas, body);
  }

  editaDentista(body: Dentistas){
    return this.http.put<Dentistas>(`${environment.rest.dentistas}/${body.id}`,body);
  }

  eliminaDentista(id): Observable<Dentistas>{
    return this.http.delete<Dentistas>(`${environment.rest.dentistas}/${id}`)
  }


  getPacientes(){
    return this.http.get<Array<Pacientes>>(environment.rest.pacientes)
  }

  getPaciente(id) : Observable<Pacientes>{
    return this.http.get<Pacientes>(`${environment.rest.pacientes}/${id}`);
  }

  agregaPaciente(body) {
    return this.http.post<Pacientes>(environment.rest.pacientes, body);
  }
  
  editaPaciente(body: Pacientes){
    return this.http.put<Pacientes>(`${environment.rest.pacientes}/${body.id}`,body);
  }

  eliminaPaciente(id): Observable<Pacientes>{
    return this.http.delete<Pacientes>(`${environment.rest.pacientes}/${id}`)
  }

  
}

export interface Clinicas {
  id: number,
  rut: string,
  nombre: number,
  razonSocial: string,
  giro: string,
  representanteLegal: string,
  direccion: string,
  comuna: string,
  ciudad: string,
  telefono: number,
  celular: number,
  email: string
}

export interface Dentistas {
  id: number,
  rut: string,
  nombre: string,
  apellido: string,
  clinica: number,
  direccion: string,
  comuna: string,
  ciudad: string,
  telefono: number,
  celular: number,
  email: string
}


export interface Pacientes {
  id: number,
  nombre: string,
  apellido: string,
  clinica: number,
  dentista: number,
  sexo: string,
  edad: number,
  color: string,
  telefono: string,
  celular: string
}
