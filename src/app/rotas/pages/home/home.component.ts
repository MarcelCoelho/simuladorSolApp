import { Component, OnInit } from '@angular/core';
import { IRota, workOrder } from '../../interfaces/rotas.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: IRota = {
    lap: [
      {
        lapNumber: 0
      }
    ],
    route: {
      routeCode: 0,
      branchCode: "",
      routeDate: new Date(),
      routeDescription: "",
      routeId: "",
      routeStatusCode: 0,
      routeStatusDescription: ""
    },
    workOrders: []
  };

  ot!: workOrder;

  constructor() { }

  ngOnInit(): void {
    const dadosRota = localStorage.getItem('dadosRota');

    if (dadosRota !== undefined && dadosRota !== null) {
      this.data = JSON.parse(dadosRota);
      console.log(this.data);
    }
  }

  receberDadosRota(dadosRota: IRota) {
    console.log(dadosRota);
    localStorage.removeItem("datosRota");
    localStorage.setItem('dadosRota', JSON.stringify(dadosRota));
    this.data = dadosRota;
  }

  receberOtSelecionada(ot: workOrder) {
    this.ot = ot;
    console.log('recebido: ', this.ot);
  }
}
