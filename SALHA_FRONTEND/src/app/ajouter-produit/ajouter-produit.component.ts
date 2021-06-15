import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { Unite } from '../unite';

import { ProduitService } from '../produit.service';
import { UniteService } from '../unite.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {
  showMe:boolean=false
  produits$: Observable<Produit[]>
  unites:Observable<Unite[]>;
  produit: Produit = new Produit();
  unite: Unite = new Unite; 
  submitted = false;

 
  constructor(public produitservice: ProduitService, public uniteservice :UniteService,
    private router: Router ,private formBuilder: FormBuilder) { }
   
  
     ngOnInit() : void {
       this.reloadData();
    
  }
  toogleTag(){
    this.showMe=!this.showMe
  }

  async reloadData(){
    this.unites = await this.uniteservice.getunitelist();
   console.log('****************************unites ',this.unites)
  }
  
  newEmployee(): void {
    this.submitted = false;
    this.produit = new Produit();
  }
  newEmployeee(): void {
    this.submitted = false;
    this.unite = new Unite();
  }


  save() {
    console.log("*********before insert produit ",this.produit);
    this.produitservice.createproduit
    (this.produit).subscribe((res : any) => {
      console.log('res',res.data)
      this.produit = new Produit();
      this.router.navigate(['/produits/ajouterproduit']);
    }, 
    error => console.log(error));
  }
 saveunite() {
    console.log("unite",this.unite);
    
    this.uniteservice.createunite
    (this.unite).subscribe(async(data:any) => {
      console.log(this.unite)
      console.log("888888888888888888888888",data.id)
      this.unite = new Unite();
      this.showMe=false
      await  this.reloadData()
    
    }, 
    error => console.log(error));
  }
  onSubmitunite() {
    this.submitted = true;
    this.saveunite();    
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/produits']);
  }
  


}
