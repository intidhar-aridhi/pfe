import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursierService {
  public baseUrl = 'http://localhost:3000/coursiers';
  public urlajout='http://localhost:3000/coursiers/ajouter';

  constructor(
    private http : HttpClient
  ) { }
  getcoursier(id: number) :Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createcoursier( coursier:Object):Observable<Object>{
   
    return this.http.post(`${this.urlajout}`,coursier);
  }
  updatecoursier(value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl}/`,value);
  }
  deletecoursier(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);

  }
  getcoursierlist():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
    
  }
}
