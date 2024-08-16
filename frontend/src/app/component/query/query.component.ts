import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-query',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './query.component.html',
  styleUrl: './query.component.css'
})
export class QueryComponent {
  showAnswered: boolean = true;
  queryText: string = '';

  answeredQueries = [
    { question: 'What is the course duration?', answer: 'The course duration is 10 weeks.' },
    { question: 'Are there any prerequisites?', answer: 'No prerequisites are required.' },
  ];

  pendingQueries = [
    { question: 'How often are the classes?', answer: '' },
    // More pending queries can be added here
  ];

  toggleQueries(type: string) {
    this.showAnswered = (type === 'answered');
  }

  onSubmit() {
    if (this.queryText.trim()) {
      this.pendingQueries.push({ question: this.queryText, answer: '' });
      this.queryText = '';
    }
  }
}
