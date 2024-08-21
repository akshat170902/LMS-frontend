import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError, map } from 'rxjs';
import { UserData } from '../models/UserData';
import { LoginModel } from '../models/LoginModel';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public type: string = "all";

  private apiUrl = "https://localhost:8088/"
  constructor(private httpClient: HttpClient) {}


  // Method to get headers with JWT token
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('jwtToken'); // Retrieve the token from localStorage
    return new HttpHeaders({
      'Authorization': `Bearer ${token}` // Include the token in the Authorization header
    });
  }

  getUserData(headers: HttpHeaders): Observable<any> {
    return this.httpClient.get('http://localhost:8088/users/get_user', { headers: this.getHeaders() });
  }
  getSignUp(userData: UserData) {
    return this.httpClient.post<any>(`http://localhost:8088/users/signup`, userData)
      .pipe(
        catchError(this.handleError)
      );
  }
  getLogin(userData: LoginModel) {
    console.log(userData);
    return this.httpClient.post<any>(`http://localhost:8088/users/login`, userData, { responseType: 'text' as 'json' });

  }
  //done
  getCoursesByName(name: string): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:8084/courses/public/name/${name}`)
      .pipe(
        catchError(this.handleError)
      );
  }


  private handleError(error: HttpErrorResponse) {
    return throwError("Something went Wrong");
  }

  //done
  getCategories(type: string): Observable<any[]> {
    this.type = type;
    return this.httpClient.get<any[]>(`http://localhost:8084/courses/public/status/true${this.type}`);
  }


  //pending
  getCourseById(id: string): Observable<any> {

    return this.httpClient.get<any>(`http://localhost:8098/courses/public/${id}`);
  }
  //done
  getUser(): Observable<any[]> {

    return this.httpClient.get<any[]>("http://localhost:8088/users/9", { headers: this.getHeaders() });
  }
  //done
  getAllCourses(): Observable<any[]> {
    return this.httpClient.get<any[]>("http://localhost:8084/courses/public/status/true")
  }
  //done
  getEnrolledCourses(userId: number): Observable<any[]> {
    return this.httpClient.get<any[]>(`http://localhost:8084/user-courses/public/enrolled-courses/${userId}`, { headers: this.getHeaders() });
  }
  //todo
  setCompleteCourse(userId: number, courseId: number): Observable<any[]> {
    return this.httpClient.put<any[]>(`http://localhost:8084/user-courses/public/completion-status/${userId}/${courseId}/true`, { headers: this.getHeaders() });
  }

  //todo

  setEnrollCourse(userId: number, courseId: number): Observable<any[]> {
    return this.httpClient.post<any[]>(`http://localhost:8084/user-courses/public/enroll/${userId}/${courseId}`, { headers: this.getHeaders() });
  }

  getEnrolledStatus(userId: number, courseId: number): Observable<any[]> {
    return this.httpClient.get<any[]>(`http://localhost:8084/user-courses/public/details/${userId}/${courseId}`, { headers: this.getHeaders() });
  }

// Check if the user is enrolled in a specific course
isUserEnrolled(userId: string, courseId: string): Observable<boolean> {
  return this.httpClient.get<boolean>(`${this.apiUrl}/api/v1/user-courses/user/is-enrolled/${userId}/${courseId}`, {
    headers: this.getHeaders()
  }).pipe(
    catchError(this.handleError)
  );
}

   // Get course progress for a user
   getCourseProgress(userId: string, courseId: string): Observable<'pending' | 'completed'> {
    return this.httpClient.get<'pending' | 'completed'>(`${this.apiUrl}/api/v1/user-courses/user/progress/${userId}/${courseId}`, {
      headers: this.getHeaders()
    }).pipe(
      catchError(this.handleError)
    );
  }


  // Enroll a user in a course
  enrollUser(userId: string, courseId: string): Observable<void> {
    return this.httpClient.post<void>(`${this.apiUrl}/api/v1/user-courses/user/enroll`, { userId, courseId }, {
      headers: this.getHeaders()
    }).pipe(
      catchError(this.handleError)
    );
  }

  // Mark a course as complete for a user
  completeCourse(userId: string, courseId: string): Observable<void> {
    return this.httpClient.post<void>(`${this.apiUrl}/api/v1/user-courses/user/complete`, { userId, courseId }, {
      headers: this.getHeaders()
    }).pipe(
      catchError(this.handleError)
    );
  }









}
