import { Component, OnInit, Input } from '@angular/core';
import { VotosService } from '../../services/votos.service';
@Component({
  selector: 'votos-lista',
  templateUrl: './votos-lista.component.html',
  styleUrls: ['./votos-lista.component.css']
})
export class VotosListaComponent implements OnInit {
  votos;
  @Input() id_encuesta;
  constructor(private votosService: VotosService) { }

  ngOnInit() {
    this.votosService.votos(this.id_encuesta).subscribe((votos)=>{
      this.votos=votos;
      console.log(votos);
    })
  }

}
