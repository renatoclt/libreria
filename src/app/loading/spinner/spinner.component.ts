import { Component, OnInit } from '@angular/core';
import { INDICATOR_COLOR, DEFAULT_SIZE } from '../constants/indicator.constants';

/**
 * Tipo de loading: Spinner
 */
@Component({
  selector: 'ngx-utilitario-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  /**
   * Color del spinner
   */
  color = INDICATOR_COLOR;
  /**
   * Tamaño del spinner
   */
  size = DEFAULT_SIZE;

  /**
   * @ignore
   */
  constructor() { }

  /**
   * borde del spinner
   */
  get borderColor(): string {
    return `${this.color} transparent transparent transparent`;
  }

  /**
   * Tamaño del borde del spinner
   */
  get borderWidth(): string {
    return `${this.size / 8}rem`;
  }

}
