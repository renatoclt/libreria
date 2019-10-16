import { NgModule, ModuleWithProviders, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { OverlayModule, FullscreenOverlayContainer, OverlayContainer } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { ErrorHandlerService } from './service/error-handler.service';
import { ERROR_HANDLER_CONFIG, DEFAULT_ERROR_HANDLER_CONFIG } from './error-handler.config';

@NgModule({
  declarations: [ErrorHandlerComponent],
  imports: [
    CommonModule,
    OverlayModule,
    A11yModule
  ],
  entryComponents: [ErrorHandlerComponent],
  exports: [ErrorHandlerComponent]
})
export class NgxUtilitarioErrorHandlerModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxUtilitarioErrorHandlerModule,
      providers: [
        {provide: ErrorHandler, useClass: ErrorHandlerService},
        {provide: OverlayContainer, useClass: FullscreenOverlayContainer },
        {provide: ERROR_HANDLER_CONFIG, useValue: DEFAULT_ERROR_HANDLER_CONFIG}
      ]
    };
  }
}
