/*app.component.ts*/
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router'; 
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HeaderComponent, MenuComponent, ExpensesComponent,DashboardComponent], // Import RouterModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'money_management';
}

