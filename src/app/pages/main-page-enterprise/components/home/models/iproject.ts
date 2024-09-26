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
  company:{
    id:number,
    companyName:string,
    profileImgUrl:string
  },
  developer:{
    id:number,
    firstName:string,
    lastName:string,
    profileImgUrl:string
  },
  candidates:ICandidate[],
  /*languages:IProgrammingLanguages[],
  frameworks:IFramework[],*/
  languages:string[],
  frameworks:string[],
  type:string,
  budget:string,
  methodologies:string
}
