import { Component, OnInit } from '@angular/core';
import {User} from '../../models/usuario.model';
import {UsuariosService} from '../../services/usuarios.service';

@Component({
  selector: 'app-dashboard-alumno',
  templateUrl: './dashboard-alumno.component.html',
  styleUrls: ['./dashboard-alumno.component.css']
})
export class DashboardAlumnoComponent implements OnInit {
  user:User;
  usuariosService:UsuariosService;
  constructor(usuariosService:UsuariosService) {

  }

  ngOnInit() {
    
  }

}
