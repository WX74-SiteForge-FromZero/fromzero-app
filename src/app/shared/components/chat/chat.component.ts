import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IChat} from "../../models/ichat";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {

  @Input() chat!:IChat
  @Input() currentUser!:string
  @Output() openChat = new EventEmitter<number>()

  constructor() {
  }

  ngOnInit(): void {

  }

  selectedChat(chatId:number){
    this.openChat.emit(chatId);
  }

}
