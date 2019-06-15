import { Pipe, PipeTransform } from '@angular/core';

/**
 * Crea un arreglo de tamaño n 
 */
@Pipe({
  name: 'numberToArray'
})
export class NumberToArrayPipe implements PipeTransform {

  /**
   * crea un arreglo de tamaño n
   * 
   * @example
   * *ngFor="let item of 2 | numberToArray"
   * 
   * @param {number} length tamaño del nuevo arreglo
   * 
   * @returns un arreglo de tamaño n
   */
  transform(length: number): number[] {
    let res = [];
    for (let i = 0; i < length; i++) {
      res.push(i);
    }
    return res;
  }

}
