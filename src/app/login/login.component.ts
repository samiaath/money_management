import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-login',
  standalone: true,  // Standalone component flag
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule]  // Import FormsModule to use ngModel
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin(): void {
    if (this.username === 'user' && this.password === 'user') {
      sessionStorage.setItem('isLoggedIn', 'true'); // Set login status
      this.router.navigate(['/dashboard']); // Redirect to dashboard on success
    } else {
      alert('Invalid credentials');
    }
  }
}






