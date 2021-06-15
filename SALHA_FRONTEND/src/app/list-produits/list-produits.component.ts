import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {
  produits:Observable<Produit[]>;
  constructor(public produitService:ProduitService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.produits = this.produitService.getlistProduit();
  }
  deleteproduit(id: number) {
    this.produitService.deleteproduit(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  produitDetails(id: number){
    this.router.navigate(['detailleproduit', id]);
  }

  updateproduit(id: number){
    this.router.navigate(['modifierproduit', id]);
  }


}
