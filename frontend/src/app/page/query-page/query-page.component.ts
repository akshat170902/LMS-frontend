import { Component } from '@angular/core';
import { FooterComponent } from '../../component/footer/footer.component';
import { SidebarComponent } from '../../component/sidebar/sidebar.component';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-query-page',
  standalone: true,
  imports: [FooterComponent,SidebarComponent,NavbarComponent,CommonModule,FormsModule],
  templateUrl: './query-page.component.html',
  styleUrl: './query-page.component.css'
})
export class QueryPageComponent {
  queries : any[] = [
    { question: 'How do I implement routing in Angular?', mentorName: 'Jane Smith' },
    { question: 'What is dependency injection?', answer: 'Dependency injection is...', mentorName: 'John Doe' }
  ];
  userRole: string | null = null;
  activeAnswerBoxIndex: number | null = null;
  tempAnswer: string = '';

  ngOnInit() {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      this.userRole = parsedUser.role;
    }
  }
  toggleAnswerBox(index: number): void {
    // Toggle the display of the answer box
    this.activeAnswerBoxIndex = this.activeAnswerBoxIndex === index ? null : index;
  }
  submitAnswer(query: any,index: number) : void {
    query.answer = this.tempAnswer; 
    this.activeAnswerBoxIndex = null; 
    this.tempAnswer = ''; 
    if(query.answer.trim()) {
      console.log(query.answer)
    }
  }

}
