import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directive';

  skillsArr: Array<string> = ["HTML", "CSS", "JAVASCRIPT"]

  addSkillset(skill: string) {
    // console.log(skill);
    this.skillsArr.push(skill)
  }
  
}
