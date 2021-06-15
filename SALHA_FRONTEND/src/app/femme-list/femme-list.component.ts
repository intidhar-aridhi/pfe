import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Femme } from '../femme';
import { FemmeService } from '../femme.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-femme-list',
  templateUrl: './femme-list.component.html',
  styleUrls: ['./femme-list.component.css']
})
export class FemmeListComponent implements OnInit {
  femmes:Observable<Femme[]>;

  constructor(public femmeService:FemmeService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.femmes = this.femmeService.getfemmelist();
  }
  deletefemme(id: number) {
    this.femmeService.deletefemme(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  femmeDetails(id: number){
    this.router.navigate(['rapport', id]);
  }

  updatefemme(id: number){
    this.router.navigate(['modifierfemme', id]);
  }


}
