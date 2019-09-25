import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarPersonajeComponent } from './pages/buscar-personaje/buscar-personaje.component';
import { DetallePersonajeComponent } from './pages/detalle-personaje/detalle-personaje.component';

const routes: Routes = [
  {
    path: '',
    component: BuscarPersonajeComponent
  },
  {
    path: 'detalle/:idPersonaje',
    component: DetallePersonajeComponent
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
