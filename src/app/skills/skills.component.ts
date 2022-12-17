import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  constructor(private route: Router){}
  
  learnFrontend(){
    this.route.navigateByUrl("https://developer.mozilla.org/en-US/")
  }
  learnBackend(){
    this.route.navigateByUrl("https://docs.djangoproject.com/en/4.1/")
  }
  learnMachine(){
    this.route.navigateByUrl("https://pandas.pydata.org/docs/")
  }
}
