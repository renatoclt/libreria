import { Injectable, Injector, ErrorHandler, ComponentRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { HttpErrorResponse } from '@angular/common/http';
import { SanitizedError } from '../interfaces/error-handler.interfaces';
import { DEFAULT_OVERLAY_CONFIG, ERROR_INJECTOR_TOKEN } from '../constants/error-handler.constants';
import { Observable } from 'rxjs';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { ErrorHandlerComponent } from '../error-handler/error-handler.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  private overlay: Overlay;

  constructor(private injector: Injector) {
    this.overlay = this.injector.get(Overlay);
  }

  handleError(error: any): void {
    const sanitized = this.sanitiseError(error);
  }

  private sanitiseError(error: Error | HttpErrorResponse): SanitizedError {
    const sanitiseError: SanitizedError = {
      message: error.message,
      details: []
    };
    if (error instanceof Error) {
      sanitiseError.details.push(error.stack);
    } else if (error instanceof HttpErrorResponse) {
      sanitiseError.details = Object.keys(error).map((key: string) => `${key}: ${error[key]}`);
    } else {
      sanitiseError.details.push(JSON.stringify(error));
    }
    return sanitiseError;
  }

  private runHooks(errorHandlerHooks: Array<(error: any) => void> = [], error) {
    errorHandlerHooks.forEach((hook) => {
      hook(error);
    });
  }

  /**
   * para la creacion de las configuraciones del overlay
   * usamos spread Operator (...)
   */
  private createOverlayReference(overlayConfig: OverlayConfig): OverlayRef {
    const overlaySettings: OverlayConfig = { ...DEFAULT_OVERLAY_CONFIG, ...overlayConfig};
    return this.overlay.create(overlaySettings);
  }

  private attachPortal(overlayRef: OverlayRef, error: any): Observable<{}> {
    const errorHandlerPortal: ComponentPortal<ErrorHandlerComponent> = new ComponentPortal(
      ErrorHandlerComponent,
      null,
      this.createInjector(error)
    );
    const compRef: ComponentRef<ErrorHandlerComponent> = overlayRef.attach(errorHandlerPortal);
    return compRef.instance.dismiss$;
  }

  private createInjector(error: any): PortalInjector {
    const injectorTokens = new WeakMap<any, any> (
      [[ERROR_INJECTOR_TOKEN, error]]
    );
    return new PortalInjector(this.injector, injectorTokens);
  }
}
