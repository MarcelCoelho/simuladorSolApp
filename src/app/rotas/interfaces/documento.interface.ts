export interface documento {
  bultos: bulto[];
  delegacionCodigo: string;
  bolSinMovimiento: boolean;
  delegacionLocalizacionCodigo: string;
  documentoCodigo: string;
  documentoCodigoCliente: string;
  documentoCodigoSerie: string;
  documentoId: string;
  documentoImporte: documentoImporte[];
  documentoItens: documentoItem[];
  emisorDocumentoCodigo: string;
  empleoCodigo: string;
  entidadGECodigo: string;
  entidadLVCodigo: string;
  estadoCodigo: string;
  fechaEntradaDocumento: Date;
  fechaServicio: Date;
  localizacionCodigo: string;
  observacion: string;
  otId: string;
  paisCodigo: string;
  servicioContratadoCodigo: string;
  canalCodigo: string;
  subcanalCodigo: string;
  codigoPuesto: string;
  codigoUsuario: string;
  sistemaOrigenId: string;
}

export interface documentoImporte {
  divisaCodigo: string;
  tipoMercanciaCodigo: string;
  valor: string;
}

export interface documentoItem {
  bulto: bulto;
  cantidad: number;
  divisaCodigo: string;
  tipoMercanciaCodigo: string;
  codTipoEmbalaje: string;
  valor?: number
}

export interface bulto {
  precintoCodigo: string;
  bolsaCodigo: string;
  id: string;
}

export interface documentoResponse {
  isSuccess: boolean;
  statusCode: string;
  message: string;
}