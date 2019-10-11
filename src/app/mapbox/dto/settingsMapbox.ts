/**
 * Caracteristicas basicas de un mapa
 */
export class SettingsMapbox {
    /**
     * id del mapa a mostrar
     */
    id: string;
    /**
     * Estilo del mapa que desea visualizar
     */
    style: string;
    /**
     * Latitud inicial
     */
    lat: number;
    /**
     * Longitud inicial
     */
    lng: number;
    /**
     * Zoom inicial
     */
    zoom: number;
    /**
     * Token dado por mapbox
     */
    token: string;
}
