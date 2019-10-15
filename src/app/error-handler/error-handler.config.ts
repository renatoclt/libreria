import { ErrorHandlerConfig } from './interfaces/error-handler.interfaces';
import { DEFAULT_OVERLAY_CONFIG } from './constants/error-handler.constants';
import { InjectionToken } from '@angular/core';

export const DEFAULT_ERROR_HANDLER_CONFIG: ErrorHandlerConfig = {
    overlayConfig: DEFAULT_OVERLAY_CONFIG,
    errorHandlerHooks: []
};

export const ERROR_HANDLER_CONFIG: InjectionToken<ErrorHandlerConfig> = new InjectionToken('ngx-utilitario-error-conf');