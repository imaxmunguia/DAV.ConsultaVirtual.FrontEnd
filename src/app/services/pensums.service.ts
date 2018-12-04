import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PensumsService {

  uri = 'http://localhost:3000/api/pensums/';

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
}