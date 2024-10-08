import {Component, OnInit} from '@angular/core';
import {DialogAcceptDeliverableComponent} from "../dialog-accept-deliverable/dialog-accept-deliverable.component";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute} from "@angular/router";
import {DeliverablesApiService} from "../../../deliverables/services/deliverables-api.service";
import {IDeliverable} from "../../../deliverables/model/ideliverable";

@Component({
  selector: 'app-deliverable',
  templateUrl: './deliverable.component.html',
  styleUrl: './deliverable.component.css'
})
export class DeliverableComponent implements OnInit{
  deliverableId?: number;
  deliverable!:IDeliverable;

  constructor(public dialog: MatDialog,private route: ActivatedRoute,private delvsApi:DeliverablesApiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.deliverableId= +params['deliverableId'];
      this.delvsApi.getDeliverableById(this.deliverableId).subscribe(deliverable=>{
        this.deliverable=deliverable;
      })
    })
  }

  openDialog() {
    this.dialog.open(DialogAcceptDeliverableComponent,{
      data:{
        deliverableId:Number(this.deliverableId)
      }
    });
  }
}
