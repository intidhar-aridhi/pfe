import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Femme } from '../femme';
import { ProductionService } from '../production.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-declaration-production',
  templateUrl: './list-declaration-production.component.html',
  styleUrls: ['./list-declaration-production.component.css']
})
export class ListDeclarationProductionComponent implements OnInit {
  femmesquiontproductions:Observable<Femme[]>;
  constructor(public productionService:ProductionService,private router:Router) { }
  filtredprod: [];
  ngOnInit(): void {
    this.listproductions();

  }
  async listproductions(){
    this.femmesquiontproductions = this.productionService.getListProductiondesfemmes();
    
  }
  productiondefemme(id: number){
    this.router.navigate(['listdesfemmesayantproduction', id]);
  }

}
