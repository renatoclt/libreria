import { NumberToArrayPipe } from './number-to-array.pipe';

describe('NumberToArrayPipe', () => {
  let pipe: NumberToArrayPipe;
  beforeEach(() => {
    pipe = new NumberToArrayPipe();
  });
  afterEach(() => {
    pipe = null;
  });
  it('deber retornar un arreglo de longitud 0 de un negativo', () => {
    expect(pipe.transform(-1).length).toBe(0, 'Deberia retornar un array vacio');
  });
  it('deber retornar un arreglo de longitud 0 de un 0', () => {
    expect(pipe.transform(0).length).toBe(0, 'Deberia retornar un array vacio');
  });
  it('deber retornar un arreglo de longitud 0 de un undefined', () => {
    expect(pipe.transform(undefined).length).toBe(0, 'Deberia retornar un array vacio');
  });
  it('deber retornar un arreglo de longitud 0 de un null', () => {
    expect(pipe.transform(null).length).toBe(0, 'Deberia retornar un array vacio');
  });
  it('deber retornar un arreglo de longitud 1 de un positivo', () => {
    expect(pipe.transform(1).length).toBe(1, 'Deberia retornar un array vacio');
  });
});
