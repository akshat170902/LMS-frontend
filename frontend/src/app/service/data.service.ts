import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { UserData } from '../models/userData';
import { LoginModel } from '../models/LoginModel';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public type: string = "all";

  private apiUrl = "https://localhost:8088/"
  constructor(private httpClient: HttpClient) {
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
  getCoursesByName(name: string): Observable<any> {
    return this.httpClient.get<any>(`https://fakestoreapi.com/products/${name}`)
      .pipe(
        catchError(this.handleError)
      );
  }


  private handleError(error: HttpErrorResponse) {
    return throwError("Something went Wrong");
  }


  getCategories(type: string): Observable<any[]> {
    this.type = type;
    return this.httpClient.get<any[]>(`http://localhost:8084/courses${this.type}`);
  }
  getCourseById(id: string): Observable<any[]> {

    return this.httpClient.get<any[]>(`https://fakestoreapi.com/products/${id}`);
  }
  getUser(): Observable<any[]> {

    return this.httpClient.get<any[]>("https://api.escuelajs.co/api/v1/users/1");
  }

  getCourses(): Observable<any[]> {
    return this.httpClient.get<any[]>("https://api.escuelajs.co/api/v1/users")
  }
}
