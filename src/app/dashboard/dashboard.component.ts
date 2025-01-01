
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { NgChartsModule } from 'ng2-charts';

@Component({  
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardComponent {
  title = 'ng2-charts-demo';
  
  public lineChartData: ChartConfiguration['data'] = {
    labels:  [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '1',
      '12'
    ],
  
    datasets: [
      {
        data: [ 32, 42, 31, 39,33, 48, 42, 38, 32, 38, 42,32],
        label: 'Income',
        fill: true,
        tension: 0.5,
        borderColor: '#28e915',
        backgroundColor: 'rgba(128, 179, 146, 0.3)'
      },
      {
        data: [ 30, 40, 29, 37,31, 46, 40, 36, 30, 36, 40,30],
        label: 'Expenses',
        fill: true,
        tension: 0.5,
        borderColor: '#e53142',
        backgroundColor: 'rgba(238, 226, 226, 0.3)'
      }
    ]
  };

  public lineChartOptions: ChartOptions = {
    responsive: false,
    maintainAspectRatio: false
  };
  
  public lineChartLegend = true;
  
  public apexChartOptions: any = {
    series: [], // Add this line to include the series property
    chart: {
      type: 'line'
    },
    xaxis: {
      categories: []
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      show: false
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'Line Chart'
    },
    markers: {
      size: 0
    },
    yaxis: {
      title: {
        text: 'Values'
      }
    },
    fill: {
      opacity: 0 // Set opacity to 0 to remove the fill under the curve
    }
  };
  
  public donutChartData: ChartConfiguration['data'] = {
    labels: ['Food', 'Housing', 'Utilities', 'Transport'],
    datasets: [
      {
        data: [300, 500, 100, 200],
        backgroundColor: ['#4caf50', '#ffeb3b', '#f44336', '#2196f3'],
        hoverBackgroundColor: ['#4caf50', '#ffeb3b', '#f44336', '#2196f3']
      }
    ]
  };

  public donutChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };

  public donutChartType: ChartType = 'doughnut';

  public callHistory: { name: string, time: string, type: string }[] = [
    { name: 'John Doe', time: '10:30 AM', type: 'Incoming' },
    { name: 'Jane Smith', time: '11:00 AM', type: 'Outgoing' },
    { name: 'Michael Brown', time: '12:15 PM', type: 'Missed' }
  ];
  public cardDetails: { name: string, type: string }[] = [
    { name: 'status', type: 'Active' },
    { name: 'card ', type: 'credit' },
    { name: 'card Type', type: 'visa' },
    { name: 'card Number', type: '1254652498752458' },
    { name: 'Expire Date', type: '12-12-2026' },
    { name: 'Currency', type: 'BDT' }
  ];

}
 

