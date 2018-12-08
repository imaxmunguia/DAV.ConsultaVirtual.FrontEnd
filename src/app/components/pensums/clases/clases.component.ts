import { Component, OnInit } from '@angular/core';
import {Clase} from '../../../models/clase.model';
//import {Pensum} from '../../../models/pensum.model';
import {PensumsService} from '../../../services/pensums.service';
import {UsuariosService} from '../../../services/usuarios.service';
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

  constructor(pensumService:PensumsService, private router:Router, private usuariosService: UsuariosService) {
    this.pensumService = pensumService;
  }

  ngOnInit() {
    this.clase = new Clase();
    let token=this.usuariosService.getToken();
    this.clase.id_carrera=token['id_carrera'];
    this.clase.desc_carrera=token['desc_carrera'];
    this.mostrarClases();
  }
  mostrarClases(){
    this.pensumService.mostrarClasesPensum().subscribe((clases)=>{
      this.clases=clases;
    })
  }
  submit(){
    this.pensumService.crearClase(this.clase).subscribe((e)=>{
      this.router.navigate(['/pensum/clases/lista',this.clase.id_carrera]);
    });
  }

}
