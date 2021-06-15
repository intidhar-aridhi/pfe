import { Component, OnInit } from '@angular/core';
import { Coursier } from '../coursier';


import { CoursierService } from '../coursier.service';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajouter-coursier',
  templateUrl: './ajouter-coursier.component.html',
  styleUrls: ['./ajouter-coursier.component.css']
})
export class AjouterCoursierComponent implements OnInit {
  coursiers: Observable<Coursier[]>
  coursier: Coursier = new Coursier();
  submitted = false;
  constructor(private coursierservice: CoursierService,
    private router: Router ,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   
  }
 
  
  newEmployee(): void {
    this.submitted = false;
    this.coursier = new Coursier();
  }

  save() {
    console.log("coursier ",this.coursier);
    
    this.coursierservice.createcoursier
    (this.coursier).subscribe(data => {
      console.log(this.coursier)
      this.coursier = new Coursier();

      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/coursiers']);
  }
  


}
