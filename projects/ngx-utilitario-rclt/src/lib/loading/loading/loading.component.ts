import { Component, OnInit, ViewChild, Inject, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { IndicatorHostDirective } from '../directives/indicator-host.directive';
import { LOADING_INDICATOR_CONFIG } from '../loading.config';
import { LoadingIndicatorConfig } from '../interfaces/loading.interfaces';
import { SpinnerComponent } from '../spinner/spinner.component';
import { INDICATOR_COLOR, DEFAULT_SIZE } from '../constants/indicator.constants';

/**
 * Componente que contendra todos los tipos de loading
 */
@Component({
  selector: 'ngx-utilitario-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  /**
   * Directiva que nos indica que componentes se aceptaran
   */
  @ViewChild(IndicatorHostDirective, { static: true }) host: IndicatorHostDirective;

  /**
   * Configuracion necesaria del loading
   * @param config La configuracion que utlizaremos para el loading
   * @param componentFactoryResolver Nos permitira mostrar el componente
   */
  constructor(
    @Inject(LOADING_INDICATOR_CONFIG) private config: LoadingIndicatorConfig,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  /**
   * Escojeremos que loading mostraremos
   */
  ngOnInit() {
    this.loadComponent();
  }

  /**
   * Daremos el tamaño al spinner
   */
  get indicatorSize(): string {
    return `${this.config.size}rem`;
  }

  /**
   * Obtendremos el loading a mostrar
   * Si no indico ningun loading enviamos el SpinnerComponent
   */
  private loadComponent() {
    const component = this.config.indicatorComponent || SpinnerComponent;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component as any);
    const viewContainerRef = this.host.viewContainerRef;
    viewContainerRef.clear();
    const componentRef: ComponentRef<any> = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.color = this.config.color || INDICATOR_COLOR;
    componentRef.instance.size = this.config.size || DEFAULT_SIZE;
  }
}
