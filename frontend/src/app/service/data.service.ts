import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { UserData } from '../models/UserData';
import { LoginModel } from '../models/LoginModel';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public type: string = "all";

  private apiUrl = "https://localhost:8088/"
  constructor(private httpClient: HttpClient) {
  }

  
  // Method to get headers with JWT token
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('jwtToken'); // Retrieve the token from localStorage
    return new HttpHeaders({
      'Authorization': `Bearer ${token}` // Include the token in the Authorization header
    });
  }


  getSignUp(userData:UserData){
    return this.httpClient.post<any>(`http://localhost:8088/users/signup`,userData)
      .pipe(
        catchError(this.handleError)
      );
  }
  getLogin(userData:LoginModel){
    console.log(userData);
    return this.httpClient.post<any>(`http://localhost:8088/users/login`,userData, { responseType: 'text' as 'json' });
      
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
  getCourseById(id: string): Observable<any[]> {

    return this.httpClient.get<any[]>(`http://localhost:8084/courses/public/${id}`);
  }
  //done
  getUser(): Observable<any[]> {

    return this.httpClient.get<any[]>("http://localhost:8088/users/9",{ headers: this.getHeaders() });
  }
  //done
  getAllCourses() : Observable<any[]>{
    return this.httpClient.get<any[]>("http://localhost:8084/courses/public/status/true")
  }

  //cors error
  getEnrolledCourses(id:number) :Observable<any[]>{
    return this.httpClient.get<any[]>( `http://localhost:8084/api/v1/user-courses/user/get-course/${id}`,{headers: this.getHeaders() });
  }
}
