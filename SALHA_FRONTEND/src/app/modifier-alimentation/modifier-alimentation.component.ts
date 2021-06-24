import { Component, OnInit } from '@angular/core';
import { Alimentation } from '../alimentation';
import { AlimentationService } from '../alimentation.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-modifier-alimentation',
  templateUrl: './modifier-alimentation.component.html',
  styleUrls: ['./modifier-alimentation.component.css']
})
export class ModifierAlimentationComponent implements OnInit {
  id: number;
  alimentation: Alimentation;
  constructor(private route: ActivatedRoute,private router: Router,
    public alimentationService: AlimentationService) { }

  ngOnInit(): void {
    this.alimentation = new Alimentation();

    this.id = this.route.snapshot.params['id'];
    
    this.alimentationService.getalimentation(this.id)
      .subscribe(data => {
        

        this.alimentation = data[0];
        
        

        console.log("++++++++++uniteAvantModification+++++++",this.alimentation);
      }, error => console.log(error));
  }
  updateAlimentation() {
    console.log(this.id);
    console.log("**********AlimentationApresModification***********",this.alimentation);
    let data= { 
    id_alimentation:this.alimentation.id_alimentation,
    nom_A:this.alimentation.nom_A,
    image_A:this.alimentation.image_A,
    nb_min:this.alimentation.nb_min,
    unite_al:this.alimentation.unite_al
    

    }
    console.log(data);
    this.alimentationService.updatealimentation(data)
      .subscribe(data => {
        console.log(data);
        this.alimentation = new Alimentation();
        this.gotoList();
      }, error => console.log(error));
  }
  onSubmit() {
    this.updateAlimentation();    
  }

  gotoList() {
    this.router.navigate(['/alimentations']);
  }




}
