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
}
