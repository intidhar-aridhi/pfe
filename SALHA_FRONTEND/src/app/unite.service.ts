import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniteService {
  public baseUrl = 'http://localhost:3000/unites';
  constructor(private http : HttpClient) { }
  getunite(id: number) :Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createunite( unite:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,unite);
  }
  updateunite(value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl}/`,value);
  }
  deleteunite(id_U:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id_U}`);

  }
  getunitelist():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
    
  }
}
