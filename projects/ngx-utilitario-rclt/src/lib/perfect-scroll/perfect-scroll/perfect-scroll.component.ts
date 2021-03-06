import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges, AfterViewChecked } from '@angular/core';
import { PerfectScrollbarComponent, PerfectScrollbarDirective, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { EScrollPosition } from '../dto/escroll-position';
/**
 * Componente que trabaja sobre ngx-perfect-scrollbar
 */
@Component({
  selector: 'ngx-utilitario-perfect-scroll',
  templateUrl: './perfect-scroll.component.html',
  styleUrls: ['./perfect-scroll.component.scss']
})
export class PerfectScrollComponent implements AfterViewChecked {

  /**
   * Variables de configuarion
   */
  public config: PerfectScrollbarConfigInterface = {};
  /**
   * Componente perfectScrollbar
   */
  @ViewChild(PerfectScrollbarComponent, { static: false }) componentRef?: PerfectScrollbarComponent;

  /**
   * Posicion a la que se desea enviar el scrollbar
   */
  @Input() position: [number, number];

  /**
   * id del elemento html que se desea ir con el scrollbar
   */
  @Input() elementName: string;
  /**
   * @ignore
   */
  constructor() { }

  /**
   * Despues de verificar que carge el viewchild mueve el scroll a la parte deseada
   */
  ngAfterViewChecked(): void {
    if (this.position !== undefined && this.elementName === undefined) {
      this.calculatePosition(this.position);
    } else if (this.elementName !== undefined) {
      this.scrollToElement();
    }
  }


  /**
   * Segun las coordenadas indica al scroll que accion realizar
   * @param position Array con el eje x y
   */
  calculatePosition(position: number[]) {
    if (position[0] === EScrollPosition.start) {
      this.scrollToLeft();
    }
    if (position[0] === EScrollPosition.end) {
      this.scrollToRight();
    }
    if (position[1] === EScrollPosition.start) {
      this.scrollToTop();
    }
    if (position[1] === EScrollPosition.end) {
      this.scrollToBottom();
    }
    if (position[0] > 0 && position[1] > 0) {
      this.scrollToXY(position[0], position[1]);
    }
  }
  /**
   * Mover el scroll a un posicion
   * @param x Eje x
   * @param y Eje y
   */
  public scrollToXY(x: number, y: number): void {
    if (this.componentRef !== undefined && this.componentRef.directiveRef) {
      this.componentRef.directiveRef.scrollTo(x, y, 500);
    }
  }

  /**
   * mover el scroll a la parte superio
   */
  public scrollToTop(): void {
    if (this.componentRef !== undefined && this.componentRef.directiveRef) {
      this.componentRef.directiveRef.scrollToTop();
    }
  }

  /**
   * mover el scroll a la izquierda
   */
  public scrollToLeft(): void {
    if (this.componentRef !== undefined && this.componentRef.directiveRef) {
      this.componentRef.directiveRef.scrollToLeft();
    }
  }

  /**
   * Mover el scroll a  la derecha
   */
  public scrollToRight(): void {

    if (this.componentRef !== undefined && this.componentRef.directiveRef) {
      this.componentRef.directiveRef.scrollToRight();
    }
  }
  /**
   * mover el scroll al final
   */
  public scrollToBottom(): void {
    if (this.componentRef !== undefined && this.componentRef.directiveRef) {
      this.componentRef.directiveRef.scrollToBottom();
    }
  }
  /**
   * mover el scroll al elemento
   */
  public scrollToElement(): void {
    if (this.componentRef !== undefined && this.componentRef.directiveRef) {
      this.componentRef.directiveRef.scrollToElement('#' + this.elementName);
    }
  }

  /**
   * Al movernos sobre el div
   * @param event scroll
   */
  public onScrollEvent(event: any): void {
    event.preventDefault();
    event.stopPropagation();
  }

}
