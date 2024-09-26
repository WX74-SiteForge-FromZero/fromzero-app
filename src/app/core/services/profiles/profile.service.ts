import { Injectable } from '@angular/core';
import {BaseService} from "../shared/base.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IEnterpriseProfileTemp} from "../../models/ienterprise-profile";
import {IDeveloperProfileTemp} from "../../models/ideveloper-profile";

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseService{

  url:string ="";

  constructor(private _http: HttpClient) {
    super();
    this.url=`${this.basePath}/profiles/`;
  }

  getAllDevelopers(){
    return this._http.get<IDeveloperProfileTemp[]>(this.url+'developers',this.httpOptions)
  }

  getEnterpriseProfileById(id: number): Observable<IEnterpriseProfileTemp> {
    return this._http.get<IEnterpriseProfileTemp>(this.url+'company/profile/'+id,this.httpOptions);
  }

  getDeveloperProfileById(id: number): Observable<IDeveloperProfileTemp> {
    return this._http.get<IDeveloperProfileTemp>(this.url + 'developer/profile/' + id,this.httpOptions);
  }

  updateDeveloperProfile(id: number, updateDeveloper: any): Observable<any>{
    const url = this.url + 'developer/profile/' + id;
    return this._http.put(url, updateDeveloper,this.httpOptions);
  }

  updateEnterpriseProfile(id: number, updateEnterprise: any): Observable<any>{
    const url = this.url + 'company/profile/' + id;
    return this._http.put(url, updateEnterprise,this.httpOptions);
  }

  /*getDeveloperProfileIdByEmail(email:string){
    return this._http.get(`${this.url}developer/${email}`)
  }

  getCompanyProfileIdByEmail(email:string){
    return this._http.get(`${this.url}company/${email}`)
  }*/
//----------------
  getCompanyIdByEmail(email:string){
    return this._http.get(`${this.url}company-id/${email}`)
  }
  getDeveloperIdByEmail(email:string){
    return this._http.get(`${this.url}developer-id/${email}`)
  }

  getDeveloperRecordIdByEmail(email:string){
    return this._http.get(`${this.url}developer/${email}`)
  }
  getCompanyRecordIdByEmail(email:string){
    return this._http.get(`${this.url}company/${email}`)
  }
}
