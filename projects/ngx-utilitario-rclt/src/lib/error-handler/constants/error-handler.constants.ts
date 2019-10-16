import { OverlayConfig } from '@angular/cdk/overlay';
import { InjectionToken } from '@angular/core';

/**
 * Configuracion para mostrar el overlay
 */
export const DEFAULT_OVERLAY_CONFIG: OverlayConfig = {
    hasBackdrop: true
};

/**
 * Injectaremos el token
 */
export const ERROR_INJECTOR_TOKEN: InjectionToken<any> = new InjectionToken('ngx-utilitario-Error-Injector');
