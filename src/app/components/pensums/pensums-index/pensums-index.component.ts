import { Component, OnInit } from '@angular/core';
import { PensumsService } from './../../../services/pensums.service';
import { IPensums } from './IPensums';
import { Pensum } from 'src/app/models/pensum.model';


@Component({
  selector: 'app-pensums-index',
  templateUrl: './pensums-index.component.html',
  styleUrls: ['./pensums-index.component.css']
})
export class PensumsIndexComponent implements OnInit {
  pensum:Pensum;
  pensums: Pensum[] = [];
  pensumService:PensumsService;

  constructor(pensumService: PensumsService) { 
    this.pensumService = pensumService;
    this.pensum=new Pensum();
  }

  deleteItem(id) {
    this.pensumService.deleteItem(id).subscribe(res => {
      console.log('Deleted');
    });
  }

  ngOnInit() {
    this.pensumService
      .listarTodosLosPensum()
      .subscribe((data: Pensum[]) => {
        this.pensums = data;
        console.log(this.pensums);
      });
  }

}
