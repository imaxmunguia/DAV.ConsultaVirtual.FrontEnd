import { Component, OnInit } from '@angular/core';
import { PensumsService } from './../../../services/pensums.service';
import { IPensums } from './IPensums';


@Component({
  selector: 'app-pensums-index',
  templateUrl: './pensums-index.component.html',
  styleUrls: ['./pensums-index.component.css']
})
export class PensumsIndexComponent implements OnInit {

  pensums: IPensums[];

  constructor(private pensumsService: PensumsService) { }

  deleteItem(id) {
    this.pensumsService.deleteItem(id).subscribe(res => {
      console.log('Deleted');
    });
  }

  ngOnInit() {
    this.pensumsService
      .listarTodasLasAsignaturas()
      .subscribe((data: IPensums[]) => {
        this.pensums = data;
      });
  }

}
