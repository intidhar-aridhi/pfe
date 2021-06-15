import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {
  public baseUrl = 'http://localhost:3000/femmes/femmeprod';
  public urlproduction = 'http://localhost:3000/production/getprodbyidf';
  public urlproduit = 'http://localhost:3000/production/getproduitbyidp';
  public urldonnesprod = 'http://localhost:3000/production';
  constructor(private http : HttpClient) { }
  getListProductiondesfemmes():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
    
  }
  getproduction(id: number) :Observable<any>{
    return this.http.get(`${this.urlproduction}/${id}`);
  }
  getproduitsproduction(id: number) :Observable<any>{
    return this.http.get(`${this.urlproduit}/${id}`);
  }
  getdonnesprod(id: number) :Observable<any>{
    return this.http.get(`${this.urldonnesprod}/${id}`);
  }




}
