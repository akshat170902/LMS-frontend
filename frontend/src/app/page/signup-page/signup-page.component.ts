import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserData } from '../../models/UserData';
import { DataService } from '../../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {
userData:UserData={fullName:"akshat",email:"akshat@gmail.com",password:"12345678",contactNumber:9876543210,role:'STUDENT'};
 
isMentor:boolean=false;

constructor(private dataService: DataService,private router: Router) {
}

navigateToLandingPage(){
  this.router.navigate(['/landing-page']);
}
onSubmit(){
  this.userData.role=this.isMentor?"MENTOR":"STUDENT";

  console.log(this.userData);
  this.dataService.getSignUp(this.userData).subscribe(response => {
    this.userData = response;
    console.log(response);
  })
}
onRoleToggle(){
  this.isMentor=!this.isMentor;
}
  
}