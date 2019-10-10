import { Component, OnInit } from '@angular/core';
import { INDICATOR_COLOR, DEFAULT_SIZE } from '../constants/indicator.constants';

@Component({
  selector: 'ngx-utilitario-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  color = INDICATOR_COLOR;
  size = DEFAULT_SIZE;

  constructor() { }

  ngOnInit() {
  }

  get borderColor(): string {
    return `${this.color} transparent transparent transparent`;
  }

  get borderWidth(): string {
    return `${this.size / 8}px`;
  }

}
