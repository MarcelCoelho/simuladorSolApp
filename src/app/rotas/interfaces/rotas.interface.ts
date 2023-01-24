
export interface IRota {
  lap: lap[];
  route: route;
  workOrders: workOrder[];
  status: string;
  message: string;
  isSuccess: boolean;
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
  documentId: string;
  documentEntryDate: Date;
  locationCode: string;
  serialNumber: string;
  number: string;
  customerDocumentCode: string;
  observation: string;
  channelCode: string;
  subChannelCode: string;
  employmentCode: string;
  issuingDocument: issuingDocument | null;
  entityLV: entity | null;
  entityGE: entity | null;
  documentAmount: documentAmount[];
  containers: container[];
  documentItem: documentItem[];
}

export interface issuingDocument {
  issuingCode: string;
  issuingDescription: string;
}

export interface entity {
  code: string;
  foreignCode: string;
  fullName: string;
  shortName: string;
  entityThirdPartyCode: thirdPartyCode[];
}

export interface thirdPartyCode {
  thirdPartySystemCode: string;
  value: string;
}

export interface documentAmount {
  currencyCode: string;
  commodityTypeCode: string;
  commodityTypeDescription: string;
  value: number;
}

export interface container {
  id: string;
  bagCode: string;
  sealCode: string;
  bundlerPackage: string;
  originalSeal: string;
}

export interface documentItem {
  commodityTypeCode: string;
  commodityTypeDescription: string;
  currencyCode: string;
  number: number;
  value: number;
  container: container;
  packagingTypeCode: string;
  breakdown: breakdown[];
}

export interface breakdown {
  denominationCode: string;
  amount: number;
}
export interface branch {
  code: string;
  description: string;
  flag: string;
}