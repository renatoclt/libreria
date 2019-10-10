import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { SPINNER_INDICATOR_CONFIG, DEFAULT_CONFIG } from './spinner.config';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
  ]
})
export class NgxUtilitarioSpinnerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxUtilitarioSpinnerModule,
      providers: [{provide: SPINNER_INDICATOR_CONFIG, useValue: DEFAULT_CONFIG}]
    };
  }
 }
