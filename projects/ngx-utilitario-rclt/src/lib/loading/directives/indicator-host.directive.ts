import { Directive, ViewContainerRef } from '@angular/core';

/**
 * Directiva para mostrar diferentes tipos de loading
 */
@Directive({
  selector: '[ngxUtilitarioIndicatorHost]'
})
export class IndicatorHostDirective {
  /**
   * @ignore
   */
  constructor(public viewContainerRef: ViewContainerRef) { }
}
