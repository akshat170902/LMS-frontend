import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Query } from '../models/query.model';
import { Observable,BehaviorSubject } from 'rxjs';
import { map } from 'rxjs';
import { Feedback } from '../models/feedback.model';
import { Course } from '../models/course.model'

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
    { id: 2, name: 'Mentor Two', role: 'Mentor', approved: false },
    { id: 3, name: 'Mentor Three', role: 'Mentor', approved: true }
  ];

  private queries : Query[] = [
    { id: 1, username: 'john_doe', question: 'How do I implement routing in Angular?', mentorName: 'Jane Smith' },
    { id: 2, username: 'jane_doe', question: 'What is dependency injection?', answer: 'Dependency injection is...', mentorName: 'John Doe' }
  ];
  private feedbacks : Feedback[] =  [
    {id: 1,username: 'User One',description: 'very good app' },
    {id: 2,username: 'User Two',description: 'very bad app' },
  ];
  private courses : Course[] = [
    {id: 1,title: 'java',mentorId: 1,description: 'java java java',approved: false},
    {id: 2,title: 'c++',mentorId: 2,description: 'c++ is bad',approved: false },
  ]
  private mentorsSubject = new BehaviorSubject(this.mentors);
  mentors$ = this.mentorsSubject.asObservable();
  private courseSubject = new BehaviorSubject(this.courses);
  courses$ = this.courseSubject.asObservable();
  constructor() { }
  getUsers() {
    return of(this.users);
  }
  getApprovedMentors() {
    return this.mentors$.pipe(
      map(mentors => mentors.filter(mentor => mentor.approved))
    );
  }
  getUnApprovedMentors() {
    return this.mentors$.pipe(
      map(mentors => mentors.filter(mentor => !mentor.approved))
    );
  }
  getMentors() {
    return of(this.mentors);
  }

  approveMentor(id: number): void {
    this.mentors = this.mentors.map(mentor =>
      mentor.id === id ? { ...mentor, approved: true } : mentor
    );
    this.mentorsSubject.next(this.mentors); 
  }
  removeMentor(id: number): void {
    const updatedMentors = this.mentorsSubject.getValue().filter(mentor => mentor.id !== id);
    this.mentorsSubject.next(updatedMentors);
  }

  getQueries():  Observable<Query[]> {
    return of(this.queries);
  }
  removeQuery(id: number): void {
    this.queries = this.queries.filter(q => q.id !== id);
    console.log(this.queries);
  }
  getFeedbacks(): Observable<Feedback[]> {
    return of(this.feedbacks);
  }
  removeFeedback(id : number): void {
    this.feedbacks = this.feedbacks.filter(f => f.id !== id);
  }
  getCourses(): Observable<Course[]> {
    return this.courses$.pipe(
      map(courses => courses.filter(course => !course.approved))
    );
  }
  approveCourse(id: number): void {
    this.courses = this.courses.map(course =>
      course.id === id ? { ...course, approved: true } : course
    );
    this.courseSubject.next(this.courses); 
  }
  removeCourse(id: number): void {
    const updatedCourses = this.courseSubject.getValue().filter(course => course.id !== id);
    this.courseSubject.next(updatedCourses);
  }
 }
