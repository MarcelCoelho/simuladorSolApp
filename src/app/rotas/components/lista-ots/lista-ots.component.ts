import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IRota, workOrder } from '../../interfaces/rotas.interface';

@Component({
  selector: 'app-lista-ots',
  templateUrl: './lista-ots.component.html',
  styleUrls: ['./lista-ots.component.css']
})
export class ListaOtsComponent {

  @Input() data!: IRota;

  backgroundList: string = '';
  otSelecionada!: workOrder;

  @Output() onSelecionarOT: EventEmitter<workOrder> = new EventEmitter();

  get existeDadosRota(): boolean {
    return this.data.workOrders?.length > 0;
  }

  constructor() {

  }

  ativarOT(ot: workOrder) {
    this.otSelecionada = ot;
    console.log('Emitido: ', ot);
    this.onSelecionarOT.emit(ot);

  }

  getClasseCSS(ot: workOrder) {
    return this.otSelecionada?.workOrderId === ot?.workOrderId ? 'otCardSelecionada' : 'otCard';
  }

}
