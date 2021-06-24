import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Unite } from '../unite';
import { UniteService } from '../unite.service';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-list-unites',
  templateUrl: './list-unites.component.html',
  styleUrls: ['./list-unites.component.css']
})
export class ListUnitesComponent implements OnInit {
  unites:Observable<Unite[]>;
  closeResult: string;
  constructor(public uniteService:UniteService,private router:Router,private modalService: NgbModal) { }

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
