import {IDeveloperProject} from "./ideveloper-project";

export interface IDeveloper {
  id: number,
  name: string,
  description: string,
  rating: number,
  profileImage: string,
  country: string,
  cellphone: string,
  email: string,
  completedProjects: number,
  skills: string,
  repository: IDeveloperProject[],
}
