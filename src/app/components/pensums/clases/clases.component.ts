import { Component, OnInit } from '@angular/core';
import {Clase} from '../../../models/clase.model';
//import {Pensum} from '../../../models/pensum.model';
import {PensumsService} from '../../../services/pensums.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {
  clase;
  clases;
  pensumService:PensumsService;

  constructor(pensumService:PensumsService, private router:Router) {
    this.pensumService = pensumService;
  }

  ngOnInit() {
    this.clase = new Clase();
  }

  mostrarClases(){
    this.pensumService.mostrarClasesPensum().subscribe((clases)=>{
      this.clases=clases;
      console.log(this.clases);
    })
  }

  submit(){
    this.pensumService.crearClase(this.clase);
    this.router.navigate(['/pensum/clases/lista']);
  }

}
