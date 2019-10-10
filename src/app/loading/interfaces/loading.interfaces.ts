import { SpinnerComponent } from '../spinner/spinner.component';
import { EllipsisComponent } from '../ellipsis/ellipsis.component';

/**
 * size: Configuracion del loading tamaño en medida rem
 * color: Color del loading
 * overlayColor: backgroun opcional
 * indicatorComponent: El componente a mostrar
 */
export interface LoadingIndicatorConfig {
    size: number;
    color: string;
    overlayColor?: string;
    indicatorComponent: SpinnerComponent | EllipsisComponent | any;
}
