import { Component, OnInit, Input, ElementRef, Renderer2, Inject, ViewEncapsulation, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { trigger, transition, state, style, animate } from '@angular/animations';
import { ModalService } from '../services/modal.service';
/**
 * Abre el nuevo componente enuna ventana emergente con una animacion de oppocity
 */
@Component({
  selector: 'ngx-utilitario-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 1
      })),
      state('closed', style({
        opacity: 0
        // height: '0px',
        // width: '0px',
      })),
      transition('open => closed', [
        animate('0.35s')
      ]),
      transition('closed => open', [
        animate('0.35s')
      ]),
    ]),
    trigger('openCloseBackground', [
      // ...
      state('closed', style({
        // top: '50%',
        // right: '50%',
        // bottom: '49%',
        // left: '49%'
        opacity: 0
      })),
      state('open', style({
        // top: '0',
        // right: '0',
        // bottom: '0',
        // left: '0'
        opacity: 0.7
      })),
      transition('open => closed', [
        animate('0.35s')
      ]),
      transition('closed => open', [
        animate('0.35s')
      ]),
    ])
  ]
})
export class ModalComponent implements OnInit, OnDestroy {
  /**
   * id que recibe el modal para poder mostrarlo o ocultarlo
   */
  @Input() id: string;
  /**
   * variable por la cual asignamos la animacion al modal
   */
  openclose: 'open' | 'closed' = 'closed';
  /**
   * Variable donde guardamos el contenido del modal
   */
  private element: any;

  /***
   * Variable tipo document
   * no lo inicializamos en el constructor ya que es ilegal en una libreria
   * buscar una mejor solucion
   */
  private document?: Document;

  /**
   * @ignore
   */
  constructor(private modalService: ModalService,
              private el: ElementRef,
              private renderer: Renderer2,
              @Inject(DOCUMENT) document?: any) {
    this.document = document as Document;
    this.element = el.nativeElement;
  }

  /**
   * Al inicializar el componente validamos si tiene un id, lo añadimos al html, y le asignamos una accion de cerrar
   */
  ngOnInit() {
    const modal = this;
    // Validamos si tiene el atributo id
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // añadimos el modal despues </body>) para que se pueda mostrar sobre todos los elementos
    this.document.body.appendChild(this.element);

    // cerrar modal
    this.element.addEventListener('click', (e: any) => {
      if (e.target.className === 'ngx-utilitario-modal') {
        modal.close();
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
    this.close();
  }
  /**
   * Se elimina del modal service cuando el componente es destruido
   */
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }
  /**
   * abrimos el modal
   * Cambiamos la variable de la animacion
   * le aplicamos el estilo display block y le asignamos la
   * clase ngx-utilitario-modal-open que permite visualizar el componente
   */
  open(): void {
    this.openclose = 'open';
    this.element.style.display = 'block';
    this.renderer.addClass(this.document.body, 'ngx-utilitario-modal-open');
    // this.renderer.setStyle(document.body, 'overflow','hidden');
  }

  /**
   * Cerramos el modal
   * Cambiamos la variable de la animacion
   * le aplicamos el estilo display none y le removemos la
   * clase ngx-utilitario-modal-open que permite visualizar el componente
   */
  close(): void {
    this.openclose = 'closed';
    this.element.style.display = 'none';
    this.renderer.removeClass(this.document.body, 'ngx-utilitario-modal-open');
    // this.renderer.setStyle(document.body, 'overflow', 'auto' )
  }
}
