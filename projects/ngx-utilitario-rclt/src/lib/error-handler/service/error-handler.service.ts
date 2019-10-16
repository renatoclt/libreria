import { Injectable, Injector, ErrorHandler, ComponentRef, NgZone } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { HttpErrorResponse } from '@angular/common/http';
import { SanitizedError } from '../interfaces/error-handler.interfaces';
import { DEFAULT_OVERLAY_CONFIG, ERROR_INJECTOR_TOKEN } from '../constants/error-handler.constants';
import { Observable } from 'rxjs';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { ErrorHandlerComponent } from '../error-handler/error-handler.component';
import { ERROR_HANDLER_CONFIG } from '../error-handler.config';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  private overlay: Overlay;

  constructor(private injector: Injector) {
    this.overlay = this.injector.get(Overlay);
  }

  /**
   * Atraparemos el error y lo estandarizaremos
   * y mostraremos el error
   */
  handleError(error: any): void {
    const sanitized = this.sanitiseError(error);
    const {overlayConfig, errorHandlerHooks} = this.injector.get(ERROR_HANDLER_CONFIG);
    const ngZone = this.injector.get(NgZone);
    const overlayRef = this.createOverlayReference(overlayConfig);
    this.runHooks(errorHandlerHooks, error);
    ngZone.run( () => {
      this.attachPortal(overlayRef, sanitized).subscribe(() => {
        overlayRef.dispose();
      });
    });
  }

  /**
   * Estandarizaremos los diferentes tipos de errores
   */
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

  /**
   * Asignaremos el token al error
   * @param errorHandlerHooks token
   */
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

  /**
   *  Instanciaremos nuestro componente añadiendo al overlay
   */
  private attachPortal(overlayRef: OverlayRef, error: any): Observable<{}> {
    const errorHandlerPortal: ComponentPortal<ErrorHandlerComponent> = new ComponentPortal(
      ErrorHandlerComponent,
      null,
      this.createInjector(error)
    );
    const compRef: ComponentRef<ErrorHandlerComponent> = overlayRef.attach(errorHandlerPortal);
    return compRef.instance.dismiss$;
  }

  /**
   * Insertaremos el error a la clave que insertamos en el module
   * El objeto WeakMap es una colección de pares clave/valor en la que las claves son objetos y los valores son valores arbitrarios.
   */
  private createInjector(error: any): PortalInjector {
    const injectorTokens = new WeakMap<any, any> (
      [[ERROR_INJECTOR_TOKEN, error]]
    );
    return new PortalInjector(this.injector, injectorTokens);
  }
}
