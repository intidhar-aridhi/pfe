import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FemmeService {
  public baseUrl = 'http://localhost:3000/femmes';
 
  

  constructor(private http : HttpClient) { }
  
  getFemme(id: number) :Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createfemme( femme:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,femme);
  }
  updatefemme(value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl}/`,value);
  }
  deletefemme(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);

  }
  getfemmelist():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
    
  }
}