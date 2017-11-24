import { Injectable } from '@angular/core';

import {Marcador} from "../interfaces/marcador.interface"

@Injectable()
export class MapasService {

  marcadores:Marcador[] = [];

  constructor() {

    let nuevoMarcador: Marcador = {
      lat:-12.048915,
      lng:-77.081181,
      draggable:true,
      titulo:"Condominio El Alto de Colonial"
    }

    this.insertarMarcador(nuevoMarcador);

  }

  insertarMarcador(marcador:Marcador){
    this.marcadores.push(marcador);
  }

}
