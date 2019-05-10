import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'rclt-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() id: string;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
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
    this.element.style.display = 'block';
    document.body.classList.add('ngx-utilitario-modal-open');
    console.log('fasd')
  }

  // close modal
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('ngx-utilitario-modal-open');
  }

}
