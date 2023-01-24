import { Component, EventEmitter, Input, Output } from '@angular/core';
import { document, documentItem, IRota, workOrder, breakdown, container } from '../../interfaces/rotas.interface';
import { documento, documentoItem, bulto } from '../../interfaces/documento.interface';

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
    return this.data?.workOrders?.length > 0;
  }

  constructor() {

  }

  ativarOT(ot: workOrder) {
    this.otSelecionada = ot;
    this.onSelecionarOT.emit(ot);

  }

  getClasseCSS(ot: workOrder) {
    return this.otSelecionada?.workOrderId === ot?.workOrderId ? 'otCardSelecionada' : 'otCard';
  }

  receberDocumentoGravado(documento: documento) {
    const ot = this.data.workOrders.filter(ot => {
      return ot.workOrderId === documento.otId;
    })[0];

    if (ot !== undefined || ot !== null) {
      ot.documents.push(this.converterInterfaceDocumento(documento));
    }
  }

  private converterInterfaceDocumento(documento: documento): document {

    const document: document = {
      number: documento.documentoCodigo,
      documentItem: this.converterContratoDocumentoItens(documento.documentoItens),
      channelCode: '',
      containers: [],
      customerDocumentCode: '',
      documentAmount: [],
      documentEntryDate: new Date(),
      documentId: documento.documentoId,
      employmentCode: '',
      entityGE: null,
      entityLV: null,
      issuingDocument: null,
      locationCode: '',
      observation: '',
      serialNumber: '',
      subChannelCode: ''
    }

    return document;
  }

  private converterContratoDocumentoItens(documentoItens: documentoItem[]): documentItem[] {

    let documentItens: documentItem[] = [];

    documentoItens.forEach(di => {

      const documentIten: documentItem = {
        currencyCode: di.divisaCodigo,
        packagingTypeCode: di.codTipoEmbalaje,
        number: di.cantidad,
        value: di.valor || 0,
        breakdown: [],
        commodityTypeCode: di.tipoMercanciaCodigo,
        commodityTypeDescription: '',
        container: this.converterContratoBulto(di.bulto)
      };

      documentItens.push(documentIten);
    });

    return documentItens;

  }

  private converterContratoBulto(bulto: bulto): container {
    const container: container = {
      bagCode: bulto.bolsaCodigo,
      id: bulto.id,
      sealCode: bulto.precintoCodigo,
      bundlerPackage: '',
      originalSeal: ''
    };
    return container;
  }

}
