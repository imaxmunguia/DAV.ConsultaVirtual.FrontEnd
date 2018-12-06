import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../../services/usuarios.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  usuariosService:UsuariosService;
  constructor(usuariosService:UsuariosService, private router:Router) {
    this.usuariosService = usuariosService;
   }

  ngOnInit() {
  }

  submit(){
    this.usuariosService.logout();
    this.router.navigate(['/login']);
  }

}
