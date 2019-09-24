import { GeoJson } from './geoJson';

export class FeatureCollection {
    type = 'FeatureCollection';
    constructor(public features: Array<GeoJson>) { }
}