import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Gouvernorat } from '../gouvernorat';
import { GouvernoratService } from '../gouvernorat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-gouvernorats',
  templateUrl: './list-gouvernorats.component.html',
  styleUrls: ['./list-gouvernorats.component.css']
})
export class ListGouvernoratsComponent implements OnInit {
  gouvernorats:Observable<Gouvernorat[]>;
  constructor(public gouvernoratService:GouvernoratService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.gouvernorats = this.gouvernoratService.getlistgouvernorats();
  }
  deletegouvernorat(id: number) {
    this.gouvernoratService.deletegouvernorat(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


  updategouvernorat(id_U: number){
    this.router.navigate(['modifiergouvernorat', id_U]);
  }


}
