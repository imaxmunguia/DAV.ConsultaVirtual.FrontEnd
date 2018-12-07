import { Component, OnInit } from '@angular/core';
import {EncuestaService} from '../../../services/encuesta.service';
import {Router} from '@angular/router';
import {Encuesta} from '../../../models/encuesta.model';

@Component({
  selector: 'app-encuestas-pendientes',
  templateUrl: './encuestas-pendientes.component.html',
  styleUrls: ['./encuestas-pendientes.component.css']
})
export class EncuestasPendientesComponent implements OnInit {

  encuesta:Encuesta;
  encuestas;
  encuestaService:EncuestaService;
  activa:boolean;

  constructor(encuestaService:EncuestaService){
    this.encuestaService = encuestaService;
    this.encuesta = new Encuesta();
    this.activa = false;
  }

  ngOnInit() {
    this.encuestaService.listarTodasLasEncuestas().subscribe((encuestas)=>{
      console.log(encuestas);
      this.encuestas=encuestas;
    });
  
  }


}

