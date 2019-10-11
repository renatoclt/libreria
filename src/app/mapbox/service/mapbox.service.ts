import { Injectable } from '@angular/core';

/**
 * Servicio que trabajara los datos que mostrara el mapa
 */
@Injectable({
  providedIn: 'root'
})
export class MapboxService {

  /**
   * Inicializamos el token
   * @param accessToken Access tokens de mapbox
   */
  constructor() {
  }

  /**
   * Permite Obtener los marcadores
   */
  getMarkers() {
  }

}
