import { Component, OnInit } from '@angular/core';
import { Coursier } from '../coursier';
import { CoursierService } from '../coursier.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rapport-coursier',
  templateUrl: './rapport-coursier.component.html',
  styleUrls: ['./rapport-coursier.component.css']
})
export class RapportCoursierComponent implements OnInit {
  id: number;
  coursier: Coursier;

  constructor(private route: ActivatedRoute,private router: Router,
    private coursierservice: CoursierService) { }

  ngOnInit(): void {
    this.coursier = new Coursier();

    this.id = this.route.snapshot.params['id'];
    
    this.coursierservice.getcoursier(this.id)
      .subscribe(data => {
        console.log(data)
        this.coursier = data[0];
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['coursiers']);
  }

}