import {Component, OnInit} from '@angular/core';
import {
  ProjectsApiService
} from "../../../../../pages/main-page-enterprise/components/home/services/projects-api.service";
import {IProject} from "../../../../../pages/main-page-enterprise/components/home/models/iproject";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent implements OnInit{
  projects!: IProject[];
  filteredProjects: IProject[]=[];

  constructor(
    private _projectService: ProjectsApiService) {
  }

  filterProjects(type: string) {
    if (type === "Borrar Filtros") {
      this.filteredProjects = this.projects;
      return;
    }
    this.filteredProjects = this.projects.filter(project => project.type === type);
  }

  ngOnInit(): void {
    this._projectService.getProjectsByState("COMPLETADO").subscribe(response => {
      this.projects=response
      this.filteredProjects=this.projects
    })
  }
}
