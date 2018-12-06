import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PensumsService } from './../../../services/pensums.service';

@Component({
  selector: 'app-pensums-edit',
  templateUrl: './pensums-edit.component.html',
  styleUrls: ['./pensums-edit.component.css']
})
export class PensumsEditComponent implements OnInit {

  pensums: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private pensumsService: PensumsService,
    private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      id_carrera: ['', Validators.required],
      desc_carrera: ['', Validators.required],
      id_clase: ['', Validators.required],
      desc_clase: ['', Validators.required],
      id_requisito: ['', Validators.required],
      desc_requisito: ['', Validators.required]
    });
  }

  updateItem(id_carrera, des_carrera, id_clase, desc_clase, id_requisito, desc_requisito) {
    this.route.params.subscribe(params => {
      this.pensumsService.updateItem(id_carrera, des_carrera, id_clase, desc_clase, id_requisito, desc_requisito, params['id']);
      this.router.navigate(['index']);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pensumsService.editarAsignaturaEnPensum(params['id']).subscribe(res => {
        this.pensums = res;
      });
    });
  }

}
