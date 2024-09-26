import {Component, Input} from '@angular/core';
import {IDeveloperProfileTemp} from "../../../../../../core/models/ideveloper-profile";

@Component({
  selector: 'app-developer-profile-card',
  templateUrl: './developer-profile-card.component.html',
  styleUrl: './developer-profile-card.component.css'
})
export class DeveloperProfileCardComponent {
  @Input() perfilDeveloper!: IDeveloperProfileTemp ;

  constructor() {}
}
