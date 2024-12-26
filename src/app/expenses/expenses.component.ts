import { Component } from '@angular/core';
import { Expense } from '../models/expense.model';
import { Category } from '../models/category.model';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  standalone: true,
  imports: [CommonModule],  // Add CommonModule to imports
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent {
  expenses: Expense[] = [
    { id: 1, categoryId:1, amount: 50, description: 'Food', date: new Date('2024-12-01') },
    { id: 2,categoryId:2, amount: 500, description: 'Housing', date: new Date('2024-12-01') },  // Fixed by converting string to Date
  ];

  categories: Category[] = [
    { id: 1, name: 'Food', description: 'All food-related expenses' },
    { id: 2, name: 'Housing', description: 'Rent, utilities, etc.' },
    { id: 3, name: 'Utilities', description: 'Electricity, water, etc.' },
  ];
}



