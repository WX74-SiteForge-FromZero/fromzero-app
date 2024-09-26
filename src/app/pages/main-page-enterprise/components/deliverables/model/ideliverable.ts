export interface IDeliverable {
  id:number,
  name:string,
  description:string,
  date:Date,
  state?:string,
  developerMessage?:string,
  project?:{
    name?:string,
    /*enterprise?:{
      enterpriseName?:string
    }*/
    company?:{
      companyName?:string,
    }
  }
}
