import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../../services/usuarios.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  usuariosService
  loggedIn;
  constructor(usuariosService:UsuariosService) {
    this.usuariosService=usuariosService;
  }

  ngOnInit() {
    this.loggedIn=this.usuariosService.isLoggedIn();
    console.log(this.loggedIn)
  }

}
