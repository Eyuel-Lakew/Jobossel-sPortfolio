import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    constructor(private route: ActivatedRoute,private router: Router){}
   goskills(){
    this.router.navigate(['/skills'])
   }
}
