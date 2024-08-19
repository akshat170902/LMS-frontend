import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserData } from '../../models/userData';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {
userData:UserData={fullName:"akshat",email:"akshat@gmail.com",password:"12345678",contactNumber:9876543210,role:'STUDENT'};
 
constructor(private dataService: DataService) {
  
}
onSubmit(){
  console.log(this.userData);
  this.dataService.getLogin(this.userData).subscribe(response => {
    this.userData = response;
    console.log(response);
  })
}

  
}
