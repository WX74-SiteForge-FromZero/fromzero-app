import {Component, OnInit} from '@angular/core';
import {IProject} from "../../models/iproject";
import {ProjectsApiService} from "../../services/projects-api.service";
import {IEnterpriseProfileTemp} from "../../../../../../core/models/ienterprise-profile";
import {ProfileService} from "../../../../../../core/services/profiles/profile.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent  implements OnInit {
  perfilUsuario!: IEnterpriseProfileTemp;
  userProjects!: IProject[];
  constructor(
    private _projectsService:ProjectsApiService,
    private _profilesService:ProfileService
    ) {
  }

  ngOnInit(): void {
    const userId = localStorage.getItem('id');
    if (userId) {
      this._profilesService.getEnterpriseProfileById(+userId).subscribe(profile => {
        this.perfilUsuario = profile;
      });
      this._projectsService.getAllProjectsByEnterpriseUserId(+userId).subscribe(projects=>{
        this.userProjects=projects;
      })
    }
  }
}
