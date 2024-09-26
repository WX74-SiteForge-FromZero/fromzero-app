import {Component, Input} from '@angular/core';
import {IDeveloperProject} from "../../model/ideveloper-project";

@Component({
  selector: 'app-developer-repository-card',
  templateUrl: './developer-repository-card.component.html',
  styleUrl: './developer-repository-card.component.css'
})
export class DeveloperRepositoryCardComponent {
  emptyProjects = new Array(5);
  @Input() perfilDeveloperRepository!: IDeveloperProject[];

}
