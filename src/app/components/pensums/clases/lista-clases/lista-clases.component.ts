import { Component, OnInit } from '@angular/core';
import {PensumsService} from '../../../../services/pensums.service';
import {Clase} from '../../../../models/clase.model';

@Component({
  selector: 'app-lista-clases',
  templateUrl: './lista-clases.component.html',
  styleUrls: ['./lista-clases.component.css']
})
export class ListaClasesComponent implements OnInit {
  clase:Clase;
  clases:Clase[]=[];
  pensumService:PensumsService;

  constructor(pensumService:PensumsService) {
    this.pensumService = pensumService;
    this.clase = new Clase();
  }

  ngOnInit() {
    this.pensumService.mostrarClasesPensum().subscribe((data:Clase[])=>{
      this.clases = data;
    },
    (error)=>{
      console.log('Error conectando')
    })
  }

}
