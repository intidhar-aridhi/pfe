import { Component, OnInit } from '@angular/core';
import { Femme } from '../femme';
import { FemmeService } from '../femme.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-femme-details',
  templateUrl: './femme-details.component.html',
  styleUrls: ['./femme-details.component.css']
})
export class FemmeDetailsComponent implements OnInit {

  id: number;
  femme: Femme;

  constructor(private route: ActivatedRoute,private router: Router,
    private femmeService: FemmeService) { }

  ngOnInit() {
    this.femme = new Femme();

    this.id = this.route.snapshot.params['id'];
    
    this.femmeService.getFemme(this.id)
      .subscribe(data => {
        console.log(data)
        this.femme = data[0];
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['femmes']);
  }

}
