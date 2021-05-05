import { Component, OnInit } from '@angular/core';
import {  ViewChild } from "@angular/core";
import * as ApexCharts from 'apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill
} from "ng-apexcharts";



export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
 
  title: ApexTitleSubtitle;
};
@Component({
  selector: '[app-main]',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  colors = ['#1f6fdb', '#37af48','#6b5cf4','#f9d360']
  
  year;
  monthSelected ; 
  index;
  months = [{
     name: "January",
     days: "31"
   },{
    name: "February",
    days: "28"
  },{
    name: "March",
    days: "31"
  },{
    name: "April",
    days: "30"
  },{
    name: "May",
    days: "31"
  },{
    name: "June",
    days: "30"
  },{
    name: "July",
    days: "31"
  },{
    name: "August",
    days: "31"
  },{
    name: "September",
    days: "30"
  },{
    name: "October",
    days: "31"
  },{
    name: "November",
    days: "30"
  },{
    name: "December",
    days: "31"
  }];
  table1Data = [{
    pn: '/store/',
    v: '4,890',
    upv: '3,985',
    br: '81.56%'
  },
  {
    pn: '/store/symbols-styleguides',
    v: '3,785',
    upv: '3,182',
    br: '62.56%'
  },
  {
    pn: '/store/dashboard-ui-kit',
    v: '2,985',
    upv: '2,115',
    br: '58.76%'
  },
  {
    pn: '/store/webflow-cards.html',
    v: '2,440',
    upv: '1,789',
    br: '39.59%'
  }];

  table2Data = [{
    network: 'Instagram',
    visitors: '3,550',
    progress: 80
  },
  {
    network: 'Facebook',
    visitors: '2,236',
    progress: 90
  },
  {
    network: 'Twitter',
    visitors: '1,795',
    progress: 30
  },
  {
    network: 'Linkedin',
    visitors: '62',
    progress: 50
  }
]
  

  public chartOptions: Partial<ChartOptions>;
 
  constructor() { 
    this.chartOptions =  {
     
      series: [
        {
          name: "Visitors",
          data:  Array(31).fill(0).map(()=>{return Math.floor(Math.random()*10000)})
        }
      ],
      chart: {
        id: 'chart1',
        height: 150,
        type: "bar",
        toolbar:{
          show: false
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '30%',
            
        },
        
      },
      dataLabels:{
        enabled: false
      },
      

      xaxis: {
        categories:  Array.from(Array(31).keys()).map(i => i+1),
        
        position: "bottom",
        labels: {
          offsetY: -5,
          style: {
            colors: Array.from(Array(31).keys()).map(i => '#ababad'),
            fontSize: '10px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
             
        },
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: '#0d65d9',
              colorTo: '#0d65d9',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },
        tooltip: {
          enabled: false,
          offsetY: -35
        }
      },
      fill: {
        colors: ['#0604cf'],
      },
      yaxis: {
        tickAmount: 3,
        min: 0,
        max: 9000,
        opposite: true,
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: true
        },
        labels: {
          show: true,
          align: 'center',
          offsetY: 20,
          formatter: function(val) {
            if(val == 0)
             return ''
            return val/1000 + "K";
          }
        }
      },
 
    };
    this.monthSelected = this.months[0];
    this.index = 0;
    this.year = 2021;


  }

  ngOnInit(): void {
  }
 
  changeMonth(i){
    if(i>0)
      {
        this.index = this.index + i > 11 ? 0 : (this.index + i)
        this.monthSelected = this.months[this.index];
      }
      else{
        this.index = this.index + i < 0 ? 11 : (this.index + i)
        this.monthSelected = this.months[this.index];
      }
     
    this.updateChartData()
    ApexCharts.exec('chart1', "updateOptions", {
      xaxis: {
        categories: Array.from(Array(+this.monthSelected.days).keys()).map(i => i+1)
      }
    });
    
  }
  changeYear(i){
      this.year = this.year + i;
      this.updateChartData();

  }

  updateChartData(){
    this.chartOptions.series =[{ 
      name: 'Visitors',
      data: Array(+this.monthSelected.days).fill(0).map(()=>{return Math.floor(Math.random()*10000)})
  
  }]
  }
  }
