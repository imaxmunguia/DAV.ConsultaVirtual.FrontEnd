import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {UsuariosService} from '../services/usuarios.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
    constructor(public usuariosService:UsuariosService){

    }

    intercept(request: HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
        request = request.clone({
            setHeaders: {
                Authorization:`Bearer ${this.usuariosService.getToken()}`
            }
        });
        return next.handle(request);
    }
}