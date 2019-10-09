import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { DEFAULT_CONFIG, SPINNER_INDICATOR_CONFIG } from './spinner.config';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent
  ]
})
export class SpinnerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SpinnerModule,
      providers: [{provide: SPINNER_INDICATOR_CONFIG, useValue: DEFAULT_CONFIG}]
    };
  }
}
