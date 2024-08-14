import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public type:string="all";
  constructor(private httpClient: HttpClient) { 
  }
  getCategories(type:string) : Observable<any[]>{
    this.type=type;
    return this.httpClient.get<any[]>(  `https://fakestoreapi.com/products/${this.type}`);
  }
}
