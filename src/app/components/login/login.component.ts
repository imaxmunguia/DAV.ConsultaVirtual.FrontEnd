import { Component, OnInit } from '@angular/core';
import { User } from '../../models/usuario.model';
import {UsuariosService} from '../../services/usuarios.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  error:String;
  usuariosService:UsuariosService;
  constructor(usuariosService: UsuariosService, private router:Router) {
    this.usuariosService = usuariosService;
    
  }

  ngOnInit() {
    this.user = new User();
  }

  submit(){
    console.log('Usuario');
    this.usuariosService.login(this.user).subscribe((auth)=>{
      if(typeof auth['error']!=='undefined'){
        this.error=auth['error'];
        return;
      };
      this.usuariosService.setToken(auth);
       
      if (auth['perfil'] === 'Administrador'){
        this.router.navigate(['/administrador']);
      }   
      else if(auth['perfil'] === 'Coordinador'){
        this.router.navigate(['/coordinador']);
      }
      else{
        this.router.navigate(['/dashboard']);
      }  
    })
  }

  
}
