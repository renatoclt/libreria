import { IGeoJson } from './igeoJson';
import { IGeometry } from './igeometry';

/**
 * Spec Format
 * {
 *   "type": "Feature",
 *   "geometry": {
 *     "type": "Point",
 *     "coordinates": [125.6, 10.1]
 *   },
 *   "properties": {
 *     "message": "Hello World!"
 *   }
 * }
 */
export class GeoJson implements IGeoJson {
    type = 'Feature';
    geometry: IGeometry;
    constructor(coordinates: any[], public properties?) {
        this.geometry = {
            type: 'Point',
            coordinates
        };
    }
}
