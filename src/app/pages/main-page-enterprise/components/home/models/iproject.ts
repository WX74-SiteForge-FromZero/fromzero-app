import {ICandidate} from "./icandidate";
import {IProgrammingLanguages} from "./iprogramming-languages";
import {IFramework} from "./iframework";

export interface IProject {
  id:number,
  name:string,
  description:string,
  state:string,
  progress:number,
  //ownerId:number,
  company:{id:number},
  developer:{id:number},
  candidates:ICandidate[],
  /*languages:IProgrammingLanguages[],
  frameworks:IFramework[],*/
  languages:string[],
  frameworks:string[],
  type:string,
  budget:string,
  methodologies:string
}
