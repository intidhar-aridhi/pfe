import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Femme } from '../femme';
import { FemmeService } from '../femme.service';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-femme-list',
  templateUrl: './femme-list.component.html',
  styleUrls: ['./femme-list.component.css']
})
export class FemmeListComponent implements OnInit {
  femmes:Observable<Femme[]>;
closeResult: string;
  constructor(public femmeService:FemmeService,private router:Router,private modalService: NgbModal) { }

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
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
      
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
