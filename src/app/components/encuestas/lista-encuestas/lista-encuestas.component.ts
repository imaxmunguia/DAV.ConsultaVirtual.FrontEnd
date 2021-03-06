import { Component, OnInit } from '@angular/core';
import {EncuestaService} from '../../../services/encuesta.service';
import {Router} from '@angular/router';
import {Encuesta} from '../../../models/encuesta.model';
import { load } from '@angular/core/src/render3';

@Component({
  selector: 'app-lista-encuestas',
  templateUrl: './lista-encuestas.component.html',
  styleUrls: ['./lista-encuestas.component.css']
})
export class ListaEncuestasComponent implements OnInit {
  encuesta:Encuesta;
  encuestas: Encuesta[] = [];
  encuestaService:EncuestaService;
  
  constructor(encuestaService:EncuestaService){
    this.encuestaService = encuestaService;
    this.encuesta = new Encuesta();
  }

  ngOnInit() {
    this.load();
  }
  load(){
    this.encuestaService.listarTodasLasEncuestas().subscribe((data:Encuesta[])=>{
      this.encuestas = data;
    },
    (error)=>{
      console.log('Error conectando')
    }
  );
  }
  accion(estado){
    return estado? 'CERRAR' : 'PUBLICAR';
  }

  toggle(id_encuesta){
    this.encuestaService.toggle(id_encuesta).subscribe((result)=>{
      this.load();
    });
  }


}
