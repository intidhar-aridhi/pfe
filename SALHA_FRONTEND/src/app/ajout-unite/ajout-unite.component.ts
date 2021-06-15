import { Component, OnInit } from '@angular/core';
import { Unite } from '../unite';


import { UniteService } from '../unite.service';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajout-unite',
  templateUrl: './ajout-unite.component.html',
  styleUrls: ['./ajout-unite.component.css']
})
export class AjoutUniteComponent implements OnInit {
  unites: Observable<Unite[]>
  unite: Unite = new Unite();
  submitted = false;
  constructor(private uniteservice: UniteService,
    private router: Router ,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  
  newEmployee(): void {
    this.submitted = false;
    this.unite = new Unite();
  }

  save() {
    console.log("unite",this.unite);
    
    this.uniteservice.createunite
    (this.unite).subscribe(data => {
      console.log(this.unite)
      this.unite = new Unite();

      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/unites']);
  }
  


}
