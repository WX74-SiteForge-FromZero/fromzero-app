import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  title = 'FromZero-App';

  isSidenavExpanded=false;
  screenWidth=0;

  getContentClass():string{
    let styleClass='';
    if(this.isSidenavExpanded && this.screenWidth >768 ) {
      styleClass = 'content-trimmed';
    }
    return styleClass;
  }
}
