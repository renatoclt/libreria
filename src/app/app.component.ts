import { Component } from '@angular/core';
import { ModalService } from './modal/services/modal.service';

@Component({
  selector: 'ngx-utilitario-app',
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
