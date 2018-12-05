import { Component, OnInit } from '@angular/core';
import {User} from '../../models/usuario.model';
import {Router} from '@angular/router';
import {UsuariosService} from '../../services/usuarios.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user:User;
  usuariosService:UsuariosService;
  constructor(usuariosService:UsuariosService, private router:Router) {
    this.usuariosService = usuariosService; 
    this.user = new User();
    this.user.perfil = 'Alumno';

  }

  ngOnInit() {
  }

  submit(){
    this.usuariosService.agregarUsuario(this.user);
    this.usuariosService.login(this.user).subscribe((auth)=>{
      this.usuariosService.setToken(auth['token']);
      this.router.navigate(['/dashboard']);  
    })
  }

}
