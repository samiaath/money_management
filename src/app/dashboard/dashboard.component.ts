import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { NgChartsModule } from 'ng2-charts';
import { Router } from '@angular/router';
import { ExpensesService } from '../services/expenses.service'; // Import the ExpensesService
import { SavingsService } from '../services/savings.service'; // Import the SavingsService
import { Expense } from '../models/expense.model'; // Import the Expense model
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardComponent implements OnInit {
  title = 'ng2-charts-demo';
  
  public lineChartData: ChartConfiguration['data'] = {
    labels:  [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
  
    datasets: [
      {
        data: [], // Initialize with empty data
        label: 'Income',
        fill: true,
        tension: 0.5,
        borderColor: '#28e915',
        backgroundColor: 'rgba(128, 179, 146, 0.3)'
      },
      {
        data: [], // Initialize with empty data
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
        data: [], // Initialize with empty data
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

  totalExpenses: number = 0; 
  totalSavings: number = 0;
  totalIncome: number = 0;
  totalBalance: number = 0;


  constructor(private router: Router, private expensesService: ExpensesService, private savingsService: SavingsService) {} // Inject the ExpensesService and SavingsService
  
  ngOnInit(): void {
    this.updateDonutChartData();
    this.totalExpenses = this.expensesService.getTotalExpenses();
    this.totalSavings = this.savingsService.getCurrentSavings();
    this.totalIncome = this.savingsService.getCurrentIncome();
    this.calculateTotalBalance();
    this.updateLineChartData(); // Update the line chart data
    this.updateRecentExpenses();
  }

  calculateTotalBalance(): void {
    this.totalBalance = this.totalIncome - this.totalSavings - this.totalExpenses;
  }

  // Method to update the line chart data
  updateLineChartData(): void {
    const monthlyExpenses = new Array(12).fill(0);
    const monthlyIncome = new Array(12).fill(0);

    this.expensesService.getExpenses().forEach(expense => {
      const month = new Date(expense.date).getMonth();
      monthlyExpenses[month] += expense.amount;
    });

    // Assuming you have a method to get monthly income data
    // Here, we use a placeholder for demonstration
    const incomeData = this.savingsService.getMonthlyIncomeData();
    incomeData.forEach((income, index) => {
      monthlyIncome[index] = income;
    });

    this.lineChartData.datasets[0].data = monthlyIncome;
    this.lineChartData.datasets[1].data = monthlyExpenses;
  }

  // Method to update the donut chart data
  updateDonutChartData(): void {
    const categories = ['Food', 'Housing', 'Utilities', 'Transport'];
    const data = categories.map(category => this.expensesService.getTotalAmountByCategory(category));
    
    this.donutChartData.datasets[0].data = data;
  }

  navigateTo(path: string): void {
    this.router.navigate([path]); // Navigate to the selected path
  }

  recentExpenses: Expense[] = [];
  updateRecentExpenses(): void {
    this.recentExpenses = this.expensesService.getExpenses()
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .slice(0, 3);
  }
}