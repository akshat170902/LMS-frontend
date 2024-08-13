import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { 
  }
  getCategories() : Observable<any[]>{

    return this.httpClient.get<any[]>("https://fakestoreapi.com/products");
  }

  getUser() : Observable<any[]>{

    return this.httpClient.get<any[]>("https://api.escuelajs.co/api/v1/users/1");
  } 
}
