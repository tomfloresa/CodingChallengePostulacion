import { Component, OnInit } from '@angular/core';
import { NbSearchService, NbToastrService } from '@nebular/theme';
import { MarvelService } from '../../services/marvel.service';

import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-buscar-personaje',
  templateUrl: './buscar-personaje.component.html',
  styleUrls: ['./buscar-personaje.component.scss'],
  animations: [trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))])]
})
export class BuscarPersonajeComponent implements OnInit {
  // Control Pagina
  mostrarPersonajes: boolean = false;
  search: Subscription;

  // Toastr
  private UBICACION_TOASTR = 'top-right';

  // Negocio
  personajes: any;

  constructor(
    private _searchService: NbSearchService,
    private _marvelService: MarvelService,
    private _toastrService: NbToastrService
  ) { }

  ngOnInit() {
    this.search = this._searchService.onSearchSubmit().subscribe((data) => {
      this.buscarPersonaje(data['term']);
    });
  }

  ngOnDestroy() {
    this.search.unsubscribe();
  }

  /**************************************************************************************
   *                                       Negocio
   **************************************************************************************/

  private buscarPersonaje = async personaje => {
    this.mostrarPersonajes = false;
    let personajesPorNombre = await this._marvelService.buscarPersonajePorNombre(personaje);

    if (personajesPorNombre['code'] == 200 && personajesPorNombre['data']['total'] != 0) {
      this.personajes = personajesPorNombre['data']['results'];
      this.mostrarPersonajes = true;
      this.mostrarToast(this.UBICACION_TOASTR, 'success', 'Busqueda Personaje', `Se ha encontrado su personaje: ${personaje}`, 5);
    } else {
      let personajesPorInicial = await this._marvelService.buscarPersonajePorIniciales(personaje);

      if (personajesPorInicial['code'] == 200 && personajesPorInicial['data']['total'] != 0) {
        this.personajes = personajesPorInicial['data']['results'];
        this.mostrarPersonajes = true;
        this.mostrarToast(this.UBICACION_TOASTR, 'success', 'Busqueda Personaje', `Se han encontrado las siguientes relaciones con: ${personaje}`, 5);
      } else {
        this.mostrarPersonajes = false;
        this.mostrarToast(this.UBICACION_TOASTR, 'danger', 'Busqueda Personaje', 'No se han encontrado resultados', 5);
      }
    }
  };

  /**************************************************************************************
   *                                      Control Buscador
   **************************************************************************************/
  abrirBuscador() {
    this._searchService.activateSearch('rotate-layout');
  }

  /**************************************************************************************
   *                                       Control Toastr
   **************************************************************************************/
  private mostrarToast(position, status, titulo, mensaje, segundos) {
    segundos *= 1000;
    this._toastrService.show(mensaje, titulo, { position, status, duration: segundos });
  }
}
