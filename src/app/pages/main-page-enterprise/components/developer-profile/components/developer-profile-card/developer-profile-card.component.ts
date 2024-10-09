import {Component, Input} from '@angular/core';
import {IDeveloperProfileTemp} from "../../../../../../core/models/ideveloper-profile";
import {Router} from "@angular/router";

@Component({
  selector: 'app-developer-profile-card',
  templateUrl: './developer-profile-card.component.html',
  styleUrl: './developer-profile-card.component.css'
})
export class DeveloperProfileCardComponent {
  @Input() perfilDeveloper!: IDeveloperProfileTemp ;

  constructor(private router:Router) {}

  goToMessage(){
    this.router.navigate(["/app/main/shared/message"])
  }
}
