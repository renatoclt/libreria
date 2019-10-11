import { SpinnerComponent } from '../spinner/spinner.component';
import { EllipsisComponent } from '../ellipsis/ellipsis.component';

/**
 * size: Configuracion del loading tamaño en medida rem
 * color: Color del loading
 * overlayColor: backgroun opcional
 * indicatorComponent: El componente a mostrar
 */
export interface LoadingIndicatorConfig {
    /**
     * tamaño del loading
     */
    size: number;
    /**
     * Color del loading
     */
    color: string;
    /**
     * Fondo del loading
     */
    overlayColor?: string;
    /**
     * Tipo de loading
     */
    indicatorComponent: SpinnerComponent | EllipsisComponent | any;
}
