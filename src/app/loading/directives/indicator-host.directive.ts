import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxUtilitarioIndicatorHost]'
})
export class IndicatorHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
