import { GraficosService } from './../../../services/graficos.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'Chart.js';
@Component({
  selector: 'app-graficos-index',
  templateUrl: './graficos-index.component.html',
  styleUrls: ['./graficos-index.component.css']
})
export class GraficosIndexComponent implements OnInit {

  chart = [];

  constructor(private graficos : GraficosService) { }

  ngOnInit() {
    this.graficos.listarResultadosEncuestas().subscribe(res=>console.log(res));
  }

}
