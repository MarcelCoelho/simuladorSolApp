import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { meses } from '../../../shared/utilities/dados';
import { RotasService } from '../../services/rotas.service';
import { IRota } from '../../interfaces/rotas.interface';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-menu-filtro',
  templateUrl: './menu-filtro.component.html',
  styleUrls: ['./menu-filtro.component.css']
})
export class MenuFiltroComponent implements OnInit {
  codigoRota: string = '';
  dataRota!: Date;
  delegacaoRota: string = "";

  @Output() onBuscar: EventEmitter<IRota> = new EventEmitter();

  constructor(private rotasService: RotasService) {

  }
  ngOnInit(): void { }

  buscarRuta() {

    if (this.dataRota === undefined || this.codigoRota.trim() === '' || this.delegacaoRota.trim() === '') {
      alert('Todos filtros são obrigatórios');
      return;
    }
    const dataRotaConcatenada = this.converterDataEmString();

    this.rotasService.recuperarDadosRota(this.codigoRota, this.delegacaoRota, dataRotaConcatenada)
      .subscribe({
        next: (resp: any) => {
          this.onBuscar.emit(resp.data)
        },
        error: (e) => {
          alert('Erro ao buscar rota: ' + e.status + ' - ' + e.error);
        }
      })
  }

  private converterDataEmString(): string {

    let day = this.dataRota.getDate().toString();
    let month = meses[this.dataRota.getMonth()];
    const year = this.dataRota.getFullYear();

    if (day.length == 1)
      day = "0" + day;

    if (month.length == 1)
      month = "0" + month;

    return (year + '-' + month + '-' + day);
  }

  get classeCalendario() {
    return 'calendar';
  }
}
