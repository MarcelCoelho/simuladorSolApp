import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { meses, recuperarDelegacoesLocalStorage, gravarDelegacoesLocalStore } from '../../../shared/utilities/dados';
import { RotasService } from '../../services/rotas.service';
import { branch, IRota, delegacaoDropDown } from '../../interfaces/rotas.interface';

@Component({
  selector: 'app-menu-filtro',
  templateUrl: './menu-filtro.component.html',
  styleUrls: ['./menu-filtro.component.css']
})
export class MenuFiltroComponent implements OnInit {
  codigoRota: string = '';
  dataRota!: Date;



  private delegacoes: branch[] = [];
  delegacoesDropDown: delegacaoDropDown[] = [];
  delegacaoSelecionada: string = "";

  @Output() onBuscar: EventEmitter<IRota> = new EventEmitter();

  constructor(private rotasService: RotasService) {

  }
  ngOnInit(): void {
    this.delegacoes = recuperarDelegacoesLocalStorage();
    if (this.delegacoes.length === 0) {
      this.buscarDelegacoes();
    }

    this.delegacoes.forEach(delegacao => {
      const del: delegacaoDropDown = {
        name: delegacao.description,
        code: delegacao.flag
      };
      this.delegacoesDropDown.push(del);
      console.log(this.delegacoesDropDown);
    });

  }

  buscarDelegacoes() {
    this.rotasService.recuperarDelegacoes()
      .subscribe((resp: any) => {
        console.log(resp.data);
        this.delegacoes = resp.data;
        gravarDelegacoesLocalStore(this.delegacoes);
      });
  }

  buscarRuta() {
    if (this.dataRota === undefined || this.codigoRota.trim() === '' || this.delegacaoSelecionada === null) {
      alert('Todos filtros são obrigatórios');
      return;
    }
    const dataRotaConcatenada = this.converterDataEmString();
    // this.rotasService.recuperarDadosRota(this.codigoRota, this.delegacaoRota, dataRotaConcatenada)
    //   .subscribe((resp: IRota) => {
    //     this.onBuscar.emit(resp)
    //   });

    this.rotasService.recuperarDadosRota(this.codigoRota, this.delegacaoSelecionada, dataRotaConcatenada)
      .subscribe((resp: any) => {
        this.onBuscar.emit(resp.data)
      });
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

  onSelecionarDelegacao() {
    console.log(this.delegacaoSelecionada);
  }

  onKeyUp(event: any) {
    console.log(event);
  }
}
