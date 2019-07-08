import { OwlcarouselDirective } from './owlcarousel.directive';
import { ElementRef } from '@angular/core';

describe('OwlcarouselDirective', () => {
  it('should create an instance', () => {
    const el = {} ;
    const directive = new OwlcarouselDirective(el as ElementRef);
    expect(directive).toBeTruthy();
  });
});
