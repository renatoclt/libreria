import * as moment_ from 'moment';
import { Moment } from 'moment';

const moment = moment_

export class Fecha {
    
    now: Date;
    constructor() {
        this.now = new Date();
    }
    /**
     * Compara si la fecha1 es mayor a la fecha2 si no se envia la fecha2 se tomara la fecha actual 
     * @param fecha1 
     * @param fecha2 
     */
    compararFechas(fecha1: Date, fecha2?: Date): boolean {
        let fec1 = moment(fecha1);
        if (fecha2 === undefined) {
            fecha2 = new Date();
        }
        let fec2 = moment(fecha2);
        if (fec1.startOf('day').isSame(fec2.startOf('day'))) {
            return true;
        }
        return false;
    }

    /**
     * Cuenta los dias entre la fecha1 y la fecha2. si no se envia la fecha 2 se tomara la fecha actual
     * @param fecha1 
     * @param fecha2 
     */
    diferenciaDias(fecha1: Date, fecha2?: Date) {
        let fec1 = moment(fecha1);
        if (fecha2 === undefined) {
            fecha2 = new Date();
        }
        let fec2 = moment(fecha2);
        return fec1.diff(fec2, 'days', false);
    }

    /**
     * Cuenta los dias entre la fecha1 y la fecha2. si no se envia la fecha 2 se tomara la fecha actual 
     * el formato que se devolvera la fecha "moment"
     * @param fecha1 
     * @param fecha2 
     * @param format 
     */
    textoDiferenciaDias(fecha1: Date, fecha2?: Date, format?: string): string {
        let fec1 = moment(fecha1);
        let dias: number = this.diferenciaDias(fecha1, fecha2);
        if (format === undefined) {
            format = 'DD/MM/YYYY'
        }
        switch (dias) {
            case 0: {
                return "Hoy";
            }
            case 1: {
                return "Mañana";
            }
            case -1: {
                return "Ayer";
            }
            default: {
                return fec1.format(format);
            }
        }
    }

    /**
     * Aplicar el formato a una fecha con moment 
     * L    = Date (in local format)
     * LL   = Month name, day of month, year
     * LLL  = Month name, day of month, year, time
     * LLLL = Day of week, month name, day of month, year, time
     * LT   = Time (without seconds)
     * LTS  = Time (with seconds)
     * H HH = Time (with seconds)
     * @param fecha 
     * @param format 
     */
    format(fecha:Date,format:string){
        let fec1= moment(fecha);
        return fec1.format(format);
    }
}

