import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GouvernoratService {
  public baseUrl = 'http://localhost:3000/gouvernorats';

  constructor( private http : HttpClient) { }
  getgouvernorat(id: number) :Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  creategouvernorat( gouvernorat:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,gouvernorat);
  }
  updategouvernorat(value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl}/`,value);
  }
  deletegouvernorat(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);

  }
  getlistgouvernorats():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
    
  }
}
