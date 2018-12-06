import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Rx";


@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  uri = 'http://localhost:3000/api/encuestas/';

  constructor(private http:HttpClient) { }

  agregarEncuesta(encuesta){
    this.http.post(`${this.uri}`, encuesta)
    .subscribe(res=>console.log('Done'));
  }

  public listarTodasLasEncuestas<T>():Observable<T> {
    return this.http.get<T>(this.uri);
  }

  modificarEncuesta(encuesta){
    this.http.put(`${this.uri}`+ 'modificar', encuesta)
    .subscribe(res=>console.log('Done'));
  }

  eliminarEncuesta(encuesta){
    this.http.delete(`${this.uri}`, encuesta.id_encuesta)
    .subscribe(res=>console.log('Done'));
  }

  listarEncuestaPorID(id_encuesta){
    this.http.get(`${this.uri}` + '/:id', id_encuesta)
    .subscribe(res=>console.log('Done'));
  }

  listarEncuestaPorEstado(activa){
    this.http.get(`${this.uri}` + '/:cerradas', activa)
    .subscribe(res=>console.log('Done'));
  }
}
