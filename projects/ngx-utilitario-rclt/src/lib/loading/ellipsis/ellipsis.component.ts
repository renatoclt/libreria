import { Component, OnInit } from '@angular/core';
import { INDICATOR_COLOR, DEFAULT_SIZE } from '../constants/indicator.constants';

/**
 * Tipo de loading: Ellipsis
 */
@Component({
  selector: 'ngx-utilitario-ellipsis',
  templateUrl: './ellipsis.component.html',
  styleUrls: ['./ellipsis.component.scss']
})
export class EllipsisComponent {
  /**
   * Color de los puntos
   */
  public color = INDICATOR_COLOR;
  /**
   * tamaño de los puntos
   */
  public size = DEFAULT_SIZE;

  /**
   * @ignore
   */
  constructor() {}

  /**
   * Color de los puntos
   */
  get indicatorColor(): string {
    return this.color;
  }

  /**
   * tamaño de los puntos
   */
  get indicatorSize(): string {
    return `${this.size}rem`;
  }
}
