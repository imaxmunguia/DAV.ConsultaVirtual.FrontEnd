
import { IPensums } from './../components/pensums/pensums-index/IPensums';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Rx";

// export class Serializable {
//   constructor(json?: any) {
//     if (json) {
//       Object.assign(this, json);
//     }
//   }
// }
// export class Pensum extends Serializable {}

@Injectable({
  providedIn: 'root'
})
export class PensumsService {

  uri = 'http://localhost:3000/api/pensums';
  clasesaprobadas = 'http://localhost:3000/api/clasesaprobadas';
  clasesPensum = 'http://localhost:3000/api/pensums/clases';

  constructor(private http: HttpClient) { }

  agregarClaseEnPensum(id_carrera, desc_carrera, id_clase, desc_clase, id_requisito, desc_requisito) {
    const obj = {
      id_carrera: id_carrera,
      desc_carrera: desc_carrera,
      id_clase: id_clase,
      desc_clase: desc_clase,
      id_requisito: id_requisito,
      desc_requisito: desc_requisito
    };
    this.http.post(`${this.uri}`, obj)
      .subscribe(res => console.log('Done'));
  }

  // listarTodasLasAsignaturas1() {
  //   return this
  //     .http
  //     .get(`${this.uri}`);
  // }

  public listarTodasLasAsignaturas<T>(): Observable<T> {
    return this.http.get<T>(this.uri);
  }

  public mostrarClasesPensum<T>(): Observable<T> {
    return this.http.get<T>(this.clasesPensum);
  }

  crearClase(clase){
    return this.http.post(`${this.uri}`, clase);
  }

  editarAsignaturaEnPensum(id) {
    return this
      .http
      .get(`${this.uri}/${id}`);
  }

  updateItem(id_carrera, des_carrera, id_clase, desc_clase, id_requisito, desc_requisito, id) {
    const obj = {
      id_carrera: id_carrera,
      des_carrera: des_carrera,
      id_clase: id_clase,
      desc_clase: desc_clase,
      id_requisito: id_requisito,
      desc_requisito: desc_requisito
    };
    this.http
      .put(`${this.uri}/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
  clases(){
    return this.http.get(this.uri+'/cursadas');
  }
  toggle(id_clase){
    let url=this.clasesaprobadas+'/toggle/'+id_clase;
    this.http.post(url,{}).subscribe(res => console.log('Done'));
  }
  deleteItem(id) {
    return this
      .http
      .delete(`${this.uri}/${id}`);
  }

  public listarTodosLosPensum(){
    return this
    .http
    .get(`${this.uri}`+'/lista');
  } 
}