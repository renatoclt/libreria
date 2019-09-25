import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

/**
 * Observable del spinner
 */
const indicatorSubject = new BehaviorSubject<boolean>(false);

/**
 * variable para exportar el obserbable
 */
export const isLoading$ = indicatorSubject.asObservable().pipe(distinctUntilChanged());

/**
 * Decorador para comenzar el spinner
 */
export function startLoadingIndicator(target: any, propertyKey: string | symbol, propertyDescriptor: PropertyDescriptor): any {
  const original = propertyDescriptor.value;
  propertyDescriptor.value = (...args) => {
    indicatorSubject.next(true);
    const result = original.call(target, ...args);
    return result;
  };
  return propertyDescriptor;
}

/**
 * Decorador para finalizar el spinner
 */
export function stopLoadingIndicator(target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor): any {
  const original = propertyDescriptor.value;
  propertyDescriptor.value = (...args) => {
    indicatorSubject.next(false);
    const result = original.call(target, ...args);
    return result;
  };
  return propertyDescriptor;
}
