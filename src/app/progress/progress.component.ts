import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {


  Highcharts = Highcharts
    chartOptions = {}

    constructor() {
      this.chartOptions = {

        chart: {
          type: 'line'
      },
      title: {
          text: 'Monthly Progress in Project Completion'
      },
      
      xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
          title: {
              text: 'Completion Progress(days)'
          }
      },
      credits:{
      
        enabled:false},
      plotOptions: {
          line: {
              dataLabels: {
                  enabled: true
              },
              enableMouseTracking: false
          }
      },
      series: [{
          name: 'Production',
          data: [16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2,
              22.0, 17.8]
      }, {
          name: 'Design',
          data: [2.9, 13.6, 10.6, 44.8, 10.2, 14.5, 17.6, 16.5, 12.0, 6.5,
              2.0, 20.9]
      }]
      }

    }
    

}
