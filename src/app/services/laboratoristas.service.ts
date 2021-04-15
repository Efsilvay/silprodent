import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaboratoristasService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getLaboratoristas() {
    return this.http.get<Array<Lab>>(environment.rest.laboratoristas)
  }

  getLaboratorista(id) : Observable<Lab>{
    return this.http.get<Lab>(`${environment.rest.laboratoristas}/${id}`);
  }

  agregaLaboratorista(body) {
    return this.http.post<Lab>(environment.rest.laboratoristas, body);
  }
  editaLaboratorista(body: Lab){
    return this.http.put<Lab>(`${environment.rest.laboratoristas}/${body.id}`,body);
  }

  eliminaLaboratorista(id): Observable<Lab>{
    return this.http.delete<Lab>(`${environment.rest.laboratoristas}/${id}`)
  }
}


export interface Lab {
  id?: number,
  rut: string,
  nombre: string,
  apellido: string,
  telefono: number,
  email: string
}