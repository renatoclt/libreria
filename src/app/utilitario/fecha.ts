import * as moment from 'moment';
import { Moment } from 'moment';

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
    compararFechas(fecha1: string, fecha2?: string): boolean {
        let fec1: Moment, fec2: Moment;
        if (fecha2 === undefined) {
            fec2 = moment(new Date());
        } else {
            fec2 = moment(fecha2);

        }
        fec1 = moment(fecha1);
        if (fec1.startOf('day').isSame(fec2.startOf('day'))) {
            console.log(fec1.startOf('day').isSame(fec2.startOf('day')))
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



}
