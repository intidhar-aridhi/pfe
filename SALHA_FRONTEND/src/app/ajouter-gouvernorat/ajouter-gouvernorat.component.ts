import { Component, OnInit } from '@angular/core';
import { Gouvernorat } from '../gouvernorat';


import { GouvernoratService } from '../gouvernorat.service';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajouter-gouvernorat',
  templateUrl: './ajouter-gouvernorat.component.html',
  styleUrls: ['./ajouter-gouvernorat.component.css']
})
export class AjouterGouvernoratComponent implements OnInit {
  gouvernorats: Observable<Gouvernorat[]>
  gouvernorat: Gouvernorat = new Gouvernorat();
  submitted = false;
  constructor(private gouvernoratservice: GouvernoratService,
    private router: Router ,private formBuilder: FormBuilder) { }

    ngOnInit(): void {
    }
    
    newEmployee(): void {
      this.submitted = false;
      this.gouvernorat = new Gouvernorat();
    }
  
    save() {
      console.log("gouvernorat",this.gouvernorat);
      
      this.gouvernoratservice.creategouvernorat
      (this.gouvernorat).subscribe(data => {
        console.log(this.gouvernorat)
        this.gouvernorat = new Gouvernorat();
  
        this.gotoList();
      }, 
      error => console.log(error));
    }
  
    onSubmit() {
      this.submitted = true;
      this.save();    
    }
  
    gotoList() {
      this.router.navigate(['/gouvernorats']);
    }
    
  
  
  }
  