import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ICandidate} from "../../../../../main-page-enterprise/components/home/models/icandidate";

@Component({
  selector: 'app-candidates-project-dialog-developer',
  templateUrl: './candidates-project-dialog-developer.component.html',
  styleUrl: './candidates-project-dialog-developer.component.css'
})
export class CandidatesProjectDialogDeveloperComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {candidates: ICandidate[]}) { }


}
