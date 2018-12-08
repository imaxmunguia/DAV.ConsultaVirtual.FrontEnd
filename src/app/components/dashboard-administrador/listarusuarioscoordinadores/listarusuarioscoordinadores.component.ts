import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './../../../services/usuarios.service';
import {User} from '../../../models/usuario.model';


@Component({
  selector: 'app-listarusuarioscoordinadores',
  templateUrl: './listarusuarioscoordinadores.component.html',
  styleUrls: ['./listarusuarioscoordinadores.component.css']

})
export class ListarusuarioscoordinadoresComponent implements OnInit {
  usuario:User;
  usuarios: User[] = [];
  usuarioService:UsuariosService;

  constructor(usuarioService:UsuariosService){
    this.usuarioService = usuarioService;
    this.usuario = new User();
  }

  ngOnInit() {
    this.usuarioService.listarTodoLosUsuarios().subscribe((data:User[])=>{
      this.usuarios = data;
    },
    (error)=>{
      console.log('Error conectando')
    }
  );
  }


}
