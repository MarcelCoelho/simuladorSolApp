import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRota, branch } from '../interfaces/rotas.interface';
import { documento, documentoResponse } from '../interfaces/documento.interface';

@Injectable({
  providedIn: 'root'
})
export class RotasService {

  private url: string = 'https://localhost:7180';

  constructor(private http: HttpClient) { }

  recuperarDelegacoes(): Observable<branch[]> {

    const response = this.http.get<branch[]>(this.url + '/GetBranch');
    return response;

  }

  recuperarDadosRota(codigoRota: string, delegacaoRota: string, dataRota: string): Observable<IRota> {

    const params = new HttpParams()
      .set('routeCode', codigoRota)
      .set('routeBranch', delegacaoRota)
      .set('routeDate', dataRota);

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${this.token}`
    // })

    // const response = this.http.get(this.url, { headers, params })
    const response = this.http.get<IRota>(this.url + '/GetRoute', { params })
    return response;

  }

  gravarDocumento(documento: documento): Observable<documentoResponse> {
    console.log(documento);
    const response = this.http.post<documentoResponse>(this.url + '/Document', documento)
    return response;
  }
}
