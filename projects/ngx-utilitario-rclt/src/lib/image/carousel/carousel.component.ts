import { Component, OnInit, ViewChild, NgZone, Input } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
import { IOwlcarouselOptions } from './dto/iowlcarousel-options';
/**
 * Componente creado con la finalidad de mostrar un carousel utilizando ngx-own-carousel
 * para ser utilizado necesita estos estilos
 * "./node_modules/jquery/dist/jquery.min.js"
 * "./node_modules/owl.carousel/dist/owl.carousel.min.js"
 *
 * se puede evitar eso si se incluye esto al scss principal
 * import "~owl.carousel/dist/assets/owl.carousel.css";
 * import "~owl.carousel/dist/assets/owl.theme.default.css";
 *
 * y este script
 * "./node_modules/jquery/dist/jquery.min.js"
 * "./node_modules/owl.carousel/dist/owl.carousel.min.js"
 */
@Component({
  selector: 'ngx-utilitario-image-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent  {
  /**
   * Propiedades del carrusel
   */
  @Input() owlCarouselOptions: IOwlcarouselOptions;
  /**
   * Imagenes a mostrar en el carrusel
   */
  @Input() images: any[];
  /**
   * @ignore
   */
  constructor(private  zone: NgZone) {
    this.owlCarouselOptions = {
      items: 3,
      dots: true,
      nav: true,
      navText: [' < prev ', ' next > '],
      navClass: ['', ''],
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
      loop: true,
      center: true,
      onTranslate: (e) => this.zone.run(() => {}),
    };
  }
  /**
   * Items a mostrar en el carrusel
   */
  setItems(items: number) {
    this.owlCarouselOptions.items = items;
  }
  /**
   * Si se desea mostrar dots dots
   */
  setDots(value: boolean) {
    this.owlCarouselOptions.dots = value;
  }
  /**
   * Si se muestra la navegacion
   */
  setNav(value: boolean) {
    this.owlCarouselOptions.nav = value;
  }
  /**
   * Si se desea cambiar el texto
   * @param text [' < prev ', ' next > ']
   */
  setNavText(text: string[]) {
    this.owlCarouselOptions.navText = text;
  }
  /**
   * Si se desea cambiar el texto
   * @param text  ['<img src=\'myprevimage.png\'>', '<img src=\'mynextimage.png\'>']
   */
  setNavClass(text: string[]) {
    this.owlCarouselOptions.navText = text;
  }
  /**
   * Set movimiento del carrusel
   */
  setAutoPlay(autoplay: boolean, autoplayTimeout?: number, autoplayHoverPause?: boolean) {
    this.owlCarouselOptions.autoplay = autoplay;
    if (autoplayTimeout !== undefined) {
      this.owlCarouselOptions.autoplayTimeout = autoplayTimeout;
    }
    if (autoplayHoverPause !== undefined) {
      this.owlCarouselOptions.autoplayHoverPause = autoplayHoverPause;
    }
  }
  /**
   * Autocompletar images
   */
  setLoop(state: boolean) {
    this.owlCarouselOptions.loop = state;
  }
  /**
   * Centrar images
   */
  setCenter(state: boolean) {
    this.owlCarouselOptions.center = state;
  }
}
