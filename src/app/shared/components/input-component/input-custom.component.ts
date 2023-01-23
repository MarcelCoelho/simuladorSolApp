import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-custom',
  templateUrl: './input-custom.component.html',
  styleUrls: ['./input-custom.component.css']
})
export class InputCustomComponent {

  @Input() value: any;
  @Input() title: string = "";
  @Input() disabled: string = "false";
  @Input() maxlength: string = "200";

  @Output() onValor: EventEmitter<any> = new EventEmitter();

  constructor() { }

}
