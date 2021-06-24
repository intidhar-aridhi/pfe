import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {
  produits:Observable<Produit[]>;
  closeResult: string;
  constructor(public produitService:ProduitService,private router:Router,private modalService: NgbModal) { }

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
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
      
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
