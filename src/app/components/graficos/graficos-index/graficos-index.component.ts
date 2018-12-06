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

        const asignaturas = []
        const requisitos = []

        for (let item of data) {
          asignaturas.push(item.desc_clase);
          requisitos.push(item.id_requisito.length);
        }

        console.log(asignaturas)
        console.log(requisitos)

        this.graficoBarra = new Chart('canvasBarra', {
          type: 'bar',
          data: {
            labels: asignaturas,
            datasets: [{
              label: '# de requisitos por asignatura',
              data: requisitos,
              backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(153, 102, 255, 0.9)',
                'rgba(255, 159, 64, 0.9)',
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(153, 102, 255, 0.9)'
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
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
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
            labels: asignaturas,
            datasets: [
              {
                label: "My First Dataset",
                data: requisitos,
                fill: false,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.9)",
                  "rgba(255, 159, 64, 0.9)",
                  "rgba(255, 205, 86, 0.9)",
                  "rgba(75, 192, 192, 0.9)",
                  "rgba(54, 162, 235, 0.9)",
                  "rgba(153, 102, 255, 0.9)",
                  "rgba(201, 203, 207, 0.9)",
                  "rgba(255, 99, 132, 0.9)",
                  "rgba(255, 159, 64, 0.9)",
                  "rgba(255, 205, 86, 0.9)",
                  "rgba(75, 192, 192, 0.9)"
                ],
                borderColor: [
                  "rgb(255, 99, 132)",
                  "rgb(255, 159, 64)",
                  "rgb(255, 205, 86)",
                  "rgb(75, 192, 192)",
                  "rgb(54, 162, 235)",
                  "rgb(153, 102, 255)",
                  "rgb(201, 203, 207)",
                  "rgb(255, 99, 132)",
                  "rgb(255, 159, 64)",
                  "rgb(255, 205, 86)",
                  "rgb(75, 192, 192)"
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
