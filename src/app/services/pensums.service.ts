
import { IPensums } from './../components/pensums/pensums-index/IPensums';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PensumsService {

  uri = 'http://localhost:3000/api/pensums';

  constructor(private http: HttpClient) { }

  agregarClaseEnPensum(id_carrera, des_carrera, id_clase, desc_clase, id_requisito, desc_requisito) {
    const obj = {
      id_carrera: id_carrera,
      des_carrera: des_carrera,
      id_clase: id_clase,
      desc_clase: desc_clase,
      id_requisito: id_requisito,
      desc_requisito: desc_requisito
    };
    this.http.post(`${this.uri}`, obj)
      .subscribe(res => console.log('Done'));
  }

  listarTodasLasAsignaturas() {
    return this
      .http
      .get(`${this.uri}`);
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

  deleteItem(id) {
    return this
      .http
      .delete(`${this.uri}/${id}`);
  }
}