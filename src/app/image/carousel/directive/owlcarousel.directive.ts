import { Directive, ElementRef, Input, AfterViewChecked, OnDestroy  } from '@angular/core';
import { IOwlcarouselOptions } from '../dto/iowlcarousel-options';
/**
 * Variable jQuery
 */
declare var $: any;
/**
 * Directiva para trabajar sobre owlCarousel
 */
@Directive({
  selector: '[ngxUtilitarioOwlcarousel]'
})
export class OwlcarouselDirective implements AfterViewChecked, OnDestroy {
  /**
   * Obtenemos el div con las imagenes
   */
  $el: any;
  /**
   * Las opciones que tiene nuestro carrusel
   */
  @Input() owlOptions: IOwlcarouselOptions;

  // private _items: any[];

  /**
   * @ignore
   */
  constructor(el: ElementRef) {
    this.$el = $(el.nativeElement);
  }

  /**
   * Inicializamos el carrusel owl
   */
  ngAfterViewChecked() {
    this.initOwl();
  }

  /**
   * @ignore
   */
  ngOnDestroy() {
    this.destroyOwl();
  }

  /**
   * Inicialización del owl carrusel
   */
  initOwl() {
    if (
        this.$el.find('.item').length &&
        typeof $.fn.owlCarousel === 'function' &&
        !this.$el.hasClass('owl-loaded')
      ) {
      setTimeout(() => {
        this.$el.owlCarousel(this.owlOptions as object);
      }, 0);
    }
  }

  /**
   * @ignore
   */
  destroyOwl() {
    if (this.$el) {
      this.$el.trigger('destroy.owl.carousel')
          .removeClass('owl-loaded owl-hidden')
          .find('.owl-stage:empty, .owl-item:empty')
          .remove();
    }
  }

  /**
   * @ignore
   */
  reInitOwl() {
    this.destroyOwl();
    this.initOwl();
  }
}
