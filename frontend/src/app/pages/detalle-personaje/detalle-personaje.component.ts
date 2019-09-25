import { Component, OnInit, TemplateRef } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';
import { ActivatedRoute } from '@angular/router';
import { Personaje } from '../../interface/personaje';
import { Comic } from 'src/app/interface/comic';
import { NbDialogService, NbDialogRef, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.component.html',
  styleUrls: ['./detalle-personaje.component.scss']
})
export class DetallePersonajeComponent implements OnInit {

  // Toastr
  private UBICACION_TOASTR = 'top-right';

  // Negocio
  idPersonaje: number;
  personaje = {} as Personaje;
  listaComics: Comic[] = [];
  infoComic = {} as Comic;

  constructor(
    private _marvelService: MarvelService,
    private _routeActivated: ActivatedRoute,
    private _dialogService: NbDialogService,
    private _toastrService: NbToastrService
  ) { }

  ngOnInit() {
    this.idPersonaje = Number.parseInt(this._routeActivated.snapshot.paramMap.get('idPersonaje'));
    this.buscarDetallePersonaje(this.idPersonaje);
    this.buscarSeriesPersonaje(this.idPersonaje);
  }

  /**************************************************************************************
   *                                       Negocio
   **************************************************************************************/
  private buscarDetallePersonaje = idPersonaje => {
    this._marvelService.buscarDetallePersonajePorIdPersonaje(idPersonaje).then((data) => {
      let personajeMarvelService = data['data']['results'][0];
      this.personaje = {
        id: personajeMarvelService.id,
        name: personajeMarvelService.name,
        description: personajeMarvelService.description,
        img: personajeMarvelService.thumbnail.path + '.' + personajeMarvelService.thumbnail.extension,
        modified: personajeMarvelService.modified,
        detailUrl: personajeMarvelService.urls[0].url,
        comicLinkUrl: personajeMarvelService.urls[1].url,
        series: personajeMarvelService.series.items
      };
    }).catch((err) => {
      this.mostrarToast(this.UBICACION_TOASTR, 'danger', 'Error Buscar Detalle Personaje', err.message, 5);
    });
  }

  private buscarSeriesPersonaje = idPersonaje => {
    this._marvelService.buscarComicsPorIdPersonaje(idPersonaje).then((data) => {
      let comicsIdPersonajeMarvelService = data['data']['results'];
      comicsIdPersonajeMarvelService.forEach((value, key) => {
        let comic: Comic = {
          id: value.id,
          title: value.title,
          image: value.images[0].path + '.' + value.images[0].extension,
          modified: value.modified,
          pageCount: value.pageCount,
          price: value.prices[0].price,
          ean: value.ean
        }
        this.listaComics.push(comic);
      });
    }).catch((err) => {
      this.mostrarToast(this.UBICACION_TOASTR, 'danger', 'Error Buscar Comics Del Personaje', err.message, 5);
    });
  }

  /*************************************************************************************
   *                                       Modal Info Comic
   **************************************************************************************/

  modalInfoComic(dialog: TemplateRef<any>, idComic: number) {
    this.infoComic = this.listaComics.find(comic => comic.id == idComic);
    this._dialogService.open(dialog);
  }

  /**************************************************************************************
   *                                       Control Toastr
   **************************************************************************************/
  private mostrarToast(position, status, titulo, mensaje, segundos) {
    segundos *= 1000;
    this._toastrService.show(mensaje, titulo, { position, status, duration: segundos });
  }
}
