import { LoadingIndicatorConfig } from './interfaces/loading.interfaces';
import { DEFAULT_SIZE, INDICATOR_COLOR, OVERLAY_BACKGROUND } from './constants/indicator.constants';
import { SpinnerComponent } from './spinner/spinner.component';
import { InjectionToken } from '@angular/core';

/**
 * Configuracion por default para el loading
 */
export const DEFAULT_CONFIG: LoadingIndicatorConfig = {
    size: DEFAULT_SIZE,
    color: INDICATOR_COLOR,
    overlayColor: OVERLAY_BACKGROUND,
    indicatorComponent: SpinnerComponent
};

/**
 * Servira para añadir la configuracion predefinida al componente
 */
export const LOADING_INDICATOR_CONFIG: InjectionToken<string> = new InjectionToken('ngx-utilitario-loading-conf');
