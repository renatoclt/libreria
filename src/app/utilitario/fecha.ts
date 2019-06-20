import * as moment from 'moment';
import { Moment } from 'moment';
/**
 * Clase que trabajara sobre el tipo de dato "date" con la libreria "moment"
 */
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
        if ( date1 === undefined || date1 === null ) {
            return false;
        }
        const dat1 = moment(date1);
        if (date2 === undefined || date2 === null) {
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
     * @param  date1 fecha a comparar si es undefined retornara undefined
     * @param  date2 si no envia una fecha se tomara la fecha actual
     * @return retorna los dias de diferencia o undefined si los datos son enviados incorrectamente
     */
    differenceDays(date1: Date, date2?: Date): number {
        if (date1 !== undefined && date1 !== null && date2 !== null) {
            if (!isNaN(date1.getTime())) {
                const dat1 = moment(date1);
                if (date2 === undefined) {
                    date2 = new Date();
                }
                if (!isNaN(date2.getTime())) {
                    const dat2 = moment(date2);
                    return dat1.diff(dat2, 'days', false);
                }
            }
        }
        return undefined;
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
        if (date1 !== undefined && date1 !== null && date2 !== null) {
            if (!isNaN(date1.getTime())) {
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
        }
        return undefined;
    }

    /**
     * Cambia el formato de la fecha en formato de moment
     * @example
     *  this.fecha.DifferenceDays(new Date(), 'DD/MM/YYYY')
     *  YYYY    4-digits Year                                                   2018
     *  YY      2-digits Year                                                   18
     *  M       2-digits Month number, omits leading 0                          7
     *  MM      2-digits Month number                                           07
     *  MMM     3-letters Month name                                            Jul
     *  MMMM    Full Month name                                                 July
     *  dddd    Full day name                                                   Sunday
     *  gggg    4-digits Week year                                              2018
     *  gg      2-digits Week year                                              18
     *  w       Week of the year without leading zero                           18
     *  ww      Week of the year with leading zero                              18
     *  e       Day of the week, starts at 0                                    4
     *  D       2-digits day number, omits leading 0                            9
     *  DD      2-digits day number                                             09
     *  Do      Day number with ordinal                                         9th
     *  T       Indicates the start of the time part
     *  HH      2-digits hours (24 hour time) from 0 to 23                      22
     *  H       2-digits hours (24 hour time) from 0 to 23 without leading 0    22
     *  kk      2-digits hours (24 hour time) from 1 to 24                      23
     *  k       2-digits hours (24 hour time) from 1 to 24 without leading 0    23
     *  a/A     am or pm	                                                    pm
     *  hh      2-digits hours (12 hour time)                                   11
     *  mm      2-digits minutes	                                            22
     *  ss      2-digits seconds	                                            40
     *  s       2-digits seconds without leading zero                           40
     *  S       1-digits milliseconds                                           1
     *  SS      2-digits milliseconds                                           12
     *  SSS     3-digits milliseconds                                           123
     *  Z       The timezone                                                    +02:00
     *  x       UNIX timestamp in milliseconds                                  1410432140575
     *
     * @param date fecha a cambiar el formato
     * @param format formato que se desea la fecha
     *
     * @returns la fecha en el formato deseado
     */
    format(date: Date, format: string): string {
        if (date !== undefined && date !== null ) {
            if (!isNaN(date.getTime())) {
                const dat1 = moment(date);
                return dat1.format(format);
            }
        }
        return undefined;
    }
}

