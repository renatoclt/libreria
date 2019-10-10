import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsisComponent } from './ellipsis/ellipsis.component';
import { LoadingComponent } from './loading/loading.component';
import { OverlayComponent } from './overlay/overlay.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { IndicatorHostDirective } from './directives/indicator-host.directive';
import { LOADING_INDICATOR_CONFIG } from './loading.config';
import { DEFAULT_CONFIG } from '../spinner/spinner.config';

@NgModule({
  declarations: [EllipsisComponent, LoadingComponent, OverlayComponent, SpinnerComponent, IndicatorHostDirective],
  entryComponents: [
    SpinnerComponent,
    EllipsisComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EllipsisComponent,
    LoadingComponent,
    SpinnerComponent
  ]
})
export class NgxUtilitarioLoadingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxUtilitarioLoadingModule,
      providers: [{provide: LOADING_INDICATOR_CONFIG, useValue: DEFAULT_CONFIG}]
    };
  }
}
