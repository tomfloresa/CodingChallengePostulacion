import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarPersonajeComponent } from './buscar-personaje.component';
import {
  NbLayoutModule,
  NbSearchModule,
  NbToastrModule,
  NbSpinnerModule,
  NbButtonModule,
  NbIconModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { MarvelService } from '../../services/marvel.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BuscarPersonajeComponent],
  imports: [
    CommonModule,
    HttpClientModule,

    NbLayoutModule,
    NbEvaIconsModule,
    NbSearchModule,
    NbToastrModule,
    NbSpinnerModule,
    NbButtonModule,
    NbIconModule,
    RouterModule
  ],
  providers: [MarvelService]
})
export class BuscarPersonajeModule { }
