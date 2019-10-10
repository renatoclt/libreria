import { Component, OnInit } from '@angular/core';
import { INDICATOR_COLOR, DEFAULT_SIZE } from '../constants/indicator.constants';

@Component({
  selector: 'ngx-utilitario-ellipsis',
  templateUrl: './ellipsis.component.html',
  styleUrls: ['./ellipsis.component.scss']
})
export class EllipsisComponent {

  public color = INDICATOR_COLOR;
  public size = DEFAULT_SIZE;

  get indicatorColor(): string {
    return this.color;
  }

  get indicatorSize(): string {
    return `${this.size}px`;
  }
}
