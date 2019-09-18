import { Component } from '@angular/core';
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
  title = 'ngx-util-soluacioneOnline';
  /**
   * AÑOS
   */
  barChartLabels = undefined;

  barChartData = undefined;

  prueba = false;

  /**
   * @ignore
   */
  constructor() {
  }

  cambiar() {
    this.prueba = !this.prueba;
    if (this.prueba) {
      this.barChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
      this.barChartData = [
        { data: [6, 5, 8, 8, 5, 5, 4], label: 'Celular' },
        { data: [2, 4, 4, 1, 8, 2, 9], label: 'Web' }
      ];
    } else {
      this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
      this.barChartData = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
      ];
    }
  }
  cambiarLine() {

  }
}
