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
    return this.http.post(`${this.uri}`, user);
  }

  login(user){
    return this.http.post(this.uri + 'login', user);
  }

  signup(user){
    return this.http.post(this.uri + 'signup', user);
  }
  
  public listarTodoLosUsuarios<T>(): Observable<T> {
    return this.http.get<T>(this.uri);
  }

  setToken(token){
    let savedToken=JSON.stringify(token);
    window.localStorage.setItem("token", savedToken);
  }

  getToken(){
    let token=window.localStorage.getItem("token");
    return JSON.parse(token);
  }

  isLoggedIn(){
    let token=this.getToken();
    if(typeof token!=='undefined'){
      return true;
    }
    return false;
  }

  getPerfil(){
    let token=this.getToken();
    if(typeof token!=='undefined'){
      return token['perfil'];
    }
    return false;
  }

  delete(id_usuario){
    return this.http.delete(this.uri+id_usuario, {});
  }

  logout(){
    window.localStorage.removeItem("token");
  }
}
