import { Component, Input, OnInit } from '@angular/core';
import { document, workOrder } from '../../interfaces/rotas.interface';

@Component({
  selector: 'app-documento-por-ot',
  templateUrl: './documento-por-ot.component.html',
  styleUrls: ['./documento-por-ot.component.css']
})
export class DocumentoPorOtComponent implements OnInit {

  @Input() ot!: workOrder;

  otTeste!: workOrder;

  dataRota!: Date;

  //#region Variaveis Loop
  bolsaCodigo1: string = "";
  bolsaCodigo2: string = "";
  bolsaCodigo3: string = "";
  bolsaCodigo4: string = "";
  bolsaCodigo5: string = "";

  id1: string = "";
  id2: string = "";
  id3: string = "";
  id4: string = "";
  id5: string = "";

  precintoCodigo1: string = "";
  precintoCodigo2: string = "";
  precintoCodigo3: string = "";
  precintoCodigo4: string = "";
  precintoCodigo5: string = "";

  divisaCodigo1: string = "";
  divisaCodigo2: string = "";
  divisaCodigo3: string = "";
  divisaCodigo4: string = "";
  divisaCodigo5: string = "";

  tipoMercancia1: string = "";
  tipoMercancia2: string = "";
  tipoMercancia3: string = "";
  tipoMercancia4: string = "";
  tipoMercancia5: string = "";

  valor1: string = "";
  valor2: string = "";
  valor3: string = "";
  valor4: string = "";
  valor5: string = "";

  //#endregion

  constructor() {
    this.otTeste = this.listaInicialDocumentos;
  }
  ngOnInit(): void {
    console.log('OnInit documento por ot: ', this.ot);
  }

  get listaInicialDocumentos(): workOrder {
    const ot: workOrder = {
      documents: [
        {
          referenceID: '1',
          documentCode: '',
          documentId: '',
          bultos: []
        },
        {
          referenceID: '2',
          documentCode: '',
          documentId: '',
          bultos: [
            {
              bolsaCodigo: '',
              id: '',
              precintoCodigo: ''
            }
          ]
        }
      ]
    };
    return ot;
  }

  addDocumentoMemoria() {
    const doc: document = {
      referenceID: (this.otTeste.documents.length + 1).toString(),
      documentCode: '',
      documentId: '',
      bultos: []
    }

    this.otTeste.documents.push(doc);
  }

  removerDocumentoMemoria(documento: document) {
    const index = this.otTeste.documents.indexOf(documento);

    this.otTeste.documents.splice(index, 1);
  }

  guardarDocumentoBase() {
    console.log('doc1: ', this.otTeste.documents[0].documentCode, 'doc2: ', this.otTeste.documents[1].documentCode)
  }

}
