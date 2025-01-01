import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { LoginComponent } from './login/login.component';
import { SavingsComponent } from './savings/savings.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportsComponent } from './reports/reports.component';


export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: 'login', component: LoginComponent },
  {path : 'savings', component:SavingsComponent},
  { path: 'profile', component: ProfileComponent },
  {path:'reports',component:ReportsComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Redirect to login if no path
];








