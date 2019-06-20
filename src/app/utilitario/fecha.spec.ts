import { Fecha } from './fecha';

describe('Fecha', () => {
  let fecha: Fecha;
  beforeEach(() => {
    fecha = new Fecha();
  });
  afterEach(() => {
    fecha = null;
  });
  describe('se probara la funcion CompareDates', () => {
    it('deber retornar true de la fecha si ambos son la fecha actual', () => {
      expect(fecha.compareDates(new Date(), new Date()))
        .toBeTruthy('compareDates Deberia retornar verdadero ya que las fechas son iguales');
    });
    it('deber retornar false si la primera fecha es undefined', () => {
      expect(fecha.compareDates(undefined, new Date())).toBeFalsy('compareDates Deberia retornar falso si envio un undefined');
    });
    it('deber retornar true si la segunda fecha no es enviada y la primera es hoy', () => {
      expect(fecha.compareDates(new Date())).toBeTruthy('compareDates Deberia retornar falso si envio un undefined');
    });
    it('deber retornar false ya que las fechas son diferentes', () => {
      expect(fecha.compareDates(new Date('2019-12-20'), new Date('2019-10-20')))
        .toBeFalsy('compareDates Deberia retornar falso si envio un undefined');
    });
    it('deber retornar false ya que los formatos de fechas son incorrectos', () => {
      expect(fecha.compareDates(new Date('20-12-2018'), new Date('20-12-2018')))
        .toBeFalsy('compareDates Deberia retornar falso si envio un undefined');
    });
  });
  describe('se probara la funcion DifferenceDays', () => {
    it('deber retornar undefined ya que la fecha no tiene el formato deseado', () => {
      expect(fecha.differenceDays(undefined, new Date()))
        .toBe(undefined, 'differenceDays Deberia retornar verdadero ya que las fechas son iguales');
    });
    it('deber retornar -1 ya que es la fecha1 - fecha2', () => {
      expect(fecha.differenceDays(new Date('2019-12-06'), new Date('2019-12-07')))
        .toBe(-1, 'differenceDays deberia retornar -1 ya que es la resta de dias entre las fechas');
    });
    it('deber retornar 0 ya que ambas fechas son iguales', () => {
      expect(fecha.differenceDays(new Date(), new Date()))
        .toBe(0, 'differenceDays Deberia retornar 0 ya que las fechas son iguales');
    });
    it('deber retornar 1 ya que es la fecha1 - fecha2', () => {
      expect(fecha.differenceDays(new Date('2019-12-06'), new Date('2019-12-05')))
        .toBe(1, 'differenceDays Deberia retornar 1 ya que es la resta de dias entre las fechas');
    });
    it('deber retornar undefined ya que es la fecha2 es null', () => {
      expect(fecha.differenceDays(new Date('2019-12-06'), null))
        .toBe(undefined, 'differenceDays Deberia retornar undefined ya que es la resta de dias entre las fechas');
    });
    it('deber retornar undefined ya que los formatos son incorrectos', () => {
      expect(fecha.differenceDays(new Date('20-06-2018'), new Date('20-06-2018')))
        .toBe(undefined, 'differenceDays Deberia retornar undefined ya que date no se asigna correctamente por el formato');
    });
  });
  describe('se probara la funcion differenceDaysText', () => {
    it('deber retornar undefined ya que la fecha no tiene el formato deseado', () => {
      expect(fecha.differenceDaysText(undefined, new Date()))
        .toBe(undefined, ' differenceDaysText Deberia retornar undefined ya que la primera fecha es undefined');
    });
    it('deber retornar undefined ya que es la fecha2 es null', () => {
      expect(fecha.differenceDaysText(new Date('2019-12-06'), null))
        .toBe(undefined, 'differenceDaysText Deberia retornar undefined ya que el segundo parametro es null');
    });
    it('deber retornar undefined si el formato de la fecha es incorrecto', () => {
      expect(fecha.differenceDaysText(new Date('13-06-2019'), null))
        .toBe(undefined, 'differenceDaysText Deberia retornar undefined ya que el segundo parametro es null');
    });
    it('deber retornar undefined ya que los formatos son incorrectos', () => {
      expect(fecha.differenceDaysText(new Date('20-06-2018'), new Date('20-06-2018')))
        .toBe(undefined, 'differenceDays Deberia retornar undefined ya que date no se asigna correctamente por el formato');
    });
    it('deber retornar undefined ya que los formatos son incorrectos', () => {
      expect(fecha.differenceDaysText(new Date('20-06-2018')))
        .toBe(undefined, 'differenceDays Deberia retornar undefined ya que date no se asigna correctamente por el formato');
    });
    it('deber retornar ayer ya que es la fecha1 - fecha2', () => {
      expect(fecha.differenceDaysText(new Date('2019-12-06'), new Date('2019-12-07')))
        .toBe('Ayer', 'differenceDaysText Deberia retornar Ayer ya que es la resta de dias entre las fechas');
    });
    it('deber retornar Hoy ya que ambas fechas son iguales', () => {
      expect(fecha.differenceDaysText(new Date(), new Date()))
        .toBe('Hoy', 'differenceDaysText Deberia retornar Hoy ya que las fechas son iguales');
    });
    it('deber retornar Mañana ya que es la fecha1 - fecha2', () => {
      expect(fecha.differenceDaysText(new Date('2019-12-06'), new Date('2019-12-05')))
        .toBe('Mañana', 'differenceDaysText Deberia retornar Mañana ya que es la resta de dias entre las fechas');
    });
    it('deber retornar Mañana ya que es la fecha1 - fecha2', () => {
      expect(fecha.differenceDaysText(new Date('05-20-2019'), new Date('06-21-2019'), 'DD-MM-YYYY'))
        .toBe('20-05-2019', 'differenceDaysText Deberia retornar la primera fecha en el formato enviado');
    });
  });
  describe('se probara la funcion format', () => {
    it('deber retornar 20-05-2019 si se envia el formato DD-MM-YYYY', () => {
      expect(fecha.format(new Date('05-20-2019'), 'DD-MM-YYYY'))
        .toBe('20-05-2019', 'format deberia retornar en el formato enviado');
    });
    it('deber retornar 20-05-2019 si se envia el formato DD-MM-YYYY', () => {
      expect(fecha.format(new Date('20-05-2019'), 'DD-MM-YYYY'))
        .toBe(undefined, 'format deberia retornar en el formato enviado');
    });
    it('deber retornar undefined si se envia una fecha incorrecta', () => {
      expect(fecha.format(undefined, 'DD-MM-YYYY'))
        .toBe(undefined, 'format deberia retornar en el formato enviado');
    });
  });
});
