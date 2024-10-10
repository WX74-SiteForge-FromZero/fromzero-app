import {Component, Input} from '@angular/core';
import {ICompanyProfile} from "../../../../../../core/models/icompany-profile";
import {Router} from "@angular/router";

@Component({
  selector: 'app-project-profile-card',
  templateUrl: './project-profile-card.component.html',
  styleUrl: './project-profile-card.component.css'
})
export class ProjectProfileCardComponent {
  @Input() perfilEnterprise!: ICompanyProfile;

  constructor(private router:Router) { }

  goToMessage(){
    this.router.navigate(["/app-developer/main/shared/message"])
  }

}
