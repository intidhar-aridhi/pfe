import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Gouvernorat } from '../gouvernorat';
import { GouvernoratService } from '../gouvernorat.service';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-list-gouvernorats',
  templateUrl: './list-gouvernorats.component.html',
  styleUrls: ['./list-gouvernorats.component.css']
})
export class ListGouvernoratsComponent implements OnInit {
  gouvernorats:Observable<Gouvernorat[]>;
  closeResult: string;
  constructor(public gouvernoratService:GouvernoratService,private router:Router,private modalService: NgbModal) { }

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
