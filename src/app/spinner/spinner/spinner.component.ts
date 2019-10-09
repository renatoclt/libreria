import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SPINNER_INDICATOR_CONFIG } from '../spinner.config';
import { ISpinnerConfig } from '../dto/ispinner-config';
import { isLoading$ } from '../spinner.decorator';

@Component({
  selector: 'ngx-utilitario-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  INDICATOR_COLOR = '#7B1FA2';
  DEFAULT_SIZE = 40;
  color = this.INDICATOR_COLOR;
  size = this.DEFAULT_SIZE;
  indicatorSize = '40px';
  constructor(
    @Inject(SPINNER_INDICATOR_CONFIG)
    private config: ISpinnerConfig) { }

  ngOnInit() {
  }

  get isLoading$(): Observable<boolean> {
    return isLoading$;
  }

  get borderColor(): string {
    return `${this.color} transparent transparent transparent`;
  }

  get borderWidth(): string {
    return `${this.size / 8}px`;
  }
}
