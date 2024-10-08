import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../service/admin.service';
import { Query } from '../../models/query.model';
import { ActivatedRoute } from '@angular/router';
import { Doubt } from '../../models/doubt.model';

@Component({
  selector: 'app-query',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './query.component.html',
  styleUrl: './query.component.css'
})
export class QueryComponent {
  showAnswered: boolean = true;
  queryText: string = '';
  @Input() answeredQueries: Query[] = [];
  @Input() pendingQueries: Query[] = [];

  courseId: string = '';
  userId: string = '';
  // answeredQueries = [
  //   { question: 'What is the course duration?', answer: 'The course duration is 10 weeks.' },
  //   { question: 'Are there any prerequisites?', answer: 'No prerequisites are required.' },
  // ];

  // pendingQueries = [
  //   { question: 'How often are the classes?', answer: '' },
  //   // More pending queries can be added here
  // ];
  constructor(private queryService: AdminService, private route: ActivatedRoute) { }
  toggleQueries(type: string) {
    this.showAnswered = (type === 'answered');
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.courseId = params.get('id') ?? '';
      const userData = localStorage.getItem('user');
      if (userData) {
        try {
          const user = JSON.parse(userData);
          this.userId = user.id;
        } catch (e) {
          console.error('Failed to parse user data from localStorage:', e);
          localStorage.removeItem('user'); // Clear invalid user data
        }
      }
    });

  }
  onSubmit() {
    if (this.queryText.trim() === '') {
      alert('Please enter a valid question.');
      return;
    }

    const newDoubt: Doubt = {
      userId: this.userId, // Replace with the actual userId (as a string)
      question: this.queryText.trim(),
      answers: '', // Since this is a new doubt, the answer will be empty
      courseId: this.courseId// Replace with the actual courseId (as a string)
    };
    this.queryService.createDoubt(newDoubt).subscribe(
      (response) => {
        console.log('Doubt submitted successfully:', response);
        // Optionally update pending queries after successful submission
        // this.pendingQueries.push(newDoubt);

        // Reset the input field
        this.queryText = '';
      },
      (error) => {
        console.error('Error submitting doubt:', error);
      }
    );
  }
}
