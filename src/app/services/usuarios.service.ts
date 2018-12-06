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

  signup(user){
    return this.http.post(this.uri + 'signup', user);
  }
  
  public listarTodoLosUsuarios<T>(): Observable<T> {
    return this.http.get<T>(this.uri);
  }

  setToken(token){
    let savedToken=JSON.stringify(token);
    window.sessionStorage.setItem("token", savedToken);
  }

  getToken(){
    let token=window.sessionStorage.getItem("token");
    return JSON.parse(token);
  }

  isLoggedIn(){
    let token=this.getToken();
    if(typeof token!=='undefined'){
      return true;
    }
    return false;
  }

  logout(){
    window.sessionStorage.removeItem("token");
  }
}
