import {Component, EventEmitter, Output} from '@angular/core';
import {ProfileService} from "../../../../core/services/profiles/profile.service";

interface SidenavToggle{
  screenWidth: number;
  expanded:boolean;
}

@Component({
  selector: 'app-sidenav-enterprise',
  templateUrl: './sidenav-enterprise.component.html',
  styleUrl: './sidenav-enterprise.component.css'
})
export class SidenavEnterpriseComponent {
  @Output() onToggleSideNav:EventEmitter<SidenavToggle> = new EventEmitter();

  user:any;
  expand=false;
  screenWidth=0;
  constructor(private _profileService:ProfileService) {
  }
  ngOnInit(){
    this.screenWidth=window.innerWidth;
    const userId = Number(localStorage.getItem('id'));
    this._profileService.getEnterpriseProfileById(userId).subscribe(profile => {
      this.user=profile;
    })
  }

  toggleExpand(){
    this.expand = !this.expand;
    this.onToggleSideNav.emit({
      screenWidth: this.screenWidth,
      expanded:this.expand
    })
  }

  logout(): void {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    localStorage.removeItem('accountType')
    localStorage.removeItem('userId');
  }

}
