import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page-developer',
  templateUrl: './main-page-developer.component.html',
  styleUrl: './main-page-developer.component.css'
})
export class MainPageDeveloperComponent {
  title = 'FromZero-App';

  isSidenavExpanded=false;
  screenWidth=0;

  onToggleSidenav(data:any){
    this.screenWidth=data.screenWidth;
    this.isSidenavExpanded = data.expanded;
    console.log(this.screenWidth);
  }

  getContentClass():string{
    let styleClass='';
    if(this.isSidenavExpanded && this.screenWidth >768 ) {
      styleClass = 'content-trimmed';
    }
    return styleClass;
  }
}
