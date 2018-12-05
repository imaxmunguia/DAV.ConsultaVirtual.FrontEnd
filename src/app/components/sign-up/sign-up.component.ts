import { Component, OnInit } from '@angular/core';
import {PensumsService} from '../../services/pensums.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  pensums: any[];
  constructor(pensumsService:PensumsService) {
    pensumsService
            .listarTodasLasAsignaturas<any[]>()
            .subscribe((data: any[])=>{
              console.log(data);
              this.pensums = data
            });
   }

  ngOnInit() {
  }

}
