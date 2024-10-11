import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../../core/services/shared/base.service";
import {IChat} from "../../models/ichat";

@Injectable({
  providedIn: 'root'
})
export class ChatApiService extends BaseService{
  url=""
  constructor(private http:HttpClient) {
    super()
    this.url = `${this.basePath}/chat`;
  }
  createChat(developerRecordId:string,companyRecordId:string){
    return this.http.post<IChat>(`${this.url}/chats/create`,{developerRecordId,companyRecordId})
  }
  getAllChatsByDeveloper(developerRecordId:string){
    return this.http.get<IChat[]>(`${this.url}/developer/${developerRecordId}`)
  }
  getAllChatsByCompany(companyRecordId:string){
    return this.http.get<IChat[]>(`${this.url}/company/${companyRecordId}`)
  }
}
