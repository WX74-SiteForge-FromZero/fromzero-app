import {Component, OnInit} from '@angular/core';
import {ChatApiService} from "../../services/chat/chat-api.service";
import {IChat} from "../../models/ichat";
import {IMessage} from "../../models/imessage";
import {MessagesApiService} from "../../services/messages/messages-api.service";

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.css'
})
export class ChatPageComponent implements OnInit {

  chats: IChat[] = []
  messages: IMessage[] = [];
  accountType = ""
  selectedChat = 0
  userRecordId = ""

  constructor(
    private _messageService: MessagesApiService,
    private _chatService: ChatApiService) {
  }

  ngOnInit(): void {
    let userType = localStorage.getItem('accountType');
    let recordId = localStorage.getItem('recordId');
    this.accountType = userType ? userType.toString() : ""
    this.userRecordId = recordId ? recordId.toString() : ""
    if (this.accountType === "E") {
      this._chatService.getAllChatsByCompany(this.userRecordId).subscribe(response => {
        this.chats = response;
      })
    } else if (this.accountType === "D") {
      this._chatService.getAllChatsByDeveloper(this.userRecordId).subscribe(response => {
        this.chats = response;
      })
    }
  }

  openChat(chatId: number) {
    this.selectedChat = chatId
    this._messageService.getMessagesByChatId(chatId).subscribe(response => {
      this.messages = response
    })
  }

}
