import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DeliverablesApiService} from "../../services/deliverables-api.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogAddDeliverableComponent} from "../dialog/dialog-add-deliverable.component";
import {FormControl} from "@angular/forms";
import {IDeliverable} from "../../model/ideliverable";

@Component({
  selector: 'app-deliverables',
  templateUrl: './deliverables.component.html',
  styleUrl: './deliverables.component.css'
})
export class DeliverablesComponent implements OnInit {

  deliverables!:IDeliverable[];

  deliverableCreated?:any;
  projectId?: number;

  name=new FormControl('');
  description=new FormControl('');
  exp_date=new FormControl(new Date());

  constructor(private route: ActivatedRoute,
              private delvsApi: DeliverablesApiService,
              public dialog:MatDialog) {
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.projectId = +params['projectId'];

      this.delvsApi.getAllDeliverablesByProjectId(this.projectId).subscribe(deliverables=>{
        this.deliverables=deliverables;
      })
    })
  }

  openDialog(){
    const count=this.deliverables.length+1;
    const dialogRef=this.dialog.open(DialogAddDeliverableComponent, {
      data:{
        deliverableNumber:count,
        delv_name:this.name,
        delv_description:this.description,
        delv_exp_date:this.exp_date,
      }
    })
    dialogRef.afterClosed().subscribe(result=>{

      if (result !== undefined) {

        if (result.delv_name.value && result.delv_description.value && result.delv_exp_date.value) {

          this.deliverableCreated = {
            id: count,
            name: result.delv_name.value,
            description: result.delv_description.value,
            date: result.delv_exp_date.value,
            projectId: this.projectId
          }

          this.delvsApi.postDeliverable(this.deliverableCreated).subscribe(response=>{
            console.log(response)
          })
        }else console.error("Datos no validos")
      }

    })
  }

  goToReviewDelv(deliverableId:number){
    return ['/app','main',this.projectId,'deliverables',deliverableId]
  }
}
