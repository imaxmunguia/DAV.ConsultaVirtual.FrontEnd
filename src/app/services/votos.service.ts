import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class VotosService {

  uri = 'http://localhost:3000/api/votos';

  constructor(private http: HttpClient) { }

  votos(id_encuesta) {
    return this
      .http
      .get(`${this.uri}/${id_encuesta}`);
  }
}