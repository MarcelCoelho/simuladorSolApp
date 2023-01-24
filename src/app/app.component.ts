import { Component, OnInit } from '@angular/core';
import { RotasService } from './rotas/services/rotas.service';
import { dias, meses } from './shared/utilities/dados';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  codigoRota: string = '';
  delegacaoRota: string = '';
  dataRota!: Date;

  constructor(private rotasService: RotasService) { }

  ngOnInit(): void { }

}
