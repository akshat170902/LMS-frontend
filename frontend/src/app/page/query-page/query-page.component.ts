import { Component } from '@angular/core';
import { FooterComponent } from '../../component/footer/footer.component';
import { SidebarComponent } from '../../component/sidebar/sidebar.component';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-query-page',
  standalone: true,
  imports: [FooterComponent,SidebarComponent,NavbarComponent,CommonModule],
  templateUrl: './query-page.component.html',
  styleUrl: './query-page.component.css'
})
export class QueryPageComponent {
  queries : any[] = [
    { question: 'How do I implement routing in Angular?', mentorName: 'Jane Smith' },
    { question: 'What is dependency injection?', answer: 'Dependency injection is...', mentorName: 'John Doe' }
  ];
  ngOnInit() {
    
  }
}
