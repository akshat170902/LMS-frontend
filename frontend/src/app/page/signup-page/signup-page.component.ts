import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {

  userData: any={
    name:'',
    email:'',
    password:'',
    mobile:''
  }
 
}
