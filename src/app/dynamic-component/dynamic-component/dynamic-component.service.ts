import { Injectable, ComponentRef, Injector, ComponentFactoryResolver, ApplicationRef, Type } from '@angular/core';

/**
 * Servicio que añade un componente en tiempo de ejecucion
 */
@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {
  /**
   * Variable en la cual se guarda el componente que se mostrara
   */
  private compRef: ComponentRef<any>;
  /**
   * @ignore
   */
  constructor(private injector: Injector, private resolver: ComponentFactoryResolver, private appRef: ApplicationRef) {
  }

  /**
   * Servicio que permite injectar componente en tiempo de ejecucion
   * @example
   * this.dynamicComponentService.injectComponent(PopupComponent,
   *        x => { x.tipo = currentFeature.properties.marcador ; x.id = currentFeature.properties.id; }  );
   * @param component El componente a insertar
   * @param propertySetter Las propiedades del componente que va a recibir
   */
  public injectComponent<T>(component: Type<T>, propertySetter?: (type: T) => void): HTMLDivElement {
    // Elimina el componente si este ya existe
    if (this.compRef) {
      this.compRef.destroy();
    }

    // Resuelve el componente y lo crea
    const compFactory = this.resolver.resolveComponentFactory(component);
    this.compRef = compFactory.create(this.injector);

    // Pasa las nuevas propiedades al componente
    if (propertySetter) {
      propertySetter(this.compRef.instance);
    }

    // Attach to Application
    this.appRef.attachView(this.compRef.hostView);

    // Creamos un div y añadimos el component
    const div = document.createElement('div');
    div.appendChild(this.compRef.location.nativeElement);

    // Retornamos la referencia del componetent
    return div;
  }

  /**
   * Retornamos el componente
   */
  getCompoRef() {
    return this.compRef;
  }
}
