import { Component, OnInit } from '@angular/core';
import { Gouvernorat } from '../gouvernorat';
import { GouvernoratService } from '../gouvernorat.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-modifier-gouvernorat',
  templateUrl: './modifier-gouvernorat.component.html',
  styleUrls: ['./modifier-gouvernorat.component.css']
})
export class ModifierGouvernoratComponent implements OnInit {
  id: number;
  gouvernorat: Gouvernorat;
  constructor(private route: ActivatedRoute,private router: Router,
    public gouvernoratService: GouvernoratService ) { }

    ngOnInit(): void {
      this.gouvernorat = new Gouvernorat();
  
      this.id = this.route.snapshot.params['id'];
      
      this.gouvernoratService.getgouvernorat(this.id)
        .subscribe(data => {
          
  
          this.gouvernorat = data[0];
          
          
  
          console.log("++++++++++gouvernoratAvantModification+++++++",this.gouvernorat);
        }, error => console.log(error));
    }
    updategouvernorat() {
      console.log(this.id);
      console.log("**********gouvernoratApresModification***********",this.gouvernorat);
      let data= { 
      id_G:this.id,
      nom_G:this.gouvernorat.nom_G,
      cle_G:this.gouvernorat.cle_G
      
  
      }
      console.log(data);
      this.gouvernoratService.updategouvernorat(data)
        .subscribe(data => {
          console.log(data);
          this.gouvernorat = new Gouvernorat();
          this.gotoList();
        }, error => console.log(error));
    }
  
    onSubmit() {
      this.updategouvernorat();    
    }
  
    gotoList() {
      this.router.navigate(['/gouvernorats']);
    }
  
  }
  