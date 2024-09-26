import {Component} from '@angular/core';
import {AuthApiService} from "../../../auth/services/auth-api.service";
import {ProfileService} from "../../../../core/services/profiles/profile.service";

@Component({
  selector: 'app-sidenav-developer',
  templateUrl: './sidenav-developer.component.html',
  styleUrl: './sidenav-developer.component.css'
})
export class SidenavDeveloperComponent {
  user:any;
  expand=false;
  screenWidth=0;
  constructor(
    private authService:AuthApiService,
    private _profileService:ProfileService) {
  }
  ngOnInit(){
    this.screenWidth=window.innerWidth;
    const userId = Number(localStorage.getItem('id'));
    this._profileService.getDeveloperProfileById(userId).subscribe(profile => {
      this.user=profile;
    })
  }
  logout(): void {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    localStorage.removeItem('accountType')
    localStorage.removeItem('userId')
  }
  toggleExpand(){
    this.expand = !this.expand;
  }

}
