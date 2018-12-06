import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GraficosService {

  uri = 'http://localhost:3000/api/encuestas';

  constructor(private http: HttpClient) { }

  listarResultadosEncuestas() {
    return this
      .http
      .get(`${this.uri}`).map(res=>res);
  }
}