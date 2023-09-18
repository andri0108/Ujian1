import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private  authService: AuthService) {}

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        console.log('Login successful!', response);
        // Handle successful login, e.g., navigate to a different page
      },
      error => {
        console.error('Login failed:', error);
        // Handle login error, e.g., display an error message
        this.loginError = true;
      }
    );
  }
}
