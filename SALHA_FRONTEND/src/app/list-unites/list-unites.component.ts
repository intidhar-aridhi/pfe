import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Unite } from '../unite';
import { UniteService } from '../unite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-unites',
  templateUrl: './list-unites.component.html',
  styleUrls: ['./list-unites.component.css']
})
export class ListUnitesComponent implements OnInit {
  unites:Observable<Unite[]>;
  constructor(public uniteService:UniteService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.unites = this.uniteService.getunitelist();
  }
  deleteunite(id: number) {
    this.uniteService.deleteunite(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


  updateunite(id_U: number){
    this.router.navigate(['updateunite', id_U]);
  }


}
