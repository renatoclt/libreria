import { OverlayConfig } from '@angular/cdk/overlay';

/**
 * Interface del manejador de errores
 */
export interface ErrorHandlerConfig {
    overlayConfig?: OverlayConfig;
    errorHandlerHooks?: Array<(error: any) => void>;
}

/**
 * Interface para estandarizar los errores
 */
export interface SanitizedError {
    message: string;
    details: string[];
}
