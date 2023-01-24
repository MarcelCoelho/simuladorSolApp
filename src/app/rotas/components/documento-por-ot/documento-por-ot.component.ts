import { Component, Input, OnChanges, OnInit, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { documento, documentoItem, bulto } from '../../interfaces/documento.interface';
import { document, workOrder } from '../../interfaces/rotas.interface';
import { RotasService } from '../../services/rotas.service';

@Component({
  selector: 'app-documento-por-ot',
  templateUrl: './documento-por-ot.component.html',
  styleUrls: ['./documento-por-ot.component.css']
})
export class DocumentoPorOtComponent implements OnInit, OnChanges {

  @Input() ot!: workOrder;

  documento!: documento;
  bultos: bulto[] = [];
  documentoItens!: documentoItem[];

  @Output() onDocumentoGravado: EventEmitter<documento> = new EventEmitter();

  constructor(private rotasService: RotasService) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.documentoItens = this.listaInicialDocumentoItens;
    this.bultos = this.listaInicialBultos;
    this.documento = this.documentoInicial;
  }

  ngOnInit(): void { }

  private criarBultoVazio(): bulto {
    const bulto: bulto = {
      bolsaCodigo: '',
      id: '',
      precintoCodigo: ''
    };
    return bulto;
  }

  get documentoInicial(): documento {

    const documento: documento =
    {
      otId: this.ot !== undefined ? (this.ot.workOrderId || '') : '',
      bolSinMovimiento: false,
      paisCodigo: '',
      canalCodigo: '',
      codigoPuesto: '',
      codigoUsuario: '',
      delegacionCodigo: this.ot !== undefined ? (this.ot.branchGECode || '') : '',
      delegacionLocalizacionCodigo: this.ot !== undefined ? (this.ot.branchGECode || '') : '',
      documentoCodigo: '',
      documentoCodigoCliente: '',
      documentoCodigoSerie: '',
      documentoId: '',
      documentoImporte: [],
      documentoItens: this.documentoItens,
      emisorDocumentoCodigo: '1',
      empleoCodigo: '2',
      entidadGECodigo: this.ot !== undefined ? (this.ot.billingEntityGECode || '') : '',
      entidadLVCodigo: this.ot !== undefined ? (this.ot.billingEntityGECode || '') : '',
      estadoCodigo: '1',
      fechaServicio: new Date(),
      fechaEntradaDocumento: new Date(),
      localizacionCodigo: '1',
      observacion: '',
      servicioContratadoCodigo: '',
      subcanalCodigo: '',
      bultos: this.bultos,
      sistemaOrigenId: 'GENESIS'
    };
    return documento;
  }

  get listaInicialDocumentoItens(): documentoItem[] {

    const documentoItens: documentoItem[] =
      [
        {
          bulto: this.criarBultoVazio(),
          cantidad: 0,
          codTipoEmbalaje: '',
          divisaCodigo: '',
          tipoMercanciaCodigo: '',
          valor: 0
        },
        {
          bulto: this.criarBultoVazio(),
          cantidad: 0,
          codTipoEmbalaje: '',
          divisaCodigo: '',
          tipoMercanciaCodigo: '',
          valor: 0
        }
      ];


    return documentoItens;
  }

  get listaInicialBultos(): bulto[] {
    const bultos: bulto[] =

      [
        {
          precintoCodigo: '',
          bolsaCodigo: '',
          id: ''
        },
        {
          precintoCodigo: '',
          bolsaCodigo: '',
          id: ''
        },
      ];

    return bultos;
  }


  addDocumentoMemoria() {
    const bulto: bulto = {
      bolsaCodigo: '',
      id: '',
      precintoCodigo: ''
    };
    const documentoItem: documentoItem =

    {
      bulto: bulto,
      cantidad: 0,
      codTipoEmbalaje: '',
      divisaCodigo: '',
      tipoMercanciaCodigo: '',
      valor: 0
    };

    this.documento.documentoItens.push(documentoItem);
  }

  removerDocumentoMemoria(documentoItem: documentoItem) {
    const index = this.documento.documentoItens.indexOf(documentoItem);
    this.documento.documentoItens.splice(index, 1);
  }

  addBultoMemoria() {
    const bulto = this.criarBultoVazio();
    this.documento.bultos.push(bulto);
  }

  removerBultoMemoria(bulto: bulto) {
    const index = this.documento.bultos.indexOf(bulto);
    this.documento.bultos.splice(index, 1);
  }

  guardarDocumentoBase() {
    this.rotasService.gravarDocumento(this.documento)

      .subscribe({
        next: (resp: any) => {
          this.onDocumentoGravado.emit(this.documento);

          this.documentoItens = this.listaInicialDocumentoItens;
          this.bultos = this.listaInicialBultos;
          this.documento = this.documentoInicial;
        },
        error: (e) => {
          alert('Erro ao gravar documento: ' + e.status + ' - ' + e.error);
        }
      })
  }

}
