export interface IRota {
  lap: lap[];
  route: route;
  workOrders: workOrder[]
}

export interface lap {
  lapNumber: number;
}

export interface route {
  branchCode: string;
  routeCode: number;
  routeDate: Date;
  routeDescription: string;
  routeId: string;
  routeStatusCode: number;
  routeStatusDescription: string;
}

export interface workOrder {
  routeId?: string;
  workOrderId?: string;
  sequence?: number;
  productCode?: string;
  productDescription?: string;
  lapNumber?: number;
  billingEntityGECode?: string;
  billingEntityGEDescription?: string;
  statusLVCode?: string;
  statusLVDescription?: string;
  workOrderCode?: string;
  workOrderTypeCode?: string;
  sendProcessGE?: boolean;
  channelProductCode?: string;
  channelProductDescription?: string;
  branchGECode?: string;
  documents: document[]
}

export interface document {
  bultos: bulto[];
  referenceID: string;
  documentCode: string;
  documentId: string
}

export interface bulto {
  precintoCodigo: string;
  bolsaCodigo: string;
  id: string;
}

export interface branch {
  code: string;
  description: string;
  flag: string;
}

export interface delegacaoDropDown {
  name: string;
  code: string;
}