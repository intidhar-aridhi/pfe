import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Coursier } from '../coursier';
import { CoursierService } from '../coursier.service';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-list-coursier',
  templateUrl: './list-coursier.component.html',
  styleUrls: ['./list-coursier.component.css']
})
export class ListCoursierComponent implements OnInit {
  coursiers:Observable<Coursier[]>;
  closeResult: string;
  constructor(public coursierService:CoursierService,private router:Router,private modalService: NgbModal) { }

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
