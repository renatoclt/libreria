import { Component, OnInit } from '@angular/core';
import { IChatDetail } from './chat/dto/ichat-detail';
import { EChatLock } from './chat/dto/echat-lock';
import { EChatState } from './chat/dto/echat-state';
/**
 * Principal componente de la aplicacion
 */
@Component({
  selector: 'ngx-utilitario-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  /**
   * Titulo a mostrar al inicializar el componente
   */
  title = 'ngx-util-soluacioneOnline';
  /**
   * AÑOS
   */
  barChartLabels = undefined;

  barChartData = undefined;
  /**
   * AÑOS
   */
  lineChartData = undefined;

  lineChartLabels = undefined;

  prueba = false;

  /**
   * Label a mostrar en el grafico
   */
  polarAreaChartLabels = undefined;
  /**
   * Data a mostrar en el polar area
   */
  polarAreaChartData = undefined;


  pieChartLabels = undefined;

  pieChartData = undefined;

  chatDetail: IChatDetail = {
    id: '1',
    img: undefined,
    lock: EChatLock.lock,
    messages: [],
    name: 'renaot jesus cohaila la torre un nombre super largo para editarlo',
    state: EChatState.offline
  };
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
    this.prueba = !this.prueba;
    if (this.prueba) {
      this.lineChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
      this.lineChartData = [
        { data: [1, 5, 8, 8, 5, 5, 4], label: 'Series A', stack: 'a' },
        { data: [2, 3, 2, 2, 1, 2, 1], label: 'Series B', stack: 'a' }];
    } else {
      this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      this.lineChartData = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', stack: 'a' },
        { data: [15, 19, 20, 21, 16, 25, 10], label: 'Series B', stack: 'a' }];
    }
  }
  cambiarPolar() {
    this.prueba = !this.prueba;
    if (this.prueba) {
      this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
      this.polarAreaChartData = [300, 500, 100, 40, 120];
    } else {
      this.polarAreaChartLabels = ['11111111111', '2', '444444', '5555555', '66666666666'];
      this.polarAreaChartData = [1, 2, 4, 5, 6];
    }
  }
  cambiarPie() {
    this.pieChartLabels = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
    this.pieChartData = [300, 500, 100];
  }
}
