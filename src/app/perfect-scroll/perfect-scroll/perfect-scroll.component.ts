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

  @Input() position: [number, number];
  /**
   * @ignore
   */
  constructor() { }

  /**
   * Despues de verificar que carge el viewchild mueve el scroll a la parte deseada
   */
  ngAfterViewChecked(): void {
    if (this.position !== undefined) {
      this.calculatePosition(this.position);
    }
  }


  /**
   * Segun las coordenadas indica al scroll que accion realizar
   * @param position Array con el eje x y
   */
  calculatePosition(position: number[]) {
    console.log('ingrese', this.position, position[0]);
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
    console.log(this.componentRef);
    if (this.componentRef !== undefined && this.componentRef.directiveRef) {
      this.componentRef.directiveRef.scrollToBottom();
    }
  }

  /**
   * Al movernos sobre el div
   * @param event scroll
   */
  public onScrollEvent(event: any): void {
    // console.log(event);
    event.preventDefault();
    event.stopPropagation();
  }

}
