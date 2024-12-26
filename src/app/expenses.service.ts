import { Injectable } from '@angular/core';
import { Category } from './models/category.model';
import { Expense } from './models/expense.model';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  private categories: Category[] = [
    { id: 1, name: 'Food', description: 'All food-related expenses' },
    { id: 2, name: 'Transportation', description: 'Travel-related expenses' },
    { id: 3, name: 'Utilities', description: 'Electricity, water, etc.' },
  ];

  private expenses: Expense[] = [
    { id: 1, categoryId: 1, description: 'Groceries', amount: 50, date: new Date() },
    { id: 2, categoryId: 2, description: 'Bus fare', amount: 10, date: new Date() },
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getExpenses(): Expense[] {
    return this.expenses;
  }

  addExpense(expense: Expense): void {
    this.expenses.push(expense);
  }
}
