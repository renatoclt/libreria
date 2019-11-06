import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

/**
 * Subscribe
 */
const indicatorSubject = new BehaviorSubject<boolean>(false);

/**
 * Valida Si se puede apagar el spinner o no
 */
let count = 0;
/**
 * Variable con el actual valor
 */
export const isLoading$ = indicatorSubject.asObservable().pipe(distinctUntilChanged());

/**
 * Decorado que permite inicializar el loading
 */
export function startLoading(target: any, propertyKey: string | symbol, propertyDescriptor: PropertyDescriptor): any {
    const original = propertyDescriptor.value;
    propertyDescriptor.value = function(...args: any[]) {
        indicatorSubject.next(true);
        count = count + 1;
        const result = original.call(this, ...args);
        return result;
    };
    return propertyDescriptor;
}

/**
 * Decorado que permite detiene el loading
 */
export function stopLoading(target: any, propertyKey: string | symbol, propertyDescriptor: PropertyDescriptor): any {
    const original = propertyDescriptor.value;
    propertyDescriptor.value = function(...args: any[]) {
        count = count - 1;
        if ( count < 1) {
            indicatorSubject.next(false);
        }
        const result = original.call(this, ...args);
        return result;
    };
    return propertyDescriptor;
}
