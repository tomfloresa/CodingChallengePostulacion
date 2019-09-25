import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbToastrModule, NbDialogModule } from '@nebular/theme';
import { BuscarPersonajeModule } from './pages/buscar-personaje/buscar-personaje.module';
import { DetallePersonajeModule } from './pages/detalle-personaje/detalle-personaje.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseApiExternaInterceptor } from './interceptor/base-api-externa-interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbToastrModule.forRoot(),
    NbDialogModule.forRoot(),

    BuscarPersonajeModule,
    DetallePersonajeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseApiExternaInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
