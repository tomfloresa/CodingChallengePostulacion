import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallePersonajeComponent } from './detalle-personaje.component';
import { NbLayoutModule, NbIconModule, NbButtonModule, NbListModule, NbCardModule, NbDialogModule, NbToastrModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DetallePersonajeComponent],
  imports: [
    CommonModule,

    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbButtonModule,
    NbCardModule,
    NbListModule,
    NbDialogModule,
    RouterModule,
    NbToastrModule
  ]
})
export class DetallePersonajeModule { }
