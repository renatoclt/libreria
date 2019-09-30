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

  constructor(
    @Inject(SPINNER_INDICATOR_CONFIG)
    private config: ISpinnerConfig) { }

  ngOnInit() {
  }

  get isLoading$(): Observable<boolean> {
    return isLoading$;
  }

}
