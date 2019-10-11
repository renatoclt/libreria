import { Component, OnInit, DoCheck, AfterContentChecked, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { GeoJSONSourceRaw, GeoJSONSource, GeoJSONSourceOptions, Point } from 'mapbox-gl';
import { SettingsMapbox } from '../dto/settingsMapbox';

/**
 * Componente para mostrar mapas
 *
 * agregar el siguiente estilo para evitar un warning
 * "node_modules/mapbox-gl/dist/mapbox-gl.css",
 */
@Component({
  selector: 'ngx-utilitario-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss']
})
export class MapboxComponent implements OnInit, AfterViewInit {
  /**
   * Variable en la cual guardamos la configuracion del mapa
   */
  settingsMapbox: SettingsMapbox;
  /**
   *  variable a mostrar en el html
   */
  map: mapboxgl.Map;
  /**
   * Inicializaremos el token enviado por el usuario
   */
  constructor() {
    this.settingsMapbox = new SettingsMapbox();
    this.settingsMapbox.token = 'pk.eyJ1IjoicmVuYXRvY2x0IiwiYSI6ImNqeTF4dGx6NjBpdnAzb214ZzkyaTlhMmEifQ.XC4hqJu4hERG1pTmkNRrmA';

  }

  /**
   * Inicializamos settings por defecto
   */
  ngOnInit() {
    this.settingsMapbox.id = 'id1';
    this.settingsMapbox.lat = 37.75;
    this.settingsMapbox.lng = -122.41;
    this.settingsMapbox.style = 'mapbox://styles/mapbox/outdoors-v9';
    this.settingsMapbox.zoom = 13;
  }

  /**
   * Despues de cargar el html cargaremos el mapa
   */
  ngAfterViewInit(): void {
    this.initializeMap();
  }

  /**
   * Consultamos posicion del usuario si no da coordenadas se va a usar las de defecto
   * Inicializamos las variables del mapa
   */
  private initializeMap() {
    /// locate the user
    Object.getOwnPropertyDescriptor(mapboxgl, 'accessToken').set(this.settingsMapbox.token);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.settingsMapbox.lat = position.coords.latitude;
        this.settingsMapbox.lng = position.coords.longitude;
        this.map.flyTo({
          center: [this.settingsMapbox.lng, this.settingsMapbox.lat]
        });
      });
    }
    this.buildMap();
  }

  /**
   * Construccion del mapa
   */
  private buildMap() {
    this.map = new mapboxgl.Map({
      container: this.settingsMapbox.id,
      style: this.settingsMapbox.style,
      zoom: this.settingsMapbox.zoom,
      center: [this.settingsMapbox.lng, this.settingsMapbox.lat]
    });

    /// Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.on('load', (event) => {
      this.map.addSource('firebase', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      });
      const layers = this.map.getStyle().layers;
      // Find the index of the first symbol layer in the map style
      let firstSymbolId;
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol') {
          firstSymbolId = layers[i].id;
          break;
        }
      }


      // const dataSource = new GeoJson([this.settingsMapbox.lng, this.settingsMapbox.lat], { 'marker-color': '#3bb2d0',
      // 'marker-size': 'large',
      // 'marker-symbol': 'rocket' });
      const dataSource: GeoJSONSource = new GeoJSONSource();
      this.map.addLayer({
        id: 'TbuscaLayer',
        // type: 'fill',
        type: 'symbol',
        source: dataSource,
        layout: {
          // 'text-field': '{message}',
          'text-size': 24,
          'text-transform': 'uppercase',
          'icon-image': 'marker-11',
          'icon-size': 2,
          'text-offset': [0, 1.5],
        },
        paint: {
          'text-color': '#f16624',
          'text-halo-color': '#fff',
          'text-halo-width': 15
        },
        minzoom: 0,
        maxzoom: 20
      }, firstSymbolId);


      this.map.addLayer({
        id: 'clusters',
        type: 'circle',
        source: dataSource,
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': [
            'step',
            ['get', 'point_count'],
            '#51bbd6',
            100,
            '#f1f075',
            750,
            '#f28cb1'
          ],
          'circle-radius': [
            'step',
            ['get', 'point_count'],
            20,
            100,
            30,
            750,
            40
          ]
        }
      });

      this.map.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: dataSource,
        filter: ['has', 'point_count'],
        layout: {
          'text-field': '{point_count_abbreviated}',
          'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
          'text-size': 12
        }
      });
    });

  }

}
