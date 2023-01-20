import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  rutaCodigo: string = '';

  fechaActual!: Date;

  constructor() {}

  ngOnInit(): void {}

  changeRutaCodigo() {
    console.log(this.rutaCodigo);
  }

  changeValueDate() {
    console.log(this.fechaActual);
  }

  buscarRuta() {
    alert(this.rutaCodigo + ' - ' +  this.fechaActual);
  }
  
}
