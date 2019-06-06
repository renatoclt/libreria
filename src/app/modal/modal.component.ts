import { Component, OnInit, Input, ElementRef, Renderer2, Inject, ViewEncapsulation } from '@angular/core';
import { ModalService } from './modal.service';
import { DOCUMENT } from '@angular/common';
import { openClose } from '../animaciones/open-close'
import { trigger, transition, useAnimation, state, style, animate } from '@angular/animations';
@Component({
  selector: 'rclt-modal',
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
export class ModalComponent implements OnInit {
  openclose : 'open' |  'closed' = 'closed';
 

  @Input() id: string;
  private element: any;

  constructor( @Inject(DOCUMENT) private document: Document, private modalService: ModalService, private el: ElementRef, private renderer: Renderer2) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    let modal = this;

    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', function (e: any) {
      if (e.target.className === 'ngx-utilitario-modal') {
        modal.close();
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
    this.close()
  }
  // remove self from modal service when component is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }
  // open modal
  open(): void {
    this.openclose = 'open'
    this.element.style.display = 'block';
    this.renderer.addClass(this.document.body, 'ngx-utilitario-modal-open');
    // this.renderer.setStyle(document.body, 'overflow','hidden');
  }
  
  // close modal
  close(): void {
    this.openclose = 'closed'
    this.element.style.display = 'none';
    this.renderer.removeClass(this.document.body, 'ngx-utilitario-modal-open' )
    // this.renderer.setStyle(document.body, 'overflow', 'auto' )
  }
}
