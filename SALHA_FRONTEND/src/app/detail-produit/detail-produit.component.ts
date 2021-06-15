import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {
  id: number;
  produit: Produit;
  constructor(private route: ActivatedRoute,private router: Router,
    private produitService: ProduitService) { }

    ngOnInit() {
      this.produit = new Produit();
  
      this.id = this.route.snapshot.params['id'];
      
      this.produitService.getproduit(this.id)
        .subscribe(data => {
          console.log(data)
          this.produit = data[0];
        }, error => console.log(error));
    }
  
    list(){
      this.router.navigate(['produits']);
    }
  
  }
  