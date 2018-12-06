import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Rx";

@Injectable({
  providedIn: 'root'
})
export class CatedraticosService {

  uri = 'http://localhost:3000/api/catedraticos/';

  constructor(private http: HttpClient) { }

  public listarTodosLosCatedraticos<T>(): Observable<T>{
    return this.http.get<T>(this.uri);
  }
}
