import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Query } from '../models/query.model';
import { Feedback } from '../models/feedback.model';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl = 'http://localhost:8088/users';
  private coursesUrl = 'http://localhost:8084/courses';

  constructor(private httpClient: HttpClient) { }

  // Method to get headers with JWT token
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('jwtToken'); // Retrieve the token from localStorage
    return new HttpHeaders({
      'Authorization': `Bearer ${token}` // Include the token in the Authorization header
    });
  }

  getUsers(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  getApprovedMentors(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  getUnApprovedMentors(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  getMentors(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  approveMentor(id: number): Observable<any[]> {
    return this.httpClient.put<any[]>(`${this.apiUrl}/${id}/approve`, {}, { headers: this.getHeaders() });
  }

  removeMentor(id: number): Observable<any[]> {
    return this.httpClient.delete<any[]>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  getQueries(): Observable<Query[]> {
    return this.httpClient.get<Query[]>(`${this.apiUrl}/queries`, { headers: this.getHeaders() });
  }

  removeQuery(id: number): Observable<any[]> {
    return this.httpClient.delete<any[]>(`${this.apiUrl}/queries/${id}`, { headers: this.getHeaders() });
  }

  getFeedbacks(): Observable<Feedback[]> {
    return this.httpClient.get<Feedback[]>(`${this.apiUrl}/feedbacks`, { headers: this.getHeaders() });
  }

  getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${this.coursesUrl}/status/true`, { headers: this.getHeaders() });
  }

  approveCourse(courseId: number): Observable<any[]> {
    return this.httpClient.put<any[]>(`${this.coursesUrl}/${courseId}/true`, {}, { headers: this.getHeaders() });
  }

  removeCourse(courseId: number): Observable<any[]> {
    return this.httpClient.put<any[]>(`${this.coursesUrl}/${courseId}/false`, {}, { headers: this.getHeaders() });
  }
}