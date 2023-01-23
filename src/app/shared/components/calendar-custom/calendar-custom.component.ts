import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calendar-custom',
  templateUrl: './calendar-custom.component.html',
  styleUrls: ['./calendar-custom.component.css']
})
export class CalendarCustomComponent {
  @Input() value: any;
  @Input() title: string = "";
  @Input() disabled: string = "false";

  @Output() onValor: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
