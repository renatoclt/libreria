import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Inject, ChangeDetectorRef } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { LOADING_INDICATOR_CONFIG } from '../loading.config';
import { LoadingIndicatorConfig } from '../interfaces/loading.interfaces';
import { isLoading$ } from '../loading.decorators';

/**
 * Componente que sera la capa del loading
 */
@Component({
  selector: 'ngx-utilitario-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit, OnDestroy {
  /**
   * Input que utlizaremos para obtner el foco del formulario
   */
  @ViewChild('focusTrap', {static: true}) focusTrap: ElementRef;
  /**
   * Guardamos el subscribe para eliminarlo al final y no se quede en memoria
   */
  private isLoadingSub: Subscription;
  /**
   * Obtenemos el actual elemento con el foco
   */
  private previousFocusTarget: HTMLElement;
  /**
   * Pasaremos el foco al input focusTrap
   */
  private nextFocusTarget: HTMLElement;
  loading = false;
  /**
   * constructor
   * @param config Configuracion del spinner colores y componente a mostrar
   */
  constructor(@Inject(LOADING_INDICATOR_CONFIG) private config: LoadingIndicatorConfig, private changeDetectorRef: ChangeDetectorRef) { }

  /**
   * Obtenemos el estado de loading y lo asignamos a un subscribe para eliminarlo
   * seleccionamos el foco por el estado del loading
   */
  ngOnInit(): void {
    this.isLoadingSub = this.isLoading$.subscribe((isLoading: boolean) => {
      this.loading = isLoading;
      this.changeDetectorRef.detectChanges();
      console.log('cambie variable', this.loading);
      if ( isLoading ) {
        this.trapFocus();
      } else {
        this.restoreFocus();
      }
    });
  }

  /**
   * Destruir los subscribe creados
   */
  ngOnDestroy(): void {
    this.isLoadingSub.unsubscribe();
  }

  /**
   * obtemos el estado de loading
   */
  get isLoading$(): Observable<boolean> {
    return isLoading$;
  }

  /**
   * obtenemos el color de background de fondo para el loading
   * en caso no este definido le damos el siguiete color
   * 'rgba(100, 100, 100, 0.3)'
   */
  get overlayColor(): string {
    return this.config.overlayColor || 'rgba(100, 100, 100, 0.3)';
  }

  /**
   * Atrapamos el actual foco
   * dejamos el actual foco asignamos el foco al input creado en este componente
   */
  trapFocus(): void {
    this.previousFocusTarget = document.activeElement as HTMLElement;
    if (this.previousFocusTarget) {
      this.previousFocusTarget.blur();
    }
    this.nextFocusTarget = this.focusTrap.nativeElement;
    this.nextFocusTarget.focus();
  }

  /**
   * devolvemos el foco al anterior elemento que lo tenia
   */
  restoreFocus(): void {
    if ( this.previousFocusTarget ) {
      this.nextFocusTarget = this.previousFocusTarget;
      this.nextFocusTarget.focus();
    }
  }

  /**
   * si perdemos el foco en el input le devolveremos el foco a nextFocusTarget
   */
  disableKeyboardEvents(event: FocusEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.nextFocusTarget.focus();
  }
}
