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
      console.log('here')
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
