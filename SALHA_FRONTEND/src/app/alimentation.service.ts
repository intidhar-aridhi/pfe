import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlimentationService {
  public baseUrl = 'http://localhost:3000/alimentation';
  constructor(private http : HttpClient) { }
  getalimentation(id: number) :Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createalimentation( alimentation:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,alimentation);
  }
  updatealimentation(value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl}/`,value);
  }
  deletealimentation(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);

  }
  getlistalimentation():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
    
  }
}
