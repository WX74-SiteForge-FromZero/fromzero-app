import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IMessage} from "../model/imessage";
import {BaseService} from "../../../../core/services/shared/base.service";

@Injectable({
  providedIn: 'root'
})
export class MessagesApiService extends BaseService{
  url="";
  constructor(private http:HttpClient) {
    super();
    this.url = `${this.basePath}/messages`;
  }
  postMessage(message:any){
    return this.http.post<IMessage>(`${this.url}`,message);
  }
  getAllMessagesByRecipientId(id:number){
    return this.http.get<IMessage[]>(`${this.url}/recipient/${id}`);
  }
}
