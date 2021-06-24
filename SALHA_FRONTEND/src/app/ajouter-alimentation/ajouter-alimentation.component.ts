import { Component, OnInit } from '@angular/core';
import { Alimentation } from '../alimentation';


import { AlimentationService } from '../alimentation.service';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-ajouter-alimentation',
  templateUrl: './ajouter-alimentation.component.html',
  styleUrls: ['./ajouter-alimentation.component.css']
})
export class AjouterAlimentationComponent implements OnInit {
  alimentations: Observable<Alimentation[]>
  alimentation: Alimentation = new Alimentation();
  submitted = false;
  constructor(private alimentationservice: AlimentationService,
    private router: Router ,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  newEmployee(): void {
    this.submitted = false;
    this.alimentation = new Alimentation();
  }
  save() {
    console.log("alimentation",this.alimentation);
    
    this.alimentationservice.createalimentation
    (this.alimentation).subscribe(data => {
      console.log(this.alimentation)
      this.alimentation = new Alimentation();

      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/alimentations']);
  }
  

}
