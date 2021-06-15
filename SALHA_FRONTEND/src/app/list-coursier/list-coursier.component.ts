import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Coursier } from '../coursier';
import { CoursierService } from '../coursier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-coursier',
  templateUrl: './list-coursier.component.html',
  styleUrls: ['./list-coursier.component.css']
})
export class ListCoursierComponent implements OnInit {
  coursiers:Observable<Coursier[]>;
  constructor(public coursierService:CoursierService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.coursiers = this.coursierService.getcoursierlist();
  }
  deletecoursier(id: number) {
    this.coursierService.deletecoursier(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

 rapportcoursier(id: number){
    this.router.navigate(['rapport', id]);
  }

  updatecoursier(id: number){
    this.router.navigate(['modifiercoursier', id]);
  }

}
