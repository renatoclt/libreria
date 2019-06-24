import { Component, OnInit, ViewChild } from '@angular/core';
import { PerfectScrollbarComponent, PerfectScrollbarDirective, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
/**
 * Componente que trabaja sobre ngx-perfect-scrollbar
 */
@Component({
  selector: 'ngx-utilitario-perfect-scroll',
  templateUrl: './perfect-scroll.component.html',
  styleUrls: ['./perfect-scroll.component.scss']
})
export class PerfectScrollComponent {
  /**
   * Variables de configuarion
   */
  public config: PerfectScrollbarConfigInterface = {};
  /**
   * Componente perfectScrollbar
   */
  @ViewChild(PerfectScrollbarComponent, { read: true, static: false }) componentRef?: PerfectScrollbarComponent;

  /**
   * @ignore
   */
  constructor() { }

  /**
   * Mover el scroll a un posicion
   * @param x Eje x
   * @param y Eje y
   */
  public scrollToXY(x: number, y: number): void {
    this.componentRef.directiveRef.scrollTo(x, y, 500);
  }

  /**
   * mover el scroll a la parte superio
   */
  public scrollToTop(): void {
    this.componentRef.directiveRef.scrollToTop();
  }

  /**
   * mover el scroll a la izquierda
   */
  public scrollToLeft(): void {
    this.componentRef.directiveRef.scrollToLeft();
  }

  /**
   * Mover el scroll a  la derecha
   */
  public scrollToRight(): void {

    this.componentRef.directiveRef.scrollToRight();
  }

  /**
   * mover el scroll al final
   */
  public scrollToBottom(): void {
    this.componentRef.directiveRef.scrollToBottom();
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
