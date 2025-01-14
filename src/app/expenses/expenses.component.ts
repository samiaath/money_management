import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../services/expenses.service';
import { Expense } from '../models/expense.model'; // Assure-toi que le chemin est correct

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent {
  categories = [
    { id: 1, name: 'Food', icon: 'fas fa-utensils' },
    { id: 2, name: 'Housing', icon: 'fas fa-home' },
    { id: 3, name: 'Utilities', icon: 'fas fa-lightbulb' },
    { id: 4, name: 'Transport', icon: 'fas fa-car' },
  ];

  expenseForm: FormGroup;

  constructor(private fb: FormBuilder, private expenseService: ExpenseService) {
    this.expenseForm = this.fb.group({
      category: ['', Validators.required],
      amount: [null, [Validators.required, Validators.min(0.01)]],
      description: ['', Validators.required],
      date: [null, Validators.required],
    });
  }

  addExpense() {
    if (this.expenseForm.valid) {
      const newExpense = {
        category: this.expenseForm.value.category,
        amount: this.expenseForm.value.amount.toString(),
        description: this.expenseForm.value.description,
        date: new Date(this.expenseForm.value.date).toISOString(),
      };

      this.expenseService.addExpense(newExpense);
      this.expenseForm.reset();
    }
  }

  get expenses() {
    return this.expenseService.getAllDepenses();
  }

  selectCategory(category: { name: string }) {
    this.expenseForm.controls['category'].setValue(category.name);
  }

  getSelectedCategoryName(): string | null {
    return this.expenseForm.value.category || null;
  }

  getCategoryIcon(categoryName: string): string {
    const category = this.categories.find((cat) => cat.name === categoryName);
    return category ? category.icon : '';
  }
}