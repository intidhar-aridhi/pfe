import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  public baseUrl = 'http://localhost:3000/produits';
  constructor(private http : HttpClient) { }
    
  getproduit(id: number) :Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createproduit( produit:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,produit);
  }
  updateproduit(value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl}/`,value);
  }
  deleteproduit(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);

  }
  getlistProduit():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
    
  }
}
