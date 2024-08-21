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


//done
  getUsers(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl, { headers: this.getHeaders() });
  }


//done
  getApprovedMentors(): Observable<any[]> {
    return this.httpClient.get<any[]>(`http://localhost:8088/users/role/approval/true`, { headers: this.getHeaders() });
  }


//done
  getUnApprovedMentors(): Observable<any[]> {
    return this.httpClient.get<any[]>(`http://localhost:8088/users/role/approval/false`, { headers: this.getHeaders() });
  }


//done
  getMentors(): Observable<any[]> {
    return this.httpClient.get<any[]>(`http://localhost:8088/users/role/approval/true`, { headers: this.getHeaders() });
    
  }


//done
  approveMentor(id: number): Observable<any[]> {
    return this.httpClient.put<any[]>(`http://localhost:8088/users/role/set-approval/true/${id}`, {}, { headers: this.getHeaders() });
  }


//done
  removeMentor(id: number): Observable<any[]> {
    return this.httpClient.delete<any[]>(`http://localhost:8088/users/${id}`, { headers: this.getHeaders() });
  }


//done
  getQueries(): Observable<Query[]> {
    return this.httpClient.get<Query[]>(`http://localhost:8084/doubts/admin/all-doubts`, { headers: this.getHeaders() });
  }


//done
  removeQuery(id: number): Observable<any[]> {
    return this.httpClient.delete<any[]>(` http://localhost:8084/doubts/admin/${id}`, { headers: this.getHeaders() });
  }


//todo
  getFeedbacks(): Observable<Feedback[]> {
    return this.httpClient.get<Feedback[]>(`${this.apiUrl}/feedbacks`, { headers: this.getHeaders() });
  }

//done
  getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`http://localhost:8084/courses/admin/status/false`, { headers: this.getHeaders() });
  }


//pending
  approveCourse(courseId: number): Observable<any[]> {
    return this.httpClient.put<any[]>(`${this.coursesUrl}/admin/${courseId}/true`, {}, { headers: this.getHeaders() });
  }


//pending
  removeCourse(courseId: number): Observable<any[]> {
    return this.httpClient.delete<any[]>(`http://localhost:8098/courses/admin/${courseId}`, { headers: this.getHeaders() });
  }


  //pending
  createDoubt(doubt:Query) :Observable<any[]> {
      return this.httpClient.post<any[]>(`http://localhost:8084/doubts/public/create-doubt`,{doubt}, { headers: this.getHeaders() });
    }
  
}