import { IndicatorHostDirective } from './indicator-host.directive';
import { ViewContainerRef } from '@angular/core';

describe('IndicatorHostDirective', () => {
  it('should create an instance', () => {
    const directive = new IndicatorHostDirective(new ViewContainerRef());
    expect(directive).toBeTruthy();
  });
});
