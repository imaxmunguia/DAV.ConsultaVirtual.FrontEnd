import {Injectable} from '@angular/core';
import {Router,CanActivate} from '@angular/router';
import {UsuariosService} from './services/usuarios.service';
@Injectable()
export class RoutingSettingsGuard implements CanActivate  {
  constructor(private router: Router, private usuariosService : UsuariosService) { }

  canActivate() : boolean {
    var token =  this.usuariosService.getToken();
    if(token!==null && typeof token['perfil']!=='undefined'){
        let perfil=token['perfil'];
        if (perfil === 'Administrador'){
            this.router.navigate(['/administrador']);
          }   
          else if(perfil === 'Coordinador'){
            this.router.navigate(['/coordinador']);
          }
          else{
            this.router.navigate(['/dashboard']);
          };
        }else{
            this.router.navigate(['/login']);
        }
        return true;
   
}