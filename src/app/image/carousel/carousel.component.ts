import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
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

  title = 'app';
  owlCarouselOptions: IOwlcarouselOptions;

  constructor(private _zone: NgZone) {
    this.owlCarouselOptions = {
      items: 5,
      dots: true,
      navigation: true,
      nav: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: false,
      loop: true,
      onTranslate: (e) => _zone.run(() => console.log("is translated, the page index is: "+e.page.index)),
    };
  }
}
