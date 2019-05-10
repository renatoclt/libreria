import { Component } from '@angular/core';
import { ModalService } from './modal/modal.service';

@Component({
  selector: 'clt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'renatoclt';
  constructor(private modalService: ModalService) { }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
