import { Component, OnInit } from '@angular/core';
import { Production } from '../production';

import { ProductionService } from '../production.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-production-femme',
  templateUrl: './production-femme.component.html',
  styleUrls: ['./production-femme.component.css']
})
export class ProductionFemmeComponent implements OnInit {
id: number;


production:Production[];

  constructor(private route: ActivatedRoute,private router: Router,
    private productionservice: ProductionService ) { }

  ngOnInit(): void {
    //this.production = new Production();

    this.id = this.route.snapshot.params['id'];
    
   this.productionservice.getproduction(this.id)
      .subscribe((data) => {
        this.production =data;

     console.log("prod" , this.production);
   
  
      
       
        
      }, error => console.log(error));

  }
  produitsdeproduction(idp: number){
    this.router.navigate(['produitsproduction', idp]);
  }
 

 
   
  

}
