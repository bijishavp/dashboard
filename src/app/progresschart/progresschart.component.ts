import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-progresschart',
  templateUrl: './progresschart.component.html',
  styleUrls: ['./progresschart.component.css']
})
export class ProgresschartComponent {


  Highcharts = Highcharts
    chartOptions = {}

    constructor() {
      this.chartOptions = {
        chart: {
          type: 'area'
      },
      title: {
          text: 'Progress Analysis - Deployment',
          align: 'center'
      },
      
      yAxis: {
          title: {
              useHTML: true,
              text: ''
          }
      },
      tooltip: {
          shared: true,
          headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
      },
      credits:{
      
        enabled:false},
      plotOptions: {
          series: {
              pointStart: 2014
             
          },
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series: [{
          name: 'design',
          data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16214]
      }, {
          name: 'data collection',
          data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039]
  
      }, {
          name: 'deployment',
          data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913]
      }, {
          name: 'coding',
          data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550]
  
      }, {
          name: 'Testing',
          data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186]
      }]
      }
    }
}
