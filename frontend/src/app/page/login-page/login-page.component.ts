import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../service/data.service';
import { LoginModel } from '../../models/LoginModel';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { HttpHeaders } from '@angular/common/http';
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
  public loading = false;



  constructor(private dataService: DataService, private router: Router,private toastr: ToastrService) {

  }
  navigateToLandingPage() {
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
        this.toastr.success('Login successful!', 'Success');
        console.log('JWT Token stored in localStorage');


        // Prepare the headers for the subsequent request
        const headers = new HttpHeaders().set('Authorization', `Bearer ${response}`);

        // Make another API call to get the user data
        this.dataService.getUserData(headers).subscribe({
          next: (userDataResponse: any) => {
            console.log('User data response:', userDataResponse);
            localStorage.setItem('user', JSON.stringify(userDataResponse));
            console.log('User data stored in localStorage');

            // Navigate to the landing page
            this.router.navigate(['/landing-page']);
          },
          error: (error: any) => {
            console.error('Error fetching user data:', error);
          }
        });

      },
      error: (error) => {
        this.toastr.error('Login failed. Please try again.', 'Error');
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