/**
 * Interface con las opciones que tenemos en owlCarousel solo se pusieron las mas comunes
 * https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html
 */
export interface IOwlcarouselOptions {
    items: number;
    dots: boolean;
    nav: boolean;
    navText: any[] | boolean;
    navClass: string[];
    autoplay: boolean;
    autoplayTimeout: number;
    autoplayHoverPause: boolean;
    loop: boolean;
    center: boolean;
    onTranslate: any;
}
