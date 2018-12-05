import { Component, OnInit } from '@angular/core';
import { Encuesta } from '../../../models/encuesta.model';
@Component({
  selector: 'app-crear-encuesta',
  templateUrl: './crear-encuesta.component.html',
  styleUrls: ['./crear-encuesta.component.css']
})
export class CrearEncuestaComponent implements OnInit {
  encuesta
  constructor() { }

  ngOnInit() {
    this.encuesta= new Encuesta();
  }
  toggleDay(day:string):void {
    if(this.encuesta.days.indexOf(day)>=0){
      let i=this.encuesta.days.indexOf(day);
      this.encuesta.days.pop(i);
    }else{
      let i=this.encuesta.days.indexOf(day);
      this.encuesta.days.push(day);
    }
  }
}