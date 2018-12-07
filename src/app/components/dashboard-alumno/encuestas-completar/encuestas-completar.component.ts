import { Component, OnInit } from '@angular/core';
import {EncuestaService} from '../../../services/encuesta.service';
import {Router,ActivatedRoute} from '@angular/router';
import {Encuesta} from '../../../models/encuesta.model';
import {Voto} from '../../../models/voto.model';

@Component({
  selector: 'app-encuestas-completar',
  templateUrl: './encuestas-completar.component.html',
  styleUrls: ['./encuestas-completar.component.css']

})
export class EncuestasCompletarComponent implements OnInit {
  id:String;
  encuesta;
  voto;
  encuestaService:EncuestaService;

  constructor(encuestaService:EncuestaService, private route: ActivatedRoute, private router:Router){
    this.encuestaService = encuestaService;
    this.encuesta = new Encuesta();
    this.id=this.route.snapshot.params.id; 
  }

  ngOnInit() {
    this.encuestaService.listarEncuestaPorID(this.id).subscribe((encuesta)=>{
      this.encuesta=encuesta;
      
    });
    this.voto=new Voto();
  
  }

  submit(){
    this.encuestaService.votar(this.encuesta._id,this.voto).subscribe((voto)=>{
      this.router.navigate(['/dashboard/encuesta']);  
    });
  }

  horario(){
    return this.encuesta.hora+' '+this.encuesta.dias.join(' ');
  }


}