import { Component, OnInit, Inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ERROR_INJECTOR_TOKEN } from '../constants/error-handler.constants';
import { SanitizedError } from '../interfaces/error-handler.interfaces';

@Component({
  selector: 'ngx-utilitario-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.scss']
})
export class ErrorHandlerComponent {
  /**
   * Subject para visualizar los errores
   */
  private isVisible = new Subject();

  /**
   * Variable que nos permite saber si se esta mostrando un error
   */
  dismiss$: Observable<{}> = this.isVisible.asObservable();

  /**
   * Recibe el error y lo mustra
   */
  constructor(@Inject(ERROR_INJECTOR_TOKEN) public error: SanitizedError) { }

  /**
   * Saltar error
   */
  dismiss() {
    this.isVisible.next();
    this.isVisible.complete();
  }
}
