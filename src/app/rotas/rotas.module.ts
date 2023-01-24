import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { MenuFiltroComponent } from './components/menu-filtro/menu-filtro.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaOtsComponent } from './components/lista-ots/lista-ots.component';
import { DocumentoPorOtComponent } from './components/documento-por-ot/documento-por-ot.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from 'primeng/panel';
import { SplitterModule } from 'primeng/splitter';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { DropdownModule } from 'primeng/dropdown';
import { ListboxModule } from 'primeng/listbox';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [
    HomeComponent,
    MenuFiltroComponent,
    ListaOtsComponent,
    DocumentoPorOtComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    PanelModule,
    SplitterModule,
    InputTextModule,
    ButtonModule,
    FieldsetModule,
    DropdownModule,
    ListboxModule,
    RadioButtonModule,

    SharedModule
  ],
  exports: [
    HomeComponent,
    MenuFiltroComponent,
    ListaOtsComponent,
    DocumentoPorOtComponent
  ]
})
export class RotasModule { }
