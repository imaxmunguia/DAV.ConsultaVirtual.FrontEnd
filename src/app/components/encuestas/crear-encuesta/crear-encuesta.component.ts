import { Component, OnInit } from '@angular/core';
import { Encuesta } from '../../../models/encuesta.model';
import {EncuestaService} from '../../../services/encuesta.service';
import {Router} from '@angular/router';
import {UsuariosService} from '../../../services/usuarios.service';
import {PensumsService} from '../../../services/pensums.service';
import {CatedraticosService} from '../../../services/catedraticos.service';


@Component({
  selector: 'app-crear-encuesta',
  templateUrl: './crear-encuesta.component.html',
  styleUrls: ['./crear-encuesta.component.css']
})
export class CrearEncuestaComponent implements OnInit {
  encuesta;
  pensums;
  catedraticos;
  encuestaService:EncuestaService;
  usuarioservice:UsuariosService;
  pensumservice:PensumsService;
  catedraticoservice:CatedraticosService;

  constructor(catedraticoservice:CatedraticosService, pensumservice:PensumsService, usuarioservice:UsuariosService, encuestaService:EncuestaService, private router:Router){
    this.encuestaService = encuestaService;
    this.usuarioservice = usuarioservice;
    this.pensumservice = pensumservice;
    this.catedraticoservice = catedraticoservice;
    this.encuesta= new Encuesta();
  }

  ngOnInit() {
    let token = this.usuarioservice.getToken();
    
    this.encuesta.id_carrera = token['id_carrera'];
    this.encuesta.desc_carrera = token['desc_carrera'];
    this.mostrarPensum();
    this.mostrarCatedraticos();
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

  mostrarPensum(){
    this.pensumservice.listarTodasLasAsignaturas().subscribe((pensums)=>{
      this.pensums=pensums;
    })
  }

  mostrarCatedraticos(){
    this.catedraticoservice.listarTodosLosCatedraticos().subscribe((catedraticos)=>{
      this.catedraticos=catedraticos;
    })
    
  }



  submit(){
    let pensum=this.encuesta.id_clase.split('_');
    this.encuesta.desc_clase =pensum[1];
    this.encuesta.id_clase =pensum[0];
    this.encuestaService.agregarEncuesta(this.encuesta);
    this.router.navigate(['/encuesta/lista']);
  }
  publicar(){
    this.encuesta.activa=true;
    this.submit();
  }


  isNewRecord(){
    return typeof this.encuesta._id==='undefined' || this.encuesta._id.length<0;
  }
}
