import { Component, Input } from '@angular/core';

/**
 * Mustra un menu dot
 */
@Component({
  selector: 'ngx-utilitario-menu-dot',
  templateUrl: './menu-dot.component.html',
})
export class MenuDotComponent {

  /**
   * Enviar el icono
   */
  @Input() menuIcon = 'fa fa-ellipsis-v';

  /**
   * @ignore
   */
  constructor() { }

}
