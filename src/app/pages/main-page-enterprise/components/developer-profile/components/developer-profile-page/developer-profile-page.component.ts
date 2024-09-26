import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IDeveloperProject} from "../../model/ideveloper-project";
import {IDeveloperProfileTemp} from "../../../../../../core/models/ideveloper-profile";
import {ProfileService} from "../../../../../../core/services/profiles/profile.service";

@Component({
  selector: 'app-developer-profile-page',
  templateUrl: './developer-profile-page.component.html',
  styleUrl: './developer-profile-page.component.css'
})
export class DeveloperProfilePageComponent implements OnInit{
  developerProfile!:IDeveloperProfileTemp;
  developerRepository!: IDeveloperProject[];

  constructor(private route: ActivatedRoute,
              private _profilesService:ProfileService) {
  }

  ngOnInit(): void {
    let id :number
    this.route.params.subscribe(params=>{
      id = +params['developerId']
      this._profilesService.getDeveloperProfileById(id).subscribe(developer => {
        this.developerProfile=developer;
      })
    })
  }
}
