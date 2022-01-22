import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioListaService {

  constructor() { }

  Lista() {
   let MiArregloLista = ['valor 1','valor 2','valor 3','valor 4',];
   return MiArregloLista;
  }
}
