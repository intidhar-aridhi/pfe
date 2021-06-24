import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Alimentation } from '../alimentation';
import { AlimentationService } from '../alimentation.service';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-list-alimentation',
  templateUrl: './list-alimentation.component.html',
  styleUrls: ['./list-alimentation.component.css']
})
export class ListAlimentationComponent implements OnInit {
  alimentations:Observable<Alimentation[]>;
closeResult: string;
  constructor(public alimentationService:AlimentationService,private router:Router,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.alimentations = this.alimentationService.getlistalimentation();
  }
  deletealimentation(id: number) {
    this.alimentationService.deletealimentation(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
         
        },
        error => console.log(error));
  }
  updatealimentation(id: number){
    this.router.navigate(['modifieralimentation', id]);
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
