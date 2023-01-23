import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './components/counter/counter.component';
import { InputCustomComponent } from './components/input-component/input-custom.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarCustomComponent } from './components/calendar-custom/calendar-custom.component';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    CounterComponent,
    InputCustomComponent,
    CalendarCustomComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    CalendarModule
  ],
  exports: [
    CounterComponent,
    InputCustomComponent,
    CalendarCustomComponent
  ]
})
export class SharedModule { }
