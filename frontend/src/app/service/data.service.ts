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
  constructor(private httpClient: HttpClient) { }


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
    return this.httpClient.get<any>(`http://localhost:8098/courses/public/name/${name}`)
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
    return this.httpClient.get<any[]>(`http://localhost:8098/courses/public/status/true${this.type}`);
  }


  //pending
  getCourseById(id: number): Observable<any> {

    return this.httpClient.get<any>(`http://localhost:8098/courses/public/${id}`);
  }
  //done
  getUser(): Observable<any[]> {

    return this.httpClient.get<any[]>("http://localhost:8088/users/9", { headers: this.getHeaders() });
  }
  //done
  getAllCourses(): Observable<any[]> {
    return this.httpClient.get<any[]>("http://localhost:8098/courses/public/status/true")
  }
  //done
  getEnrolledCourses(userId: number): Observable<any[]> {
    return this.httpClient.get<any[]>(`http://localhost:8098/user-courses/public/enrolled-courses/${userId}`, { headers: this.getHeaders() });
  }
  //todo
  setCompleteCourse(userId: number, courseId: number): Observable<any[]> {
    return this.httpClient.put<any[]>(`http://localhost:8098/user-courses/public/completion-status/${userId}/${courseId}/true`, { headers: this.getHeaders() });
  }


  //todo

  setEnrollCourse(userId: number, courseId: number): Observable<any[]> {
    return this.httpClient.post<any[]>(`http://localhost:8098/user-courses/public/enroll/${userId}/${courseId}`, { headers: this.getHeaders() });
  }

  getEnrolledAndProgressStatus(userId: number, courseId: number): Observable<{ course: Course, doubtList: any[], isEnrolled: boolean, completionStatus: boolean }> {
    return this.httpClient.get<{ course: Course, doubtList: any[], isEnrolled: boolean, completionStatus: boolean }>(`http://localhost:8084/user-courses/public/details/${userId}/${courseId}`, { headers: this.getHeaders() });
  }

  setAnswer(doubtId: number, answer: string): Observable<any[]> {
    return this.httpClient.post<any[]>(`http://localhost:8098/doubts/mentor/${doubtId}`, answer, { headers: this.getHeaders() });
  }

  createCourse(course: any): Observable<any[]> {
    return this.httpClient.post<any[]>(`http://localhost:8098/courses/mentor`, course, { headers: this.getHeaders() });
  }

}
