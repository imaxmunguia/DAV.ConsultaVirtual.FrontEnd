import { Component, EventEmitter,  OnInit, Input,Output } from '@angular/core';

@Component({
  selector: 'week-day-selector',
  templateUrl: './week-day-selector.component.html',
  styleUrls: ['./week-day-selector.component.css']
})
export class WeekDaySelectorComponent{
  @Input()  selectedDays :[];
  @Output() toggleSelectedDay = new EventEmitter<boolean>();
  public const_days: any[];

  constructor() { 
    this.const_days=[{
      id: 7,
      name: "DOM",
      isSelected: false
    }, {
      id: 1,
      name: "LUN",
      isSelected: false
    }, {
      id: 2,
      name: "MAR",
      isSelected: false
    }, {
      id: 3,
      name: "MIE",
      isSelected: false
    }, {
      id: 4,
      name: "JUE",
      isSelected: false
    }, {
      id: 5,
      name: "VIE",
      isSelected: false
    }, {
      id: 6,
      name: "SAB",
      isSelected: false
    }];

  }
  toggleDay(day: number){
    if(this.const_days[day].isSelected){
      this.deleteDay(day);
    }else{
      this.addDay(day);
    }
  }

  addDay(day: number) {
    let addedDay=this.const_days[day];
    this.const_days[day].isSelected = true;
    this.toggleSelectedDay.emit(addedDay.id);
    
  }

  deleteDay(day: number) {
    let deletedDay=this.const_days[day];  
    this.const_days[day].isSelected = false;
    this.toggleSelectedDay.emit(deletedDay.id);
  }


}
