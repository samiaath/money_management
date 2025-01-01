import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { SavingsService } from '../services/savings.service';  // Import the savings service

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
})
export class ReportsComponent implements OnInit {
  chart!: Chart;
  savingsAmount: number = 0;  // Variable to hold the savings value
  expensesByCategory: { category: string; amount: number }[] = [
    { category: 'Housing', amount: 800 },
    { category: 'Food', amount: 300 },
    { category: 'Transportation', amount: 150 },
    { category: 'Utilities', amount: 100 },
    { category: 'Savings', amount: 200 },  // Initial savings value
  ];

  constructor(private savingsService: SavingsService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    // Subscribe to the savings data from the service
    this.savingsService.currentSavings$.subscribe((savings) => {
      this.savingsAmount = savings;
      this.updateSavingsInChart();
    });
    this.createPieChart();
  }

  // Method to update the savings in the chart
  updateSavingsInChart(): void {
    const savingsCategory = this.expensesByCategory.find(
      (category) => category.category === 'Savings'
    );
    if (savingsCategory) {
      savingsCategory.amount = this.savingsAmount; // Update savings category
    }

    // After updating, refresh the chart
    this.chart.update();
  }

  createPieChart(): void {
    const canvas = <HTMLCanvasElement>document.getElementById('expensesChart');
    const ctx = canvas?.getContext('2d');

    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: this.expensesByCategory.map((item) => item.category),
          datasets: [
            {
              data: this.expensesByCategory.map((item) => item.amount),
              backgroundColor: [
                '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
              ],
              hoverBackgroundColor: [
                '#FF6384AA', '#36A2EBAA', '#FFCE56AA', '#4BC0C0AA', '#9966FFAA',
              ],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: 'bottom' },
            tooltip: {
              callbacks: {
                label: (tooltipItem) => {
                  const value = tooltipItem.raw as number;
                  return `${value} $`;
                },
              },
            },
          },
        },
      });
    }
  }
}
