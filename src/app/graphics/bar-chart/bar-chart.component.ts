import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';

/**
 * Componenente utilizando chart.js para generar un grafico de barras
 */
@Component({
  selector: 'ngx-utilitario-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {

  /**
   * @ignore
   */
  constructor() { }

  /**
   * mostrar escalas verticales y que sea responsivo
   */
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  /**
   * Tipo de grafica
   */
  public barChartType: ChartType  = 'bar';
  /**
   * Mostrar leyenda en la parte superior
   */
  @Input() public barChartLegend = true;
  /**
   * Mostrar labels en el eje x
   */
  @Input() barChartLabels = undefined;
  /**
   * Data a mostrar en el grafico
   * example [{ data: [], label: ''}],
   */
  @Input() barChartData: ChartDataSets = undefined;

}
