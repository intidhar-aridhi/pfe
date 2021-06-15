import { Component, OnInit } from '@angular/core';
import { Unite } from '../unite';
import { UniteService } from '../unite.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-unite',
  templateUrl: './update-unite.component.html',
  styleUrls: ['./update-unite.component.css']
})
export class UpdateUniteComponent implements OnInit {
  id: number;
  unite: Unite;
 
  constructor(private route: ActivatedRoute,private router: Router,
    public femmeService: UniteService) { }

  ngOnInit(): void {
    this.unite = new Unite();

    this.id = this.route.snapshot.params['id'];
    
    this.femmeService.getunite(this.id)
      .subscribe(data => {
        

        this.unite = data[0];
        
        

        console.log("++++++++++uniteAvantModification+++++++",this.unite);
      }, error => console.log(error));
  }
  updateUnite() {
    console.log(this.id);
    console.log("**********UniteApresModification***********",this.unite);
    let data= { 
    id_U:this.id,
    nom_U:this.unite.nom_U,
    image_U:this.unite.image_U
    

    }
    console.log(data);
    this.femmeService.updateunite(data)
      .subscribe(data => {
        console.log(data);
        this.unite = new Unite();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateUnite();    
  }

  gotoList() {
    this.router.navigate(['/unites']);
  }

}
