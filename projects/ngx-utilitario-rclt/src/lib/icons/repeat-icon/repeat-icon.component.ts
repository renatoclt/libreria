import { Component, OnInit, Input } from '@angular/core';
/**
 * Componente que nos permite repetir un icono n vces y activar los primeros iconos
 */
@Component({
  selector: 'ngx-utilitario-repeat-icon',
  templateUrl: './repeat-icon.component.html',
  styleUrls: ['./repeat-icon.component.scss']
})
export class RepeatIconComponent implements OnInit {
  /**
   * Cantidad de veces a repetir el icono
   */
  @Input() repetir = 5;
  /**
   * Cantidad de iconos a activar
   */
  @Input() activo = 0;
  /**
   * Icono a mostrar utilizo font-awesome
   */
  @Input() icono = 'fa fa-user';
  /**
   * Color del icono normalmente por defecto es #000
   */
  @Input() color = '#000';
  /**
   * COlor del icono activo por defecto es #000
   */
  @Input() colorActivo = '#000';
  /**
   * @ignore
   */
  constructor() { }
  /**
   * @ignore
   */
  ngOnInit() {
  }
}
