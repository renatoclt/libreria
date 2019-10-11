import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

/**
 * Subscribe
 */
const indicatorSubject = new BehaviorSubject<boolean>(false);

/**
 * Variable con el actual valor
 */
export const isLoading$ = indicatorSubject.asObservable().pipe(distinctUntilChanged());

/**
 * Decorado que permite inicializar el loading
 */
export function startLoadingIndicator(target: any, propertyKey: string | symbol, propertyDescriptor: PropertyDescriptor): any {
    const original = propertyDescriptor.value;
    propertyDescriptor.value = function(...args: any[]) {
        indicatorSubject.next(true);
        const result = original.call(this, ...args);
        return result;
    };
    return propertyDescriptor;
}

/**
 * Decorado que permite detiene el loading
 */
export function stopLoadingIndicator(target: any, propertyKey: string | symbol, propertyDescriptor: PropertyDescriptor): any {
    const original = propertyDescriptor.value;
    propertyDescriptor.value = function(...args: any[]) {
        indicatorSubject.next(false);
        const result = original.call(this, ...args);
        return result;
    };
    return propertyDescriptor;
}
