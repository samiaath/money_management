// app.routes.ts
import { Routes } from '@angular/router';
import { ExpensesComponent } from './expenses/expenses.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }  // Default redirect to dashboard
];




