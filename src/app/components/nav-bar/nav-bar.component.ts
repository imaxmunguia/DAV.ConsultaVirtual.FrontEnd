import { Component, OnInit , Input} from '@angular/core';
import {UsuariosService} from '../../services/usuarios.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  usuariosService
  perfil
  menu
  route
  loggedIn

  @Input() mostrarOpciones=true;
  opciones={
    'Administraor':[
      ['Usuarios','usuario']
    ],
    'Alumno':[
      ['Encuestas','/dashboard/encuesta'],
      ['Mi Perfil','/dashboard/perfil'],
    ],
    'Coordinador':[
      ['Nueva encuesta','/encuesta/crear'],
      ['Modificar encuesta','/encuesta/editar'],
      ['Eliminar encuesta','/encuesta/eliminar'],
      ['Pensums','/pensum/lista'],
      ['Encuestas encuesta',''],
    ]
  };
  
  constructor(usuariosService:UsuariosService, private activatedRoute : ActivatedRoute) {
    this.usuariosService=usuariosService;
  }

  ngOnInit() {
    this.loggedIn=this.usuariosService.isLoggedIn();
    if(this.loggedIn){
      this.perfil=this.usuariosService.getPerfil();
      this.menu=this.opciones[this.perfil];
      this.route=this.activatedRoute.snapshot.routeConfig.path;
    }
    console.log(this.mostrarOpciones);
  }

  currentRoute(item){
    return item.replace(/^\/|\/$/g, '') == this.activatedRoute.snapshot.routeConfig.path;
  }

}
