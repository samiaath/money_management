import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent {
  expenses = [
    { id: 1, category: 'Food', amount: 50, description: 'Groceries', date: new Date('2024-12-01') },
    { id: 2, category: 'Housing', amount: 500, description: 'Rent', date: new Date('2024-12-01') },
  ];

  categories = [
    { id: 1, name: 'Food', icon: 'fas fa-utensils' },
    { id: 2, name: 'Housing', icon: 'fas fa-home' },
    { id: 3, name: 'Utilities', icon: 'fas fa-lightbulb' },
    { id: 4, name: 'Transport', icon: 'fas fa-car' },
  ];

  expenseForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
        id: this.expenses.length + 1,  // You may want to make sure IDs are unique or managed correctly.
        category: this.expenseForm.value.category,
        amount: this.expenseForm.value.amount,
        description: this.expenseForm.value.description,
        date: new Date(this.expenseForm.value.date),
      };
      
      this.expenses.push(newExpense);
  
      // Reset the form
      this.expenseForm.reset();
    }
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

