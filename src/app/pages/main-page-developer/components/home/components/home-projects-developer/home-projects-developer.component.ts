import {Component, Input} from '@angular/core';
import {IProject} from "../../../../../main-page-enterprise/components/home/models/iproject";
import {MatDialog} from "@angular/material/dialog";
import {
  CandidatesProjectDialogDeveloperComponent
} from "../candidates-project-dialog-developer/candidates-project-dialog-developer.component";

@Component({
  selector: 'app-home-projects-developer',
  templateUrl: './home-projects-developer.component.html',
  styleUrl: './home-projects-developer.component.css'
})
export class HomeProjectsDeveloperComponent {
  emptyProjects = new Array(5);
  @Input() perfilUsuarioProjects!: IProject[];

  constructor(public dialog: MatDialog) {
    console.log(this.perfilUsuarioProjects)
  }

  openDialog(project: IProject) {
    this.dialog.open(CandidatesProjectDialogDeveloperComponent, {
      data: {
        candidates: project.candidates
      }
    });
  }

  goToDeliverables(projectId:number){
    return ['/app-developer','main',projectId,'deliverables']
  }

}
