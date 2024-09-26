import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {
  DeliverablesApiService
} from "../../../main-page-enterprise/components/deliverables/services/deliverables-api.service";
import {IDeliverable} from "../../../main-page-enterprise/components/deliverables/model/ideliverable";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-send-deliverable',
  templateUrl: './send-deliverable.component.html',
  styleUrl: './send-deliverable.component.css'
})
export class SendDeliverableComponent implements OnInit {
  deliverable!:IDeliverable;
  projectName?:string;
  enterpriseName?:string;
  developerMessage=new FormControl("",[Validators.required]);
  deliverableId?: number;

  constructor(private route: ActivatedRoute,private delvsApi:DeliverablesApiService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.deliverableId = +params['deliverableId'];
      this.delvsApi.getDeliverableById(this.deliverableId).subscribe(deliverable=>{
        this.deliverable=deliverable;
        this.projectName=deliverable?.project?.name;
        this.enterpriseName=deliverable?.project?.company?.companyName;
      })
    })
  }

  submitDeliverable(){
    if (!(this.developerMessage.valid || this.developerMessage.pristine)){
      console.log("Input no valido")
    }else{
      let deliverableId=Number(this.deliverableId)
      let message = this.developerMessage.value??'';
      this.delvsApi.sendDeliverable(deliverableId,message).subscribe(response=>{
        console.log(response)
      })
    }
  }

}
