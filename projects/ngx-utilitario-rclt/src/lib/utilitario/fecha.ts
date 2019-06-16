import * as moment_ from 'moment';
import { Moment } from 'moment';

const moment = moment_;

export class Fecha {
    /**
     * valor donde guardamos la fecha actual de iniciacion de la clase
     */
    now: Date;

    /**
     * Obtiene la fecha actual
     */
    constructor() {
        this.now = new Date();
    }
    /**
     * Comparar dos fechas
     * @example
     *  this.fecha.compareDates(new Date())
     *  this.fecha.compareDates(new Date(), '2019-10-13')
     * @param date1 fecha a comparar
     * @param date2 si no envia una fecha se tomara la fecha actual
     * @return retorna true si la fecha1 es mayor a la fecha2
     */
    compareDates(date1: Date, date2?: Date): boolean {
        const dat1 = moment(date1);
        if (date2 === undefined) {
            date2 = new Date();
        }
        const dat2 = moment(date2);
        if (dat1.startOf('day').isSame(dat2.startOf('day'))) {
            return true;
        }
        return false;
    }

    /**
     * Cuenta los dias entre dos fechas. si no se envia la fecha 2 se tomara la fecha actual
     * @example
     *  this.fecha.DifferenceDays(new Date())
     *  this.fecha.DifferenceDays(new Date(), '2019-10-13')
     * @param  date1 fecha a comparar
     * @param  date2 si no envia una fecha se tomara la fecha actual
     * @return retorna los dias de diferencia
     */
    differenceDays(date1: Date, date2?: Date): number {
        const dat1 = moment(date1);
        if (date2 === undefined) {
            date2 = new Date();
        }
        const dat2 = moment(date2);
        return dat1.diff(dat2, 'days', false);
    }

    /**
     * Cuenta los dias entre dos fechas. si no se envia la fecha 2 se tomara la fecha actual
     * @example
     *  this.fecha.DifferenceDays(new Date())
     *  this.fecha.DifferenceDays(new Date(), '2019-10-13')
     *  this.fecha.DifferenceDays(new Date(), '2019-10-13', 'DD/MM/YYYY')
     * @param  date1 fecha a comparar
     * @param  date2 si no envia una fecha se tomara la fecha actual
     * @param  format  en este formato se retornara la fecha  en formato de moment por defecto tiene el formato DD/MM/YYYY
     *
     * @returns si la diferencia es entre -1 o 1 retornara ayer hoy o mañana si no retornara la fecha en el formato indicado
     */
    differenceDaysText(date1: Date, date2?: Date, format?: string): string {
        const dat1 = moment(date1);
        const dias: number = this.differenceDays(date1, date2);
        if (format === undefined) {
            format = 'DD/MM/YYYY';
        }
        switch (dias) {
            case 0: {
                return 'Hoy';
            }
            case 1: {
                return 'Mañana';
            }
            case -1: {
                return 'Ayer';
            }
            default: {
                return dat1.format(format);
            }
        }
    }

    /**
     * Cambia el formato de la fecha en formato de moment
     * @example
     *  this.fecha.DifferenceDays(new Date(), 'DD/MM/YYYY')
     *
     * @param date fecha a cambiar el formato
     * @param format formato que se desea la fecha
     *
     * @returns la fecha en el formato deseado
     */
    format(date: Date, format: string): string {
        const dat1 = moment(date);
        return dat1.format(format);
    }
}

