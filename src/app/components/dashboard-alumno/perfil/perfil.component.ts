import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../../../services/usuarios.service';
import {User} from '../../../models/usuario.model';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
usuario:User;
usuarioService:UsuariosService;
  constructor(usuarioService:UsuariosService) {
    this.usuarioService = usuarioService;
    
   }

  ngOnInit() {
    let token = this.usuarioService.getToken();
    let nombre=token['nombre'];
    this.usuario = new User();
    this.usuario.nombres = nombre.nombres;
    this.usuario.apellidos = nombre.apellidos;
    this.usuario.desc_carrera=token['desc_carrera'];
  }

}
