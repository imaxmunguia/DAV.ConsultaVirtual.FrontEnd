import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dashboard-option',
  templateUrl: './dashboard-option.component.html',
  styleUrls: ['./dashboard-option.component.css']
})
export class DashboardOptionComponent implements OnInit {
  @Input() label: string
  constructor() { }

  ngOnInit() {
  }

}
