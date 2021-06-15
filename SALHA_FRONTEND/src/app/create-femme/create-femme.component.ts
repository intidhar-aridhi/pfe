import { Component, OnInit } from '@angular/core';
import { Femme } from '../femme';
import { Gouvernorat } from '../gouvernorat';

import { FemmeService } from '../femme.service';
import { GouvernoratService } from '../gouvernorat.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';






@Component({
  selector: 'app-create-femme',
  templateUrl: './create-femme.component.html',
  styleUrls: ['./create-femme.component.css']
})
export class CreateFemmeComponent implements OnInit {
  femmes$: Observable<Femme[]>
  gouvernorats:Observable<Gouvernorat[]>;


 
 
  
  
  femme: Femme = new Femme();
  gouvernorat: Gouvernorat = new Gouvernorat;
  
  submitted = false;
 
  constructor(private femmeService: FemmeService, private gouvernoratservice :GouvernoratService,
    private router: Router ,private formBuilder: FormBuilder) { }
   
  
    ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.gouvernorats = this.gouvernoratservice.getlistgouvernorats();
  
  }
  
  newEmployee(): void {
    this.submitted = false;
    this.femme = new Femme();
  }

  save() {
    console.log("femme ",this.femme);
    
    this.femmeService
    .createfemme(this.femme).subscribe(data => {
      console.log(this.femme)
      this.femme = new Femme();

      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/femmes']);
  }
  


}
