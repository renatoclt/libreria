import { Component } from '@angular/core';
import { ModalService } from './modal/modal.service';
/**
 * Principal componente de la aplicacion
 */
@Component({
  selector: 'ngx-utilitario-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * Titulo a mostrar al inicializar el componente
   */
  title = 'renatoclt';
  /**
   * @ignore
   */
  constructor(private modalService: ModalService) { }
}
