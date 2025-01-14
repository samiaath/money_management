import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Expense } from '../models/expense.model'; // Assure-toi que le chemin est correct

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  private expensesSubject = new BehaviorSubject<Expense[]>([
    { id: 1, category: 'Food', description: 'Groceries', amount: 50, date: new Date('2025-01-01') },
    { id: 2, category: 'Housing', description: 'Rent', amount: 500, date: new Date('2025-01-01') },
    { id: 3, category: 'Utilities', description: 'Electricity Bill', amount: 75, date: new Date('2025-01-01') },
    { id: 4, category: 'Transport', description: 'Bus Pass', amount: 30, date: new Date('2025-01-01') },
  ]);
  expenses$ = this.expensesSubject.asObservable();

  constructor() {}

  getExpenses(): Expense[] {
    return this.expensesSubject.getValue();
  }

  addExpense(expense: Expense): void {
    const currentExpenses = this.getExpenses();
    this.expensesSubject.next([...currentExpenses, expense]);
  }

  getTotalAmountByCategory(category: string): number {
    return this.getExpenses()
      .filter(expense => expense.category === category)
      .reduce((total, expense) => total + expense.amount, 0);
  }

  getTotalExpenses(): number {
    return this.getExpenses()
      .reduce((total, expense) => total + expense.amount, 0);
  }

}