import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-utilitario-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartType = 'bar';
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
  @Input() barChartData = undefined;

  ngOnInit() {
  }

}
