import { Component, OnInit } from '@angular/core';
import { Coursier } from '../coursier';
import { CoursierService } from '../coursier.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifier-coursier',
  templateUrl: './modifier-coursier.component.html',
  styleUrls: ['./modifier-coursier.component.css']
})
export class ModifierCoursierComponent implements OnInit {
  id: number;
 coursier: Coursier;
  constructor(private route: ActivatedRoute,private router: Router,
    public coursierservice: CoursierService) { }

  ngOnInit(): void {
    this.coursier = new Coursier();

    this.id = this.route.snapshot.params['id'];
    
    this.coursierservice.getcoursier(this.id)
      .subscribe(data => {
        

        this.coursier = data[0];
        
        

        console.log("++++++++++femme+++++++",this.coursier);
      }, error => console.log(error));
  }
  updateFemme() {
    console.log(this.id);
    console.log("*********************",this.coursier);
    let data= { 
    id:this.id,
    nom:this.coursier.nom,
    prenom:this.coursier.prenom,
    numtel:this.coursier.numtel,
    email:this.coursier.email,
    password:this.coursier.password
    

    }
    console.log(data);
    this.coursierservice.updatecoursier(data)
      .subscribe(data => {
        console.log(data);
        this.coursier = new Coursier();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateFemme();    
  }

  gotoList() {
    this.router.navigate(['/coursiers']);
  }

}


