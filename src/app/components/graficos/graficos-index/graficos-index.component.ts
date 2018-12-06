import { GraficosService } from './../../../services/graficos.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'Chart.js';
import { IEncuestas } from './IEncuesta';

@Component({
  selector: 'app-graficos-index',
  templateUrl: './graficos-index.component.html',
  styleUrls: ['./graficos-index.component.css']
})
export class GraficosIndexComponent implements OnInit {

  graficoBarra = [];
  graficoCircular = [];
  graficoBarraH = [];

  encuestas: IEncuestas[];

  constructor(private graficosService: GraficosService) { }

  ngOnInit() {
    this.graficosService
      .listarResultadosEncuestas()
      .subscribe((data: IEncuestas[]) => {

        this.encuestas = data;

        const etiquetasEjeX = ["aceptacion","horario","dinero","campus","transporte","catedratico","otros","votos"]
        const valoresEjeX = []

        for (let item of data) {
          valoresEjeX.push(item.aceptacion);
          valoresEjeX.push(item.horario);
          valoresEjeX.push(item.dinero);
          valoresEjeX.push(item.campus);
          valoresEjeX.push(item.transporte);
          valoresEjeX.push(item.catedratico);
          valoresEjeX.push(item.otros);
          valoresEjeX.push(item.votos);
        }

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
            "labels": [
              "Red",
              "Blue",
              "Yellow"
            ],
            "datasets": [
              {
                "label": "My First Dataset",
                "data": [
                  300,
                  50,
                  100
                ],
                "backgroundColor": [
                  "rgb(255, 99, 132)",
                  "rgb(54, 162, 235)",
                  "rgb(255, 205, 86)"
                ]
              }
            ]
          }
        });

        this.graficoBarraH = new Chart('canvasBarraH', {
          type: "horizontalBar",
          data: {
            labels: etiquetasEjeX,
            datasets: [
              {
                label: "My First Dataset",
                data: valoresEjeX,
                fill: false,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.9)",
                  "rgba(255, 159, 64, 0.9)",
                  "rgba(255, 205, 86, 0.9)",
                  "rgba(75, 192, 192, 0.9)",
                  "rgba(54, 162, 235, 0.9)",
                  "rgba(153, 102, 255, 0.9)",
                  "rgba(201, 203, 207, 0.9)",
                  "rgba(255, 99, 132, 0.9)"
                ],
                borderColor: [
                  "rgb(255, 99, 132)",
                  "rgb(255, 159, 64)",
                  "rgb(255, 205, 86)",
                  "rgb(75, 192, 192)",
                  "rgb(54, 162, 235)",
                  "rgb(153, 102, 255)",
                  "rgb(201, 203, 207)",
                  "rgb(255, 99, 132)"
                ],
                borderWidth: 1
              }
            ]
          },
          options: {
            scales: {
              xAxes: [
                {
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            }
          }
        });

      });
  }
}
