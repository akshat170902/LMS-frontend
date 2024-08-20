import { Component, NgModule } from '@angular/core';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule,FormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  feedback = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // Handle form submission logic here
    console.log('Feedback submitted:', this.feedback);
    // You might want to reset the form or show a confirmation message here
    this.feedback = {
      name: '',
      email: '',
      message: ''
    };
  }
}
