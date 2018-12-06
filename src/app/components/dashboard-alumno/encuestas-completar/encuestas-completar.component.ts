import { Component, OnInit } from '@angular/core';
import {EncuestaService} from '../../../services/encuesta.service';
import {Router} from '@angular/router';
import {Encuesta} from '../../../models/encuesta.model';

@Component({
  selector: 'app-encuestas-completar',
  templateUrl: './encuestas-completar.component.html',
  styleUrls: ['./encuestas-completar.component.css']

})
export class EncuestasCompletarComponent implements OnInit {

  encuesta:Encuesta;
  encuestas;
  encuestaService:EncuestaService;

  constructor(encuestaService:EncuestaService){
    this.encuestaService = encuestaService;
    this.encuesta = new Encuesta();
    
  }

  ngOnInit() {
    this.encuestaService.listarTodasLasEncuestas().subscribe((encuestas)=>{
      this.encuestas=encuestas;
    });
  
  }


}