import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  buscarPersonajePorNombre(name: string) {
    let params = new HttpParams().set('name', name);

    return this.http
      .get(`/characters`, { headers: this.httpOptions.headers, params }).toPromise();
  }

  buscarPersonajePorIniciales(inicial: string) {
    let params = new HttpParams().set('nameStartsWith', inicial);

    return this.http
      .get(`/characters`, { headers: this.httpOptions.headers, params }).toPromise();
  }

  buscarDetallePersonajePorIdPersonaje(idPersonaje: number) {
    return this.http
      .get(`/characters/${idPersonaje}`, this.httpOptions).toPromise();
  }

  buscarComicsPorIdPersonaje(idPersonaje: number) {
    return this.http
      .get(`/characters/${idPersonaje}/comics`, this.httpOptions).toPromise();
  }
}
