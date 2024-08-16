import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Query } from '../models/query.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private users = [
    { id: 1, name: 'User One', role: 'User' },
    { id: 2, name: 'User Two', role: 'User' }
  ];

  private mentors = [
    { id: 1, name: 'Mentor One', role: 'Mentor', approved: false },
    { id: 2, name: 'Mentor Two', role: 'Mentor', approved: false }
  ];

  private queries : Query[] = [
    { id: 1, username: 'john_doe', question: 'How do I implement routing in Angular?', mentorName: 'Jane Smith' },
    { id: 2, username: 'jane_doe', question: 'What is dependency injection?', answer: 'Dependency injection is...', mentorName: 'John Doe' }
  ]

  constructor() { }
  getUsers() {
    return of(this.users);
  }

  getMentors() {
    return of(this.mentors);
  }

  approveMentor(id: number) {
    const mentor = this.mentors.find(m => m.id === id);
    if (mentor) {
      mentor.approved = true;
    }
  }
  removeMentor(id : number) {
    this.mentors = this.mentors.filter(m => m.id !== id);
    //console.log(this.mentors)
  }

  getQueries():  Observable<Query[]> {
    return of(this.queries);
  }
  removeQuery(id: number): void {
    this.queries = this.queries.filter(q => q.id !== id);
    console.log(this.queries);
  }
}
