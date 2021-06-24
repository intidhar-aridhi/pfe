import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { Production } from '../production';
import { ProductionService } from '../production.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produits-production',
  templateUrl: './produits-production.component.html',
  styleUrls: ['./produits-production.component.css']
})
export class ProduitsProductionComponent implements OnInit {
  id: number;
idp:number;
production:Production;
  produit:Produit;
  constructor( private route: ActivatedRoute,private router: Router,
    private productionservice: ProductionService ) { }

  ngOnInit(): void {
    this.production= new Production;
    this.id = this.route.snapshot.params['id'];
    
   this.productionservice.getproduitsproduction(this.id)
      .subscribe((data) => {
        this.produit =data;

     console.log("prod" , this.produit);
     this.produit = data[0];
  
      
       
        
      }, error => console.log(error));

 

  }

}
