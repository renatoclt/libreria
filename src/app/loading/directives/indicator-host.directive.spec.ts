import { IndicatorHostDirective } from './indicator-host.directive';
import { ViewContainerRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

describe('IndicatorHostDirective', () => {
  it('should create an instance', () => {
    class ViewContainerRefTest extends ViewContainerRef {
      length: number;
      element: import ('@angular/core').ElementRef<any>;
      injector: import ('@angular/core').Injector;
      parentInjector: import ('@angular/core').Injector;
      clear(): void {
        throw new Error('Method not implemented.');
      }
      get(index: number): import ('@angular/core').ViewRef {
        throw new Error('Method not implemented.');
      }
      createEmbeddedView<C>(
        templateRef: import ('@angular/core').TemplateRef<C>, context?: C, index?: number): import ('@angular/core').EmbeddedViewRef<C> {
        throw new Error('Method not implemented.');
      }
      createComponent<C>(
        componentFactory: import ('@angular/core').ComponentFactory<C>, index?: number,
        injector?: import ('@angular/core').Injector, projectableNodes?: any[][],
        ngModule?: import ('@angular/core').NgModuleRef<any>): import ('@angular/core').ComponentRef<C> {
        throw new Error('Method not implemented.');
      }
      insert(viewRef: import ('@angular/core').ViewRef, index?: number): import ('@angular/core').ViewRef {
        throw new Error('Method not implemented.');
      }
      move(viewRef: import ('@angular/core').ViewRef, currentIndex: number): import ('@angular/core').ViewRef {
        throw new Error('Method not implemented.');
      }
      indexOf(viewRef: import ('@angular/core').ViewRef): number {
        throw new Error('Method not implemented.');
      }
      remove(index?: number): void {
        throw new Error('Method not implemented.');
      }
      detach(index?: number): import ('@angular/core').ViewRef {
        throw new Error('Method not implemented.');
      }
    }
    const directive = new IndicatorHostDirective(new ViewContainerRefTest());
    expect(directive).toBeTruthy();
  });
});
