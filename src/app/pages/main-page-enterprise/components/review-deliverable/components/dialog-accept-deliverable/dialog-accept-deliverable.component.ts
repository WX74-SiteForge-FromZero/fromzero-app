import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DeliverablesApiService} from "../../../deliverables/services/deliverables-api.service";

@Component({
  selector: 'app-dialog-accept-deliverable',
  templateUrl: './dialog-accept-deliverable.component.html',
  styleUrl: './dialog-accept-deliverable.component.css'
})
export class DialogAcceptDeliverableComponent {
  constructor(public dialogRef:MatDialogRef<DialogAcceptDeliverableComponent>,
              private delvsApi:DeliverablesApiService,
              @Inject(MAT_DIALOG_DATA)public data:{deliverableId:number}) {
  }

  acceptDeliverable(){
    this.delvsApi.reviewDeliverable(this.data.deliverableId,true).subscribe((response:any)=>{
      this.dialogRef.close(response.state);
    })
  }

  rejectDeliverable(){
    this.delvsApi.reviewDeliverable(this.data.deliverableId,false).subscribe((response:any)=>{
      this.dialogRef.close(response.state);
    })

  }
}
