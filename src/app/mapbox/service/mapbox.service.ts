import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapboxService {

  /**
   * @param accessToken Access tokens de mapbox
   */
  constructor(accessToken: string) {
    mapboxgl.accessToken = accessToken;
  }

  getMarkers() {
  }

}
