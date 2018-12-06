import { Component, OnInit } from '@angular/core';
import { Encuesta } from '../../../models/encuesta.model';
import {EncuestaService} from '../../../services/encuesta.service';
import {Router} from '@angular/router';
import {UsuariosService} from '../../../services/usuarios.service';
import {PensumsService} from '../../../services/pensums.service';

@Component({
  selector: 'app-crear-encuesta',
  templateUrl: './crear-encuesta.component.html',
  styleUrls: ['./crear-encuesta.component.css']
})
export class CrearEncuestaComponent implements OnInit {
  encuesta;
  encuestaService:EncuestaService;
  usuarioservice:UsuariosService;
  pensumservice:PensumsService;

  constructor(pensumservice:PensumsService, usuarioservice:UsuariosService, encuestaService:EncuestaService, private router:Router){
    this.encuestaService = encuestaService;
    this.usuarioservice = usuarioservice;
    this.pensumservice = pensumservice;
  }

  ngOnInit() {
    let token = this.usuarioservice.getToken();
    console.log(token);
    this.encuesta= new Encuesta();
    this.encuesta.id_carrera = token['id_carrera'];
    this.encuesta.id_clase = token['id_clase'];
    this.encuesta.desc_clase = token['desc_clase'];
    this.encuesta.desc_carrera = token['desc_carrera'];
  }
  
  toggleDay(day:string):void {
    if(this.encuesta.dias.indexOf(day)>=0){
      let i=this.encuesta.dias.indexOf(day);
      this.encuesta.dias.pop(i);
    }else{
      let i=this.encuesta.dias.indexOf(day);
      this.encuesta.dias.push(day);
    }
  }

  submit(){
    this.encuestaService.agregarEncuesta(this.encuesta);
    this.router.navigate(['/encuesta/lista']);
  }
}
