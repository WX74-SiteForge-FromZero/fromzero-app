import {Component, OnInit} from '@angular/core';
import {MessagesApiService} from "../../services/messages-api.service";
import {IMessage} from "../../model/imessage";

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.css'
})
export class InboxComponent implements OnInit{
  messagesList!:IMessage[];
  constructor(private messagesService:MessagesApiService) {
  }
  ngOnInit(){
    let recipientId = Number(localStorage.getItem('userId'));
    this.messagesService.getAllMessagesByRecipientId(recipientId).subscribe(response=>{
      this.messagesList=response;
      this.messagesList.reverse();
    })
  }
}
