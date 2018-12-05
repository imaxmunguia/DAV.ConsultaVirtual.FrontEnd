import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Rx";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  uri = 'http://localhost:3000/api/usuarios/';

  constructor(private http: HttpClient) { }

  agregarUsuario(user) {
    this.http.post(`${this.uri}`, user)
      .subscribe(res => console.log('Done'));
  }

  login(user){
    return this.http.post(this.uri + 'login', user);
  }
  
  public listarTodoLosUsuarios<T>(): Observable<T> {
    return this.http.get<T>(this.uri);
  }

  setToken(token){
    window.sessionStorage.setItem("token", token);
  }

  getToken(){
    return window.sessionStorage.getItem("token");
  }

  logout(){
    window.sessionStorage.removeItem("token");
  }
}