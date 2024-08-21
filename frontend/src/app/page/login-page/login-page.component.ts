import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../service/data.service';
import { LoginModel } from '../../models/LoginModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {
  userData: LoginModel = {
    email: 'akshatgarg@gmail.com',
    password: '12345678'
  }
public loading=false;



  constructor(private dataService: DataService, private router: Router) {

  }
  navigateToLandingPage(){
    this.router.navigate(['/landing-page']);
  }

  ngOnInit(): void {
    
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

        localStorage.setItem('user', response);
        console.log('User stored in localStorage');

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
  }
}