import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProjectsApiService} from "../../../../main-page-enterprise/components/home/services/projects-api.service";

@Component({
  selector: 'app-apply-confirmation',
  templateUrl: './apply-confirmation.component.html',
  styleUrl: './apply-confirmation.component.css'
})
export class ApplyConfirmationComponent {
  constructor(public dialogRef: MatDialogRef<ApplyConfirmationComponent>,
              private projectsService:ProjectsApiService,
              @Inject(MAT_DIALOG_DATA)public data:{
                developerUserId:number,
                projectId:number
              }) {}

  apply(){
    this.projectsService.addCandidateToProject(this.data.projectId,this.data.developerUserId).subscribe(response=>{
      console.log(response)
      this.dialogRef.close();
    })
  }

  closeDialog(){
    this.dialogRef.close();
  }
}
