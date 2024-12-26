import { Routes } from '@angular/router';
import { ExpensesComponent } from './expenses/expenses.component';
import { DashboardComponent } from './dashboard/dashboard.component';  // Import the dashboard component

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },  // Default route
  { path: 'dashboard', component: DashboardComponent },  // Add dashboard route
  { path: 'expenses', component: ExpensesComponent },  // Existing route for expenses
  // Add other routes as needed
];



