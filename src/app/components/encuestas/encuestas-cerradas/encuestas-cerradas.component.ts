import { Component, OnInit } from '@angular/core';
import {EncuestaService} from '../../../services/encuesta.service';
import {Router} from '@angular/router';
import {Encuesta} from '../../../models/encuesta.model';

@Component({
  selector: 'app-encuestas-cerradas',
  templateUrl: './encuestas-cerradas.component.html',
  styleUrls: ['./encuestas-cerradas.component.css']
})
export class EncuestasCerradasComponent implements OnInit {
  encuesta:Encuesta;
  encuestas: Encuesta[] = [];
  encuestaService:EncuestaService;
  activa:boolean;

  constructor(encuestaService:EncuestaService){
    this.encuestaService = encuestaService;
    this.encuesta = new Encuesta();
    this.activa = false;
  }

  ngOnInit() {
    this.encuestaService.listarEncuestaPorEstado(this.activa);
    (error)=>{
      console.log('Error conectando')
    }
  
  }


}
