import { Component, OnInit } from '@angular/core';
import { PensumsService } from '../../../services/pensums.service';

@Component({
  selector: 'app-clases-cursadas',
  templateUrl: './clases-cursadas.component.html',
  styleUrls: ['./clases-cursadas.component.css']
})
export class ClasesCursadasComponent implements OnInit {
  clases
  constructor(private pensumsService: PensumsService ) { }

  ngOnInit() {
    this.pensumsService.clases().subscribe((clases)=>{
      this.clases=clases;
    });
  }

  toggle(clase_id){
    this.pensumsService.toggle(clase_id);
  }

}
