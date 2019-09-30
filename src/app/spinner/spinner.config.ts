import { InjectionToken } from '@angular/core';
import { ISpinnerConfig } from './dto/ispinner-config';

export const DEFAULT_CONFIG: ISpinnerConfig = {
    size: 160,
    color: '#17A0DF'
};

export const SPINNER_INDICATOR_CONFIG: InjectionToken<string> = new InjectionToken('ngx-utilitario-spinner-conf');
