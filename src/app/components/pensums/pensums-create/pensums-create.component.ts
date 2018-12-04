import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PensumsService } from './../../../services/pensums.service';

@Component({
  selector: 'app-pensums-create',
  templateUrl: './pensums-create.component.html',
  styleUrls: ['./pensums-create.component.css']
})
export class PensumsCreateComponent implements OnInit {

  pensumsForm: FormGroup;

  constructor(private pensumsService: PensumsService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.pensumsForm = this.fb.group({
      id_carrera: ['', Validators.required],
      desc_carrera: ['', Validators.required],
      id_clase: ['', Validators.required],
      desc_clase: ['', Validators.required],
      id_requisito: ['', Validators.required],
      desc_requisito: ['', Validators.required]
    });
  }

  agregarClaseEnPensum(id_carrera, des_carrera, id_clase, desc_clase, id_requisito, desc_requisito) {
    this.pensumsService.agregarClaseEnPensum(id_carrera, des_carrera, id_clase, desc_clase, id_requisito, desc_requisito);
  }

  ngOnInit() {
  }

}
