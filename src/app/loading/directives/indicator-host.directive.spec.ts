import { IndicatorHostDirective } from './indicator-host.directive';
import { ViewContainerRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

describe('IndicatorHostDirective', () => {
  it('should create an instance', () => {
    const directive = TestBed.createComponent(IndicatorHostDirective);
    expect(directive).toBeTruthy();
  });
});
