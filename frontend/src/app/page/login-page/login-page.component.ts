import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  userData: LoginModel = {
    email: 'akshat1@gmail.com',
    password: '12345678'
  }


  constructor(private dataService: DataService, private router: Router) {

  }
  onLogin() {
    console.log(this.userData);
    this.dataService.getLogin(this.userData).subscribe({
      next: (response: string) => {
        console.log(response);
        // Store the JWT token in localStorage
        localStorage.setItem('jwtToken', response);
        console.log('JWT Token stored in localStorage');
        // Navigate to the landing page
        this.router.navigate(['/landing-page']);
      },
      error: (error) => {
        console.error('Login error:', error);
        // Clear userData
        this.userData = {
          email: '',
          password: ''
        };
        // Optionally, you can add a message to inform the user about the failed login
      }
    });

  constructor(private router: Router) {}
navigateToLandingPage(){
  this.router.navigate(['/landing-page']);
  
}

  userData: any={
    email:'',
    password:''
  }
}
