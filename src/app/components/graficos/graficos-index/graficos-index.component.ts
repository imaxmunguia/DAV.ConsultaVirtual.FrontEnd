import { GraficosService } from './../../../services/graficos.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'Chart.js';
import { IEncuestas } from './IEncuesta';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-graficos-index',
  templateUrl: './graficos-index.component.html',
  styleUrls: ['./graficos-index.component.css']
})
export class GraficosIndexComponent implements OnInit {
  id : String;
  dif: Number;
  graficoBarra = [];
  graficoCircular = [];

  encuestas: IEncuestas;

  constructor(private graficosService: GraficosService, private route:ActivatedRoute) { 
    this.route.queryParams.subscribe((params)=>{
      this.id=this.route.snapshot.params.id;
    })

  }

  ngOnInit() {
    this.graficosService
      .listarResultadosEncuestas(this.id)
      .subscribe((data: IEncuestas) => {

        
        this.encuestas = data;

        const etiquetasGraficoPastel = ["De Acuerdo","No De Acuerdo"]
        const valoresGraficoPastel = []

        const etiquetasEjeX = ["Horario","Dinero","Ubicacion Campus","Transporte Campus","Docente","Otros"]
        const valoresEjeX = []

        this.dif = parseInt(this.encuestas.votos.toString())-parseInt(this.encuestas.aceptacion.toString());
          valoresGraficoPastel.push(this.encuestas.aceptacion);
          valoresGraficoPastel.push(this.dif);

          valoresEjeX.push(this.encuestas.horario);
          valoresEjeX.push(this.encuestas.dinero);
          valoresEjeX.push(this.encuestas.campus);
          valoresEjeX.push(this.encuestas.transporte);
          valoresEjeX.push(this.encuestas.catedratico);
          valoresEjeX.push(this.encuestas.otros);          
      

        console.log(data)
        console.log(etiquetasEjeX)
        console.log(valoresEjeX)

        this.graficoBarra = new Chart('canvasBarra', {
          type: 'bar',
          data: {
            labels: etiquetasEjeX,
            datasets: [{
              label: '# de requisitos por asignatura',
              data: valoresEjeX,
              backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(153, 102, 255, 0.9)',
                'rgba(255, 159, 64, 0.9)',
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });

        this.graficoCircular = new Chart('canvasCircular', {
          "type": "doughnut",
          "data": {
            "labels": etiquetasGraficoPastel,
            "datasets": [
              {
                "label": "Opiniones",
                "data": valoresGraficoPastel,
                "backgroundColor": [
                  "rgb(255, 99, 132)",
                  "rgb(54, 162, 235)"
                ]
              }
            ]
          }
        });       

      });
  }
}
