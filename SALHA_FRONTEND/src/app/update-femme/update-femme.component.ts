import { Component, OnInit } from '@angular/core';
import { Femme } from '../femme';
import { FemmeService } from '../femme.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Gouvernorat } from '../gouvernorat';
import { GouvernoratService } from '../gouvernorat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-femme',
  templateUrl: './update-femme.component.html',
  styleUrls: ['./update-femme.component.css']
})
export class UpdateFemmeComponent implements OnInit {
  id: number;
  femme: Femme;
  gouvernorats:Observable<Gouvernorat[]>;
  gouvernorat: Gouvernorat = new Gouvernorat;
  constructor(private route: ActivatedRoute,private router: Router,
    public femmeService: FemmeService, private gouvernoratservice :GouvernoratService) { }

  ngOnInit(): void {
    this.femme = new Femme();

    this.id = this.route.snapshot.params['id'];
    
    this.femmeService.getFemme(this.id)
      .subscribe(data => {
        

        this.femme = data[0];
        
        

        console.log("++++++++++femme+++++++",this.femme);
      }, error => console.log(error));
      this.reloadData();
  }
  
  reloadData(){
    this.gouvernorats = this.gouvernoratservice.getlistgouvernorats();
  
  }
  updateFemme() {
    console.log(this.id);
    console.log("*********************",this.femme);
   
    let data= { 
    id:this.id,
    nom:this.femme.nom,
    prenom:this.femme.prenom,
    region:this.femme.region,
    numtel:this.femme.numtel,
    gouv:this.femme.gouv,
  
   
    

    }
   
    this.femmeService.updatefemme(data)
      .subscribe(data => {
        console.log(data);
        this.femme = new Femme();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateFemme();    
  }

  gotoList() {
    this.router.navigate(['/femmes']);
  }

}
